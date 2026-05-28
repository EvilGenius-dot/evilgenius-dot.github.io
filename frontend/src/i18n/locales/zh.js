// 中文语言包：只维护该语言的展示文案，key 结构需要与其他语言保持一致。
// 新增页面或导航文案时，请同步补齐 en / zh / ru 三个文件。

export default {
    site: {
        name: "RustMinerSystem",
        shortName: "RMS",
    },
    seo: {
        defaultTitle:
            "RustMinerSystem - 第三方矿池 Proxy 与 PoolNode 真矿池系统",
        titleTemplate: "{pageTitle} | RustMinerSystem",
        home: {
            title: "RustMinerSystem",
            description:
                "RustMinerSystem 面向矿场和矿池运营方，支持作为第三方矿池 Proxy 将接入算力按任意比例分配到指定矿池钱包，也支持通过 PoolNode 搭建真正矿池并在虚拟币结算层分配费率；在矿机接入上，不仅可以通过传统 TCP/SSL 直连 RustMiner，也可以配套 RMS 客户端进行本地加密压缩接入。",
        },
        document: {
            title: "文档",
            description:
                "阅读 RustMinerSystem 文档，了解部署、服务器配置、节点设置与运维流程。",
        },
        customized: {
            title: "定制版本",
            description:
                "为第三方矿池 Proxy、PoolNode 真矿池、品牌应用与高级运维需求定制 RustMinerSystem 版本。",
        },
        about: {
            title: "关于",
            description:
                "了解 RustMinerSystem 的产品方向以及项目背后的运维工具体系。",
        },
    },
    nav: {
        skip: "跳转到主要内容",
        primary: "主导航",
        mobile: "移动端导航",
        home: "首页",
        download: "下载",
        document: "文档",
        customized: "定制版本",
        about: "关于",
        server: "服务端组件",
        app: "移动应用",
        openMenu: "打开导航菜单",
        closeMenu: "关闭导航菜单",
        language: "语言",
        currentLanguage: "当前语言",
        github: "在 GitHub 打开 RustMinerSystem",
        downloads: {
            server: "RustMinerSystem 核心服务端",
            rms: "RMS 安全客户端",
            mobile: "RustMinerSystem 移动应用",
            poolNode: "PoolNode App",
        },
    },
    footer: {
        brandLabel: "RustMinerSystem 页脚",
        navigation: "页脚导航",
        product: "产品",
        community: "社区",
        github: "GitHub",
        telegram: "Telegram",
        telegramEnglish: "Telegram（英文）",
        telegramRussian: "Telegram（俄语）",
        discord: "Discord",
        miningPoolPartners: {
            title: "矿池合作伙伴",
            items: {
                viabtc: "ViaBTC",
                f2pool: "F2Pool",
                antpool: "AntPool",
                poolin: "Poolin",
            },
        },
        infrastructurePartners: {
            title: "全球云与网络基础设施合作商",
            items: {
                vultr: "Vultr",
                aws: "亚马逊 AWS",
                azure: "微软云 Azure",
                aliyun: "阿里云国际",
                cloudflare: "Cloudflare",
                github: "GitHub",
            },
        },
        description:
            "RustMinerSystem 不只是矿池代理入口：它能把矿机接入第三方矿池并按策略完成收益与费率分配，也能通过 PoolNode 搭建真正的自有矿池，在结算层管理费率；当带宽和公网连接成为瓶颈时，可叠加 RMS 加密压缩链路，把部署、分配和运维收拢到同一套系统。",
        copyright: "© {year} RustMinerSystem. 保留所有权利。",
    },
    home: {
        eyebrow: "第三方矿池 Proxy 与 PoolNode 真矿池系统",
        title: "RustMinerSystem",
        description:
            "RustMinerSystem 同时覆盖两条核心链路：可作为第三方矿池的 Proxy，从接入矿机算力中按任意比例分配到指定第三方矿池钱包；也可通过 PoolNode 搭建真正的自有矿池，让设定费率直接在虚拟币结算层面完成分配。在矿机接入上，不仅可以通过传统 TCP/SSL 直连 RustMiner；RMS 也是可选配套工具，适合需要减少带宽占用和公网连接数的矿场，用本地加密压缩链路把矿机接入 RustMiner。",
        primaryCta: "获取RustMinerSystem",
        secondaryCta: "阅读文档",
        secondaryCtaNote: "部署、配置与运维说明",
        poolLinksLabel: "第三方矿池官网链接",
        partnerNote: "RustMinerSystem 很荣幸得到上述及更多合作伙伴的支持。",
        preview: {
            label: "RustMinerSystem 软件首页预览",
            imageAlt: "RustMinerSystem 矿场代理运维动态演示",
            minersLabel: "第三方矿池 Proxy",
            minersValue: "算力分配运行中",
            networkLabel: "RMS 可选压缩",
            networkValue: "连接压缩 128:1",
            profitLabel: "PoolNode 真矿池",
            profitValue: "结算层分配",
        },
        featuresTitle: "围绕第三方矿池 Proxy、PoolNode 与可选 RMS 工具",
        features: {
            deployment: {
                title: "第三方矿池 Proxy",
                text: "RustMiner 可作为第三方矿池的接入代理，将任意比例的矿机算力分配到指定第三方矿池钱包或矿工名。",
            },
            operations: {
                title: "PoolNode 真矿池",
                text: "通过 PoolNode 搭建自己的真实矿池，设定费率直接在虚拟币结算层面分配，而不是停留在转发层。",
            },
            localization: {
                title: "RMS 可选本地压缩工具",
                text: "需要优化网络时，可在矿场本地部署 RMS，让矿机通过加密压缩链路接入 RustMiner，减少数据体积和公网连接数；不使用 RMS 也可以直接接入 RustMiner。",
            },
        },
        global: {
            title: "本地部署、云端统一管理算力分配",
            description:
                "RustMinerSystem 可部署在矿场本地，也可放在云服务器集中接入多国多地区场地。Proxy 模式下，系统按场地、矿机分组或钱包目标把接入算力按任意比例分配到第三方矿池；PoolNode 模式下，系统用于搭建真实矿池，并在虚拟币结算层面执行费率分配。",
            sites: {
                local: {
                    region: "本地场地",
                    title: "矿机就近接入",
                    text: "在矿场内完成代理转发、设备分组和算力分配策略下发，减少公网暴露。",
                },
                remote: {
                    region: "云端节点",
                    title: "跨地区统一后台",
                    text: "云服务器集中管理多个场地，按区域调整 Proxy 目标、钱包目标和链路策略。",
                },
                multi: {
                    region: "多场地运营",
                    title: "多钱包分配策略",
                    text: "为不同矿工、团队或合作方配置独立算力份额和第三方矿池钱包目标。",
                },
            },
            visual: {
                coreLabel: "调度核心",
                coreTitle: "算力分配引擎",
                coreText:
                    "统一处理矿机接入、可选 RMS 压缩、第三方矿池钱包分配与 PoolNode 结算层费率。",
                secure: "本地加密",
                compress: "体积压缩",
                route: "算力分配",
            },
            targets: {
                proxy: {
                    type: "代理",
                    title: "第三方矿池 Proxy",
                    text: "把接入矿机算力按任意比例分配到指定第三方矿池钱包。",
                },
                poolNode: {
                    type: "节点",
                    title: "PoolNode 真矿池",
                    text: "搭建自有真实矿池，并让设定费率在虚拟币结算层面分配。",
                },
                pool: {
                    type: "收益",
                    title: "指定矿池钱包",
                    text: "按配置将任意比例算力导向对应第三方矿池地址、钱包或矿工名。",
                },
            },
            metrics: {
                operations: "本地部署与云端接入灵活切换",
                regionsValue: "分配策略",
                regions: "按场地、矿机分组或钱包目标统一管理",
                clientValue: "可选 RMS",
                client: "按需压缩数据体积与公网连接数",
            },
        },
        loadingBadge: "...",
        unavailableBadge: "N/A",
        latestRelease: "Latest Release",
        latestReleaseLoading: "获取版本中",
        latestReleaseError: "版本获取失败",
        latestReleaseAria: "RustMinerSystem {version} 最新发布版本",
        latestReleaseLoadingAria: "正在获取 RustMinerSystem 最新发布版本",
        latestReleaseErrorAria: "无法获取 RustMinerSystem 最新发布版本",
        githubStars: "GitHub Stars",
        githubStarsLoading: "获取 Stars 中",
        githubStarsError: "Stars 获取失败",
        githubStarsAria:
            "EvilGenius-dot/RustMinerSystem 有 {count} 个 GitHub Stars",
        githubStarsLoadingAria:
            "正在获取 EvilGenius-dot/RustMinerSystem 的 GitHub Stars",
        githubStarsErrorAria:
            "无法获取 EvilGenius-dot/RustMinerSystem 的 GitHub Stars",
    },
    download: {
        eyebrow: "下载",
        installGuideLink: "阅读使用教程",
        latestVersion: "Latest Release {version}",
        latestVersionLoading: "Latest Release",
        latestVersionError: "Latest Release unavailable",
        latestVersionPending: "Latest Release",
        partners: {
            kicker: "生态支持",
            title: "下载与部署基础设施支持",
            description:
                "RustMinerSystem 结合云服务、网络基础设施与代码托管平台，为全球用户提供稳定的下载、部署与访问体验。",
            ariaLabel: "RustMinerSystem 合作伙伴列表",
            items: {
                vultr: "Vultr",
                aws: "亚马逊 AWS",
                azure: "微软云 Azure",
                aliyun: "阿里云国际",
                cloudflare: "Cloudflare",
                github: "GitHub",
            },
        },
        pages: {
            server: {
                title: "RustMinerSystem 核心服务端下载",
                heading: "RustMinerSystem 核心服务端",
                description:
                    "为矿场接入、第三方矿池 Proxy 与 PoolNode 部署准备服务端程序。选择合适的系统、架构和版本后，可以使用命令安装，也可以下载独立文件手动部署。",
            },
            rms: {
                title: "RMS 安全客户端下载",
                heading: "RMS 安全客户端",
                description:
                    "RMS 是部署在矿场本地的安全客户端，用于本地隧道、数据压缩、加密与公网连接数压缩。选择系统、架构或 Windows 版本后，可使用命令安装，也可以下载独立文件手动部署。",
            },
            mobile: {
                title: "RustMinerSystem 移动应用下载",
                description:
                    "RustMinerSystem 移动应用的专属下载页面，后续将用于放置应用安装包与平台说明。",
            },
            "pool-node": {
                title: "PoolNode App 下载",
                heading: "PoolNode App",
                description:
                    "PoolNodeApp 是基于 RustMinerSystem 搭建的矿池节点用户终端 APP，为矿池用户提供收益、算力、矿工与资产数据的移动端入口。",
            },
        },
        server: {
            finderTitle: "选择服务端构建",
            selectionSummary:
                "获得适用于 {os} {arch} 的 RustMinerSystem {version}",
            refresh: "刷新列表",
            osLabel: "操作系统",
            archLabel: "架构",
            versionLabel: "版本",
            versionPending: "正在识别版本",
            unknownVersion: "未知版本",
            loading: "正在从 GitHub 仓库读取 windows 与 linux 目录。",
            empty: "当前筛选条件下没有可下载文件。",
            fetchError:
                "暂时无法读取 GitHub 文件列表，请稍后重试或打开仓库目录下载。",
            download: "下载",
            openDirectory: "在 GitHub 中打开 {directory} 独立文件",
            methodHint: {
                linux: "下方提供两种安装方式：新手建议优先使用 Linux 命令安装，按终端提示完成；独立文件下载适合需要自行配置启动、开机自启和进程守护的用户。",
                standalone:
                    "当前平台提供独立文件下载：下载后需要手动启动程序，并自行配置开机自启或进程守护。",
            },
            binary: {
                title: "独立文件下载",
                description:
                    "适合熟悉部署的用户：下载独立文件后，需要手动启动程序，并根据生产环境自行设置进程守护。",
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
                label: "矿机接入 RustMinerSystem 的示意图",
                localLabel: "矿机接入方式",
                miners: "矿机集群",
                fieldProxy: "TCP / SSL 直连",
                remoteNode: "RMS 可选接入",
                system: "RustMinerSystem",
                systemHint: "统一接入、算力分配与代理",
                access: "统一接入",
                allocation: "算力分配",
                proxy: "矿池代理",
                routeLabel: "按配置分流",
                thirdPartyTarget: "第三方矿池 Proxy",
                poolNodeTarget: "PoolNode 真矿池",
                target: "第三方矿池 / PoolNode",
            },
            install: {
                title: "Linux 命令安装",
                description:
                    "复制适用于 {arch} 的命令到服务器终端执行，并根据终端提示完成安装。",
                line1: "线路 1",
                line2: "线路 2",
                arm: "ARM",
                armv7: "ARMv7",
                copy: "复制",
                copied: "已复制",
            },
        },
        rms: {
            finderTitle: "选择 RMS 客户端",
            selectionSummary: "获得适用于 {os} {arch} 的 RMS {version}",
            osLabel: "操作系统",
            archLabel: "架构 / 类型",
            versionLabel: "版本",
            versionPending: "正在识别版本",
            unknownVersion: "未知版本",
            loading: "正在从 GitHub 仓库读取 RMS 客户端目录。",
            empty: "当前筛选条件下没有可下载文件。",
            fetchError:
                "暂时无法读取 GitHub 文件列表，请稍后重试或打开仓库目录下载。",
            download: "下载",
            openDirectory: "在 GitHub 中打开 {directory} 独立文件",
            version: {
                rms3: "RMS3",
            },
            methodHint: {
                linux: "下方提供两种安装方式：新手建议优先使用 RMS3 命令安装，按终端提示完成；独立文件下载适合需要自行配置启动和进程守护的用户。",
                standalone:
                    "当前平台提供独立文件下载：下载后需要手动启动程序，并自行配置开机自启或进程守护。Windows 图形界面版本如遇白屏，请安装同目录的 WebView2。",
            },
            binary: {
                title: "RMS 独立文件下载",
                description:
                    "适合熟悉部署的用户：下载对应系统和架构的独立文件后，需要手动启动 RMS，并根据生产环境自行设置进程守护。",
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
                windowsGui: "Windows 图形界面",
                windowsCli: "Windows 命令行",
            },
            visual: {
                label: "矿机通过 RMS 安全客户端接入 RustMiner 的示意图",
                localLabel: "矿场本地接入",
                miners: "矿机集群",
                fieldProxy: "矿场本地网络",
                remoteNode: "接入设备 / 路由器",
                system: "RMS 安全客户端",
                systemHint: "本地压缩、加密与连接收敛",
                compression: "压缩流量",
                encryption: "加密隧道",
                connectionPool: "连接收敛",
                tunnelLabel: "压缩加密链路",
                target: "RustMiner 所在服务器",
            },
            install: {
                title: "RMS 命令安装",
                description:
                    "复制适用于 {arch} 的命令到设备终端执行，并根据终端提示完成安装。",
                line1: "线路 1",
                line2: "线路 2",
                copy: "复制",
                copied: "已复制",
            },
        },
        poolNode: {
            latestRelease: "Latest Release Android {android} / iOS {ios}",
            downloadKicker: "移动端下载",
            downloadTitle: "选择适合手机系统的安装方式",
            downloadDescription:
                "Android 用户可以直接下载 APK 安装包；iOS 用户通过 App Store 下载，安装前请确认使用港区或美区 Apple ID。",
            visual: {
                label: "PoolNode App 收益、算力与矿工界面预览",
                badge: "PoolNode App",
                title: "矿池节点用户终端",
                description:
                    "让终端用户像使用传统矿池 App 一样查看节点收益、算力走势、矿工在线状态和资产记录。",
            },
            platforms: {
                android: {
                    title: "Android APK",
                    note: "扫码或点击按钮下载 APK。安装时如果系统提示未知来源，请根据手机安全提示允许本次安装。",
                    button: "下载 Android APK",
                    qrAlt: "PoolNode Android APK 下载二维码",
                },
                ios: {
                    title: "iOS App Store",
                    note: "扫码或点击按钮跳转 App Store。当前 iOS 版本需要使用港区或美区 Apple ID 获取。",
                    button: "前往 App Store",
                    qrAlt: "PoolNode iOS App Store 下载二维码",
                },
            },
            features: {
                node: {
                    title: "节点收益看板",
                    text: "聚合币种收益、预计法币价值和矿池节点数据，让用户快速掌握账户状态。",
                },
                worker: {
                    title: "矿工与算力",
                    text: "查看 10 分钟算力、24 小时算力、在线离线状态和拒绝率，方便定位异常矿工。",
                },
                asset: {
                    title: "资产与记录",
                    text: "移动端查看收入记录、支付记录和支付地址绑定，降低终端用户查询成本。",
                },
            },
            screens: {
                overview: "收益总览",
                overviewAlt: "PoolNode App 收益总览和矿池节点列表截图",
                hashrate: "算力详情",
                hashrateAlt: "PoolNode App BTC 算力详情截图",
                workers: "矿工列表",
                workersAlt: "PoolNode App 矿工列表和在线状态截图",
                assets: "资产记录",
                assetsAlt: "PoolNode App 资产和收入记录截图",
            },
        },
    },
    document: {
        eyebrow: "文档",
        title: "部署与运维 RustMinerSystem",
        description:
            "该页面为用户和搜索引擎提供安装、配置与运维说明的稳定入口。",
        tocTitle: "文档目录",
        navigationTitle: "文档",
        onThisPage: "本页内容",
        readingTime: "阅读时间",
        readingTimeValue: "约 {minutes} 分钟",
        previousPage: "上一篇",
        nextPage: "下一篇",
        sections: {
            install: {
                title: "安装",
                text: "准备服务端包，配置运行参数，并在加入生产负载前完成节点验证。",
            },
            configure: {
                title: "配置",
                text: "把矿池端点、矿工凭据、日志与更新通道记录在统一的权威位置。",
            },
            operate: {
                title: "运维",
                text: "升级生产节点前，先确认发布说明、重启策略与恢复流程。",
            },
        },
    },
    customized: {
        eyebrow: "定制交付",
        title: "RustMinerSystem 定制版本",
        description:
            "规划第三方矿池 Proxy 策略、PoolNode 真矿池费率、品牌化应用、部署自动化与区域化引导流程。",
        points: {
            branding: {
                title: "品牌打包",
                text: "让应用名称、视觉资产与导航标签匹配你的团队或矿池身份。",
            },
            integrations: {
                title: "策略集成",
                text: "把算力分配、第三方矿池钱包目标、PoolNode 费率和节点看板接入现有运营系统。",
            },
            localization: {
                title: "本地化上线",
                text: "基于同一路由感知的翻译基础，同时发布英文、中文与俄语内容。",
            },
        },
    },
    about: {
        eyebrow: "关于",
        title: "RustMinerSystem 的专注型网站入口",
        description:
            "站点面向国际用户、搜索引擎与需要快速访问下载和文档的运营人员构建。",
    },
};
