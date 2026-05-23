import {
    createRouter,
    createWebHistory,
    createMemoryHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import {
    DEFAULT_LOCALE,
    PAGE_SLUGS,
    SUPPORTED_LOCALES,
    pagePath,
} from "../i18n";

// 页面组件按页面 key 注册，后续新增页面时这里与 PAGE_SLUGS 保持一致。
const pageComponents = {
    home: HomeView,
    document: () => import("../views/DocumentView.vue"),
    customized: () => import("../views/CustomizedVersionView.vue"),
    about: () => import("../views/AboutView.vue"),
};

// 为每个页面生成英文、中文、俄语三套路由，保证静态构建能输出独立 HTML。
const createLocalizedRoutes = () =>
    Object.keys(PAGE_SLUGS).flatMap((page) =>
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

export const routes = createLocalizedRoutes();

const router = createRouter({
    // 构建阶段使用内存 history，浏览器运行时使用真实 history。
    history: import.meta.env.SSR
        ? createMemoryHistory()
        : createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
