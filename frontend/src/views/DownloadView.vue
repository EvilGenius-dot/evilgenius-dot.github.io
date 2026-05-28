<template>
    <main
        id="main-content"
        class="download-page"
        :class="{ 'download-page-app': isPoolNodeDownloadPage }"
    >
        <div
            class="download-shell"
            :class="{ 'download-shell-app': isPoolNodeDownloadPage }"
        >
            <article class="download-hero" aria-labelledby="download-title">
                <div class="download-hero-copy">
                    <h1 id="download-title">
                        {{ pageMeta.heading || pageMeta.title }}
                    </h1>
                    <p class="hero-description">{{ pageMeta.description }}</p>
                    <div v-if="hasHeroActions" class="hero-actions">
                        <RouterLink
                            :to="installationGuidePath"
                            class="guide-link"
                        >
                            <BookOpen aria-hidden="true" />
                            <span>{{ t("download.installGuideLink") }}</span>
                        </RouterLink>
                        <span
                            v-if="hasDownloadFinder"
                            class="latest-version-badge"
                            :class="{
                                'latest-version-badge-error':
                                    latestVersionError &&
                                    !formattedLatestVersion,
                            }"
                        >
                            <BadgeCheck aria-hidden="true" />
                            <span>{{ latestVersionBadgeText }}</span>
                        </span>
                        <span
                            v-if="isPoolNodeDownloadPage"
                            class="latest-version-badge latest-version-badge-app"
                            :class="{
                                'latest-version-badge-error':
                                    latestVersionError &&
                                    !poolNodeLatestReleaseText,
                            }"
                        >
                            <BadgeCheck aria-hidden="true" />
                            <span>{{ poolNodeLatestReleaseBadgeText }}</span>
                        </span>
                    </div>
                </div>

                <div
                    v-if="hasHeroVisual"
                    class="download-hero-visual"
                    :class="{
                        'download-hero-visual-rms': isRmsDownloadPage,
                        'download-hero-visual-server': isServerDownloadPage,
                        'download-hero-visual-app': isPoolNodeDownloadPage,
                    }"
                    role="img"
                    :aria-label="downloadText('visual.label')"
                >
                    <template v-if="isPoolNodeDownloadPage">
                        <div class="poolnode-visual-stage">
                            <figure
                                class="poolnode-phone poolnode-phone-primary"
                            >
                                <img
                                    :src="poolNodeScreenshots[0].src"
                                    :alt="poolNodeScreenshots[0].alt"
                                    decoding="async"
                                    fetchpriority="high"
                                />
                            </figure>
                            <figure
                                class="poolnode-phone poolnode-phone-secondary"
                            >
                                <img
                                    :src="poolNodeScreenshots[1].src"
                                    :alt="poolNodeScreenshots[1].alt"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>
                        </div>
                        <div class="poolnode-visual-summary">
                            <span>{{ downloadText("visual.badge") }}</span>
                            <strong>{{ downloadText("visual.title") }}</strong>
                            <p>{{ downloadText("visual.description") }}</p>
                        </div>
                    </template>
                    <template v-else-if="isRmsDownloadPage">
                        <div class="rms-local-stack">
                            <span class="visual-kicker">
                                {{ downloadText("visual.localLabel") }}
                            </span>
                            <div class="rms-miner-grid">
                                <div
                                    v-for="miner in heroVisualSources"
                                    :key="miner"
                                    class="miner-node rms-miner-node"
                                >
                                    <Cpu aria-hidden="true" />
                                    <span>{{ miner }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="rms-flow-line" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="system-node rms-system-node">
                            <ShieldCheck aria-hidden="true" />
                            <strong>{{ downloadText("visual.system") }}</strong>
                            <span>{{ downloadText("visual.systemHint") }}</span>
                            <div class="rms-capabilities">
                                <span
                                    v-for="capability in rmsVisualCapabilities"
                                    :key="capability"
                                >
                                    {{ capability }}
                                </span>
                            </div>
                        </div>
                        <div class="rms-tunnel">
                            <span>{{
                                downloadText("visual.tunnelLabel")
                            }}</span>
                        </div>
                        <div class="target-node rms-target-node">
                            <Server aria-hidden="true" />
                            <span>{{ downloadText("visual.target") }}</span>
                        </div>
                    </template>
                    <template v-else>
                        <div class="server-ingress-stack">
                            <span class="visual-kicker">
                                {{ downloadText("visual.localLabel") }}
                            </span>
                            <div class="server-ingress-grid">
                                <div class="miner-node server-ingress-node">
                                    <Cpu aria-hidden="true" />
                                    <span>{{
                                        downloadText("visual.miners")
                                    }}</span>
                                </div>
                                <div class="miner-node server-ingress-node">
                                    <Network aria-hidden="true" />
                                    <span>{{
                                        downloadText("visual.fieldProxy")
                                    }}</span>
                                </div>
                                <div class="miner-node server-ingress-node">
                                    <ShieldCheck aria-hidden="true" />
                                    <span>{{
                                        downloadText("visual.remoteNode")
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="server-flow-line" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="system-node server-system-node">
                            <Server aria-hidden="true" />
                            <strong>{{ downloadText("visual.system") }}</strong>
                            <span>{{ downloadText("visual.systemHint") }}</span>
                            <div class="server-capabilities">
                                <span
                                    v-for="capability in serverVisualCapabilities"
                                    :key="capability"
                                >
                                    {{ capability }}
                                </span>
                            </div>
                        </div>
                        <div class="server-route-label">
                            <span>{{ downloadText("visual.routeLabel") }}</span>
                        </div>
                        <div class="server-target-grid">
                            <div class="target-node server-target-node">
                                <GitBranch aria-hidden="true" />
                                <span>{{
                                    downloadText("visual.thirdPartyTarget")
                                }}</span>
                            </div>
                            <div class="target-node server-target-node">
                                <Server aria-hidden="true" />
                                <span>{{
                                    downloadText("visual.poolNodeTarget")
                                }}</span>
                            </div>
                        </div>
                    </template>
                </div>
            </article>

            <section
                v-if="isPoolNodeDownloadPage"
                class="poolnode-download-section"
                aria-labelledby="poolnode-download-title"
            >
                <div class="poolnode-section-copy">
                    <span>{{ downloadText("downloadKicker") }}</span>
                    <h2 id="poolnode-download-title">
                        {{ downloadText("downloadTitle") }}
                    </h2>
                    <p>{{ downloadText("downloadDescription") }}</p>
                </div>

                <div class="poolnode-download-grid">
                    <article
                        v-for="option in poolNodeDownloadOptions"
                        :key="option.id"
                        class="poolnode-platform-card"
                    >
                        <div class="poolnode-platform-heading">
                            <span class="poolnode-platform-icon">
                                <Smartphone aria-hidden="true" />
                            </span>
                            <div>
                                <h3>{{ option.title }}</h3>
                                <p>{{ option.versionLabel }}</p>
                            </div>
                        </div>

                        <div class="poolnode-qr-wrap">
                            <img
                                :src="option.qr"
                                :alt="option.qrAlt"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <p class="poolnode-platform-note">
                            {{ option.note }}
                        </p>

                        <a
                            :href="option.href"
                            class="poolnode-store-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download aria-hidden="true" />
                            <span>{{ option.buttonLabel }}</span>
                        </a>
                    </article>
                </div>

                <div class="poolnode-feature-grid">
                    <article
                        v-for="feature in poolNodeFeatures"
                        :key="feature.title"
                        class="poolnode-feature-card"
                    >
                        <span class="poolnode-feature-icon">
                            <component :is="feature.icon" aria-hidden="true" />
                        </span>
                        <div>
                            <h3>{{ feature.title }}</h3>
                            <p>{{ feature.text }}</p>
                        </div>
                    </article>
                </div>

                <!-- <div class="poolnode-screen-strip">
                    <figure
                        v-for="screen in poolNodeScreenshots"
                        :key="screen.src"
                        class="poolnode-screen-card"
                    >
                        <img
                            :src="screen.src"
                            :alt="screen.alt"
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption>{{ screen.label }}</figcaption>
                    </figure>
                </div> -->
            </section>

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

                    <label
                        v-if="!isRmsDownloadPage"
                        class="filter-field filter-field-version"
                    >
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
                                <span>{{ getReleaseVersionLabel(file) }}</span>
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

            <section
                v-if="hasDownloadFinder"
                class="download-partners"
                aria-labelledby="download-partners-title"
            >
                <div class="partners-copy">
                    <span>{{ t("download.partners.kicker") }}</span>
                    <h2 id="download-partners-title">
                        {{ t("download.partners.title") }}
                    </h2>
                    <p>{{ t("download.partners.description") }}</p>
                </div>

                <div
                    class="partner-grid"
                    :aria-label="t('download.partners.ariaLabel')"
                >
                    <a
                        v-for="partner in partnerLinks"
                        :key="partner.key"
                        :href="partner.href"
                        class="partner-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span class="partner-logo-frame">
                            <img
                                :src="partner.logo"
                                :alt="
                                    t(`download.partners.items.${partner.key}`)
                                "
                                class="partner-logo"
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        <span class="partner-name">
                            {{ t(`download.partners.items.${partner.key}`) }}
                        </span>
                    </a>
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
    BadgeCheck,
    BookOpen,
    Check,
    Clipboard,
    Cpu,
    Download,
    ExternalLink,
    GitBranch,
    Info,
    Network,
    Server,
    ShieldCheck,
    Smartphone,
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
const isPoolNodeDownloadPage = computed(
    () => currentDownloadPage.value === "pool-node",
);
const hasDownloadFinder = computed(
    () => isServerDownloadPage.value || isRmsDownloadPage.value,
);
const hasHeroVisual = computed(
    () =>
        isServerDownloadPage.value ||
        isRmsDownloadPage.value ||
        isPoolNodeDownloadPage.value,
);
const hasHeroActions = computed(
    () => hasDownloadFinder.value || isPoolNodeDownloadPage.value,
);
const hasLatestVersionLookup = computed(
    () => hasDownloadFinder.value || isPoolNodeDownloadPage.value,
);
const downloadTranslationKey = computed(() => {
    if (isRmsDownloadPage.value) return "download.rms";
    if (isPoolNodeDownloadPage.value) return "download.poolNode";

    return "download.server";
});
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
const serverVisualCapabilities = computed(() => [
    downloadText("visual.access"),
    downloadText("visual.allocation"),
    downloadText("visual.proxy"),
]);
const rmsVisualCapabilities = computed(() => [
    downloadText("visual.compression"),
    downloadText("visual.encryption"),
    downloadText("visual.connectionPool"),
]);
const partnerLinks = [
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
const poolNodeAndroidDownloadUrl =
    "https://github.com/EvilGenius-dot/RustMinerSystem/raw/refs/heads/main/APP/PoolNode/Android/PoolNode.apk";
const poolNodeIosDownloadUrl =
    "https://apps.apple.com/hk/app/poolnode/id6754824577";
const poolNodeScreenshots = computed(() => [
    {
        src: "/image/poolnode/overview.jpg",
        alt: downloadText("screens.overviewAlt"),
        label: downloadText("screens.overview"),
    },
    {
        src: "/image/poolnode/hashrate.jpg",
        alt: downloadText("screens.hashrateAlt"),
        label: downloadText("screens.hashrate"),
    },
    {
        src: "/image/poolnode/workers.jpg",
        alt: downloadText("screens.workersAlt"),
        label: downloadText("screens.workers"),
    },
    {
        src: "/image/poolnode/assets.jpg",
        alt: downloadText("screens.assetsAlt"),
        label: downloadText("screens.assets"),
    },
]);
const poolNodeFeatures = computed(() => [
    {
        icon: Network,
        title: downloadText("features.node.title"),
        text: downloadText("features.node.text"),
    },
    {
        icon: Cpu,
        title: downloadText("features.worker.title"),
        text: downloadText("features.worker.text"),
    },
    {
        icon: ShieldCheck,
        title: downloadText("features.asset.title"),
        text: downloadText("features.asset.text"),
    },
]);

const repositoryOwner = "EvilGenius-dot";
const repositoryBranch = "main";
const originManifestUrl =
    "https://raw.githubusercontent.com/EvilGenius-dot/RustMinerSystem/main/origin.json";
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
const latestVersions = ref({
    rustminer: "4.6.7",
    rms: "3.1.10",
    poolNodeAndroid: "1.0.1",
    poolNodeIos: "1.0.1",
});
const latestVersionError = ref(false);
const isLoadingLatestVersions = ref(false);

const formatVersion = (version) => {
    if (!version) return "";

    return /^v/i.test(version) ? version : `v${version}`;
};

const currentLatestVersion = computed(() =>
    isRmsDownloadPage.value
        ? latestVersions.value.rms
        : latestVersions.value.rustminer,
);
const formattedLatestVersion = computed(() =>
    formatVersion(currentLatestVersion.value),
);
const latestVersionBadgeText = computed(() => {
    if (formattedLatestVersion.value) {
        return t("download.latestVersion", {
            version: formattedLatestVersion.value,
        });
    }

    return isLoadingLatestVersions.value
        ? t("download.latestVersionLoading")
        : t("download.latestVersionError");
});
const poolNodeLatestReleaseText = computed(() => {
    const androidVersion = formatVersion(latestVersions.value.poolNodeAndroid);
    const iosVersion = formatVersion(latestVersions.value.poolNodeIos);

    if (!androidVersion && !iosVersion) return "";

    return t("download.poolNode.latestRelease", {
        android: androidVersion || t("download.latestVersionPending"),
        ios: iosVersion || t("download.latestVersionPending"),
    });
});
const poolNodeLatestReleaseBadgeText = computed(() => {
    if (poolNodeLatestReleaseText.value) return poolNodeLatestReleaseText.value;

    return isLoadingLatestVersions.value
        ? t("download.latestVersionLoading")
        : t("download.latestVersionError");
});
const poolNodeDownloadOptions = computed(() => [
    {
        id: "android",
        title: downloadText("platforms.android.title"),
        versionLabel: t("download.latestVersion", {
            version:
                formatVersion(latestVersions.value.poolNodeAndroid) ||
                t("download.latestVersionPending"),
        }),
        note: downloadText("platforms.android.note"),
        buttonLabel: downloadText("platforms.android.button"),
        href: poolNodeAndroidDownloadUrl,
        qr: "/image/poolnode/android-qr.png",
        qrAlt: downloadText("platforms.android.qrAlt"),
    },
    {
        id: "ios",
        title: downloadText("platforms.ios.title"),
        versionLabel: t("download.latestVersion", {
            version:
                formatVersion(latestVersions.value.poolNodeIos) ||
                t("download.latestVersionPending"),
        }),
        note: downloadText("platforms.ios.note"),
        buttonLabel: downloadText("platforms.ios.button"),
        href: poolNodeIosDownloadUrl,
        qr: "/image/poolnode/ios-qr.png",
        qrAlt: downloadText("platforms.ios.qrAlt"),
    },
]);

const osOptions = computed(() => [
    {
        value: "linux",
        label: downloadText("os.linux"),
    },
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
    releaseFiles.value.filter(
        (file) =>
            file.os === selectedOs.value && file.arch === selectedArch.value,
    ),
);

const availableVersions = computed(() =>
    [...new Set(filesForSelectedPlatform.value.map((file) => file.version))]
        .filter(Boolean)
        .sort(compareVersions)
        .reverse(),
);

const selectedVersionLabel = computed(() =>
    isRmsDownloadPage.value
        ? formattedLatestVersion.value || t("download.latestVersionPending")
        : selectedVersion.value || downloadText("versionPending"),
);

const filteredReleaseFiles = computed(() => {
    if (isRmsDownloadPage.value) return filesForSelectedPlatform.value;

    return filesForSelectedPlatform.value.filter(
        (file) => file.version === selectedVersion.value,
    );
});

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
}));

const visibleInstallCommands = computed(() => {
    if (isRmsDownloadPage.value) {
        return rmsInstallCommands.value[selectedOs.value] || [];
    }

    if (!isServerDownloadPage.value || selectedOs.value !== "linux") return [];

    return serverInstallCommands.value[selectedArch.value] || [];
});

const activeMethodHintKey = computed(() =>
    visibleInstallCommands.value.length
        ? "methodHint.linux"
        : "methodHint.standalone",
);

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

const getReleaseVersionLabel = (file) =>
    isRmsDownloadPage.value
        ? formattedLatestVersion.value || file.version
        : file.version;

const loadLatestVersions = async () => {
    if (!hasLatestVersionLookup.value || isLoadingLatestVersions.value) return;

    isLoadingLatestVersions.value = true;
    latestVersionError.value = false;

    try {
        const response = await fetch(originManifestUrl, {
            cache: "no-store",
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) throw new Error("Unable to read origin.json");

        const manifest = await response.json();

        latestVersions.value = {
            rustminer:
                typeof manifest.version === "string"
                    ? manifest.version
                    : latestVersions.value.rustminer,
            rms:
                typeof manifest.RMS === "string"
                    ? manifest.RMS
                    : typeof manifest.rms === "string"
                      ? manifest.rms
                      : latestVersions.value.rms,
            poolNodeAndroid:
                typeof manifest.PoolNodeAndroidVersion === "string"
                    ? manifest.PoolNodeAndroidVersion
                    : latestVersions.value.poolNodeAndroid,
            poolNodeIos:
                typeof manifest.PoolNodeIosVersion === "string"
                    ? manifest.PoolNodeIosVersion
                    : latestVersions.value.poolNodeIos,
        };
    } catch {
        latestVersionError.value = true;
    } finally {
        isLoadingLatestVersions.value = false;
    }
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

    if (hasLatestVersionLookup.value) {
        loadLatestVersions();
    }

    if (hasDownloadFinder.value) {
        loadReleaseFiles();
    }
});

onMounted(() => {
    selectedOs.value = getPreferredOs();

    loadLatestVersions();
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

.download-page-app {
    background-image:
        radial-gradient(
            circle at 78% 12%,
            rgb(124 58 237 / 18%),
            transparent 30rem
        ),
        radial-gradient(
            circle at 16% 34%,
            rgb(34 197 94 / 10%),
            transparent 26rem
        ),
        linear-gradient(
            180deg,
            color-mix(in oklab, #2c3437 42%, transparent) 0%,
            color-mix(in oklab, #2c3437 0%, transparent) 48.32%
        );
    padding-top: clamp(3rem, 6vw, 5.5rem);
    place-items: start center;
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

.hero-actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
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

.latest-version-badge {
    align-items: center;
    background: rgb(56 189 248 / 10%);
    border: 1px solid rgb(125 211 252 / 18%);
    border-radius: 999px;
    color: var(--color-sky-200, #bae6fd);
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    gap: 0.5rem;
    min-height: 2.5rem;
    padding: 0.625rem 0.875rem;
}

.latest-version-badge svg {
    height: 1rem;
    width: 1rem;
}

.latest-version-badge-error {
    background: rgb(248 113 113 / 10%);
    border-color: rgb(248 113 113 / 18%);
    color: rgb(254 202 202);
}

.download-hero-visual {
    background: rgb(13 18 28 / 64%);
    border: 1px solid var(--color-neutral-900);
    border-radius: 8px;
    display: none;
    gap: 1rem;
    padding: 1rem;
}

.download-hero-visual-rms {
    background:
        linear-gradient(135deg, rgb(34 197 94 / 8%), transparent 38%),
        linear-gradient(180deg, rgb(13 18 28 / 80%), rgb(9 14 22 / 88%));
    overflow: hidden;
}

.download-hero-visual-server {
    background:
        linear-gradient(135deg, rgb(56 189 248 / 8%), transparent 38%),
        linear-gradient(180deg, rgb(13 18 28 / 80%), rgb(9 14 22 / 88%));
    overflow: hidden;
}

.download-hero-visual-app {
    background:
        radial-gradient(
            circle at 24% 12%,
            rgb(124 58 237 / 24%),
            transparent 36%
        ),
        radial-gradient(
            circle at 88% 72%,
            rgb(34 197 94 / 18%),
            transparent 32%
        ),
        linear-gradient(180deg, rgb(23 25 48 / 88%), rgb(8 12 26 / 94%));
    border-color: rgb(139 92 246 / 24%);
    overflow: hidden;
    position: relative;
}

.download-hero-visual-app::before {
    background:
        linear-gradient(90deg, rgb(255 255 255 / 0%), rgb(255 255 255 / 9%)),
        linear-gradient(180deg, rgb(124 58 237 / 0%), rgb(124 58 237 / 18%));
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
}

.visual-kicker {
    color: var(--color-neutral-400);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0;
}

.miner-nodes {
    display: grid;
    gap: 0.625rem;
}

.rms-local-stack {
    display: grid;
    gap: 0.75rem;
}

.server-ingress-stack {
    display: grid;
    gap: 0.75rem;
}

.rms-miner-grid {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.server-ingress-grid {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
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

.rms-miner-node {
    align-content: center;
    justify-items: center;
    min-height: 4.25rem;
    padding: 0.75rem 0.5rem;
    text-align: center;
}

.server-ingress-node {
    align-content: center;
    justify-items: center;
    min-height: 4.25rem;
    padding: 0.75rem 0.5rem;
    text-align: center;
}

.rms-miner-node span {
    overflow-wrap: anywhere;
}

.server-ingress-node span {
    overflow-wrap: anywhere;
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

.rms-flow-line {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0 1.25rem;
}

.server-flow-line {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0 1.25rem;
}

.rms-flow-line span {
    background: linear-gradient(
        90deg,
        rgb(34 197 94 / 14%),
        rgb(34 197 94 / 82%)
    );
    border-radius: 999px;
    height: 2px;
    position: relative;
}

.server-flow-line span {
    background: linear-gradient(
        90deg,
        rgb(56 189 248 / 14%),
        rgb(34 197 94 / 82%)
    );
    border-radius: 999px;
    height: 2px;
    position: relative;
}

.rms-flow-line span::after {
    border-bottom: 4px solid transparent;
    border-left: 7px solid rgb(34 197 94 / 82%);
    border-top: 4px solid transparent;
    content: "";
    position: absolute;
    right: -1px;
    top: 50%;
    transform: translateY(-50%);
}

.server-flow-line span::after {
    border-bottom: 4px solid transparent;
    border-left: 7px solid rgb(34 197 94 / 82%);
    border-top: 4px solid transparent;
    content: "";
    position: absolute;
    right: -1px;
    top: 50%;
    transform: translateY(-50%);
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

.rms-system-node {
    background:
        linear-gradient(180deg, rgb(34 197 94 / 10%), transparent),
        rgb(6 18 16 / 78%);
    border-color: rgb(74 222 128 / 28%);
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 4%);
}

.server-system-node {
    background:
        linear-gradient(180deg, rgb(56 189 248 / 10%), transparent),
        rgb(6 15 24 / 78%);
    border-color: rgb(56 189 248 / 28%);
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 4%);
}

.rms-capabilities {
    display: grid;
    gap: 0.5rem;
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 0.25rem;
}

.server-capabilities {
    display: grid;
    gap: 0.5rem;
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 0.25rem;
}

.rms-capabilities span {
    background: rgb(34 197 94 / 10%);
    border: 1px solid rgb(134 239 172 / 14%);
    border-radius: 6px;
    color: var(--color-green-200);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    grid-column: auto;
    line-height: 1.35;
    padding: 0.5rem;
    text-align: center;
}

.server-capabilities span {
    background: rgb(56 189 248 / 10%);
    border: 1px solid rgb(125 211 252 / 14%);
    border-radius: 6px;
    color: var(--color-sky-200, #bae6fd);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    grid-column: auto;
    line-height: 1.35;
    padding: 0.5rem;
    text-align: center;
}

.rms-tunnel {
    align-items: center;
    background:
        linear-gradient(
            90deg,
            rgb(34 197 94 / 0%),
            rgb(56 189 248 / 18%),
            rgb(34 197 94 / 0%)
        ),
        rgb(9 14 22 / 56%);
    border: 1px dashed rgb(56 189 248 / 32%);
    border-radius: 999px;
    color: var(--color-sky-200, #bae6fd);
    display: flex;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    justify-content: center;
    min-height: 2.25rem;
    padding: 0.5rem 1rem;
    text-align: center;
}

.server-route-label {
    align-items: center;
    background:
        linear-gradient(
            90deg,
            rgb(56 189 248 / 0%),
            rgb(34 197 94 / 18%),
            rgb(56 189 248 / 0%)
        ),
        rgb(9 14 22 / 56%);
    border: 1px dashed rgb(134 239 172 / 28%);
    border-radius: 999px;
    color: var(--color-green-200);
    display: flex;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
    justify-content: center;
    min-height: 2.25rem;
    padding: 0.5rem 1rem;
    text-align: center;
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

.rms-target-node {
    align-items: center;
    display: grid;
    gap: 0.625rem;
    grid-template-columns: auto minmax(0, 1fr);
    text-align: left;
}

.server-target-grid {
    display: grid;
    gap: 0.625rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.server-target-node {
    align-items: center;
    display: grid;
    gap: 0.625rem;
    grid-template-columns: auto minmax(0, 1fr);
    min-height: 3.75rem;
    text-align: left;
}

.rms-target-node svg {
    color: var(--color-sky-300, #7dd3fc);
    height: 1rem;
    width: 1rem;
}

.server-target-node svg {
    color: var(--color-green-300);
    height: 1rem;
    width: 1rem;
}

.poolnode-visual-stage {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 22rem;
    position: relative;
    z-index: 1;
}

.poolnode-phone {
    background: rgb(5 8 18);
    border: 1px solid rgb(255 255 255 / 12%);
    box-shadow: 0 1.5rem 3rem rgb(0 0 0 / 42%);
    margin: 0;
    overflow: hidden;
}

.poolnode-phone img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.poolnode-phone-primary {
    aspect-ratio: 415 / 900;
    border-radius: 30px;
    width: min(58%, 13.25rem);
    z-index: 2;
}

.poolnode-phone-secondary {
    aspect-ratio: 415 / 900;
    border-radius: 26px;
    opacity: 0.74;
    position: absolute;
    right: -0.25rem;
    top: 2rem;
    transform: rotate(5deg);
    width: min(44%, 10rem);
    z-index: 1;
}

.poolnode-visual-summary {
    background: rgb(5 8 18 / 68%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    display: grid;
    gap: 0.375rem;
    padding: 0.875rem;
    position: relative;
    z-index: 1;
}

.poolnode-visual-summary span {
    color: rgb(167 139 250);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
}

.poolnode-visual-summary strong {
    color: var(--color-white);
    font-size: var(--text-lg);
    line-height: 1.25;
}

.poolnode-visual-summary p {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.6;
    margin: 0;
}

.poolnode-download-section {
    display: grid;
    gap: 1.25rem;
}

.poolnode-section-copy {
    display: grid;
    gap: 0.625rem;
    max-width: 52rem;
}

.poolnode-section-copy span {
    color: rgb(167 139 250);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
}

.poolnode-section-copy h2 {
    color: var(--color-white);
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
}

.poolnode-section-copy p {
    color: var(--color-neutral-400);
    line-height: 1.7;
    margin: 0;
}

.poolnode-download-grid {
    display: grid;
    gap: 1rem;
}

.poolnode-platform-card {
    background:
        linear-gradient(180deg, rgb(255 255 255 / 5%), transparent),
        rgb(10 13 29 / 78%);
    border: 1px solid rgb(139 92 246 / 20%);
    border-radius: 8px;
    display: grid;
    gap: 1rem;
    padding: 1rem;
}

.poolnode-platform-heading {
    align-items: center;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: auto minmax(0, 1fr);
}

.poolnode-platform-icon,
.poolnode-feature-icon {
    align-items: center;
    background: rgb(124 58 237 / 16%);
    border: 1px solid rgb(167 139 250 / 20%);
    border-radius: 8px;
    color: rgb(196 181 253);
    display: inline-flex;
    height: 2.5rem;
    justify-content: center;
    width: 2.5rem;
}

.poolnode-platform-icon svg,
.poolnode-feature-icon svg {
    height: 1.125rem;
    width: 1.125rem;
}

.poolnode-platform-heading h3,
.poolnode-feature-card h3 {
    color: var(--color-white);
    font-size: var(--text-lg);
    font-weight: 700;
    line-height: 1.25;
    margin: 0 0 0.25rem;
}

.poolnode-platform-heading p,
.poolnode-feature-card p {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.6;
    margin: 0;
}

.poolnode-qr-wrap {
    background: var(--color-white);
    border-radius: 8px;
    justify-self: center;
    padding: 0.75rem;
    width: min(100%, 13.5rem);
}

.poolnode-qr-wrap img {
    aspect-ratio: 1;
    display: block;
    object-fit: contain;
    width: 100%;
}

.poolnode-platform-note {
    color: var(--color-neutral-300);
    font-size: var(--text-sm);
    line-height: 1.65;
    margin: 0;
}

.poolnode-store-link {
    align-items: center;
    background: var(--color-green-400);
    border-radius: 6px;
    color: rgb(3 7 18);
    display: inline-flex;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    gap: 0.5rem;
    justify-content: center;
    min-height: 2.75rem;
    padding: 0.75rem 1rem;
    text-decoration: none;
}

.poolnode-store-link:hover,
.poolnode-store-link:focus-visible {
    background: var(--color-green-300);
    outline: none;
}

.poolnode-store-link svg {
    height: 1rem;
    width: 1rem;
}

.poolnode-feature-grid {
    display: grid;
    gap: 0.875rem;
}

.poolnode-feature-card {
    align-items: start;
    background: rgb(9 14 22 / 64%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: auto minmax(0, 1fr);
    padding: 1rem;
}

.poolnode-screen-strip {
    display: grid;
    gap: 0.875rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.poolnode-screen-card {
    background: rgb(9 14 22 / 64%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    margin: 0;
    overflow: hidden;
}

.poolnode-screen-card img {
    aspect-ratio: 415 / 900;
    display: block;
    height: auto;
    object-fit: cover;
    width: 100%;
}

.poolnode-screen-card figcaption {
    color: var(--color-neutral-300);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    line-height: 1.35;
    padding: 0.75rem;
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

.download-partners {
    border-top: 1px solid rgb(255 255 255 / 10%);
    display: grid;
    gap: 1.125rem;
    justify-items: center;
    padding-top: 1.75rem;
}

.partners-copy {
    display: grid;
    gap: 0.625rem;
    justify-items: center;
    max-width: 46rem;
    text-align: center;
}

.partners-copy span {
    color: var(--color-green-300);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-semibold);
}

.partners-copy h2 {
    color: var(--color-white);
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: 1.25;
    margin: 0;
}

.partners-copy p {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    line-height: 1.7;
    margin: 0;
}

.partner-grid {
    background:
        linear-gradient(180deg, rgb(255 255 255 / 4%), transparent),
        rgb(9 14 22 / 54%);
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 8px;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0.5rem;
    width: 100%;
}

.partner-card {
    align-items: center;
    background: rgb(255 255 255 / 3%);
    border: 1px solid transparent;
    border-radius: 8px;
    color: var(--color-neutral-200);
    display: grid;
    gap: 0.5rem;
    justify-items: center;
    min-height: 6.25rem;
    padding: 0.875rem 0.75rem;
    text-decoration: none;
}

.partner-card:hover,
.partner-card:focus-visible {
    border-color: rgb(74 222 128 / 42%);
    color: var(--color-white);
    outline: none;
}

.partner-logo-frame {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    min-height: 2.75rem;
    width: 100%;
}

.partner-logo {
    display: block;
    height: 2.25rem;
    max-width: 9.25rem;
    object-fit: contain;
    width: 100%;
}

.partner-name {
    color: var(--color-neutral-400);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    justify-self: center;
    line-height: 1.35;
    overflow-wrap: anywhere;
    text-align: center;
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

    .download-finder-rms .filter-grid {
        grid-template-columns: repeat(2, max-content);
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

    .poolnode-download-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .poolnode-feature-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .poolnode-feature-card {
        grid-template-columns: 1fr;
    }

    .poolnode-screen-strip {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .partner-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
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

    .download-shell-app {
        max-width: 78rem;
    }

    .download-page-app .download-hero {
        grid-template-columns: minmax(0, 1fr) minmax(24rem, 31rem);
    }

    .download-finder {
        padding: 1.5rem;
    }

    .partner-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    .partner-card {
        min-height: 6.75rem;
    }
}

@media (min-width: 1280px) {
    .download-shell {
        max-width: 76rem;
    }

    .download-shell-app {
        max-width: 84rem;
    }

    .download-hero {
        gap: 3rem;
        grid-template-columns: minmax(0, 1fr) minmax(24rem, 28rem);
    }

    .download-page-app .download-hero {
        grid-template-columns: minmax(0, 1fr) minmax(29rem, 34rem);
    }

    h1 {
        font-size: 4.25rem;
    }
}
</style>
