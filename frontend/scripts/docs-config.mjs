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

export const DOC_COLLECTIONS = [
    {
        id: "rustminersystem",
        slug: "rustminersystem",
        order: 1,
        meta: {
            en: {
                title: "RustMinerSystem",
                description:
                    "RustMinerSystem server documentation for proxy, PoolNode integration, deployment, configuration, and operations.",
            },
            zh: {
                title: "RustMinerSystem",
                description:
                    "RustMinerSystem 服务端文档，覆盖 Proxy、PoolNode 集成、部署、配置与运维。",
            },
            ru: {
                title: "RustMinerSystem",
                description:
                    "Документация сервера RustMinerSystem: proxy, интеграция PoolNode, развертывание, настройка и эксплуатация.",
            },
        },
    },
    {
        id: "poolnode",
        slug: "poolnode",
        order: 2,
        meta: {
            en: {
                title: "PoolNode",
                description:
                    "PoolNode documentation for real-pool roles, settlement-layer fees, mobile access, and operations.",
            },
            zh: {
                title: "PoolNode",
                description:
                    "PoolNode 文档，覆盖真矿池角色、结算层费率、移动端入口与运维流程。",
            },
            ru: {
                title: "PoolNode",
                description:
                    "Документация PoolNode: роли настоящего пула, комиссии на уровне расчетов, мобильный доступ и эксплуатация.",
            },
        },
    },
    {
        id: "rms",
        slug: "rms",
        order: 3,
        meta: {
            en: {
                title: "RMS",
                description:
                    "RMS secure client documentation for local encrypted compression, deployment, compatibility, and rollback.",
            },
            zh: {
                title: "RMS",
                description:
                    "RMS 安全客户端文档，覆盖本地加密压缩、部署、兼容性与回滚。",
            },
            ru: {
                title: "RMS",
                description:
                    "Документация безопасного клиента RMS: локальное зашифрованное сжатие, развертывание, совместимость и откат.",
            },
        },
    },
    {
        id: "rustminersystem-cli",
        slug: "rustminersystem-cli",
        order: 4,
        meta: {
            en: {
                title: "RustMinerSystemCli",
                description:
                    "RustMinerSystemCli documentation for command-line operations, automation, diagnostics, and maintenance.",
            },
            zh: {
                title: "RustMinerSystemCli",
                description:
                    "RustMinerSystemCli 文档，覆盖命令行操作、自动化、诊断与维护。",
            },
            ru: {
                title: "RustMinerSystemCli",
                description:
                    "Документация RustMinerSystemCli: операции командной строки, автоматизация, диагностика и обслуживание.",
            },
        },
    },
    {
        id: "custom-management",
        slug: "custom-management",
        order: 5,
        meta: {
            en: {
                title: "Custom Management",
                description:
                    "Custom management documentation for branded builds, customer access, hosted deployment, and update workflows.",
            },
            zh: {
                title: "定制管理",
                description:
                    "定制管理文档，覆盖品牌定制版本、客户权限、托管部署与更新流程。",
            },
            ru: {
                title: "Custom Management",
                description:
                    "Документация Custom Management для брендированных сборок, доступа клиентов, hosted-развертывания и обновлений.",
            },
        },
    },
];

export const DOC_CATEGORY_PRESETS = [];

export const DEFAULT_DOC_COLLECTION = DOC_COLLECTIONS[0].id;

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

export const getDocCollectionById = (docCollection = DEFAULT_DOC_COLLECTION) =>
    DOC_COLLECTIONS.find((item) => item.id === docCollection) ||
    DOC_COLLECTIONS[0];

export const docPath = (doc, locale = DEFAULT_LOCALE) => {
    const collection = getDocCollectionById(doc.collection);
    const basePath = pagePath("document", locale);
    const collectionPath = `${basePath}/${collection.slug}`;

    return doc.slug ? `${collectionPath}/${doc.slug}` : collectionPath;
};
