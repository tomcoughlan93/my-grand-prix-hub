import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Circuits Collection
const circuits = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/circuits' }),
  schema: z.object({
    title: z.string(),
    country: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

// 2. Grandstand Reviews Collection
const grandstands = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/grandstands' }),
  schema: z.object({
    title: z.string(),
    circuit: z.string().optional(),
    viewRating: z.string().optional(),
    covered: z.boolean().optional(),
  }),
});

// 3. City & Fan Guides Collection
const cityGuides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/cityGuides' }),
  schema: z.object({
    title: z.string(),
    city: z.string().optional(),
  }),
});

// 4. Travel & Tickets Advice Collection
const travelTickets = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/travelTickets' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

// 5. Where to Watch (TV & Streaming) Collection
const tvGuides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/tvGuides' }),
  schema: z.object({
    title: z.string(),
    region: z.string().optional(),
    broadcaster: z.string().optional(),
  }),
});

// 6. F1 Creators & Podcasts Collection
const creators = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/creators' }),
  schema: z.object({
    title: z.string(),
    type: z.string().optional(),
    category: z.string().optional(),
    link: z.string().optional(),
  }),
});

// 7. Drivers Collection
const drivers = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/drivers' }),
  schema: z.object({
    name: z.string(),
    team: z.string(),
    number: z.number(),
    country: z.string().optional(),
    heroImage: z.string().optional(),
    points: z.number().optional(),
    position: z.number().optional(),
  }),
});

// 8. Teams Collection
const teams = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/teams' }),
  schema: z.object({
    name: z.string(),
    fullTeamName: z.string().optional(),
    carModel: z.string().optional(),
    powerUnit: z.string().optional(),
    base: z.string().optional(),
    heroImage: z.string().optional(),
    points: z.number().optional(),
    position: z.number().optional(),
  }),
});

// EXPORT ALL COLLECTIONS TOGETHER
export const collections = {
  circuits,
  grandstands,
  cityGuides,
  travelTickets,
  tvGuides,
  creators,
  drivers,
  teams,
};