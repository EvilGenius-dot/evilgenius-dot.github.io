<template>
    <header class="header-bar">
        <a class="skip-link" href="#main-content">{{ t("nav.skip") }}</a>

        <div class="header-shell">
            <RouterLink
                :to="localizedPath('home')"
                class="brand-link"
                :aria-label="t('nav.home')"
            >
                <img
                    src="/image/rustminersystem.png"
                    alt=""
                    class="brand-logo rotating-element"
                />
                <span class="brand-name">{{ t("site.name") }}</span>
            </RouterLink>

            <!-- 桌面端主导航：保留真实链接，方便搜索引擎和用户都能直接访问页面。 -->
            <nav class="desktop-nav" :aria-label="t('nav.primary')">
                <ul class="desktop-nav-list">
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                class="nav-link nav-trigger"
                                :aria-label="t('nav.download')"
                            >
                                <ArrowDownTrayIcon
                                    class="icon-sm"
                                    aria-hidden="true"
                                />
                                <span>{{ t("nav.download") }}</span>
                                <ChevronDownIcon
                                    class="icon-xs"
                                    aria-hidden="true"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                class="download-menu"
                            >
                                <template
                                    v-for="(group, index) in downloadGroups"
                                    :key="group.label"
                                >
                                    <DropdownMenuLabel>{{
                                        group.label
                                    }}</DropdownMenuLabel>
                                    <DropdownMenuItem
                                        v-for="item in group.items"
                                        :key="item.label"
                                        as-child
                                    >
                                        <RouterLink
                                            :to="item.to"
                                            class="dropdown-link"
                                        >
                                            {{ item.label }}
                                        </RouterLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator
                                        v-if="index < downloadGroups.length - 1"
                                    />
                                </template>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                :class="[
                                    'nav-link',
                                    'nav-trigger',
                                    { 'is-active': isActivePage('document') },
                                ]"
                                :aria-label="t('nav.document')"
                            >
                                <DocumentTextIcon
                                    class="icon-sm"
                                    aria-hidden="true"
                                />
                                <span>{{ t("nav.document") }}</span>
                                <ChevronDownIcon
                                    class="icon-xs"
                                    aria-hidden="true"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                class="docs-menu"
                            >
                                <DropdownMenuItem
                                    v-for="item in documentLinks"
                                    :key="item.collection"
                                    as-child
                                >
                                    <RouterLink
                                        :to="item.to"
                                        class="dropdown-link"
                                    >
                                        {{ item.label }}
                                    </RouterLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li v-for="item in primaryLinks" :key="item.page">
                        <RouterLink
                            :to="item.to"
                            class="nav-link"
                            :class="{ 'is-active': isActivePage(item.page) }"
                            :aria-current="
                                isActivePage(item.page) ? 'page' : undefined
                            "
                        >
                            {{ item.label }}
                        </RouterLink>
                    </li>
                </ul>
            </nav>

            <div class="header-actions">
                <DocSearchButton />

                <!-- 语言切换：切到同一个页面的不同语言路径，不丢失 hash 和 query。 -->
                <DropdownMenu>
                    <DropdownMenuTrigger
                        class="language-trigger"
                        :aria-label="t('nav.language')"
                    >
                        <LanguageIcon class="icon-md" aria-hidden="true" />
                        <span class="language-label">{{
                            currentLanguage.nativeName
                        }}</span>
                        <ChevronDownIcon class="icon-xs" aria-hidden="true" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" class="language-menu">
                        <DropdownMenuLabel>{{
                            t("nav.currentLanguage")
                        }}</DropdownMenuLabel>
                        <DropdownMenuItem
                            v-for="language in languages"
                            :key="language.locale"
                            class="language-option"
                            @click="switchLocale(language.locale)"
                        >
                            <span>{{ language.nativeName }}</span>
                            <span
                                v-if="language.locale === currentLocale"
                                class="language-check"
                                >✓</span
                            >
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <a
                    href="https://github.com/evilgenius-dot"
                    class="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="t('nav.github')"
                >
                    <IconGithub class="icon-md" aria-hidden="true" />
                </a>

                <button
                    type="button"
                    class="mobile-toggle"
                    :aria-expanded="isOpen.toString()"
                    aria-controls="mobile-menu"
                    :aria-label="
                        isOpen ? t('nav.closeMenu') : t('nav.openMenu')
                    "
                    @click="toggleMenu"
                >
                    <Bars3Icon
                        v-if="!isOpen"
                        class="icon-lg"
                        aria-hidden="true"
                    />
                    <XMarkIcon v-else class="icon-lg" aria-hidden="true" />
                </button>
            </div>
        </div>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform opacity-0 -translate-y-2"
            enter-to-class="transform opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform opacity-100 translate-y-0"
            leave-to-class="transform opacity-0 -translate-y-2"
        >
            <nav
                v-show="isOpen"
                id="mobile-menu"
                class="mobile-nav"
                :aria-label="t('nav.mobile')"
            >
                <ul class="mobile-nav-list">
                    <li class="mobile-document-group">
                        <p>{{ t("nav.document") }}</p>
                        <RouterLink
                            v-for="item in documentLinks"
                            :key="item.collection"
                            :to="item.to"
                            class="mobile-document-link"
                            :aria-current="
                                isActiveDocCollection(item.collection)
                                    ? 'page'
                                    : undefined
                            "
                            @click="closeMenu"
                        >
                            {{ item.label }}
                        </RouterLink>
                    </li>
                    <li v-for="item in primaryLinks" :key="item.page">
                        <RouterLink
                            :to="item.to"
                            class="mobile-nav-link"
                            :aria-current="
                                isActivePage(item.page) ? 'page' : undefined
                            "
                            @click="closeMenu"
                        >
                            {{ item.label }}
                        </RouterLink>
                    </li>
                    <li class="mobile-download-group">
                        <p>{{ t("nav.download") }}</p>
                        <RouterLink
                            v-for="item in flatDownloadLinks"
                            :key="item.label"
                            :to="item.to"
                            class="mobile-download-link"
                            @click="closeMenu"
                        >
                            {{ item.label }}
                        </RouterLink>
                    </li>
                    <li class="mobile-language-group">
                        <button
                            v-for="language in languages"
                            :key="language.locale"
                            type="button"
                            class="mobile-language-button"
                            :class="{
                                'is-active': language.locale === currentLocale,
                            }"
                            @click="switchLocale(language.locale)"
                        >
                            {{ language.nativeName }}
                        </button>
                    </li>
                </ul>
            </nav>
        </transition>
    </header>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import {
    ArrowDownTrayIcon,
    Bars3Icon,
    ChevronDownIcon,
    DocumentTextIcon,
    LanguageIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";
import {
    DOC_COLLECTIONS,
    LOCALE_META,
    SUPPORTED_LOCALES,
    docPath,
    downloadPath,
    getDocCollectionMeta,
    getRouteLocale,
    pagePath,
} from "@/i18n";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DocSearchButton from "@/components/DocSearchButton.vue";
import IconGithub from "@/components/icons/IconGithub.vue";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const isOpen = ref(false);

// 当前语言来自路由参数或 meta，刷新页面后也能保持正确语言。
const currentLocale = computed(() => getRouteLocale(route));
const currentLanguage = computed(() => LOCALE_META[currentLocale.value]);

// 语言列表统一从 i18n 元信息生成，后续新增语言时不用改导航模板。
const languages = computed(() =>
    SUPPORTED_LOCALES.map((locale) => ({
        locale,
        ...LOCALE_META[locale],
    })),
);

const localizedPath = (page) => pagePath(page, currentLocale.value);

// 主导航使用页面 key 生成路径，新增页面时优先补 i18n 的 PAGE_SLUGS。
const primaryLinks = computed(() => [
    {
        page: "customized",
        label: t("nav.customized"),
        to: localizedPath("customized"),
    },
    {
        page: "about",
        label: t("nav.about"),
        to: localizedPath("about"),
    },
]);

const documentLinks = computed(() =>
    DOC_COLLECTIONS.map((collection) => ({
        collection: collection.id,
        label: getDocCollectionMeta(collection.id, currentLocale.value).title,
        to: docPath(undefined, currentLocale.value, collection.id),
    })),
);

// 下载入口指向当前语言下对应程序的独立页面。
const downloadGroups = computed(() => [
    {
        label: t("nav.server"),
        items: [
            {
                label: t("nav.downloads.server"),
                to: downloadPath("server", currentLocale.value),
            },
            {
                label: t("nav.downloads.rms"),
                to: downloadPath("rms", currentLocale.value),
            },
        ],
    },
    {
        label: t("nav.app"),
        items: [
            {
                label: t("nav.downloads.mobile"),
                to: downloadPath("mobile", currentLocale.value),
            },
            {
                label: t("nav.downloads.poolNode"),
                to: downloadPath("pool-node", currentLocale.value),
            },
        ],
    },
    {
        label: t("nav.plugin"),
        items: [
            {
                label: t("nav.downloads.cli"),
                to: downloadPath("cli", currentLocale.value),
            },
        ],
    },
]);

const flatDownloadLinks = computed(() =>
    downloadGroups.value.flatMap((group) => group.items),
);

const isActivePage = (page) => route.meta?.page === page;
const isActiveDocCollection = (docCollection) =>
    route.meta?.page === "document" &&
    route.meta?.docCollection === docCollection;

// 移动端菜单只维护开关状态，路由变化时在 watch 中自动关闭。
const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const closeMenu = () => {
    isOpen.value = false;
};

// 切换语言时保留当前页面、hash 与 query，减少用户上下文丢失。
const switchLocale = (nextLocale) => {
    const page = route.meta?.page || "home";
    const path =
        page === "document"
            ? docPath(
                  route.meta?.docPage,
                  nextLocale,
                  route.meta?.docCollection,
              )
            : page === "download"
              ? downloadPath(route.meta?.downloadPage, nextLocale)
              : pagePath(page, nextLocale);

    closeMenu();
    router.push({
        path,
        hash: route.hash,
        query: route.query,
    });
};

watch(
    () => route.fullPath,
    // 路由切换后自动收起移动端菜单，避免新页面仍被菜单遮住。
    () => closeMenu(),
);
</script>

<style scoped>
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.rotating-element {
    animation: spin 10s linear infinite;
    display: inline-block;
    transform-origin: center center;
}

.header-bar {
    backdrop-filter: blur(18px);
    background-color: rgb(13 18 28 / 90%);
    border-bottom: 1px solid var(--color-neutral-900, #2c3437);
    position: sticky;
    top: 0;
    z-index: 40;
}

.skip-link {
    background: var(--color-white);
    border-radius: 6px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    color: var(--color-neutral-950);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    height: 1px;
    left: 1rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 0.75rem;
    /* 默认完全视觉隐藏，只给键盘用户聚焦时显示。 */
    white-space: nowrap;
    width: 1px;
    z-index: 50;
}

.skip-link:focus,
.skip-link:focus-visible {
    clip: auto;
    clip-path: none;
    height: auto;
    outline: 2px solid var(--color-green-400);
    outline-offset: 2px;
    overflow: visible;
    padding: 0.5rem 0.75rem;
    width: auto;
}

.header-shell {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    /* 导航最大宽度限制为 1800px；小于 1800px 时用 100% 宽度贴近视口两侧。 */
    margin: 0 auto;
    max-width: 1800px;
    min-height: 4rem;
    padding: 0 1rem;
    width: 100%;
}

.brand-link {
    align-items: center;
    color: var(--color-white);
    display: inline-flex;
    flex: 0 0 auto;
    gap: 0.5rem;
    min-width: 0;
    text-decoration: none;
}

.brand-logo {
    height: 1.75rem;
    width: 1.75rem;
}

.brand-name {
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
    white-space: nowrap;
}

/* 桌面菜单靠左贴近品牌区，避免主导航在整条 header 中居中漂移。 */
.desktop-nav {
    display: none;
    flex: 1 1 auto;
    justify-content: flex-start;
    margin-left: 1.25rem;
    min-width: 0;
}

.desktop-nav-list {
    align-items: center;
    display: flex;
    gap: 0.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-link,
.language-trigger,
.icon-link,
.mobile-toggle {
    align-items: center;
    border-radius: 8px;
    color: var(--color-neutral-300);
    display: inline-flex;
    gap: 0.375rem;
    min-height: 2.25rem;
    text-decoration: none;
    transition:
        background-color 150ms ease,
        color 150ms ease;
}

.nav-link {
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
    padding: 0 0.75rem;
    white-space: nowrap;
}

.nav-trigger {
    border: 0;
    cursor: pointer;
}

.nav-link:hover,
.nav-link:focus-visible,
.nav-link.is-active,
.language-trigger:hover,
.language-trigger:focus-visible,
.icon-link:hover,
.icon-link:focus-visible,
.mobile-toggle:hover,
.mobile-toggle:focus-visible {
    background-color: var(--color-neutral-900, #2c3437);
    color: var(--color-white);
    outline: none;
}

/* 导航当前页选中态使用品牌绿色，和你指定的 action 选中色保持一致。 */
.nav-link.is-active,
.mobile-nav-link[aria-current="page"] {
    background-color: #417e38;
    color: var(--color-white);
}

.header-actions {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 0.35rem;
}

.language-trigger {
    background: transparent;
    border: 0;
    cursor: pointer;
    font-size: var(--text-sm);
    padding: 0 0.625rem;
}

.language-label {
    display: none;
    max-width: 7.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.icon-link,
.mobile-toggle {
    background: transparent;
    border: 0;
    height: 2.25rem;
    justify-content: center;
    padding: 0;
    width: 2.25rem;
}

.mobile-toggle {
    cursor: pointer;
}

.icon-xs {
    height: 0.875rem;
    width: 0.875rem;
}

.icon-sm {
    height: 1rem;
    width: 1rem;
}

.icon-md {
    height: 1.25rem;
    width: 1.25rem;
}

.icon-lg {
    height: 1.5rem;
    width: 1.5rem;
}

.dropdown-link {
    color: var(--color-neutral-100);
    display: block;
    text-decoration: none;
    width: 100%;
}

.download-menu,
.docs-menu {
    min-width: 14rem;
}

.language-menu {
    min-width: 10rem;
}

.language-option {
    justify-content: space-between;
}

.language-check {
    color: var(--color-green-400);
    font-weight: var(--font-weight-semibold);
}

.mobile-nav {
    border-top: 1px solid var(--color-neutral-900, #2c3437);
    background: rgb(13 18 28 / 98%);
}

.mobile-nav-list {
    box-sizing: border-box;
    display: grid;
    gap: 0.25rem;
    list-style: none;
    margin: 0 auto;
    max-width: 1800px;
    padding: 0.75rem 1rem 1rem;
    width: 100%;
}

.mobile-nav-link,
.mobile-document-link,
.mobile-download-link {
    border-radius: 8px;
    color: var(--color-neutral-200);
    display: block;
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    padding: 0.75rem;
    text-decoration: none;
}

.mobile-nav-link:hover,
.mobile-nav-link:focus-visible,
.mobile-document-link:hover,
.mobile-document-link:focus-visible,
.mobile-download-link:hover,
.mobile-download-link:focus-visible {
    background-color: var(--color-neutral-900, #2c3437);
    color: var(--color-white);
    outline: none;
}

.mobile-document-group,
.mobile-download-group {
    border-top: 1px solid var(--color-neutral-900, #2c3437);
    margin-top: 0.5rem;
    padding-top: 0.5rem;
}

.mobile-document-group p,
.mobile-download-group p {
    color: var(--color-neutral-500);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    margin: 0;
    padding: 0.5rem 0.75rem 0.25rem;
    text-transform: uppercase;
}

.mobile-document-link,
.mobile-download-link {
    color: var(--color-neutral-300);
    font-size: var(--text-sm);
    padding-block: 0.625rem;
}

.mobile-document-link[aria-current="page"] {
    background-color: #417e38;
    color: var(--color-white);
}

.mobile-language-group {
    border-top: 1px solid var(--color-neutral-900, #2c3437);
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 0.5rem;
    padding-top: 0.75rem;
}

.mobile-language-button {
    background: transparent;
    border: 1px solid var(--color-neutral-800, #556066);
    border-radius: 8px;
    color: var(--color-neutral-200);
    cursor: pointer;
    font-size: var(--text-sm);
    min-height: 2.5rem;
    padding: 0 0.5rem;
}

.mobile-language-button.is-active,
.mobile-language-button:hover,
.mobile-language-button:focus-visible {
    background: var(--color-neutral-900, #2c3437);
    border-color: var(--color-green-600, #417e38);
    color: var(--color-white);
    outline: none;
}

@media (min-width: 640px) {
    .header-shell {
        padding: 0 1.5rem;
    }

    .language-label {
        display: inline;
    }
}

@media (min-width: 1024px) {
    .desktop-nav {
        display: flex;
    }

    .mobile-toggle {
        display: none;
    }
}
</style>
