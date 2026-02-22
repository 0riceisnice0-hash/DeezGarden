import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://deezgardens.co.uk',
  base: '/',
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date(),
      serialize(item) {
        const url = item.url;
        // Homepage gets highest priority
        if (url === 'https://deezgardens.co.uk/' || url === 'https://deezgardens.co.uk') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Service pages get high priority
        else if (url.includes('/services/') && !url.endsWith('/services/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Services index
        else if (url.endsWith('/services/') || url.endsWith('/services')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Area/location pages - critical for local SEO
        else if (url.includes('/areas/') && !url.endsWith('/areas/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Areas index
        else if (url.endsWith('/areas/') || url.endsWith('/areas')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Contact page
        else if (url.includes('/contact')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Reviews page
        else if (url.includes('/reviews')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Gallery page
        else if (url.includes('/gallery')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Default
        else {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
  output: 'static',
});
