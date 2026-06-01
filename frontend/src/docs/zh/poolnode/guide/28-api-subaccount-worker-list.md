---
id: poolnodeApiSubaccountWorkerList
slug: api-subaccount-worker-list
title: 获取指定子账号下矿工列表
navTitle: 获取指定子账号下矿工列表
description: GET /api/subaccount/workers?coin={coin}&sid={sid}：获取指定子账号下矿工列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 27
---


# 获取指定子账号下矿工列表

本章整理 `GET /api/subaccount/workers?coin={coin}&sid={sid}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/workers?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin 币种
sid 子账号sid

RESULT:
[
    {
        "avgDelayrate1440": 0,
        "avgHashrate1440": "84690086742710.80",
        "avgRejectrate1440": 0.019684,
        "isCool": true,
        "lastShareTime": 1743580208,
        "realtimeHashrate": "107898741072418.13",
        "status": "active",
        "workerName": "rms01"
    }
]
```

## 旧版来源

- [获取指定子账号下矿工列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-xia-kuang-gong-lie-biao.md)
