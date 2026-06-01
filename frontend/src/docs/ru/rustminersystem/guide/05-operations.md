---
id: operations
slug: operations
title: Эксплуатация RustMinerSystem
navTitle: Эксплуатация
description: Изучите ежедневные проверки, поэтапный запуск, процесс обновления и подготовку отката RustMinerSystem.
category: deployment
categoryTitle: Развертывание
categoryOrder: 2
order: 5
---

# Эксплуатация

## Ежедневные проверки

- Проверяйте состояние сервиса.
- Проверяйте количество подключений, ошибки в логах и задержку.
- Убедитесь в стабильности upstream-пула или узла.
- Контролируйте использование системных ресурсов.

## Процесс обновления

1. Прочитайте release notes.
2. Сделайте резервную копию текущего конфигурационного файла.
3. Проверьте новую версию в тестовой среде.
4. Запланируйте окно обслуживания.
5. Обновите production-узлы.
6. Проверьте подключения, логи и отправку данных майнерами.

## Раздел диагностики

Типовые сбои вынесены в отдельную категорию диагностики:

- [Админ-панель недоступна](/ru/document/rustminersystem/admin-unreachable)
- [Вход в админ-панель не выполняется](/ru/document/rustminersystem/admin-login-failed)
- [Не удается создать proxy-порт](/ru/document/rustminersystem/proxy-port-create-failed)
- [Майнер не подключается к порту](/ru/document/rustminersystem/miner-cannot-connect-port)
- [Майнер не подключается к proxy-порту](/ru/document/rustminersystem/miner-cannot-connect-proxy)
- [Подключение есть, но нет валидного хешрейта](/ru/document/rustminersystem/connected-no-valid-hashrate)
- [Fee-кошелек не получает доход](/ru/document/rustminersystem/fee-wallet-no-revenue)
- [Linux-скрипт не скачивается](/ru/document/rustminersystem/linux-script-download-failed)

## FAQ

### Сколько майнеров поддерживает RustMinerSystem?

Это зависит от ресурсов сервера, пропускной способности сети, стабильности upstream-пула и результатов нагрузочного тестирования. Перед production-запуском выполняйте поэтапные проверки подключения.

### Требуется ли остановка при обновлении?

Это зависит от способа развертывания и изменений версии. Для production-среды рекомендуется запланировать окно обслуживания и подготовить план отката.
