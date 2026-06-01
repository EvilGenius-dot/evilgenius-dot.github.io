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
                            :to="primaryDownloadPath"
                            class="primary-action"
                        >
                            {{ t("home.primaryCta") }}
                        </RouterLink>
                        <RouterLink
                            :to="primaryDocumentPath"
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
                    <div class="partner-note">
                        <span>{{ t("home.partnerNote") }}</span>
                    </div>
                </div>

                <section
                    class="product-preview"
                    :aria-label="t('home.preview.label')"
                >
                    <div class="preview-frame">
                        <div class="preview-shell">
                            <div class="preview-toolbar" aria-hidden="true">
                                <span></span>
                                <span></span>
                                <span></span>
                                <strong>RustMinerSystem</strong>
                            </div>
                            <video
                                ref="previewVideo"
                                src="/image/rust.mp4"
                                :aria-label="t('home.preview.imageAlt')"
                                class="preview-video"
                                autoplay
                                muted
                                loop
                                playsinline
                                preload="auto"
                                @playing="handlePreviewVideoPlaying"
                                @pause="handlePreviewVideoPause"
                            ></video>
                            <div class="preview-shade" aria-hidden="true"></div>
                            <button
                                v-if="showPreviewPlayButton"
                                type="button"
                                class="preview-play-button"
                                :aria-label="t('home.preview.playLabel')"
                                :title="t('home.preview.playLabel')"
                                @click="playPreviewVideo"
                            >
                                <Play aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <div class="preview-meta-pills">
                        <a
                            :href="releaseHref"
                            class="meta-pill release-pill"
                            :data-state="releaseStatus"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="releaseAriaLabel"
                        >
                            <span class="meta-badge release-badge">{{
                                releaseBadgeText
                            }}</span>
                            <span class="meta-message">{{
                                releaseMessage
                            }}</span>
                        </a>

                        <a
                            :href="repositoryHref"
                            class="meta-pill github-stars-pill"
                            :data-state="githubStarsStatus"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="githubStarsAriaLabel"
                            :title="githubStarsMessage"
                        >
                            <IconGithub
                                class="github-stars-mark"
                                aria-hidden="true"
                            />
                            <span class="github-stars-name">GitHub</span>
                            <span class="github-stars-count">
                                <Star
                                    class="github-stars-star"
                                    aria-hidden="true"
                                />
                                <span>{{ githubStarsBadgeText }}</span>
                            </span>
                        </a>
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
        </div>
    </main>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { Play, Star } from "lucide-vue-next";
import { docPath, downloadPath, getRouteLocale } from "@/i18n";
import IconGithub from "@/components/icons/IconGithub.vue";

const route = useRoute();
const { t } = useI18n();

const currentLocale = computed(() => getRouteLocale(route));
const primaryDownloadPath = computed(() =>
    downloadPath("server", currentLocale.value),
);
const primaryDocumentPath = computed(() =>
    docPath(undefined, currentLocale.value),
);
const releaseInfoUrl =
    "https://raw.githubusercontent.com/EvilGenius-dot/RustMinerSystem/refs/heads/main/origin.json";
const repositoryApiUrl =
    "https://api.github.com/repos/EvilGenius-dot/RustMinerSystem";
const repositoryHref = "https://github.com/EvilGenius-dot/RustMinerSystem";
const releaseHref =
    "https://github.com/EvilGenius-dot/RustMinerSystem/releases/latest";
