export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "zh", "ru"];
export const SITE_ORIGIN = "https://minerproxy.org";

export const LOCALE_META = {
    en: {
        htmlLang: "en",
    },
    zh: {
        htmlLang: "zh-CN",
    },
    ru: {
        htmlLang: "ru-RU",
    },
};

export const PAGE_SLUGS = {
    home: "",
    document: "document",
    customized: "customized-version",
    about: "about",
};

export const STATIC_PAGES = ["home", "customized", "about"];

export const pagePath = (page = "home", locale = DEFAULT_LOCALE) => {
    const slug = PAGE_SLUGS[page] ?? PAGE_SLUGS.home;
    const localePrefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;

    if (!slug) {
        return localePrefix || "/";
    }

    return `${localePrefix}/${slug}`;
};
