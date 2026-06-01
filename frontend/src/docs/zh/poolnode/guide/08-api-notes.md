---
id: poolnodeApiNotes
slug: api-notes
title: API 使用注意事项
navTitle: API 使用注意事项
description: PoolNode 开放式 API：API 使用注意事项。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 7
---


# API 使用注意事项

本章说明 PoolNode 用户端开放式 API 的调用基址、鉴权方式、滑动验证码和币种参数规则。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

此 API 为 PoolNode 用户端开放接口，可用于开发自有用户前端、APP、管理工具或第三方查询工具。

注意：

接口调用地址为

```
用户端访问地址:端口+安全地址
(如果未设置安全地址，则调用路径为用户端访问地址:端口)

例：

例如您的用户端访问地址为 http://127.0.0.1/{安全地址}/
则 API 调用地址为 http://127.0.0.1/{安全地址}/{API URL}

如未设置安全地址, 则直接调用根路径即可
```

【**注意**】 **所有接口除登录外，均需要在请求头使用Authorization字段来传入token以验证身份, token获取方式详见**[**登录、获取TOKEN**](/zh/document/poolnode/api-login-token)**,   调用其他接口时header应传入**

请求头的`Content-Type` 应为 `application/json`

```
Authorization: Bearer 获取到的TOKEN
```

部分接口需要传入滑动验证码成功后的返回值,   关于滑动验证码调用请参考[滑动验证码](/zh/document/poolnode/api-captcha)。

**注意：**

由于历史原因，所有接口需要传入币种的参数均需要加入特殊标记，例如BTC需要传PI-BTC,  以下为币种参数对照表。

BTC:  **PI-BTC**

LTC: **VA-LTC （赠币跟随主币, 例如DOGE为VA-DOGE）**

KAS: **KAS**

ETC: **ETC**

## 旧版来源

- [API使用注意事项(必读)](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/api-shi-yong-zhu-yi-shi-xiang-bi-du.md)
