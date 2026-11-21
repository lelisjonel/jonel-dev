// src/data/site.ts
// -----------------------------------------------------------------------------
// Site-wide info in ONE place. Change your name, links or email here and every
// page updates. Webflow comparison: like a global "Site Settings" CMS item.
// -----------------------------------------------------------------------------
export const site = {
  name: 'Jonel',
  fullName: 'Jonel Lelis',
  role: 'Webflow & Astro Developer',
  location: 'Metro Manila, Philippines',
  yearsExperience: 4,
  tagline: 'I build pixel-perfect Webflow sites with Client-First, and lightning-fast static sites with Astro.',
  email: 'lelisjonel@gmail.com',
  bookingUrl: 'https://calendly.com/jonellelis/discovery-call',
  photo: '/jonel.png',
  available: true, // shows the "Available for work" badge on the home page

  // Add links here as you set them up. Empty = hidden on the site.
  socials: [
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' }, // add back once recovered
    // { label: 'GitHub', href: 'https://github.com/...' },
    // { label: 'Webflow', href: 'https://webflow.com/@...' },
  ] as { label: string; href: string }[],

  services: [
    {
      title: 'Webflow + Client-First',
      text: 'Pixel-accurate Figma to Webflow builds using the Client-First system: predictable class names, clean structure and a site your team can edit with confidence.',
    },
    {
      title: 'Astro Development',
      text: 'Static marketing sites and blogs built with Astro: near-instant load times, content in Markdown, free hosting and automatic deploys on Netlify or Vercel.',
    },
    {
      title: 'CMS, Interactions & SEO',
      text: 'CMS collections and dynamic pages, GSAP and native interactions, plus semantic HTML and page speed tuning so the site ranks and loads fast.',
    },
  ],

  tools: [
    'Webflow', 'Client-First', 'Relume', 'GSAP', 'Figma',
    'HTML', 'CSS', 'JavaScript', 'jQuery', 'Astro', 'Git',
  ],

  experience: [
    {
      company: 'Islands',
      role: 'Webflow Developer (Part-Time)',
      period: 'Mar 2025 – Present',
      text: 'Build and maintain marketing and brand websites, using Relume components to move fast, with QA across desktop, tablet and mobile.',
    },
    {
      company: 'WebPowerhouse',
      role: 'Webflow Developer (Part-Time)',
      period: 'Nov 2024 – Present',
      text: 'Develop responsive Client-First builds from Figma, with CMS collections, dynamic pages, SEO and performance work alongside designers and PMs.',
    },
    {
      company: 'Dorxata',
      role: 'Junior Webflow Developer (Full-Time)',
      period: 'Nov 2023 – Sep 2024',
      text: 'Built page layouts, animations and CMS integrations, and supported senior developers with updates, fixes and optimizations.',
    },
    {
      company: 'Kristin Bertolini Agency',
      role: 'Funnel Developer (Webflow)',
      period: 'Aug 2023 – Oct 2023',
      text: 'Developed campaign landing pages and funnels from Figma, optimizing page performance for launches.',
    },
  ],
};
