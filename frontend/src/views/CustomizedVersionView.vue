<template>
    <main id="main-content" class="customized-page">
        <section class="hero-section" aria-labelledby="customized-title">
            <div class="hero-copy">
                <p class="eyebrow">{{ t("customized.eyebrow") }}</p>
                <h1 id="customized-title">{{ t("customized.title") }}</h1>
                <p class="hero-description">
                    {{ t("customized.description") }}
                </p>
                <div class="hero-actions">
                    <a
                        :href="contactHref"
                        class="primary-action"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ t("customized.hero.primaryCta") }}
                    </a>
                    <a href="#customized-plans" class="secondary-action">
                        {{ t("customized.hero.secondaryCta") }}
                    </a>
                </div>
                <dl class="hero-metrics">
                    <div v-for="metric in metrics" :key="metric.label">
                        <dt>{{ metric.label }}</dt>
                        <dd>{{ metric.value }}</dd>
                    </div>
                </dl>
            </div>

            <figure
                class="dashboard-preview"
                :aria-label="t('customized.hero.previewLabel')"
            >
                <div class="preview-window">
                    <img
                        src="/image/clientreview.png"
                        :alt="t('customized.hero.previewAlt')"
                        class="preview-image"
                        loading="eager"
                        decoding="async"
                    />
                </div>
                <figcaption class="preview-caption">
                    <span>{{ t("customized.hero.previewBadge") }}</span>
                    <p>{{ t("customized.hero.previewCaption") }}</p>
                </figcaption>
            </figure>
        </section>

        <section class="content-section" aria-labelledby="capabilities-title">
            <div class="section-heading">
                <p class="eyebrow">{{ t("customized.pointsEyebrow") }}</p>
                <h2 id="capabilities-title">
                    {{ t("customized.pointsTitle") }}
                </h2>
                <p>{{ t("customized.pointsDescription") }}</p>
            </div>

            <div class="capability-grid">
                <article
                    v-for="point in points"
                    :key="point.title"
                    class="capability-card"
                >
                    <component
                        :is="point.icon"
                        class="capability-icon"
                        aria-hidden="true"
                    />
                    <h3>{{ point.title }}</h3>
                    <p>{{ point.text }}</p>
                </article>
            </div>
        </section>

        <section
            id="customized-plans"
            class="plans-section"
            aria-labelledby="plans-title"
        >
            <div class="section-heading centered">
                <p class="eyebrow">{{ t("customized.plans.eyebrow") }}</p>
                <h2 id="plans-title">{{ t("customized.plans.title") }}</h2>
                <p>{{ t("customized.plans.description") }}</p>
            </div>

            <div class="plan-grid">
                <article
                    v-for="plan in plans"
                    :key="plan.id"
                    class="plan-card"
                    :class="{ 'is-featured': plan.featured }"
                >
                    <div class="plan-heading">
                        <span class="plan-badge">{{ plan.badge }}</span>
                        <h3>{{ plan.name }}</h3>
                        <p>{{ plan.description }}</p>
                    </div>

                    <div class="plan-price">
                        <strong>{{ plan.price }}</strong>
                        <span>{{ plan.period }}</span>
                    </div>

                    <a
                        :href="contactHref"
                        class="plan-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ plan.cta }}
                    </a>

                    <ul class="plan-features">
                        <li
                            v-for="feature in plan.features"
                            :key="feature.title"
                            :class="{ 'is-muted': !feature.included }"
                        >
                            <Check
                                v-if="feature.included"
                                class="feature-status is-included"
                                aria-hidden="true"
                            />
                            <X
                                v-else
                                class="feature-status is-excluded"
                                aria-hidden="true"
                            />
                            <span class="sr-only">
                                {{
                                    feature.included
                                        ? t("customized.plans.included")
                                        : t("customized.plans.excluded")
                                }}
                            </span>
                            <span>
                                <strong>{{ feature.title }}</strong>
                                <small>{{ feature.text }}</small>
                            </span>
                        </li>
                    </ul>
                </article>
            </div>
        </section>

        <section class="delivery-section" aria-labelledby="delivery-title">
            <div class="delivery-panel">
                <div class="delivery-copy">
                    <p class="eyebrow">
                        {{ t("customized.delivery.eyebrow") }}
                    </p>
                    <h2 id="delivery-title">
                        {{ t("customized.delivery.title") }}
                    </h2>
                    <p>{{ t("customized.delivery.description") }}</p>
                </div>

                <div class="delivery-list">
                    <article v-for="step in deliverySteps" :key="step.title">
                        <span>{{ step.index }}</span>
                        <div>
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.text }}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed, markRaw } from "vue";
import { useI18n } from "vue-i18n";
import {
    Check,
    CloudCog,
    Gauge,
    LayoutDashboard,
    Palette,
    RadioTower,
    SlidersHorizontal,
    X,
} from "lucide-vue-next";

