---
id: poolnodeApiSubaccountProfit
slug: api-subaccount-profit
title: Get Subaccount Earnings
navTitle: Get Subaccount Earnings
description: GET /api/subaccount/profit?coin={coin}&sid={sid}: Get Subaccount Earnings.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 24
---


# Get Subaccount Earnings

This chapter documents the request shape, parameters, and response for `GET /api/subaccount/profit?coin={coin}&sid={sid}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

## Legacy Source

- [获取指定子账号收益](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-shou-yi.md)
