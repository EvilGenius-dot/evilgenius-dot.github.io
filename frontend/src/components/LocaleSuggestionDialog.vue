<template>
    <AlertDialog :open="isOpen" @update:open="handleOpenChange">
        <AlertDialogContent class="locale-suggestion-dialog">
            <AlertDialogHeader>
                <AlertDialogTitle>{{
                    t("localePrompt.title")
                }}</AlertDialogTitle>
                <AlertDialogDescription>
                    {{
                        t("localePrompt.description", {
                            language: suggestedLanguageName,
                        })
                    }}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel
                    class="locale-cancel"
                    @click="dismissSuggestion"
                >
                    {{ t("localePrompt.cancel") }}
                </AlertDialogCancel>
                <AlertDialogAction class="locale-action" @click="confirmSwitch">
                    {{
                        t("localePrompt.confirm", {
                            language: suggestedLanguageName,
                        })
                    }}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    DEFAULT_DOWNLOAD_PAGE,
    DEFAULT_DOC_COLLECTION,
    DEFAULT_DOC_PAGE,
    LOCALE_META,
    SUPPORTED_LOCALES,
    docPath,
    downloadPath,
    getRouteLocale,
    pagePath,
} from "@/i18n";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const STORAGE_KEY = "rms-locale-suggestion-shown";
const isOpen = ref(false);
const suggestedLocale = ref(null);

const currentLocale = computed(() => getRouteLocale(route));
const suggestedLanguageName = computed(
    () => LOCALE_META[suggestedLocale.value]?.nativeName || "",
);

// 浏览器语言只匹配当前支持的三种语言，其他语言环境不打扰用户。
const normalizeBrowserLocale = (language = "") => {
    const normalizedLanguage = language.toLowerCase();

    if (normalizedLanguage.startsWith("zh")) {
        return "zh";
    }

    if (normalizedLanguage.startsWith("ru")) {
        return "ru";
    }

    if (normalizedLanguage.startsWith("en")) {
        return "en";
    }

    return null;
};

const getPreferredLocale = () => {
    const browserLanguages = [
        ...(navigator.languages || []),
        navigator.language,
    ].filter(Boolean);

    return browserLanguages
        .map((language) => normalizeBrowserLocale(language))
        .find((locale) => SUPPORTED_LOCALES.includes(locale));
};

const hasPrompted = () => {
    try {
        return sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
        return false;
    }
};

const markSuggestionHandled = () => {
    try {
        sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
        // 浏览器禁止 sessionStorage 时忽略即可，弹窗逻辑仍能正常运行。
    }
};

// 切换语言时保留当前页面类型、hash 和 query，文档/下载页继续停留在对应子页面。
const getLocalizedCurrentPath = (nextLocale) => {
    const page = route.meta?.page || "home";

    if (page === "document") {
        return docPath(
            route.meta?.docPage || DEFAULT_DOC_PAGE,
            nextLocale,
            route.meta?.docCollection || DEFAULT_DOC_COLLECTION,
        );
    }

    if (page === "download") {
        return downloadPath(
            route.meta?.downloadPage || DEFAULT_DOWNLOAD_PAGE,
            nextLocale,
        );
    }

    return pagePath(page, nextLocale);
};

const dismissSuggestion = () => {
    markSuggestionHandled();
    isOpen.value = false;
};

const confirmSwitch = () => {
    if (!suggestedLocale.value) {
        dismissSuggestion();
        return;
    }

    markSuggestionHandled();
    isOpen.value = false;
    router.push({
        path: getLocalizedCurrentPath(suggestedLocale.value),
        hash: route.hash,
        query: route.query,
    });
};

const handleOpenChange = (nextOpen) => {
    isOpen.value = nextOpen;

    if (!nextOpen && suggestedLocale.value) {
        markSuggestionHandled();
    }
};

onMounted(() => {
    const preferredLocale = getPreferredLocale();

    if (
        !preferredLocale ||
        preferredLocale === currentLocale.value ||
        hasPrompted()
    ) {
        return;
    }

    suggestedLocale.value = preferredLocale;
    isOpen.value = true;
});
</script>

<style scoped>
.locale-suggestion-dialog {
    border-color: var(--color-neutral-800);
    color: var(--color-white);
    max-width: min(92vw, 28rem);
}

.locale-suggestion-dialog :deep(p) {
    color: var(--color-neutral-300);
    line-height: 1.7;
}

.locale-cancel {
    border-color: var(--color-neutral-700);
}

.locale-action {
    background-color: #417e38;
    color: var(--color-white);
}

.locale-action:hover,
.locale-action:focus-visible {
    background-color: var(--color-green-400);
    color: var(--color-neutral-950);
}
</style>
