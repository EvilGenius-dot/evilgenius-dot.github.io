import {
    createRouter,
    createWebHistory,
    createMemoryHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import {
    DOC_PAGES,
    DEFAULT_LOCALE,
    PAGE_SLUGS,
    SUPPORTED_LOCALES,
    docPath,
    pagePath,
} from "../i18n";

// 页面组件按页面 key 注册，后续新增页面时这里与 PAGE_SLUGS 保持一致。
const pageComponents = {
    home: HomeView,
    document: () => import("../views/DocumentView.vue"),
    customized: () => import("../views/CustomizedVersionView.vue"),
    about: () => import("../views/AboutView.vue"),
};

// 为每个普通页面生成英文、中文、俄语三套路由，文档页单独生成文章级路由。
const createLocalizedPageRoutes = () =>
    Object.keys(PAGE_SLUGS)
        .filter((page) => page !== "document")
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

const createLocalizedDocumentRoutes = () =>
    DOC_PAGES.flatMap((docPage) =>
        SUPPORTED_LOCALES.map((locale) => ({
            path: docPath(docPage.id, locale),
            name:
                locale === DEFAULT_LOCALE
                    ? `document-${docPage.id}`
                    : `${locale}-document-${docPage.id}`,
            component: pageComponents.document,
            meta: {
                page: "document",
                docPage: docPage.id,
                locale,
            },
        })),
    );

export const routes = [
    ...createLocalizedPageRoutes(),
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
