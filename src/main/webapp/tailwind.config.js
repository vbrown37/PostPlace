/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#141414",
        "secondary": "#cff466",
        "ternary" : "#1d1d1d"
      },
      fontFamily: {
        "raleway": "raleway, sans-serif"
      }
    },
  },
  plugins: [],
}
