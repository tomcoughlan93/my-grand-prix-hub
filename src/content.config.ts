// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Circuit Guides
const circuits = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/circuits' }),
  schema: z.object({
    title: z.string().optional(),
    country: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

// 2. Grandstand Reviews
const grandstands = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/grandstands' }),
  schema: z.object({
    title: z.string().optional(),
    circuit: z.string().optional(),
    viewRating: z.string().optional(),
    covered: z.boolean().optional(),
    heroImage: z.string().optional(),
  }),
});

// 3. City & Pub Guides
const cityGuides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/cityGuides' }),
  schema: z.object({
    title: z.string().optional(),
    city: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

// 4. Ticket & Travel Advice
const travelTickets = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/travelTickets' }),
  schema: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  circuits,
  grandstands,
  cityGuides,
  travelTickets,
};