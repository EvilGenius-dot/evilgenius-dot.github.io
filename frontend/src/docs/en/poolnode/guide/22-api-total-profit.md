---
id: poolnodeApiTotalProfit
slug: api-total-profit
title: Get Total Subaccount Earnings
navTitle: Get Total Subaccount Earnings
description: GET /api/user/profit?coin={coin}: Get Total Subaccount Earnings.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 21
---


# Get Total Subaccount Earnings

This chapter documents the request shape, parameters, and response for `GET /api/user/profit?coin={coin}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

## Legacy Source

- [获取所有子账号收益总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-shou-yi-zong-he.md)
