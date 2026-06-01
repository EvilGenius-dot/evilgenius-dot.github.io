---
id: poolnodeApiAppSendEmail
slug: api-app-send-email
title: Отправка email APP
navTitle: Отправка email APP
description: POST https://api.d0gpool.com/app/send/email: Отправка email APP.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 40
---


# Отправка email APP

В этом разделе описаны запрос, параметры и ответ для `POST https://api.d0gpool.com/app/send/email`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

## 请求 URL

https://api.d0gpool.com/app/send/email

## 请求方式

POST

## 请求示例

```
{
"address": "",//邮箱地址
"token": ""//滑动验证码获取到的token
}
```

## 请求参数说明

| 参数名     | 说明             |
| ------- | -------------- |
| address | 邮箱地址           |
| token   | 滑动验证码获取到的token |

## Старый источник

- [App端发送邮件接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-fa-song-you-jian-jie-kou.md)
