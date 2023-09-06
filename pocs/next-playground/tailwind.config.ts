import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/utils/**/*.{js,ts,jsx,tsx}',
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
