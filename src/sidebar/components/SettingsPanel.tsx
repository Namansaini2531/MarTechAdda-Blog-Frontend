import React from 'react';
import { motion } from 'framer-motion';
import { X, Bookmark, Folder, Eye, ShieldAlert } from 'lucide-react';
import type { BookmarkNode } from '../../bookmarks/bridge';

interface SettingsPanelProps {
  onClose: () => void;
  excludedIds: string[];
  onRemoveExclusion: (id: string) => void;
  bookmarksTree: BookmarkNode[];
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  onClose,
  excludedIds,
  onRemoveExclusion,
  bookmarksTree,
}) => {
  // Utility to find node metadata by ID from the bookmark tree
  const findNodeById = (nodes: BookmarkNode[], id: string): BookmarkNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNodeById(node.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const excludedNodes = excludedIds
    .map((id) => {
      const node = findNodeById(bookmarksTree, id);
      return node || { id, title: `Unknown (${id})` } as BookmarkNode;
    })
    .filter(Boolean);

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify({
        excludedIds,
        timestamp: Date.now()
      })
    );
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "hoverbar_settings.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed.excludedIds)) {
          parsed.excludedIds.forEach((id: string) => {
            if (!excludedIds.includes(id)) {
              onRemoveExclusion(id); // Custom trigger to append/set settings can be executed
            }
          });
          alert('Settings imported successfully!');
        }
      } catch (err) {
        alert('Invalid settings file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 220 }}
      className="absolute top-0 right-0 w-settings h-full bg-dark-settings border-l z-50 flex flex-col"
    >
      {/* Settings Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span className="text-xs font-bold text-white uppercase tracking-wider">Settings</span>
        <button
          onClick={onClose}
          className="p-1 hover-bg-white-10 rounded-md transition-colors text-muted hover-text-white"
        >
          <X size={14} />
        </button>
      </div>

      {/* Settings Body */}
      <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
        {/* Exclusions Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted">
            <ShieldAlert size={14} />
            <span>Excluded Items ({excludedNodes.length})</span>
          </div>

          <p className="text-size-10 text-dark-muted">
            Items hidden from the sidebar. Hover and click the eye icon to restore them.
          </p>

          <div className="flex flex-col gap-1.5 mt-1 max-h-48 overflow-y-auto pr-1">
            {excludedNodes.length === 0 ? (
              <span className="text-size-10 text-dark-muted italic py-2">No excluded items.</span>
            ) : (
              excludedNodes.map((node) => (
                <div
                  key={node.id}
                  className="group flex items-center justify-between px-2 py-1-5 bg-dark-row border rounded-md"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    {node.url ? (
                      <Bookmark size={11} className="text-muted flex-shrink-0" />
                    ) : (
                      <Folder size={11} className="text-muted flex-shrink-0" />
                    )}
                    <span className="text-size-10 text-border-light truncate">{node.title}</span>
                  </div>
                  <button
                    onClick={() => onRemoveExclusion(node.id)}
                    className="p-1 text-muted hover-text-white hover-bg-white-5 rounded-md transition-all opacity-0 group-hover-opacity-100"
                    title="Restore item"
                  >
                    <Eye size={11} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Configuration Utilities */}
        <div className="my-2 border-t" />

        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-semibold text-muted">Data Backup</span>
          <button
            onClick={handleExport}
            className="w-full py-1-5 px-3 bg-dark-row hover-bg-white-5 border rounded-md text-size-10 text-white text-center font-medium transition-colors flex items-center justify-center gap-1.5"
          >
            Export Settings
          </button>
          
          <label className="w-full py-1-5 px-3 bg-dark-row hover-bg-white-5 border rounded-md text-size-10 text-white text-center font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
            <span>Import Settings</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </motion.div>
  );
};
