import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,tsx}', './src/styles/**/*.ts'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0.5rem, 0)' },
        },
      },
      animation: {
        float: 'float 1.5s linear infinite alternate',
        'float-long': 'float 3s linear infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;
