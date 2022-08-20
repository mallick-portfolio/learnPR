/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#FC9928",
        secondary: "#333333",
        pink: "#ff49db",
        orange: "#ff7849",
        bannerColor: "rgba(85, 85, 84, .4)",
      },
      fontFamily: {
        robotoS: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
