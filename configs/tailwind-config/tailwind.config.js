/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./../../elixira/ui/src/**/*.{html,js,ts,jsx,tsx}",
    "./../../elixira/ui/.storybook/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ["shadow-sm", "shadow-md", "shadow-lg"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
      },
      boxShadow: {
        top: "6px 0 0 0 rgb(0 0 0 / 0.1), 5px 0 0 0 rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
