# jonel.dev

My portfolio site, built with [Astro](https://astro.build) and deployed on Vercel. Every push to `main` deploys automatically.

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies (once)               |
| `npm run dev`     | Local preview at http://localhost:4321    |
| `npm run build`   | Build the finished site into `dist/`      |
| `npm run preview` | Preview the built site                    |

## Where to edit things

| What                          | File                                 |
| ----------------------------- | ------------------------------------ |
| Name, tagline, email, socials | `src/data/site.ts`                   |
| Calendly link (`bookingUrl`)  | `src/data/site.ts`                   |
| Work history (`experience`)   | `src/data/site.ts`                   |
| Services and tools            | `src/data/site.ts`                   |
| Projects (one file each)      | `src/content/work/*.md`              |
| Blog posts (one file each)    | `src/content/blog/*.md`              |
| Project fields (the schema)   | `src/content.config.ts`              |
| About page copy               | `src/pages/about.astro`              |
| Colours and fonts             | `src/styles/global.css` (`:root`)    |

## To do

- [ ] Add 1–2 sentences on your role and any result to each case study in `src/content/work/`
      (KITCI, DLP Sucks, Golf Ranch, DesignXP, TrialMatrix, Giving Green, Hire Smart Solution, yeebee).
      For Golf Ranch and Giving Green, confirm the maintenance tasks and how long you've maintained them.
- [ ] Testimonials
- [ ] Social links in `src/data/site.ts` once set up

## Writing a blog post

Copy `blog-template.md` into `src/content/blog/`, rename it (the file name is
the URL), fill it in, and delete `draft: true` when it's ready to publish.
Put images in `src/content/blog/images/` and link them as `./images/name.png`;
Astro converts them to WebP automatically.

## Adding a project

Create `src/content/work/my-project.md`, copy the frontmatter from an existing
project, and set `featured: true` to show it on the home page. It appears at
`/work/my-project` automatically.
