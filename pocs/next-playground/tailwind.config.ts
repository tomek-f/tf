import { fontFamily } from 'tailwindcss/defaultTheme';

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
            fontFamily: {
                'nunito-sans': ['var(--font-nunito-sans)', ...fontFamily.sans],
            },
            screens: {
                '3xl': '1920px',
            },
        },
    },
} satisfies Config;

// postcss.config.cjs not needed as it is configured in package.json
// /** @type {import('postcss-load-config').Config} */
// const config = {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// };

// module.exports = config;
