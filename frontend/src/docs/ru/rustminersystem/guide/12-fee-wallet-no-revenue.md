---
id: fee-wallet-no-revenue
slug: fee-wallet-no-revenue
title: Fee-кошелек не получает доход
navTitle: Нет дохода fee-кошелька
description: Проверьте default fee ratio, independent overrides, формат кошелька, протокол fee-пула и видимость worker на upstream-пуле.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 7
---

# Fee-кошелек не получает доход

Если fee-кошелек не получает доход, проверьте default fee ratio, independent overrides, адрес fee-пула, формат кошелька и появление fee worker на upstream-пуле.

## Симптомы

- Основные майнеры получают доход, а fee-кошелек нет.
- Fee worker не виден на upstream-пуле.
- Доля дохода отличается от ожидаемой.

## Проверки

1. Убедитесь, что default fee ratio порта не равен `0`.
2. Проверьте адрес fee-кошелька, worker name, pool address и protocol.
3. Убедитесь, что upstream-пул поддерживает формат wallet или subaccount.
4. Проверьте, не перекрывают ли wallet-specific или miner-specific ratios default ratio порта.
5. Если fee-кошельков несколько, проверьте суммарную долю.
6. Протестируйте на небольшой группе майнеров и убедитесь, что upstream-пул видит fee worker.
7. Дождитесь обновления статистики upstream-пула.

## Восстановление

- Начните с одного fee-кошелька и небольшой доли.
- Фиксируйте время изменения independent ratios.
- Fee на уровне PoolNode относится к settlement layer; смотрите [документацию PoolNode](/ru/document/poolnode).

## Связанные страницы

- [Настройка](/ru/document/rustminersystem/configuration)
- [PoolNode](/ru/document/poolnode)
