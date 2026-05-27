<template>
    <main id="main-content" class="download-page">
        <div class="download-shell">
            <article class="download-hero" aria-labelledby="download-title">
                <div class="download-hero-copy">
                    <h1 id="download-title">
                        {{ pageMeta.heading || pageMeta.title }}
                    </h1>
                    <p class="hero-description">{{ pageMeta.description }}</p>
                    <RouterLink
                        v-if="hasDownloadFinder"
                        :to="installationGuidePath"
                        class="guide-link"
                    >
                        <BookOpen aria-hidden="true" />
                        <span>{{ t("download.installGuideLink") }}</span>
                    </RouterLink>
                </div>

                <div
                    v-if="hasHeroVisual"
                    class="download-hero-visual"
                    role="img"
                    :aria-label="downloadText('visual.label')"
                >
                    <div class="miner-nodes">
                        <div
                            v-for="miner in heroVisualSources"
                            :key="miner"
                            class="miner-node"
                        >
                            <Cpu aria-hidden="true" />
                            <span>{{ miner }}</span>
                        </div>
                    </div>
                    <div class="connection-lines" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="system-node">
                        <ShieldCheck
                            v-if="isRmsDownloadPage"
                            aria-hidden="true"
                        />
                        <Server v-else aria-hidden="true" />
                        <strong>{{ downloadText("visual.system") }}</strong>
                        <span>{{ downloadText("visual.systemHint") }}</span>
                    </div>
                    <div class="target-node">
                        <span>{{ downloadText("visual.target") }}</span>
                    </div>
                </div>
            </article>

            <section
                v-if="hasDownloadFinder"
                class="download-finder"
                :class="{ 'download-finder-rms': isRmsDownloadPage }"
                aria-labelledby="download-finder-title"
            >
                <div class="finder-header">
                    <div>
                        <h2 id="download-finder-title">
                            {{ downloadText("finderTitle") }}
                        </h2>
                        <p>
                            {{
                                downloadText("selectionSummary", {
                                    os: selectedOsLabel,
                                    arch: selectedArchLabel,
                                    version: selectedVersionLabel,
                                })
                            }}
                        </p>
                    </div>
                    <a
                        :href="currentRepositoryDirectory.href"
                        class="directory-link finder-directory-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink aria-hidden="true" />
                        <span>{{ currentRepositoryDirectory.label }}</span>
                    </a>
                </div>

                <div class="filter-grid">
                    <label class="filter-field filter-field-os">
                        <span>{{ downloadText("osLabel") }}</span>
                        <Select v-model="selectedOs">
                            <SelectTrigger class="filter-trigger">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent class="download-select-content">
                                <SelectItem
                                    v-for="option in osOptions"
                                    :key="option.value"
                                    class="download-select-item"
                                    :value="option.value"
                                >
                                    {{ option.label }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </label>

                    <label class="filter-field filter-field-arch">
                        <span>{{ downloadText("archLabel") }}</span>
                        <Select v-model="selectedArch">
                            <SelectTrigger class="filter-trigger">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent class="download-select-content">
                                <SelectItem
                                    v-for="option in availableArchOptions"
                                    :key="option.value"
                                    class="download-select-item"
                                    :value="option.value"
                                >
                                    {{ option.label }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </label>

                    <label class="filter-field filter-field-version">
                        <span>{{ downloadText("versionLabel") }}</span>
                        <Select
                            v-model="selectedVersion"
                            :disabled="!availableVersions.length"
                        >
                            <SelectTrigger class="filter-trigger">
                                <SelectValue
                                    :placeholder="
                                        downloadText('versionPending')
                                    "
                                />
                            </SelectTrigger>
                            <SelectContent class="download-select-content">
                                <SelectItem
                                    v-for="version in availableVersions"
                                    :key="version"
                                    class="download-select-item"
                                    :value="version"
                                >
                                    {{ version }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </label>
                </div>

                <div class="method-hint">
                    <Info aria-hidden="true" />
                    <p>
                        {{ downloadText(activeMethodHintKey) }}
                    </p>
                </div>

                <div
                    v-if="visibleInstallCommands.length"
                    class="install-panel"
                    aria-labelledby="linux-install-title"
                >
                    <div class="install-header">
                        <Terminal aria-hidden="true" />
                        <div>
                            <h3 id="linux-install-title">
                                {{ downloadText("install.title") }}
                            </h3>
                            <p>
                                {{
                                    downloadText("install.description", {
                                        arch: selectedArchLabel,
                                    })
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="install-command-list">
                        <article
                            v-for="command in visibleInstallCommands"
                            :key="command.id"
                            class="install-command"
                        >
                            <div class="install-command-heading">
                                <span>{{ command.label }}</span>
                                <button
                                    type="button"
                                    class="copy-button"
                                    @click="copyInstallCommand(command)"
                                >
                                    <Check
                                        v-if="copiedCommandId === command.id"
                                        aria-hidden="true"
                                    />
                                    <Clipboard v-else aria-hidden="true" />
                                    <span>
                                        {{
                                            copiedCommandId === command.id
                                                ? downloadText("install.copied")
                                                : downloadText("install.copy")
                                        }}
                                    </span>
                                </button>
                            </div>
                            <pre><code>{{ command.command }}</code></pre>
                        </article>
                    </div>
                </div>

                <div
                    class="binary-panel"
                    aria-labelledby="binary-download-title"
                >
                    <div class="binary-header">
                        <Download aria-hidden="true" />
                        <div class="binary-header-copy">
                            <h3 id="binary-download-title">
                                {{ downloadText("binary.title") }}
                            </h3>
                            <p>
                                {{ downloadText("binary.description") }}
                            </p>
                        </div>
                    </div>

                    <div
                        v-if="
                            isLoadingReleases ||
                            releaseError ||
                            !filteredReleaseFiles.length
                        "
                        class="release-state"
                        aria-live="polite"
                    >
                        <p v-if="isLoadingReleases">
                            {{ downloadText("loading") }}
                        </p>
                        <p v-else-if="releaseError">
                            {{ releaseError }}
                        </p>
                        <p v-else-if="!filteredReleaseFiles.length">
                            {{ downloadText("empty") }}
                        </p>
                    </div>

                    <div
                        v-if="filteredReleaseFiles.length"
                        class="release-list"
                    >
                        <article
                            v-for="file in filteredReleaseFiles"
                            :key="file.path"
                            class="release-row"
                        >
                            <div class="release-copy">
                                <span>{{ file.version }}</span>
                                <h3>{{ file.name }}</h3>
                                <p>{{ file.path }}</p>
                            </div>
                            <a
                                :href="file.downloadUrl"
                                class="download-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download aria-hidden="true" />
                                <span>{{ downloadText("download") }}</span>
                            </a>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import {
    BookOpen,
    Check,
    Clipboard,
    Cpu,
    Download,
    ExternalLink,
    Info,
    Server,
    ShieldCheck,
    Terminal,
} from "lucide-vue-next";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DEFAULT_DOWNLOAD_PAGE,
    docPath,
    getDownloadPageMeta,
    getRouteLocale,
} from "@/i18n";

const route = useRoute();
const { t } = useI18n();

const currentLocale = computed(() => getRouteLocale(route));
const currentDownloadPage = computed(
    () => route.meta?.downloadPage || DEFAULT_DOWNLOAD_PAGE,
);
const pageMeta = computed(() =>
    getDownloadPageMeta(currentDownloadPage.value, currentLocale.value),
);
const isServerDownloadPage = computed(
    () => currentDownloadPage.value === "server",
);
const isRmsDownloadPage = computed(() => currentDownloadPage.value === "rms");
const hasDownloadFinder = computed(
    () => isServerDownloadPage.value || isRmsDownloadPage.value,
);
const hasHeroVisual = computed(
    () => isServerDownloadPage.value || isRmsDownloadPage.value,
);
const downloadTranslationKey = computed(() =>
    isRmsDownloadPage.value ? "download.rms" : "download.server",
);
const downloadText = (key, params) =>
    t(`${downloadTranslationKey.value}.${key}`, params);
const installationGuidePath = computed(() =>
    docPath("installation", currentLocale.value),
);
const heroVisualSources = computed(() => [
    downloadText("visual.miners"),
    downloadText("visual.fieldProxy"),
    downloadText("visual.remoteNode"),
]);

const repositoryOwner = "EvilGenius-dot";
const repositoryBranch = "main";
const activeRepositoryName = computed(() =>
    isRmsDownloadPage.value ? "RMS" : "RustMinerSystem",
);
const repositoryContentsApi = computed(
    () =>
        `https://api.github.com/repos/${repositoryOwner}/${activeRepositoryName.value}/contents`,
);
const repositoryRootUrl = computed(
    () => `https://github.com/${repositoryOwner}/${activeRepositoryName.value}`,
);
const serverBinaryDirectories = ["windows", "linux"];
const rmsBinaryDirectoryByArch = {
    x86: "x86_64-musl",
    aarch64: "aarch64-musl",
    arm: "arm-musleabi",
    armhf: "arm-musleabihf",
    armv7: "armv7-musleabi",
    armv7hf: "armv7-musleabihf",
    "windows-gui": "windows-gui",
    "windows-cli": "windows-no-gui",
};
const rmsLinuxArchOptions = [
    "x86",
    "aarch64",
    "arm",
    "armhf",
    "armv7",
    "armv7hf",
];
const binaryDirectories = computed(() =>
    isRmsDownloadPage.value
        ? Object.values(rmsBinaryDirectoryByArch)
        : serverBinaryDirectories,
);
const skippedFileExtensions = new Set([
    "md",
    "txt",
    "json",
    "yml",
    "yaml",
    "sh",
    "ps1",
]);

const selectedOs = ref("linux");
const selectedArch = ref("x86");
const selectedVersion = ref("");
const releaseFiles = ref([]);
const releaseError = ref("");
const isLoadingReleases = ref(false);
const copiedCommandId = ref("");

const osOptions = computed(() => [
    {
        value: "linux",
        label: downloadText("os.linux"),
    },
    ...(isRmsDownloadPage.value
        ? [
              {
                  value: "openwrt",
                  label: downloadText("os.openwrt"),
              },
          ]
        : []),
    {
        value: "windows",
        label: downloadText("os.windows"),
    },
]);

const archOptions = computed(() => {
    if (isRmsDownloadPage.value) {
        const linuxOptions = rmsLinuxArchOptions.map((arch) => ({
            value: arch,
            label: downloadText(`arch.${arch}`),
        }));

        return {
            linux: linuxOptions,
            openwrt: linuxOptions,
            windows: [
                {
                    value: "windows-gui",
                    label: downloadText("arch.windowsGui"),
                },
                {
                    value: "windows-cli",
                    label: downloadText("arch.windowsCli"),
                },
            ],
        };
    }

    return {
        linux: [
            {
                value: "x86",
                label: downloadText("arch.x86"),
            },
            {
                value: "arm",
                label: downloadText("arch.arm"),
            },
            {
                value: "armv7",
                label: downloadText("arch.armv7"),
            },
        ],
        windows: [
            {
                value: "x86",
                label: downloadText("arch.x86"),
            },
        ],
    };
});

const availableArchOptions = computed(
    () => archOptions.value[selectedOs.value] || archOptions.value.linux,
);

const selectedOsLabel = computed(
    () =>
        osOptions.value.find((option) => option.value === selectedOs.value)
            ?.label || selectedOs.value,
);

const selectedArchLabel = computed(
    () =>
        availableArchOptions.value.find(
            (option) => option.value === selectedArch.value,
        )?.label || selectedArch.value,
);

const filesForSelectedPlatform = computed(() =>
    releaseFiles.value.filter((file) => {
        if (isRmsDownloadPage.value && selectedOs.value === "openwrt") {
            return file.os === "linux" && file.arch === selectedArch.value;
        }

        return file.os === selectedOs.value && file.arch === selectedArch.value;
    }),
);

const availableVersions = computed(() =>
    [...new Set(filesForSelectedPlatform.value.map((file) => file.version))]
        .filter(Boolean)
        .sort(compareVersions)
        .reverse(),
);

const selectedVersionLabel = computed(
    () => selectedVersion.value || downloadText("versionPending"),
);

const filteredReleaseFiles = computed(() =>
    filesForSelectedPlatform.value.filter(
        (file) => file.version === selectedVersion.value,
    ),
);

const serverInstallCommands = computed(() => ({
    x86: [
        {
            id: "server-linux-x86-primary",
            label: downloadText("install.line1"),
            command:
                "bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)",
        },
        {
            id: "server-linux-x86-mirror",
            label: downloadText("install.line2"),
            command:
                "bash <(curl -s -L -k https://rustminersystem.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)",
        },
    ],
    arm: [
        {
            id: "server-linux-arm",
            label: downloadText("install.arm"),
            command:
                "bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/arm-install.sh)",
        },
    ],
    armv7: [
        {
            id: "server-linux-armv7",
            label: downloadText("install.armv7"),
            command:
                "bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/armv7-install.sh)",
        },
    ],
}));

const rmsInstallCommands = computed(() => ({
    linux: [
        {
            id: "rms-linux-primary",
            label: downloadText("install.line1"),
            command:
                "bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)",
        },
        {
            id: "rms-linux-mirror",
            label: downloadText("install.line2"),
            command:
                "bash <(curl -s -L -k https://rustminersystem.com/install.sh)",
        },
    ],
    openwrt: [
        {
            id: "rms-openwrt",
            label: downloadText("install.openwrt"),
            command:
                "wget -N https://rustminersystem.com/install.sh; chmod +x ./install.sh; ./install.sh",
        },
    ],
}));

const visibleInstallCommands = computed(() => {
    if (isRmsDownloadPage.value) {
        return rmsInstallCommands.value[selectedOs.value] || [];
    }

    if (!isServerDownloadPage.value || selectedOs.value !== "linux") return [];

    return serverInstallCommands.value[selectedArch.value] || [];
});

const activeMethodHintKey = computed(() => {
    if (isRmsDownloadPage.value && selectedOs.value === "openwrt") {
        return "methodHint.openwrt";
    }

    return visibleInstallCommands.value.length
        ? "methodHint.linux"
        : "methodHint.standalone";
});

const currentRepositoryDirectory = computed(() => {
    const directory = isRmsDownloadPage.value
        ? rmsBinaryDirectoryByArch[selectedArch.value] || "x86_64-musl"
        : serverBinaryDirectories.includes(selectedOs.value)
          ? selectedOs.value
          : "linux";
    const label = isRmsDownloadPage.value
        ? selectedArchLabel.value
        : selectedOsLabel.value;

    return {
        label: downloadText("openDirectory", {
            directory: label,
        }),
        href: `${repositoryRootUrl.value}/tree/${repositoryBranch}/${directory}`,
    };
});

const inferArch = (entry, os) => {
    const normalizedPath = `${entry.path}/${entry.name}`.toLowerCase();

    if (
        /(^|[/._-])armv?7l?($|[/._-])/.test(normalizedPath) ||
        /(^|[/._-])(arm32|armhf)($|[/._-])/.test(normalizedPath)
    ) {
        return "armv7";
    }

    if (/(^|[/._-])(aarch64|arm64|arm)($|[/._-])/.test(normalizedPath)) {
        return "arm";
    }

    if (
        /(^|[/._-])(x86_64|amd64|x64|x86|i386|i686)($|[/._-])/.test(
            normalizedPath,
        )
    ) {
        return "x86";
    }

    if (os === "windows") return "x86";

    return "x86";
};

const extractVersion = (path) => {
    if (isRmsDownloadPage.value) return downloadText("version.rms3");

    const match = path.match(/(?:^|[-_.v/])(\d+(?:[-_.]\d+){1,3})(?:\D|$)/i);

    if (!match) return downloadText("unknownVersion");

    return `v${match[1].replace(/[-_]/g, ".")}`;
};

const getFileExtension = (name) => {
    const normalizedName = name.toLowerCase();
    const segments = normalizedName.split(".");

    return segments.length > 1 ? segments.at(-1) : "";
};

const isBinaryCandidate = (entry) => {
    if (entry.type !== "file") return false;

    const extension = getFileExtension(entry.name);

    return !skippedFileExtensions.has(extension);
};

const normalizeReleaseFile = (entry) => {
    if (isRmsDownloadPage.value) return normalizeRmsReleaseFile(entry);

    const os = entry.path.startsWith("windows/") ? "windows" : "linux";
    const downloadUrl =
        entry.download_url ||
        `https://raw.githubusercontent.com/${repositoryOwner}/${activeRepositoryName.value}/${repositoryBranch}/${entry.path}`;

    return {
        arch: inferArch(entry, os),
        downloadUrl,
        htmlUrl: entry.html_url,
        name: entry.name,
        os,
        path: entry.path,
        size: entry.size || 0,
        version: extractVersion(`${entry.path}/${entry.name}`),
    };
};

const normalizeRmsReleaseFile = (entry) => {
    const rootDirectory = entry.path.split("/")[0];
    const arch =
        Object.entries(rmsBinaryDirectoryByArch).find(
            ([, directory]) => directory === rootDirectory,
        )?.[0] || "x86";
    const os = rootDirectory.startsWith("windows") ? "windows" : "linux";
    const downloadUrl =
        entry.download_url ||
        `https://raw.githubusercontent.com/${repositoryOwner}/${activeRepositoryName.value}/${repositoryBranch}/${entry.path}`;

    return {
        arch,
        downloadUrl,
        htmlUrl: entry.html_url,
        name: entry.name,
        os,
        path: entry.path,
        size: entry.size || 0,
        version: downloadText("version.rms3"),
    };
};

const fetchDirectory = async (directory) => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);

    try {
        const response = await fetch(
            `${repositoryContentsApi.value}/${directory}?ref=${repositoryBranch}`,
            {
                cache: "no-store",
                headers: {
                    Accept: "application/vnd.github+json",
                },
                signal: controller.signal,
            },
        );

        if (!response.ok) {
            throw new Error(downloadText("fetchError"));
        }

        const entries = await response.json();

        if (!Array.isArray(entries)) return [];

        const childDirectories = entries.filter(
            (entry) => entry.type === "dir",
        );
        const childFiles = entries.filter(isBinaryCandidate);
        const nestedFiles = await Promise.all(
            childDirectories.map((entry) => fetchDirectory(entry.path)),
        );

        return [...childFiles, ...nestedFiles.flat()];
    } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
            throw new Error(downloadText("fetchError"));
        }

        throw error;
    } finally {
        window.clearTimeout(timeoutId);
    }
};

