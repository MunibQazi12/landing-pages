/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#f7f7f8',
      'gray-light': '#d3dce6',
      'black': '#121217',
    },
    fontFamily: {
      sans: ['Circularpro book','sans-serif'],
      serif: ['Inter','sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
