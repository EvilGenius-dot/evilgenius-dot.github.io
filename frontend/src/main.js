import "./assets/main.css";
import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import App from "./App.vue";
import { routes } from "./router";
import { createI18nInstance, getRouteLocale } from "./i18n";

// 使用 ViteSSG 统一处理客户端挂载和静态页面生成，不再手动 app.mount。
export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, isClient, initialState }) => {
        const pinia = createPinia();
        const i18n = createI18nInstance();

        app.use(pinia);
        app.use(i18n);

        // 每次进入路由时同步语言，避免直接访问 /zh 或 /ru 时仍显示英文。
        router.beforeEach((to) => {
            i18n.global.locale.value = getRouteLocale(to);
        });

        if (isClient) {
            // 客户端恢复 Pinia 状态，保证静态 HTML 水合后数据一致。
            if (initialState.pinia) {
                pinia.state.value = initialState.pinia;
            }
        }
    },
);
