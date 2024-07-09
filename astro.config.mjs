import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://empee3.github.io',
  base: 'dist/',
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind()]
});
