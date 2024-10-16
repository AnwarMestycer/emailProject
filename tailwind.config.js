/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        hover: '#D1E2FF', 
      },
      fonts: {
        main : ['Preevio', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

