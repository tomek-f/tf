import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// return AstroUserConfig
// https://astro.build/config
export default defineConfig({
    site: 'https://tomekf.pl/',
    compressHTML: true,
    build: { inlineStylesheets: 'always' },
    trailingSlash: 'never',
    integrations: [
        tailwind({ applyBaseStyles: false }),
        mdx(),
        // sitemap(),
        sitemap({
            filter: (page) =>
                !page.includes('/blog') && !page.includes('/media'),
        }),
        solidJs(),
    ],
    // vite: {
    //     ssr: {
    //         // external: ['@11ty/eleventy-img'],
    //         // noExternal: ['@radix-ui/*'],
    //     },
    // },
});
