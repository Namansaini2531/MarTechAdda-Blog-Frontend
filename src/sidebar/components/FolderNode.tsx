import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FolderOpen, ChevronDown, ChevronRight } from 'lucide-react';
import type { BookmarkNode } from '../../bookmarks/bridge';
import { folderVariants } from '../../animations/motion';
import { BookmarkCard } from './BookmarkCard';

interface FolderNodeProps {
  node: BookmarkNode;
  depth: number;
  isExpanded: boolean;
  collapsedFolderIds: string[];
  pinnedIds: string[];
  onToggleFolder: (id: string) => void;
  onContextMenu: (e: React.MouseEvent, node: BookmarkNode) => void;
  // Excluded ID checklist
  excludedIds: string[];
  // Drag and drop bubble-up handlers
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent, id: string) => void;
  onDragEnd: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, targetId: string) => void;
}

export const FolderNode: React.FC<FolderNodeProps> = ({
  node,
  depth,
  isExpanded,
  collapsedFolderIds,
  pinnedIds,
  onToggleFolder,
  onContextMenu,
  excludedIds,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
}) => {
  const isCollapsed = collapsedFolderIds.includes(node.id);
  const [isDragOver, setIsDragOver] = useState(false);

  // Calculate total child count (excluding nested sub-folders or counting bookmarks only)
  const countBookmarks = (n: BookmarkNode): number => {
    let count = 0;
    if (n.children) {
      n.children.forEach((child) => {
        if (excludedIds.includes(child.id)) return;
        if (child.url) {
          count += 1;
        } else {
          count += countBookmarks(child);
        }
      });
    }
    return count;
  };

  const totalBookmarks = countBookmarks(node);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFolder(node.id);
  };

  // Filter children to exclude hidden items
  const activeChildren = (node.children || []).filter((child) => !excludedIds.includes(child.id));

  // Drag and drop handlers on folder header
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
    onDragOver(e, node.id);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    onDrop(e, node.id);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Folder Header */}
      <div
        onContextMenu={(e) => onContextMenu(e, node)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleToggle}
        style={{ paddingLeft: isExpanded ? `${Math.max(8, depth * 12)}px` : '12px' }}
        className={`group relative flex items-center h-9 w-full rounded-lg text-left select-none cursor-pointer transition-all duration-150 ${
          isExpanded ? 'pr-3 gap-2' : 'justify-center pr-0'
        } ${isDragOver ? 'bg-white-10 ring-1 ring-white-20' : 'hover-bg-white-5'}`}
      >
        {isExpanded ? (
          <>
            <span className="text-muted group-hover-text-white transition-colors">
              {!isCollapsed ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
            <span className="text-muted group-hover-text-white transition-colors">
              {!isCollapsed ? <FolderOpen size={15} /> : <Folder size={15} />}
            </span>
            <span className="flex-grow min-w-0 text-xs text-light font-medium truncate group-hover-text-white transition-colors">
              {node.title}
            </span>
            {totalBookmarks > 0 && (
              <span className="text-size-10 text-dark-muted bg-dark-row group-hover-bg-border group-hover-text-muted px-1.5 py-0.5 rounded-full font-mono transition-colors">
                {totalBookmarks}
              </span>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center w-6 h-6 rounded bg-dark-card border text-muted group-hover-text-white transition-colors">
            <Folder size={14} />
          </div>
        )}
      </div>

      {/* Children list (rendered only when expanded) */}
      {isExpanded && (
        <AnimatePresence initial={false}>
          {!isCollapsed && activeChildren.length > 0 && (
            <motion.div
              variants={folderVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="overflow-hidden flex flex-col"
            >
              {activeChildren.map((child) => {
                if (child.url) {
                  return (
                    <BookmarkCard
                      key={child.id}
                      node={child}
                      depth={depth + 1}
                      isExpanded={isExpanded}
                      isPinned={pinnedIds.includes(child.id)}
                      onContextMenu={onContextMenu}
                      draggable
                      onDragStart={onDragStart}
                      onDragOver={onDragOver}
                      onDragEnd={onDragEnd}
                      onDrop={onDrop}
                    />
                  );
                } else {
                  return (
                    <FolderNode
                      key={child.id}
                      node={child}
                      depth={depth + 1}
                      isExpanded={isExpanded}
                      collapsedFolderIds={collapsedFolderIds}
                      pinnedIds={pinnedIds}
                      onToggleFolder={onToggleFolder}
                      onContextMenu={onContextMenu}
                      excludedIds={excludedIds}
                      onDragStart={onDragStart}
                      onDragOver={onDragOver}
                      onDragEnd={onDragEnd}
                      onDrop={onDrop}
                    />
                  );
                }
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
