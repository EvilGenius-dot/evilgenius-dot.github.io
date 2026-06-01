import {
    DOC_PAGES,
    DEFAULT_DOC_COLLECTION,
    DEFAULT_DOC_PAGE,
    getDocCollectionById,
    getDocPageById,
} from "../i18n";

const markdownFiles = import.meta.glob("./**/*.md", {
    eager: true,
    import: "default",
    query: "?raw",
});

const stripFrontmatter = (source = "") =>
    source.startsWith("---\n")
        ? source.replace(/^---\n[\s\S]*?\n---\n?/, "")
        : source;

export const getDocumentMarkdown = (
    locale = "en",
    docPage = DEFAULT_DOC_PAGE,
    docCollection = DEFAULT_DOC_COLLECTION,
) => {
    const collection = getDocCollectionById(docCollection);
    const { file } = getDocPageById(docPage, collection.id);
    const localizedPath = `./${locale}/${collection.slug}/guide/${file}`;
    const fallbackPath = `./en/${collection.slug}/guide/${file}`;

    return stripFrontmatter(
        markdownFiles[localizedPath] || markdownFiles[fallbackPath] || "",
    );
};

export const getDocumentPages = (docCollection = DEFAULT_DOC_COLLECTION) => {
    const collection = getDocCollectionById(docCollection);

    return DOC_PAGES.filter((page) => page.collection === collection.id);
};

export const getDocumentPageIndex = (
    docPage = DEFAULT_DOC_PAGE,
    docCollection = DEFAULT_DOC_COLLECTION,
) => getDocumentPages(docCollection).findIndex(({ id }) => id === docPage);
