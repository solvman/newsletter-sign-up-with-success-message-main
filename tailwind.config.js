/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          300: "hsl(4, 100%, 67%)",
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          400: "hsl(231, 7%, 60%)",
          700: "hsl(235, 18%, 26%)",
          800: "hsl(234, 29%, 20%)",
        },
      },
    },
  },
  plugins: [],
};
