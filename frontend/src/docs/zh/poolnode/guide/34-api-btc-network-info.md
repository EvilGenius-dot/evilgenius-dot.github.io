---
id: poolnodeApiBtcNetworkInfo
slug: api-btc-network-info
title: 获取 BTC 矿池公共信息 2
navTitle: 获取 BTC 矿池公共信息 2
description: GET /api/network/hashrate：获取 BTC 矿池公共信息 2。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 33
---


# 获取 BTC 矿池公共信息 2

本章整理 `GET /api/network/hashrate` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/network/hashrate

METHOD: 
GET

RESULT:
[
    {
        "diffculty": "113757508810854",
        "blockReward": 3.125,
        "blockRewardFPPS": 3.15206768,
        "networkHashrate": "850810718614301835264",
        "coin": "btc",
        "theoreticalIncome": 5.6e-7,
        "height": 890513
    }
]
```

## 旧版来源

- [获取BTC矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi-2.md)
