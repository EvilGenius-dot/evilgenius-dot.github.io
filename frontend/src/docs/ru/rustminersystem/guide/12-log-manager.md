---
id: logManager
slug: log-manager
title: Логи и диагностика RustMinerSystem
navTitle: Логи
description: Используйте логи RustMinerSystem для runtime, ошибок, операций, проблем подключения, wallet firewall, IP-доступа и релизов.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 12
---

# Логи и диагностика

![Менеджер логов RustMinerSystem](/image/docs/rustminersystem/features/ru/log-manager.png)

*Менеджер логов: системные логи, диагностика, security-логи и версии в одном окне.*

Откройте `Log Manager` в верхнем меню. Красный бейдж появляется, если есть записи о проблемах подключения.

## Типы логов

| Группа | Лог | Назначение |
| --- | --- | --- |
| System | Running log | Последний runtime-вывод. |
| System | Error log | Ошибки выполнения. |
| System | Operation log | Недавние операции панели. |
| Troubleshooting | Connection trouble | Диагностика подключений. |
| Security | Wallet blacklist / whitelist log | Блокировки кошельков. |
| Security | IP block log | Блокировки IP. |
| Security | All port IP access | IP, которые обращались к proxy-портам. |
| Release | Version log | Локальная версия, последняя версия и changelog. |

## Диагностика

Если майнер не подключается:

1. Откройте порт и проверьте TCP monitor.
2. Если IP не появляется, проверьте URL майнера, firewall, security group и порт.
3. Если IP есть, но хешрейта нет, смотрите connection logs и connection trouble.
4. Проверьте адрес и протокол пула.
5. Проверьте wallet blacklist, wallet whitelist и IP blacklist.
6. Сравните с данными worker в upstream-пуле.

Для ошибок порта смотрите статус строки, error log, running log и фактическую конфигурацию порта.

При обращении за помощью укажите версию, UUID, порт, монету, протокол, пул, кошелек, worker, IP майнера, время и ключевые строки логов.
