# Documentation Maintenance

Docs are maintained as Markdown files with frontmatter. Routes, sidebar labels, SEO metadata, previous/next links, and `public/sitemap.xml` are generated from the Markdown metadata.

## Create a New Page

```bash
npm run docs:new -- my-topic "My Topic"
```

Create a page in a specific sidebar category:

```bash
npm run docs:new -- advanced-config "Advanced Config" --category advanced --category-title "Advanced" --category-order 3
```

This creates matching files under:

```text
src/docs/en/guide/
src/docs/zh/guide/
src/docs/ru/guide/
```

Edit each language file and update the frontmatter:

```md
---
id: myTopic
slug: my-topic
title: My SEO Page Title
navTitle: My Topic
description: A concise search result description.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 6
---
```

Category fields control the sidebar grouping:

- `category` is the stable group id and must match across languages.
- `categoryTitle` is the localized group label shown in the sidebar.
- `categoryOrder` controls the group order.
- `order` controls the page order inside the generated docs list.

## Delete a Page

Preview the files that will be removed:

```bash
npm run docs:delete -- my-topic --dry-run
```

Delete the page from every language and regenerate metadata:

```bash
npm run docs:delete -- my-topic
```

The target can be the document `id`, `slug`, or Markdown filename. The command removes the matching file from:

```text
src/docs/en/guide/
src/docs/zh/guide/
src/docs/ru/guide/
```

## Regenerate Metadata

```bash
npm run docs:generate
```

This updates:

```text
src/docs/generated.js
public/sitemap.xml
```

`npm run build` runs this automatically through `prebuild`.

## Rules

- Keep the same `id`, `slug`, `file`, and `order` across all languages.
- Keep the same `category` and `categoryOrder` across all languages.
- Use `title` for SEO page titles.
- Use `navTitle` for the sidebar and previous/next links.
- Use `description` for meta descriptions and search snippets.
- Use `categoryTitle` for the localized sidebar group heading.
- Keep one top-level `#` heading in each Markdown file; the page layout renders the SEO title as the only page H1.
