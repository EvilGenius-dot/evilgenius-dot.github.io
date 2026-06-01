import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import {
    DEFAULT_DOC_COLLECTION,
    DEFAULT_LOCALE,
    DOC_COLLECTIONS,
    SUPPORTED_LOCALES,
} from "./docs-config.mjs";

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

        data[key] = ["order", "categoryOrder"].includes(key)
            ? Number(value)
            : value;
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

export const resolveDocCollection = (docCollection = DEFAULT_DOC_COLLECTION) =>
    DOC_COLLECTIONS.find(
        (collection) =>
            collection.id === docCollection ||
            collection.slug === docCollection,
    ) || DOC_COLLECTIONS[0];

export const listDefaultDocs = async (
    docCollection = DEFAULT_DOC_COLLECTION,
) => {
    const collection = resolveDocCollection(docCollection);
    const dir = join(docsRoot, DEFAULT_LOCALE, collection.slug, "guide");
    const files = (await readdir(dir)).filter((file) => file.endsWith(".md"));
    const docs = [];

    for (const file of files) {
        const filePath = join(dir, file);
        const source = await readFile(filePath, "utf8");
        const { data } = parseFrontmatter(source, filePath);

        docs.push({
            ...data,
            collection: collection.id,
            file,
        });
    }

    return docs.sort((a, b) => {
        const categoryOrderA = a.categoryOrder ?? 1;
        const categoryOrderB = b.categoryOrder ?? 1;

        if (categoryOrderA !== categoryOrderB) {
            return categoryOrderA - categoryOrderB;
        }

        return a.order - b.order;
    });
};

export const collectLocalizedDocMeta = async () => {
    const docs = [];

    for (const collection of [...DOC_COLLECTIONS].sort(
        (a, b) => a.order - b.order,
    )) {
        const defaultDocs = await listDefaultDocs(collection.id);
        const localizedDocs = await Promise.all(
            defaultDocs.map(async (doc) => {
                const localized = {};
                const category = doc.category || "guide";
                const categoryOrder = doc.categoryOrder ?? 1;
                const categoryMeta = {};

                for (const locale of SUPPORTED_LOCALES) {
                    const filePath = join(
                        docsRoot,
                        locale,
                        collection.slug,
                        "guide",
                        doc.file,
                    );
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
                        throw new Error(
                            `${filePath} slug must match ${doc.slug}`,
                        );
                    }

                    if ((data.category || "guide") !== category) {
                        throw new Error(
                            `${filePath} category must match ${category}`,
                        );
                    }

                    if ((data.categoryOrder ?? 1) !== categoryOrder) {
                        throw new Error(
                            `${filePath} categoryOrder must match ${categoryOrder}`,
                        );
                    }

                    localized[locale] = {
                        title: data.title,
                        navTitle: data.navTitle || data.title,
                        description: data.description,
                    };
                    categoryMeta[locale] = {
                        title: data.categoryTitle || toTitle(category),
                    };
                }

                return {
                    collection: collection.id,
                    collectionOrder: collection.order,
                    id: doc.id,
                    slug: doc.slug || "",
                    file: doc.file,
                    category,
                    categoryOrder,
                    order: doc.order,
                    categoryMeta,
                    meta: localized,
                };
            }),
        );

        docs.push(...localizedDocs);
    }

    return docs;
};
