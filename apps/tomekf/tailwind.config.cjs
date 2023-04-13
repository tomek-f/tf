/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,tsx}', './src/styles/**/*.ts'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      keyframes: {
        float32: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, 2rem, 0)' },
        },
        float16: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, 1rem, 0)' },
        },
        float8: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0.5rem, 0)' },
        },
      },
      animation: {
        float32: 'float32 linear 3s infinite alternate',
        float16: 'float16 linear 1.5s infinite alternate',
        float8: 'float8 linear 1.5s infinite alternate',
        float8long: 'float8 linear 3s infinite alternate',
      },
    },
  },
  plugins: [],
};
