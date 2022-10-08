/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "#045bbf",
          default: "#034694",
          dark: "#023a7d",
        },
        green: {
          light: "#3eb32b",
          default: "#347E28",
          dark: "#29701d",
        },
        gray: {
          light: "#777777",
          default: "#555555",
          dark: "#333333",
        },
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
  important: "#root",
  corePlugins: {
    preflight: false,
  },
};
