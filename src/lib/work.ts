// src/lib/work.ts
// -----------------------------------------------------------------------------
// Helpers reused by several pages: "get projects, hide drafts, sort them".
// -----------------------------------------------------------------------------
import { getCollection } from 'astro:content';

/** All published projects, sorted by `order`, then newest year first. */
export async function getProjects() {
  const projects = await getCollection('work', ({ data }) => !data.draft);

  return projects.sort((a, b) => a.data.order - b.data.order || (b.data.year ?? 0) - (a.data.year ?? 0));
}

/** Only the projects marked `featured: true`. */
export async function getFeaturedProjects() {
  return (await getProjects()).filter((p) => p.data.featured);
}
