/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{'brown':"#9B7D5D",
           'blue': "#EFE7E7"
      }
    },
  },
  plugins: [],
}

