---
id: ltc-coin-issues
slug: ltc-coin-issues
title: Проблемы с LTC
navTitle: LTC coin issues
description: Для LTC mining не рекомендуется направлять fee-skimming hashrate на F2Pool: fee hashrate может быть недостаточным; лучше использовать ViaBTC.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 13
---

# Проблемы с LTC

При fee skimming для LTC mining не задавайте F2Pool как fee target. На практике этот путь может давать недостаточный fee hashrate: фактический fee hashrate ниже заданной доли или статистика fee на стороне pool нестабильна.

## Симптомы

- Основной LTC hashrate нормальный, но у fee wallet недостаточный hashrate.
- Fee ratio настроен правильно, но F2Pool показывает fee hashrate ниже ожидаемого.
- Fee worker на F2Pool отображается нестабильно, а доход не соответствует заданной доле.

## Рекомендации

- Не направляйте LTC fee skimming на F2Pool.
- Для LTC fee target рекомендуется использовать ViaBTC.
- После смены fee pool наблюдайте минимум одно полное statistics window pool, прежде чем оценивать стабильность фактической доли fee.

## Связанные страницы

- [Нет дохода fee-кошелька](/ru/document/rustminersystem/fee-wallet-no-revenue)
- [Потеря хешрейта](/ru/document/rustminersystem/hashrate-loss)
