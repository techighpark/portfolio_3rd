/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        newSebang: ["SEBANG_Gothic_Bold"],
        newAggro: ["SBAggroB"],
        newAsac: ["CWDangamAsac-Bold"],
        newBmjua: ["BMJUA"],
        newJalnan: ["yg-jalnan"],
      },
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
          "0%": { bottom: "20%", fill: "red" },
          "10%": { bottom: "20%", fill: "red" },
          "50%": { bottom: "70%", fill: "red" },
          "60%": { bottom: "70%", fill: "red" },
          "90%": { bottom: "100%", fill: "red" },
          "100%": { bottom: "100%", fill: "red" },
        },
        risingText: {
          "0%": { bottom: "10%" },
          "10%": { bottom: "10%" },
          "50%": { bottom: "60%" },
          "90%": { bottom: "60%", opacity: 1 },
          "100%": { bottom: "60%", opacity: 0 },
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
        balloon: "balloon 7s ease-in-out infinite",
        risingText: "risingText 7s ease-in-out infinite",
        textMorhpism: "textMorhpism 10s linear infinite",
      },

      boxShadow: {
        white: "inset 0 15px 25px -15px rgba(255, 255, 255, 0.3)",
        deep: "inset 0px 3px 3px 1px rgba(0, 0, 0, 0.2)",

        "morUpper-sm": "3px 3px 13px #dfdfdf, -3px -3px 13px #ffffff",
        "morUpper-md": "4px 4px 8px #d4d4d4, -4px -4px 8px #ffffff",
        "morUpper-lg": "4px 4px 8px #d4d4d4, -4px -4px 8px #ffffff",

        "morDeeper-sm":
          "inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff",
        "morDeeper-md":
          "inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff",
        "morDeeper-lg":
          "inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff",
      },
    },
  },
};
