---
id: poolnodeApiWorkerHashrateChart
slug: api-worker-hashrate-chart
title: 获取指定矿工算力曲线
navTitle: 获取指定矿工算力曲线
description: GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}：获取指定矿工算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 28
---


# 获取指定矿工算力曲线

本章整理 `GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}

METHOD: 
GET

PARAMS:
mode 
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线
worker 传入矿工列表中拿到的workername
sid 子账号sid

RESULT:
{
    "coin": "btc",
    "hashrates": [
        "88195492702672",
        "85693492909688",
        "89446492599164",
        ...
    ],
    "startTime": 1743494100000,
    "timeInterval": 1800,
    "worker": "rms01"
}
```

## 旧版来源

- [获取指定矿工算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-kuang-gong-suan-li-qu-xian.md)
