import type { Config } from 'tailwindcss';

export default {
    // darkMode: 'class',
    content: ['./src/**/*.{astro,tsx}', './src/styles/**/*.ts'],
    theme: {
        extend: {
            animation: {
                float: 'float 1.5s linear infinite alternate',
                'float-long': 'float-long 2s linear infinite alternate',
                // 'spin-slow': 'spin 0.5s linear infinite', // one-off animation class animate-[spin_0.5s_linear_infinite]
            },
            keyframes: {
                float: {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '100%': { transform: 'translate3d(0.5rem, 0.5rem, 0)' },
                },
                'float-long': {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '100%': { transform: 'translate3d(1.5rem, 1.5rem, 0)' },
                },
            },
            screens: {
                '3xl': '1920px',
            },
        },
    },
} satisfies Config;
