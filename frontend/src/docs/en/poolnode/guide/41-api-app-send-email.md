---
id: poolnodeApiAppSendEmail
slug: api-app-send-email
title: APP Send Email
navTitle: APP Send Email
description: POST https://api.d0gpool.com/app/send/email: APP Send Email.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 40
---


# APP Send Email

This chapter documents the request shape, parameters, and response for `POST https://api.d0gpool.com/app/send/email`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

## Legacy Source

- [App端发送邮件接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-fa-song-you-jian-jie-kou.md)
