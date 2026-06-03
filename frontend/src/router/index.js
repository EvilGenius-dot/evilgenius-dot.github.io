import {
    createRouter,
    createWebHistory,
    createMemoryHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import {
    DEFAULT_DOC_COLLECTION,
    DEFAULT_DOC_PAGE,
    DEFAULT_DOWNLOAD_PAGE,
    DOWNLOAD_PAGES,
    DOC_PAGES,
    DEFAULT_LOCALE,
    PAGE_SLUGS,
    SUPPORTED_LOCALES,
    docPath,
    downloadPath,
    pagePath,
} from "../i18n";

// 页面组件按页面 key 注册，后续新增页面时这里与 PAGE_SLUGS 保持一致。
const pageComponents = {
    home: HomeView,
    download: () => import("../views/DownloadView.vue"),
    document: () => import("../views/DocumentView.vue"),
    customized: () => import("../views/CustomizedVersionView.vue"),
    customizedLookup: () =>
        import("../views/CustomizedReleaseLookupView.vue"),
    about: () => import("../views/AboutView.vue"),
};

// 为每个普通页面生成英文、中文、俄语三套路由，文档页单独生成文章级路由。
const createLocalizedPageRoutes = () =>
    Object.keys(PAGE_SLUGS)
        .filter((page) => page !== "document" && page !== "download")
        .flatMap((page) =>
            SUPPORTED_LOCALES.map((locale) => ({
                path: pagePath(page, locale),
                name: locale === DEFAULT_LOCALE ? page : `${locale}-${page}`,
                component: pageComponents[page],
                meta: {
                    page,
                    locale,
                },
            })),
        );

const createLocalizedDocumentRoutes = () => [
    ...SUPPORTED_LOCALES.map((locale) => ({
        path: pagePath("document", locale),
        redirect: docPath(DEFAULT_DOC_PAGE, locale, DEFAULT_DOC_COLLECTION),
    })),
    ...DOC_PAGES.filter(
        (docPage) =>
            docPage.collection === DEFAULT_DOC_COLLECTION && docPage.slug,
    ).flatMap((docPage) =>
        SUPPORTED_LOCALES.map((locale) => ({
            path: `${pagePath("document", locale)}/${docPage.slug}`,
            redirect: docPath(docPage.id, locale, DEFAULT_DOC_COLLECTION),
        })),
    ),
    ...DOC_PAGES.flatMap((docPage) =>
        SUPPORTED_LOCALES.map((locale) => ({
            path: docPath(docPage.id, locale, docPage.collection),
            name:
                locale === DEFAULT_LOCALE
                    ? `document-${docPage.collection}-${docPage.id}`
                    : `${locale}-document-${docPage.collection}-${docPage.id}`,
            component: pageComponents.document,
            meta: {
                page: "document",
                docCollection: docPage.collection,
                docPage: docPage.id,
                locale,
            },
        })),
    ),
];

const createLocalizedDownloadRoutes = () => [
    ...SUPPORTED_LOCALES.map((locale) => ({
        path: pagePath("download", locale),
        redirect: downloadPath(DEFAULT_DOWNLOAD_PAGE, locale),
    })),
    ...DOWNLOAD_PAGES.flatMap((downloadPage) =>
        SUPPORTED_LOCALES.map((locale) => ({
            path: downloadPath(downloadPage.id, locale),
            name:
                locale === DEFAULT_LOCALE
                    ? `download-${downloadPage.id}`
                    : `${locale}-download-${downloadPage.id}`,
            component: pageComponents.download,
            meta: {
                page: "download",
                downloadPage: downloadPage.id,
                locale,
            },
        })),
    ),
];

export const routes = [
    ...createLocalizedPageRoutes(),
    ...createLocalizedDownloadRoutes(),
    ...createLocalizedDocumentRoutes(),
];

const router = createRouter({
    // 构建阶段使用内存 history，浏览器运行时使用真实 history。
    history: import.meta.env.SSR
        ? createMemoryHistory()
        : createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
