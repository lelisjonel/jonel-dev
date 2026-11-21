---
# HOW TO USE
# 1. Copy this whole file into src/content/blog/
# 2. Rename it. The file name becomes the URL:
#    my-new-post.md  ->  jonel.dev/blog/my-new-post
#    Use lowercase and dashes only, no spaces.
# 3. Fill in the fields below, write your post, then save.
# 4. Preview with `npm run dev` at http://localhost:4321/blog
# 5. When ready, delete the `draft: true` line and git push. Live in ~10 seconds.
#
# COVER IMAGE: best size is 1200 x 675 px (16:9). WebP, PNG or JPG all work.
# No cover yet? Delete the `cover` and `coverAlt` lines.
#
# (These # lines are comments. You can delete them in your copy.)

title: "Your Post Title Here"             # under ~60 characters
description: "One or two sentences about the post. This shows in Google results, so make it clear and specific. Aim for 140 to 160 characters."
pubDate: 2026-11-22                        # YYYY-MM-DD
tags: [Webflow, Client-First]              # any words you like
cover: ./images/your-post-name.webp        # thumbnail + share image (optional). File goes in src/content/blog/images/
coverAlt: "Describe the cover image"       # what the image shows, for Google and screen readers
draft: true                                # delete this line to publish
---

Start with a short intro: what problem this post solves and who it's for.

## First section heading

Normal paragraph text. **Bold text** looks like this, and *italic* like this.
A [link looks like this](https://www.jonel.dev).

- Bullet point
- Another bullet point

1. Numbered step
2. Another step

## Second section heading

> A quote or key takeaway looks like this.

Inline code looks like `hero_title`. A code block looks like this:

```html
<div class="section_hero">
  <div class="padding-global">Hello</div>
</div>
```

To add an image, put the file in `src/content/blog/images/` and write:

![Describe the image for Google and screen readers](./images/my-image.png)

Astro automatically converts it to WebP, resizes it and lazy-loads it.

## Final thoughts

Wrap up in a few sentences. The "Book a discovery call" box is added
automatically at the end of every post.
