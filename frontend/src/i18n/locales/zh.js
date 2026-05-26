// 中文语言包：只维护该语言的展示文案，key 结构需要与其他语言保持一致。
// 新增页面或导航文案时，请同步补齐 en / zh / ru 三个文件。

export default {
    site: {
        name: "RustMinerSystem",
        shortName: "RMS",
    },
    seo: {
        defaultTitle: "RustMinerSystem - 第三方矿池 Proxy 与 PoolNode 真矿池系统",
        titleTemplate: "{pageTitle} | RustMinerSystem",
        home: {
            title: "RustMinerSystem",
            description:
                "RustMinerSystem 面向矿场和矿池运营方，支持作为第三方矿池 Proxy 将接入算力按任意比例分配到指定矿池钱包，也支持通过 PoolNode 搭建真正矿池并在虚拟币结算层分配费率。",
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
        server: "服务器",
        app: "应用",
        openMenu: "打开导航菜单",
        closeMenu: "关闭导航菜单",
        language: "语言",
        currentLanguage: "当前语言",
        github: "在 GitHub 打开 RustMinerSystem",
        downloads: {
            server: "RustMinerSystem",
            rms: "RMS 客户端",
            desktop: "RustMinerSystemAPP",
            poolNode: "PoolNodeAPP",
        },
    },
    footer: {
        brandLabel: "RustMinerSystem 页脚",
        navigation: "页脚导航",
        product: "产品",
        community: "社区",
        github: "GitHub",
        description:
            "RustMinerSystem 聚焦第三方矿池 Proxy 与 PoolNode 真矿池，并提供可选的 RMS 本地压缩工具。",
        copyright: "© {year} RustMinerSystem. 保留所有权利。",
    },
    home: {
        eyebrow: "第三方矿池 Proxy 与 PoolNode 真矿池系统",
        title: "RustMinerSystem",
        description:
            "RustMinerSystem 同时覆盖两条核心链路：可作为第三方矿池的 Proxy，从接入矿机算力中按任意比例分配到指定第三方矿池钱包；也可通过 PoolNode 搭建真正的自有矿池，让设定费率直接在虚拟币结算层面完成分配。RMS 是可选配套工具，适合需要减少带宽占用和公网连接数的矿场，用本地加密压缩链路把矿机接入 RustMiner。",
        primaryCta: "获取RustMinerSystem",
        secondaryCta: "阅读文档",
        secondaryCtaNote: "部署、配置与运维说明",
        poolLinksLabel: "第三方矿池官网链接",
        preview: {
            label: "RustMinerSystem 软件首页预览",
            imageAlt: "RustMinerSystem 矿机代理运维仪表盘截图",
            minersLabel: "接入设备",
            networkLabel: "公网连接压缩",
            profitLabel: "算力分配",
            profitValue: "分配策略运行中",
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
        downloadsTitle: "下载部署组件",
        downloadsDescription:
            "获取 RustMinerSystem 服务端、RMS 可选客户端与 PoolNode 应用，用于第三方矿池 Proxy、PoolNode 真矿池、算力分配策略和按需本地压缩接入。",
        releaseLink: "打开发布中心",
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
