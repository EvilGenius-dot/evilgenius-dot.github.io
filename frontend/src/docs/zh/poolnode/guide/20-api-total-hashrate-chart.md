---
id: poolnodeApiTotalHashrateChart
slug: api-total-hashrate-chart
title: 获取所有子账号算力曲线总和
navTitle: 获取所有子账号算力曲线总和
description: GET /api/user/hashrate/detail?coin={coin}&mode={mode}：获取所有子账号算力曲线总和。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 19
---


# 获取所有子账号算力曲线总和

本章整理 `GET /api/user/hashrate/detail?coin={coin}&mode={mode}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/user/hashrate/detail?coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
mode传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
```

## 旧版来源

- [获取所有子账号算力曲线总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-qu-xian-zong-he.md)
