// Framer Motion Animation Configurations
// Implements custom cubic-bezier easings for a premium feel (similar to Vercel/Linear/Arc).

export const EASE_CUSTOM: any = [0.16, 1, 0.3, 1]; // Custom cubic-bezier (out-expo)

export const sidebarVariants = {
  collapsed: {
    x: -232, // Translate container offscreen, leaving 48px visible
    transition: {
      duration: 0.15, // < 150ms target
      ease: EASE_CUSTOM,
    },
  },
  expanded: {
    x: 0,
    transition: {
      duration: 0.18,
      ease: EASE_CUSTOM,
    },
  },
};

// Controls the dual-translation shift on the collapsed icons
export const iconColumnVariants = {
  collapsed: {
    x: 232, // Translate icons in reverse direction to keep them stationary on screen
    transition: {
      duration: 0.15,
      ease: EASE_CUSTOM,
    },
  },
  expanded: {
    x: 0,
    transition: {
      duration: 0.18,
      ease: EASE_CUSTOM,
    },
  },
};

export const contentPanelVariants = {
  collapsed: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: EASE_CUSTOM,
    },
  },
  expanded: {
    opacity: 1,
    transition: {
      duration: 0.18,
      delay: 0.05, // Small offset so names fade in smoothly as they slide
      ease: EASE_CUSTOM,
    },
  },
};

export const folderVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.18, ease: EASE_CUSTOM },
      opacity: { duration: 0.12 },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.22, ease: EASE_CUSTOM },
      opacity: { duration: 0.18, delay: 0.04 },
    },
  },
};

export const cardHoverVariants: any = {
  rest: {
    scale: 1,
    y: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 0 0 rgba(255,255,255,0)',
  },
  hover: {
    scale: 1.02,
    y: -1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    transition: {
      duration: 0.12,
      ease: 'easeOut',
    },
  },
  active: {
    scale: 0.98,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
};
