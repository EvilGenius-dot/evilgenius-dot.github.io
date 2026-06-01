---
id: poolnodeApiSubaccountHashrateChart
slug: api-subaccount-hashrate-chart
title: 获取指定子账号算力曲线
navTitle: 获取指定子账号算力曲线
description: GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}：获取指定子账号算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 20
---


# 获取指定子账号算力曲线

本章整理 `GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
sid 传入指定子账号sid
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

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

- [获取指定子账号算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-qu-xian.md)
