/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      another: "375px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [require("daisyui")],
};
