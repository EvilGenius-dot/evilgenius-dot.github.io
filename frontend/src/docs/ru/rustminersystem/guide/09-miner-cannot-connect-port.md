---
id: miner-cannot-connect-port
slug: miner-cannot-connect-port
title: Майнер не подключается к порту
navTitle: Майнер не подключается
description: Проверьте базовую сетевую доступность, статус listener, firewall и настройки pool URL на майнере, если подключение не работает после установки.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 4
---

# Майнер не подключается к порту

Это базовый checklist для установки и первого теста. Убедитесь, что майнер подключается к mining-порту, а не к web-порту админ-панели.

## Симптомы

- Firmware майнера показывает connection failure или постоянные reconnect.
- RustMinerSystem не показывает тестовый майнер.
- Upstream-пул не показывает worker.

## Проверки

1. Убедитесь, что listener-порт RustMinerSystem создан и работает.
2. Убедитесь, что майнер использует IP сервера RustMinerSystem и mining-порт.
3. Проверьте firewall сервера, cloud security group и сетевые правила площадки.
4. Убедитесь, что сеть майнера может достигнуть адрес сервера RustMinerSystem.
5. Для TLS/SSL, RMS2, RMS3, RMS3(Zstd) или KENC проверьте совпадение протокола клиента и серверного порта.
6. Создайте обычный Stratum TCP test port для проверки базовой сети.

## Восстановление

- Сначала проверьте plain TCP, затем включайте TLS, KENC или RMS.
- Если не работают только отдельные майнеры, сравните их pool URL, порт, username и password с рабочим майнером.
- После восстановления подключения проверьте, получает ли upstream-пул worker data.

## Связанные страницы

- [Установка](/ru/document/rustminersystem/installation)
- [Настройка](/ru/document/rustminersystem/configuration)
