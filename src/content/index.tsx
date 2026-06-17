import React from 'react';
import { createRoot } from 'react-dom/client';
import { SidebarContainer } from '../sidebar/SidebarContainer';
import './content.css';

const SHADOW_HOST_ID = 'hoverbar-extension-host';

function initHoverBar() {
  if (document.getElementById(SHADOW_HOST_ID)) return;

  // 1. Create Host Element
  const host = document.createElement('div');
  host.id = SHADOW_HOST_ID;
  host.style.position = 'fixed';
  host.style.top = '0';
  host.style.left = '0';
  host.style.height = '100vh';
  host.style.zIndex = '2147483647'; // Highest possible z-index
  host.style.pointerEvents = 'none'; // Click-through by default
  document.body.appendChild(host);

  // 2. Attach Shadow DOM
  const shadow = host.attachShadow({ mode: 'open' });

  // 3. Enable Pointer Events on the Shadow Container specifically
  const container = document.createElement('div');
  container.id = 'hoverbar-app-root';
  container.style.pointerEvents = 'auto'; // Re-enable pointer events for sidebar content
  container.style.height = '100%';
  shadow.appendChild(container);

  // 4. Inject Stylesheet Link
  const isExtension = typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL;
  if (isExtension) {
    // Load bundled content CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('assets/content.css');
    shadow.appendChild(link);
  } else {
    // Inject mock styles for local browser development
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      * {
        box-sizing: border-box;
        font-family: 'Inter', system-ui, sans-serif;
      }
      .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #222222;
        border-radius: 2px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #333333;
      }
      .custom-scrollbar-hidden::-webkit-scrollbar {
        display: none;
      }
    `;
    shadow.appendChild(style);
  }

  // 5. Setup Layout Shift on HTML Body when Sidebar is Pinned Open
  const handlePinStateChange = (pinned: boolean) => {
    document.documentElement.style.transition = 'padding-left 0.18s cubic-bezier(0.16, 1, 0.3, 1)';
    if (pinned) {
      document.documentElement.style.paddingLeft = '280px';
    } else {
      document.documentElement.style.paddingLeft = '0px';
    }
  };

  // 6. Mount React App
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <SidebarContainer onPinStateChange={handlePinStateChange} />
    </React.StrictMode>
  );
}

// Ensure execution happens after DOM is interactive
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHoverBar);
} else {
  initHoverBar();
}
