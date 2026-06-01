---
id: poolnodeApiUserInfo
slug: api-user-info
title: Получить базовые данные пользователя
navTitle: Получить базовые данные пользователя
description: GET /api/user/info: Получить базовые данные пользователя.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 12
---


# Получить базовые данные пользователя

В этом разделе описаны запрос, параметры и ответ для `GET /api/user/info`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/user/info

METHOD: 
GET

RESULT:
{
    "email": String,        // 用户的主账号邮箱地址
    "project_id": Number,   // 无需关注
    "user_id": Number       // 用户uid
}
```

## Старый источник

- [获取用户基础信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-yong-hu-ji-chu-xin-xi.md)
