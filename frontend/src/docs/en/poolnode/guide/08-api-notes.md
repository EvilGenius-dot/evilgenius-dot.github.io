---
id: poolnodeApiNotes
slug: api-notes
title: API Usage Notes
navTitle: API Usage Notes
description: PoolNode Open API: API Usage Notes.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 7
---


# API Usage Notes

This chapter explains the PoolNode user-facing API base URL, authorization header, captcha flow, and coin parameter conventions.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

【**注意**】 **所有接口除登录外，均需要在请求头使用Authorization字段来传入token以验证身份, token获取方式详见**[**登录、获取TOKEN**](/document/poolnode/api-login-token)**,   调用其他接口时header应传入**

请求头的`Content-Type` 应为 `application/json`

```
Authorization: Bearer 获取到的TOKEN
```

部分接口需要传入滑动验证码成功后的返回值,   关于滑动验证码调用请参考[滑动验证码](/document/poolnode/api-captcha)。

**注意：**

由于历史原因，所有接口需要传入币种的参数均需要加入特殊标记，例如BTC需要传PI-BTC,  以下为币种参数对照表。

BTC:  **PI-BTC**

LTC: **VA-LTC （赠币跟随主币, 例如DOGE为VA-DOGE）**

KAS: **KAS**

ETC: **ETC**

## Legacy Source

- [API使用注意事项(必读)](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/api-shi-yong-zhu-yi-shi-xiang-bi-du.md)
