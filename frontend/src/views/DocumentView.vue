<template>
    <main id="main-content" class="page-shell">
        <article class="page-article" aria-labelledby="document-title">
            <header class="page-header">
                <p class="eyebrow">{{ t("document.eyebrow") }}</p>
                <h1 id="document-title">{{ t("document.title") }}</h1>
                <p>{{ t("document.description") }}</p>
            </header>

            <section class="section-grid">
                <article
                    v-for="section in sections"
                    :key="section.title"
                    class="info-card"
                >
                    <h2>{{ section.title }}</h2>
                    <p>{{ section.text }}</p>
                </article>
            </section>
        </article>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// 文档章节使用语言包 key 驱动，新增章节时先补三份语言文案。
const sections = computed(() => [
    {
        title: t("document.sections.install.title"),
        text: t("document.sections.install.text"),
    },
    {
        title: t("document.sections.configure.title"),
        text: t("document.sections.configure.text"),
    },
    {
        title: t("document.sections.operate.title"),
        text: t("document.sections.operate.text"),
    },
]);
</script>

<style scoped>
.page-shell {
    margin: 0 auto;
    max-width: 1180px;
    padding: 5rem 1rem;
}

.page-article {
    display: grid;
    gap: 2rem;
}

.page-header {
    max-width: 48rem;
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
    font-size: var(--text-4xl);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
}

.page-header p {
    color: var(--color-neutral-300);
    font-size: var(--text-lg);
    line-height: 1.7;
}

.section-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
}

.info-card {
    background: rgb(13 18 28 / 72%);
    border: 1px solid var(--color-neutral-900);
    border-radius: 8px;
    padding: 1.25rem;
}

.info-card h2 {
    color: var(--color-white);
    font-size: var(--text-xl);
    font-weight: var(--font-weight-semibold);
    line-height: 1.35;
    margin-bottom: 0.625rem;
}

.info-card p {
    color: var(--color-neutral-400);
    line-height: 1.7;
    margin-bottom: 0;
}

@media (min-width: 720px) {
    .page-shell {
        padding-inline: 1.5rem;
    }

    .section-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>
