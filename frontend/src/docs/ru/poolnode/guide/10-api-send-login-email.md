---
id: poolnodeApiSendLoginEmail
slug: api-send-login-email
title: Отправка кода входа на email
navTitle: Отправка кода входа на email
description: POST /api/email: Отправка кода входа на email.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 9
---


# Отправка кода входа на email

В этом разделе описаны запрос, параметры и ответ для `POST /api/email`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
```

滑动验证码返回值获取请参考[调用、获取滑动验证码](/ru/document/poolnode/api-captcha)

## Старый источник

- [发送登录邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-deng-lu-you-xiang-yan-zheng-ma.md)