const loadReleaseFiles = async () => {
    if (!hasDownloadFinder.value) return;

    isLoadingReleases.value = true;
    releaseError.value = "";

    try {
        const directoryResults = await Promise.allSettled(
            binaryDirectories.value.map((directory) =>
                fetchDirectory(directory),
            ),
        );
        const directoryFiles = directoryResults.flatMap((result) =>
            result.status === "fulfilled" ? result.value : [],
        );

        if (!directoryFiles.length) {
            throw new Error(downloadText("fetchError"));
        }

        releaseFiles.value = directoryFiles
            .map(normalizeReleaseFile)
            .sort((first, second) => second.size - first.size);
    } catch (error) {
        releaseFiles.value = [];
        releaseError.value =
            error instanceof Error ? error.message : downloadText("fetchError");
    } finally {
        isLoadingReleases.value = false;
    }
};

const copyInstallCommand = async (command) => {
    try {
        await window.navigator.clipboard.writeText(command.command);
        copiedCommandId.value = command.id;
        window.setTimeout(() => {
            if (copiedCommandId.value === command.id) {
                copiedCommandId.value = "";
            }
        }, 1800);
    } catch {
        copiedCommandId.value = "";
    }
};

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

watch(selectedOs, () => {
    const archValues = availableArchOptions.value.map((option) => option.value);

    if (!archValues.includes(selectedArch.value)) {
        selectedArch.value = archValues[0] || "x86";
    }
});

