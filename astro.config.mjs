// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Recursive',
        cssVariable: '--font-recursive',
        display: 'swap',
        fallbacks: ['sans-serif'],
        optimizedFallbacks: false,
        weights: [400, 700],
      },
    ],
  },
});
