import { defineConfig } from 'astro/config';

// 1. Remove the @astrojs/cloudflare import entirely

export default defineConfig({
  // 2. Change this from 'server' to 'static'
 site: 'https://my-grand-prix-hub.pages.dev',
 output: 'static', 
  
  // 3. Delete the adapter line completely
  
  // (Keep any other integrations you already had, like tailwind or react, down here)
});