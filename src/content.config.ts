// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Grandstand Reviews Collection
const grandstands = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/grandstands' }),
  schema: z.object({
    title: z.string(),
    circuit: z.string().optional(),
    viewRating: z.string().optional(),
    covered: z.boolean().optional(),
  }),
});

// 2. Where to Watch (TV & Streaming) Collection
const tvGuides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/tvGuides' }),
  schema: z.object({
    title: z.string(),
    region: z.string().optional(),
    broadcaster: z.string().optional(),
  }),
});

// 3. F1 Creators & Podcasts Collection
const creators = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/creators' }),
  schema: z.object({
    title: z.string(),
    type: z.string().optional(),
    category: z.string().optional(),
    link: z.string().optional(),
  }),
});

// 4. Drivers Collection
const drivers = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/drivers' }),
  schema: z.object({
    name: z.string(),
    code: z.string(),
    number: z.number(),
    team: z.string(),
    teamColor: z.string(),
    countryCode: z.string(),
    nationality: z.string(),
    worldTitles: z.number().optional().default(0),
    dob: z.string().optional(),
    birthplace: z.string().optional(),
    debut: z.string().optional(),
    socials: z.object({
      instagram: z.string().optional(),
      x: z.string().optional(),
    }).optional(),
  }),
});

// 5. The Racing Line (SEO Articles)
const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    description: z.string(),
    // z.coerce.date() safely converts TinaCMS strings into Astro Date objects
    date: z.coerce.date(), 
  }),
});

// 6. Team Weekly Stats
const teamStats = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/teamStats' }),
  schema: z.object({
    teamName: z.string(),
    slug: z.string(),
    poles: z.number().default(0),
    fastestLaps: z.number().default(0),
    championships: z.string().default("0 Constructors' / 0 Drivers'"),
  }),
});

// EXPORT ALL ACTIVE COLLECTIONS
export const collections = {
  grandstands,
  tvGuides,
  creators,
  drivers,
  news,
  teamStats,
};