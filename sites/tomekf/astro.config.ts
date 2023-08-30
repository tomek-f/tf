import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // experimental: {
  //   viewTransitions: true,
  // },
  site: 'https://tomekf.pl/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({ filter: (page) => !page.includes('/blog') }),
    react(),
  ],
  vite: {
    ssr: {
      external: ['@11ty/eleventy-img'],
      noExternal: ['@radix-ui/*'],
    },
  },
});