watch(
    availableVersions,
    (versions) => {
        if (!versions.includes(selectedVersion.value)) {
            selectedVersion.value = versions[0] || "";
        }
    },
    { immediate: true },
);

const getPreferredOs = () =>
    typeof window !== "undefined" &&
    window.navigator.userAgent.toLowerCase().includes("windows")
        ? "windows"
        : "linux";

watch(currentDownloadPage, () => {
    releaseFiles.value = [];
    releaseError.value = "";
    copiedCommandId.value = "";
    selectedVersion.value = "";
    selectedOs.value = getPreferredOs();

    const archValues = availableArchOptions.value.map((option) => option.value);
    selectedArch.value = archValues[0] || "x86";

    if (hasDownloadFinder.value) {
        loadReleaseFiles();
    }
});

onMounted(() => {
    selectedOs.value = getPreferredOs();

    loadReleaseFiles();
});
</script>

<style scoped>
.download-page {
    background-color: var(--color-neutral-950);
    background-image: linear-gradient(
        180deg,
        color-mix(in oklab, #2c3437 50%, transparent) 0%,
        color-mix(in oklab, #2c3437 0%, transparent) 48.32%
    );
    box-sizing: border-box;
    display: grid;
    place-items: center;
    min-height: calc(100vh - 4rem);
    padding: clamp(4rem, 9vw, 8rem) 1rem;
    width: 100%;
}

.download-shell {
    display: grid;
    gap: 1.75rem;
    margin: 0 auto;
    max-width: 70rem;
    min-width: 0;
    width: 100%;
}

.download-hero {
    align-items: center;
    display: grid;
    gap: 2rem;
    min-width: 0;
}

.download-hero-copy {
    display: grid;
    justify-items: start;
    min-width: 0;
}

.hero-description {
    max-width: 45rem;
}

h1,
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

.download-hero-copy p {
    color: var(--color-neutral-300);
    font-size: var(--text-base);
    line-height: 1.75;
    margin-bottom: 1rem;
}

.guide-link {
    align-items: center;
    background: rgb(34 197 94 / 12%);
    border: 1px solid rgb(134 239 172 / 18%);
    border-radius: 6px;
    color: var(--color-green-300);
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    gap: 0.5rem;
    min-height: 2.5rem;
    padding: 0.625rem 0.875rem;
    text-decoration: none;
}

.guide-link:hover,
.guide-link:focus-visible {
    background: rgb(34 197 94 / 18%);
    color: var(--color-green-200);
    outline: none;
}

.guide-link svg {
    height: 1rem;
    width: 1rem;
}

.download-hero-visual {
    background: rgb(13 18 28 / 64%);
    border: 1px solid var(--color-neutral-900);
    border-radius: 8px;
    display: none;
    gap: 1rem;
    padding: 1rem;
}

.miner-nodes {
    display: grid;
    gap: 0.625rem;
}

.miner-node,
.system-node,
.target-node {
    background: rgb(9 14 22 / 76%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    color: var(--color-neutral-200);
}

.miner-node {
    align-items: center;
    display: grid;
    gap: 0.625rem;
    grid-template-columns: auto minmax(0, 1fr);
    min-height: 2.75rem;
    padding: 0.625rem 0.75rem;
}

.miner-node svg,
.system-node svg {
    color: var(--color-green-400);
    height: 1rem;
    width: 1rem;
}

.miner-node span,
.system-node span,
.target-node span {
    font-size: var(--text-sm);
    line-height: 1.45;
}

.connection-lines {
    display: grid;
    gap: 0.375rem;
    padding: 0 0.5rem;
}

.connection-lines span {
    background: linear-gradient(
        90deg,
        rgb(34 197 94 / 18%),
        rgb(56 189 248 / 58%),
        rgb(34 197 94 / 18%)
    );
    border-radius: 999px;
    display: block;
    height: 2px;
}

.system-node {
    align-items: start;
    display: grid;
    gap: 0.375rem 0.625rem;
    grid-template-columns: auto minmax(0, 1fr);
    padding: 0.875rem;
}

.system-node strong {
    color: var(--color-white);
    font-size: var(--text-base);
    line-height: 1.25;
}

.system-node span {
    color: var(--color-neutral-400);
    grid-column: 2;
}

.target-node {
    border-color: rgb(56 189 248 / 18%);
    padding: 0.75rem 0.875rem;
    text-align: center;
}

.target-node span {
    color: var(--color-neutral-300);
    font-weight: var(--font-weight-semibold);
}

.download-finder {
    background: rgb(13 18 28 / 78%);
    border: 1px solid var(--color-neutral-900);
    border-radius: 8px;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 22%);
    display: grid;
    gap: 1.25rem;
    padding: 1rem;
}

.finder-header {
    display: grid;
    gap: 1rem;
}

.finder-header h2 {
    color: var(--color-white);
    font-size: var(--text-xl);
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 0.5rem;
}

.finder-header p,
.release-state p {
    color: var(--color-neutral-400);
    line-height: 1.65;
    margin: 0;
}

.download-link,
.directory-link {
    align-items: center;
    border-radius: 6px;
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    gap: 0.5rem;
    justify-content: center;
    text-decoration: none;
}

.download-link svg,
.directory-link svg {
    height: 1rem;
    width: 1rem;
}

.method-hint {
    align-items: start;
    background: rgb(34 197 94 / 8%);
    border: 1px solid rgb(134 239 172 / 16%);
    border-radius: 8px;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: auto minmax(0, 1fr);
    padding: 0.875rem 1rem;
}

.method-hint svg {
    color: var(--color-green-400);
    height: 1rem;
    margin-top: 0.25rem;
    width: 1rem;
}

.method-hint p {
    color: var(--color-neutral-300);
    font-size: var(--text-sm);
    line-height: 1.65;
    margin: 0;
}

.filter-grid {
    display: grid;
    gap: 0.875rem;
    grid-template-columns: 1fr;
}

.filter-field {
    display: grid;
    gap: 0.5rem;
    min-width: 0;
}

.filter-field span {
    color: var(--color-neutral-400);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
}

.filter-trigger {
    background: rgb(9 14 22 / 92%);
    border: 1px solid var(--color-neutral-800, #2c3437);
    border-radius: 6px;
    color: var(--color-white);
    min-height: 2.75rem;
    padding-inline: 0.8rem;
    width: 100%;
}

.filter-trigger:focus-visible,
.filter-trigger[data-state="open"] {
    border-color: rgb(74 222 128 / 62%);
    box-shadow: none;
    outline: none;
}

.filter-trigger[data-disabled] {
    cursor: not-allowed;
    opacity: 0.58;
}

:global(.download-select-content) {
    background: rgb(9 14 22 / 98%);
    border-color: var(--color-neutral-800, #2c3437);
    color: var(--color-white);
    min-width: var(--reka-select-trigger-width, 8rem);
    width: var(--reka-select-trigger-width, auto);
}

:global(.download-select-item) {
    color: var(--color-neutral-200);
}

:global(.download-select-item[data-highlighted]) {
    background: rgb(34 197 94 / 14%);
    color: var(--color-white);
}

:global(.download-select-item[data-state="checked"]) {
    color: var(--color-green-300);
}

.install-panel,
.binary-panel {
    background:
        linear-gradient(180deg, rgb(255 255 255 / 5%), transparent),
        rgb(9 14 22 / 72%);
    border: 1px solid rgb(134 239 172 / 16%);
    border-radius: 8px;
    display: grid;
    gap: 1rem;
    padding: 1rem;
}

.install-header,
.binary-header {
    align-items: start;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: auto minmax(0, 1fr);
}

.install-header > svg,
.binary-header > svg {
    color: var(--color-green-400);
    height: 1.25rem;
    margin-top: 0.125rem;
    width: 1.25rem;
}

.install-header h3,
.binary-header h3 {
    color: var(--color-white);
    font-size: var(--text-lg);
    font-weight: 700;
    line-height: 1.25;
    margin: 0 0 0.375rem;
}

.install-header p,
.binary-header p {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.65;
    margin: 0;
}

.binary-header-copy {
    min-width: 0;
}

.install-command-list {
    display: grid;
    gap: 0.75rem;
}

.install-command {
    background: rgb(2 6 23 / 64%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    overflow: hidden;
}

.install-command-heading {
    align-items: center;
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    padding: 0.75rem 0.875rem;
}

.install-command-heading > span {
    color: var(--color-neutral-200);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
}

.copy-button {
    align-items: center;
    background: rgb(34 197 94 / 12%);
    border: 1px solid rgb(134 239 172 / 18%);
    border-radius: 6px;
    color: var(--color-green-300);
    cursor: pointer;
    display: inline-flex;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    gap: 0.375rem;
    min-height: 2rem;
    padding: 0.375rem 0.625rem;
}

.copy-button:hover,
.copy-button:focus-visible {
    background: rgb(34 197 94 / 18%);
    outline: none;
}

.copy-button svg {
    height: 0.875rem;
    width: 0.875rem;
}

.install-command pre {
    margin: 0;
    overflow-x: auto;
    padding: 0.875rem;
}

.install-command code {
    color: var(--color-neutral-100);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    line-height: 1.55;
    white-space: pre;
}

.release-list {
    display: grid;
    gap: 0.75rem;
}

.release-row {
    align-items: center;
    background: rgb(9 14 22 / 74%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    padding: 1rem;
}

.release-copy {
    min-width: 0;
}

.release-copy span {
    color: var(--color-green-400);
    display: block;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.375rem;
}

.release-copy h3 {
    color: var(--color-white);
    font-size: var(--text-base);
    font-weight: var(--font-weight-semibold);
    line-height: 1.35;
    margin: 0 0 0.375rem;
    overflow-wrap: anywhere;
}

.release-copy p {
    color: var(--color-neutral-500);
    font-size: var(--text-xs);
    line-height: 1.5;
    margin: 0;
    overflow-wrap: anywhere;
}

.download-link {
    background: var(--color-green-400);
    color: rgb(3 7 18);
    min-height: 2.75rem;
    padding: 0.75rem 1rem;
}

.download-link:hover,
.download-link:focus-visible {
    background: var(--color-green-300);
    outline: none;
}

.directory-link {
    border: 1px solid rgb(255 255 255 / 12%);
    color: var(--color-neutral-300);
    min-height: 2.25rem;
    padding: 0.5rem 0.75rem;
}

.finder-directory-link {
    justify-self: start;
    min-height: 2.5rem;
}

.directory-link:hover,
.directory-link:focus-visible {
    border-color: rgb(74 222 128 / 45%);
    color: var(--color-white);
    outline: none;
}

@media (min-width: 720px) {
    .download-page {
        padding-inline: 1.5rem;
    }

    h1 {
        font-size: var(--text-5xl);
    }

    .download-hero-copy p {
        font-size: var(--text-lg);
    }

    .download-finder {
        padding: 1.375rem;
    }

    .finder-header {
        align-items: start;
        grid-template-columns: minmax(0, 1fr) auto;
    }

    .filter-grid {
        align-items: end;
        grid-template-columns: repeat(3, max-content);
    }

    .filter-field-os {
        width: 9.25rem;
    }

    .filter-field-arch {
        width: 8.25rem;
    }

    .download-finder-rms .filter-field-arch {
        width: 11.75rem;
    }

    .filter-field-version {
        width: 10.5rem;
    }

    .finder-directory-link {
        justify-self: end;
        white-space: nowrap;
    }

    .release-row {
        grid-template-columns: minmax(0, 1fr) auto;
    }
}

@media (min-width: 1024px) {
    h1 {
        font-size: 4rem;
    }

    .download-hero {
        gap: 2.5rem;
        grid-template-columns: minmax(0, 1fr) minmax(22rem, 26rem);
    }

    .download-hero-visual {
        align-self: stretch;
        display: grid;
        padding: 1.25rem;
    }

    .download-finder {
        padding: 1.5rem;
    }
}

@media (min-width: 1280px) {
    .download-shell {
        max-width: 76rem;
    }

    .download-hero {
        gap: 3rem;
        grid-template-columns: minmax(0, 1fr) minmax(24rem, 28rem);
    }

    h1 {
        font-size: 4.25rem;
    }
}
</style>
