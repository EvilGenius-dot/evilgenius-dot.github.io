<template>
    <main id="main-content" class="docs-shell">
        <aside class="docs-sidebar" aria-labelledby="docs-sidebar-title">
            <div class="docs-sidebar-inner">
                <!-- <p id="docs-sidebar-title" class="sidebar-title">
                    {{ t("document.navigationTitle") }}
                </p> -->
                <div class="sidebar-groups">
                    <section
                        v-for="category in docCategories"
                        :key="category.id"
                        class="sidebar-group"
                    >
                        <h2>
                            {{
                                getDocCategoryMeta(category.id, currentLocale)
                                    .title
                            }}
                        </h2>
                        <nav class="sidebar-nav">
                            <RouterLink
                                v-for="page in pagesByCategory[category.id] ||
                                []"
                                :key="page.id"
                                :to="docPath(page.id, currentLocale)"
                                :class="[
                                    'sidebar-link',
                                    { 'is-active': page.id === currentDocPage },
                                ]"
                            >
                                {{
                                    getDocPageMeta(page.id, currentLocale)
                                        .navTitle
                                }}
                            </RouterLink>
                        </nav>
                    </section>
                </div>
            </div>
        </aside>

        <article class="docs-article" aria-labelledby="document-title">
            <header class="docs-header">
                <p class="eyebrow">{{ t("document.eyebrow") }}</p>
                <h1 id="document-title">{{ pageTitle }}</h1>
                <p>{{ pageDescription }}</p>
            </header>

            <section
                class="document-content"
                aria-label="Documentation content"
                v-html="documentHtml"
            />

            <nav class="page-nav" aria-label="Documentation page navigation">
                <RouterLink
                    v-if="previousPage"
                    class="page-nav-link"
                    :to="docPath(previousPage.id, currentLocale)"
                >
                    <span>{{ t("document.previousPage") }}</span>
                    {{
                        getDocPageMeta(previousPage.id, currentLocale).navTitle
                    }}
                </RouterLink>
                <RouterLink
                    v-if="nextPage"
                    class="page-nav-link is-next"
                    :to="docPath(nextPage.id, currentLocale)"
                >
                    <span>{{ t("document.nextPage") }}</span>
                    {{ getDocPageMeta(nextPage.id, currentLocale).navTitle }}
                </RouterLink>
            </nav>
        </article>

        <aside class="article-aside" aria-labelledby="article-toc-title">
            <div class="article-aside-inner">
                <section class="aside-section">
                    <p class="aside-label">{{ t("document.readingTime") }}</p>
                    <p class="reading-time">
                        {{
                            t("document.readingTimeValue", {
                                minutes: readingMinutes,
                            })
                        }}
                    </p>
                </section>
                <section class="aside-section">
                    <h2 id="article-toc-title">
                        {{ t("document.onThisPage") }}
                    </h2>
                    <nav class="article-toc">
                        <a
                            v-for="heading in headings"
                            :key="heading.id"
                            :class="[
                                'toc-link',
                                `toc-link-level-${heading.level}`,
                            ]"
                            :href="`#${heading.id}`"
                        >
                            {{ heading.title }}
                        </a>
                    </nav>
                </section>
            </div>
        </aside>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { getDocumentMarkdown, getDocumentPageIndex } from "../docs";
import {
    DOC_CATEGORIES,
    DOC_PAGES,
    DEFAULT_DOC_PAGE,
    docPath,
    getDocCategoryMeta,
    getDocPageMeta,
    getRouteLocale,
} from "../i18n";
import { extractHeadings, renderMarkdown } from "../lib/markdown";

const { t } = useI18n();
const route = useRoute();

const currentLocale = computed(() => getRouteLocale(route));
const currentDocPage = computed(() => route.meta?.docPage || DEFAULT_DOC_PAGE);
const docPages = DOC_PAGES;
const docCategories = DOC_CATEGORIES;
const pagesByCategory = computed(() =>
    docPages.reduce((groups, page) => {
        const category = page.category || "guide";

        return {
            ...groups,
            [category]: [...(groups[category] || []), page],
        };
    }, {}),
);