const { t, te } = useI18n();

const contactHref = "https://t.me/rustkt";

const metrics = computed(() => [
    {
        label: t("customized.hero.metrics.editions.label"),
        value: t("customized.hero.metrics.editions.value"),
    },
    {
        label: t("customized.hero.metrics.fee.label"),
        value: t("customized.hero.metrics.fee.value"),
    },
    {
        label: t("customized.hero.metrics.hosting.label"),
        value: t("customized.hero.metrics.hosting.value"),
    },
]);

const points = computed(() => [
    {
        icon: markRaw(LayoutDashboard),
        title: t("customized.points.dashboard.title"),
        text: t("customized.points.dashboard.text"),
    },
    {
        icon: markRaw(SlidersHorizontal),
        title: t("customized.points.fee.title"),
        text: t("customized.points.fee.text"),
    },
    {
        icon: markRaw(Palette),
        title: t("customized.points.branding.title"),
        text: t("customized.points.branding.text"),
    },
    {
        icon: markRaw(CloudCog),
        title: t("customized.points.hosting.title"),
        text: t("customized.points.hosting.text"),
    },
    {
        icon: markRaw(Gauge),
        title: t("customized.points.client.title"),
        text: t("customized.points.client.text"),
    },
    {
        icon: markRaw(RadioTower),
        title: t("customized.points.rms.title"),
        text: t("customized.points.rms.text"),
    },
]);

const featureKeys = [
    "noMinerLimit",
    "admin",
    "name",
    "footer",
    "logo",
    "officialClientStyle",
    "hosting",
    "client",
    "rms",
];

const tierDefinitions = [
    {
        id: "free",
        featured: false,
        included: ["admin", "name", "footer", "logo"],
    },
    {
        id: "basic",
        featured: true,
        included: [
            "admin",
            "name",
            "footer",
            "logo",
            "noMinerLimit",
            "officialClientStyle",
            "hosting",
        ],
    },
    {
        id: "advanced",
        featured: false,
        included: [
            "admin",
            "name",
            "footer",
            "logo",
            "noMinerLimit",
            "officialClientStyle",
            "hosting",
            "client",
            "rms",
        ],
    },
];

const getFeatureText = (featureKey, tierId) => {
    const tierTextKey = `customized.features.${featureKey}.tiers.${tierId}`;

    return te(tierTextKey)
        ? t(tierTextKey)
        : t(`customized.features.${featureKey}.text`);
};

const plans = computed(() =>
    tierDefinitions.map((tier) => ({
        id: tier.id,
        featured: tier.featured,
        name: t(`customized.plans.tiers.${tier.id}.name`),
        badge: t(`customized.plans.tiers.${tier.id}.badge`),
        description: t(`customized.plans.tiers.${tier.id}.description`),
        price: t(`customized.plans.tiers.${tier.id}.price`),
        period: t(`customized.plans.tiers.${tier.id}.period`),
        cta: t(`customized.plans.tiers.${tier.id}.cta`),
        features: featureKeys.map((key) => ({
            title: t(`customized.features.${key}.title`),
            text: getFeatureText(key, tier.id),
            included: tier.included.includes(key),
        })),
    })),
);

