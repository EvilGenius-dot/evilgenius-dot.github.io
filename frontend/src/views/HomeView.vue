<template>
    <main id="main-content" class="home-page">
        <div class="bg-container">
            <section class="hero-section" aria-labelledby="home-title">
                <div class="hero-copy">
                    <p class="eyebrow">{{ t("home.eyebrow") }}</p>
                    <h1 id="home-title">{{ t("home.title") }}</h1>
                    <p class="hero-description">{{ t("home.description") }}</p>
                    <div class="hero-actions">
                        <RouterLink
                            :to="{
                                path: localizedHomePath,
                                hash: '#downloads',
                            }"
                            class="primary-action"
                        >
                            {{ t("home.primaryCta") }}
                        </RouterLink>
                        <RouterLink
                            :to="pagePath('document', currentLocale)"
                            class="secondary-action"
                        >
                            {{ t("home.secondaryCta") }}
                        </RouterLink>
                    </div>
                </div>

                <section class="demo-panel" aria-label="RustMinerSystem sample">
                    <div class="demo-tabs" aria-hidden="true">
                        <span
                            v-for="(tab, index) in demoTabs"
                            :key="tab"
                            class="demo-tab"
                            :class="{ 'is-active': index === 0 }"
                        >
                            {{ tab }}
                        </span>
                    </div>
                    <pre
                        class="demo-code"
                    ><code><span class="code-muted">// RustMinerSystem deployment modes</span>
<span class="code-key">traditional_pool_proxy</span> = <span class="code-value">"enabled"</span>
<span class="code-key">self_hosted_pool_node</span> = <span class="code-value">"optional"</span>
<span class="code-key">rms_secure_client</span> = [<span class="code-value">"encrypt"</span>, <span class="code-value">"compress"</span>]

<span class="code-muted">// Linux, Windows, ARM and ARMV7 packages</span>
<span class="code-key">install</span> --channel latest --target operators</code></pre>
                </section>
            </section>

            <section class="content-section" aria-labelledby="features-title">
                <h2 id="features-title">{{ t("home.featuresTitle") }}</h2>
                <div class="feature-grid">
                    <article
                        v-for="feature in features"
                        :key="feature.title"
                        class="info-card"
                    >
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.text }}</p>
                    </article>
                </div>
            </section>

            <section
                id="downloads"
                class="content-section"
                aria-labelledby="downloads-title"
            >
                <div class="section-heading">
                    <h2 id="downloads-title">
                        {{ t("home.downloadsTitle") }}
                    </h2>
                    <p>{{ t("home.downloadsDescription") }}</p>
                </div>
                <div class="download-grid">
                    <article
                        v-for="item in downloads"
                        :id="item.id"
                        :key="item.id"
                        class="download-card"
                    >
                        <span>{{ item.group }}</span>
                        <h3>{{ item.title }}</h3>
                        <a
                            href="https://github.com/evilgenius-dot"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ t("home.releaseLink") }}
                        </a>
                    </article>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { getRouteLocale, pagePath } from "@/i18n";

const route = useRoute();
const { t } = useI18n();

// 首页按钮和下载锚点跟随当前语言，避免中文/俄语页面跳回英文首页。
const currentLocale = computed(() => getRouteLocale(route));
const localizedHomePath = computed(() => pagePath("home", currentLocale.value));

// 功能卡片只维护 key，实际文案交给语言包，便于三语同步更新。
const features = computed(() => [
    {
        title: t("home.features.deployment.title"),
        text: t("home.features.deployment.text"),
    },
    {
        title: t("home.features.operations.title"),
        text: t("home.features.operations.text"),
    },
    {
        title: t("home.features.localization.title"),
        text: t("home.features.localization.text"),
    },
]);

// 下载卡片的 id 与导航 hash 对应，改锚点时两边需要同步。
const downloads = computed(() => [
    {
        id: "download-server",
        group: t("nav.server"),
        title: t("nav.downloads.server"),
    },
    {
        id: "download-rms",
        group: t("nav.server"),
        title: t("nav.downloads.rms"),
    },
    {
        id: "download-app",
        group: t("nav.app"),
        title: t("nav.downloads.desktop"),
    },
    {
        id: "download-pool-node",
        group: t("nav.app"),
        title: t("nav.downloads.poolNode"),
    },
]);

const demoTabs = computed(() => [
    t("nav.downloads.server"),
    t("nav.downloads.rms"),
    t("nav.downloads.desktop"),
    t("nav.downloads.poolNode"),
]);
</script>

<style scoped>
.home-page {
    background:
        radial-gradient(
            circle at 50% 8rem,
            rgb(44 104 44 / 26%),
            transparent 36rem
        ),
        radial-gradient(
            circle at 8% 30rem,
            rgb(65 126 56 / 14%),
            transparent 24rem
        ),
        radial-gradient(
            circle at 92% 18rem,
            rgb(69 96 76 / 18%),
            transparent 26rem
        ),
        linear-gradient(rgb(255 255 255 / 3%) 1px, transparent 1px),
        linear-gradient(90deg, rgb(255 255 255 / 3%) 1px, transparent 1px);
    background-size:
        auto,
        auto,
        auto,
        3rem 3rem,
        3rem 3rem;
    min-height: calc(100vh - 4rem);
    overflow: hidden;
    padding: 0;
    position: relative;
    z-index: 0;
}

.home-page::before,
.home-page::after {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 0;
}

