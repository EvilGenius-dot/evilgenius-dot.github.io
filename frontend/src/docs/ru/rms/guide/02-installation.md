---
id: rmsInstallation
slug: installation
title: Установка RMS
navTitle: Установка
description: Установка RMS3 на Linux и Windows, default access, WebView2, выбор архитектуры и legacy RMS2.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 2
---

# Установка RMS

RMS3 — рекомендуемый текущий клиент. Согласно руководству RMS на GitHub, для протокола RMS3 нужен сервер RustMinerSystem `v4.5.0` или новее, а RMS3 не совместим с RMS1/RMS2 protocol ports. Используйте legacy RMS2 installer только если нужно подключаться к старому RMS2 server-side deployment.

Источник: <https://github.com/EvilGenius-dot/RMS>

## Перед Установкой

- Выберите устройство, которое постоянно работает в LAN майнинг-площадки.
- Назначьте устройству фиксированный LAN IP. Если DHCP изменит IP после перезагрузки, майнеры потеряют адрес RMS.
- Подготовьте root-доступ для Linux.
- При необходимости откройте web port RMS в LAN firewall. Default access: `http://DEVICE_IP:42703`.
- Подготовьте RMS protocol port на сервере RustMinerSystem до подключения майнеров.

## Установка RMS3 На Linux

Сначала перейдите в root:

```bash
sudo -i
```

Запустите официальную GitHub-команду установки:

```bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)
```

Если GitHub недоступен с сервера, README также дает альтернативную линию:

```bash
bash <(curl -s -L -k https://rustminersystem.com/install.sh)
```

Installer откроет интерактивное меню. Выберите `Install`, затем CPU architecture и download route.

Типовые варианты архитектуры:

| Опция | Типовое устройство |
| --- | --- |
| `x86-64` | Большинство Intel/AMD Linux servers и mini PC. |
| `aarch64` | 64-bit ARM devices. |
| `arm-musleabi`, `arm-musleabihf`, `armv7-*` | Старые ARM devices. |

Linux script устанавливает RMS в `/root/rms`, на systemd systems создает service `rmservice`, запускает программу и выводит адрес доступа после старта.

## Установка RMS3 На Windows

RMS3 имеет две Windows-сборки.

| Сборка | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-no-gui/rms.exe> |

Если GUI version открывается белым экраном, установите Microsoft Edge WebView2:

```text
https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/MicrosoftEdgeWebview2Setup.exe
```

После запуска Windows client откройте страницу RMS с этой машины или из LAN и продолжайте setup and pairing.

## Первый Доступ После Установки

После установки откройте браузер:

```text
http://DEVICE_IP:42703
```

Затем введите push address, если deployment его предоставляет, или пропустите push flow и добавьте remote server addresses вручную.

Первые проверки:

- Страница RMS открывается с другого устройства в LAN.
- IP устройства фиксированный.
- RMS protocol port сервера RustMinerSystem доступен.
- Локальный RMS client и server port используют одно поколение RMS protocol.

## Управление Linux Script

Повторный запуск Linux install script открывает management menu. Script поддерживает:

- Install.
- Stop RMS.
- Restart RMS.
- Uninstall RMS.

Используйте меню script для обычного обслуживания, если deployment не управляет RMS другим service manager.

## Legacy RMS2

Используйте RMS2 только для старых deployment, которым нужен RMS2. Не смешивайте RMS3 client с RMS2-only server ports.

Linux RMS2:

```bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/OLD_2/install.sh)
```

Альтернативная RMS2 линия:

```bash
bash <(curl -s -L -k https://rustminersystem.com/OLD2_install.sh)
```

Windows RMS2:

| Сборка | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-no-gui/rms.exe> |
| WebView2 installer | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/MicrosoftEdgeWebview2Setup.exe> |

## Следующий Шаг

После установки и проверки доступа продолжайте с [настройкой и привязкой](/ru/document/rms/setup).
