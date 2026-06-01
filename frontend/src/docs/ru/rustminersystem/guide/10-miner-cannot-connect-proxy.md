---
id: miner-cannot-connect-proxy
slug: miner-cannot-connect-proxy
title: Майнер не подключается к proxy-порту
navTitle: Ошибка proxy-подключения
description: Проверьте настройки майнера, сетевые политики, TLS-сертификаты, KENC-ключи и параметры RMS при сбоях подключения к production proxy-порту.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 5
---

# Майнер не подключается к proxy-порту

В production такая проблема может быть связана с настройками майнера, сетевой политикой, listener-протоколом, сертификатами, KENC-ключами или RMS-клиентом.

## Симптомы

- Количество online-майнеров резко падает.
- Один proxy-порт не работает, а другие порты остаются здоровыми.
- RMS запускается локально, но майнеры не попадают в RustMinerSystem через RMS.

## Проверки

1. Убедитесь, что майнеры подключаются к mining-порту, а не к admin-порту.
2. Проверьте cloud security groups, firewall сервера, ACL площадки и внутреннюю маршрутизацию.
3. Убедитесь, что listener-протокол совпадает с протоколом майнера или RMS-клиента.
4. Для TLS/SSL проверьте срок сертификата, полноту chain и соответствие domain.
5. Для KENC проверьте совпадение ключей клиента и сервера.
6. Для RMS3 или RMS3(Zstd) проверьте protocol, coin, password, connection compression count и super-compression.
7. По connection logs отличите недоступность сети, ошибку auth, protocol mismatch и upstream pool failure.

## Восстановление

- Новые протоколы проверяйте на отдельном тестовом порту.
- Для RMS-клиента используйте [документацию RMS](/ru/document/rms).
- При массовом offline откатитесь к последнему стабильному протоколу порта и версии клиента.

## Связанные страницы

- [Настройка](/ru/document/rustminersystem/configuration)
- [RMS](/ru/document/rms)
