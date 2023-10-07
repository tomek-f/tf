import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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

// postcss.config.js not needed as it is configured in package.json
// /** @type {import('postcss-load-config').Config} */
// const config = {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// };

// export default config;
