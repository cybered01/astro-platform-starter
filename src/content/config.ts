import { defineCollection, z } from 'astro:content';

// Define the schema for a single news article
const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('The Singular Team'),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

// Export the collection
export const collections = {
  'news': newsCollection,
};