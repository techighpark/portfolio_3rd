/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "black",
      white: "white",
      primary: {
        light: "#ff6c4d",
        default: "#ff421a",
        dark: "#e62900",
      },
      secondary: {
        light: "#ff785b",
        default: "#FF5733",
        dark: "#ff785b",
      },
      accent: {
        light: "#ff785b",
        default: "#FF5733",
        dark: "#ff785b",
      },
      success: "",
      warning: "",
      danger: "",
      basic: {
        dark: {
          light: "#010101",
          default: "#1b1b1b",
          dark: "#343434",
        },
        lgiht: {
          light: "#ffffff",
          default: "#f2f2f2",
          dark: "#d8d8d8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
