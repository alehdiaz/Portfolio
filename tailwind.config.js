/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#fdfbf7', // Warm paper color
        ink: '#333333',   // Soft black for text
        pencil: '#555555', // Graphite
        'sketch-blue': '#407cff', // Blue pen
      },
      fontFamily: {
        sketch: ['"Patrick Hand"', 'cursive'],
        sans: ['"Patrick Hand"', 'cursive'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/lined-paper.png')",
        'pencil-border': "url('data:image/svg+xml;base64,...')", // Placeholder, or uses CSS borders
      },
      boxShadow: {
        'sketch': '2px 3px 0px 0px rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [],
}
