/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif'],
      },
      colors: {
        'green' : '#3B755F',
        'blue'  : '#2E3A8C',
        'beige' : '#F2EBDB',
        'gray'  : '#B0B0B0',
        'gray-100'  : '#F9F9F9',
      },
    },
  },
  plugins: [],
};

