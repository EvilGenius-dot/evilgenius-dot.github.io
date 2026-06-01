---
id: linux-script-download-failed
slug: linux-script-download-failed
title: Linux-скрипт не скачивается
navTitle: Linux-скрипт не скачивается
description: Проверьте доступность GitHub, DNS, TLS-сертификаты, fallback URL и ручную установку binary, если Linux install script не скачивается.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 8
---

# Linux-скрипт не скачивается

Ошибки загрузки Linux install script обычно вызваны сетью, DNS, TLS certificate validation или ограниченным доступом к GitHub. Скрипт не является единственным способом установки.

## Симптомы

- Команда установки долго не отвечает.
- `curl` сообщает о connection, DNS или TLS error.
- Скрипт скачан, но дальнейшие файлы получить не удается.

## Проверки

1. Проверьте, может ли сервер обратиться к GitHub.
2. Проверьте DNS resolution и при необходимости смените DNS.
3. Попробуйте fallback install URL из руководства по установке.
4. Если ошибка связана с TLS, проверьте время сервера и системные CA certificates.
5. Если outbound-доступ ограничен, скачайте binary в другой сети и загрузите его на сервер.
6. Разделите проблему: не скачивается сам скрипт или ошибка возникает внутри скрипта.

## Восстановление

- Предпочитайте официальный GitHub URL, fallback используйте при сетевых ограничениях.
- Для production храните проверенный binary backup.
- После установки выполните first-start verification.

## Связанные страницы

- [Установка](/ru/document/rustminersystem/installation)