const releaseVersion = ref("");
const releaseStatus = ref("loading");
const githubStars = ref(null);
const githubStarsStatus = ref("loading");
const previewVideo = ref(null);
const showPreviewPlayButton = ref(false);
const formattedReleaseVersion = computed(() => {
    const version = releaseVersion.value.trim();

    return version.startsWith("v") ? version : `v${version}`;
});
const releaseBadgeText = computed(() => {
    if (releaseStatus.value === "loading") return t("home.loadingBadge");
    if (releaseStatus.value === "error") return t("home.unavailableBadge");

    return formattedReleaseVersion.value;
});
const releaseMessage = computed(() => {
    if (releaseStatus.value === "loading") {
        return t("home.latestReleaseLoading");
    }

    if (releaseStatus.value === "error") {
        return t("home.latestReleaseError");
    }

    return t("home.latestRelease");
});
const releaseAriaLabel = computed(() => {
    if (releaseStatus.value === "loading") {
        return t("home.latestReleaseLoadingAria");
    }

    if (releaseStatus.value === "error") {
        return t("home.latestReleaseErrorAria");
    }

    return t("home.latestReleaseAria", {
        version: formattedReleaseVersion.value,
    });
});
const formattedGithubStars = computed(() => {
    if (!Number.isFinite(githubStars.value)) return "";

    return new Intl.NumberFormat(localeToIntlLocale(currentLocale.value), {
        maximumFractionDigits: 1,
        notation: githubStars.value >= 10000 ? "compact" : "standard",
    }).format(githubStars.value);
});
const githubStarsBadgeText = computed(() => {
    if (githubStarsStatus.value === "loading") return t("home.loadingBadge");
    if (githubStarsStatus.value === "error") return t("home.unavailableBadge");

    return formattedGithubStars.value;
});
const githubStarsMessage = computed(() => {
    if (githubStarsStatus.value === "loading") {
        return t("home.githubStarsLoading");
    }

    if (githubStarsStatus.value === "error") {
        return t("home.githubStarsError");
    }

    return t("home.githubStars");
});
const githubStarsAriaLabel = computed(() => {
    if (githubStarsStatus.value === "loading") {
        return t("home.githubStarsLoadingAria");
    }

    if (githubStarsStatus.value === "error") {
        return t("home.githubStarsErrorAria");
    }

    return t("home.githubStarsAria", {
        count: formattedGithubStars.value,
    });
});

const localeToIntlLocale = (locale) =>
    ({
        en: "en-US",
        zh: "zh-CN",
        ru: "ru-RU",
    })[locale] ?? "en-US";

const fetchJson = async (url) => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 6000);

    try {
        const response = await fetch(url, {
            cache: "no-store",
            signal: controller.signal,
        });

        if (!response.ok) {
            throw new Error(`Request failed with ${response.status}`);
        }

        return await response.json();
    } finally {
        window.clearTimeout(timeoutId);
    }
};

const loadReleaseVersion = async () => {
    releaseStatus.value = "loading";

    try {
        const data = await fetchJson(releaseInfoUrl);
        const version = data?.version;

        if (typeof version !== "string" || !version.trim()) {
            throw new Error("Missing version field");
        }

        releaseVersion.value = version;
        releaseStatus.value = "ready";
    } catch {
        releaseStatus.value = "error";
    }
};

const loadGithubStars = async () => {
    githubStarsStatus.value = "loading";

    try {
        const data = await fetchJson(repositoryApiUrl);
        const stars = data?.stargazers_count;

        if (!Number.isFinite(stars)) {
            throw new Error("Missing stargazers_count field");
        }

        githubStars.value = stars;
        githubStarsStatus.value = "ready";
    } catch {
        githubStarsStatus.value = "error";
    }
};

const playPreviewVideo = async () => {
    const video = previewVideo.value;

    if (!video) return;

    try {
        video.muted = true;
        await video.play();
        showPreviewPlayButton.value = false;
    } catch {
        showPreviewPlayButton.value = true;
    }
};

const handlePreviewVideoPlaying = () => {
    showPreviewPlayButton.value = false;
};

const handlePreviewVideoPause = () => {
    showPreviewPlayButton.value = true;
};

onMounted(async () => {
    await nextTick();
    playPreviewVideo();
    await Promise.all([loadReleaseVersion(), loadGithubStars()]);
});

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
    },
];
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
    --hero-cta-width: min(100%, 29rem);
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
    width: var(--hero-cta-width);
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
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 0.875rem;
    width: var(--hero-cta-width);
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
    width: 100%;
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
    max-width: 100%;
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

.partner-note {
    color: var(--color-neutral-600);
    font-size: var(--text-sm);
    line-height: 1.5;
    margin-top: 0.875rem;
    text-align: center;
    width: var(--hero-cta-width);
}

.product-preview {
    margin: 0 auto;
    max-width: 56rem;
    text-align: left;
    width: 100%;
}

