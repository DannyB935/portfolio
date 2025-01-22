/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#F2AA80",
        "secondary": "#F2D5C4",
        "third": "#BF8069",
        "back": "#8EA3BF"
      },
      fontFamily:{
        "fancy": ["Playfair Display", "sans-serif"],
      }
    },
  },
  plugins: [],
}

