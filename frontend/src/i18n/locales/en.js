// 英文语言包：只维护该语言的展示文案，key 结构需要与其他语言保持一致。
// 新增页面或导航文案时，请同步补齐 en / zh / ru 三个文件。

export default {
    site: {
        name: "RustMinerSystem",
        shortName: "RMS",
    },
    seo: {
        defaultTitle: "RustMinerSystem - Mining system and pool node toolkit",
        titleTemplate: "{pageTitle} | RustMinerSystem",
        home: {
            title: "RustMinerSystem",
            description:
                "RustMinerSystem gives mining operators one entry point for traditional pool proxying, self-hosted pool nodes, and the RMS secure client.",
        },
        document: {
            title: "Documentation",
            description:
                "Read RustMinerSystem documentation for deployment, server configuration, node setup, and operations.",
        },
        customized: {
            title: "Customized Version",
            description:
                "Request a tailored RustMinerSystem build for private mining pools, branded applications, and advanced operations.",
        },
        about: {
            title: "About",
            description:
                "Learn about RustMinerSystem, its product direction, and the operational tooling behind the project.",
        },
    },
    nav: {
        skip: "Skip to main content",
        primary: "Primary navigation",
        mobile: "Mobile navigation",
        home: "Home",
        download: "Download",
        document: "Documentation",
        customized: "Customized version",
        about: "About",
        server: "Server",
        app: "App",
        openMenu: "Open navigation menu",
        closeMenu: "Close navigation menu",
        language: "Language",
        currentLanguage: "Current language",
        github: "Open RustMinerSystem on GitHub",
        downloads: {
            server: "RustMinerSystem Server",
            rms: "RMS Node",
            desktop: "RustMinerSystem App",
            poolNode: "PoolNode",
        },
    },
    footer: {
        brandLabel: "RustMinerSystem footer",
        navigation: "Footer navigation",
        product: "Product",
        community: "Community",
        github: "GitHub",
        description:
            "RustMinerSystem keeps mining deployment, node operations, and secure transport links in one focused web surface.",
        copyright: "© {year} RustMinerSystem. All rights reserved.",
    },
    home: {
        eyebrow: "Full-chain cryptocurrency mining solution",
        title: "RustMinerSystem",
        description:
            "Use it as a traditional pool proxy or turn your device into a real pool node. The companion RMS local secure client encrypts and compresses traffic to reduce bandwidth pressure and improve transport safety.",
        primaryCta: "View downloads",
        secondaryCta: "Read docs",
        featuresTitle: "Pool access, node operations, and secure transport",
        features: {
            deployment: {
                title: "Two operating modes",
                text: "Proxy traditional mining pools or build a self-hosted pool node, depending on your site and revenue strategy.",
            },
            operations: {
                title: "RMS secure client",
                text: "Encrypt and compress miner traffic to reduce bandwidth pressure while lowering man-in-the-middle risk.",
            },
            localization: {
                title: "Cross-platform deployment",
                text: "Ship Windows, Linux, ARM, and ARMV7 builds, with one-command deployment for Linux environments.",
            },
        },
        downloadsTitle: "Downloads",
        downloadsDescription:
            "Get the RustMinerSystem server, RMS client, and PoolNode app. The repository publishes Windows, Linux, ARM, and ARMV7 packages.",
        releaseLink: "Open release center",
    },
    document: {
        eyebrow: "Documentation",
        title: "Deploy and operate RustMinerSystem",
        description:
            "This page gives crawlers and users a stable documentation entry point for installation, configuration, and operations.",
        sections: {
            install: {
                title: "Installation",
                text: "Prepare the server package, configure runtime settings, then verify the node before joining production workloads.",
            },
            configure: {
                title: "Configuration",
                text: "Keep pool endpoints, worker credentials, logging, and update channels documented in one canonical location.",
            },
            operate: {
                title: "Operations",
                text: "Monitor release notes, restart policies, and recovery procedures before upgrading production nodes.",
            },
        },
    },
    customized: {
        eyebrow: "Custom delivery",
        title: "Customized RustMinerSystem versions",
        description:
            "Plan private pool features, branded applications, deployment automation, and region-specific onboarding flows.",
        points: {
            branding: {
                title: "Brand packaging",
                text: "Align app names, visual assets, and navigation labels with your team or pool identity.",
            },
            integrations: {
                title: "Operational integrations",
                text: "Connect release flows, node dashboards, and internal support paths to your existing systems.",
            },
            localization: {
                title: "Localized rollout",
                text: "Ship English, Chinese, and Russian copy from the same route-aware translation foundation.",
            },
        },
    },
    about: {
        eyebrow: "About",
        title: "A focused web surface for RustMinerSystem",
        description:
            "The site is structured for international users, search engines, and operators who need fast access to downloads and documentation.",
    },
};
