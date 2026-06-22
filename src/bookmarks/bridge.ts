// Bookmark API Bridge
// Provides communication between the React UI (Content Script) and the Background worker,
// with a high-fidelity mock generator for local testing.

export interface BookmarkNode {
  id: string;
  parentId?: string;
  index?: number;
  url?: string;
  title: string;
  dateAdded?: number;
  children?: BookmarkNode[];
}

export type ExtensionMessage =
  | { type: 'GET_BOOKMARKS' }
  | { type: 'OPEN_TAB'; url: string; active?: boolean }
  | { type: 'OPEN_WINDOW'; url: string }
  | { type: 'DELETE_BOOKMARK'; id: string }
  | { type: 'CREATE_BOOKMARK'; parentId: string; title: string; url?: string };

const isExtension = typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage;

// Generates a mock bookmark hierarchy with ~1,200 bookmarks to test virtualization and performance.
function generateMockBookmarks(): BookmarkNode[] {
  const root: BookmarkNode = {
    id: '0',
    title: 'Root',
    children: [
      {
        id: '1',
        title: 'Bookmarks Bar',
        parentId: '0',
        children: [
          { id: '10', title: 'Google', url: 'https://google.com', parentId: '1' },
          { id: '11', title: 'GitHub', url: 'https://github.com', parentId: '1' },
          { id: '12', title: 'Notion', url: 'https://notion.so', parentId: '1' },
          { id: '13', title: 'Linear', url: 'https://linear.app', parentId: '1' },
          { id: '14', title: 'Vercel', url: 'https://vercel.com', parentId: '1' },
          { id: '15', title: 'Vite', url: 'https://vitejs.dev', parentId: '1' },
          { id: '16', title: 'Framer Motion', url: 'https://framer.com/motion', parentId: '1' },
          {
            id: '20',
            title: 'Development Resources',
            parentId: '1',
            children: [
              { id: '201', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', parentId: '20' },
              { id: '202', title: 'Stack Overflow', url: 'https://stackoverflow.com', parentId: '20' },
              { id: '203', title: 'React Documentation', url: 'https://react.dev', parentId: '20' },
              { id: '204', title: 'Tailwind CSS Docs', url: 'https://tailwindcss.com', parentId: '20' },
              { id: '205', title: 'TypeScript Handbook', url: 'https://typescriptlang.org', parentId: '20' },
            ]
          },
          {
            id: '30',
            title: 'Social & Media',
            parentId: '1',
            children: [
              { id: '301', title: 'YouTube', url: 'https://youtube.com', parentId: '30' },
              { id: '302', title: 'Twitter / X', url: 'https://x.com', parentId: '30' },
              { id: '303', title: 'Reddit', url: 'https://reddit.com', parentId: '30' },
            ]
          }
        ]
      },
      {
        id: '2',
        title: 'Other Bookmarks',
        parentId: '0',
        children: []
      }
    ]
  };

  // Generate a massive folder with 1,000 items to test virtualization
  const massiveFolder: BookmarkNode = {
    id: 'massive_1000',
    title: '⚡ Performance Test (1,000+ items)',
    parentId: '1',
    children: []
  };

  const domains = ['dev.to', 'medium.com', 'news.ycombinator.com', 'wikipedia.org', 'npmtrends.com', 'caniuse.com', 'github.com', 'figma.com'];
  for (let i = 1; i <= 1000; i++) {
    const domain = domains[i % domains.length];
    massiveFolder.children!.push({
      id: `mock_bookmark_${i}`,
      title: `Virtual Bookmark Item #${i} - Reference to ${domain}`,
      url: `https://${domain}/post-${i}`,
      parentId: 'massive_1000'
    });
  }

  // Add nesting tests
  const nestedLevel1: BookmarkNode = {
    id: 'nest_1',
    title: 'Nested Level 1',
    parentId: '1',
    children: [
      {
        id: 'nest_2',
        title: 'Nested Level 2',
        parentId: 'nest_1',
        children: [
          {
            id: 'nest_3',
            title: 'Nested Level 3 (Deep)',
            parentId: 'nest_2',
            children: [
              { id: 'nest_deep_bm', title: 'Deep Web Link', url: 'https://example.com/deep', parentId: 'nest_3' }
            ]
          }
        ]
      }
    ]
  };

  root.children![0].children!.push(massiveFolder);
  root.children![0].children!.push(nestedLevel1);

  return [root];
}

export async function fetchBookmarksTree(): Promise<BookmarkNode[]> {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ type: 'GET_BOOKMARKS' }, (response) => {
        if (chrome.runtime.lastError) {
          console.warn('Error fetching bookmarks:', chrome.runtime.lastError.message);
          resolve(generateMockBookmarks());
        } else {
          resolve(response || []);
        }
      });
    });
  } else {
    // Return mock data for local browser testing
    return new Promise((resolve) => {
      setTimeout(() => resolve(generateMockBookmarks()), 100);
    });
  }
}

export function openBookmark(url: string, behavior: 'current' | 'tab' | 'window' = 'tab') {
  if (isExtension) {
    if (behavior === 'window') {
      chrome.runtime.sendMessage({ type: 'OPEN_WINDOW', url });
    } else {
      chrome.runtime.sendMessage({ type: 'OPEN_TAB', url, active: behavior === 'tab' });
    }
  } else {
    if (behavior === 'window') {
      window.open(url, '_blank', 'width=1020,height=720');
    } else {
      window.open(url, '_blank');
    }
  }
}

export async function deleteBookmark(id: string): Promise<boolean> {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ type: 'DELETE_BOOKMARK', id }, (response) => {
        resolve(!!response);
      });
    });
  } else {
    console.log(`Mock delete bookmark: ${id}`);
    return Promise.resolve(true);
  }
}

// Subscribe to bookmark changes in the background (sends message to content script)
export function subscribeToBookmarkUpdates(callback: () => void): () => void {
  if (!isExtension) return () => {};

  const listener = (message: any) => {
    if (message.type === 'BOOKMARKS_CHANGED') {
      callback();
    }
  };

  chrome.runtime.onMessage.addListener(listener);
  return () => {
    chrome.runtime.onMessage.removeListener(listener);
  };
}
