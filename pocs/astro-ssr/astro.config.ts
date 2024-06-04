/* eslint-disable sort-keys */
import nodejs from '@astrojs/node';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// returns AstroUserConfig
// https://astro.build/config
export default defineConfig({
    site: 'https://tomekf.pl/',
    output: 'server',
    adapter: nodejs({ mode: 'standalone' }),
    compressHTML: true,
    build: { inlineStylesheets: 'always' },
    trailingSlash: 'never',
    integrations: [tailwind({ applyBaseStyles: false }), solidJs()],
});
