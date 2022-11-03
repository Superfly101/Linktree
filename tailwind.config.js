/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        gray: "#EAECF0",
        green: "#4BB543",
        blue: "#1570EF",
      },
    },
  },
  plugins: [],
};
