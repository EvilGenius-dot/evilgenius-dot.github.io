---
id: installation
slug: installation
title: Руководство по установке RustMinerSystem
navTitle: Установка
description: Скачайте, запустите и проверьте серверный пакет RustMinerSystem.
category: deployment
categoryTitle: Развертывание
categoryOrder: 2
order: 3
---

# Установка

## Загрузка

Скачайте пакет для вашей архитектуры из центра релизов.

```bash
# Пример для Linux: замените на реальный URL загрузки
wget https://example.com/rustminersystem-linux.tar.gz
tar -xzf rustminersystem-linux.tar.gz
cd rustminersystem
```

## Запуск

```bash
# Пример команды, адаптируйте под реальный пакет релиза
./rustminersystem --config ./config.toml
```

## Проверка

После запуска проверьте:

- Процесс сервиса работает корректно.
- В логах нет ошибок конфигурации или подключения.
- Подключение к пулу успешно.
- Тестовые майнеры отправляют валидные данные.

## Диагностика установки

Если установка или первые проверки подключения не проходят, используйте отдельные статьи диагностики:

- [Админ-панель недоступна](/ru/document/rustminersystem/admin-unreachable)
- [Майнер не подключается к порту](/ru/document/rustminersystem/miner-cannot-connect-port)
- [Linux-скрипт не скачивается](/ru/document/rustminersystem/linux-script-download-failed)
