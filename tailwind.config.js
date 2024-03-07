/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#1d63ed",
          600: "#0d6efd",
        },
      },
    },
  },
  plugins: [],
};
