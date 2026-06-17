import { useState } from 'react';
import { SidebarContainer } from './sidebar/SidebarContainer';
import { LayoutGrid, Terminal, KeyRound } from 'lucide-react';

export default function App() {
  const [paddingLeft, setPaddingLeft] = useState('0px');

  // Callback to shift main container when sidebar is pinned open
  const handlePinStateChange = (pinned: boolean) => {
    setPaddingLeft(pinned ? '280px' : '0px');
  };

  return (
    <div 
      className="min-h-screen bg-[#0E0E0E] text-[#E5E5E5] transition-all duration-300"
      style={{ paddingLeft, transition: 'padding-left 0.18s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {/* Mounted Sidebar Container */}
      <SidebarContainer onPinStateChange={handlePinStateChange} />

      {/* Main Sandbox Content Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        
        {/* Banner Section */}
        <header className="flex flex-col gap-2 border-b border-[#222222] pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span>SANDBOX MODE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            HoverBar Development Sandbox
          </h1>
          <p className="text-sm text-[#888888]">
            Hover near the left edge of your window to slide out the bookmark sidebar. Pin it open using the thumbtack icon.
          </p>
        </header>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Box 1: Shortcuts */}
          <div className="p-5 bg-[#111111] border border-[#222222] rounded-xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <KeyRound size={16} className="text-yellow-500" />
              <span>Keyboard Shortcuts</span>
            </div>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center justify-between text-xs border-b border-[#222222]/50 pb-1.5">
                <span className="text-[#888888]">Toggle Sidebar</span>
                <kbd className="px-1.5 py-0.5 bg-[#222222] rounded border border-[#333333] text-[10px] font-mono">Ctrl + Shift + B</kbd>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-[#222222]/50 pb-1.5">
                <span className="text-[#888888]">Focus Search</span>
                <kbd className="px-1.5 py-0.5 bg-[#222222] rounded border border-[#333333] text-[10px] font-mono">Ctrl + K</kbd>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#888888]">Collapse Sidebar</span>
                <kbd className="px-1.5 py-0.5 bg-[#222222] rounded border border-[#333333] text-[10px] font-mono">Esc</kbd>
              </div>
            </div>
          </div>

          {/* Box 2: System Status */}
          <div className="p-5 bg-[#111111] border border-[#222222] rounded-xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Terminal size={16} className="text-emerald-500" />
              <span>Mock Environment Details</span>
            </div>
            <div className="text-xs text-[#888888] flex flex-col gap-1.5">
              <p>• Falling back to <code className="text-[#D4D4D4] font-mono bg-[#222222] px-1 rounded">localStorage</code> for syncing exclusions and favorite pins.</p>
              <p>• Generating <strong>1,200+ mock bookmarks</strong> in the tree to test list rendering virtualization.</p>
              <p>• Context menu actions simulate deleting, opening, and exclusion layers.</p>
            </div>
          </div>
          
        </div>

        {/* Extension Installation Guide */}
        <section className="p-6 bg-gradient-to-br from-[#111111] to-[#0D0D0D] border border-[#222222] rounded-2xl flex flex-col gap-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <LayoutGrid size={18} className="text-blue-500" />
            How to Load as a Browser Extension
          </h2>
          <ol className="text-xs text-[#888888] flex flex-col gap-3 list-decimal pl-4">
            <li>
              Build the extension code using the compile command:
              <pre className="mt-1.5 p-2.5 bg-[#050505] border border-[#222222] rounded-md font-mono text-white overflow-x-auto">
                npm run build
              </pre>
            </li>
            <li>
              Open Chrome or Brave and navigate to the extensions page:
              <code className="ml-1 text-[#D4D4D4] font-mono bg-[#1A1A1A] px-1 py-0.5 rounded">chrome://extensions</code>
            </li>
            <li>
              Enable <strong>Developer Mode</strong> using the toggle switch in the upper-right corner.
            </li>
            <li>
              Click the <strong>Load unpacked</strong> button in the upper-left.
            </li>
            <li>
              Select the <strong className="text-white">dist</strong> directory located inside the project root workspace.
            </li>
          </ol>
        </section>

      </main>
    </div>
  );
}
