/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // transparent: "transparent",
        // current: "currentColor",
        // black: "black",
        // white: "white",
        primary: {
          light: "#ff6c4d",
          DEFAULT: "#ff421a",
          dark: "#e62900",
        },
        secondary: {
          light: "#ff785b",
          DEFAULT: "#FF5733",
          dark: "#ff785b",
        },
        accent: {
          light: "#ff785b",
          DEFAULT: "#FF5733",
          dark: "#ff785b",
        },
        success: "",
        warning: "",
        danger: "",
        basic: {
          dark: {
            light: "#010101",
            DEFAULT: "#1b1b1b",
            dark: "#343434",
          },
          lgiht: {
            light: "#ffffff",
            DEFAULT: "#f2f2f2",
            dark: "#d8d8d8",
          },
        },
      },
      boxShadow: {
        white: "inset 0 15px 25px -15px rgba(255, 255, 255, 0.3)",
        deep: "inset 0px 3px 3px 1px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("optional", "&:optional");
    }),
  ],
};
