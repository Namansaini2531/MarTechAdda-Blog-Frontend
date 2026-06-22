import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  isExpanded: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, isExpanded }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full px-3 py-2">
      <div
        className={`relative flex items-center w-full bg-dark-panel border rounded-lg transition-all duration-200 ${
          isExpanded ? 'px-3 py-1-5' : 'h-8 justify-center cursor-pointer'
        } focus-within-border-white-20 focus-within-ring-1 ring-white-10`}
        onClick={() => !isExpanded && inputRef.current?.focus()}
      >
        <Search size={14} className="text-muted flex-shrink-0" />
        
        {isExpanded && (
          <>
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Search bookmarks..."
              className="w-full ml-2 bg-transparent text-xs text-white border-none outline-none"
            />
            {value && (
              <button
                onClick={() => onChange('')}
                className="p-0.5 hover-bg-white-10 rounded transition-colors text-muted hover-text-white"
              >
                <X size={12} />
              </button>
            )}
            {!value && (
              <kbd className="hidden sm:inline-flex items-center h-4 px-1.5 font-mono text-size-9 font-medium text-muted bg-[#222222] border rounded gap-0-5 select-none pointer-events-none">
                <span>Ctrl</span>K
              </kbd>
            )}
          </>
        )}
      </div>
    </div>
  );
};
