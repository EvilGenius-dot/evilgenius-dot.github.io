import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { SUPPORTED_LOCALES } from "./docs-config.mjs";
import { docsRoot, listDefaultDocs, toTitle } from "./docs-utils.mjs";

const args = process.argv.slice(2);
const options = {
    category: "guide",
    categoryOrder: 1,
    categoryTitle: "",
};
const positional = [];

for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--category") {
        options.category = args[index + 1] || options.category;
        index += 1;
        continue;
    }

    if (arg === "--category-title") {
        options.categoryTitle = args[index + 1] || options.categoryTitle;
        index += 1;
        continue;
    }

    if (arg === "--category-order") {
        options.categoryOrder = Number(args[index + 1] || 1);
        index += 1;
        continue;
    }

    positional.push(arg);
}

const [rawSlug, ...rawTitleParts] = positional;

if (!rawSlug) {
    console.error('Usage: npm run docs:new -- "my-topic" "My Topic"');
    console.error(
        'With category: npm run docs:new -- "my-topic" "My Topic" --category advanced --category-title "Advanced" --category-order 3',
    );
    process.exit(1);
}

const slug = rawSlug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const id = slug.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
const category = options.category
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const title = rawTitleParts.join(" ").trim() || toTitle(slug);
const categoryTitle = options.categoryTitle.trim() || toTitle(category);
const docs = await listDefaultDocs();
const nextOrder = Math.max(...docs.map((doc) => doc.order), 0) + 1;
const file = `${String(nextOrder).padStart(2, "0")}-${slug}.md`;

for (const locale of SUPPORTED_LOCALES) {
    const dir = join(docsRoot, locale, "guide");
    const filePath = join(dir, file);

    if (existsSync(filePath)) {
        throw new Error(`${filePath} already exists`);
    }

    await mkdir(dir, { recursive: true });
    await writeFile(
        filePath,
        `---
id: ${id}
slug: ${slug}
title: ${title}
navTitle: ${title}
description: TODO: Write a concise SEO description for ${title}.
category: ${category}
categoryTitle: ${categoryTitle}
categoryOrder: ${options.categoryOrder}
order: ${nextOrder}
---

# ${title}

## Overview

TODO: Write this section.
`,
    );
}

console.log(`Created ${file} for ${SUPPORTED_LOCALES.join(", ")}`);
console.log(
    "Edit the frontmatter titles/descriptions for each language, then run npm run docs:generate.",
);
