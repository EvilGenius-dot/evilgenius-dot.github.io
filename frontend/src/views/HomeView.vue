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
                            <span>{{ t("home.secondaryCta") }}</span>
                            <small>{{ t("home.secondaryCtaNote") }}</small>
                        </RouterLink>
                    </div>
                    <div
                        class="pool-links"
                        :aria-label="t('home.poolLinksLabel')"
                    >
                        <a
                            v-for="pool in partnerPools"
                            :key="pool.name"
                            :href="pool.href"
                            class="pool-link"
                            :class="pool.className"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="pool.name"
                            :title="pool.name"
                        >
                            <img
                                :src="pool.logo"
                                :alt="pool.name"
                                class="pool-logo"
                                :class="pool.logoClass"
                                loading="lazy"
                                decoding="async"
                            />
                        </a>
                    </div>
                    <div class="mt-3.5 text-center w-116">
                        <span class="text-sm text-neutral-600">RustMinerSystem 很荣幸得到上述及更多合作伙伴的支持。</span>
                    </div>
                </div>

                <section
                    class="product-preview"
                    :aria-label="t('home.preview.label')"
                >
                    <div class="preview-shell">
                        <div class="preview-toolbar" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                            <strong>RustMinerSystem</strong>
                        </div>
                        <img
                            src="/image/dashboard-preview.png"
                            :alt="t('home.preview.imageAlt')"
                            class="preview-image"
                            loading="eager"
                            decoding="async"
                        />
                        <div class="preview-shade" aria-hidden="true"></div>
                    </div>

                    <div class="preview-stat stat-miners">
                        <span>{{ t("home.preview.minersLabel") }}</span>
                        <strong>138</strong>
                    </div>
                    <div class="preview-stat stat-network">
                        <span>{{ t("home.preview.networkLabel") }}</span>
                        <strong>128 : 1</strong>
                    </div>
                    <div class="preview-stat stat-profit">
                        <span>{{ t("home.preview.profitLabel") }}</span>
                        <strong>{{ t("home.preview.profitValue") }}</strong>
                    </div>
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
                class="content-section global-section"
                aria-labelledby="global-title"
            >
                <h2 id="global-title">{{ t("home.global.title") }}</h2>
                <p class="global-description">
                    {{ t("home.global.description") }}
                </p>

                <div class="deployment-panel">
                    <div class="deployment-column">
                        <article
                            v-for="site in deploymentSites"
                            :key="site.title"
                            class="deployment-card site-card"
                        >
                            <span>{{ site.region }}</span>
                            <strong>{{ site.title }}</strong>
                            <p>{{ site.text }}</p>
                        </article>
                    </div>

                    <div class="deployment-core" aria-hidden="true">
                        <span class="core-label">{{
                            t("home.global.visual.coreLabel")
                        }}</span>
                        <h3>{{ t("home.global.visual.coreTitle") }}</h3>
                        <p>{{ t("home.global.visual.coreText") }}</p>
                        <div class="core-pills">
                            <span>{{ t("home.global.visual.secure") }}</span>
                            <span>{{ t("home.global.visual.compress") }}</span>
                            <span>{{ t("home.global.visual.route") }}</span>
                        </div>
                    </div>

                    <div class="deployment-column">
                        <article
                            v-for="target in deploymentTargets"
                            :key="target.title"
                            class="deployment-card target-card"
                        >
                            <span>{{ target.type }}</span>
                            <strong>{{ target.title }}</strong>
                            <p>{{ target.text }}</p>
                        </article>
                    </div>

                    <div class="global-metrics">
                        <article
                            v-for="metric in globalMetrics"
                            :key="metric.label"
                            class="global-metric"
                        >
                            <strong>{{ metric.value }}</strong>
                            <span>{{ metric.label }}</span>
                        </article>
                    </div>
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

const deploymentSites = computed(() => [
    {
        region: t("home.global.sites.local.region"),
        title: t("home.global.sites.local.title"),
        text: t("home.global.sites.local.text"),
    },
    {
        region: t("home.global.sites.remote.region"),
        title: t("home.global.sites.remote.title"),
        text: t("home.global.sites.remote.text"),
    },
    {
        region: t("home.global.sites.multi.region"),
        title: t("home.global.sites.multi.title"),
        text: t("home.global.sites.multi.text"),
    },
]);

