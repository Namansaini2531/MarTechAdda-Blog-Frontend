// Background Service Worker for HoverBar
// Implements Manifest V3 messaging interfaces and listens to chrome.bookmarks events.

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'GET_BOOKMARKS') {
    chrome.bookmarks.getTree((tree) => {
      sendResponse(tree);
    });
    return true; // Keep message channel open for asynchronous sendResponse
  }

  if (message.type === 'OPEN_TAB') {
    chrome.tabs.create({ url: message.url, active: message.active ?? true });
    sendResponse({ success: true });
    return;
  }

  if (message.type === 'OPEN_WINDOW') {
    chrome.windows.create({ url: message.url, type: 'normal' });
    sendResponse({ success: true });
    return;
  }

  if (message.type === 'DELETE_BOOKMARK') {
    chrome.bookmarks.remove(message.id, () => {
      sendResponse({ success: !chrome.runtime.lastError });
    });
    return true;
  }

  if (message.type === 'CREATE_BOOKMARK') {
    chrome.bookmarks.create(
      { parentId: message.parentId, title: message.title, url: message.url },
      (node) => {
        sendResponse(node);
      }
    );
    return true;
  }
});

// Broadcast bookmark changes to all active content scripts
function notifyBookmarksChanged() {
  chrome.tabs.query({}, (tabs) => {
    for (const tab of tabs) {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { type: 'BOOKMARKS_CHANGED' }).catch(() => {
          // Ignore errors for tabs where our content script is not loaded
        });
      }
    }
  });
}

// Subscribe background listeners to chrome.bookmarks API events
chrome.bookmarks.onCreated.addListener(notifyBookmarksChanged);
chrome.bookmarks.onRemoved.addListener(notifyBookmarksChanged);
chrome.bookmarks.onChanged.addListener(notifyBookmarksChanged);
chrome.bookmarks.onMoved.addListener(notifyBookmarksChanged);
chrome.bookmarks.onChildrenReordered.addListener(notifyBookmarksChanged);
chrome.bookmarks.onImportEnded.addListener(notifyBookmarksChanged);
