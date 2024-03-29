/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./../../elixira/ui/src/**/*.{html,js,ts,jsx,tsx}",
    "./../../elixira/ui/.storybook/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        toggledOn: "#60B342",
      },
      boxShadow: {
        top: "6px 0 0 0 rgb(0 0 0 / 0.1), 5px 0 0 0 rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
