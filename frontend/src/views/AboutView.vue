<template>
    <main id="main-content" class="about-page">
        <section class="hero-section" aria-labelledby="about-title">
            <div class="hero-copy">
                <p class="eyebrow">{{ t("about.eyebrow") }}</p>
                <h1 id="about-title">{{ t("about.title") }}</h1>
                <p class="hero-description">{{ t("about.description") }}</p>
            </div>

            <div class="rate-panel" aria-labelledby="rates-title">
                <p class="eyebrow">{{ t("about.rates.eyebrow") }}</p>
                <h2 id="rates-title">{{ t("about.rates.title") }}</h2>
                <div class="rate-grid">
                    <article
                        v-for="rate in rateCards"
                        :key="rate.title"
                        :class="{ 'highlighted-rate': rate.highlight }"
                    >
                        <span class="rate-label">{{ rate.label }}</span>
                        <strong>{{ rate.value }}</strong>
                        <p>
                            <span
                                v-for="part in rate.textParts"
                                :key="part.key"
                                :class="{
                                    'rate-text-highlight': part.highlighted,
                                }"
                            >
                                {{ part.text }}
                            </span>
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="content-section" aria-labelledby="legal-title">
            <div class="section-heading">
                <p class="eyebrow">{{ t("about.legal.eyebrow") }}</p>
                <h2 id="legal-title">{{ t("about.legal.title") }}</h2>
                <p>{{ t("about.legal.description") }}</p>
            </div>

            <div class="legal-list">
                <article v-for="item in legalItems" :key="item.index">
                    <span>{{ item.index }}</span>
                    <p>{{ item.text }}</p>
                </article>
            </div>
        </section>

        <section class="content-section split-section">
            <div class="community-panel" aria-labelledby="community-title">
                <div class="section-heading">
                    <p class="eyebrow">{{ t("about.community.eyebrow") }}</p>
                    <h2 id="community-title">
                        {{ t("about.community.title") }}
                    </h2>
                    <p>{{ t("about.community.description") }}</p>
                </div>

                <div class="community-grid">
                    <a
                        v-for="item in communityLinks"
                        :key="item.label"
                        :href="item.href"
                        class="link-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <component
                            :is="item.icon"
                            class="link-icon"
                            aria-hidden="true"
                        />
                        <span>{{ item.label }}</span>
                        <ArrowUpRight class="arrow-icon" aria-hidden="true" />
                    </a>
                </div>
            </div>

            <div class="providers-panel" aria-labelledby="providers-title">
                <div class="section-heading">
                    <p class="eyebrow">{{ t("about.providers.eyebrow") }}</p>
                    <h2 id="providers-title">
                        {{ t("about.providers.title") }}
                    </h2>
                    <p>{{ t("about.providers.description") }}</p>
                </div>

                <div
                    class="provider-grid"
                    :aria-label="t('about.providers.ariaLabel')"
                >
                    <a
                        v-for="provider in providers"
                        :key="provider.key"
                        :href="provider.href"
                        class="provider-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            :src="provider.logo"
                            :alt="provider.label"
                            loading="lazy"
                            decoding="async"
                        />
                        <span>{{ provider.label }}</span>
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowUpRight, Github, MessageCircle, Send } from "lucide-vue-next";

const { t } = useI18n();

const splitHighlightedText = (text, highlightText) => {
    const startIndex = highlightText ? text.indexOf(highlightText) : -1;

    if (startIndex === -1) {
        return [{ key: "text", text, highlighted: false }];
    }

    return [
        {
            key: "before",
            text: text.slice(0, startIndex),
            highlighted: false,
        },
        {
            key: "highlight",
            text: text.slice(startIndex, startIndex + highlightText.length),
            highlighted: true,
        },
        {
            key: "after",
            text: text.slice(startIndex + highlightText.length),
            highlighted: false,
        },
    ].filter((part) => part.text.length > 0);
};

const rateCards = computed(() => [
    {
        label: t("about.rates.proxy.label"),
        title: t("about.rates.proxy.title"),
        value: t("about.rates.proxy.value"),
        textParts: splitHighlightedText(
            t("about.rates.proxy.text"),
            t("about.rates.proxy.textHighlight"),
        ),
        highlight: true,
    },
    {
        label: t("about.rates.poolNode.label"),
        title: t("about.rates.poolNode.title"),
        value: t("about.rates.poolNode.value"),
        textParts: splitHighlightedText(t("about.rates.poolNode.text")),
        highlight: false,
    },
]);

const legalItems = computed(() =>
    Array.from({ length: 11 }, (_, index) => {
        const itemIndex = index + 1;

        return {
            index: String(itemIndex).padStart(2, "0"),
            text: t(`about.legal.items.${itemIndex}`),
        };
    }),
);

const communityLinks = computed(() => [
    {
        label: t("footer.github"),
        href: "https://github.com/evilgenius-dot",
        icon: Github,
    },
    {
        label: t("footer.telegram"),
        href: "https://t.me/rustkt",
        icon: Send,
    },
    {
        label: t("footer.telegramEnglish"),
        href: "https://t.me/rustkt/55515",
        icon: Send,
    },
    {
        label: t("footer.telegramRussian"),
        href: "https://t.me/rustkt/55517",
        icon: Send,
    },
    {
        label: t("footer.discord"),
        href: "https://discord.com/invite/xpjRnv8wpX",
        icon: MessageCircle,
    },
]);

