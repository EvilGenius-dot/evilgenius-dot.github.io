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
                "制作用于推广的定制版 RustMiner，配套管理后台、安装统计、内抽比例配置、热更新与付费托管部署能力。",
        },
        about: {
            title: "关于",
            description:
                "了解 RustMinerSystem 的产品定位、软件费率、法律免责声明、社区入口与下载部署基础设施支持。",
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
            poolNode: "PoolNode 移动应用",
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
                title: "PoolNode 移动应用下载",
                heading: "PoolNode 移动应用",
                description:
                    "PoolNode 移动应用是基于 RustMinerSystem 搭建的矿池节点用户终端，为矿池用户提供收益、算力、矿工与资产数据的移动端入口。",
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
                label: "PoolNode 移动应用收益、算力与矿工界面预览",
                badge: "PoolNode 移动应用",
                title: "矿池节点用户终端",
                description:
                    "让终端用户像使用传统矿池移动应用一样查看节点收益、算力走势、矿工在线状态和资产记录。",
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
                overviewAlt: "PoolNode 移动应用收益总览和矿池节点列表截图",
                hashrate: "算力详情",
                hashrateAlt: "PoolNode 移动应用 BTC 算力详情截图",
                workers: "矿工列表",
                workersAlt: "PoolNode 移动应用矿工列表和在线状态截图",
                assets: "资产记录",
                assetsAlt: "PoolNode 移动应用资产和收入记录截图",
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
        eyebrow: "定制版 RustMiner",
        title: "制作属于你的 RustMiner 定制版本",
        description:
            "客户可以免费或付费制作定制版 RustMiner，用自己的品牌名称、LOGO 和页面信息推广客户端。每个定制者都会获得管理后台，用于查看安装统计、管理内置抽水比例，并支持比例配置热更新。",
        hero: {
            primaryCta: "联系定制",
            secondaryCta: "查看版本方案",
            previewLabel: "定制版管理后台预览",
            previewTitle: "Customized RustMiner Dashboard",
            previewAlt: "定制版 RustMiner 管理后台统计数据预览",
            previewBadge: "总控后台",
            previewCaption:
                "RustMinerSystem 定制版总控后台用于集中查看安装统计、客户端数量、活跃设备、算力走势与内抽配置，帮助定制者持续管理自己的推广版本。",
            metrics: {
                editions: {
                    label: "可选版本",
                    value: "免费 / 付费",
                },
                fee: {
                    label: "内抽配置",
                    value: "比例热更新",
                },
                hosting: {
                    label: "程序托管",
                    value: "付费版支持",
                },
            },
        },
        pointsEyebrow: "核心能力",
        pointsTitle: "从品牌推广到后台运营都能覆盖",
        pointsDescription:
            "定制版不是简单改名打包，而是围绕推广、统计、内抽策略和部署更新建立一套可持续运营的工具链。",
        points: {
            dashboard: {
                title: "管理后台",
                text: "定制者可查看别人安装的 RustMiner 统计信息，掌握客户端推广后的真实使用情况。",
            },
            fee: {
                title: "内抽比例管理",
                text: "可随时配置自己的内置抽水比例，配置变更支持热更新，不需要重新发包。",
            },
            branding: {
                title: "品牌信息定制",
                text: "支持修改软件名称、底部信息和 LOGO，让定制版 RustMiner 更适合你的推广入口。",
            },
            hosting: {
                title: "一键部署与程序托管",
                text: "付费版包含远程安装脚本和托管程序，发布或更新后远程程序同步更新，省去自己维护部署脚本。",
            },
            client: {
                title: "客户端页面深度定制",
                text: "高级版支持按你的业务流程进一步定制客户端页面，而不只停留在基础品牌替换。",
            },
            rms: {
                title: "定制 RMS",
                text: "高级版可定制 RMS 配套能力，适合需要完整品牌链路和更深接入形态的团队。",
            },
        },
        plans: {
            eyebrow: "版本方案",
            title: "选择适合推广阶段的定制版本",
            description:
                "免费版覆盖基础品牌替换和后台能力；基础付费版加入部署托管；高级付费版面向需要深度客户端页面和定制 RMS 的长期项目。",
            included: "支持",
            excluded: "不支持",
            minerRequirementLabel: "矿机数量要求",
            tiers: {
                free: {
                    name: "免费定制版",
                    badge: "免费起步",
                    description:
                        "适合先验证定制版推广效果，保留管理后台和基础品牌修改。",
                    price: "0 USD",
                    period: "免费申请",
                    minerRequirement: ">1000 台矿机",
                    cta: "申请免费定制",
                },
                basic: {
                    name: "基础付费版",
                    badge: "托管部署",
                    description:
                        "适合希望省去远程安装脚本和程序托管维护成本的推广者。",
                    price: "88 USD",
                    period: "/ 月",
                    minerRequirement: "不需要",
                    cta: "开通基础版",
                },
                advanced: {
                    name: "高级付费版",
                    badge: "深度定制",
                    description:
                        "适合需要深度客户端页面、定制 RMS 和长期完整品牌链路的团队。",
                    price: "18888 USD",
                    period: "/ 永久",
                    minerRequirement: "不需要",
                    cta: "咨询高级定制",
                },
            },
        },
        features: {
            admin: {
                title: "管理后台",
                text: "查看定制版安装和运行统计。",
            },
            name: {
                title: "修改软件名称",
                text: "将 RustMiner 命名为你的品牌版本。",
            },
            footer: {
                title: "修改底部信息",
                text: "替换底部展示内容和推广信息。",
            },
            logo: {
                title: "修改 LOGO",
                text: "使用自己的图标和视觉资产。",
            },
            hosting: {
                title: "一键部署、程序托管",
                text: "包含远程安装脚本，发布及更新会同步远程托管程序。",
            },
            client: {
                title: "深度定制化客户端页面",
                text: "按推广或业务流程定制客户端界面。",
            },
            rms: {
                title: "定制 RMS",
                text: "定制配套 RMS 客户端能力。",
            },
        },
        delivery: {
            eyebrow: "交付流程",
            title: "先完成基础定制，再按版本扩展部署和深度能力",
            description:
                "页面将定制范围拆成品牌信息、后台权限、托管部署和深度客户端能力，方便客户快速理解每个版本的差异。",
            steps: {
                scope: {
                    title: "确认品牌资料",
                    text: "收集软件名称、LOGO、底部信息以及需要展示的推广内容。",
                },
                package: {
                    title: "生成定制版本",
                    text: "完成定制版 RustMiner 打包，并开通对应的管理后台权限。",
                },
                operate: {
                    title: "配置内抽并运营",
                    text: "在后台查看安装统计，调整内置抽水比例，并通过热更新下发配置。",
                },
            },
        },
    },
    about: {
        eyebrow: "关于",
        title: "关于 RustMinerSystem",
        description:
            "RustMinerSystem 是面向矿机、矿场与矿池运营场景的软件系统，覆盖传统矿池代理、自建矿池节点、可选 RMS 接入、下载部署和多语言运维入口。",
        rates: {
            eyebrow: "软件费率",
            title: "透明的软件服务费率",
            proxy: {
                label: "传统矿池代理",
                title: "传统矿池代理",
                value: "2‰",
                text: "按接入算力收取千分之 2 的软件费率，用于第三方矿池 Proxy 场景。",
                textHighlight: "千分之 2",
            },
            poolNode: {
                label: "自建矿池节点",
                title: "自建矿池节点",
                value: "1%",
                text: "自建矿池节点按 1% 的软件费率执行，适用于 PoolNode 真矿池节点运营场景。",
            },
        },
        legal: {
            eyebrow: "免责声明",
            title: "使用前请确认你所在地区的法律要求",
            description:
                "以下条款用于说明 RustMinerSystem 的适用范围、用户责任与限制地区。使用本产品代表你理解并接受这些声明。",
            items: {
                1: "RustMinerSystem 受香港法律监管。不同国家或地区的法律要求可能会限制此类产品和服务。",
                2: "因此，该产品和服务以及某些功能可能不可用，或者在某些司法管辖区、地区或用户中可能受到限制。",
                3: "本产品并非 VPN 类型产品，因为它无法使不允许地区访问禁止访问的内容。",
                4: "本产品为矿机、矿场管理软件，并非通过不正当手段获取矿机数据。所有接入设备均需设备拥有者主动设置矿机连接地址，以确保任意使用本程序的客户拥有知情权。",
                5: "你不在任何恐怖活动组织及恐怖活动人员名单中，包括联合国安理会决议中所列的恐怖活动组织及恐怖活动人员名单。",
                6: "你未被任何国家或地区的行政执法机构限制或禁止使用本程序。",
                7: "你并非古巴、伊朗、朝鲜、叙利亚以及其他受到相关国家政府或国际机构执行制裁的国家或地区居民。",
                8: "你并非限制或禁止开展数字货币相关活动国家或地区的居民，包括但不限于中国大陆地区等。",
                9: "你使用本程序提供的服务在你所在的国家或地区符合相关法律法规和政策。",
                10: "你同意：如因你所在国家或地区的法律法规和政策或其他任何适用法律原因，导致你使用本程序的服务违法，你将独立承担相关法律风险和责任，并无条件且不可撤销地放弃向本程序进行追索的权利。",
                11: "你应该理解并遵守当地法律法规。如果你使用此产品，默认代表你接受上述许可与声明；由使用本产品引起的法律问题与本产品无关。",
            },
        },
        community: {
            eyebrow: "社区",
            title: "社区与支持渠道",
            description:
                "通过 GitHub、Telegram 和 Discord 关注项目进展、获取发布信息、交流部署经验并反馈使用问题。",
        },
        providers: {
            eyebrow: "服务商",
            title: "下载与部署基础设施支持",
            description:
                "RustMinerSystem 依托云服务、网络基础设施与代码托管平台，为全球用户提供稳定的下载、部署与访问体验。",
            ariaLabel: "RustMinerSystem 服务商列表",
        },
    },
};
