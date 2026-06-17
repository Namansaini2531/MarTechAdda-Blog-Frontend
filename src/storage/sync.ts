// Storage Sync Utilities for HoverBar Extension
// Integrates chrome.storage.sync with a fallback to localStorage for local development.

export interface HoverBarSettings {
  excludedIds: string[];
  pinnedIds: string[];
  customOrder: string[];
  collapsedFolderIds: string[];
}

const DEFAULT_SETTINGS: HoverBarSettings = {
  excludedIds: [],
  pinnedIds: [],
  customOrder: [],
  collapsedFolderIds: [],
};

const isExtension = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync;

export async function getSettings(): Promise<HoverBarSettings> {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.sync.get(DEFAULT_SETTINGS, (items: any) => {
        resolve(items as HoverBarSettings);
      });
    });
  } else {
    try {
      const data = localStorage.getItem('hoverbar_settings');
      return data ? JSON.parse(data) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  }
}

export async function saveSettings(settings: Partial<HoverBarSettings>): Promise<void> {
  const current = await getSettings();
  const updated = { ...current, ...settings };

  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.sync.set(updated, () => {
        resolve();
      });
    });
  } else {
    localStorage.setItem('hoverbar_settings', JSON.stringify(updated));
  }
}
