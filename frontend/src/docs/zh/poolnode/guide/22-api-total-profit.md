---
id: poolnodeApiTotalProfit
slug: api-total-profit
title: 获取所有子账号收益总和
navTitle: 获取所有子账号收益总和
description: GET /api/user/profit?coin={coin}：获取所有子账号收益总和。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 21
---


# 获取所有子账号收益总和

本章整理 `GET /api/user/profit?coin={coin}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/user/profit?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
```

## 旧版来源

- [获取所有子账号收益总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-shou-yi-zong-he.md)