const deploymentTargets = computed(() => [
    {
        type: t("home.global.targets.proxy.type"),
        title: t("home.global.targets.proxy.title"),
        text: t("home.global.targets.proxy.text"),
    },
    {
        type: t("home.global.targets.poolNode.type"),
        title: t("home.global.targets.poolNode.title"),
        text: t("home.global.targets.poolNode.text"),
    },
    {
        type: t("home.global.targets.pool.type"),
        title: t("home.global.targets.pool.title"),
        text: t("home.global.targets.pool.text"),
    },
]);

const globalMetrics = computed(() => [
    {
        value: "24/7",
        label: t("home.global.metrics.operations"),
    },
    {
        value: t("home.global.metrics.regionsValue"),
        label: t("home.global.metrics.regions"),
    },
    {
        value: t("home.global.metrics.clientValue"),
        label: t("home.global.metrics.client"),
    },
]);

const partnerPools = [
    {
        name: "ViaBTC",
        href: "https://www.viabtc.com/",
        logo: "/image/viabtc.png",
        className: "",
        logoClass: "is-viabtc",
    },
    {
        name: "F2Pool",
        href: "https://www.f2pool.com/",
        logo: "/image/f2pool.png",
        className: "",
        logoClass: "is-f2pool",
    },
    {
        name: "ANTPOOL",
        href: "https://www.antpool.com/",
        logo: "/image/antpool.png",
        className: "",
        logoClass: "is-antpool",
    },
    {
        name: "Poolin",
        href: "https://www.poolin.com/",
        logo: "/image/poolin.svg",
        className: "",
        logoClass: "is-poolin",
    }
];

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
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    margin: 0 auto;
    max-width: 1280px;
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
    align-items: stretch;
    display: inline-flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;
    width: min(100%, 29rem);
}

.primary-action,
.secondary-action {
    align-items: center;
    display: inline-flex;
    gap: 0.5rem;
    justify-content: center;
    line-height: 1.35;
    min-height: 2.75rem;
    max-width: 100%;
    padding: 0.625rem 1.125rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        box-shadow 150ms ease,
        color 150ms ease,
        transform 150ms ease;
    width: 100%;
}

.primary-action {
    background: rgb(65 126 56 / 10%);
    border: 1px solid rgb(65 126 56 / 30%);
    border-radius: 8px;
    box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
    color: var(--color-white);
    font-size: var(--text-base);
    font-weight: var(--font-weight-semibold);
    isolation: isolate;
    overflow: hidden;
    z-index: 0;
}

.primary-action::before {
    background-image: radial-gradient(
        8em circle at 50% 10px,
        var(--color-green-400),
        transparent 30%
    );
    content: "";
    height: 100%;
    inset-inline: 0;
    margin-inline: auto;
    opacity: 0.3;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}

.primary-action::after {
    background: linear-gradient(
        90deg,
        transparent,
        var(--color-green-600),
        transparent
    );
    content: "";
    height: 1px;
    inset-inline: 0;
    margin-inline: auto;
    pointer-events: none;
    position: absolute;
    top: -1px;
    width: 40%;
}

.primary-action:hover,
.primary-action:focus-visible {
    background: rgb(65 126 56 / 20%);
    border-color: rgb(65 126 56 / 42%);
    color: var(--color-white);
    outline: none;
    transform: translateY(-1px);
}

.secondary-action {
    border: 1px solid rgb(255 255 255 / 13%);
    border-radius: 8px;
    color: var(--color-neutral-200);
    flex-direction: column;
    font-weight: var(--font-weight-semibold);
}

.secondary-action small {
    color: var(--color-neutral-500);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-medium);
    line-height: 1.35;
}

.secondary-action:hover,
.secondary-action:focus-visible {
    background: rgb(44 52 55 / 78%);
    border-color: rgb(255 255 255 / 18%);
    color: var(--color-neutral-100);
    outline: none;
    transform: translateY(-1px);
}

.secondary-action:hover small,
.secondary-action:focus-visible small {
    color: var(--color-neutral-300);
}

.pool-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 0.875rem;
    width: min(100%, 29rem);
}

.pool-link {
    align-items: center;
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
    display: inline-flex;
    height: 2.25rem;
    justify-content: center;
    min-width: 2.25rem;
    overflow: hidden;
    padding: 0 0.625rem;
    text-decoration: none;
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        transform 150ms ease;
}

.pool-link.is-light-logo {
    background: rgb(246 247 249 / 92%);
}

.pool-link.is-dark-logo {
    background: rgb(13 18 28 / 72%);
}

.pool-link.is-f2pool-link {
    /* background: #3f5ff6; */
    padding-inline: 0.5rem;
}

.pool-link:hover,
.pool-link:focus-visible {
    border-color: rgb(255 255 255 / 24%);
    outline: none;
    transform: translateY(-1px);
}

