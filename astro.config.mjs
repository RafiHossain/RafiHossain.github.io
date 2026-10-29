// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// User site (RafiHossain.github.io) is served from the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://rafihossain.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Old page addresses from the first version of the site.
  redirects: {
    '/research': '/rnd/',
    '/projects': '/rnd/',
    '/publications': '/publication/',
    '/cv': '/contact/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
