<template>
    <main id="main-content" class="page-shell">
        <article class="page-article" aria-labelledby="customized-title">
            <header class="page-header">
                <p class="eyebrow">{{ t("customized.eyebrow") }}</p>
                <h1 id="customized-title">{{ t("customized.title") }}</h1>
                <p>{{ t("customized.description") }}</p>
            </header>

            <section class="section-grid">
                <article
                    v-for="point in points"
                    :key="point.title"
                    class="info-card"
                >
                    <h2>{{ point.title }}</h2>
                    <p>{{ point.text }}</p>
                </article>
            </section>
        </article>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// 定制能力点使用语言包 key 驱动，保证英文、中文、俄语结构一致。
const points = computed(() => [
    {
        title: t("customized.points.branding.title"),
        text: t("customized.points.branding.text"),
    },
    {
        title: t("customized.points.integrations.title"),
        text: t("customized.points.integrations.text"),
    },
    {
        title: t("customized.points.localization.title"),
        text: t("customized.points.localization.text"),
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