const deliverySteps = computed(() => [
    {
        index: "01",
        title: t("customized.delivery.steps.scope.title"),
        text: t("customized.delivery.steps.scope.text"),
    },
    {
        index: "02",
        title: t("customized.delivery.steps.package.title"),
        text: t("customized.delivery.steps.package.text"),
    },
    {
        index: "03",
        title: t("customized.delivery.steps.operate.title"),
        text: t("customized.delivery.steps.operate.text"),
    },
]);
</script>

<style scoped>
.customized-page {
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
.content-section,
.plans-section,
.delivery-section {
    margin: 0 auto;
    max-width: 1280px;
    position: relative;
}

.hero-section {
    align-items: center;
    display: grid;
    gap: 2rem;
}

.hero-copy {
    min-width: 0;
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

h3 {
    color: var(--color-white);
    font-size: var(--text-xl);
    font-weight: var(--font-weight-semibold);
    line-height: 1.25;
    margin-bottom: 0.5rem;
    overflow-wrap: anywhere;
}

.hero-description,
.section-heading p:not(.eyebrow),
.delivery-copy p:not(.eyebrow) {
    color: var(--color-neutral-300);
    font-size: var(--text-lg);
    line-height: 1.7;
    margin-bottom: 0;
}

.hero-description {
    max-width: 48rem;
}

.hero-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
    max-width: 27rem;
}

.primary-action,
.secondary-action,
.plan-cta {
    align-items: center;
    border-radius: 8px;
    display: inline-flex;
    font-weight: var(--font-weight-semibold);
    justify-content: center;
    min-height: 2.75rem;
    padding: 0.625rem 1rem;
    text-align: center;
    text-decoration: none;
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        color 150ms ease,
        transform 150ms ease;
}

.primary-action,
.plan-card.is-featured .plan-cta {
    background: rgb(65 126 56 / 18%);
    border: 1px solid rgb(132 186 100 / 46%);
    color: var(--color-white);
}

.secondary-action,
.plan-cta {
    background: rgb(13 18 28 / 72%);
    border: 1px solid rgb(255 255 255 / 13%);
    color: var(--color-neutral-200);
}

.primary-action:hover,
.primary-action:focus-visible,
.secondary-action:hover,
.secondary-action:focus-visible,
.plan-cta:hover,
.plan-cta:focus-visible {
    border-color: rgb(132 186 100 / 62%);
    color: var(--color-white);
    outline: none;
    transform: translateY(-1px);
}

.primary-action:hover,
.primary-action:focus-visible,
.plan-card.is-featured .plan-cta:hover,
.plan-card.is-featured .plan-cta:focus-visible {
    background: rgb(65 126 56 / 26%);
}

.hero-metrics {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr;
    margin: 1.5rem 0 0;
}

.hero-metrics div {
    background: rgb(13 18 28 / 70%);
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
    padding: 1rem;
}

.hero-metrics dt {
    color: var(--color-neutral-500);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.375rem;
}

.hero-metrics dd {
    color: var(--color-white);
    font-size: var(--text-xl);
    font-weight: 700;
    line-height: 1.15;
    margin: 0;
}

.dashboard-preview {
    margin: 0;
    min-width: 0;
}

.preview-window {
    background: rgb(9 14 22 / 78%);
    border: 1px solid rgb(148 163 184 / 18%);
    border-radius: 8px;
    box-shadow:
        0 2rem 4.5rem rgb(0 0 0 / 38%),
        0 0 0 1px rgb(255 255 255 / 4%) inset;
    overflow: hidden;
}

.preview-image {
    aspect-ratio: 4102 / 2194;
    display: block;
    object-fit: contain;
    width: 100%;
}

.preview-caption {
    align-items: flex-start;
    background: rgb(13 18 28 / 86%);
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
    display: flex;
    gap: 0.875rem;
    margin-top: 0.75rem;
    padding: 0.875rem;
}

.preview-caption span {
    background: rgb(14 165 233 / 14%);
    border: 1px solid rgb(14 165 233 / 32%);
    border-radius: 8px;
    color: #7dd3fc;
    flex: 0 0 auto;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    padding: 0.25rem 0.5rem;
}

.preview-caption p {
    color: var(--color-neutral-300);
    font-size: var(--text-sm);
    line-height: 1.6;
    margin-bottom: 0;
}

.content-section,
.plans-section,
.delivery-section {
    padding-top: 5rem;
}

.section-heading {
    max-width: 46rem;
}

.section-heading.centered {
    margin-inline: auto;
    text-align: center;
}

.capability-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    margin-top: 1.5rem;
}

