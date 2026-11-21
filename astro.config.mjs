// astro.config.mjs
// -----------------------------------------------------------------------------
// The main settings file for the whole project.
// Webflow comparison: like Site Settings, but written as code.
// -----------------------------------------------------------------------------
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Your real domain. Used for canonical URLs and social share tags.
  site: 'https://jonel.dev',

  // Every page becomes plain HTML at build time. Netlify just serves /dist.
  output: 'static',
});
