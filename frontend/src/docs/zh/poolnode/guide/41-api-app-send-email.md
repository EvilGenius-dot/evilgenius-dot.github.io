---
id: poolnodeApiAppSendEmail
slug: api-app-send-email
title: APP 端发送邮件接口
navTitle: APP 端发送邮件接口
description: POST https://api.d0gpool.com/app/send/email：APP 端发送邮件接口。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 40
---


# APP 端发送邮件接口

本章整理 `POST https://api.d0gpool.com/app/send/email` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

## 旧版来源

- [App端发送邮件接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-fa-song-you-jian-jie-kou.md)
