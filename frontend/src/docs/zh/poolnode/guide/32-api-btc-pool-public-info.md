---
id: poolnodeApiBtcPoolPublicInfo
slug: api-btc-pool-public-info
title: 获取 BTC 矿池公共信息
navTitle: 获取 BTC 矿池公共信息
description: GET /api/network/poolinfo：获取 BTC 矿池公共信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 31
---


# 获取 BTC 矿池公共信息

本章整理 `GET /api/network/poolinfo` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/network/poolinfo

METHOD: 
GET

RESULT:
[
    {
        "realtimeHashrate": "31577535200606772264",
        "workerNum": 152994,
        "coin": "btc"
    }
]
```

## 旧版来源

- [获取BTC矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi.md)
