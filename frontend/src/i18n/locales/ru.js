// 俄语语言包：只维护该语言的展示文案，key 结构需要与其他语言保持一致。
// 新增页面或导航文案时，请同步补齐 en / zh / ru 三个文件。

export default {
    site: {
        name: "RustMinerSystem",
        shortName: "RMS",
    },
    seo: {
        defaultTitle: "RustMinerSystem - инструменты для майнинга и pool node",
        titleTemplate: "{pageTitle} | RustMinerSystem",
        home: {
            title: "RustMinerSystem",
            description:
                "RustMinerSystem объединяет прокси для традиционных пулов, собственные pool node и безопасный локальный клиент RMS.",
        },
        document: {
            title: "Документация",
            description:
                "Документация RustMinerSystem по развертыванию, настройке серверов, узлов и операционным процессам.",
        },
        customized: {
            title: "Индивидуальная версия",
            description:
                "Закажите индивидуальную сборку RustMinerSystem для частных пулов, брендированных приложений и сложных операций.",
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
        server: "Сервер",
        app: "Приложение",
        openMenu: "Открыть меню навигации",
        closeMenu: "Закрыть меню навигации",
        language: "Язык",
        currentLanguage: "Текущий язык",
        github: "Открыть RustMinerSystem на GitHub",
        downloads: {
            server: "Сервер RustMinerSystem",
            rms: "Узел RMS",
            desktop: "Приложение RustMinerSystem",
            poolNode: "PoolNode",
        },
    },
    footer: {
        brandLabel: "Footer RustMinerSystem",
        navigation: "Навигация footer",
        product: "Продукт",
        community: "Сообщество",
        github: "GitHub",
        description:
            "RustMinerSystem объединяет развертывание майнинга, операции узлов и безопасные каналы передачи в одном понятном web-интерфейсе.",
        copyright: "© {year} RustMinerSystem. Все права защищены.",
    },
    home: {
        eyebrow: "Полное решение для криптовалютного майнинга",
        title: "RustMinerSystem",
        description:
            "Используйте систему как прокси для традиционного пула или превратите устройство в настоящий pool node. Локальный клиент RMS шифрует и сжимает трафик, снижая нагрузку на канал и повышая безопасность передачи.",
        primaryCta: "Перейти к загрузкам",
        secondaryCta: "Читать документацию",
        featuresTitle:
            "Подключение майнинга, операции узлов и безопасная передача",
        features: {
            deployment: {
                title: "Два режима работы",
                text: "Подключайте традиционные майнинг-пулы через proxy или разворачивайте собственный pool node под вашу площадку.",
            },
            operations: {
                title: "Безопасный клиент RMS",
                text: "Шифруйте и сжимайте трафик майнеров, чтобы снизить нагрузку на канал и уменьшить риск атак посредника.",
            },
            localization: {
                title: "Кроссплатформенное развертывание",
                text: "Доступны сборки для Windows, Linux, ARM и ARMV7; Linux-сценарии поддерживают установку одной командой.",
            },
        },
        downloadsTitle: "Загрузки",
        downloadsDescription:
            "Скачайте сервер RustMinerSystem, клиент RMS и приложение PoolNode. В репозитории опубликованы пакеты для Windows, Linux, ARM и ARMV7.",
        releaseLink: "Открыть центр релизов",
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
            "Планируйте функции частного пула, брендированные приложения, автоматизацию развертывания и региональный onboarding.",
        points: {
            branding: {
                title: "Брендированная упаковка",
                text: "Согласуйте имена приложений, визуальные материалы и навигацию с идентичностью команды или пула.",
            },
            integrations: {
                title: "Операционные интеграции",
                text: "Свяжите релизы, панели узлов и внутреннюю поддержку с существующими системами.",
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
