<template>
    <footer class="footer-bar">
        <div class="footer-shell">
            <section class="footer-brand" :aria-label="t('footer.brandLabel')">
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
                <p class="footer-description">{{ t("footer.description") }}</p>
            </section>

            <nav class="footer-nav" :aria-label="t('footer.navigation')">
                <section class="footer-group">
                    <h2>{{ t("footer.product") }}</h2>
                    <RouterLink
                        v-for="item in primaryLinks"
                        :key="item.page"
                        :to="item.to"
                        class="footer-link"
                    >
                        {{ item.label }}
                    </RouterLink>
                </section>

                <section class="footer-group">
                    <h2>{{ t("nav.download") }}</h2>
                    <RouterLink
                        v-for="item in flatDownloadLinks"
                        :key="item.label"
                        :to="item.to"
                        class="footer-link"
                    >
                        {{ item.label }}
                    </RouterLink>
                </section>

                <section class="footer-group">
                    <h2>{{ t("footer.community") }}</h2>
                    <a
                        href="https://github.com/evilgenius-dot"
                        class="footer-link external-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconGithub class="icon-sm" aria-hidden="true" />
                        <span>{{ t("footer.github") }}</span>
                        <ArrowTopRightOnSquareIcon
                            class="icon-xs"
                            aria-hidden="true"
                        />
                    </a>
                </section>
            </nav>
        </div>

        <div class="footer-bottom">
            <p>{{ t("footer.copyright", { year: currentYear }) }}</p>
        </div>
    </footer>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";
import { getRouteLocale, pagePath } from "@/i18n";
import IconGithub from "@/components/icons/IconGithub.vue";

const route = useRoute();
const { t } = useI18n();
const currentYear = new Date().getFullYear();

const currentLocale = computed(() => getRouteLocale(route));
const localizedPath = (page) => pagePath(page, currentLocale.value);

const primaryLinks = computed(() => [
    {
        page: "document",
        label: t("nav.document"),
        to: localizedPath("document"),
    },
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

const downloadGroups = computed(() => [
    {
        label: t("nav.server"),
        items: [
            {
                label: t("nav.downloads.server"),
                to: { path: localizedPath("home"), hash: "#download-server" },
            },
            {
                label: t("nav.downloads.rms"),
                to: { path: localizedPath("home"), hash: "#download-rms" },
            },
        ],
    },
    {
        label: t("nav.app"),
        items: [
            {
                label: t("nav.downloads.desktop"),
                to: { path: localizedPath("home"), hash: "#download-app" },
            },
            {
                label: t("nav.downloads.poolNode"),
                to: {
                    path: localizedPath("home"),
                    hash: "#download-pool-node",
                },
            },
        ],
    },
]);

const flatDownloadLinks = computed(() =>
    downloadGroups.value.flatMap((group) => group.items),
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

.footer-bar {
    background-color: rgb(13 18 28 / 96%);
    border-top: 1px solid var(--color-neutral-900, #2c3437);
}

.footer-shell {
    box-sizing: border-box;
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    max-width: 1800px;
    padding: 2rem 1rem;
    width: 100%;
}

.footer-brand {
    display: grid;
    gap: 0.875rem;
    max-width: 32rem;
}

.brand-link {
    align-items: center;
    color: var(--color-white);
    display: inline-flex;
    gap: 0.5rem;
    min-width: 0;
    text-decoration: none;
    width: fit-content;
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

.footer-description,
.footer-bottom p {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.7;
    margin: 0;
}

.footer-nav {
    display: grid;
    gap: 1.5rem;
}

.footer-group {
    align-content: start;
    display: grid;
    gap: 0.5rem;
}

.footer-group h2 {
    color: var(--color-neutral-500);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 0.25rem;
    text-transform: uppercase;
}

.footer-link {
    align-items: center;
    border-radius: 8px;
    color: var(--color-neutral-300);
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
    gap: 0.375rem;
    min-height: 2.25rem;
    padding: 0 0.625rem;
    text-decoration: none;
    transition:
        background-color 150ms ease,
        color 150ms ease;
    width: fit-content;
}

.footer-link:hover,
.footer-link:focus-visible,
.brand-link:hover,
.brand-link:focus-visible {
    background-color: var(--color-neutral-900, #2c3437);
    color: var(--color-white);
    outline: none;
}

.external-link {
    padding-right: 0.5rem;
}

.icon-xs {
    height: 0.875rem;
    width: 0.875rem;
}

.icon-sm {
    height: 1rem;
    width: 1rem;
}

.footer-bottom {
    border-top: 1px solid var(--color-neutral-900, #2c3437);
}

.footer-bottom p {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1800px;
    padding: 1rem;
    width: 100%;
}

@media (min-width: 640px) {
    .footer-shell {
        padding: 2.5rem 1.5rem;
    }

    .footer-nav {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }

    .footer-bottom p {
        padding-inline: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .footer-shell {
        align-items: start;
        grid-template-columns: minmax(18rem, 1fr) minmax(28rem, 1.35fr);
    }

    .footer-nav {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>
