import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.config';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteDomain,
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/guide-achat/': '/#guide-achat',
  },
  integrations: [tailwind(), sitemap()],
});
