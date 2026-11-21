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
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),                 // one line, shown on cards
    client: z.string(),
    type: z.string(),                    // e.g. "Multi-page marketing site"
    year: z.number().optional(),
    role: z.string(),
    stack: z.array(z.string()),
    liveUrl: z.string().url().optional(), // link to the live site, if any
    cover: image().optional(),             // hero screenshot, e.g. ../../assets/work/kitci.png
    coverAlt: z.string().optional(),
    accent: z.string().default('#c6f36b'), // card colour, used when there is no cover
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
  // `image()` checks the cover file exists and lets Astro optimize it.
  schema: ({ image }) => z.object({
    title: z.string(),                   // keep under ~60 characters for Google
    description: z.string(),             // 140–160 characters, shown in search results
    pubDate: z.coerce.date(),            // "2026-11-22" in the file -> a real Date
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: image().optional(),           // thumbnail + share image, e.g. ./images/my-post.webp
    coverAlt: z.string().optional(),     // describe the cover for Google and screen readers
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, blog };