.home-page::before {
    background:
        linear-gradient(180deg, rgb(10 15 23 / 0%), rgb(10 15 23 / 78%) 74%),
        url("/image/bg.svg") center top / cover no-repeat;
    inset: 0;
    opacity: 0.22;
}

.home-page::after {
    aspect-ratio: 1;
    background-color: #2c682c;
    border-radius: 9999px;
    filter: blur(120px);
    left: 50%;
    top: 16rem;
    transform: translate(-50%, -50%);
    width: min(380px, 78vw);
}

.bg-container {
    margin: 0 auto;
    max-width: 1280px;
    min-height: calc(100vh - 5rem);
    padding: calc(var(--spacing, 0.25rem) * 4);
    position: relative;
    z-index: 1;
}

.hero-section {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-start;
    min-height: auto;
    text-align: center;
}

.hero-copy {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    min-width: 0;
}

.eyebrow {
    color: var(--color-green-400);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 0.875rem;
}

h1,
h2,
h3,
p {
    margin-top: 0;
}

h1 {
    color: var(--color-white);
    font-size: var(--text-4xl);
    font-weight: 700;
    line-height: 1.05;
    margin-bottom: 1.25rem;
    /* 多语言长词在小屏上允许换行，避免俄罗斯语等文案撑破布局。 */
    overflow-wrap: anywhere;
}

.hero-description {
    color: var(--color-neutral-300);
    font-size: var(--text-lg);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    max-width: 42rem;
}

.hero-actions {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    min-width: 0;
}

.primary-action,
.secondary-action {
    align-items: center;
    border-radius: 8px;
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    min-height: 2.75rem;
    max-width: 100%;
    padding: 0 1rem;
    text-decoration: none;
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        color 150ms ease;
}

.primary-action {
    background: var(--color-green-600);
    color: var(--color-white);
}

.primary-action:hover,
.primary-action:focus-visible {
    background: var(--color-green-400);
    color: var(--color-neutral-950);
    outline: none;
}

.secondary-action {
    border: 1px solid var(--color-neutral-800);
    color: var(--color-neutral-100);
}

.secondary-action:hover,
.secondary-action:focus-visible {
    background: var(--color-neutral-900);
    border-color: var(--color-neutral-700);
    outline: none;
}

.demo-panel {
    background: rgb(13 18 28 / 86%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 32%);
    margin: 0 auto;
    max-width: 48rem;
    overflow: hidden;
    text-align: left;
    width: 100%;
}

.demo-tabs {
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    display: flex;
    gap: 0.25rem;
    overflow-x: auto;
    padding: 0.5rem;
}

.demo-tab {
    border-radius: 6px;
    color: var(--color-neutral-400);
    flex: none;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    padding: 0.5rem 0.75rem;
    white-space: nowrap;
}

.demo-tab.is-active {
    background: rgb(65 126 56 / 24%);
    color: var(--color-neutral-100);
}

.demo-code {
    color: var(--color-neutral-200);
    font-family:
        ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
    font-size: var(--text-sm);
    line-height: 1.8;
    margin: 0;
    overflow-x: auto;
    padding: 1rem;
}

.code-muted {
    color: var(--color-neutral-500);
}

.code-key {
    color: var(--color-green-400);
}

.code-value {
    color: var(--color-neutral-100);
}

.content-section {
    padding: 4rem 0 0;
}

.content-section h2 {
    color: var(--color-white);
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.section-heading {
    max-width: 44rem;
}

.section-heading p {
    color: var(--color-neutral-400);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.feature-grid,
.download-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
}

.info-card,
.download-card {
    background: rgb(13 18 28 / 72%);
    border: 1px solid var(--color-neutral-900);
    border-radius: 8px;
    padding: 1.25rem;
}

.info-card h3,
.download-card h3 {
    color: var(--color-white);
    font-size: var(--text-lg);
    font-weight: var(--font-weight-semibold);
    line-height: 1.35;
    margin-bottom: 0.625rem;
}

.info-card p {
    color: var(--color-neutral-400);
    line-height: 1.7;
    margin-bottom: 0;
}

.download-card span {
    color: var(--color-green-400);
    display: inline-block;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.download-card a {
    color: var(--color-neutral-200);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
}

.download-card a:hover,
.download-card a:focus-visible {
    color: var(--color-white);
    outline: none;
}

@media (min-width: 720px) {
    .bg-container {
        padding-block: calc(var(--spacing, 0.25rem) * 8)
            calc(var(--spacing, 0.25rem) * 14);
        padding-inline: calc(var(--spacing, 0.25rem) * 14);
    }

    h1 {
        font-size: var(--text-5xl);
    }

    .feature-grid,
    .download-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .bg-container {
        padding-block: calc(var(--spacing, 0.25rem) * 14)
            calc(var(--spacing, 0.25rem) * 28);
        padding-inline: calc(var(--spacing, 0.25rem) * 28);
    }

    h1 {
        font-size: 3.75rem;
        white-space: nowrap;
    }

    .hero-section {
        display: grid;
        gap: 4rem;
        grid-template-columns: minmax(0, 1.08fr) minmax(24rem, 0.92fr);
        justify-content: stretch;
        text-align: left;
    }

    .hero-copy {
        align-items: flex-start;
        max-width: 40rem;
    }

    .hero-description {
        max-width: 38rem;
    }

    .hero-actions {
        justify-content: flex-start;
    }

    .demo-panel {
        align-self: center;
        margin: 0;
    }

    .feature-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 1440px) {
    .bg-container {
        max-width: 1440px;
        padding-block-start: calc(200px - 4rem);
    }
}
</style>
