/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter"],
        body: ["Inter"],
      },
      colors: {
        //royal blue

        primary: {
          50: "#eff6ff",
          100: "#dcebfd",
          200: "#c1dcfc",
          300: "#96c7fa",
          400: "#64a8f6",
          500: "#4087f1",
          600: "#2968e5",
          700: "#2255d3",
          800: "#2245ab",
          900: "#213e87",
          950: "#192752",
        },

        // 'mirage color'
        secondary: {
          50: "#f2f6fd",
          100: "#e5ebf9",
          200: "#c4d6f3",
          300: "#91b4e8",
          400: "#568dda",
          500: "#306ec7",
          600: "#2054a9",
          700: "#1b4389",
          800: "#1a3a72",
          900: "#1b335f",
          950: "#0a1223",
        },
        gray: colors.gray,
        white: colors.white,
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
