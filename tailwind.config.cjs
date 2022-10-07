const defaultTheme = require('tailwindcss/defaultTheme')
const daisyui = require("daisyui")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: ['class','[data-theme="dark"]'],
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
}
