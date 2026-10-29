import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import llmsTxt from './src/integrations/llms-txt';

// astro-deploy sets `site` to the real production domain and adds
// an adapter (@astrojs/vercel, @astrojs/netlify, @astrojs/cloudflare)
// when the hosting target is chosen. Defaults to static output.
export default defineConfig({
  site: 'https://questprofessionalllc.com',
  integrations: [sitemap(), mdx(), llmsTxt()],
  output: 'static',
});
