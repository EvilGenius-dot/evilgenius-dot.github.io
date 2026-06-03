<template>
    <main id="main-content" class="custom-release-page">
        <section class="lookup-shell" aria-labelledby="lookup-title">
            <div class="hero-copy">
                <p class="eyebrow">{{ t("customizedLookup.eyebrow") }}</p>
                <h1 id="lookup-title">{{ t("customizedLookup.title") }}</h1>
                <p>{{ t("customizedLookup.description") }}</p>
            </div>

            <form class="lookup-form" @submit.prevent="handleSubmit">
                <label for="cid-input">{{ t("customizedLookup.cid") }}</label>
                <div class="cid-control">
                    <input
                        id="cid-input"
                        v-model.trim="cidInput"
                        autocomplete="off"
                        inputmode="text"
                        :placeholder="t('customizedLookup.placeholder')"
                        type="text"
                    />
                    <button type="submit" :disabled="!canSubmit">
                        <LoaderCircle
                            v-if="isLoading"
                            class="spin-icon"
                            aria-hidden="true"
                        />
                        <Search v-else aria-hidden="true" />
                        <span>
                            {{
                                isLoading
                                    ? t("customizedLookup.searching")
                                    : t("customizedLookup.search")
                            }}
                        </span>
                    </button>
                </div>
                <p v-if="validationMessage" class="form-message">
                    {{ validationMessage }}
                </p>
            </form>
        </section>

        <section
            v-if="isLoading"
            class="state-panel"
            aria-live="polite"
            :aria-label="t('customizedLookup.statusLabel')"
        >
            <LoaderCircle class="spin-icon" aria-hidden="true" />
            <p>{{ t("customizedLookup.loading") }}</p>
        </section>

        <section
            v-else-if="errorMessage"
            class="empty-state empty-state-error"
            aria-live="polite"
            aria-labelledby="no-result-title"
        >
            <div class="empty-visual" aria-hidden="true">
                <TriangleAlert />
            </div>
            <div class="empty-content">
                <p class="panel-kicker">
                    {{ t("customizedLookup.noResult.eyebrow") }}
                </p>
                <h2 id="no-result-title">
                    {{ t("customizedLookup.noResult.title") }}
                </h2>
                <p>{{ errorMessage }}</p>
                <div class="empty-chips" aria-hidden="true">
                    <span>{{ t("customizedLookup.noResult.checkCid") }}</span>
                    <span>{{ t("customizedLookup.noResult.retry") }}</span>
                </div>
            </div>
        </section>

        <section
            v-else-if="result"
            class="result-shell"
            aria-labelledby="result-title"
        >
            <article class="release-overview">
                <div class="release-heading">
                    <div class="panel-title">
                        <BadgeCheck aria-hidden="true" />
                        <div>
                            <p class="panel-kicker">
                                {{ t("customizedLookup.matched") }}
                            </p>
                            <h2 id="result-title">
                                {{
                                    t("customizedLookup.cidResult", {
                                        cid: result.cid,
                                    })
                                }}
                            </h2>
                        </div>
                    </div>
                    <span class="match-badge">
                        {{ t("customizedLookup.available") }}
                    </span>
                </div>

                <div class="release-meta">
                    <div>
                        <span>{{ t("customizedLookup.currentVersion") }}</span>
                        <strong>{{ result.version }}</strong>
                    </div>
                    <p>{{ t("customizedLookup.resultDescription") }}</p>
                </div>
            </article>

            <div class="download-grid">
                <article
                    v-for="group in downloadGroups"
                    :key="group.id"
                    class="download-panel"
                >
                    <div class="panel-title">
                        <component :is="group.icon" aria-hidden="true" />
                        <div>
                            <p class="panel-kicker">{{ group.kicker }}</p>
                            <h2>{{ group.title }}</h2>
                        </div>
                    </div>

                    <div v-if="group.files.length" class="file-list">
                        <a
                            v-for="file in group.files"
                            :key="file.path"
                            class="file-link"
                            :href="file.downloadUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>
                                <strong>{{ file.name }}</strong>
                                <small>{{ group.hint }}</small>
                            </span>
                            <Download aria-hidden="true" />
                        </a>
                    </div>

                    <p v-else class="empty-note">
                        {{
                            t("customizedLookup.emptyFiles", {
                                platform: group.title,
                            })
                        }}
                    </p>
                </article>
            </div>

            <article v-if="result.installCommand" class="command-panel">
                <div class="command-heading">
                    <div class="panel-title">
                        <Terminal aria-hidden="true" />
                        <div>
                            <p class="panel-kicker">Linux</p>
                            <h2>{{ t("customizedLookup.installTitle") }}</h2>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="copy-button"
                        @click="
                            copyText(result.installCommand, 'install-command')
                        "
                    >
                        <Check
                            v-if="copiedId === 'install-command'"
                            aria-hidden="true"
                        />
                        <Clipboard v-else aria-hidden="true" />
                        <span>
                            {{
                                copiedId === "install-command"
                                    ? t("customizedLookup.copied")
                                    : t("customizedLookup.copy")
                            }}
                        </span>
                    </button>
                </div>
                <pre><code>{{ result.installCommand }}</code></pre>
                <p class="command-note">
                    {{ t("customizedLookup.commandNote") }}
                </p>
            </article>
        </section>

        <section v-else class="idle-shell" aria-labelledby="idle-title">
            <article class="idle-panel">
                <div class="panel-title">
                    <Search aria-hidden="true" />
                    <div>
                        <p class="panel-kicker">
                            {{ t("customizedLookup.idle.eyebrow") }}
                        </p>
                        <h2 id="idle-title">
                            {{ t("customizedLookup.idle.title") }}
                        </h2>
                    </div>
                </div>
                <p class="idle-copy">
                    {{ t("customizedLookup.idle.description") }}
                </p>
            </article>

            <div class="idle-grid">
                <article
                    v-for="item in idleItems"
                    :key="item.title"
                    class="idle-card"
                >
                    <component :is="item.icon" aria-hidden="true" />
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.text }}</p>
                </article>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed, markRaw, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
    BadgeCheck,
    Check,
    Clipboard,
    Download,
    LoaderCircle,
    MonitorDown,
    Search,
    Terminal,
    TriangleAlert,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const repositoryOwner = "EvilGenius-dot";
