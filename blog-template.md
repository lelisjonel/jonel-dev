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
# (These # lines are comments. You can delete them in your copy.)

title: "Your Post Title Here"             # under ~60 characters
description: "One or two sentences about the post. This shows in Google results, so make it clear and specific. Aim for 140 to 160 characters."
pubDate: 2026-11-22                        # YYYY-MM-DD
tags: [Webflow, Client-First]              # any words you like
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

To add an image, put the file in `public/blog/` and write:

![Describe the image for Google and screen readers](/blog/my-image.png)

## Final thoughts

Wrap up in a few sentences. The "Book a discovery call" box is added
automatically at the end of every post.
