---
id: connected-no-valid-hashrate
slug: connected-no-valid-hashrate
title: Подключение есть, но нет валидного хешрейта
navTitle: Нет валидного хешрейта
description: Проверьте алгоритм монеты, протокол upstream-пула, формат кошелька, transparent forwarding, compatibility mode и replacement-настройки.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 6
---

# Подключение есть, но нет валидного хешрейта

Если порт видит подключения, путь от майнера до RustMinerSystem в целом доступен. Отсутствие валидного хешрейта чаще связано с алгоритмом, upstream-пулом, кошельком или advanced replacement.

## Симптомы

- RustMinerSystem показывает connections, но realtime или 24h hashrate остается `0`.
- Upstream-пул не показывает worker.
- В логах есть rejected shares, auth errors или protocol errors.

## Проверки

1. Убедитесь, что выбранные coin и algorithm соответствуют майнерам.
2. Проверьте адрес, порт и протокол upstream-пула.
3. Убедитесь, что формат wallet address или subaccount принимается upstream-пулом.
4. Проверьте worker error logs и port connection logs.
5. Для TP transparent forwarding учитывайте, что полная статистика монеты может быть недоступна.
6. Если включены compatibility mode или replacement-настройки, верните defaults и повторите тест.
7. Проверьте небольшую группу майнеров напрямую на upstream-пуле.

## Восстановление

- Начните со стандартного pool address и стандартного worker name.
- Включайте advanced replacement-настройки по одной.
- После восстановления хешрейта подождите хотя бы одно обновление статистики пула.

## Связанные страницы

- [Настройка](/ru/document/rustminersystem/configuration)
- [Эксплуатация](/ru/document/rustminersystem/operations)
