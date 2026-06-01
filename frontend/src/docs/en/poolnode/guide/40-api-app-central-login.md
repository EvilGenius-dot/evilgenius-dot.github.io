---
id: poolnodeApiAppCentralLogin
slug: api-app-central-login
title: APP Centralized Login
navTitle: APP Centralized Login
description: POST https://api.d0gpool.com/app/login: APP Centralized Login.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 39
---


# APP Centralized Login

This chapter documents the request shape, parameters, and response for `POST https://api.d0gpool.com/app/login`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

## 请求 URL

https://api.d0gpool.com/app/login

## 请求方式

POST

## 请求示例

```
{
"email": "xxxx",
"code": "323333"
}
```

## 请求参数说明

| 参数名   | 类型     | 说明             |
| ----- | ------ | -------------- |
| email | String | 邮箱             |
| code  | String | 邮箱验证码，同节点登录验证码 |

## 成功返回示例

```
{
"status": 0,  
"data": [
        {
            "created_at": "2025-09-24T07:39:47Z",
            "name": "test-001", // 节点名称
            "updated_at": "2025-09-24T07:46:01Z",
            "url": "xxx.com/a/" // api 地址
        },
        {
            "created_at": "2025-09-24T07:39:47Z",
            "name": "test-002",
            "updated_at": "2025-09-24T07:46:01Z",
            "url": "xxx.com/b/"
        }
    ]
}
```

## 返回参数说明

| 参数名                      | 说明    |
| ------------------------ | ----- |
| status                   | 状态码   |
| data\[index].created\_at | 创建时间  |
| data\[index].name        | 节点名称  |
| data\[index].updated\_at | 更新时间  |
| data\[index].url         | API地址 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用用户选择的节点url继续请求一次至相应节点进行邮箱登录

## Legacy Source

- [APP端中心化登录](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-zhong-xin-hua-deng-lu.md)