const providerDefinitions = [
    {
        key: "vultr",
        logo: "/image/partners/vultr.svg",
        href: "https://www.vultr.com/",
    },
    {
        key: "aws",
        logo: "/image/partners/aws.svg",
        href: "https://aws.amazon.com/",
    },
    {
        key: "azure",
        logo: "/image/partners/azure.svg",
        href: "https://azure.microsoft.com/",
    },
    {
        key: "aliyun",
        logo: "/image/partners/aliyun.svg",
        href: "https://www.alibabacloud.com/",
    },
    {
        key: "cloudflare",
        logo: "/image/partners/cloudflare.svg",
        href: "https://www.cloudflare.com/",
    },
    {
        key: "github",
        logo: "/image/partners/github.svg",
        href: "https://github.com/EvilGenius-dot",
    },
];

const providers = computed(() =>
    providerDefinitions.map((provider) => ({
        ...provider,
        label: t(`download.partners.items.${provider.key}`),
    })),
);
</script>

<style scoped>
.about-page {
    background:
        linear-gradient(rgb(255 255 255 / 3%) 1px, transparent 1px),
        linear-gradient(90deg, rgb(255 255 255 / 3%) 1px, transparent 1px),
        linear-gradient(180deg, rgb(13 18 28), rgb(8 12 18) 58%, #0d121c);
    background-size:
        3rem 3rem,
        3rem 3rem,
        auto;
    overflow: hidden;
    padding: 4.5rem 1rem 5rem;
}

.hero-section,
.content-section {
    margin: 0 auto;
    max-width: 1280px;
    position: relative;
}

.hero-section {
    align-items: stretch;
    display: grid;
    gap: 1.25rem;
}

.hero-copy,
.rate-panel,
.community-panel,
.providers-panel {
    background: rgb(13 18 28 / 78%);
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
    min-width: 0;
    padding: 1.25rem;
}

.eyebrow {
    color: var(--color-green-400);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0;
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
    margin-bottom: 1rem;
    overflow-wrap: anywhere;
}

h2 {
    color: var(--color-white);
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: 1.12;
    margin-bottom: 0.875rem;
    overflow-wrap: anywhere;
}

.hero-description,
.section-heading p:not(.eyebrow),
.rate-grid p,
.legal-list p {
    color: var(--color-neutral-300);
    line-height: 1.7;
    margin-bottom: 0;
}

.hero-description,
.section-heading p:not(.eyebrow) {
    font-size: var(--text-lg);
}

.rate-grid {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr;
    margin-top: 1rem;
}

.rate-grid article {
    background: rgb(255 255 255 / 4%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    padding: 1rem;
}

.rate-label {
    color: var(--color-neutral-500);
    display: block;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    line-height: 1.35;
    margin-bottom: 0.5rem;
}

.rate-grid strong {
    color: var(--color-white);
    display: block;
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.75rem;
}

.rate-grid article.highlighted-rate {
    background:
        linear-gradient(135deg, rgb(250 204 21 / 12%), transparent 54%),
        rgb(255 255 255 / 4%);
    border-color: rgb(250 204 21 / 36%);
}

.rate-grid article.highlighted-rate strong {
    color: #facc15;
    text-shadow: 0 0 18px rgb(250 204 21 / 24%);
}

.rate-grid p .rate-text-highlight {
    color: #facc15;
    display: inline;
    font-weight: 700;
}

.content-section {
    padding-top: 5rem;
}

.section-heading {
    max-width: 48rem;
}

.legal-list {
    display: grid;
    gap: 0.75rem;
    margin-top: 1.5rem;
}

.legal-list article {
    align-items: flex-start;
    background: rgb(13 18 28 / 78%);
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
    display: grid;
    gap: 0.875rem;
    grid-template-columns: auto 1fr;
    padding: 1rem;
}

.legal-list span {
    color: var(--color-green-400);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    line-height: 1.6;
}

.split-section {
    display: grid;
    gap: 1rem;
}

.community-grid,
.provider-grid {
    display: grid;
    gap: 0.75rem;
    margin-top: 1.25rem;
}

.link-card,
.provider-card {
    align-items: center;
    background: rgb(255 255 255 / 4%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    color: var(--color-neutral-200);
    display: grid;
    gap: 0.75rem;
    text-decoration: none;
    transition:
        border-color 150ms ease,
        color 150ms ease,
        transform 150ms ease;
}

.link-card {
    grid-template-columns: auto 1fr auto;
    min-height: 3.5rem;
    padding: 0.75rem;
}

.provider-card {
    justify-items: center;
    min-height: 6.75rem;
    padding: 0.875rem;
    text-align: center;
}

.link-card:hover,
.link-card:focus-visible,
.provider-card:hover,
.provider-card:focus-visible {
    border-color: rgb(74 222 128 / 42%);
    color: var(--color-white);
    outline: none;
    transform: translateY(-1px);
}

.link-icon {
    color: var(--color-green-400);
    height: 1.25rem;
    width: 1.25rem;
}

.arrow-icon {
    color: var(--color-neutral-500);
    height: 1rem;
    width: 1rem;
}

.link-card span,
.provider-card span {
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    line-height: 1.35;
}

.provider-card img {
    display: block;
    height: 2.25rem;
    max-width: 9rem;
    object-fit: contain;
    width: 100%;
}

@media (min-width: 640px) {
    .rate-grid,
    .provider-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 860px) {
    .about-page {
        padding-inline: 1.5rem;
    }

    .hero-section {
        grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.92fr);
    }

    .split-section {
        grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    }

    .provider-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 1120px) {
    h1 {
        font-size: var(--text-5xl);
    }
}
</style>
