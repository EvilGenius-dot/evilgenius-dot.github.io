---
id: hashrate-loss
slug: hashrate-loss
title: Потеря хешрейта
navTitle: Потеря хешрейта
description: Диагностика случаев, когда customer pool показывает меньший hashrate: сеть, reject rate, число fee wallets, fee ratio и cross-pool fee.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 11
---

# Потеря хешрейта

Если итоговый hashrate в customer pool ниже ожидаемого или не совпадает со статистикой RustMinerSystem, сначала отделите обычную разницу статистических окон pool от реальной потери из-за сети, rejects или fee configuration.

## Симптомы

- Customer pool показывает effective hashrate ниже ожидаемого.
- Hashrate в RustMinerSystem, customer pool и fee pool долго не совпадает.
- В customer pool растет reject rate или worker-графики нестабильны.

## Проверки

1. Сначала проверьте network path. Посмотрите reject rate в customer pool и убедитесь, нет ли высокой задержки, packet loss, неудачного routing или нестабильных соединений между RustMinerSystem и customer pool. Плохая сеть снижает customer hashrate или повышает rejects, и большинство случаев потери хешрейта связано именно с network path.
2. Проверьте количество fee wallets и fee ratio. Слишком много fee wallets или слишком высокий fee ratio увеличивают сложность переключения и статистики, а также могут усиливать потери. Если нужно разделить доход между несколькими получателями, лучше настроить один fee wallet в RustMinerSystem, а разделение сделать на стороне pool.
3. Проверьте, использует ли fee pool тот же pool и адрес, что customer pool. Лучше, чтобы fee pool и customer pool использовали один и тот же pool address. Тогда при проблеме pool или канала вся цепочка покажет проблему одновременно, и диагностика будет проще. Cross-pool fee добавляет различия network quality, statistics windows и connection stability, что может влиять на customer hashrate или усложнять поиск источника потерь.

## Восстановление

- Проверьте небольшой набор майнеров на том же customer pool address и наблюдайте reject rate, latency и effective hashrate.
- Если rejects необычно высоки, переключитесь на более близкий регион pool, оптимизируйте routing сервера или используйте узел с лучшей сетью.
- Уменьшите число fee wallets и слишком высокий ratio, затем постепенно возвращайте настройки после стабилизации базовой цепочки.
- По возможности используйте один и тот же pool и address для customer hashrate и fee hashrate, чтобы убрать cross-pool переменные.
- После изменений наблюдайте минимум одно полное statistics window pool, а не делайте выводы по нескольким минутам графика.

## Связанные страницы

- [Есть подключение, но нет валидного хешрейта](/ru/document/rustminersystem/connected-no-valid-hashrate)
- [Создать порт](/ru/document/rustminersystem/proxy-port)
- [Fee hot update](/ru/document/rustminersystem/hot-wallet)
