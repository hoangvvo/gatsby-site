module.exports = {
  theme: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      accents: {
        100: 'var(--accents-100)',
        200: 'var(--accents-200)',
        300: 'var(--accents-300)',
        400: 'var(--accents-400)',
        500: 'var(--accents-500)',
        600: 'var(--accents-600)',
        700: 'var(--accents-700)',
        800: 'var(--accents-800)',
      },
      black: '#000',
      white: '#fff',
    },
    boxShadow: {
      default: 'var(--shadow-smallest)',
      md: 'var(--shadow-small)',
      lg: 'var(--shadow-medium)',
      xl: ' var(--shadow-large)',
      none: 'none!important',
    },
    extend: {
      fontFamily: {
        sans: [
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      spacing: {
        full: '100%',
        '9/16': '56.25%',
      },
    },
  },
  plugins: [],
};
