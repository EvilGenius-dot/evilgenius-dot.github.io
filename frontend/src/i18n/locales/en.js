// 英文语言包：只维护该语言的展示文案，key 结构需要与其他语言保持一致。
// 新增页面或导航文案时，请同步补齐 en / zh / ru 三个文件。

export default {
    site: {
        name: "RustMinerSystem",
        shortName: "RMS",
    },
    seo: {
        defaultTitle:
            "RustMinerSystem - Third-party pool proxy and PoolNode real pool",
        titleTemplate: "{pageTitle} | RustMinerSystem",
        home: {
            title: "RustMinerSystem",
            description:
                "RustMinerSystem lets operators run a third-party pool proxy that allocates any configured share of connected hashrate to specified pool wallets, or build a real pool with PoolNode and distribute fees at the coin settlement layer.",
        },
        document: {
            title: "Documentation",
            description:
                "Read RustMinerSystem documentation for deployment, server configuration, node setup, and operations.",
        },
        customized: {
            title: "Customized Version",
            description:
                "Request a tailored RustMinerSystem build for third-party pool proxying, PoolNode real-pool mode, branded applications, and advanced operations.",
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
            rms: "RMS Client",
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
            "RustMinerSystem focuses on third-party pool proxying and PoolNode real-pool operations, with RMS available as an optional local compression tool.",
        copyright: "© {year} RustMinerSystem. All rights reserved.",
    },
    home: {
        eyebrow: "Third-party pool proxy and PoolNode real-pool system",
        title: "RustMinerSystem",
        description:
            "RustMinerSystem covers two core paths. It can act as a proxy for third-party mining pools and allocate any configured share of connected miner hashrate to specified third-party pool wallets. It can also use PoolNode to build a real self-owned mining pool, where configured fees are distributed directly at the coin settlement layer. RMS is an optional companion tool for sites that want lower bandwidth usage and fewer public connections, connecting miners to RustMiner over a local encrypted compression link.",
        primaryCta: "View downloads",
        secondaryCta: "Read docs",
        secondaryCtaNote: "Deployment, configuration, and operations",
        poolLinksLabel: "Third-party mining pool website links",
        preview: {
            label: "RustMinerSystem software dashboard preview",
            imageAlt:
                "RustMinerSystem mining proxy operations dashboard screenshot",
            minersLabel: "Connected miners",
            networkLabel: "Public links compressed",
            profitLabel: "Hashrate allocation",
            profitValue: "Allocation policy active",
        },
        featuresTitle:
            "Third-party pool proxy, PoolNode, and optional RMS tooling",
        features: {
            deployment: {
                title: "Third-party pool proxy",
                text: "Use RustMiner as the access proxy for third-party pools, then allocate any share of connected miner hashrate to specified pool wallets or worker names.",
            },
            operations: {
                title: "PoolNode real pool",
                text: "Build your own real mining pool with PoolNode, and distribute configured fees at the coin settlement layer instead of only at the forwarding layer.",
            },
            localization: {
                title: "Optional RMS local compression tool",
                text: "When a site needs network optimization, RMS can run locally so miners connect to RustMiner through an encrypted compressed link, reducing data volume and public connection count. Sites can also connect directly without RMS.",
            },
        },
        global: {
            title: "Run locally, manage hashrate allocation from the cloud",
            description:
                "RustMinerSystem can run on-site at a mining facility or on a cloud server that connects sites across countries and regions. In proxy mode, it allocates any configured share of connected hashrate to third-party pool wallets by site, miner group, or wallet target. In PoolNode mode, it helps build a real pool and applies fee distribution at the coin settlement layer.",
            sites: {
                local: {
                    region: "Local site",
                    title: "Nearby miner access",
                    text: "Handle proxy forwarding, device groups, and hashrate allocation policies inside the mining facility with less public exposure.",
                },
                remote: {
                    region: "Cloud node",
                    title: "Unified regional console",
                    text: "Manage multiple sites from cloud servers and adjust proxy targets, wallet targets, and link policies by region.",
                },
                multi: {
                    region: "Multi-site ops",
                    title: "Multi-wallet allocation",
                    text: "Create independent hashrate shares and third-party pool wallet targets for miners, teams, or partners.",
                },
            },
            visual: {
                coreLabel: "Scheduling core",
                coreTitle: "Hashrate allocation engine",
                coreText:
                    "Coordinates miner access, optional RMS compression, third-party pool wallet allocation, and PoolNode settlement-layer fees.",
                secure: "Local encrypt",
                compress: "Data compress",
                route: "Allocation",
            },
            targets: {
                proxy: {
                    type: "Proxy",
                    title: "Third-party pool proxy",
                    text: "Allocate any share of connected miner hashrate to specified third-party pool wallets.",
                },
                poolNode: {
                    type: "Node",
                    title: "PoolNode real pool",
                    text: "Build a real self-owned pool and distribute configured fees at the coin settlement layer.",
                },
                pool: {
                    type: "Wallet",
                    title: "Specified pool wallet",
                    text: "Route any configured hashrate share to the matching third-party pool address, wallet, or worker name.",
                },
            },
            metrics: {
                operations: "Flexible local deployment and cloud access",
                regionsValue: "Allocation",
                regions: "Manage by site, miner group, or wallet target",
                clientValue: "Optional RMS",
                client: "Compress data volume and public links when needed",
            },
        },
        downloadsTitle: "Download deployment components",
        downloadsDescription:
            "Get the RustMinerSystem server, optional RMS client, and PoolNode app for third-party pool proxying, real-pool PoolNode deployment, hashrate allocation policies, and on-demand local compression.",
        releaseLink: "Open release center",
    },
    document: {
        eyebrow: "Documentation",
        title: "Deploy and operate RustMinerSystem",
        description:
            "This page gives crawlers and users a stable documentation entry point for installation, configuration, and operations.",
        tocTitle: "Contents",
        navigationTitle: "Documentation",
        onThisPage: "On this page",
        readingTime: "Reading time",
        readingTimeValue: "{minutes} min read",
        previousPage: "Previous",
        nextPage: "Next",
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
            "Plan third-party pool proxy strategies, PoolNode real-pool fee rules, branded applications, deployment automation, and region-specific onboarding flows.",
        points: {
            branding: {
                title: "Brand packaging",
                text: "Align app names, visual assets, and navigation labels with your team or pool identity.",
            },
            integrations: {
                title: "Strategy integrations",
                text: "Connect hashrate allocation, third-party pool wallet targets, PoolNode fees, and node dashboards to your existing operations systems.",
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
