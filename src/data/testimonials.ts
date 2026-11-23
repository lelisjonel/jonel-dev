// src/data/testimonials.ts
// -----------------------------------------------------------------------------
// Real client quotes only. Ask the person first and copy their words as written.
// While this list is empty, the Testimonials section stays hidden on the live
// site (you'll see labeled placeholders only when running `npm run dev`).
//
// Example:
// {
//   quote: 'Jonel turned our Figma file into a pixel-perfect Webflow site in two weeks.',
//   name: 'Jane Doe',
//   role: 'Design Lead, Monstrum',
//   url: 'https://www.linkedin.com/in/janedoe/', // optional: their LinkedIn
// },
// -----------------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  name: string;
  role: string; // job title and company
  url?: string;
}

export const testimonials: Testimonial[] = [];
