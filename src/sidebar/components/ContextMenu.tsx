import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Pin, ShieldAlert } from 'lucide-react';

export interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
  isFolder: boolean;
  isPinned: boolean;
  onOpen: () => void;
  onOpenNewTab: () => void;
  onOpenNewWindow: () => void;
  onTogglePin: () => void;
  onExclude: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  visible,
  onClose,
  isFolder,
  isPinned,
  onOpen,
  onOpenNewTab,
  onOpenNewWindow,
  onTogglePin,
  onExclude,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, onClose]);

  // Adjust coordinates so the menu does not overflow the sidebar boundary (max 280px)
  const adjustedX = Math.min(x, 280 - 160); // Menu width is ~150px
  const adjustedY = y; // Let it float vertically where the cursor was clicked

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.08 }}
          style={{
            position: 'absolute',
            top: adjustedY,
            left: adjustedX,
            zIndex: 99999,
          }}
          className="w-40 py-1-5 bg-dark-panel border rounded-lg shadow-2xl backdrop-blur-md"
        >
          {!isFolder && (
            <>
              <button
                onClick={() => {
                  onOpen();
                  onClose();
                }}
                className="w-full px-3 py-1-5 flex items-center gap-2 text-left text-xs text-white hover-bg-white-5 transition-colors"
              >
                <ExternalLink size={13} className="text-muted" />
                Open
              </button>
              <button
                onClick={() => {
                  onOpenNewTab();
                  onClose();
                }}
                className="w-full px-3 py-1-5 flex items-center gap-2 text-left text-xs text-white hover-bg-white-5 transition-colors"
              >
                <ExternalLink size={13} className="text-muted" />
                Open in new tab
              </button>
              <button
                onClick={() => {
                  onOpenNewWindow();
                  onClose();
                }}
                className="w-full px-3 py-1-5 flex items-center gap-2 text-left text-xs text-white hover-bg-white-5 transition-colors"
              >
                <ExternalLink size={13} className="text-muted" />
                Open in new window
              </button>
              <div className="my-1 border-t" />
              <button
                onClick={() => {
                  onTogglePin();
                  onClose();
                }}
                className="w-full px-3 py-1-5 flex items-center gap-2 text-left text-xs text-white hover-bg-white-5 transition-colors"
              >
                <Pin size={13} className={`transition-colors ${isPinned ? 'text-yellow-400 fill-yellow-400-20' : 'text-muted'}`} />
                {isPinned ? 'Unpin' : 'Pin to top'}
              </button>
            </>
          )}

          <button
            onClick={() => {
              onExclude();
              onClose();
            }}
            className="w-full px-3 py-1-5 flex items-center gap-2 text-left text-xs text-red-400 hover-bg-red-10 transition-colors"
          >
            <ShieldAlert size={13} />
            Exclude from sidebar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
