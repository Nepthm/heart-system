/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        petal: { 50: '#fff3f6', 100: '#ffe1ea', 200: '#ffc2d4', 300: '#fb9bb8' },
        rosy: { DEFAULT: '#d63a68', deep: '#b02a55' },
        ink: '#4b1730',
        gold: '#c8975b',
        paper: '#fffaf5',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
