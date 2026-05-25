---
id: configuration
slug: configuration
title: Настройка RustMinerSystem
navTitle: Настройка
description: Настройте адрес прослушивания, endpoint пула, учетные данные воркера и логирование RustMinerSystem.
order: 4
---

# Настройка

## Базовая конфигурация

```toml
# пример config.toml
[server]
listen = "0.0.0.0:3333"

[pool]
endpoint = "pool.example.com:443"
worker = "your_worker_name"
password = "your_password"

[log]
level = "info"
```

## Описание конфигурации

| Поле | Описание |
| --- | --- |
| `server.listen` | Локальный адрес прослушивания RustMinerSystem |
| `pool.endpoint` | Адрес upstream-пула или собственного узла |
| `pool.worker` | Имя воркера или идентификатор аккаунта |
| `pool.password` | Пароль подключения к пулу |
| `log.level` | Уровень логирования |
