/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["Cormorant Garamond", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#026666",
      },
    },
  },
  plugins: [],
};
