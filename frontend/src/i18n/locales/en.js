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
                "RustMinerSystem lets operators run a third-party pool proxy that allocates any configured share of connected hashrate to specified pool wallets, or build a real pool with PoolNode and distribute fees at the coin settlement layer. For miner access, sites can connect directly to RustMiner over traditional TCP/SSL or pair it with the optional RMS client for local encrypted compression.",
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
        server: "Server components",
        app: "Mobile apps",
        openMenu: "Open navigation menu",
        closeMenu: "Close navigation menu",
        language: "Language",
        currentLanguage: "Current language",
        github: "Open RustMinerSystem on GitHub",
        downloads: {
            server: "RustMinerSystem Core Server",
            rms: "RMS Secure Client",
            mobile: "RustMinerSystem Mobile App",
            poolNode: "PoolNode Mobile App",
        },
    },
    footer: {
        brandLabel: "RustMinerSystem footer",
        navigation: "Footer navigation",
        product: "Product",
        community: "Community",
        github: "GitHub",
        telegram: "Telegram",
        discord: "Discord",
        description:
            "RustMinerSystem is an operations entry point for mining access: combine third-party pool Proxy, PoolNode real-pool deployment, and optional RMS encrypted compression for different site topologies.",
        copyright: "© {year} RustMinerSystem. All rights reserved.",
    },
    home: {
        eyebrow: "Third-party pool proxy and PoolNode real-pool system",
        title: "RustMinerSystem",
        description:
            "RustMinerSystem covers two core paths. It can act as a proxy for third-party mining pools and allocate any configured share of connected miner hashrate to specified third-party pool wallets. It can also use PoolNode to build a real self-owned mining pool, where configured fees are distributed directly at the coin settlement layer. For miner access, sites can connect directly to RustMiner over traditional TCP/SSL; RMS is also available as an optional companion tool for sites that want lower bandwidth usage and fewer public connections through a local encrypted compression link.",
        primaryCta: "View downloads",
        secondaryCta: "Read docs",
        secondaryCtaNote: "Deployment, configuration, and operations",
        poolLinksLabel: "Third-party mining pool website links",
        partnerNote:
            "RustMinerSystem is honored to be supported by these and more partners.",
        preview: {
            label: "RustMinerSystem software dashboard preview",
            imageAlt:
                "RustMinerSystem mining proxy operations animated preview",
            minersLabel: "Third-party pool proxy",
            minersValue: "Allocation active",
            networkLabel: "Optional RMS compression",
            networkValue: "128:1 links",
            profitLabel: "PoolNode real pool",
            profitValue: "Settlement-layer fees",
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
        loadingBadge: "...",
        unavailableBadge: "N/A",
        latestRelease: "Latest Release",
        latestReleaseLoading: "Checking release",
        latestReleaseError: "Release unavailable",
        latestReleaseAria: "RustMinerSystem {version} Latest Release",
        latestReleaseLoadingAria: "Checking the latest RustMinerSystem release",
        latestReleaseErrorAria:
            "Unable to load the latest RustMinerSystem release",
        githubStars: "GitHub Stars",
        githubStarsLoading: "Checking stars",
        githubStarsError: "Stars unavailable",
        githubStarsAria:
            "EvilGenius-dot/RustMinerSystem has {count} GitHub stars",
        githubStarsLoadingAria:
            "Checking GitHub stars for EvilGenius-dot/RustMinerSystem",
        githubStarsErrorAria:
            "Unable to load GitHub stars for EvilGenius-dot/RustMinerSystem",
    },
    download: {
        eyebrow: "Download",
        installGuideLink: "View installation guide",
        pages: {
            server: {
                title: "RustMinerSystem Core Server Download",
                heading: "RustMinerSystem Core Server",
                description:
                    "Prepare the server program for mining access, third-party pool proxying, and PoolNode deployments. Choose the right system, architecture, and version, then install with a command or deploy a standalone file manually.",
            },
            rms: {
                title: "RMS Secure Client Download",
                heading: "RMS Secure Client",
                description:
                    "RMS is the local secure client for tunneling, data compression, encryption, and public connection compression. Choose the system, architecture, or Windows variant, then install with a command or deploy a standalone file manually.",
            },
            mobile: {
                title: "RustMinerSystem Mobile App Download",
                description:
                    "Dedicated download page for the RustMinerSystem Mobile App. App packages and platform notes will be listed here.",
            },
            "pool-node": {
                title: "PoolNode Mobile App Download",
                description:
                    "Dedicated download page for the PoolNode Mobile App. App packages and platform notes will be listed here.",
            },
        },
        server: {
            finderTitle: "Choose a server build",
            selectionSummary: "Get RustMinerSystem {version} for {os} {arch}",
            refresh: "Refresh list",
            osLabel: "Operating system",
            archLabel: "Architecture",
            versionLabel: "Version",
            versionPending: "Detecting version",
            unknownVersion: "Unknown version",
            loading:
                "Reading the windows and linux directories from the GitHub repository.",
            empty: "No downloadable files match the selected filters.",
            fetchError:
                "Unable to read the GitHub file list right now. Try again later or open the repository directory.",
            download: "Download",
            openDirectory: "Open {directory} standalone files on GitHub",
            methodHint: {
                linux: "Two installation methods are available below: beginners should start with the Linux command installer and follow the terminal prompts; standalone files are for users who want to configure startup, auto-start, and process supervision themselves.",
                standalone:
                    "This platform provides standalone files: after downloading, start the program manually and configure auto-start or process supervision yourself.",
            },
            binary: {
                title: "Standalone file download",
                description:
                    "For users familiar with deployment: download the standalone file, start it manually, then configure process supervision for your environment.",
            },
            os: {
                linux: "Linux",
                windows: "Windows",
            },
            arch: {
                x86: "x86",
                arm: "ARM",
                armv7: "ARMv7",
            },
            visual: {
                label: "Diagram of miners connecting to RustMinerSystem",
                miners: "Miner fleet",
                fieldProxy: "Site access node",
                remoteNode: "RustMiner host server",
                system: "RustMinerSystem",
                systemHint: "Unified access, allocation, and proxying",
                target: "Third-party pool / PoolNode",
            },
            install: {
                title: "Install with Linux command",
                description:
                    "Copy the command for {arch} into your server terminal, then follow the prompts to complete installation.",
                line1: "Line 1",
                line2: "Line 2",
                arm: "ARM",
                armv7: "ARMv7",
                copy: "Copy",
                copied: "Copied",
            },
        },
        rms: {
            finderTitle: "Choose an RMS client",
            selectionSummary: "Get RMS {version} for {os} {arch}",
            osLabel: "Operating system",
            archLabel: "Architecture / type",
            versionLabel: "Version",
            versionPending: "Detecting version",
            unknownVersion: "Unknown version",
            loading:
                "Reading RMS client directories from the GitHub repository.",
            empty: "No downloadable files match the selected filters.",
            fetchError:
                "Unable to read the GitHub file list right now. Try again later or open the repository directory.",
            download: "Download",
            openDirectory: "Open {directory} standalone files on GitHub",
            version: {
                rms3: "RMS3",
            },
            methodHint: {
                linux: "Two installation methods are available below: beginners should start with the RMS3 command installer and follow the terminal prompts; standalone files are for users who want to configure startup and process supervision themselves.",
                openwrt:
                    "OpenWRT can use the command installer. Because OpenWRT builds vary widely, download the matching standalone file for manual deployment if the script is not compatible.",
                standalone:
                    "This platform provides standalone files: after downloading, start the program manually and configure auto-start or process supervision yourself. If the Windows GUI shows a blank screen, install WebView2 from the same directory.",
            },
            binary: {
                title: "RMS standalone file download",
                description:
                    "For users familiar with deployment: download the matching standalone file, start RMS manually, then configure process supervision for your environment.",
            },
            os: {
                linux: "Linux",
                openwrt: "OpenWRT",
                windows: "Windows",
            },
            arch: {
                x86: "x86_64",
                aarch64: "ARM64 / aarch64",
                arm: "ARM",
                armhf: "ARMHF",
                armv7: "ARMv7",
                armv7hf: "ARMv7HF",
                windowsGui: "Windows GUI",
                windowsCli: "Windows CLI",
            },
            visual: {
                label: "Diagram of miners connecting to RustMiner through the RMS secure client",
                miners: "Miner fleet",
                fieldProxy: "Site local network",
                remoteNode: "Access device / router",
                system: "RMS Secure Client",
                systemHint:
                    "Local compression, encryption, and connection pooling",
                target: "RustMiner host server",
            },
            install: {
                title: "Install RMS with command",
                description:
                    "Copy the command for {arch} into the device terminal, then follow the prompts to complete installation.",
                line1: "Line 1",
                line2: "Line 2",
                openwrt: "OpenWRT",
                copy: "Copy",
                copied: "Copied",
            },
        },
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
