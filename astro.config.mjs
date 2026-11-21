// astro.config.mjs
// -----------------------------------------------------------------------------
// The main settings file for the whole project.
// Webflow comparison: like Site Settings, but written as code.
// -----------------------------------------------------------------------------
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Does the blog have at least one published (non-draft) post?
// If not, /blog is left out of the sitemap so Google doesn't find an empty page.
const blogDir = new URL('./src/content/blog/', import.meta.url);
const hasPublishedPosts = readdirSync(blogDir)
  .filter((f) => f.endsWith('.md'))
  .some((f) => !/^draft:\s*true/m.test(readFileSync(new URL(f, blogDir), 'utf8')));

export default defineConfig({
  // Your real domain. Used for canonical URLs, social share tags and the sitemap.
  site: 'https://www.jonel.dev',

  // Every page becomes plain HTML at build time. Vercel just serves /dist.
  output: 'static',

  integrations: [
    // Builds /sitemap-index.xml automatically: a list of every page for Google.
    // Webflow comparison: the "Auto-generate Sitemap" toggle in SEO settings.
    sitemap({
      filter: (page) => !page.endsWith('/404/') && (hasPublishedPosts || !page.includes('/blog/')),
    }),
  ],
});
