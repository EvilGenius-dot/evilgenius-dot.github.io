---
id: poolnodeApiCoinHashrateList
slug: api-coin-hashrate-list
title: 获取币种算力、设备数量列表
navTitle: 获取币种算力、设备数量列表
description: GET /api/coin/hashrate：获取币种算力、设备数量列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 23
---


# 获取币种算力、设备数量列表

本章整理 `GET /api/coin/hashrate` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/coin/hashrate

METHOD: 
GET

RESULT:
[
    {
        "coin": "BTC",
        "hashrate": "1.355771137822993e15",
        "offline": "0",
        "online": "7"
    },
    {
        "coin": "KAS",
        "hashrate": "4277000000000",
        "offline": "0",
        "online": "1"
    }
]
```

## 旧版来源

- [获取币种算力、设备数量列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-bi-zhong-suan-li-she-bei-shu-liang-lie-biao.md)