const documentMarkdown = computed(() =>
    getDocumentMarkdown(currentLocale.value, currentDocPage.value),
);
const contentMarkdown = computed(() =>
    documentMarkdown.value.replace(/^#\s+.+(?:\r?\n)+/, ""),
);
const documentHtml = computed(() => renderMarkdown(contentMarkdown.value));
const headings = computed(() => extractHeadings(contentMarkdown.value));
const pageTitle = computed(
    () => getDocPageMeta(currentDocPage.value, currentLocale.value).title,
);
const pageDescription = computed(
    () => getDocPageMeta(currentDocPage.value, currentLocale.value).description,
);
const currentPageIndex = computed(() =>
    getDocumentPageIndex(currentDocPage.value),
);
const previousPage = computed(() => DOC_PAGES[currentPageIndex.value - 1]);
const nextPage = computed(() => DOC_PAGES[currentPageIndex.value + 1]);
const readingMinutes = computed(() => {
    const text = contentMarkdown.value
        .replace(/```[\s\S]*?```/g, "")
        .replace(/[#>*_`[\]()|-]/g, " ");
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    return Math.max(1, Math.ceil(wordCount / 220));
});
</script>

<style scoped>
.docs-shell {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    margin: 0 auto;
    max-width: 1800px;
    min-height: calc(100vh - 4rem);
    padding: 0 1rem;
    width: 100%;
}

.docs-sidebar,
.article-aside {
    min-width: 0;
}

.docs-sidebar-inner,
.article-aside-inner {
    min-width: 0;
}

.docs-sidebar {
    border-bottom: 1px solid var(--color-neutral-900);
    padding: 1.25rem 1rem;
}

.sidebar-title,
.sidebar-group h2,
.aside-label,
.article-aside h2 {
    color: var(--color-neutral-500);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0;
    margin: 0 0 0.75rem;
    text-transform: uppercase;
}

.sidebar-nav,
.article-toc {
    display: grid;
    gap: 0.125rem;
}

.sidebar-groups {
    display: grid;
    gap: 1.5rem;
}

.sidebar-group {
    min-width: 0;
}

.sidebar-link,
.toc-link {
    border-radius: 6px;
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.45;
    padding: 0.45rem 0.625rem;
    text-decoration: none;
}

.sidebar-link:hover,
.sidebar-link:focus-visible,
.toc-link:hover,
.toc-link:focus-visible {
    background: rgb(34 197 94 / 10%);
    color: var(--color-green-400);
    outline: none;
}

.sidebar-link.is-active {
    background: rgb(34 197 94 / 12%);
    color: var(--color-white);
    font-weight: var(--font-weight-semibold);
}

.docs-article {
    background-image: linear-gradient(
        180deg,
        color-mix(in oklab, #2c3437 50%, transparent) 0%,
        color-mix(in oklab, #2c3437 0%, transparent) 48.32%
    );
    isolation: isolate;
    min-width: 0;
    overflow: clip;
    padding: 4rem 1rem;
    position: relative;
    z-index: 0;
}

.docs-header {
    border-bottom: 1px solid var(--color-neutral-900);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
}

.eyebrow {
    color: var(--color-green-400);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 0.875rem;
}

h1,
h2,
p {
    margin-top: 0;
}

h1 {
    color: var(--color-white);
    font-size: var(--text-5xl);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
}

.docs-header p {
    color: var(--color-neutral-300);
    font-size: var(--text-lg);
    line-height: 1.7;
    margin-bottom: 0;
}

.document-content {
    min-width: 0;
}

.document-content :deep(*) {
    scroll-margin-top: 6rem;
}

.document-content :deep(h1),
.document-content :deep(h2),
.document-content :deep(h3) {
    color: var(--color-white);
    font-weight: 700;
    line-height: 1.25;
}

.document-content :deep(h1) {
    font-size: var(--text-4xl);
    margin: 0 0 1rem;
}

.document-content :deep(h2) {
    border-top: 1px solid var(--color-neutral-900);
    font-size: var(--text-2xl);
    margin: 2.5rem 0 1rem;
    padding-top: 2rem;
}

.document-content :deep(h3) {
    font-size: var(--text-xl);
    margin: 1.75rem 0 0.75rem;
}

.document-content :deep(p),
.document-content :deep(li),
.document-content :deep(td),
.document-content :deep(th),
.document-content :deep(blockquote) {
    color: var(--color-neutral-300);
    line-height: 1.75;
}

.document-content :deep(p),
.document-content :deep(ul),
.document-content :deep(ol),
.document-content :deep(blockquote),
.document-content :deep(table),
.document-content :deep(pre) {
    margin: 0 0 1.125rem;
}

.document-content :deep(ul),
.document-content :deep(ol) {
    padding-left: 1.25rem;
}

.document-content :deep(a) {
    color: var(--color-green-400);
    text-decoration-color: rgb(74 222 128 / 45%);
}

.document-content :deep(blockquote) {
    border-left: 3px solid var(--color-green-400);
    margin-left: 0;
    padding-left: 1rem;
}

.document-content :deep(pre) {
    background: rgb(2 6 23 / 90%);
    border: 1px solid var(--color-neutral-900);
    border-radius: 8px;
    overflow-x: auto;
    padding: 1rem;
}

.document-content :deep(code) {
    background: rgb(15 23 42 / 85%);
    border: 1px solid var(--color-neutral-900);
    border-radius: 5px;
    color: var(--color-neutral-100);
    font-size: 0.92em;
    padding: 0.1rem 0.28rem;
}

.document-content :deep(pre code) {
    background: transparent;
    border: 0;
    padding: 0;
}

.document-content :deep(table) {
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
    width: 100%;
}

.document-content :deep(th),
.document-content :deep(td) {
    border: 1px solid var(--color-neutral-900);
    padding: 0.625rem 0.75rem;
    text-align: left;
}

.document-content :deep(th) {
    background: rgb(15 23 42 / 85%);
    color: var(--color-white);
}

.article-aside {
    border-top: 1px solid var(--color-neutral-900);
    padding: 1.25rem 1rem;
}

.article-aside-inner {
    display: grid;
    gap: 1.75rem;
}

.aside-section {
    min-width: 0;
}

.reading-time {
    color: var(--color-neutral-300);
    font-size: var(--text-sm);
    margin: 0;
}

.toc-link-level-3 {
    color: var(--color-neutral-500);
    padding-left: 1.25rem;
}

.page-nav {
    border-top: 1px solid var(--color-neutral-900);
    display: grid;
    gap: 1rem;
    margin-top: 3rem;
    padding-top: 1.5rem;
}

.page-nav-link {
    border: 1px solid var(--color-neutral-900);
    border-radius: 8px;
    color: var(--color-white);
    display: grid;
    gap: 0.25rem;
    padding: 1rem;
    text-decoration: none;
}

.page-nav-link:hover,
.page-nav-link:focus-visible {
    border-color: rgb(34 197 94 / 45%);
    outline: none;
}

.page-nav-link span {
    color: var(--color-neutral-500);
    font-size: var(--text-xs);
}

@media (min-width: 720px) {
    .docs-shell {
        padding-inline: 1.5rem;
    }

    .docs-article {
        padding: 5rem 1.5rem;
    }

    .page-nav {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .page-nav-link.is-next {
        text-align: right;
    }

    .page-nav-link.is-next:first-child {
        grid-column: 2;
    }
}

@media (min-width: 980px) {
    .docs-shell {
        align-items: start;
        grid-template-columns:
            minmax(12rem, 17rem)
            minmax(0, 74rem)
            minmax(12rem, 15rem);
        padding-inline: clamp(2rem, 2.5vw, 3rem);
    }

    .docs-sidebar,
    .article-aside {
        align-self: stretch;
        min-height: calc(100vh - 4rem);
    }

    .docs-sidebar {
        border-bottom: 0;
        grid-column: 1;
        max-height: none;
        overflow-y: auto;
        padding: 2rem 1.5rem 5rem;
    }

    .docs-article {
        border-left: 1px solid var(--color-neutral-900);
        border-right: 1px solid var(--color-neutral-900);
        grid-column: 2;
        padding: 2rem 4.5rem 5rem;
    }

    .article-aside {
        border-top: 0;
        grid-column: 3;
        max-height: none;
        overflow-y: auto;
        padding: 2rem 1.5rem 5rem;
    }

    .docs-sidebar-inner,
    .article-aside-inner {
        position: sticky;
        top: 0;
    }
}
</style>
