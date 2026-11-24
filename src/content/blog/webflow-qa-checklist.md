---
title: "Webflow QA Checklist: 8 Checks Before You Publish"
description: "A Webflow QA checklist for every launch: breakpoints, CMS edge cases, forms, interactions, links, SEO settings, page speed and clean Client-First structure."
pubDate: 2026-12-15
tags: [Webflow, Client-First, SEO]
draft: true
---

Most Webflow bugs aren't hard to fix. They're hard to *notice*. A heading that
wraps badly at 991px, a CMS item with no image, a form that sends to nobody.
Clients find these on launch day, and that's the worst time to find anything.

This is the Webflow QA checklist I run on staging before I hit Publish on any
site. It's for Webflow developers, designers who build their own sites, and
teams who want to know what a careful launch looks like.

## 1. Layout on every breakpoint

Webflow gives you four breakpoints by default, but real screens sit between them.
I check each page at:

- **Desktop:** 1920px, 1440px and 1280px
- **Tablet:** 991px and 768px
- **Mobile:** 479px and 375px

At each size I look for text that overflows its container, buttons that wrap onto
two lines, and images that stretch or crop the wrong way. Then I drag the canvas
slowly from wide to narrow. Most layout bugs show up *between* breakpoints, not on them.

## 2. Real content, not just the Figma copy

Figma files usually have perfect, short placeholder text. Real content doesn't.
For every CMS collection I test:

- The **longest** title in the collection, and a very short one
- An item with **no image** or an empty optional field
- A rich text field with headings, lists, links and an image inside

If the layout only works with the designer's sample text, it isn't finished.

## 3. Forms

Every form gets a real test submission. I check that:

- The notification email arrives, and goes to the right inbox
- The success and error messages are styled, not Webflow's defaults
- Required fields and email validation work on mobile
- If the form connects to HubSpot or another tool, the submission actually lands there

## 4. Interactions and animations

- Every interaction plays once and ends in the right state
- Nothing jumps or flickers on page load
- Menus open and close on mobile, and the page doesn't scroll behind an open menu
- Animations respect reduced motion, so they don't get in the way of people who turn it off

## 5. Links and navigation

- No `#` placeholder links left over from the build
- External links open in a new tab where it makes sense
- The 404 page is designed and links back home
- Nav and footer links match on every page

## 6. SEO settings

Webflow makes these easy to forget because they live in Page Settings, not on the canvas.

- Every page has a unique **title** and **meta description**
- CMS template pages pull their SEO fields from the collection
- **Open Graph** images are set, so links look right when shared
- One `h1` per page, and headings in order
- Every meaningful image has **alt text**
- The sitemap is on and staging isn't indexed

## 7. Speed

I run the staging link through [PageSpeed Insights](https://pagespeed.web.dev/)
on mobile and look at the biggest problems first. Usually it's oversized images,
too many fonts, or a heavy third-party script. Webflow handles a lot of
performance for you, but it can't shrink a 4MB hero image you uploaded.
(For what a perfect score takes on a static site, see
[how I scored 100 on PageSpeed with Astro](/blog/astro-portfolio-pagespeed-100).)

## 8. Clean structure for whoever comes next

Last, I open the Navigator and the style panel and check that the build follows
[Client-First](/blog/client-first-explained): no `div-block-23`, no unused classes,
and components where sections repeat. Someone else will edit this site after
me, and they should be able to find their way around without calling me.

## FAQ

**How long does Webflow QA take?**
For a 5–10 page marketing site, I plan for a few hours. CMS-heavy sites take longer
because every collection template needs testing with real content.

**Should I QA on staging or the live site?**
Staging, always. Publish to the webflow.io subdomain first, run the checklist,
and only push to the custom domain once everything passes.

**What breakpoints should I test in Webflow?**
Test Webflow's default breakpoints, then common widths in between, such as 1440px,
1280px and 375px. Most layout bugs appear between breakpoints.

## Final thoughts

None of these checks take long on their own. The point is doing all of them,
every time, before the client sees the site. That's what makes launch day boring,
and boring is exactly what you want.
