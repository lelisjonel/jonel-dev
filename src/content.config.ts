// src/content.config.ts
// -----------------------------------------------------------------------------
// THIS IS YOUR "CMS SCHEMA".
//
// Webflow comparison:
//   - `work` = one CMS Collection called "Work" (your portfolio projects)
//   - `schema` = the Collection's fields
//
// Each project lives in src/content/work/*.md. The file name is the slug:
// astro-marketing-site.md -> /work/astro-marketing-site
// -----------------------------------------------------------------------------
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),                 // one line, shown on cards
    client: z.string(),
    type: z.string(),                    // e.g. "Multi-page marketing site"
    year: z.number().optional(),
    role: z.string(),
    stack: z.array(z.string()),
    liveUrl: z.string().url().optional(), // link to the live site, if any
    accent: z.string().default('#c6f36b'), // colour of the card thumbnail
    featured: z.boolean().default(false),  // featured = shown on the home page
    order: z.number().default(99),         // lower number = shown first
    draft: z.boolean().default(false),
  }),
});

// --- Blog posts --------------------------------------------------------------
// Each post lives in src/content/blog/*.md. The file name is the slug:
// client-first-explained.md -> /blog/client-first-explained
// `draft: true` posts show on localhost only, never on the live site.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),                   // keep under ~60 characters for Google
    description: z.string(),             // 140–160 characters, shown in search results
    pubDate: z.coerce.date(),            // "2026-11-22" in the file -> a real Date
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, blog };
