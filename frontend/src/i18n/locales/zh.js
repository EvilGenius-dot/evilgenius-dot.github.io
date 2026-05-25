// 中文语言包：只维护该语言的展示文案，key 结构需要与其他语言保持一致。
// 新增页面或导航文案时，请同步补齐 en / zh / ru 三个文件。

export default {
    site: {
        name: "RustMinerSystem",
        shortName: "RMS",
    },
    seo: {
        defaultTitle: "RustMinerSystem - 挖矿系统与矿池节点工具",
        titleTemplate: "{pageTitle} | RustMinerSystem",
        home: {
            title: "RustMinerSystem",
            description:
                "RustMinerSystem 面向矿场和节点运营方，提供传统矿池代理、自建矿池节点与 RMS 安全客户端的一体化入口。",
        },
        document: {
            title: "文档",
            description:
                "阅读 RustMinerSystem 文档，了解部署、服务器配置、节点设置与运维流程。",
        },
        customized: {
            title: "定制版本",
            description:
                "为私有矿池、品牌应用与高级运维需求定制 RustMinerSystem 版本。",
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
            rms: "RMS",
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
            "RustMinerSystem 将矿场部署、节点运维与安全传输入口集中在一个清晰的网站界面中。",
        copyright: "© {year} RustMinerSystem. 保留所有权利。",
    },
    home: {
        eyebrow: "虚拟货币挖矿全链路解决方案",
        title: "RustMinerSystem",
        description:
            "既可作为传统矿池代理，也可让设备成为真正的矿池节点；配套 RMS 本地安全客户端提供加密压缩能力，帮助矿场降低带宽压力并提升传输安全。",
        primaryCta: "查看下载",
        secondaryCta: "阅读文档",
        featuresTitle: "覆盖矿场接入、节点运营与安全传输",
        features: {
            deployment: {
                title: "两种运行模式",
                text: "按需求选择传统矿池代理，或搭建自有矿池节点，让矿机接入路径和收益策略更可控。",
            },
            operations: {
                title: "RMS 安全客户端",
                text: "通过加密和压缩矿机通信数据，降低带宽压力，同时减少中间人攻击风险。",
            },
            localization: {
                title: "跨平台部署",
                text: "提供 Windows、Linux、ARM 与 ARMV7 安装入口，Linux 场景可通过一行命令完成部署。",
            },
        },
        downloadsTitle: "下载",
        downloadsDescription:
            "获取 RustMinerSystem 服务端、RMS 客户端与 PoolNode 应用；当前仓库包含 Windows、Linux、ARM 与 ARMV7 发布包。",
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
            "规划私有矿池功能、品牌化应用、部署自动化与区域化引导流程。",
        points: {
            branding: {
                title: "品牌打包",
                text: "让应用名称、视觉资产与导航标签匹配你的团队或矿池身份。",
            },
            integrations: {
                title: "运营集成",
                text: "把发布流程、节点看板与内部支持路径接入现有系统。",
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