const repositoryName = "shortcut";
const repositoryBranch = "main";
const readmeRoot = "Readme";
const allowedCidPattern = /^[A-Za-z0-9._-]+$/;

const cidInput = ref("");
const result = ref(null);
const isLoading = ref(false);
const errorMessage = ref("");
const validationMessage = ref("");
const copiedId = ref("");

const normalizedCid = computed(() => cidInput.value.trim());
const canSubmit = computed(
    () => Boolean(normalizedCid.value) && !isLoading.value,
);

const encodePath = (path) => path.split("/").map(encodeURIComponent).join("/");

const contentsApiUrl = (path) =>
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/contents/${encodePath(
        path,
    )}?ref=${repositoryBranch}`;

const githubRawUrl = (path) =>
    `https://github.com/${repositoryOwner}/${repositoryName}/raw/${repositoryBranch}/${encodePath(
        path,
    )}`;

const mediaUrl = (path) =>
    `https://media.githubusercontent.com/media/${repositoryOwner}/${repositoryName}/${repositoryBranch}/${encodePath(
        path,
    )}`;

const getDirectoryEntries = async (path, signal) => {
    const response = await fetch(contentsApiUrl(path), {
        cache: "no-store",
        headers: {
            Accept: "application/vnd.github+json",
        },
        signal,
    });

    if (response.status === 404) {
        throw new Error("NOT_FOUND");
    }

    if (!response.ok) {
        throw new Error("FETCH_FAILED");
    }

    const payload = await response.json();

    return Array.isArray(payload) ? payload : [payload];
};

const getFilesRecursively = async (path, signal) => {
    const entries = await getDirectoryEntries(path, signal);
    const files = entries.filter((entry) => entry.type === "file");
    const directories = entries.filter((entry) => entry.type === "dir");
    const nestedFiles = await Promise.all(
        directories.map((entry) => getFilesRecursively(entry.path, signal)),
    );

    return [...files, ...nestedFiles.flat()];
};

const fetchInstallScript = async (path, signal) => {
    const response = await fetch(mediaUrl(path), {
        cache: "no-store",
        signal,
    });

    if (!response.ok) {
        throw new Error("SCRIPT_FAILED");
    }

    return response.text();
};

const extractVersion = (value = "") => {
    const match = value.match(/(?:^|[-_.v/])(\d+(?:[-_.]\d+){1,3})(?=\D|$)/i);

    return match ? match[1].replace(/[-_]/g, ".") : "";
};

const extractVersionFromScript = (script = "") => {
    const match = script.match(/^\s*VERSION=["']?([^"'\n]+)["']?/m);

    return match ? extractVersion(match[1]) : "";
};

const formatVersion = (version) =>
    version ? `v${version}` : t("customizedLookup.unknownVersion");

const normalizeFile = (entry) => ({
    downloadUrl: githubRawUrl(entry.path),
    htmlUrl: entry.html_url,
    name: entry.name,
    path: entry.path,
    version: extractVersion(`${entry.path}/${entry.name}`),
});

const findChild = (entries, name, type) =>
    entries.find(
        (entry) => entry.type === type && entry.name.toLowerCase() === name,
    );

const getFilenameVersion = (files) =>
    files
        .map((file) => file.version)
        .filter(Boolean)
        .sort(compareVersions)
        .at(-1);

const buildResult = ({
    cid,
    rootEntries,
    scriptText,
    windowsFiles,
    linuxFiles,
}) => {
    const installEntry = findChild(rootEntries, "install.sh", "file");
    const scriptVersion = extractVersionFromScript(scriptText);
    const filenameVersion = getFilenameVersion([
        ...windowsFiles,
        ...linuxFiles,
    ]);
    const version = scriptVersion || filenameVersion;

    return {
        cid,
        installCommand: installEntry
            ? `bash <(curl -fsSL ${mediaUrl(installEntry.path)})`
            : "",
        linuxFiles,
        version: formatVersion(version),
        windowsFiles,
    };
};

const lookupCid = async (cid) => {
    const rootPath = `${readmeRoot}/${cid}`;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 12000);

    isLoading.value = true;
    errorMessage.value = "";
    validationMessage.value = "";
    result.value = null;

    try {
        const rootEntries = await getDirectoryEntries(
            rootPath,
            controller.signal,
        );
        const installEntry = findChild(rootEntries, "install.sh", "file");
        const windowsDirectory = findChild(rootEntries, "windows", "dir");
        const linuxDirectory = findChild(rootEntries, "linux", "dir");

        const [windowsEntries, linuxEntries, scriptText] = await Promise.all([
            windowsDirectory
                ? getFilesRecursively(windowsDirectory.path, controller.signal)
                : [],
            linuxDirectory
                ? getFilesRecursively(linuxDirectory.path, controller.signal)
                : [],
            installEntry
                ? fetchInstallScript(
                      installEntry.path,
                      controller.signal,
                  ).catch(() => "")
                : "",
        ]);

        const windowsFiles = windowsEntries.map(normalizeFile);
        const linuxFiles = linuxEntries.map(normalizeFile);

        result.value = buildResult({
            cid,
            linuxFiles,
            rootEntries,
            scriptText,
            windowsFiles,
        });

        router.replace({
            query: {
                ...route.query,
                cid,
            },
        });
    } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
            errorMessage.value = t("customizedLookup.errors.timeout");
        } else if (error instanceof Error && error.message === "NOT_FOUND") {
            errorMessage.value = t("customizedLookup.errors.notFound", { cid });
        } else {
            errorMessage.value = t("customizedLookup.errors.fetchFailed");
        }
    } finally {
        window.clearTimeout(timeoutId);
        isLoading.value = false;
    }
};

const handleSubmit = () => {
    const cid = normalizedCid.value;

    validationMessage.value = "";

    if (!cid) {
        validationMessage.value = t("customizedLookup.errors.required");
        return;
    }

    if (!allowedCidPattern.test(cid)) {
        validationMessage.value = t("customizedLookup.errors.invalid");
        return;
    }

    lookupCid(cid);
};

const writeClipboardText = async (text) => {
    if (window.navigator?.clipboard?.writeText) {
        try {
            await window.navigator.clipboard.writeText(text);
            return;
        } catch {
            // Fall through to the textarea copy path for browsers with stricter permissions.
        }
    }

    const textArea = document.createElement("textarea");

    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.left = "-9999px";
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.select();

    const didCopy = document.execCommand("copy");

    document.body.removeChild(textArea);

    if (!didCopy) {
        throw new Error("COPY_FAILED");
    }
};

const copyText = async (text, id) => {
    try {
        await writeClipboardText(text);
        copiedId.value = id;
        window.setTimeout(() => {
            if (copiedId.value === id) {
                copiedId.value = "";
            }
        }, 1800);
    } catch {
        copiedId.value = "";
    }
};

const downloadGroups = computed(() => {
    if (!result.value) return [];

    return [
        {
            icon: markRaw(MonitorDown),
            id: "windows",
            kicker: "Windows",
            title: t("customizedLookup.windowsTitle"),
            hint: t("customizedLookup.windowsHint"),
            files: result.value.windowsFiles,
        },
        {
            icon: markRaw(Terminal),
            id: "linux",
            kicker: "Linux",
            title: t("customizedLookup.linuxTitle"),
            hint: t("customizedLookup.linuxHint"),
            files: result.value.linuxFiles,
        },
    ];
});

const idleItems = computed(() => [
    {
        icon: markRaw(MonitorDown),
        title: t("customizedLookup.idle.windows.title"),
        text: t("customizedLookup.idle.windows.text"),
    },
    {
        icon: markRaw(Terminal),
        title: t("customizedLookup.idle.linux.title"),
        text: t("customizedLookup.idle.linux.text"),
    },
    {
        icon: markRaw(Clipboard),
        title: t("customizedLookup.idle.command.title"),
        text: t("customizedLookup.idle.command.text"),
    },
]);

function compareVersions(first, second) {
    const firstParts = first.match(/\d+/g)?.map(Number) || [0];
    const secondParts = second.match(/\d+/g)?.map(Number) || [0];
    const partCount = Math.max(firstParts.length, secondParts.length);

    for (let index = 0; index < partCount; index += 1) {
        const difference = (firstParts[index] || 0) - (secondParts[index] || 0);

        if (difference) return difference;
    }

    return first.localeCompare(second);
}

onMounted(() => {
    const initialCid =
        typeof route.query.cid === "string" ? route.query.cid.trim() : "";

    if (!initialCid) return;

    cidInput.value = initialCid;

    if (allowedCidPattern.test(initialCid)) {
        lookupCid(initialCid);
    }
});
</script>

<style scoped>
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.custom-release-page {
    background:
        linear-gradient(rgb(255 255 255 / 3%) 1px, transparent 1px),
        linear-gradient(90deg, rgb(255 255 255 / 3%) 1px, transparent 1px),
        linear-gradient(180deg, rgb(13 18 28), rgb(8 12 18) 58%, #0d121c);
    background-size:
        3rem 3rem,
        3rem 3rem,
        auto;
    box-sizing: border-box;
    color: var(--color-white);
    min-height: calc(100vh - 4rem);
    padding: clamp(3.5rem, 8vw, 6rem) 1rem 5rem;
}

.lookup-shell,
.result-shell,
.state-panel,
.empty-state,
.idle-shell {
    margin: 0 auto;
    max-width: 1120px;
}

.lookup-shell {
    align-items: end;
    display: grid;
    gap: 1.5rem;
}

.hero-copy {
    min-width: 0;
}

.eyebrow,
.panel-kicker {
    color: var(--color-green-400);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0;
    margin: 0 0 0.75rem;
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
    line-height: 1.08;
    margin-bottom: 1rem;
    overflow-wrap: anywhere;
}

h2 {
    color: var(--color-white);
    font-size: var(--text-xl);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0;
    overflow-wrap: anywhere;
}

h3 {
    color: var(--color-white);
    font-size: var(--text-base);
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 0;
    overflow-wrap: anywhere;
}

.hero-copy p:not(.eyebrow) {
    color: var(--color-neutral-300);
    font-size: var(--text-lg);
    line-height: 1.7;
    margin-bottom: 0;
    max-width: 48rem;
}

.lookup-form,
.release-overview,
.download-panel,
.command-panel,
.state-panel,
.empty-state,
.idle-panel,
.idle-card {
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 8px;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 18%);
}

.lookup-form {
    background:
        linear-gradient(135deg, rgb(65 126 56 / 14%), transparent 54%),
        rgb(13 18 28 / 82%);
    padding: 1rem;
}

.lookup-form label {
    color: var(--color-neutral-200);
    display: block;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.625rem;
}

.cid-control {
    display: grid;
    gap: 0.75rem;
}

.cid-control input {
    background: rgb(8 12 18 / 86%);
    border: 1px solid rgb(255 255 255 / 14%);
    border-radius: 8px;
    color: var(--color-white);
    font: inherit;
    min-height: 2.875rem;
    outline: none;
    padding: 0 0.875rem;
    transition:
        border-color 150ms ease,
        box-shadow 150ms ease;
    width: 100%;
}

.cid-control input:focus {
    border-color: rgb(132 186 100 / 66%);
    box-shadow: 0 0 0 3px rgb(65 126 56 / 18%);
}

.cid-control button,
.copy-button {
    align-items: center;
    border: 1px solid rgb(132 186 100 / 42%);
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    font-weight: var(--font-weight-semibold);
    gap: 0.5rem;
    justify-content: center;
    min-height: 2.875rem;
    padding: 0 1rem;
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        transform 150ms ease;
}

.cid-control button {
    background: rgb(65 126 56 / 22%);
    color: var(--color-white);
}

.cid-control button:disabled {
    cursor: not-allowed;
    opacity: 0.58;
}

.cid-control button:not(:disabled):hover,
.cid-control button:not(:disabled):focus-visible,
.copy-button:hover,
.copy-button:focus-visible {
    background: rgb(65 126 56 / 30%);
    border-color: rgb(132 186 100 / 62%);
    outline: none;
    transform: translateY(-1px);
}

.cid-control svg,
.copy-button svg,
.panel-title svg,
.state-panel svg,
.file-link svg {
    flex: 0 0 auto;
    height: 1.1rem;
    width: 1.1rem;
}

.form-message {
    color: #fca5a5;
    font-size: var(--text-sm);
    line-height: 1.5;
    margin: 0.75rem 0 0;
}

.state-panel {
    align-items: center;
    background: rgb(13 18 28 / 82%);
    color: var(--color-neutral-200);
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding: 1rem;
}

.state-panel p {
    line-height: 1.6;
    margin-bottom: 0;
}

.state-panel-error {
    border-color: rgb(248 113 113 / 36%);
    color: #fecaca;
}

.empty-state {
    align-items: center;
    align-content: center;
    background:
        linear-gradient(135deg, rgb(248 113 113 / 12%), transparent 48%),
        linear-gradient(180deg, rgb(255 255 255 / 4%), transparent),
        rgb(13 18 28 / 82%);
    display: grid;
    gap: 1.25rem;
    margin-top: 1.5rem;
    min-height: min(28rem, calc(100vh - 18rem));
    padding: clamp(1.25rem, 3vw, 2rem);
}

.empty-visual {
    align-items: center;
    background: rgb(248 113 113 / 12%);
    border: 1px solid rgb(248 113 113 / 28%);
    border-radius: 8px;
    color: #fecaca;
    display: inline-flex;
    height: 4.25rem;
    justify-content: center;
    width: 4.25rem;
}

.empty-visual svg {
    height: 2rem;
    width: 2rem;
}

.empty-content p:not(.panel-kicker) {
    color: var(--color-neutral-300);
    line-height: 1.7;
    margin: 0.875rem 0 0;
    max-width: 44rem;
}

.empty-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
}

.empty-chips span {
    background: rgb(8 12 18 / 62%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 999px;
    color: var(--color-neutral-200);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    padding: 0.375rem 0.625rem;
}

.spin-icon {
    animation: spin 0.9s linear infinite;
}

.result-shell,
.idle-shell {
    display: grid;
    gap: 1rem;
    margin-top: 1.5rem;
}

.release-overview,
.download-panel,
.command-panel,
.idle-panel,
.idle-card {
    padding: 1rem;
}

.release-overview,
.download-panel,
.command-panel,
.idle-panel,
.idle-card {
    background:
        linear-gradient(180deg, rgb(255 255 255 / 4%), transparent),
        rgb(13 18 28 / 82%);
}

.idle-panel {
    align-content: center;
    background:
        linear-gradient(135deg, rgb(65 126 56 / 15%), transparent 52%),
        linear-gradient(180deg, rgb(255 255 255 / 5%), transparent),
        rgb(13 18 28 / 82%);
    min-height: 11.5rem;
    padding: clamp(1.25rem, 3vw, 2rem);
}

.idle-copy {
    color: var(--color-neutral-300);
    line-height: 1.7;
    margin: 1rem 0 0;
    max-width: 42rem;
}

.idle-grid {
    display: grid;
    gap: 1rem;
}

.idle-card {
    display: grid;
    gap: 0.75rem;
    min-height: 10.5rem;
}

.idle-card > svg {
    background: rgb(8 12 18 / 58%);
    border: 1px solid rgb(132 186 100 / 22%);
    border-radius: 8px;
    color: var(--color-green-400);
    height: 2.5rem;
    padding: 0.5rem;
    width: 2.5rem;
}

.idle-card p {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.6;
    margin-bottom: 0;
}

.panel-title,
.command-heading {
    align-items: center;
    display: flex;
    gap: 0.875rem;
}

.panel-title svg {
    background: rgb(65 126 56 / 16%);
    border: 1px solid rgb(132 186 100 / 26%);
    border-radius: 8px;
    color: var(--color-green-400);
    height: 2.5rem;
    padding: 0.5rem;
    width: 2.5rem;
}

.panel-kicker {
    font-size: var(--text-xs);
    margin-bottom: 0.25rem;
}

.release-heading {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}

.match-badge {
    background: rgb(65 126 56 / 18%);
    border: 1px solid rgb(132 186 100 / 32%);
    border-radius: 999px;
    color: var(--color-green-400);
    flex: 0 0 auto;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    padding: 0.375rem 0.625rem;
}

.release-meta {
    align-items: stretch;
    display: grid;
    gap: 1rem;
    margin-top: 1.25rem;
}

.release-meta div {
    background: rgb(8 12 18 / 54%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    padding: 1rem;
}

.release-meta span {
    color: var(--color-neutral-500);
    display: block;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.5rem;
}

.release-meta strong {
    color: var(--color-white);
    display: block;
    font-size: var(--text-3xl);
    font-weight: 800;
    line-height: 1;
    overflow-wrap: anywhere;
}

.release-meta p {
    align-content: center;
    color: var(--color-neutral-300);
    line-height: 1.7;
    margin-bottom: 0;
}

.download-grid {
    display: grid;
    gap: 1rem;
}

.file-list {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
}

.file-link {
    align-items: center;
    background:
        linear-gradient(135deg, rgb(65 126 56 / 12%), transparent 64%),
        rgb(8 12 18 / 58%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    color: var(--color-white);
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    min-height: 4.125rem;
    padding: 0.875rem;
    text-decoration: none;
    transition:
        border-color 150ms ease,
        transform 150ms ease;
}

.file-link:hover,
.file-link:focus-visible {
    border-color: rgb(132 186 100 / 48%);
    outline: none;
    transform: translateY(-1px);
}

.file-link span {
    min-width: 0;
}

.file-link strong,
.file-link small {
    display: block;
    overflow-wrap: anywhere;
}

.file-link strong {
    font-size: var(--text-sm);
    line-height: 1.35;
}

.file-link small {
    color: var(--color-neutral-400);
    font-size: var(--text-xs);
    line-height: 1.45;
    margin-top: 0.25rem;
}

.empty-note,
.command-note {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.6;
    margin: 1rem 0 0;
}

.command-heading {
    justify-content: space-between;
}

.copy-button {
    background: rgb(8 12 18 / 70%);
    color: var(--color-neutral-100);
    min-height: 2.5rem;
}

.command-panel pre {
    background: rgb(8 12 18 / 82%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    color: #d9f99d;
    font-size: var(--text-sm);
    line-height: 1.7;
    margin: 1rem 0 0;
    overflow-x: auto;
    padding: 1rem;
    white-space: pre-wrap;
    word-break: break-word;
}

.command-panel code {
    font-family:
        ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
}

@media (min-width: 720px) {
    .lookup-shell {
        grid-template-columns: minmax(0, 1fr) minmax(20rem, 28rem);
    }

    .cid-control {
        grid-template-columns: minmax(0, 1fr) auto;
    }

    .release-meta,
    .download-grid,
    .idle-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .empty-state {
        grid-template-columns: auto minmax(0, 1fr);
        min-height: min(28rem, calc(100vh - 17rem));
    }
}

@media (min-width: 1024px) {
    .custom-release-page {
        padding-top: 5rem;
    }

    .download-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .idle-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>
