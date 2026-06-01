---
id: rmsTroubleshooting
slug: troubleshooting
title: Диагностика RMS
navTitle: Диагностика
description: Диагностика доступа майнеров, server pairing, роста reject, конфликтов портов, ошибок safe route и путей отката.
category: operations
categoryTitle: Эксплуатация
categoryOrder: 3
order: 7
---

# Диагностика RMS

Большинство проблем RMS связано с несовпадением server/client settings, доступностью локального порта, слишком агрессивным сжатием или изменениями route/security.

## Майнеры Не Подключаются К RMS

Проверьте:

- Майнеры используют локальный адрес RMS, а не remote server port.
- Локальный listening port создан и работает.
- LAN firewall разрешает доступ майнеров к RMS host и port.
- Порт не занят другим процессом.
- URL майнера использует скопированный формат `stratum+tcp://LOCAL_RMS_IP:PORT`, когда это требуется.

## RMS Не Подключается К Серверу

Проверьте:

- Remote address имеет формат `address:port`.
- RMS protocol port сервера RustMinerSystem работает.
- Local remote protocol совпадает с server listening protocol.
- Монета совпадает на обеих сторонах.
- Пароль одинаковый на обеих сторонах или пустой на обеих.
- Security group, firewall или upstream network не блокируют server port.

## Reject Rate Растет

Используйте консервативный откат:

1. Уменьшите уровень сжатия RMS3.
2. Отключите super compression на сервере и локальном RMS.
3. Увеличьте count сжатия соединений.
4. Уменьшите число майнеров на один RMS client.
5. Проверьте latency upstream pool и CPU сервера.

Малые монеты и редкие firmware майнеров могут быть чувствительнее к агрессивным RMS3 settings.

## Outbound Connection Count Неожиданный

Проверьте:

- Count сжатия соединений.
- Разные монеты и разные локальные порты создают отдельные outbound groups.
- Несколько remote peers могут создать больше outbound paths.
- Auto-fetched и manual ports могут работать одновременно.

## Проблема Backend Route Или Password

Если safe route настроен неверно:

- При вводе route не должен начинаться или заканчиваться на `/`.
- При посещении финальный URL должен заканчиваться на `/`.
- Если после restart route потерян, используйте сохраненный preview URL или локальный способ доступа из deployment notes.

Если backend password изменен и потерян, используйте процедуру reset вашего deployment или восстановление из известного backup.

## План Отката

До production rollout сохраните:

- Прямой proxy address RustMinerSystem для майнеров.
- Версию RMS client и backup конфигурации портов.
- JSON backup портов RustMinerSystem.
- Исходный count сжатия, уровень сжатия и состояние super compression.

При большом инциденте сначала вернитесь к low compression или отключите super compression. Если площадка все еще нестабильна, временно направьте майнеры на прямой proxy address RustMinerSystem и затем чините RMS.
