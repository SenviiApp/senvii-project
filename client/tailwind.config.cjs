/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        form: "min(40rem, 90%)",
        "login-form": "min(500px,95%)",
      },
      colors: {
        dark: {
          800: "#2A2E33",
          600: "#43484F",
          400: "#43484F",
        },
        light: {
          100: "#BBDCE2",
          200: "#6FC4CF",
          300: "#68B8CC",
          400: "#5DA5C8",
          500: "#508DC3",
        },
        snow: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
