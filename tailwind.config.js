/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-NeueMontreal)"],
        serif: ["var(--font-MonumentExtended)"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        tertiary: "#151030",
        line: "#B3B3B3",
        "black-100": "#1c1c1c66",
        "black-200": "#1C1C1C",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
