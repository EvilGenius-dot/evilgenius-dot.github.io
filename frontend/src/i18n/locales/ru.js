// 俄语语言包：只维护该语言的展示文案，key 结构需要与其他语言保持一致。
// 新增页面或导航文案时，请同步补齐 en / zh / ru 三个文件。

export default {
    site: {
        name: "RustMinerSystem",
        shortName: "RMS",
    },
    seo: {
        defaultTitle:
            "RustMinerSystem - proxy сторонних пулов и настоящий пул PoolNode",
        titleTemplate: "{pageTitle} | RustMinerSystem",
        home: {
            title: "RustMinerSystem",
            description:
                "RustMinerSystem позволяет работать как proxy для сторонних пулов и направлять любой заданный процент подключенного хешрейта на выбранные кошельки пулов, либо строить настоящий пул через PoolNode с распределением комиссии на уровне расчета монет. Для подключения майнеры могут напрямую соединяться с RustMiner по традиционным TCP/SSL либо использовать дополнительный клиент RMS для локального зашифрованного сжатия.",
        },
        document: {
            title: "Документация",
            description:
                "Документация RustMinerSystem по развертыванию, настройке серверов, узлов и операционным процессам.",
        },
        customized: {
            title: "Индивидуальная версия",
            description:
                "Закажите индивидуальную сборку RustMinerSystem для proxy сторонних пулов, настоящего пула PoolNode, брендированных приложений и сложных операций.",
        },
        about: {
            title: "О проекте",
            description:
                "Узнайте о направлении RustMinerSystem и операционных инструментах, лежащих в основе проекта.",
        },
    },
    nav: {
        skip: "Перейти к основному содержанию",
        primary: "Основная навигация",
        mobile: "Мобильная навигация",
        home: "Главная",
        download: "Скачать",
        document: "Документация",
        customized: "Индивидуальная версия",
        about: "О проекте",
        server: "Серверные компоненты",
        app: "Мобильные приложения",
        openMenu: "Открыть меню навигации",
        closeMenu: "Закрыть меню навигации",
        language: "Язык",
        currentLanguage: "Текущий язык",
        github: "Открыть RustMinerSystem на GitHub",
        downloads: {
            server: "Основной сервер RustMinerSystem",
            rms: "Безопасный клиент RMS",
            mobile: "Мобильное приложение RustMinerSystem",
            poolNode: "Мобильное приложение PoolNode",
        },
    },
    footer: {
        brandLabel: "Footer RustMinerSystem",
        navigation: "Навигация footer",
        product: "Продукт",
        community: "Сообщество",
        github: "GitHub",
        telegram: "Telegram",
        telegramEnglish: "Telegram (английский)",
        telegramRussian: "Telegram (русский)",
        discord: "Discord",
        miningPoolPartners: {
            title: "Партнерские майнинг-пулы",
            items: {
                viabtc: "ViaBTC",
                f2pool: "F2Pool",
                antpool: "AntPool",
                poolin: "Poolin",
            },
        },
        infrastructurePartners: {
            title: "Партнеры облачной и сетевой инфраструктуры",
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
            "RustMinerSystem создан для операторов, которым нужен не просто pool proxy: направляйте майнеров в сторонние пулы с явным fee-skimming, запускайте настоящий PoolNode с комиссией на уровне расчетов и подключайте RMS, когда канал или публичные соединения становятся узким местом.",
        copyright: "© {year} RustMinerSystem. Все права защищены.",
    },
    home: {
        eyebrow: "Proxy сторонних пулов и настоящий пул PoolNode",
        title: "RustMinerSystem",
        description:
            "RustMinerSystem покрывает две ключевые схемы. Система может работать как proxy для сторонних майнинг-пулов и направлять любой заданный процент подключенного хешрейта майнеров на выбранные кошельки сторонних пулов. Также PoolNode позволяет построить настоящий собственный пул, где заданная комиссия распределяется напрямую на уровне расчета виртуальной валюты. Для подключения майнеры могут напрямую соединяться с RustMiner по традиционным TCP/SSL; RMS также доступен как дополнительный инструмент для площадок, которым нужно снизить расход канала и число публичных соединений через локальный зашифрованный сжатый канал.",
        primaryCta: "Перейти к загрузкам",
        secondaryCta: "Читать документацию",
        secondaryCtaNote: "Развертывание, настройка и операции",
        poolLinksLabel: "Ссылки на сайты сторонних пулов",
        partnerNote:
            "RustMinerSystem благодарит этих и других партнеров за поддержку.",
        preview: {
            label: "Предпросмотр панели RustMinerSystem",
            imageAlt: "Анимированный предпросмотр панели RustMinerSystem",
            minersLabel: "Proxy сторонних пулов",
            minersValue: "Доля активна",
            networkLabel: "Опциональное сжатие RMS",
            networkValue: "Соединения 128:1",
            profitLabel: "Настоящий пул PoolNode",
            profitValue: "Комиссии на расчете",
        },
        featuresTitle: "Proxy сторонних пулов, PoolNode и дополнительный RMS",
        features: {
            deployment: {
                title: "Proxy сторонних пулов",
                text: "Используйте RustMiner как proxy доступа к сторонним пулам и направляйте любую долю хешрейта майнеров на выбранные кошельки пула или worker names.",
            },
            operations: {
                title: "Настоящий пул PoolNode",
                text: "Создавайте собственный настоящий майнинг-пул через PoolNode, а заданную комиссию распределяйте на уровне расчета монет, а не только на уровне пересылки.",
            },
            localization: {
                title: "Дополнительный локальный инструмент RMS",
                text: "Если площадке нужна оптимизация сети, RMS можно развернуть локально: майнеры подключаются к RustMiner через зашифрованный сжатый канал, уменьшая объем данных и число публичных соединений. Без RMS майнеры также могут подключаться к RustMiner напрямую.",
            },
        },
        global: {
            title: "Локально на площадке, управление распределением из облака",
            description:
                "RustMinerSystem можно развернуть локально на майнинг-площадке или на облачном сервере, который подключает площадки в разных странах и регионах. В режиме proxy система распределяет любой заданный процент подключенного хешрейта на кошельки сторонних пулов по площадке, группе майнеров или цели кошелька. В режиме PoolNode она помогает построить настоящий пул и применять распределение комиссии на уровне расчета монет.",
            sites: {
                local: {
                    region: "Локальная площадка",
                    title: "Ближнее подключение майнеров",
                    text: "Proxy-переадресация, группы устройств и правила распределения хешрейта работают внутри площадки с меньшей публичной экспозицией.",
                },
                remote: {
                    region: "Облачный узел",
                    title: "Единая региональная панель",
                    text: "Управляйте несколькими площадками из облака и меняйте proxy-цели, кошельки и политики каналов по регионам.",
                },
                multi: {
                    region: "Несколько площадок",
                    title: "Распределение на несколько кошельков",
                    text: "Создавайте независимые доли хешрейта и цели кошельков сторонних пулов для майнеров, команд или партнеров.",
                },
            },
            visual: {
                coreLabel: "Ядро планирования",
                coreTitle: "Движок распределения хешрейта",
                coreText:
                    "Координирует подключение майнеров, дополнительное сжатие RMS, распределение на кошельки сторонних пулов и комиссии PoolNode на уровне расчета.",
                secure: "Локальное шифрование",
                compress: "Сжатие данных",
                route: "Распределение",
            },
            targets: {
                proxy: {
                    type: "Proxy",
                    title: "Proxy сторонних пулов",
                    text: "Направляйте любую долю подключенного хешрейта майнеров на выбранные кошельки сторонних пулов.",
                },
                poolNode: {
                    type: "Узел",
                    title: "Настоящий пул PoolNode",
                    text: "Стройте собственный настоящий пул и распределяйте заданную комиссию на уровне расчета монет.",
                },
                pool: {
                    type: "Кошелек",
                    title: "Выбранный кошелек пула",
                    text: "Направляйте любой заданный процент хешрейта на адрес стороннего пула, кошелек или worker name.",
                },
            },
            metrics: {
                operations: "Гибкое локальное развертывание и облачный доступ",
                regionsValue: "Распределение",
                regions:
                    "Управление по площадке, группе майнеров или цели кошелька",
                clientValue: "RMS по необходимости",
                client: "Сжатие данных и публичных соединений при необходимости",
            },
        },
        loadingBadge: "...",
        unavailableBadge: "N/A",
        latestRelease: "Latest Release",
        latestReleaseLoading: "Проверка релиза",
        latestReleaseError: "Релиз недоступен",
        latestReleaseAria: "RustMinerSystem {version} latest release",
        latestReleaseLoadingAria: "Проверяется последний релиз RustMinerSystem",
        latestReleaseErrorAria:
            "Не удалось загрузить последний релиз RustMinerSystem",
        githubStars: "GitHub Stars",
        githubStarsLoading: "Проверка stars",
        githubStarsError: "Stars недоступны",
        githubStarsAria:
            "У EvilGenius-dot/RustMinerSystem {count} GitHub stars",
        githubStarsLoadingAria:
            "Проверяются GitHub stars для EvilGenius-dot/RustMinerSystem",
        githubStarsErrorAria:
            "Не удалось загрузить GitHub stars для EvilGenius-dot/RustMinerSystem",
    },
    download: {
        eyebrow: "Скачать",
        installGuideLink: "Читать руководство",
        latestVersion: "Latest Release {version}",
        latestVersionLoading: "Latest Release",
        latestVersionError: "Latest Release unavailable",
        latestVersionPending: "Latest Release",
        partners: {
            kicker: "Поддержка экосистемы",
            title: "Инфраструктура для загрузок и развертывания",
            description:
                "RustMinerSystem использует облачные сервисы, сетевую инфраструктуру и платформы хостинга кода для надежных загрузок, развертывания и глобального доступа.",
            ariaLabel: "Список партнеров RustMinerSystem",
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
                title: "Скачать основной сервер RustMinerSystem",
                heading: "Основной сервер RustMinerSystem",
                description:
                    "Подготовьте серверную программу для подключения майнеров, proxy сторонних пулов и развертывания PoolNode. Выберите систему, архитектуру и версию, затем установите командой или разверните отдельный файл вручную.",
            },
            rms: {
                title: "Скачать безопасный клиент RMS",
                heading: "Безопасный клиент RMS",
                description:
                    "RMS — локальный безопасный клиент для туннеля, сжатия данных, шифрования и сжатия числа публичных соединений. Выберите систему, архитектуру или вариант Windows, затем установите командой или разверните отдельный файл вручную.",
            },
            mobile: {
                title: "Скачать мобильное приложение RustMinerSystem",
                description:
                    "Отдельная страница загрузки мобильного приложения RustMinerSystem. Пакеты приложения и заметки по платформам будут добавлены здесь.",
            },
            "pool-node": {
                title: "Скачать мобильное приложение PoolNode",
                description:
                    "Отдельная страница загрузки мобильного приложения PoolNode. Пакеты приложения и заметки по платформам будут добавлены здесь.",
            },
        },
        server: {
            finderTitle: "Выберите сборку сервера",
            selectionSummary:
                "Получить RustMinerSystem {version} для {os} {arch}",
            refresh: "Обновить список",
            osLabel: "Операционная система",
            archLabel: "Архитектура",
            versionLabel: "Версия",
            versionPending: "Определение версии",
            unknownVersion: "Неизвестная версия",
            loading: "Чтение каталогов windows и linux из репозитория GitHub.",
            empty: "Для выбранных фильтров нет файлов для скачивания.",
            fetchError:
                "Сейчас не удалось прочитать список файлов GitHub. Повторите попытку позже или откройте каталог репозитория.",
            download: "Скачать",
            openDirectory: "Открыть отдельные файлы {directory} на GitHub",
            methodHint: {
                linux: "Ниже доступны два способа установки: новичкам лучше начать с установки командой Linux и следовать подсказкам терминала; отдельные файлы подходят тем, кто сам настраивает запуск, автозапуск и supervision процесса.",
                standalone:
                    "Для выбранной платформы доступны отдельные файлы: после скачивания запустите программу вручную и самостоятельно настройте автозапуск или supervision процесса.",
            },
            binary: {
                title: "Скачать отдельный файл",
                description:
                    "Для пользователей, знакомых с развертыванием: скачайте отдельный файл, запустите его вручную и настройте supervision процесса для своей среды.",
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
                label: "Схема подключения майнеров к RustMinerSystem",
                localLabel: "Пути подключения майнеров",
                miners: "Парк майнеров",
                fieldProxy: "Прямое TCP / SSL",
                remoteNode: "Опциональный доступ RMS",
                system: "RustMinerSystem",
                systemHint: "Единый доступ, распределение хешрейта и proxy",
                access: "Единый доступ",
                allocation: "Распределение хешрейта",
                proxy: "Proxy пула",
                routeLabel: "Маршрутизация по конфигурации",
                thirdPartyTarget: "Proxy стороннего пула",
                poolNodeTarget: "Настоящий пул PoolNode",
                target: "Сторонний пул / PoolNode",
            },
            install: {
                title: "Установка командой Linux",
                description:
                    "Скопируйте команду для {arch} в терминал сервера и следуйте подсказкам для завершения установки.",
                line1: "Линия 1",
                line2: "Линия 2",
                arm: "ARM",
                armv7: "ARMv7",
                copy: "Копировать",
                copied: "Скопировано",
            },
        },
        rms: {
            finderTitle: "Выберите клиент RMS",
            selectionSummary: "Получить RMS {version} для {os} {arch}",
            osLabel: "Операционная система",
            archLabel: "Архитектура / тип",
            versionLabel: "Версия",
            versionPending: "Определение версии",
            unknownVersion: "Неизвестная версия",
            loading: "Чтение каталогов клиента RMS из репозитория GitHub.",
            empty: "Для выбранных фильтров нет файлов для скачивания.",
            fetchError:
                "Сейчас не удалось прочитать список файлов GitHub. Повторите попытку позже или откройте каталог репозитория.",
            download: "Скачать",
            openDirectory: "Открыть отдельные файлы {directory} на GitHub",
            version: {
                rms3: "RMS3",
            },
            methodHint: {
                linux: "Ниже доступны два способа установки: новичкам лучше начать с установки RMS3 командой и следовать подсказкам терминала; отдельные файлы подходят тем, кто сам настраивает запуск и supervision процесса.",
                standalone:
                    "Для выбранной платформы доступны отдельные файлы: после скачивания запустите программу вручную и самостоятельно настройте автозапуск или supervision процесса. Если GUI-версия Windows показывает пустой экран, установите WebView2 из того же каталога.",
            },
            binary: {
                title: "Скачать отдельный файл RMS",
                description:
                    "Для пользователей, знакомых с развертыванием: скачайте подходящий отдельный файл, запустите RMS вручную и настройте supervision процесса для своей среды.",
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
                label: "Схема подключения майнеров к RustMiner через безопасный клиент RMS",
                localLabel: "Локальный доступ площадки",
                miners: "Парк майнеров",
                fieldProxy: "Локальная сеть площадки",
                remoteNode: "Устройство доступа / роутер",
                system: "Безопасный клиент RMS",
                systemHint: "Локальное сжатие, шифрование и пул соединений",
                compression: "Сжатие трафика",
                encryption: "Шифрованный туннель",
                connectionPool: "Пул соединений",
                tunnelLabel: "Сжатый зашифрованный канал",
                target: "Сервер с RustMiner",
            },
            install: {
                title: "Установка RMS командой",
                description:
                    "Скопируйте команду для {arch} в терминал устройства и следуйте подсказкам для завершения установки.",
                line1: "Линия 1",
                line2: "Линия 2",
                copy: "Копировать",
                copied: "Скопировано",
            },
        },
    },
    document: {
        eyebrow: "Документация",
        title: "Развертывание и эксплуатация RustMinerSystem",
        description:
            "Страница дает пользователям и поисковым системам стабильную точку входа для установки, настройки и эксплуатации.",
        tocTitle: "Содержание",
        navigationTitle: "Документация",
        onThisPage: "На этой странице",
        readingTime: "Время чтения",
        readingTimeValue: "{minutes} мин",
        previousPage: "Назад",
        nextPage: "Далее",
        sections: {
            install: {
                title: "Установка",
                text: "Подготовьте серверный пакет, настройте параметры выполнения и проверьте узел перед production-нагрузкой.",
            },
            configure: {
                title: "Настройка",
                text: "Храните endpoints пула, учетные данные воркеров, логи и каналы обновлений в одном каноническом месте.",
            },
            operate: {
                title: "Эксплуатация",
                text: "Перед обновлением production-узлов проверьте релизные заметки, политику перезапуска и восстановление.",
            },
        },
    },
    customized: {
        eyebrow: "Индивидуальная поставка",
        title: "Индивидуальные версии RustMinerSystem",
        description:
            "Планируйте стратегии proxy сторонних пулов, комиссии настоящего пула PoolNode, брендированные приложения, автоматизацию развертывания и региональный onboarding.",
        points: {
            branding: {
                title: "Брендированная упаковка",
                text: "Согласуйте имена приложений, визуальные материалы и навигацию с идентичностью команды или пула.",
            },
            integrations: {
                title: "Интеграция стратегий",
                text: "Свяжите распределение хешрейта, кошельки сторонних пулов, комиссии PoolNode и панели узлов с существующими операционными системами.",
            },
            localization: {
                title: "Локализованный запуск",
                text: "Публикуйте английский, китайский и русский тексты на общей route-aware базе переводов.",
            },
        },
    },
    about: {
        eyebrow: "О проекте",
        title: "Сфокусированная web-поверхность для RustMinerSystem",
        description:
            "Сайт создан для международных пользователей, поисковых систем и операторов, которым нужен быстрый доступ к загрузкам и документации.",
    },
};
