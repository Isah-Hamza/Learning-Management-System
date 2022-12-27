/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appcolor: "#0072EA",
        bg: "#f5f5f5"
      }
    },
    plugins: []
  }
};
