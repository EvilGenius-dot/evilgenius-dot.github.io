---
id: prl-coin-issues
slug: prl-coin-issues
title: Проблемы с PRL
navTitle: PRL coin issues
description: Совместимость PRL mining, отображение hashrate и рекомендации: pearlhash.xyz, miner software и SRB kernel могут не поддерживать fee skimming.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 12
---

# Проблемы с PRL

В текущих PRL mining path у `pearlhash.xyz` и miner software есть проблемы совместимости с fee skimming, поэтому распределение fee может не выполняться корректно. Если необходимо использовать `pearlhash.xyz`, используйте этот путь только как pure forwarding proxy и не включайте fee skimming.

## Симптомы

- Fee wallet не получает доход, или fee hashrate нестабильно появляется при использовании `pearlhash.xyz`.
- Fee skimming не срабатывает ожидаемо при PRL mining через affected miner software.
- Такая же проблема с отсутствием fee skimming может появляться при PRL mining через SRB kernel.

## Причина

`pearlhash.xyz` и affected miner software сейчас не поддерживают fee-skimming path корректно, поэтому этот путь следует использовать только как pure forwarding.

SRB kernel только недавно добавил поддержку PRL. Текущие проверки также выявили проблемы на стороне SRB kernel, из-за которых fee skimming не работает корректно.

## Отображение хешрейта

В PRL path значение hashrate, рассчитанное и показанное в RustMinerSystem, может быть не полностью точным и отличаться от статистики upstream pool. При этом соотношение fee ratio остается правильным, поэтому такая разница отображения не влияет на фактический settlement на стороне pool и итоговый доход.

## Рекомендации

- Не выбирайте `pearlhash.xyz` как PRL fee-skimming pool.
- Не используйте SRB kernel для PRL mining, если требуется fee skimming.
- Если подключение к `pearlhash.xyz` обязательно, используйте pure forwarding proxy mode и отключите fee skimming.
- Для PRL mining выбирайте pools и mining kernels, где fee skimming уже проверен и работает стабильно.

## Связанные страницы

- [Нет дохода fee-кошелька](/ru/document/rustminersystem/fee-wallet-no-revenue)
- [Потеря хешрейта](/ru/document/rustminersystem/hashrate-loss)
