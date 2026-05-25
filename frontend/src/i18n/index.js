import { createI18n } from "vue-i18n";
import {
    DOC_PAGES,
    DOC_PAGE_META,
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
    document: "document",
    customized: "customized-version",
    about: "about",
};

export { DOC_PAGES, DOC_PAGE_META, DEFAULT_DOC_PAGE };

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

export const getDocPageById = (id = DEFAULT_DOC_PAGE) =>
    DOC_PAGES.find((page) => page.id === id) || DOC_PAGES[0];

export const getDocPageBySlug = (slug = "") =>
    DOC_PAGES.find((page) => page.slug === slug) || DOC_PAGES[0];

export const getDocPageMeta = (
    docPage = DEFAULT_DOC_PAGE,
    locale = DEFAULT_LOCALE,
) =>
    DOC_PAGE_META[docPage]?.[normalizeLocale(locale)] ||
    DOC_PAGE_META[docPage]?.[DEFAULT_LOCALE] ||
    DOC_PAGE_META[DEFAULT_DOC_PAGE][DEFAULT_LOCALE];

export const docPath = (
    docPage = DEFAULT_DOC_PAGE,
    locale = DEFAULT_LOCALE,
) => {
    const page = getDocPageById(docPage);
    const basePath = pagePath("document", locale);

    return page.slug ? `${basePath}/${page.slug}` : basePath;
};

// 生成当前页面所有语言版本的 alternate 链接，供 SEO head 使用。
export const localizedPageLinks = (page = "home") =>
    SUPPORTED_LOCALES.map((locale) => ({
        rel: "alternate",
        hreflang: LOCALE_META[locale].htmlLang,
        href: `${SITE_ORIGIN}${pagePath(page, locale)}`,
    }));

export const localizedDocLinks = (docPage = DEFAULT_DOC_PAGE) =>
    SUPPORTED_LOCALES.map((locale) => ({
        rel: "alternate",
        hreflang: LOCALE_META[locale].htmlLang,
        href: `${SITE_ORIGIN}${docPath(docPage, locale)}`,
    }));

export const createI18nInstance = () =>
    createI18n({
        legacy: false,
        globalInjection: true,
        locale: DEFAULT_LOCALE,
        fallbackLocale: DEFAULT_LOCALE,
        messages,
    });
