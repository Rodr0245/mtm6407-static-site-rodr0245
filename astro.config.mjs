// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static', 
  site: 'https://rodr0245.github.io/mtm6407-static-site-rodr0245', // Correct URL for GitHub Pages
  build: {
    out: './dist',  // Ensure the output directory is set to 'dist'
  },
});
