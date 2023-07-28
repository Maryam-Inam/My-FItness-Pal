/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme_blue: {
          light: "rgb(0, 102, 238)",
          DEFAULT: "rgb(0, 61, 143)",
        },
      },
    },
  },
  plugins: [],
};
