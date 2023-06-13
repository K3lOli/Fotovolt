/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3451B2',
      },
      fontFamily: {
        oswald: 'Oswald, sans serif',
      },
    },
  },
  plugins: [],
}

