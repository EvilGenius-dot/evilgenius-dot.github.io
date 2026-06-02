<template>
    <div id="docsearch" ref="container" class="docsearch-mount" />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import "@docsearch/css";

const container = ref(null);

const docsearchConfig = {
    appId: "MFAGEF2P8F",
    indexName: import.meta.env.VITE_DOCSEARCH_INDEX_NAME || "RustMinerSystem Documents",
    apiKey: "0ecc1b54035668f7eee14915d2359aaf",
    placeholder: "Search RustMinerSystem docs",
    translations: {
        button: {
            buttonText: "Start typing...",
            buttonAriaLabel: "Search documentation",
        },
        modal: {
            searchBox: {
                placeholderText: "Search RustMinerSystem docs",
                searchInputLabel: "Search documentation",
            },
            startScreen: {
                recentSearchesTitle: "Recent searches",
                noRecentSearchesText: "No recent searches",
            },
            noResultsScreen: {
                noResultsText: "No results for",
                suggestedQueryText: "Try searching for",
                reportMissingResultsText: "No match in the current index.",
                reportMissingResultsLinkText: "Report missing results",
            },
        },
    },
};

const askAi = import.meta.env.VITE_DOCSEARCH_ASK_AI_ID;

onMounted(async () => {
    if (!container.value) return;

    const { default: docsearch } = await import("@docsearch/js");
    const options = {
        container: container.value,
        ...docsearchConfig,
    };

    if (askAi) {
        options.askAi = askAi;
    }

    docsearch(options);
});

onBeforeUnmount(() => {
    if (container.value) {
        container.value.innerHTML = "";
    }
});
</script>

<style scoped>
.docsearch-mount {
    --docsearch-primary-color: #417e38;
    --docsearch-highlight-color: #7fc875;
    --docsearch-focus-color: #91d287;
    --docsearch-muted-color: #8d979d;
    --docsearch-search-button-background: #0d121c;
    --docsearch-search-button-text-color: #dce4e8;
    --docsearch-subtle-color: #2c3437;

    flex: 0 0 auto;
}

:global(html.dark) {
    --docsearch-primary-color: #417e38;
    --docsearch-soft-primary-color: rgb(65 126 56 / 16%);
    --docsearch-text-color: #e0e7ea;
    --docsearch-secondary-text-color: #aeb8be;
    --docsearch-subtle-color: #29343c;
    --docsearch-focus-color: #91d287;
    --docsearch-highlight-color: #7fc875;
    --docsearch-muted-color: #8d979d;
    --docsearch-icon-color: #aeb8be;
    --docsearch-container-background: rgb(3 7 12 / 78%);
    --docsearch-modal-background: #0d121c;
    --docsearch-searchbox-background: rgb(17 24 36 / 92%);
    --docsearch-searchbox-focus-background: rgb(17 24 36 / 92%);
    --docsearch-hit-background: #121a24;
    --docsearch-hit-color: #d6dee3;
    --docsearch-key-background: #1d2730;
    --docsearch-key-color: #c4ccd1;
    --docsearch-footer-background: #101823;
    --docsearch-logo-color: #ffffff;
    --docsearch-dropdown-menu-background: #121a24;
    --docsearch-dropdown-menu-item-hover-background: #1b2732;
    --docsearch-modal-shadow:
        0 28px 80px rgb(0 0 0 / 46%),
        0 0 0 1px rgb(145 210 135 / 10%);
}

.docsearch-mount :deep(.DocSearch-Button) {
    background:
        linear-gradient(180deg, rgb(18 25 34 / 94%), rgb(11 16 25 / 94%));
    border: 1px solid #2c3437;
    border-radius: 12px;
    box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 4%),
        0 8px 22px rgb(0 0 0 / 14%);
    color: #dce4e8;
    height: 2.375rem;
    justify-content: space-between;
    min-width: 12rem;
    padding: 0 0.45rem 0 0.75rem;
    width: clamp(12rem, 18vw, 15rem);
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        box-shadow 150ms ease,
        color 150ms ease;
}

