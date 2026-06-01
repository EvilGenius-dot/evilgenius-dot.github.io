---
id: poolnodeApiUserInfo
slug: api-user-info
title: 获取用户基础信息
navTitle: 获取用户基础信息
description: GET /api/user/info：获取用户基础信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 12
---


# 获取用户基础信息

本章整理 `GET /api/user/info` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/user/info

METHOD: 
GET

RESULT:
{
    "email": String,        // 用户的主账号邮箱地址
    "project_id": Number,   // 无需关注
    "user_id": Number       // 用户uid
}
```

## 旧版来源

- [获取用户基础信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-yong-hu-ji-chu-xin-xi.md)
