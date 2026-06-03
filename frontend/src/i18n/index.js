import { createI18n } from "vue-i18n";
import {
    DOC_COLLECTIONS,
    DOC_CATEGORIES,
    DOC_PAGES,
    DOC_PAGE_META,
    DEFAULT_DOC_COLLECTION,
    DEFAULT_DOC_PAGE,
} from "../docs/generated.js";
import en from "./locales/en";
import zh from "./locales/zh";
import ru from "./locales/ru";

// 默认语言：英文走根路径，中文和俄语使用语言前缀路径。
export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "zh", "ru"];

// 语言元信息集中维护，导航语言切换与 SEO 的 html lang 都从这里读取。
export const LOCALE_META = {
    en: {
        label: "English",
        nativeName: "English",
        htmlLang: "en",
    },
    zh: {
        label: "中文",
        nativeName: "简体中文",
        htmlLang: "zh-CN",
    },
    ru: {
        label: "Русский",
        nativeName: "Русский",
        htmlLang: "ru-RU",
    },
};

// 生产环境站点根域名，用于生成 canonical 与 hreflang 的绝对地址。
export const SITE_ORIGIN = "https://minerproxy.org";

// 页面 key 与 URL slug 的映射，路由、导航、SEO 都复用这里，避免多处写死。
export const PAGE_SLUGS = {
    home: "",
    download: "download",
    document: "document",
    customized: "customized-version",
    customizedLookup: "customized-version-lookup",
    about: "about",
};

export const DOWNLOAD_PAGES = [
    {
        id: "server",
        slug: "rustminersystem-core-server",
    },
    {
        id: "rms",
        slug: "rms-secure-client",
    },
    {
        id: "mobile",
        slug: "rustminerapp-mobile-app",
    },
    {
        id: "pool-node",
        slug: "poolnode-mobile-app",
    },
];

export const DEFAULT_DOWNLOAD_PAGE = DOWNLOAD_PAGES[0].id;

export {
    DOC_COLLECTIONS,
    DOC_CATEGORIES,
    DOC_PAGES,
    DOC_PAGE_META,
    DEFAULT_DOC_COLLECTION,
    DEFAULT_DOC_PAGE,
};

export const messages = {
    en,
    zh,
    ru,
};

export const isSupportedLocale = (locale) => SUPPORTED_LOCALES.includes(locale);

export const normalizeLocale = (locale) =>
    isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

// 从 vue-router route 中解析当前语言；没有语言参数时回退到默认英文。
export const getRouteLocale = (route) =>
    normalizeLocale(route?.params?.locale || route?.meta?.locale);

// 根据页面 key 和语言生成内部路径，保证导航、语言切换、SEO 使用同一套规则。
export const pagePath = (page = "home", locale = DEFAULT_LOCALE) => {
    const normalizedLocale = normalizeLocale(locale);
    const slug = PAGE_SLUGS[page] ?? PAGE_SLUGS.home;
    const localePrefix =
        normalizedLocale === DEFAULT_LOCALE ? "" : `/${normalizedLocale}`;

    if (!slug) {
        return localePrefix || "/";
    }

    return `${localePrefix}/${slug}`;
};

export const getDocCollectionById = (id = DEFAULT_DOC_COLLECTION) =>
    DOC_COLLECTIONS.find((collection) => collection.id === id) ||
    DOC_COLLECTIONS[0];

export const getDocCollectionBySlug = (slug = "") =>
    DOC_COLLECTIONS.find((collection) => collection.slug === slug) ||
    DOC_COLLECTIONS[0];

export const getDocCollectionMeta = (
    docCollection = DEFAULT_DOC_COLLECTION,
    locale = DEFAULT_LOCALE,
) => {
    const collection = getDocCollectionById(docCollection);

    return (
        collection.meta?.[normalizeLocale(locale)] ||
        collection.meta?.[DEFAULT_LOCALE] || {
            title: collection.id,
        }
    );
};

export const getDocPageById = (
    id = DEFAULT_DOC_PAGE,
    docCollection = DEFAULT_DOC_COLLECTION,
) => {
    const collection = getDocCollectionById(docCollection);

    return (
        DOC_PAGES.find(
            (page) => page.collection === collection.id && page.id === id,
        ) ||
        DOC_PAGES.find((page) => page.collection === collection.id) ||
        DOC_PAGES[0]
    );
};

