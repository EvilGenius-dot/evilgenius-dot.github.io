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
    download: "download",
    document: "document",
    customized: "customized-version",
    about: "about",
};

export const STATIC_PAGES = ["home", "customized", "about"];

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
        slug: "rustminersystem-mobile-app",
    },
    {
        id: "pool-node",
        slug: "poolnode-mobile-app",
    },
];

export const pagePath = (page = "home", locale = DEFAULT_LOCALE) => {
    const slug = PAGE_SLUGS[page] ?? PAGE_SLUGS.home;
    const localePrefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;

    if (!slug) {
        return localePrefix || "/";
    }

    return `${localePrefix}/${slug}`;
};

export const downloadPath = (downloadPage, locale = DEFAULT_LOCALE) => {
    const page = DOWNLOAD_PAGES.find((item) => item.id === downloadPage);
    const basePath = pagePath("download", locale);

    return `${basePath}/${page.slug}`;
};