.docsearch-mount :deep(.DocSearch-Button:hover),
.docsearch-mount :deep(.DocSearch-Button:focus-visible) {
    background:
        linear-gradient(180deg, rgb(22 31 41 / 96%), rgb(13 20 29 / 96%));
    border-color: rgb(127 200 117 / 65%);
    box-shadow:
        0 0 0 3px rgb(65 126 56 / 18%),
        inset 0 1px 0 rgb(255 255 255 / 5%),
        0 10px 26px rgb(0 0 0 / 18%);
    color: var(--color-white);
    outline: none;
}

.docsearch-mount :deep(.DocSearch-Button-Container) {
    min-width: 0;
}

.docsearch-mount :deep(.DocSearch-Search-Icon) {
    color: #8fa19b;
    flex: 0 0 auto;
}

.docsearch-mount :deep(.DocSearch-Button-Placeholder) {
    color: #dce4e8;
    font-size: var(--text-sm);
    line-height: 1;
    overflow: hidden;
    padding-inline: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.docsearch-mount :deep(.DocSearch-Button-Keys) {
    display: flex !important;
    gap: 0.25rem;
    min-width: auto;
}

.docsearch-mount :deep(.DocSearch-Button-Key) {
    background: rgb(26 36 45 / 92%);
    border: 1px solid #344149;
    border-radius: 6px;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 4%) !important;
    color: #bac6c8;
    font-size: 0.6875rem;
    height: 1.35rem;
    line-height: 1;
    min-width: 1.35rem;
    width: auto;
}

:global(html.dark .DocSearch-Container) {
    backdrop-filter: blur(14px);
}

:global(html.dark .DocSearch-Modal) {
    border: 1px solid #29343c;
    border-radius: 16px;
    box-shadow:
        0 28px 80px rgb(0 0 0 / 46%),
        0 0 0 1px rgb(145 210 135 / 10%);
    overflow: hidden;
    width: min(47.5rem, calc(100vw - 2rem));
}

:global(html.dark .DocSearch-SearchBar) {
    padding: 0.875rem;
}

:global(html.dark .DocSearch-Form) {
    border: 1px solid #2d3a42;
    border-radius: 12px;
    box-shadow:
        0 0 0 3px rgb(65 126 56 / 12%),
        inset 0 1px 0 rgb(255 255 255 / 4%);
}

:global(html.dark .DocSearch-Input) {
    color: #edf3f5;
    font-size: 1rem;
}

:global(html.dark .DocSearch-Input::placeholder) {
    color: #8d979d;
}

:global(html.dark .DocSearch-Dropdown) {
    padding: 0 0.875rem 0.75rem;
}

:global(html.dark .DocSearch-Hit a) {
    border: 1px solid transparent;
    border-radius: 12px;
    box-shadow: none;
}

:global(html.dark .DocSearch-Hit[aria-selected="true"] a) {
    background: rgb(65 126 56 / 18%);
    border-color: rgb(127 200 117 / 38%);
    box-shadow:
        inset 3px 0 0 #7fc875,
        0 10px 24px rgb(0 0 0 / 16%);
}

:global(html.dark .DocSearch-Hit mark) {
    background: transparent;
    color: #9de092;
    font-weight: 700;
}

:global(html.dark .DocSearch-Hit-icon),
:global(html.dark .DocSearch-Hit-action),
:global(html.dark .DocSearch-MagnifierLabel),
:global(html.dark .DocSearch-Reset) {
    color: #96a3a5;
}

:global(html.dark .DocSearch-Footer) {
    border-top: 1px solid #29343c;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 3%);
}

:global(html.dark .DocSearch-Commands-Key) {
    background: #1d2730;
    border: 1px solid #344149;
    border-radius: 6px;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 4%);
    color: #c4ccd1;
}

@media (max-width: 639px) {
    .docsearch-mount :deep(.DocSearch-Button) {
        justify-content: center;
        min-width: 2.375rem;
        padding: 0;
        width: 2.375rem;
    }

    .docsearch-mount :deep(.DocSearch-Button-Placeholder),
    .docsearch-mount :deep(.DocSearch-Button-Keys) {
        display: none !important;
    }
}

@media (min-width: 640px) and (max-width: 900px) {
    .docsearch-mount :deep(.DocSearch-Button) {
        min-width: 10.5rem;
        width: 10.5rem;
    }

    .docsearch-mount :deep(.DocSearch-Button-Placeholder) {
        display: inline-block !important;
    }

    .docsearch-mount :deep(.DocSearch-Button-Keys) {
        display: flex !important;
    }
}
</style>
