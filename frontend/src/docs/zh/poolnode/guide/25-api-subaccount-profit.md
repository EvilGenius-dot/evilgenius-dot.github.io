---
id: poolnodeApiSubaccountProfit
slug: api-subaccount-profit
title: 获取指定子账号收益
navTitle: 获取指定子账号收益
description: GET /api/subaccount/profit?coin={coin}&sid={sid}：获取指定子账号收益。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 24
---


# 获取指定子账号收益

本章整理 `GET /api/subaccount/profit?coin={coin}&sid={sid}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/profit?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

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

- [获取指定子账号收益](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-shou-yi.md)