export const getDocPageBySlug = (
    slug = "",
    docCollection = DEFAULT_DOC_COLLECTION,
) => {
    const collection = getDocCollectionById(docCollection);

    return (
        DOC_PAGES.find(
            (page) => page.collection === collection.id && page.slug === slug,
        ) ||
        DOC_PAGES.find((page) => page.collection === collection.id) ||
        DOC_PAGES[0]
    );
};

export const getDocPageMeta = (
    docPage = DEFAULT_DOC_PAGE,
    locale = DEFAULT_LOCALE,
    docCollection = DEFAULT_DOC_COLLECTION,
) => {
    const page = getDocPageById(docPage, docCollection);

    return (
        DOC_PAGE_META[page.collection]?.[page.id]?.[normalizeLocale(locale)] ||
        DOC_PAGE_META[page.collection]?.[page.id]?.[DEFAULT_LOCALE] ||
        DOC_PAGE_META[DEFAULT_DOC_COLLECTION]?.[DEFAULT_DOC_PAGE]?.[
            DEFAULT_LOCALE
        ]
    );
};

export const getDocCategoryMeta = (
    category = "guide",
    locale = DEFAULT_LOCALE,
    docCollection = DEFAULT_DOC_COLLECTION,
) => {
    const collection = getDocCollectionById(docCollection);
    const categoryMeta = DOC_CATEGORIES.find(
        (item) => item.collection === collection.id && item.id === category,
    )?.meta;

    return (
        categoryMeta?.[normalizeLocale(locale)] ||
        categoryMeta?.[DEFAULT_LOCALE] || {
            title: category,
        }
    );
};

export const docPath = (
    docPage = DEFAULT_DOC_PAGE,
    locale = DEFAULT_LOCALE,
    docCollection = DEFAULT_DOC_COLLECTION,
) => {
    const collection = getDocCollectionById(docCollection);
    const page = getDocPageById(docPage, collection.id);
    const basePath = pagePath("document", locale);
    const collectionPath = `${basePath}/${collection.slug}`;

    return page.slug ? `${collectionPath}/${page.slug}` : collectionPath;
};

export const getDownloadPageById = (id = DEFAULT_DOWNLOAD_PAGE) =>
    DOWNLOAD_PAGES.find((page) => page.id === id) || DOWNLOAD_PAGES[0];

export const getDownloadPageBySlug = (slug = "") =>
    DOWNLOAD_PAGES.find((page) => page.slug === slug) || DOWNLOAD_PAGES[0];

export const getDownloadPageMeta = (
    downloadPage = DEFAULT_DOWNLOAD_PAGE,
    locale = DEFAULT_LOCALE,
) =>
    messages[normalizeLocale(locale)]?.download?.pages?.[downloadPage] ||
    messages[DEFAULT_LOCALE].download.pages[downloadPage] ||
    messages[DEFAULT_LOCALE].download.pages[DEFAULT_DOWNLOAD_PAGE];

export const downloadPath = (
    downloadPage = DEFAULT_DOWNLOAD_PAGE,
    locale = DEFAULT_LOCALE,
) => {
    const page = getDownloadPageById(downloadPage);
    const basePath = pagePath("download", locale);

    return `${basePath}/${page.slug}`;
};

// 生成当前页面所有语言版本的 alternate 链接，供 SEO head 使用。
export const localizedPageLinks = (page = "home") =>
    SUPPORTED_LOCALES.map((locale) => ({
        rel: "alternate",
        hreflang: LOCALE_META[locale].htmlLang,
        href: `${SITE_ORIGIN}${pagePath(page, locale)}`,
    }));

export const localizedDocLinks = (
    docPage = DEFAULT_DOC_PAGE,
    docCollection = DEFAULT_DOC_COLLECTION,
) =>
    SUPPORTED_LOCALES.map((locale) => ({
        rel: "alternate",
        hreflang: LOCALE_META[locale].htmlLang,
        href: `${SITE_ORIGIN}${docPath(docPage, locale, docCollection)}`,
    }));

export const localizedDownloadLinks = (downloadPage = DEFAULT_DOWNLOAD_PAGE) =>
    SUPPORTED_LOCALES.map((locale) => ({
        rel: "alternate",
        hreflang: LOCALE_META[locale].htmlLang,
        href: `${SITE_ORIGIN}${downloadPath(downloadPage, locale)}`,
    }));

export const createI18nInstance = () =>
    createI18n({
        legacy: false,
        globalInjection: true,
        locale: DEFAULT_LOCALE,
        fallbackLocale: DEFAULT_LOCALE,
        messages,
    });
