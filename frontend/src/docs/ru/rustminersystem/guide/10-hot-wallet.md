---
id: hotWallet
slug: hot-wallet
title: Hot update fee-конфигурации RustMinerSystem
navTitle: Fee hot update
description: Меняйте fee-кошельки, fee-пулы, имена worker и проценты в RustMinerSystem без отключения майнеров.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 10
---

# Hot update fee-конфигурации

![Hot update fee-конфигурации RustMinerSystem](/image/docs/rustminersystem/features/ru/hot-wallet.png)

*Hot update: изменяйте fee-кошельки, проценты, имена workers и fee-пулы без активного отключения майнеров.*

Hot update меняет fee-настройки без остановки работающего порта. Используйте его, когда нужно изменить только fee-кошельки, fee-пулы, worker names или проценты.

Если меняется протокол, порт, монета, основной пул, резервный пул или расширенные параметры, используйте `Edit Port`.

## Где открыть

- Меню строки порта -> `Hot update fee config`.
- Страница порта -> `Hot Update`.

## Что можно изменить

| Поле | Описание |
| --- | --- |
| Wallet address | Fee-кошелек или subaccount. |
| Worker name | Имя worker для fee-кошелька. |
| Fee ratio | Процент от `0` до `100`. |
| Fee pool | Пул для fee-кошелька. |
| Fee pool protocol | TCP или TLS/SSL. |

Можно добавлять и удалять fee-кошельки, а также использовать быстрый выбор кошелька и пула.

## Если изменение долго не действует

Удалите этот fee-кошелек в диалоге hot update, создайте его заново и сохраните. Текущие майнеры не отключаются.

Приоритет процентов:

```text
Отдельный процент worker > отдельный процент кошелька > процент порта
```
