---
id: dashboard
slug: dashboard
title: Dashboard Custom Management
navTitle: Dashboard
description: Используйте Dashboard для просмотра клиентов, активных устройств, регионов, доли монет и трендов hashrate по custom-сборкам.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 2
---

# Dashboard Custom Management

![Панель Custom Management](/image/docs/custom-management/features/zh/dashboard.png)

*Dashboard по умолчанию показывает все custom-сборки, доступные текущему аккаунту.*

Dashboard - стартовая страница после входа. Она дает быстрый health view: scope аккаунта, монеты, client installs, active devices, мировая карта, графики и доля монет.

## Фильтры

| Фильтр | Назначение |
| --- | --- |
| Management scope | Переключение между `All` и конкретным CID/custom name. |
| Coin | Переключение между `All` и конкретной монетой для hashrate, fee hashrate, карты и графиков. |

При выборе `All` монет остаются client count, active devices и device share. Live hashrate и графики требуют конкретную монету.

## Метрики

| Метрика | Описание |
| --- | --- |
| Clients | Количество установленных клиентов в текущей области. |
| Active Devices | Устройства с актуальной активностью. |
| Total Hashrate | Live hashrate выбранной монеты. |
| Fee Hashrate | Live fee hashrate выбранной монеты. |

## Карта регионов

Карта группирует устройства или hashrate по региону IP. Используйте ее, чтобы понять, находятся ли устройства в ожидаемых странах, не упал ли один регион резко и не локализована ли проблема в одной географии.

Если регион неизвестен, IP lookup не вернул страну. Продолжайте проверку через client details.

## Графики

| Вид | Назначение |
| --- | --- |
| Hashrate chart | Сравнение total hashrate и fee hashrate по времени. |
| Active-device chart | Динамика активных устройств выбранной монеты. |

При жалобах на hashrate, fee hashrate или offline devices сначала фильтруйте по CID и монете, затем смотрите время на графике.

## Ежедневная проверка

1. Проверьте `Clients` и `Active Devices`.
2. Посмотрите долю монет.
3. Выберите ключевые монеты и проверьте live hashrate, fee hashrate и графики.
4. Если проблема в регионе, переходите к client details или Pool Nodes.
5. Если затронут один custom build, отфильтруйте его CID и повторите проверку.
