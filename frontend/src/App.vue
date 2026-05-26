<template>
    <div class="app-shell">
        <HeaderBar />
        <RouterView />
        <FooterBar />
    </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { useI18n } from "vue-i18n";
import FooterBar from "./components/FooterBar.vue";
import HeaderBar from "./components/HeaderBar.vue";
import {
    DEFAULT_LOCALE,
    LOCALE_META,
    SITE_ORIGIN,
    DEFAULT_DOC_PAGE,
    docPath,
    getDocPageMeta,
    getRouteLocale,
    localizedDocLinks,
    localizedPageLinks,
    pagePath,
} from "./i18n";

const route = useRoute();
const { locale, t } = useI18n();

// 当前语言与页面 key 都从路由读取，页面切换和直接访问静态页都能复用。
const currentLocale = computed(() => getRouteLocale(route));
const currentPage = computed(() => route.meta?.page || "home");
const currentDocPage = computed(() => route.meta?.docPage || DEFAULT_DOC_PAGE);

// 客户端切换路由时同步 vue-i18n 的当前语言。
watch(
    currentLocale,
    (nextLocale) => {
        locale.value = nextLocale;
    },
    { immediate: true },
);

// canonical、title、description 都按当前页面和语言生成，供运行时 head 使用。
const canonicalHref = computed(() =>
    currentPage.value === "document"
        ? `${SITE_ORIGIN}${docPath(currentDocPage.value, currentLocale.value)}`
        : `${SITE_ORIGIN}${pagePath(currentPage.value, currentLocale.value)}`,
);
const pageTitle = computed(() =>
    currentPage.value === "document"
        ? getDocPageMeta(currentDocPage.value, currentLocale.value).title
        : t(`seo.${currentPage.value}.title`),
);
const pageDescription = computed(() =>
    currentPage.value === "document"
        ? getDocPageMeta(currentDocPage.value, currentLocale.value).description
        : t(`seo.${currentPage.value}.description`),
);
const fullTitle = computed(() =>
    currentPage.value === "home"
        ? t("seo.defaultTitle")
        : `${pageTitle.value} | ${t("site.name")}`,
);

if (!import.meta.env.SSR) {
    watch(
        fullTitle,
        (nextTitle) => {
            document.title = nextTitle;
        },
        { immediate: true },
    );
}

// useHead 负责客户端和支持的服务端 head；静态构建还会在 vite.config 中兜底注入。
const head = computed(() => ({
    htmlAttrs: {
        lang: LOCALE_META[currentLocale.value].htmlLang,
    },
    title: fullTitle.value,
    meta: [
        {
            name: "description",
            content: pageDescription.value,
        },
        {
            property: "og:title",
            content: fullTitle.value,
        },
        {
            property: "og:description",
            content: pageDescription.value,
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:url",
            content: canonicalHref.value,
        },
        {
            name: "twitter:card",
            content: "summary",
        },
    ],
    link: [
        {
            rel: "canonical",
            href: canonicalHref.value,
        },
        ...(currentPage.value === "document"
            ? localizedDocLinks(currentDocPage.value)
            : localizedPageLinks(currentPage.value)),
        {
            rel: "alternate",
            hreflang: "x-default",
            href:
                currentPage.value === "document"
                    ? `${SITE_ORIGIN}${docPath(currentDocPage.value, DEFAULT_LOCALE)}`
                    : `${SITE_ORIGIN}${pagePath(currentPage.value, DEFAULT_LOCALE)}`,
        },
    ],
}));

useHead(head);
</script>

<style>
html,
body,
#app {
    width: 100%;
    min-height: 100%;
    background-color: var(--color-neutral-950);
    color: var(--color-white);
}
</style>

<style scoped>
.app-shell {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    min-height: 100vh;
    overflow-x: clip;
    position: relative;
}

.app-shell :deep(main) {
    flex: 1 0 auto;
}

.app-shell :deep(main.home-page) {
    flex: 0 0 auto;
}
</style>
