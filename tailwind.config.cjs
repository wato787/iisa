/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#93C5FD",
        secondary: "rgba(200,200, 200, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
