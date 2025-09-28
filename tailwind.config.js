export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(191,182,137)", // Current primary color
          dark: "rgb(155,146,102)",     // Darker shade for dark mode
          hover: "rgb(155,146,102)",    // Hover state for light mode
          "hover-dark": "rgb(120,115,80)", // Hover state for dark mode
          100: "rgb(220,215,180)",      // Lighter shade
          200: "rgb(155,146,102)",      // Medium shade (for hover)
          300: "rgb(120,115,80)",       // Darker shade (for dark mode hover)
        },
        darkmode: {
          primary: "rgb(191,182,137)",  // Same as primary for consistency
        }
      },
      transitionProperty: {
        'colors-transform': 'color, background-color, border-color, transform',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      }
    },
  },
};