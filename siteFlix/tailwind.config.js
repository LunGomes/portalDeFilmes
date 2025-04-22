/** @type {import('tailwindcss').Config} */

const withMt = require("@material-tailwind/react/utils/withMT");
module.exports = withMt({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '64rem',
      },
      colors: {
        "vanila": "#FFF4B0",
        "amarelo": "#E09F3E",
        "azul": "#335C67",
        "vermelho": "#9E2A2B",
        "preto": "#0B0C10"
      }
    },
  },
  plugins: [],
})

