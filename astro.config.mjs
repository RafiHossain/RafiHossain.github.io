// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// User site (RafiHossain.github.io) is served from the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://rafihossain.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
