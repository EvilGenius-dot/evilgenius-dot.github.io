---
id: appCenter
slug: app-center
title: APP-информация RustMinerSystem
navTitle: APP
description: Просматривайте APP_INFO RustMinerSystem, ссылки мобильных приложений, статусы платформ и удаленную app-конфигурацию.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 16
---

# APP-информация

![APP-информация RustMinerSystem](/image/docs/rustminersystem/features/ru/app-center.png)

*APP-вход: описания RustMinerSystemAPP и PoolNodeAPP, статус релиза, ссылки на инструкции и загрузки.*

Меню `APP` показывает информацию о приложениях, возвращаемую backend-конфигурацией версии. Здесь могут быть ссылки на мобильные приложения, клиенты, custom builds, статусы платформ и заметки.

Если backend не возвращает `APP_INFO`, диалог показывает пустое состояние и кнопку обновления.

## Содержимое

Диалог может показывать:

- заголовок и описание;
- overview;
- имя приложения, title, tagline и status;
- feature tags;
- download, external или documentation links;
- строки Android, iOS, server или других платформ;
- описания платформ и actions.

Разные версии и custom deployments могут показывать разные entries.

## Использование

1. Откройте `Mining Proxy`.
2. Нажмите `APP`.
3. Проверьте приложения и статусы платформ.
4. Открывайте только доверенные download или external links.
5. Если контент пуст, обновите remote configuration и проверьте, что `/api/version` возвращает `APP_INFO`.

Публикуйте только доверенные ссылки и поддерживайте custom build URLs актуальными.
