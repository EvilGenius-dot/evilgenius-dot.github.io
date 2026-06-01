---
id: poolnodeApiSendLoginEmail
slug: api-send-login-email
title: Send Login Email Code
navTitle: Send Login Email Code
description: POST /api/email: Send Login Email Code.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 9
---


# Send Login Email Code

This chapter documents the request shape, parameters, and response for `POST /api/email`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

滑动验证码返回值获取请参考[调用、获取滑动验证码](/document/poolnode/api-captcha)

## Legacy Source

- [发送登录邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-deng-lu-you-xiang-yan-zheng-ma.md)