.preview-frame {
    position: relative;
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

.preview-video {
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

.preview-play-button {
    align-items: center;
    background: rgb(12 18 28 / 72%);
    border: 1px solid rgb(255 255 255 / 20%);
    border-radius: 9999px;
    box-shadow: 0 1rem 2.5rem rgb(0 0 0 / 32%);
    color: var(--color-white);
    cursor: pointer;
    display: inline-flex;
    height: 4rem;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: calc(50% + 1.125rem);
    transform: translate(-50%, -50%);
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        transform 150ms ease;
    width: 4rem;
}

.preview-play-button:hover,
.preview-play-button:focus-visible {
    background: rgb(44 104 44 / 86%);
    border-color: rgb(255 255 255 / 34%);
    outline: none;
    transform: translate(-50%, -50%) scale(1.04);
}

.preview-play-button svg {
    height: 1.75rem;
    margin-left: 0.175rem;
    stroke-width: 2.25;
    width: 1.75rem;
}

.preview-meta-pills {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    justify-content: center;
    margin: 0.875rem auto 0;
    width: 100%;
}

.meta-pill {
    align-items: center;
    background: rgb(44 52 55 / 92%);
    border: 1px solid rgb(44 104 44 / 100%);
    border-radius: 9999px;
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
    line-height: 1.42857;
    padding: 0.25rem 0.625rem 0.25rem 0.25rem;
    text-decoration: none;
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        transform 150ms ease;
    width: fit-content;
}

.meta-pill:hover,
.meta-pill:focus-visible {
    background: rgb(44 52 55 / 100%);
    border-color: rgb(65 126 56 / 100%);
    outline: none;
    transform: translateY(-1px);
}

.meta-pill[data-state="error"] {
    border-color: rgb(110 123 131 / 70%);
}

.meta-pill[data-state="error"]:hover,
.meta-pill[data-state="error"]:focus-visible {
    border-color: rgb(146 159 165 / 90%);
}

.meta-badge {
    background: var(--color-green-600);
    border-radius: 9999px;
    color: var(--color-white);
    font-size: var(--text-xs);
    line-height: 1.33333;
    margin-right: 0.5rem;
    padding: 0.125rem 0.375rem;
    text-align: center;
    white-space: nowrap;
}

.meta-pill[data-state="loading"] .meta-badge {
    background: var(--color-neutral-800);
    min-width: 2rem;
}

.meta-pill[data-state="error"] .meta-badge {
    background: var(--color-neutral-700);
}

.meta-message {
    color: var(--color-green-300);
    margin-right: 0.25rem;
    white-space: nowrap;
}

.meta-pill[data-state="loading"] .meta-message,
.meta-pill[data-state="error"] .meta-message {
    color: var(--color-neutral-300);
}

.github-stars-pill {
    background:
        linear-gradient(180deg, rgb(255 255 255 / 8%), transparent),
        rgb(13 18 28 / 88%);
    border-color: rgb(255 255 255 / 14%);
    box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 10%),
        0 0.75rem 1.75rem rgb(0 0 0 / 18%);
    gap: 0.5rem;
    padding: 0.25rem 0.375rem 0.25rem 0.625rem;
}

.github-stars-pill:hover,
.github-stars-pill:focus-visible {
    background:
        linear-gradient(180deg, rgb(255 255 255 / 11%), transparent),
        rgb(17 22 34 / 94%);
    border-color: rgb(255 255 255 / 24%);
}

.github-stars-mark {
    color: var(--color-white);
    flex: 0 0 auto;
    height: 1rem;
    opacity: 0.9;
    width: 1rem;
}

.github-stars-name {
    color: var(--color-neutral-200);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
}

.github-stars-count {
    align-items: center;
    background: rgb(250 204 21 / 13%);
    border: 1px solid rgb(250 204 21 / 22%);
    border-radius: 9999px;
    color: #facc15;
    display: inline-flex;
    font-size: var(--text-xs);
    font-weight: 700;
    gap: 0.25rem;
    justify-content: center;
    line-height: 1.33333;
    min-height: 1.375rem;
    min-width: 2.25rem;
    padding: 0.125rem 0.5rem;
    white-space: nowrap;
}

.github-stars-star {
    fill: currentColor;
    height: 0.875rem;
    stroke-width: 2.25;
    width: 0.875rem;
}

.github-stars-pill[data-state="loading"],
.github-stars-pill[data-state="error"] {
    border-color: rgb(255 255 255 / 12%);
}

.github-stars-pill[data-state="loading"] .github-stars-count,
.github-stars-pill[data-state="error"] .github-stars-count {
    background: rgb(85 96 102 / 18%);
    border-color: rgb(146 159 165 / 22%);
    color: var(--color-neutral-300);
}

@media (max-width: 640px) {
    .product-preview {
        display: grid;
        gap: 0.75rem;
    }

    .preview-play-button {
        height: 3.25rem;
        width: 3.25rem;
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

.feature-grid {
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

.info-card h3 {
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

    .feature-grid {
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
        grid-template-columns: repeat(4, minmax(0, 1fr));
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
