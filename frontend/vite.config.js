import { fileURLToPath, URL } from "node:url";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import {
    DEFAULT_DOC_PAGE,
    DEFAULT_DOWNLOAD_PAGE,
    DEFAULT_LOCALE,
    LOCALE_META,
    PAGE_SLUGS,
    SITE_ORIGIN,
    SUPPORTED_LOCALES,
    docPath,
    downloadPath,
    getDownloadPageBySlug,
    getDownloadPageMeta,
    getDocPageBySlug,
    getDocPageMeta,
    messages,
    pagePath,
} from "./src/i18n/index.js";

const require = createRequire(import.meta.url);
const viteSsgEntry = require.resolve("vite-ssg");
// ViteSSG 当前依赖的 Unhead 版本与项目安装版本不完全一致，这里固定到同一份运行时代码。
const unheadVueRoot = dirname(
    dirname(require.resolve("@unhead/vue", { paths: [viteSsgEntry] })),
);

const escapeAttribute = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

const escapeText = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

// 根据静态构建中的 route 反推页面 key 和语言，用来生成对应 SEO 信息。
const resolvePageFromRoute = (route) => {
    const segments = route
        .replace(/^\/|\/$/g, "")
        .split("/")
        .filter(Boolean);
    const possibleLocale = segments[0];
    const locale = SUPPORTED_LOCALES.includes(possibleLocale)
        ? possibleLocale
        : DEFAULT_LOCALE;
    const slug = (
        locale === DEFAULT_LOCALE ? segments : segments.slice(1)
    ).join("/");

    if (
        slug === PAGE_SLUGS.document ||
        slug.startsWith(`${PAGE_SLUGS.document}/`)
    ) {
        const docSlug = slug
            .replace(PAGE_SLUGS.document, "")
            .replace(/^\//, "");
        const docPage = getDocPageBySlug(docSlug);

        return {
            locale,
            page: "document",
            docPage: docPage.id,
        };
    }

    if (
        slug === PAGE_SLUGS.download ||
        slug.startsWith(`${PAGE_SLUGS.download}/`)
    ) {
        const downloadSlug = slug
            .replace(PAGE_SLUGS.download, "")
            .replace(/^\//, "");
        const downloadPage = getDownloadPageBySlug(downloadSlug);

        return {
            locale,
            page: "download",
            docPage: DEFAULT_DOC_PAGE,
            downloadPage: downloadPage.id,
        };
    }

    const page =
        Object.entries(PAGE_SLUGS).find(
            ([, pageSlug]) => pageSlug === slug,
        )?.[0] || "home";

    return {
        locale,
        page,
        docPage: DEFAULT_DOC_PAGE,
        downloadPage: DEFAULT_DOWNLOAD_PAGE,
    };
};

// 渲染每个语言页面需要的 title、description、canonical 与 hreflang 标签。
const renderSeoTags = (route) => {
    const { locale, page, docPage, downloadPage } = resolvePageFromRoute(route);
    const localeMessages = messages[locale];
    const pageSeo =
        page === "document"
            ? getDocPageMeta(docPage, locale)
            : page === "download"
              ? getDownloadPageMeta(downloadPage, locale)
              : localeMessages.seo[page];
    const title =
        page === "home"
            ? localeMessages.seo.defaultTitle
            : localeMessages.seo.titleTemplate.replace(
                  "{pageTitle}",
                  pageSeo.title,
              );
    const canonicalHref =
        page === "document"
            ? `${SITE_ORIGIN}${docPath(docPage, locale)}`
            : page === "download"
              ? `${SITE_ORIGIN}${downloadPath(downloadPage, locale)}`
              : `${SITE_ORIGIN}${pagePath(page, locale)}`;
    const alternateLinks = SUPPORTED_LOCALES.map((alternateLocale) => {
        const hreflang = LOCALE_META[alternateLocale].htmlLang;
        const href =
            page === "document"
                ? `${SITE_ORIGIN}${docPath(docPage, alternateLocale)}`
                : page === "download"
                  ? `${SITE_ORIGIN}${downloadPath(downloadPage, alternateLocale)}`
                  : `${SITE_ORIGIN}${pagePath(page, alternateLocale)}`;

        return `<link rel="alternate" hreflang="${escapeAttribute(hreflang)}" href="${escapeAttribute(href)}">`;
    });
    const xDefaultHref =
        page === "document"
            ? `${SITE_ORIGIN}${docPath(docPage, DEFAULT_LOCALE)}`
            : page === "download"
              ? `${SITE_ORIGIN}${downloadPath(downloadPage, DEFAULT_LOCALE)}`
              : `${SITE_ORIGIN}${pagePath(page, DEFAULT_LOCALE)}`;

    return {
        htmlLang: LOCALE_META[locale].htmlLang,
        title,
        description: pageSeo.description,
        tags: [
            `<meta property="og:title" content="${escapeAttribute(title)}">`,
            `<meta property="og:description" content="${escapeAttribute(pageSeo.description)}">`,
            '<meta property="og:type" content="website">',
            `<meta property="og:url" content="${escapeAttribute(canonicalHref)}">`,
            '<meta name="twitter:card" content="summary">',
            `<link rel="canonical" href="${escapeAttribute(canonicalHref)}">`,
            ...alternateLinks,
            `<link rel="alternate" hreflang="x-default" href="${escapeAttribute(xDefaultHref)}">`,
        ],
    };
};

// 静态构建兜底注入 SEO 标签，确保 dist 中每个 HTML 都对搜索引擎友好。
const injectSeo = (route, html) => {
    const seo = renderSeoTags(route);
    const descriptionTag = `<meta name="description" content="${escapeAttribute(seo.description)}">`;

    return html
        .replace(
            /<html([^>]*?)lang="[^"]*"/,
            `<html$1lang="${escapeAttribute(seo.htmlLang)}"`,
        )
        .replace(
            /<title>.*?<\/title>/,
            `<title>${escapeText(seo.title)}</title>`,
        )
        .replace(/<meta name="description" content="[^"]*">/, descriptionTag)
        .replace(
            descriptionTag,
            `${descriptionTag}\n    ${seo.tags.join("\n    ")}`,
        );
};

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    plugins: [vue(), vueDevTools(), tailwindcss()],
    resolve: {
        // 先解析 Unhead 运行时代码，再保留项目内 @ 指向 src 的别名。
        alias: [
            {
                find: "@unhead/vue/client",
                replacement: join(unheadVueRoot, "dist/client.mjs"),
            },
            {
                find: "@unhead/vue/server",
                replacement: join(unheadVueRoot, "dist/server.mjs"),
            },
            {
                find: "@unhead/vue",
                replacement: join(unheadVueRoot, "dist/index.mjs"),
            },
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
        ],
    },
    ssgOptions: {
        // 每个静态路由输出后补齐 SEO 标签，覆盖 useHead 未写入 HTML 的情况。
        onPageRendered(route, html) {
            return injectSeo(route, html);
        },
    },
});
