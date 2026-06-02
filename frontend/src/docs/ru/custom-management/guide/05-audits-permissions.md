---
id: auditsPermissions
slug: audits-permissions
title: Audit и Permission Assignment
navTitle: Audit & Permissions
description: Используйте аккаунт с audit permission для approval wallet changes и управления видимостью аккаунтов.
category: operations
categoryTitle: Эксплуатация
categoryOrder: 3
order: 5
---

# Audit и Permission Assignment

`Audit List` и `Permission Assignment` централизуют high-risk config review и управление областями аккаунтов.

## Audit List

Audit List обрабатывает wallet configuration requests от клиентов или downstream operators.

| Тип | Описание |
| --- | --- |
| Add wallet | Добавить wallet configuration для CID и монеты. |
| Edit wallet | Изменить wallet address, subaccount, ratio, device name или pool strategy. |
| Delete wallet | Удалить существующий wallet configuration. |

Страница имеет вкладки `Pending`, `Approved` и `All Requests`. Запись содержит CID, custom name, coin, wallet address, subaccount, ratio, device name, pool mode, protocol, version и submitted time.

## Audit Operations

1. Ищите по request ID, CID, custom name, coin, wallet address, device name или version.
2. Проверьте pending requests.
3. Сверьте CID, coin, ratio, device name и version.
4. Approve одну запись или batch approve выбранные.
5. Удаляйте явно ошибочные или повторные requests при необходимости.

Approved wallet changes становятся доступными к применению. Delete тоже является production write, поэтому подтвердите, что конфигурация больше не нужна.

## Permission Assignment

Permission Assignment определяет, какие аккаунты видят и обслуживают какие custom builds. Администратор выбирает parent account и прикрепляет к нему другие аккаунты.

| Область | Назначение |
| --- | --- |
| Accounts | Общее число управляемых аккаунтов. |
| Current children | Прямые дочерние аккаунты выбранного parent. |
| Current parent | CID, который сейчас просматривается. |
| Permission structure | Просмотр дерева и переход вниз по иерархии. |
| Assign account | Прикрепить аккаунт к текущему parent. |

## Изменение Ownership

Чтобы назначить аккаунт, откройте `Permission Assignment`, подтвердите current parent, найдите аккаунт, выберите его и нажмите `Assign`.

Чтобы удалить связь, найдите аккаунт в child list текущего parent и нажмите `Remove`. Аккаунт будет удален из этой parent scope.

## Влияние прав

- Dashboard считает только CID, видимые текущему аккаунту.
- Service Management показывает только services текущей области.
- Аккаунты без нужных прав не видят Audit List и Permission Assignment.
- Wallet config от downstream accounts все равно требует review аккаунтом с audit permission.

## Safety Advice

- При audit сначала проверяйте CID, coin, ratio и version.
- Перед batch approval подтвердите, что все выбранные requests относятся к одной задаче.
- После изменения прав попросите downstream account войти заново и проверить область.
- Не назначайте одному standard management account слишком много несвязанных клиентов.
