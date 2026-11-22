import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site.config';

export const GET: APIRoute = () => {
  const cleanDomain = siteConfig.siteDomain.replace(/\/$/, '');
  const sitemapUrl = `${cleanDomain}/sitemap-index.xml`;
  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
