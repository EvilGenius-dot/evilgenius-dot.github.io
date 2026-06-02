---
id: overview
slug: ""
title: Обзор документации Custom Management
navTitle: Обзор
description: Как Custom Management управляет установленными custom-сборками RustMinerSystem, статистикой, комиссиями, аудитом и правами аккаунтов.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 1
---

# Документация Custom Management

Custom Management - это операционная консоль для всех установленных custom-сборок RustMinerSystem, доступных вашему аккаунту. Это не отдельный клиент и не установщик, а центральная панель для CID, установленных клиентов, активных устройств, прав по монетам, wallet fee config, PoolNode inside fee, аудита и видимости аккаунтов.

![Панель Custom Management](/image/docs/custom-management/features/zh/dashboard.png)

*Панель администратора показывает агрегированные клиенты, активные устройства, регионы и долю монет в разрешенной области custom-сборок.*

## Назначение

| Модуль | Назначение |
| --- | --- |
| Dashboard | Клиенты, активные устройства, карта регионов, доля монет и графики по всем видимым custom-сборкам. |
| Service Management | Права монет, wallet fee config, применение к historical versions и список клиентов по CID. |
| Pool Nodes | Live hashrate, online/offline устройства, inside fee и official fee для PoolNode. |
| Audit List | Проверка запросов на добавление, изменение и удаление wallet config. |
| Permission Assignment | Иерархия аккаунтов и область видимости custom-сборок. |

## Управляемые объекты

Основная единица управления - CID. Обычно CID соответствует поставленной custom-сборке или клиентской зоне управления.

| Объект | Описание |
| --- | --- |
| Management account | Аккаунт для входа. Каждый аккаунт видит область, назначенную через управление правами. |
| Custom service | Строка в Service Management: CID, имя, активные устройства, клиенты и права монет. |
| Client | Установленный экземпляр RustMinerSystem custom build, который отправляет статистику. |
| Coin permission | Список монет, разрешенных для custom service. |
| Wallet configuration | Настройки fee wallet: anonymous wallet, subaccount, ratio, device name и pool strategy. |
| Pool-node configuration | Настройки комиссии PoolNode, отдельные от обычной proxy wallet config. |

## Права доступа

Аккаунты с расширенными правами видят `Audit List` и `Permission Assignment`, а также управляют областью видимости между management accounts. Обычные аккаунты видят только назначенные custom services.

Назначение прав влияет на:

- какие CID видны в Dashboard и Service Management;
- для каких сервисов обычный аккаунт может отправлять запросы конфигурации.

## Жизненный цикл конфигурации

1. Dashboard, service list, client list и pool-node list используются для наблюдения.
2. Coin permissions, wallet config и pool-node fee changes являются production-изменениями.
3. Добавление, изменение и удаление wallet попадает в аудит до применения.
4. Новые настройки обычно действуют для latest и future versions; historical versions активируются отдельно.

## Рекомендации

- Начинайте проверку с Dashboard: клиенты, активные устройства и основные монеты.
- Перед изменением wallet или fee подтвердите CID и монету.
- При большом числе клиентов используйте фильтры по аккаунту и монете.
- Audit, delete, fee change и permission assignment считайте production write-операциями.
