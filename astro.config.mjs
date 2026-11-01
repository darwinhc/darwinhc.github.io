// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://darwinhc.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  redirects: {
    '/about': '/#about',
    '/categories': '/writing/',
    '/tags': '/writing/',
    '/archives': '/writing/',
  },
});
