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

// 5. AI News & Previews Collection
const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()),
    author: z.string().default('AI Desk'),
  }),
});

// EXPORT ALL ACTIVE COLLECTIONS
export const collections = {
  grandstands,
  tvGuides,
  creators,
  drivers,
  news, 
};