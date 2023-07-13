/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      ...colors,
      gray: {
        DEFAULT: "#F0F3F8",
      },
      violet: {
        DEFAULT: "#9500FF",
      },
    },

    extend: {},
  },
  plugins: [],
};
