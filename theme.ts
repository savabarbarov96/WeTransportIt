// Unique design system - Industrial Moving Company Aesthetic
// Avoiding generic AI patterns: Inter, Roboto, purple gradients, etc.

export const theme = {
  fonts: {
    heading: '"Bebas Neue", sans-serif', // Bold, impactful, industrial
    body: '"Source Sans Pro", sans-serif', // Clean, readable
    accent: '"Oswald", sans-serif', // Secondary headings
  },
  colors: {
    // Dark, bold palette - industrial and trustworthy
    primary: {
      dark: '#1a1a2e',      // Deep charcoal base
      main: '#16213e',      // Navy charcoal
      light: '#0f3460',     // Lighter navy
    },
    accent: {
      orange: '#ff6b35',    // Electric orange
      bright: '#ff8c42',    // Bright orange
      burnt: '#e85d04',     // Burnt orange
    },
    neutral: {
      darkGrey: '#495057',  // Cool grey
      medGrey: '#6c757d',   // Medium grey
      lightGrey: '#adb5bd',  // Light grey
      offWhite: '#f8f9fa',  // Off white
    },
    success: '#06d6a0',     // Teal green
    warning: '#ffd166',     // Warm yellow
  },
  gradients: {
    hero: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: 'linear-gradient(135deg, #ff6b35 0%, #e85d04 100%)',
    overlay: 'linear-gradient(180deg, rgba(26,26,46,0.9) 0%, rgba(22,33,62,0.85) 100%)',
  },
  animations: {
    slideIn: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  }
};

// Google Fonts URL for importing
export const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:wght@400;600;700&family=Oswald:wght@500;600;700&display=swap';
