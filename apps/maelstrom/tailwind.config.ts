import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
} satisfies Config;
