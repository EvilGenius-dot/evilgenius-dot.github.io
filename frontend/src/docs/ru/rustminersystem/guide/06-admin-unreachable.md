---
id: admin-unreachable
slug: admin-unreachable
title: Админ-панель недоступна
navTitle: Админ-панель недоступна
description: Проверьте статус сервиса, web-порт, firewall, security group и secure access path, если админ-панель RustMinerSystem не открывается.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 1
---

# Админ-панель недоступна

Эта статья нужна, когда браузер не открывает админ-панель после установки, изменения web-порта, настройки firewall или изменения secure access path.

## Симптомы

- Страница админ-панели открывается с timeout или connection refused.
- Сервис запущен, но web-порт недоступен извне.
- Старый адрес перестал работать после изменения secure access path.

## Проверки

1. Уточните текущий адрес и web-порт в выводе установщика или startup-логах.
2. Проверьте, что процесс RustMinerSystem продолжает работать.
3. Проверьте firewall сервера, cloud security group и reverse proxy.
4. Если включен secure access path, убедитесь, что путь в URL совпадает с текущей конфигурацией.
5. Проверьте логи на ошибки binding порта, прав доступа или загрузки сертификата.

## Восстановление

- Сначала проверьте, что порт слушает на сервере, затем проверяйте доступ извне.
- Если порт занят, остановите конфликтующий процесс или перенесите админ-панель на другой web-порт.
- После восстановления доступа проверьте правила доступа перед возвратом сервиса в production.

## Связанные страницы

- [Установка](/ru/document/rustminersystem/installation)
- [Настройка](/ru/document/rustminersystem/configuration)
