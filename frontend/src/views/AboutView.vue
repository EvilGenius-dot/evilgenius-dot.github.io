<template>
    <main id="main-content" class="page-shell">
        <article class="about-article" aria-labelledby="about-title">
            <p class="eyebrow">{{ t("about.eyebrow") }}</p>
            <h1 id="about-title">{{ t("about.title") }}</h1>
            <p>{{ t("about.description") }}</p>
        </article>
    </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";

// 关于页文案全部来自语言包，后续维护时不需要改模板结构。
const { t } = useI18n();
</script>

<style scoped>
.page-shell {
    margin: 0 auto;
    max-width: 1180px;
    min-height: calc(100vh - 4rem);
    padding: 5rem 1rem;
}

.about-article {
    max-width: 48rem;
}

.eyebrow {
    color: var(--color-green-400);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 0.875rem;
}

h1,
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

.about-article p:last-child {
    color: var(--color-neutral-300);
    font-size: var(--text-lg);
    line-height: 1.7;
}

@media (min-width: 720px) {
    .page-shell {
        padding-inline: 1.5rem;
    }
}
</style>
