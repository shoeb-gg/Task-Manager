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
            green: {
                DEFAULT: "#62f166",
            },
            purple: {
                DEFAULT: "#FF005E",
            },
        },

        extend: {
            boxShadow: {
                green: "0 0 8px 1px #62f166",
                purple: "0 0 8px 1px #FF005E",
                white: "0 0 8px 1px #FFFFFF",
            },
        },
    },
    plugins: [],
};
