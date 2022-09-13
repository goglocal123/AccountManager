/* eslint-disable */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D1125',
        // secondary: ' rgba(100, 100, 100, 0.52)',
        secondary: '#FFB259',
        secondary_a: 'rgba(255, 179, 89,0.3)',
        tertiary: 'rgba(217, 217, 217,0.3)',
      },
      boxShadow: {
        main: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(90deg, rgba(29,17,37,0.6895133053221288) 0%, rgba(29,17,37,0.7679446778711485) 100%), url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
    },
  },
  plugins: [],
};
