/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6247F1',
        main: '#F7F7F7',
        link: '#818181',
      },
    },
  },
  plugins: [],
}

