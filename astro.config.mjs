// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL,
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
