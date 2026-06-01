---
id: poolnodeApiAppRegister
slug: api-app-register
title: APP 端用户注册
navTitle: APP 端用户注册
description: POST https://api.d0gpool.com/app/register：APP 端用户注册。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 38
---


# APP 端用户注册

本章整理 `POST https://api.d0gpool.com/app/register` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

## 请求 URL

https://api.d0gpool.com/app/register

## 请求方式

POST

## 请求示例

```
{
"email": "xxxx",
"code": "323333", //邮箱验证码，同节点登录验证码
"invite_code": 123456 //注意这个是数字
}
```

## 请求参数说明

| 参数名          | 类型     | 说明             |
| ------------ | ------ | -------------- |
| email        | String | 邮箱             |
| code         | String | 邮箱验证码，同节点登录验证码 |
| invite\_code | number | 节点邀请码，注意这个是数字  |

## 成功返回示例

```
{
"status": 0,  // status = 1表示邀请码无效，此时url为空
"url": "http://1.2.3.4/a/"
}
```

## 返回参数说明

| 参数名 | 说明 |
| --- | --- |
| status | 状态码，`status = 1` 表示邀请码无效，此时 `url` 为空。 |
| url | 后续 APP 使用的接口地址前缀，例如 `http://1.2.3.4/a/`。后台配置地址末尾需要保留斜杠。 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用url继续请求一次到节点使用邮箱登录

## 旧版来源

- [APP端用户注册](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-yong-hu-zhu-ce.md)
