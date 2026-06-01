---
id: poolnodeApiLoginToken
slug: api-login-token
title: 登录、获取 TOKEN
navTitle: 登录、获取 TOKEN
description: POST /api/user/login：登录、获取 TOKEN。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 11
---


# 登录、获取 TOKEN

本章整理 `POST /api/user/login` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

发送邮箱验证码请参考[发送登录邮箱验证码](/zh/document/poolnode/api-send-login-email)

后续所有接口都需要在请求头内加入Authorization字段，值为Bearer {Token}，用来过身份验证。

```
// headers
{
    Authorization: Bearer Token
}
```

## 旧版来源

- [登录、获取TOKEN](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/deng-lu-huo-qu-token.md)
