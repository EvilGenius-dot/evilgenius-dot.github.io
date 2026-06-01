---
id: poolnodeApiLoginToken
slug: api-login-token
title: Login And Get TOKEN
navTitle: Login And Get TOKEN
description: POST /api/user/login: Login And Get TOKEN.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 11
---


# Login And Get TOKEN

This chapter documents the request shape, parameters, and response for `POST /api/user/login`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

发送邮箱验证码请参考[发送登录邮箱验证码](/document/poolnode/api-send-login-email)

后续所有接口都需要在请求头内加入Authorization字段，值为Bearer {Token}，用来过身份验证。

```
// headers
{
    Authorization: Bearer Token
}
```

## Legacy Source

- [登录、获取TOKEN](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/deng-lu-huo-qu-token.md)
