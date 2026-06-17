# HoverBar

**HoverBar** is a production-quality, high-performance Chrome and Brave Extension (Manifest V3) that provides a modern auto-hiding bookmark sidebar. Inspired by Arc Browser, Notion, and Raycast, it offers a premium, high-speed user experience designed to manage thousands of bookmarks fluidly without using native browser overflow menus.

---

## ⚡ Key Features

1. **Auto-Hiding Sidebar**: Smoothly slides out from the left edge of the browser window on hover, and collapses back when the cursor leaves the panel.
2. **Layout Shifting on Pin**: When pinned open, the host webpage dynamically shifts to the right (padding) so the sidebar never covers page content.
3. **Dual-Translation Animations**: Powered by Framer Motion, using GPU-accelerated `transform: translateX` and `opacity` properties. The sidebar container slides out, while inner columns slide in the opposite direction relative to the container, keeping collapsed icons perfectly stationary on the screen for zero visual latency.
4. **List Virtualization**: Flattens nested folder trees on expansion to render bookmarks inside a custom viewport, allowing smooth 60fps scrolling even with 1,000+ items.
5. **Secure Favicons**: Uses Google Favicon APIs and secure Extension URLs with first-letter fallbacks to load favicons dynamically and quickly.
6. **Actions & Drag and Drop**: Rearrange pinned favorites using HTML5 drag-and-drop. Open, pin, and exclude items easily.
7. **Custom Context Menu**: Right-click on folders or bookmarks to trigger pinning, tab/window opening actions, and sidebar exclusions.
8. **Settings Backup**: Export and import settings (exclusions/customizations) directly inside the sidebar.

---

## 🛠️ Project Architecture

```text
src/
 ├─ background/
 │   └─ index.ts          # Extension service worker (API bridge, mutation observer)
 ├─ content/
 │   ├─ index.tsx         # Injector script mounting React inside Shadow DOM
 │   └─ content.css       # Tailwind-inspired compiled Vanilla CSS stylesheet
 ├─ sidebar/
 │   ├─ components/
 │   │   ├─ BookmarkCard.tsx # Draggable bookmarks card
 │   │   ├─ FolderNode.tsx   # Recursive accordion node with count badges
 │   │   ├─ SearchBar.tsx    # Focus-input search with Ctrl+K shortcut listeners
 │   │   ├─ ContextMenu.tsx  # Floating actions overlay
 │   │   └─ SettingsPanel.tsx# Exclusion manager, backups (import/export)
 │   └─ SidebarContainer.tsx # Core state management & virtual scroll viewport
 ├─ storage/
 │   └─ sync.ts           # Sync utility for chrome.storage.sync with LocalStorage fallback
 ├─ bookmarks/
 │   └─ bridge.ts         # Runtime message-passing layer and mock generator
 ├─ animations/
 │   └─ motion.ts         # Cubic-bezier easing parameters
 └─ utils/
     └─ favicon.ts        # Favicon proxy and initial character generators
```

---

## 🚀 Installation & Build

### 1. Local Development Sandbox
Run the local Vite sandbox to test layout shifting, search, right-clicks, and drag-and-drop within the browser:
```bash
# Install dependencies
npm install

# Run Vite dev server
npm run dev
```
Open the local server URL (e.g. `http://localhost:5173`) in your browser to view the sandbox workspace.

### 2. Compile and Install Extension
To bundle the project for Chrome/Brave:
```bash
# Build the production bundle
npm run build
```
This outputs a compiled production folder under the `dist/` directory.

1. Open Chrome or Brave and go to **`chrome://extensions`**.
2. Enable **Developer Mode** using the switch in the upper-right corner.
3. Click the **Load unpacked** button in the upper-left.
4. Select the `dist` directory located inside this project workspace.
5. Hover near the left-hand edge of any web page to trigger the HoverBar sidebar!

---

## ⚙️ Technical Highlights

- **Vite Bundler**: Custom outputs target content and background scripts with static filenames (`content.js`, `background.js`, `assets/content.css`) to ensure direct injection pathways.
- **Shadow DOM Encapsulation**: Mounted elements are completely isolated inside a Shadow DOM, preventing host page CSS bleed and script collisions.
- **TypeScript**: Written in strict TypeScript with complete typings for the Chrome extension API (`@types/chrome`).
