import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pin } from 'lucide-react';
import type { BookmarkNode } from '../../bookmarks/bridge';
import { openBookmark } from '../../bookmarks/bridge';
import { getFaviconUrl, getFallbackLetter } from '../../utils/favicon';
import { cardHoverVariants } from '../../animations/motion';

interface BookmarkCardProps {
  node: BookmarkNode;
  depth: number;
  isExpanded: boolean;
  isPinned: boolean;
  onContextMenu: (e: React.MouseEvent, node: BookmarkNode) => void;
  // Drag and Drop
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent, id: string) => void;
  onDragOver?: (e: React.DragEvent, id: string) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent, targetId: string) => void;
}

export const BookmarkCard: React.FC<BookmarkCardProps> = ({
  node,
  depth,
  isExpanded,
  isPinned,
  onContextMenu,
  draggable,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
}) => {
  const [faviconFailed, setFaviconFailed] = useState(false);
  const faviconUrl = node.url ? getFaviconUrl(node.url) : '';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (node.url) {
      // If ctrl/cmd is pressed, open in new tab but keep active based on standard browser behavior
      const isNewTab = e.ctrlKey || e.metaKey || e.button === 1;
      openBookmark(node.url, isNewTab ? 'tab' : 'current');
    }
  };

  const handleAuxClick = (e: React.MouseEvent) => {
    if (e.button === 1 && node.url) {
      e.preventDefault();
      openBookmark(node.url, 'tab');
    }
  };

  return (
    <motion.a
      href={node.url}
      onClick={handleClick}
      onAuxClick={handleAuxClick}
      onContextMenu={(e) => onContextMenu(e, node)}
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="active"
      draggable={draggable}
      onDragStart={(e) => onDragStart && onDragStart(e as any, node.id)}
      onDragOver={(e) => onDragOver && onDragOver(e as any, node.id)}
      onDragEnd={onDragEnd as any}
      onDrop={(e) => onDrop && onDrop(e as any, node.id)}
      style={{ paddingLeft: isExpanded ? `${Math.max(12, depth * 12)}px` : '12px' }}
      className={`group relative flex items-center h-9 w-full rounded-lg text-left select-none cursor-pointer transition-all duration-150 ${
        isExpanded ? 'pr-3 gap-2-5' : 'justify-center pr-0'
      }`}
    >
      {/* Favicon / Fallback */}
      <div className="flex items-center justify-center w-6 h-6 rounded bg-dark-card text-size-10 font-semibold text-white overflow-hidden flex-shrink-0 border group-hover-border-white-10 transition-colors">
        {node.url && faviconUrl && !faviconFailed ? (
          <img
            src={faviconUrl}
            alt=""
            className="w-4 h-4 object-contain"
            onError={() => setFaviconFailed(true)}
            loading="lazy"
          />
        ) : (
          <span className="text-muted group-hover-text-white transition-colors">
            {getFallbackLetter(node.title, node.url)}
          </span>
        )}
      </div>

      {/* Title & Info */}
      {isExpanded && (
        <div className="flex-grow min-w-0 flex flex-col justify-center">
          <span className="text-xs text-light font-medium truncate group-hover-text-white transition-colors">
            {node.title}
          </span>
          {node.url && (
            <span className="text-size-10 text-dark-muted group-hover-text-muted truncate transition-colors">
              {new URL(node.url).hostname.replace('www.', '')}
            </span>
          )}
        </div>
      )}

      {/* Pinned Icon */}
      {isExpanded && isPinned && (
        <Pin size={11} className="text-muted group-hover-text-white fill-current transition-colors flex-shrink-0" />
      )}
    </motion.a>
  );
};
