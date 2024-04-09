import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        default: ["var(--font-NeueMontreal)", ...fontFamily.sans],
        title: ["var(--font-MonumentExtended)", ...fontFamily.sans],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        tertiary: "#151030",
        line: "#B3B3B3",
        "black-100": "#bfbfbf",
        "black-200": "#1C1C1C",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [],
};
