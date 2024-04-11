/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        specialBlack: "#242424",
        specialGrey: "#6b6b6b",
        specialWhite: "#f9f9f9"
      },
      fontSize: {
        s: "16px",
        f: "14px",
        t: "13px"
      }
    },
  },
  plugins: [],
}