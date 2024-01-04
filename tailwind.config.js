/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        'baltic': {
          '50': '#f7f6f9',
          '100': '#eeedf1',
          '200': '#d8d6e1',
          '300': '#b6b3c6',
          '400': '#8d89a7',
          '500': '#706b8c',
          '600': '#5c5673',
          '700': '#4b465e',
          '800': '#403c50',
          '900': '#393644',
          '950': '#1f1d25',
        },
        bluray: {
          100: "#e8ebef",
          200: "#d1d6df",
          300: "#bbc2ce",
          400: "#a4adbe",
          500: "#8d99ae",
          600: "#717a8b",
          700: "#555c68",
          800: "#383d46",
          900: "#1c1f23"
        },
        liblu: {
          100: "#e7edf7",
          200: "#cfdbf0",
          300: "#b6c9e8",
          400: "#9eb7e1",
          500: "#86a5d9",
          600: "#6b84ae",
          700: "#506382",
          800: "#364257",
          900: "#1b212b"
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
