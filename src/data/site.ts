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
  yearsExperience: 3,
  tagline: 'I build pixel-perfect Webflow sites with Client-First, and lightning-fast static sites with Astro.',
  email: 'hello@jonel.dev',
  // Contact form (Web3Forms). The access key is meant to be public: it only lets
  // the form send messages to hello@jonel.dev. Get it at web3forms.com.
  contactFormKey: 'bd9ea644-30c3-4999-8692-f5adbbc989c9',
  photo: '/jonel.png',
  available: true, // shows the "Available for work" badge on the home page
  // Shown in the hero and contact section. Employers and agencies look for this.
  availability: 'Based in the Philippines (GMT+8) · Flexible hours, including US time zones',

  // Add links here as you set them up. Empty = hidden on the site.
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonellelis/' },
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
      company: 'Monstrum',
      role: 'Webflow Developer',
      period: 'Nov 2024 – Present',
      text: 'Build agency client sites in Webflow with Client-First, including the TrialMatrix product site and the DLP Sucks campaign site with HubSpot form integration.',
    },
    {
      company: 'WebPowerhouse',
      role: 'Webflow Developer (Project-Based)',
      period: 'Nov 2024 – Dec 2025',
      text: 'Developed responsive Client-First builds from Figma for projects including BYD and Kia, with CMS collections, dynamic pages, SEO and performance work alongside designers and PMs.',
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
    {
      company: 'Freelance',
      role: 'Webflow Developer (Side Projects)',
      period: '2022 – 2023',
      text: 'Took on Webflow builds and fixes for clients I met through the Webflow developer community, working directly with each client.',
    },
  ],
};
