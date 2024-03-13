/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#87b5b5",
        "secondary": "#4aa3a3",
        "editor": "#c0d8d8"
      }
    },
  },
  plugins: [],
}