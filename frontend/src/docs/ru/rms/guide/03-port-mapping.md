---
id: rmsPortMapping
slug: port-mapping
title: Mapping портов
navTitle: Mapping портов
description: Добавление и управление локальными портами RMS, удаленными адресами сервера, протоколами, паролями и несколькими upstream peer.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 4
---

# Mapping Портов

Mapping портов RMS создает локальный listening port для майнеров и соединяет его с одним или несколькими RMS protocol ports сервера RustMinerSystem.

## Назначение Функции

Используйте mapping, чтобы майнеры подключались к локальному LAN-адресу, а RMS выполнял encrypted compressed communication с сервером.

## Добавить Ручной Порт

1. Откройте RMS dashboard.
2. Нажмите `Manual Add`.
3. Задайте `Local Listening Port`.
4. Выберите монету.
5. Выберите RMS3, RMS3(Zstd) или RMS2 как remote protocol.
6. Введите remote address в формате `address:port`.
7. Введите пароль, если server port его требует.
8. Для RMS3-family настройте super compression и уровень сжатия.
9. Добавьте больше remote addresses, если нужна балансировка.
10. Сохраните и проверьте, что порт запущен.

Монета, remote protocol, пароль и параметры сжатия должны совпадать с server-side RMS protocol port.

## Список Remote Address

У каждого локального порта может быть несколько upstream peers. RMS распределяет входящие соединения между доступными remote addresses. Это балансировка на стороне локального RMS client.

Используйте несколько peer, если для одной монеты и протокола подготовлено несколько портов RustMinerSystem или несколько серверов. Каждый peer должен быть совместим с выбранной монетой и протоколом.

## Таблица Портов

Таблица RMS показывает:

| Поле | Значение |
| --- | --- |
| Status | Running, preparing, waiting или error. |
| Coin | Монета этой локальной mapping. |
| Remark | Операторская заметка, часто в формате `category-title`. |
| Miner connection address | Локальный адрес для майнеров; нажмите, чтобы скопировать. |
| Load balancing | Детали remote peer и их число. |
| Inbound connections | Соединения, входящие в этот локальный порт. |
| Outbound connections | Соединения RMS к remote peers. |
| Type | Получен автоматически из push config или добавлен вручную. |

Ручные порты можно остановить, запустить, редактировать и удалить. Автоматические порты можно остановить и запустить, но синхронизируемые поля контролируются push configuration.

## Remarks И Фильтры

Таблица поддерживает фильтрацию по:

- Категории remark.
- Типу порта: all, auto fetched или manual.
- Монете.

Если использовать remarks вроде `farm-a-btc` или `building1-ltc`, префикс до `-` можно использовать как категорию.

## Правила Безопасного Редактирования

- Не меняйте рабочий порт в пик майнинга без rollback address.
- Проверяйте формат `address:port` перед сохранением.
- Если серверный пароль задан, локальный пароль должен быть идентичным.
- Для монет, кроме BTC и LTC, начинайте с консервативных настроек сжатия.