.pool-link.is-light-logo:hover,
.pool-link.is-light-logo:focus-visible {
    background: var(--color-white);
}

.pool-link.is-dark-logo:hover,
.pool-link.is-dark-logo:focus-visible {
    background: rgb(13 18 28 / 92%);
}

.pool-link.is-f2pool-link:hover,
.pool-link.is-f2pool-link:focus-visible {
    /* background: #4b68ff; */
}

.pool-logo {
    display: block;
    object-fit: contain;
}

.pool-logo.is-antpool {
    height: 1.05rem;
    width: 6.25rem;
}

.pool-logo.is-f2pool {
    border-radius: 4px;
    height: 1.5rem;
    object-fit: cover;
    object-position: left center;
    /* width: 2.25rem; */
}

.pool-logo.is-poolin {
    height: 1.15rem;
    width: 5.5rem;
}

.pool-logo.is-viabtc {
    height: 1.2rem;
    width: 5rem;
}

.product-preview {
    margin: 0 auto;
    max-width: 56rem;
    position: relative;
    text-align: left;
    width: 100%;
}

.preview-shell {
    background:
        linear-gradient(180deg, rgb(255 255 255 / 10%), transparent 5rem),
        rgb(13 18 28 / 86%);
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
    box-shadow:
        0 2rem 5rem rgb(0 0 0 / 38%),
        0 0 0 1px rgb(65 126 56 / 15%);
    overflow: hidden;
    position: relative;
}

.preview-toolbar {
    align-items: center;
    background: rgb(17 22 34 / 92%);
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    display: flex;
    gap: 0.5rem;
    min-height: 2.25rem;
    padding: 0 0.875rem;
}

.preview-toolbar span {
    border-radius: 9999px;
    display: block;
    height: 0.625rem;
    width: 0.625rem;
}

.preview-toolbar span:nth-child(1) {
    background: #ef4444;
}

.preview-toolbar span:nth-child(2) {
    background: #f59e0b;
}

.preview-toolbar span:nth-child(3) {
    background: #22c55e;
}

.preview-toolbar strong {
    color: var(--color-neutral-300);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    margin-left: 0.25rem;
}

.preview-image {
    aspect-ratio: 4104 / 2178;
    display: block;
    height: auto;
    object-fit: cover;
    object-position: 50% 0;
    width: 100%;
}

.preview-shade {
    background: linear-gradient(180deg, transparent 55%, rgb(8 12 20 / 50%));
    inset: 2.25rem 0 0;
    pointer-events: none;
    position: absolute;
}

.preview-stat {
    backdrop-filter: blur(18px);
    background: rgb(12 18 28 / 78%);
    border: 1px solid rgb(255 255 255 / 14%);
    border-radius: 8px;
    box-shadow: 0 1rem 2.5rem rgb(0 0 0 / 28%);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 9.5rem;
    padding: 0.875rem 1rem;
    position: absolute;
}

.preview-stat span {
    color: var(--color-neutral-400);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-medium);
}

.preview-stat strong {
    color: var(--color-white);
    font-size: var(--text-xl);
    font-weight: 700;
    line-height: 1;
}

.stat-miners {
    left: 1rem;
    top: 4rem;
}

.stat-network {
    right: 1rem;
    top: 4rem;
}

.stat-network strong {
    color: var(--color-green-400);
}

.stat-profit {
    bottom: 1rem;
    right: 1rem;
}

.stat-profit strong {
    color: #facc15;
}

@media (max-width: 640px) {
    .product-preview {
        display: grid;
        gap: 0.75rem;
    }

    .preview-stat {
        min-width: 0;
        position: static;
    }
}

