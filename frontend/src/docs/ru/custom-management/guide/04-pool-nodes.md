---
id: poolNodes
slug: pool-nodes
title: Pool Nodes и Inside Fees
navTitle: Pool Nodes
description: Используйте Pool Nodes для live data BTC, FB, LTC, DOGE и BELLS, а также inside fee и official fee.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 4
---

# Pool Nodes и Inside Fees

![Рабочая область Pool Nodes](/image/docs/custom-management/features/zh/pool-nodes.png)

*Pool Nodes показывает live node data по монетам и поддерживает PoolNode-specific fee settings.*

Страница Pool Nodes предназначена для PoolNode-сценариев. Она независима от обычной RustMinerSystem proxy wallet config. Inside fee на этой странице применяется к pool-node клиентам с тем же CID.

## Поддерживаемые монеты

| Tab | Config coin |
| --- | --- |
| BTC | PI-BTC |
| FB | PI-FB |
| LTC | VA-LTC |
| DOGE | VA-DOGE |
| BELLS | VA-BELLS |

При переключении tab перезагружаются node list, online devices, offline devices и total hashrate.

## Summary Cards

| Метрика | Описание |
| --- | --- |
| Management scopes | Видимые CID выбранной монеты. |
| Online devices | Online устройства выбранной монеты. |
| Offline devices | Offline устройства выбранной монеты. |
| Hashrate | Live node hashrate выбранной монеты. |

Поиск фильтрует CID, email или custom name.

## Node List

Список содержит CID, custom name, live hashrate, online/offline devices, fee email, official fee, inside fee и действия.

Fee email должен быть зарегистрирован на странице RUST pool-node. Не используйте email с сайта пула вместо него.

## Inside Fee

Нажмите `Inside Fee` в строке, чтобы задать inside fee для CID и монеты.

- Email уже должен быть зарегистрирован в RUST pool-node page.
- Процент должен быть от `0` до `5`.
- Inside fee не входит в official bill ratio.

## Official Fee

Аккаунты с нужными правами могут задавать `Official Fee`. Остальные аккаунты обычно видят только inside fee или read-only node data.

Перед изменением official fee подтвердите CID, монету, fee email и бизнес/финансовую договоренность.

## Отличие от Service Management

| Страница | Управляет |
| --- | --- |
| Service Management | Coin permissions, wallet fee config, historical versions и client details. |
| Pool Nodes | Pool-node live data, online/offline devices, inside fees и official fees. |

Для обычной proxy fee config сначала проверяйте Service Management. Для PoolNode customers - эту страницу.

## Советы

- Перед сохранением подтвердите выбранную монету.
- В длинном списке ищите по CID или email.
- Не смешивайте inside fee и official fee.
- После сохранения обновите список и проверьте новый ratio.
