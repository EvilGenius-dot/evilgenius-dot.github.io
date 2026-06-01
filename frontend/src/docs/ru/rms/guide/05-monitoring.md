---
id: rmsMonitoring
slug: monitoring
title: Мониторинг и эксплуатация
navTitle: Мониторинг
description: Мониторинг CPU, памяти, сетевого трафика, графиков соединений, статуса портов, фильтров, пароля backend, safe route и observer.
category: operations
categoryTitle: Эксплуатация
categoryOrder: 3
order: 6
---

# Мониторинг И Эксплуатация

Dashboard RMS периодически обновляет runtime data и показывает ресурсы, число соединений, трафик, режим сжатия и статус локальных портов.

## Карточки Dashboard

| Карточка | Что смотреть |
| --- | --- |
| CPU / Memory | Нагрузка процесса RMS и память системы. |
| Connections | Входящие соединения майнеров и исходящие remote connections. |
| Network Traffic | Тренды приема и передачи. |
| Connection Compression | Текущий режим и count outbound compression. |

Если CPU остается высоким после усиления сжатия, уменьшите уровень сжатия, увеличьте count соединений или разделите майнеры между несколькими RMS clients.

## Операции С Портами

Таблица портов поддерживает:

- Копирование miner connection address.
- Просмотр remote-peer details.
- Фильтры по remark, type и coin.
- Start и stop портов.
- Edit или delete ручных портов.

После любого изменения проверяйте inbound count, outbound count и данные worker на сервере.

## Program Settings

Меню settings содержит:

| Настройка | Назначение |
| --- | --- |
| Reset Push Address | Вернуться к flow первого запуска и инвалидировать старую push configuration. |
| Set Backend Password | Защитить доступ к RMS backend. |
| Set Safe Access Route | Разместить backend RMS под приватным route path, чтобы снизить сканирование. |
| Switch Connection Mode | Открыть настройки connection compression. |
| Exit Application | Доступно в desktop/Tauri builds. |

Изменение safe route требует restart. При открытии URL должен заканчиваться на `/`, например `http://host:port/custom/`.

## Observer Page

Frontend RMS содержит observer-page implementation. Если build и route settings включают его, read-only вход доступен под `/observer/`. Считайте его публичной поверхностью и открывайте только при необходимости.

## Регулярные Проверки

- Процесс RMS работает.
- Локальные listening ports доступны майнерам.
- Inbound connections соответствуют ожидаемому числу майнеров.
- Outbound connections соответствуют настройкам compression.
- Hashrate и reject rate server-side port нормальные.
- CPU, memory и traffic trends стабильны.
- Backend password и safe route надежно записаны.
