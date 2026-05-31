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
                "Create a branded RustMiner build with an admin dashboard, install statistics, built-in fee-ratio management, hot updates, and paid hosted deployment options.",
        },
        about: {
            title: "About",
            description:
                "Learn about RustMinerSystem's product scope, software fee rates, legal disclaimer, community links, and download/deployment infrastructure support.",
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
            mobile: "RustMinerApp Mobile App",
            poolNode: "PoolNode Mobile App",
        },
    },
    localePrompt: {
        title: "Switch language?",
        description:
            "Your browser language looks closer to {language}. Would you like to switch to that version?",
        cancel: "Keep current language",
        confirm: "Switch to {language}",
    },
    footer: {
        brandLabel: "RustMinerSystem footer",
        navigation: "Footer navigation",
        product: "Product",
        community: "Community",
        github: "GitHub",
        telegram: "Telegram",
        telegramEnglish: "Telegram (English)",
        telegramRussian: "Telegram (Russian)",
        discord: "Discord",
        miningPoolPartners: {
            title: "Mining Pool Partners",
            items: {
                viabtc: "ViaBTC",
                f2pool: "F2Pool",
                antpool: "AntPool",
                poolin: "Poolin",
            },
        },
        infrastructurePartners: {
            title: "Cloud and Network Infrastructure Partners",
            items: {
                vultr: "Vultr",
                aws: "Amazon AWS",
                azure: "Microsoft Azure",
                aliyun: "Alibaba Cloud International",
                cloudflare: "Cloudflare",
                github: "GitHub",
            },
        },
        description:
            "RustMinerSystem is built for operators who need more than a pool proxy: route miners to third-party pools with explicit hashrate skimming rules, launch a real PoolNode with settlement-layer fees, and add RMS encrypted compression when bandwidth or public connections become the bottleneck.",
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
        installGuideLink: "Read usage guide",
        latestVersion: "Latest Release {version}",
        latestVersionLoading: "Latest Release",
        latestVersionError: "Latest Release unavailable",
        latestVersionPending: "Latest Release",
        partners: {
            kicker: "Ecosystem support",
            title: "Infrastructure for downloads and deployment",
            description:
                "RustMinerSystem works with cloud services, network infrastructure, and code hosting platforms to support reliable downloads, deployments, and global access.",
            ariaLabel: "RustMinerSystem partner list",
            items: {
                vultr: "Vultr",
                aws: "Amazon AWS",
                azure: "Microsoft Azure",
                aliyun: "Alibaba Cloud International",
                cloudflare: "Cloudflare",
                github: "GitHub",
            },
        },
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
                title: "RustMinerApp Download",
                heading: "RustMinerApp",
                description:
                    "RustMinerApp is the mobile operations console for RustMinerSystem, designed for checking pool proxy, PoolNode, server status, ports, wallets, and worker hashrate data. The app is not live yet, so this page currently presents interface previews and platform status.",
            },
            "pool-node": {
                title: "PoolNode Mobile App Download",
                heading: "PoolNode Mobile App",
                description:
                    "PoolNode Mobile App is the end-user mobile app for pool nodes built on RustMinerSystem, giving pool users a mobile entry for earnings, hashrate, workers, and asset records.",
            },
        },
        rustMinerApp: {
            comingSoonBadge: "App not live yet",
            downloadKicker: "Mobile app preview",
            downloadTitle: "RustMinerApp is being prepared for release",
            downloadDescription:
                "This page is open first as a preview. Install packages, store links, and QR codes will be added after the public release. The screenshots below come from the mobile interface in preparation and show the main pool proxy and pool-node management views.",
            visual: {
                label: "Preview of RustMinerApp pool proxy, pool node, and worker detail screens",
                badge: "RustMinerApp mobile console",
                title: "RustMinerSystem operations from your phone",
                description:
                    "Check ports, servers, system load, live hashrate, worker details, and wallet data from a phone whenever you need to confirm pool proxy or pool-node status.",
            },
            platforms: {
                ios: {
                    title: "iOS",
                    status: "Coming soon",
                    note: "The App Store link is being prepared and will be placed here after release.",
                },
                android: {
                    title: "Android",
                    status: "Coming soon",
                    note: "The APK package is being prepared. The download link and QR code will be placed here after release.",
                },
            },
            features: {
                proxy: {
                    title: "Pool proxy overview",
                    text: "View BTC live hashrate, online devices, port status, and TCP, TLS/SSL, RMS access types.",
                },
                worker: {
                    title: "Worker and hashrate details",
                    text: "Open a port or device to inspect 24-hour hashrate curves, wallets, efficiency, uptime, and rejected shares.",
                },
                system: {
                    title: "Server status",
                    text: "Review server lists, system load, CPU, disk, memory, program version, and runtime.",
                },
            },
            screens: {
                ariaLabel: "RustMinerApp interface preview screenshots",
                dashboard: "Pool proxy overview",
                dashboardAlt:
                    "RustMinerApp screenshot showing pool proxy overview and port list",
                servers: "Server list",
                serversAlt: "RustMinerApp screenshot showing server list",
                system: "System information",
                systemAlt:
                    "RustMinerApp screenshot showing system information and server load",
                worker: "Worker list",
                workerAlt:
                    "RustMinerApp screenshot showing worker list and 24-hour hashrate",
                device: "Device details",
                deviceAlt:
                    "RustMinerApp screenshot showing device details, wallet, and hashrate statistics",
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
                localLabel: "Miner access paths",
                miners: "Miner fleet",
                fieldProxy: "TCP / SSL direct",
                remoteNode: "Optional RMS access",
                system: "RustMinerSystem",
                systemHint: "Unified access, hashrate allocation, and proxying",
                access: "Unified access",
                allocation: "Hashrate allocation",
                proxy: "Pool proxy",
                routeLabel: "Route by configuration",
                thirdPartyTarget: "Third-party pool Proxy",
                poolNodeTarget: "PoolNode real pool",
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
                localLabel: "Local site access",
                miners: "Miner fleet",
                fieldProxy: "Site local network",
                remoteNode: "Access device / router",
                system: "RMS Secure Client",
                systemHint:
                    "Local compression, encryption, and connection pooling",
                compression: "Traffic compression",
                encryption: "Encrypted tunnel",
                connectionPool: "Connection pooling",
                tunnelLabel: "Compressed encrypted link",
                target: "RustMiner host server",
            },
            install: {
                title: "Install RMS with command",
                description:
                    "Copy the command for {arch} into the device terminal, then follow the prompts to complete installation.",
                line1: "Line 1",
                line2: "Line 2",
                copy: "Copy",
                copied: "Copied",
            },
        },
        poolNode: {
            latestRelease: "Latest Release Android {android} / iOS {ios}",
            downloadKicker: "Mobile downloads",
            downloadTitle: "Choose the installer for your phone",
            downloadDescription:
                "Android users can download the APK directly. iOS users should install from the App Store with a Hong Kong or US Apple ID.",
            visual: {
                label: "Preview of PoolNode Mobile App earnings, hashrate, and worker screens",
                badge: "PoolNode Mobile App",
                title: "End-user app for pool nodes",
                description:
                    "Let pool users check node earnings, hashrate trends, worker status, and asset records in a familiar mining-pool app experience.",
            },
            platforms: {
                android: {
                    title: "Android APK",
                    note: "Scan the QR code or use the button to download the APK. If Android blocks unknown sources, follow the system prompt to allow this installation.",
                    button: "Download Android APK",
                    qrAlt: "QR code for downloading the PoolNode Android APK",
                },
                ios: {
                    title: "iOS App Store",
                    note: "Scan the QR code or use the button to open the App Store. The current iOS app requires a Hong Kong or US Apple ID.",
                    button: "Open App Store",
                    qrAlt: "QR code for opening the PoolNode iOS App Store page",
                },
            },
            features: {
                node: {
                    title: "Node earnings dashboard",
                    text: "Bring coin earnings, estimated fiat value, and pool-node data into one mobile view.",
                },
                worker: {
                    title: "Workers and hashrate",
                    text: "Check 10-minute hashrate, 24-hour hashrate, online status, and rejection rate to spot abnormal workers.",
                },
                asset: {
                    title: "Assets and records",
                    text: "Review income records, payout records, and payout address binding from the phone.",
                },
            },
            screens: {
                overview: "Earnings overview",
                overviewAlt:
                    "PoolNode Mobile App screenshot showing earnings overview and pool-node list",
                hashrate: "Hashrate details",
                hashrateAlt:
                    "PoolNode Mobile App screenshot showing BTC hashrate details",
                workers: "Worker list",
                workersAlt:
                    "PoolNode Mobile App screenshot showing worker list and online status",
                assets: "Asset records",
                assetsAlt:
                    "PoolNode Mobile App screenshot showing asset and income records",
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
        eyebrow: "Custom RustMiner builds",
        title: "Create your own branded RustMiner version",
        description:
            "Customers can create free or paid custom RustMiner builds to promote their own branded version. Every customizer receives an admin dashboard for install statistics, built-in fee-ratio management, and hot updates for fee configuration changes.",
        hero: {
            primaryCta: "Request customization",
            secondaryCta: "View plans",
            previewLabel: "Custom admin dashboard preview",
            previewTitle: "Customized RustMiner Dashboard",
            previewAlt:
                "Preview of the custom RustMiner admin dashboard statistics",
            previewBadge: "Master dashboard",
            previewCaption:
                "The RustMinerSystem custom-edition master dashboard centralizes install statistics, client counts, active devices, hashrate trends, and built-in fee configuration so customizers can keep operating their promoted version.",
            metrics: {
                editions: {
                    label: "Available editions",
                    value: "Free / Paid",
                },
                fee: {
                    label: "Fee settings",
                    value: "Hot updates",
                },
                hosting: {
                    label: "Program hosting",
                    value: "Paid plans",
                },
            },
        },
        pointsEyebrow: "Core capabilities",
        pointsTitle: "Built for branding, promotion, and operations",
        pointsDescription:
            "A custom version is more than a renamed package. It gives customizers a practical operating loop for promotion, statistics, built-in fee strategy, deployment, and updates.",
        points: {
            dashboard: {
                title: "Admin dashboard",
                text: "Customizers can view statistics from installed RustMiner clients and understand real usage after promotion.",
            },
            fee: {
                title: "Built-in fee-ratio management",
                text: "Configure your own built-in fee ratio at any time. Changes support hot updates without repackaging.",
            },
            branding: {
                title: "Brand customization",
                text: "Change the software name, footer information, and logo so the custom RustMiner matches your promotion channel.",
            },
            hosting: {
                title: "One-click deployment and hosting",
                text: "Paid editions include remote install scripts and hosted programs that update whenever a release or custom update is published.",
            },
            client: {
                title: "Deep client page customization",
                text: "The advanced edition supports deeper client UI customization around your own workflow, beyond simple branding changes.",
            },
            rms: {
                title: "Custom RMS",
                text: "The advanced edition can customize RMS companion capabilities for teams that need a complete branded access path.",
            },
        },
        plans: {
            eyebrow: "Plans",
            title: "Choose the right custom edition for your promotion stage",
            description:
                "The free edition covers branding and the admin dashboard. The basic paid edition adds hosted deployment. The advanced edition is for long-term projects that need deep client pages and custom RMS.",
            included: "Included",
            excluded: "Not included",
            tiers: {
                free: {
                    name: "Free custom edition",
                    badge: "Start free",
                    description:
                        "Good for testing promotion with the admin dashboard and essential brand changes.",
                    price: "0 USD",
                    period: "Free request",
                    cta: "Request free edition",
                },
                basic: {
                    name: "Basic paid edition",
                    badge: "Hosted deployment",
                    description:
                        "For promoters who want remote install scripts and hosted program updates maintained for them.",
                    price: "88 USD",
                    period: "/ month",
                    cta: "Start basic",
                },
                advanced: {
                    name: "Advanced paid edition",
                    badge: "Deep customization",
                    description:
                        "For teams that need custom client pages, custom RMS, and a long-term branded product path.",
                    price: "18888 USD",
                    period: "/ lifetime",
                    cta: "Discuss advanced",
                },
            },
        },
        features: {
            noMinerLimit: {
                title: "No miner-count limit",
                tiers: {
                    free: "Free edition requires >1000 miners",
                    basic: "No miner-count requirement",
                    advanced: "No miner-count requirement",
                },
            },
            admin: {
                title: "Admin dashboard",
                text: "View custom build install and runtime statistics.",
            },
            customManagement: {
                title: "Multiple builds and permission management",
                tiers: {
                    free: "Limited to one custom build per person. The dashboard manages only your own build and cannot manage other custom permissions.",
                    basic: "Create multiple custom builds and manage other custom permissions.",
                    advanced: "Create multiple custom builds and manage other custom permissions.",
                },
            },
            name: {
                title: "Change software name",
                text: "Rename RustMiner as your branded edition.",
            },
            footer: {
                title: "Change footer information",
                text: "Replace footer content and promotion details.",
            },
            logo: {
                title: "Change logo",
                text: "Use your own icon and visual assets.",
            },
            officialClientStyle: {
                title: "Optional official client style",
                tiers: {
                    free: "Only the legacy client style is available",
                    basic: "Official client style is available",
                    advanced: "Official client style is available",
                },
            },
            hosting: {
                title: "One-click deployment and hosting",
                text: "Includes remote install scripts and hosted program updates for releases and custom updates.",
            },
            client: {
                title: "Deep client page customization",
                text: "Customize client pages around your promotion or workflow.",
            },
            rms: {
                title: "Custom RMS",
                text: "Customize the companion RMS client capabilities.",
            },
        },
        delivery: {
            eyebrow: "Delivery flow",
            title: "Start with branding, then expand into hosting and deeper capabilities",
            description:
                "The page separates brand information, admin access, hosted deployment, and deep client capabilities so customers can understand the plan differences quickly.",
            steps: {
                scope: {
                    title: "Confirm brand assets",
                    text: "Collect the software name, logo, footer information, and promotion content for the custom build.",
                },
                package: {
                    title: "Generate the custom build",
                    text: "Package the custom RustMiner build and enable the matching admin dashboard access.",
                },
                operate: {
                    title: "Configure fees and operate",
                    text: "Use the dashboard to view install statistics, adjust the built-in fee ratio, and hot-update the configuration.",
                },
            },
        },
    },
    about: {
        eyebrow: "About",
        title: "About RustMinerSystem",
        description:
            "RustMinerSystem is software for miner, mining farm, and mining pool operations. It covers traditional pool proxying, self-hosted pool nodes, optional RMS access, downloads, deployment, and multilingual operations entry points.",
        rates: {
            eyebrow: "Software fee rates",
            title: "Transparent software service rates",
            proxy: {
                label: "Traditional pool proxy",
                title: "Traditional pool proxy",
                value: "2‰",
                text: "A 2 per mille software fee on connected hashrate for third-party mining pool proxy scenarios.",
                textHighlight: "2 per mille",
            },
            poolNode: {
                label: "Self-hosted pool node",
                title: "Self-hosted pool node",
                value: "1%",
                text: "Self-hosted pool nodes use a 1% software fee rate for PoolNode real-pool operations.",
            },
        },
        legal: {
            eyebrow: "Disclaimer",
            title: "Confirm the legal requirements in your jurisdiction before use",
            description:
                "These terms describe RustMinerSystem's scope, user responsibilities, and restricted regions. Using the product means you understand and accept these statements.",
            items: {
                1: "RustMinerSystem is governed by Hong Kong law. Legal requirements in different countries or regions may restrict this type of product and service.",
                2: "Therefore, the product, the service, and certain features may be unavailable or restricted in certain jurisdictions, regions, or for certain users.",
                3: "This product is not a VPN product, because it cannot enable users in disallowed regions to access prohibited content.",
                4: "This product is miner and mining farm management software. It does not obtain miner data through improper means. Every connected device requires the device owner to actively set the miner connection address, ensuring customers using the program have informed consent.",
                5: "You are not included on any terrorist organization or terrorist personnel list, including lists set out in United Nations Security Council resolutions.",
                6: "You have not been restricted or prohibited from using this program by any administrative or law-enforcement agency in any country or region.",
                7: "You are not a resident of Cuba, Iran, North Korea, Syria, or any other country or region subject to sanctions enforced by relevant governments or international organizations.",
                8: "You are not a resident of a country or region that restricts or prohibits digital-currency-related activities, including but not limited to mainland China.",
                9: "Your use of the services provided by this program complies with the laws, regulations, and policies of your country or region.",
                10: "You agree that if your use of the services becomes illegal due to the laws, regulations, policies, or any other applicable law of your country or region, you will independently bear the relevant legal risks and liabilities, and unconditionally and irrevocably waive any right of recourse against this program.",
                11: "You should understand and comply with local laws and regulations. If you use this product, you are deemed to accept the above license and statements. Legal issues caused by your use of this product are unrelated to the product itself.",
            },
        },
        community: {
            eyebrow: "Community",
            title: "Community and support channels",
            description:
                "Follow project updates, release news, deployment discussions, and support conversations through GitHub, Telegram, and Discord.",
        },
        providers: {
            eyebrow: "Service providers",
            title: "Infrastructure for downloads and deployment",
            description:
                "RustMinerSystem relies on cloud services, network infrastructure, and code hosting platforms to provide stable downloads, deployments, and access for users worldwide.",
            ariaLabel: "RustMinerSystem service provider list",
        },
    },
};
