import typograpy from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [typograpy, daisyui],
  daisyui: {
    themes: ['dark', 'light'],
  },
} satisfies Config;
