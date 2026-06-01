---
id: poolnodeApiSendUserEmail
slug: api-send-user-email
title: Send User Operation Email Code
navTitle: Send User Operation Email Code
description: POST /api/user/email: Send User Operation Email Code.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 10
---


# Send User Operation Email Code

This chapter documents the request shape, parameters, and response for `POST /api/user/email`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

滑动验证码返回值获取请参考[调用、获取滑动验证码](/document/poolnode/api-captcha)

## Legacy Source

- [发送用户相关操作邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-yong-hu-xiang-guan-cao-zuo-you-xiang-yan-zheng-ma.md)
