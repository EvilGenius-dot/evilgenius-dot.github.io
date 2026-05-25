import { DOC_PAGES, DEFAULT_DOC_PAGE, getDocPageById } from "../i18n";

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
) => {
    const { file } = getDocPageById(docPage);
    const localizedPath = `./${locale}/guide/${file}`;
    const fallbackPath = `./en/guide/${file}`;

    return stripFrontmatter(
        markdownFiles[localizedPath] || markdownFiles[fallbackPath] || "",
    );
};

export const getDocumentPageIndex = (docPage = DEFAULT_DOC_PAGE) =>
    DOC_PAGES.findIndex(({ id }) => id === docPage);
