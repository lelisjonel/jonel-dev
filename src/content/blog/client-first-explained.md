---
title: "Client-First Explained: Why I Use It on Every Webflow Build"
description: "What the Client-First system is, how its class naming works, and why it makes Webflow sites easier for clients and teams to edit after launch."
pubDate: 2026-11-22
tags: [Webflow, Client-First]
# DRAFT: written by Claude as a starting point. Rewrite it in your own words,
# add a real example from your work, then delete this line and `draft: true`.
draft: true
---

If you've ever opened someone else's Webflow project and found classes like
`div-block-47` and `text-block-12-copy`, you already know why naming matters.
**Client-First** is the naming system I use on every Webflow build, and it's the
reason my clients can still edit their sites months after launch.

## What is Client-First?

Client-First is a free set of guidelines by Finsweet for organizing a Webflow
project. It gives every class a clear, predictable name, so anyone who opens the
Designer can understand the structure without asking the original developer.

## How the naming works

Client-First splits classes into two kinds:

- **Custom classes** use an underscore to show which component they belong to,
  like `hero_title` or `team-card_image`.
- **Utility classes** use dashes and do one job, like `text-size-large`,
  `padding-section-medium` or `max-width-small`.

Every page also follows the same skeleton:

```html
<div class="page-wrapper">
  <main class="main-wrapper">
    <section class="section_hero">
      <div class="padding-global">
        <div class="container-large">
          <!-- content -->
        </div>
      </div>
    </section>
  </main>
</div>
```

## Why it matters for clients

1. **Easy handoff.** A new developer or a marketer can find the right element fast.
2. **Fewer broken layouts.** Utility classes mean fewer one-off styles to accidentally change.
3. **Faster updates.** New sections are built from the same building blocks, so they match the rest of the site.

<!-- TODO (Jonel): add a short story from a real project, e.g. a client who
could update their own pages because of Client-First. -->

## Final thoughts

Client-First adds a little planning at the start of a project, and saves hours
for everyone who touches the site afterwards. If you need a Webflow site that's
built to last, that's exactly how I work.
