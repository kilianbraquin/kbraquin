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
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Recursive',
      cssVariable: '--font-recursive',
      display: 'swap',
      optimizedFallbacks: true,
      weights: [400, 700],
    },
  ],
});
