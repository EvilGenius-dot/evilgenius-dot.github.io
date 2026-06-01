---
id: poolnodeApiSendUserEmail
slug: api-send-user-email
title: 发送用户相关操作邮箱验证码
navTitle: 发送用户相关操作邮箱验证码
description: POST /api/user/email：发送用户相关操作邮箱验证码。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 10
---


# 发送用户相关操作邮箱验证码

本章整理 `POST /api/user/email` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

用户登录之后，一些用户操作相关接口需要获取邮箱验证码,  例如修改、绑定支付钱包地址等操作，统一通过此接口发送邮件验证码。

```
URL: 
/api/user/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
```

滑动验证码返回值获取请参考[调用、获取滑动验证码](/zh/document/poolnode/api-captcha)

## 旧版来源

- [发送用户相关操作邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-yong-hu-xiang-guan-cao-zuo-you-xiang-yan-zheng-ma.md)
