import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Or your specific host adapter (vercel, netlify, etc.)

export default defineConfig({
  output: 'server', // <-- This is the magic word!
  adapter: node({
    mode: "standalone"
  })
});