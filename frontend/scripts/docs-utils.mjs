import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./docs-config.mjs";

export const repoRoot = new URL("..", import.meta.url).pathname;
export const docsRoot = join(repoRoot, "src/docs");

export const parseFrontmatter = (source, filePath = "markdown") => {
    if (!source.startsWith("---\n")) {
        throw new Error(`${filePath} is missing frontmatter`);
    }

    const closingIndex = source.indexOf("\n---", 4);

    if (closingIndex === -1) {
        throw new Error(`${filePath} has an unterminated frontmatter block`);
    }

    const raw = source.slice(4, closingIndex).trim();
    const body = source.slice(closingIndex + 4).replace(/^\r?\n/, "");
    const data = {};

    for (const line of raw.split(/\r?\n/)) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#")) {
            continue;
        }

        const separatorIndex = trimmed.indexOf(":");

        if (separatorIndex === -1) {
            throw new Error(
                `${filePath} has invalid frontmatter line: ${line}`,
            );
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        let value = trimmed.slice(separatorIndex + 1).trim();

        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }

        data[key] = key === "order" ? Number(value) : value;
    }

    return {
        data,
        body,
    };
};

export const toTitle = (slug) =>
    slug
        .split("-")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

export const listDefaultDocs = async () => {
    const dir = join(docsRoot, DEFAULT_LOCALE, "guide");
    const files = (await readdir(dir)).filter((file) => file.endsWith(".md"));
    const docs = [];

    for (const file of files) {
        const filePath = join(dir, file);
        const source = await readFile(filePath, "utf8");
        const { data } = parseFrontmatter(source, filePath);

        docs.push({
            ...data,
            file,
        });
    }

    return docs.sort((a, b) => a.order - b.order);
};

export const collectLocalizedDocMeta = async () => {
    const defaultDocs = await listDefaultDocs();

    return Promise.all(
        defaultDocs.map(async (doc) => {
            const localized = {};

            for (const locale of SUPPORTED_LOCALES) {
                const filePath = join(docsRoot, locale, "guide", doc.file);
                const source = await readFile(filePath, "utf8");
                const { data } = parseFrontmatter(source, filePath);

                for (const key of ["id", "slug", "title", "description"]) {
                    if (!data[key] && key !== "slug") {
                        throw new Error(`${filePath} is missing "${key}"`);
                    }
                }

                if (data.id !== doc.id) {
                    throw new Error(`${filePath} id must match ${doc.id}`);
                }

                if ((data.slug || "") !== (doc.slug || "")) {
                    throw new Error(`${filePath} slug must match ${doc.slug}`);
                }

                localized[locale] = {
                    title: data.title,
                    navTitle: data.navTitle || data.title,
                    description: data.description,
                };
            }

            return {
                id: doc.id,
                slug: doc.slug || "",
                file: doc.file,
                order: doc.order,
                meta: localized,
            };
        }),
    );
};
