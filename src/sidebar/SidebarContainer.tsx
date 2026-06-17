import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pin, Settings, Star } from 'lucide-react';
import type { BookmarkNode } from '../bookmarks/bridge';
import { fetchBookmarksTree } from '../bookmarks/bridge';
import { getSettings, saveSettings } from '../storage/sync';
import { sidebarVariants, iconColumnVariants, contentPanelVariants } from '../animations/motion';
import { SearchBar } from './components/SearchBar';
import { BookmarkCard } from './components/BookmarkCard';
import { FolderNode } from './components/FolderNode';
import { ContextMenu } from './components/ContextMenu';
import { SettingsPanel } from './components/SettingsPanel';

interface SidebarContainerProps {
  onPinStateChange?: (pinned: boolean) => void;
}

interface FlattenedItem {
  type: 'bookmark' | 'folder';
  node: BookmarkNode;
  depth: number;
}

export const SidebarContainer: React.FC<SidebarContainerProps> = ({ onPinStateChange }) => {
  // Bookmarks & configuration state
  const [bookmarksTree, setBookmarksTree] = useState<BookmarkNode[]>([]);
  const [excludedIds, setExcludedIds] = useState<string[]>([]);
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);
  const [collapsedFolderIds, setCollapsedFolderIds] = useState<string[]>([]);
  
  // UI states
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinnedOpen, setIsPinnedOpen] = useState(false); // Locking open
  const [searchQuery, setSearchQuery] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  // Custom context menu coordinates
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    visible: boolean;
    node: BookmarkNode | null;
  }>({ x: 0, y: 0, visible: false, node: null });

  // Hover expansion debounce timers
  const hoverTimeoutRef = useRef<number | null>(null);

  // Load configuration and data
  const loadData = async () => {
    const tree = await fetchBookmarksTree();
    setBookmarksTree(tree);

    const settings = await getSettings();
    setExcludedIds(settings.excludedIds || []);
    setPinnedIds(settings.pinnedIds || []);
    setCollapsedFolderIds(settings.collapsedFolderIds || []);
  };

  useEffect(() => {
    loadData();
    
    // Subscribe to bookmarks updates from background
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
      const listener = (message: any) => {
        if (message.type === 'BOOKMARKS_CHANGED') {
          loadData();
        }
      };
      chrome.runtime.onMessage.addListener(listener);
      return () => chrome.runtime.onMessage.removeListener(listener);
    }
  }, []);

  // Listen to external shortcuts: Ctrl+Shift+B toggles sidebar expansion, Esc collapses
  useEffect(() => {
    const handleGlobalShortcuts = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsPinnedOpen((prev) => {
          const next = !prev;
          if (onPinStateChange) onPinStateChange(next);
          setIsExpanded(next);
          return next;
        });
      }
      if (e.key === 'Escape' && !isPinnedOpen) {
        setIsExpanded(false);
        setSettingsOpen(false);
        setContextMenu((prev) => ({ ...prev, visible: false }));
      }
    };
    window.addEventListener('keydown', handleGlobalShortcuts);
    return () => window.removeEventListener('keydown', handleGlobalShortcuts);
  }, [isPinnedOpen, onPinStateChange]);

  // Hover detection handlers
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Expand after 80ms hover to avoid accidental cursor-swipe expansions
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsExpanded(true);
    }, 80);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (!isPinnedOpen) {
      hoverTimeoutRef.current = window.setTimeout(() => {
        setIsExpanded(false);
        setSettingsOpen(false);
        setContextMenu((prev) => ({ ...prev, visible: false }));
      }, 200); // Wait 200ms before collapsing
    }
  };

  // Toggle pinning sidebar open
  const handleTogglePinSidebar = () => {
    const next = !isPinnedOpen;
    setIsPinnedOpen(next);
    if (onPinStateChange) onPinStateChange(next);
  };

  // Exclusions management
  const handleExcludeItem = async (id: string) => {
    const updated = [...excludedIds, id];
    setExcludedIds(updated);
    await saveSettings({ excludedIds: updated });
  };

  const handleRemoveExclusion = async (id: string) => {
    const updated = excludedIds.filter((item) => item !== id);
    setExcludedIds(updated);
    await saveSettings({ excludedIds: updated });
  };

  // Folder collapse toggle
  const handleToggleFolder = async (id: string) => {
    const updated = collapsedFolderIds.includes(id)
      ? collapsedFolderIds.filter((fid) => fid !== id)
      : [...collapsedFolderIds, id];
    setCollapsedFolderIds(updated);
    await saveSettings({ collapsedFolderIds: updated });
  };

  // Bookmark pinning
  const handleTogglePinBookmark = async (id: string) => {
    const updated = pinnedIds.includes(id)
      ? pinnedIds.filter((pid) => pid !== id)
      : [...pinnedIds, id];
    setPinnedIds(updated);
    await saveSettings({ pinnedIds: updated });
  };

  // Drag and Drop (HTML5)
  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnd = () => {
    // Unused drag end callback
  };

  const handleDrop = async (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData('text/plain');
    if (!sourceId || sourceId === targetId) return;

    // 1. Check if we are reordering pinned favorites
    if (pinnedIds.includes(sourceId) && pinnedIds.includes(targetId)) {
      const updated = [...pinnedIds];
      const sourceIndex = updated.indexOf(sourceId);
      const targetIndex = updated.indexOf(targetId);
      updated.splice(sourceIndex, 1);
      updated.splice(targetIndex, 0, sourceId);
      setPinnedIds(updated);
      await saveSettings({ pinnedIds: updated });
      return;
    }

    // 2. Otherwise move actual bookmark/folder (simulated or via Chrome APIs)
    if (typeof chrome !== 'undefined' && chrome.bookmarks) {
      chrome.bookmarks.move(sourceId, { parentId: targetId }, () => {
        loadData();
      });
    } else {
      // Local development mock move
      console.log(`Mocking move bookmark ${sourceId} into folder ${targetId}`);
      alert(`Moved bookmark ID ${sourceId} into folder ID ${targetId}`);
    }
  };

  // Right-click context menu triggers
  const handleContextMenu = (e: React.MouseEvent, node: BookmarkNode) => {
    e.preventDefault();
    setContextMenu({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY + e.currentTarget.getBoundingClientRect().top - e.currentTarget.parentElement!.getBoundingClientRect().top,
      visible: true,
      node,
    });
  };

  // Flat-list computation for Main Tree (supporting virtualized render)
  const flattenedTree = useMemo(() => {
    const items: FlattenedItem[] = [];
    
    // Recursive flattener
    const flatten = (nodes: BookmarkNode[], depth: number) => {
      for (const node of nodes) {
        if (excludedIds.includes(node.id)) continue;
        if (node.url) {
          items.push({ type: 'bookmark', node, depth });
        } else {
          items.push({ type: 'folder', node, depth });
          if (!collapsedFolderIds.includes(node.id) && node.children) {
            flatten(node.children, depth + 1);
          }
        }
      }
    };

    // Starting search under bookmarks bar (id: '1') and others (id: '2')
    if (bookmarksTree.length > 0 && bookmarksTree[0].children) {
      // Find the main categories (Bookmarks Bar and Other Bookmarks)
      bookmarksTree[0].children.forEach((category) => {
        if (category.children && category.children.length > 0) {
          flatten(category.children, 0);
        }
      });
    }
    return items;
  }, [bookmarksTree, excludedIds, collapsedFolderIds]);

  // Fuzzy Search filtering (searches all non-excluded bookmarks)
  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    const results: BookmarkNode[] = [];
    const query = searchQuery.toLowerCase();

    const searchTree = (nodes: BookmarkNode[]) => {
      for (const node of nodes) {
        if (excludedIds.includes(node.id)) continue;
        if (node.url) {
          if (
            node.title.toLowerCase().includes(query) ||
            node.url.toLowerCase().includes(query)
          ) {
            results.push(node);
          }
        }
        if (node.children) {
          searchTree(node.children);
        }
      }
    };

    if (bookmarksTree.length > 0 && bookmarksTree[0].children) {
      searchTree(bookmarksTree[0].children);
    }
    return results;
  }, [bookmarksTree, searchQuery, excludedIds]);

  // Pinned items mapping
  const pinnedBookmarks = useMemo(() => {
    const pins: BookmarkNode[] = [];
    const collectPins = (nodes: BookmarkNode[]) => {
      for (const node of nodes) {
        if (pinnedIds.includes(node.id) && node.url && !excludedIds.includes(node.id)) {
          pins.push(node);
        }
        if (node.children) {
          collectPins(node.children);
        }
      }
    };
    if (bookmarksTree.length > 0 && bookmarksTree[0].children) {
      collectPins(bookmarksTree[0].children);
    }
    // Maintain customized order of pins
    return pinnedIds
      .map((pid) => pins.find((p) => p.id === pid))
      .filter((p): p is BookmarkNode => !!p);
  }, [bookmarksTree, pinnedIds, excludedIds]);

  // VIRTUAL SCROLL LOGIC
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 400; // Average visible size of bookmarks viewport
  const itemHeight = 36; // 9rem / h-9 is 36px
  const listRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const virtualizedTreeItems = useMemo(() => {
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 3); // 3 item buffer
    const endIndex = Math.min(flattenedTree.length, startIndex + visibleCount + 6);
    
    return {
      sliced: flattenedTree.slice(startIndex, endIndex),
      startIndex,
      totalHeight: flattenedTree.length * itemHeight,
    };
  }, [flattenedTree, scrollTop]);

  // Sidebar container hover parameters
  const isCurrentlyOpen = isExpanded || isPinnedOpen;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={sidebarVariants}
      animate={isCurrentlyOpen ? 'expanded' : 'collapsed'}
      initial="collapsed"
      style={{ width: '280px' }}
      className="fixed left-0 top-0 h-screen bg-black border-r text-white flex flex-col select-none z-50 shadow-2xl backdrop-blur-lg"
    >
      {/* 1. Header Toolbar */}
      <div className="flex items-center justify-between px-3 py-3 border-b h-12 flex-shrink-0">
        <AnimatePresence>
          {isCurrentlyOpen ? (
            <motion.div
              variants={contentPanelVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-xs text-white tracking-wider flex items-center gap-1">
                  ⚡ HOVERBAR
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleTogglePinSidebar}
                  className={`p-1 hover-bg-white-5 rounded-md transition-colors ${
                    isPinnedOpen ? 'text-yellow-400' : 'text-muted'
                  }`}
                  title="Pin sidebar open"
                >
                  <Pin size={13} className={isPinnedOpen ? 'fill-current' : ''} />
                </button>
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="p-1 hover-bg-white-5 rounded-md transition-colors text-muted hover-text-white"
                  title="Settings"
                >
                  <Settings size={13} />
                </button>
              </div>
            </motion.div>
          ) : (
            // Collapsed indicator icon (centered)
            <div className="w-full flex justify-center">
              <span className="font-bold text-xs text-white">HB</span>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. Search Area */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} isExpanded={isCurrentlyOpen} />

      {/* 3. Main View Area (Unified Pinned & Scrollable Bookmarks) */}
      <div className="flex-grow flex flex-col overflow-hidden min-h-0 relative">
        <AnimatePresence mode="wait">
          {searchQuery ? (
            // Search Results Mode
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow overflow-y-auto px-2 py-1 flex flex-col gap-0-5 custom-scrollbar"
            >
              <span className="text-size-10 font-bold text-dark-muted uppercase tracking-wider px-2 py-1">
                Search Results ({searchResults.length})
              </span>
              {searchResults.length === 0 ? (
                <span className="text-xs text-dark-muted italic px-2 py-2">No bookmarks found.</span>
              ) : (
                searchResults.map((bm) => (
                  <BookmarkCard
                    key={bm.id}
                    node={bm}
                    depth={0}
                    isExpanded={isCurrentlyOpen}
                    isPinned={pinnedIds.includes(bm.id)}
                    onContextMenu={handleContextMenu}
                  />
                ))
              )}
            </motion.div>
          ) : (
            // Default Sidebar Tree View
            <motion.div
              key="tree"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col min-h-0"
            >
              {/* Pinned Bookmarks Section */}
              {pinnedBookmarks.length > 0 && (
                <div className="flex-shrink-0 px-2 py-1-5 border-b max-h-48 overflow-y-auto flex flex-col gap-0-5">
                  {isCurrentlyOpen && (
                    <span className="text-size-10 font-bold text-muted uppercase tracking-wider px-2 py-1 flex items-center gap-1">
                      <Star size={10} className="fill-yellow-500-20 text-yellow-500" />
                      Favorites
                    </span>
                  )}
                  {pinnedBookmarks.map((bm) => (
                    <BookmarkCard
                      key={`pin-${bm.id}`}
                      node={bm}
                      depth={0}
                      isExpanded={isCurrentlyOpen}
                      isPinned={true}
                      onContextMenu={handleContextMenu}
                      draggable
                      onDragStart={handleDragStart}
                      onDragOver={handleDragOver}
                      onDragEnd={handleDragEnd}
                      onDrop={handleDrop}
                    />
                  ))}
                </div>
              )}

              {/* Collapsed view: Show just a column of all favicons, Stationary when translating */}
              {!isCurrentlyOpen ? (
                <motion.div
                  variants={iconColumnVariants}
                  className="flex-grow flex flex-col items-center gap-2 py-4 overflow-y-auto custom-scrollbar-hidden"
                >
                  {flattenedTree
                    .filter((item) => item.type === 'bookmark')
                    .slice(0, 15) // Limit collapsed view to save space
                    .map((item) => (
                      <BookmarkCard
                        key={`col-${item.node.id}`}
                        node={item.node}
                        depth={0}
                        isExpanded={false}
                        isPinned={pinnedIds.includes(item.node.id)}
                        onContextMenu={handleContextMenu}
                      />
                    ))}
                </motion.div>
              ) : (
                // Expanded view: Custom Virtualized tree renderer
                <div
                  ref={listRef}
                  onScroll={handleScroll}
                  className="flex-grow overflow-y-auto px-2 py-2 custom-scrollbar relative"
                >
                  <div style={{ height: `${virtualizedTreeItems.totalHeight}px`, width: '100%', position: 'relative' }}>
                    {virtualizedTreeItems.sliced.map((item, sliceIndex) => {
                      const absoluteIndex = virtualizedTreeItems.startIndex + sliceIndex;
                      return (
                        <div
                          key={item.node.id}
                          style={{
                            position: 'absolute',
                            top: `${absoluteIndex * itemHeight}px`,
                            left: 0,
                            right: 0,
                            height: `${itemHeight}px`,
                          }}
                        >
                          {item.type === 'bookmark' ? (
                            <BookmarkCard
                              node={item.node}
                              depth={item.depth}
                              isExpanded={true}
                              isPinned={pinnedIds.includes(item.node.id)}
                              onContextMenu={handleContextMenu}
                              draggable
                              onDragStart={handleDragStart}
                              onDragOver={handleDragOver}
                              onDragEnd={handleDragEnd}
                              onDrop={handleDrop}
                            />
                          ) : (
                            <FolderNode
                              node={item.node}
                              depth={item.depth}
                              isExpanded={true}
                              collapsedFolderIds={collapsedFolderIds}
                              pinnedIds={pinnedIds}
                              onToggleFolder={handleToggleFolder}
                              onContextMenu={handleContextMenu}
                              excludedIds={excludedIds}
                              onDragStart={handleDragStart}
                              onDragOver={handleDragOver}
                              onDragEnd={handleDragEnd}
                              onDrop={handleDrop}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Footer info / Toggle indicator */}
      {isCurrentlyOpen && (
        <div className="flex items-center justify-between px-4 py-2 border-t h-10 bg-dark-footer flex-shrink-0">
          <span className="text-size-9 text-dark-muted font-mono">v1.0.0</span>
          <span className="text-size-9 text-muted font-mono uppercase tracking-widest">HoverBar</span>
        </div>
      )}

      {/* Settings overlay panel */}
      <AnimatePresence>
        {settingsOpen && (
          <SettingsPanel
            onClose={() => setSettingsOpen(false)}
            excludedIds={excludedIds}
            onRemoveExclusion={handleRemoveExclusion}
            bookmarksTree={bookmarksTree}
          />
        )}
      </AnimatePresence>

      {/* Context Action Overlay */}
      <ContextMenu
        x={contextMenu.x}
        y={contextMenu.y}
        visible={contextMenu.visible}
        onClose={() => setContextMenu((prev) => ({ ...prev, visible: false }))}
        isFolder={contextMenu.node ? !contextMenu.node.url : false}
        isPinned={contextMenu.node ? pinnedIds.includes(contextMenu.node.id) : false}
        onOpen={() => contextMenu.node?.url && window.open(contextMenu.node.url, '_blank')}
        onOpenNewTab={() => contextMenu.node?.url && window.open(contextMenu.node.url, '_blank')}
        onOpenNewWindow={() => contextMenu.node?.url && window.open(contextMenu.node.url, '_blank', 'width=1000,height=700')}
        onTogglePin={() => contextMenu.node && handleTogglePinBookmark(contextMenu.node.id)}
        onExclude={() => contextMenu.node && handleExcludeItem(contextMenu.node.id)}
      />
    </motion.div>
  );
};
