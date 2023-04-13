import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import critters from 'astro-critters';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomekf.pl/',
  trailingSlash: 'never',
  integrations: [
    critters(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    compress({
      // logger: 3,
      html: {
        collapseWhitespace: true,
        removeComments: true,
      },
      svg: {
        multipass: true,
        floatPrecision: 1,
        // plugins: [
        //   { name: 'removeDoctype', params: { floatPrecision: 1 } },
        //   { name: 'removeXMLProcInst', params: { floatPrecision: 1 } },
        //   { name: 'removeComments', params: { floatPrecision: 1 } },
        //   { name: 'removeMetadata', params: { floatPrecision: 1 } },
        //   { name: 'removeEditorsNSData', params: { floatPrecision: 1 } },
        //   { name: 'cleanupAttrs', params: { floatPrecision: 1 } },
        //   { name: 'mergeStyles', params: { floatPrecision: 1 } },
        //   { name: 'inlineStyles', params: { floatPrecision: 1 } },
        //   { name: 'minifyStyles', params: { floatPrecision: 1 } },
        //   { name: 'convertStyleToAttrs', params: { floatPrecision: 1 } },
        //   { name: 'cleanupIDs', params: { floatPrecision: 1 } },
        //   { name: 'removeRasterImages', params: { floatPrecision: 1 } },
        //   { name: 'removeUselessDefs', params: { floatPrecision: 1 } },
        //   { name: 'cleanupNumericValues', params: { floatPrecision: 1 } },
        //   { name: 'cleanupListOfValues', params: { floatPrecision: 1 } },
        //   { name: 'convertColors', params: { floatPrecision: 1 } },
        //   { name: 'removeUnknownsAndDefaults', params: { floatPrecision: 1 } },
        //   { name: 'removeNonInheritableGroupAttrs', params: { floatPrecision: 1 } },
        //   { name: 'removeUselessStrokeAndFill', params: { floatPrecision: 1 } },
        //   { name: 'removeViewBox', params: { floatPrecision: 1 } },
        //   { name: 'cleanupEnableBackground', params: { floatPrecision: 1 } },
        //   { name: 'removeHiddenElems', params: { floatPrecision: 1 } },
        //   { name: 'removeEmptyText', params: { floatPrecision: 1 } },
        //   { name: 'convertShapeToPath', params: { floatPrecision: 1 } },
        //   { name: 'moveElemsAttrsToGroup', params: { floatPrecision: 1 } },
        //   { name: 'moveGroupAttrsToElems', params: { floatPrecision: 1 } },
        //   { name: 'collapseGroups', params: { floatPrecision: 1 } },
        //   { name: 'convertPathData', params: { floatPrecision: 1 } },
        //   { name: 'convertEllipseToCircle', params: { floatPrecision: 1 } },
        //   { name: 'convertTransform', params: { floatPrecision: 1 } },
        //   { name: 'removeEmptyAttrs', params: { floatPrecision: 1 } },
        //   { name: 'removeEmptyContainers', params: { floatPrecision: 1 } },
        //   { name: 'mergePaths', params: { floatPrecision: 1 } },
        //   { name: 'removeUnusedNS', params: { floatPrecision: 1 } },
        //   { name: 'reusePaths', params: { floatPrecision: 1 } },
        //   { name: 'sortDefsChildren', params: { floatPrecision: 1 } },
        //   { name: 'removeTitle', params: { floatPrecision: 1 } },
        //   { name: 'removeDesc', params: { floatPrecision: 1 } },
        //   { name: 'removeDimensions', params: { floatPrecision: 1 } },
        //   { name: 'removeStyleElement', params: { floatPrecision: 1 } },
        //   { name: 'removeScriptElement', params: { floatPrecision: 1 } },
        // ],
      },
    }),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/blog'),
    }),
    react(),
  ],
  vite: {
    ssr: {
      external: ['@11ty/eleventy-img'],
    },
  },
});
