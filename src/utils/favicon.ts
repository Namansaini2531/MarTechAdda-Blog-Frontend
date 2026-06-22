// Favicon Helper Utility
// Resolves bookmark favicons dynamically with a fallback system.

const isExtension = typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL;

/**
 * Returns a URL for the favicon of a given page.
 * If running in a Chrome Extension, it uses the MV3 secure favicon service.
 * Otherwise, it uses Google's favicon redirect service with local fallbacks.
 */
export function getFaviconUrl(pageUrl?: string): string {
  if (!pageUrl) return '';

  if (isExtension) {
    try {
      // Chrome extension secure favicon path
      const url = new URL(chrome.runtime.getURL('/_favicon/'));
      url.searchParams.set('pageUrl', pageUrl);
      url.searchParams.set('size', '32');
      return url.toString();
    } catch {
      // Fallback
    }
  }

  // Fallback to Google Favicon service for web testing
  try {
    const url = new URL(pageUrl);
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=32`;
  } catch {
    return '';
  }
}

/**
 * Extracts a neat single-character fallback representing a domain or title.
 */
export function getFallbackLetter(title: string, url?: string): string {
  if (url) {
    try {
      const hostname = new URL(url).hostname.replace('www.', '');
      if (hostname) return hostname.charAt(0).toUpperCase();
    } catch {
      // Ignore URL parse error
    }
  }
  return title ? title.trim().charAt(0).toUpperCase() : 'B';
}
