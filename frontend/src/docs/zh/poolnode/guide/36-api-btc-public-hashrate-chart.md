---
id: poolnodeApiBtcPublicHashrateChart
slug: api-btc-public-hashrate-chart
title: 获取 BTC 矿池公共算力曲线
navTitle: 获取 BTC 矿池公共算力曲线
description: GET /api/network/hashratedetail：获取 BTC 矿池公共算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 35
---


# 获取 BTC 矿池公共算力曲线

本章整理 `GET /api/network/hashratedetail` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/network/hashratedetail

METHOD: 
GET

RESULT:
{
    "timeInterval": 600,
    "startTime": 1743492900000,
    "hashrates": [
        "31107083202188395151",
        "31060294906903426061",
        "31342220009014338519",
        ...
    ],
    "coin": "btc"
}
```

## 旧版来源

- [获取BTC矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-suan-li-qu-xian.md)
