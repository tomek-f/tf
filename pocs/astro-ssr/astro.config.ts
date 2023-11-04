/* eslint-disable sort-keys */
// import nodejs from '@astrojs/node';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
// Use Vercel Edge Functions (Recommended)
// import vercel from '@astrojs/vercel/edge';
// Can also use Serverless Functions
import vercel from '@astrojs/vercel/serverless';
// Or a completely static build
// import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

// returns AstroUserConfig
// https://astro.build/config
export default defineConfig({
    site: 'https://tomekf.pl/',
    output: 'server',
    // adapter: nodejs({ mode: 'standalone' }),
    adapter: vercel(/* { imageService: true } */),
    compressHTML: true,
    build: { inlineStylesheets: 'always' },
    trailingSlash: 'never',
    integrations: [tailwind({ applyBaseStyles: false }), solidJs()],
});
