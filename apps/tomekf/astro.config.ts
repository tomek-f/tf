import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
// import critters from 'astro-critters';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomekf.pl/',
  build: { inlineStylesheets: 'always' },
  trailingSlash: 'never',
  integrations: [
    // critters(),
    tailwind({ config: { applyBaseStyles: false } }),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    compress({
      // logger: 3,
      html: { collapseWhitespace: true, removeComments: true },
      svg: { multipass: true, floatPrecision: 1 },
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