.content-section {
    padding: 0;
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

.global-section {
    display: grid;
    gap: 1rem;
}

.global-section h2 {
    margin-bottom: 0;
}

.global-description {
    color: var(--color-neutral-400);
    line-height: 1.7;
    margin: 0;
    max-width: 48rem;
}

.deployment-panel {
    background:
        radial-gradient(
            circle at 50% 44%,
            rgb(65 126 56 / 24%),
            transparent 24rem
        ),
        linear-gradient(180deg, rgb(255 255 255 / 6%), transparent 42%),
        rgb(13 18 28 / 70%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 22%);
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    margin-top: 0.75rem;
    overflow: hidden;
    padding: 1rem;
    position: relative;
}

.deployment-panel::before {
    background:
        linear-gradient(rgb(255 255 255 / 4%) 1px, transparent 1px),
        linear-gradient(90deg, rgb(255 255 255 / 4%) 1px, transparent 1px);
    background-size: 4rem 4rem;
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
}

.deployment-column,
.deployment-core,
.global-metrics {
    position: relative;
    z-index: 1;
}

.deployment-column {
    display: grid;
    gap: 0.75rem;
}

.deployment-card {
    background: rgb(9 14 22 / 74%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    display: grid;
    gap: 0.375rem;
    min-height: 6.75rem;
    padding: 1rem;
}

.deployment-card span,
.core-label {
    color: var(--color-green-400);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
}

.deployment-card strong {
    color: var(--color-white);
    font-size: var(--text-base);
    font-weight: 700;
    line-height: 1.25;
}

.deployment-card p {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.55;
    margin: 0;
}

.site-card {
    border-left: 2px solid rgb(74 222 128 / 54%);
}

.target-card {
    border-left: 2px solid rgb(125 211 252 / 50%);
}

.deployment-core {
    align-self: center;
    background:
        linear-gradient(180deg, rgb(255 255 255 / 8%), transparent),
        rgb(12 18 28 / 86%);
    border: 1px solid rgb(134 239 172 / 24%);
    border-radius: 8px;
    box-shadow:
        0 1.5rem 4rem rgb(0 0 0 / 28%),
        0 0 3rem rgb(65 126 56 / 18%);
    display: grid;
    gap: 0.875rem;
    padding: 1.25rem;
    text-align: center;
}

.deployment-core::before,
.deployment-core::after {
    background: linear-gradient(
        90deg,
        transparent,
        rgb(74 222 128 / 42%),
        transparent
    );
    content: "";
    display: none;
    height: 1px;
    position: absolute;
    top: 50%;
    width: 4.5rem;
}

.deployment-core::before {
    right: 100%;
}

.deployment-core::after {
    left: 100%;
}

.deployment-core h3 {
    color: var(--color-white);
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: 1.15;
    margin: 0;
}

.deployment-core p {
    color: var(--color-neutral-300);
    font-size: var(--text-sm);
    line-height: 1.65;
    margin: 0 auto;
    max-width: 20rem;
}

.core-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.core-pills span {
    background: rgb(65 126 56 / 18%);
    border: 1px solid rgb(134 239 172 / 16%);
    border-radius: 9999px;
    color: var(--color-neutral-200);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    padding: 0.375rem 0.625rem;
}

.global-metrics {
    border-top: 1px solid rgb(255 255 255 / 10%);
    display: grid;
    grid-template-columns: 1fr;
}

.global-metric {
    display: grid;
    gap: 0.375rem;
    padding: 1.25rem;
}

.global-metric + .global-metric {
    border-top: 1px solid rgb(255 255 255 / 10%);
}

.global-metric strong {
    color: var(--color-white);
    font-size: var(--text-xl);
    font-weight: 700;
    line-height: 1;
}

.global-metric span {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.5;
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
        gap: 5.5rem;
        padding-block: calc(var(--spacing, 0.25rem) * 10)
            calc(var(--spacing, 0.25rem) * 12);
        padding-inline: calc(var(--spacing, 0.25rem) * 14);
    }

    h1 {
        font-size: var(--text-5xl);
    }

    .feature-grid,
    .download-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .global-metrics {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .global-metric + .global-metric {
        border-left: 1px solid rgb(255 255 255 / 10%);
        border-top: 0;
    }
}

@media (min-width: 1024px) {
    .bg-container {
        gap: 6rem;
        padding-block: calc(var(--spacing, 0.25rem) * 16)
            calc(var(--spacing, 0.25rem) * 16);
        padding-inline: calc(var(--spacing, 0.25rem) * 28);
    }

    h1 {
        font-size: clamp(2.75rem, 4vw, 3.25rem);
        white-space: nowrap;
    }

    .hero-section {
        display: grid;
        gap: 3rem;
        grid-template-columns: minmax(0, 1fr) minmax(24rem, 1.05fr);
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
        align-self: flex-start;
    }

    .pool-links {
        justify-content: flex-start;
    }

    .product-preview {
        align-self: center;
        margin: 0;
    }

    .feature-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .deployment-panel {
        gap: 1.25rem;
        grid-template-columns:
            minmax(0, 1fr) minmax(18rem, 0.9fr)
            minmax(0, 1fr);
        padding: 1.25rem;
    }

    .deployment-core::before,
    .deployment-core::after {
        display: block;
    }

    .global-metrics {
        grid-column: 1 / -1;
    }
}

@media (min-width: 1440px) {
    .bg-container {
        max-width: 1440px;
        padding-block-start: calc(var(--spacing, 0.25rem) * 20);
    }
}
</style>
