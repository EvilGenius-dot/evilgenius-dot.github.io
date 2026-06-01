---
id: poolnodeApiSubaccountHashrateChart
slug: api-subaccount-hashrate-chart
title: Get Subaccount Hashrate Chart
navTitle: Get Subaccount Hashrate Chart
description: GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}: Get Subaccount Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 20
---


# Get Subaccount Hashrate Chart

This chapter documents the request shape, parameters, and response for `GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

## Legacy Source

- [获取指定子账号算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-qu-xian.md)
