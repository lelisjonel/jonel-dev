// src/lib/blog.ts
// -----------------------------------------------------------------------------
// Helpers reused by the blog pages, the home page and the navbar.
// -----------------------------------------------------------------------------
import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Published posts, newest first.
 * On localhost (`npm run dev`) drafts are included so you can preview them.
 */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Formats a Date like "Nov 22, 2026". */
export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

/** Rough reading time, based on ~220 words per minute. */
export function readingTime(post: CollectionEntry<'blog'>) {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
