/** @type {import('tailwindcss').Config} */

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
      keyframes: {
        sand: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        balloon: {
          "0%": { bottom: "20%" },
          "100%": { bottom: "100%", fill: "red" },
        },
        textMorhpism: {
          "0%": {
            "text-shadow": "5px 5px 5px #d9d9d9, -5px -5px 5px #ffffff",
          },
          "25%": {
            "text-shadow": "-5px 5px 5px #d9d9d9, 5px -5px 5px #ffffff",
          },
          "50%": {
            "text-shadow": "-5px -5px 5px #d9d9d9, 5px 5px 5px #ffffff",
          },
          "75%": {
            "text-shadow": "5px -5px 5px #d9d9d9, -5px 5px 5px #ffffff",
          },
          "100%": {
            "text-shadow": "5px 5px 5px #d9d9d9, -5px -5px 5px #ffffff",
          },
        },
      },
      animation: {
        "sand-one": "sand 2s ease-in-out infinite",
        "sand-two": "sand 2s ease-out infinite",
        balloon: "balloon 5s ease-in-out infinite",
        textMorhpism: "textMorhpism 10s linear infinite",
      },

      boxShadow: {
        white: "inset 0 15px 25px -15px rgba(255, 255, 255, 0.3)",
        deep: "inset 0px 3px 3px 1px rgba(0, 0, 0, 0.2)",
        morUpperSm: "5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff",
        morDeeperSm: "inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff",
        morRadiusMd: "15px 15px 30px #c2c2c2, -15px -15px 30px #ffffff",
        morFlat: "15px 15px 30px #c2c2c2, -15px -15px 30px #ffffff",
      },
    },
  },
};
