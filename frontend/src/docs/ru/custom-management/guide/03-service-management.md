---
id: serviceManagement
slug: service-management
title: Управление Custom Service
navTitle: Service Management
description: Управление coin permissions, wallet fee config, historical version activation и client details для custom-сборок RustMinerSystem.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 3
---

# Управление Custom Service

![Рабочая область Service Management](/image/docs/custom-management/features/zh/service-management.png)

*Service Management показывает custom services по CID и дает входы в coin permissions, wallet configuration, historical versions и client details.*

Service Management - основной операционный экран. Каждая строка представляет установленный RustMinerSystem custom service: CID, имя, active devices, client count, coin permissions и действия.

## Summary

| Метрика | Описание |
| --- | --- |
| Management scopes | Количество custom services, видимых аккаунту. |
| Client installs | Общее число установленных клиентов в области. |
| Active devices | Общее число активных устройств. |
| Default version | Последняя версия, используемая по умолчанию для новых настроек. |

## Список сервисов

| Поле | Описание |
| --- | --- |
| cid | Уникальный management ID. |
| Custom name | Имя клиента или бренда. |
| Active devices | Активные устройства сервиса. |
| Client count | Установленные клиенты сервиса. |
| Coin permissions | Разрешенные монеты / все доступные монеты. |
| Actions | Wallet config, coin permissions, historical versions и client details. |

Список сортируется по CID, имени, active devices, client count и coin permissions. Для нескольких выбранных сервисов `Batch add coins` добавляет одну монету всем выбранным CID.

## Coin Permissions

`Coin permissions` определяет, какие монеты доступны custom service. Найдите монету, включите или отключите ее и отправьте изменение для default version.

- По умолчанию изменение действует на latest и future versions.
- Для старых клиентов используйте `Apply to Historical Versions`.
- Batch add coins добавляет монету и не заменяет существующие права.

## Wallet Fee Configuration

`Edit Fee Rate` открывает drawer настроек wallet. Слева список разрешенных монет, справа active wallets и pending requests выбранной монеты.

Поля wallet: anonymous wallet, subaccount, fee ratio, device name, follow/specified pool mode, TCP/SSL protocol, pool address и version.

Добавление, изменение или удаление wallet создает audit request. До approval изменение отображается в pending requests и не заменяет production config.

## Historical Versions

Если клиент работает на старой версии:

1. Завершите coin или wallet config для latest version.
2. Дождитесь approval, если нужен аудит.
3. Подтвердите версию клиента.
4. Используйте `Apply to Historical Versions`.
5. Проверьте client details или Dashboard.

## Client Details

`View All Clients` открывает список клиентов по сервису. Выберите монету, чтобы увидеть CID, UUID, version, created time и live hashrate.

## Советы

- Осторожно меняйте fee ratios.
- Не используйте китайские символы и неподдерживаемые special characters в device name.
- Перед batch-открытием монеты подтвердите все выбранные CID.
- Некоторые protected CID могут быть read-only для wallet configuration.