.capability-card,
.plan-card,
.delivery-panel {
    background: rgb(13 18 28 / 78%);
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
}

.capability-card {
    padding: 1.25rem;
}

.capability-icon {
    background: rgb(65 126 56 / 16%);
    border: 1px solid rgb(132 186 100 / 26%);
    border-radius: 8px;
    color: var(--color-green-400);
    height: 2.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 2.5rem;
}

.capability-card p,
.plan-heading p,
.plan-features small,
.delivery-list p {
    color: var(--color-neutral-400);
    line-height: 1.65;
    margin-bottom: 0;
}

.plan-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    margin-top: 1.5rem;
}

.plan-card {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
}

.plan-card.is-featured {
    border-color: rgb(132 186 100 / 54%);
    box-shadow: 0 1.25rem 3.5rem rgb(0 0 0 / 22%);
}

.plan-heading {
    display: grid;
    gap: 0.75rem;
}

.plan-badge {
    align-self: start;
    background: rgb(245 158 11 / 12%);
    border: 1px solid rgb(245 158 11 / 30%);
    border-radius: 8px;
    color: #fbbf24;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    line-height: 1.3;
    padding: 0.25rem 0.5rem;
    width: fit-content;
}

.plan-price {
    align-items: baseline;
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1.25rem 0 1rem;
    padding-bottom: 1rem;
}

.plan-price strong {
    color: var(--color-white);
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: 1;
}

.plan-price span {
    color: var(--color-neutral-500);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
}

.plan-features {
    display: grid;
    gap: 0.875rem;
    list-style: none;
    margin: 1.25rem 0 0;
    padding: 0;
}

.plan-features li {
    align-items: flex-start;
    display: grid;
    gap: 0.625rem;
    grid-template-columns: auto 1fr;
}

.plan-features li.is-muted {
    opacity: 0.58;
}

.feature-status {
    border-radius: 8px;
    flex: 0 0 auto;
    height: 1.375rem;
    margin-top: 0.125rem;
    padding: 0.25rem;
    width: 1.375rem;
}

.feature-status.is-included {
    background: rgb(34 197 94 / 15%);
    color: #4ade80;
}

.feature-status.is-excluded {
    background: rgb(148 163 184 / 13%);
    color: var(--color-neutral-500);
}

.plan-features strong {
    color: var(--color-neutral-100);
    display: block;
    font-size: var(--text-sm);
    line-height: 1.45;
    margin-bottom: 0.125rem;
}

.plan-features small {
    display: block;
    font-size: var(--text-xs);
}

.delivery-panel {
    display: grid;
    gap: 1.5rem;
    padding: 1.25rem;
}

.delivery-list {
    display: grid;
    gap: 0.875rem;
}

.delivery-list article {
    align-items: flex-start;
    background: rgb(255 255 255 / 4%);
    border: 1px solid rgb(255 255 255 / 9%);
    border-radius: 8px;
    display: grid;
    gap: 0.875rem;
    grid-template-columns: auto 1fr;
    padding: 1rem;
}

.delivery-list span {
    color: var(--color-green-400);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    line-height: 1.4;
}

.delivery-list h3 {
    font-size: var(--text-base);
    margin-bottom: 0.25rem;
}

.sr-only {
    clip: rect(0, 0, 0, 0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

@media (min-width: 640px) {
    .hero-actions {
        flex-direction: row;
    }

    .primary-action,
    .secondary-action {
        min-width: 11rem;
    }

    .hero-metrics {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 860px) {
    .customized-page {
        padding-inline: 1.5rem;
    }

    .hero-section {
        grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    }

    .capability-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .plan-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .delivery-panel {
        grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
        padding: 1.5rem;
    }
}

@media (min-width: 1120px) {
    h1 {
        font-size: var(--text-5xl);
    }
}
</style>
