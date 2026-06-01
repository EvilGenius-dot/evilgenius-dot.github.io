---
id: poolnodeApiLoginToken
slug: api-login-token
title: Вход и получение TOKEN
navTitle: Вход и получение TOKEN
description: POST /api/user/login: Вход и получение TOKEN.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 11
---


# Вход и получение TOKEN

В этом разделе описаны запрос, параметры и ответ для `POST /api/user/login`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/user/login

METHOD: 
POST

REQUEST BODY:
{
    email: String,    // 登录的邮箱地址
    code: String      // 获取到的邮箱验证码
}

RESULT:
{
    "status": 0,
    "error": null,
    "data": Token
}
```

发送邮箱验证码请参考[发送登录邮箱验证码](/ru/document/poolnode/api-send-login-email)

后续所有接口都需要在请求头内加入Authorization字段，值为Bearer {Token}，用来过身份验证。

```
// headers
{
    Authorization: Bearer Token
}
```

## Старый источник

- [登录、获取TOKEN](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/deng-lu-huo-qu-token.md)
