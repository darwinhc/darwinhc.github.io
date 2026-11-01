import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const article = z.object({
  title: z.string(),
  date: z.coerce.date(),
  permalink: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/posts' }),
    schema: article,
  }),
  bisslog: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/bisslog' }),
    schema: article,
  }),
};
