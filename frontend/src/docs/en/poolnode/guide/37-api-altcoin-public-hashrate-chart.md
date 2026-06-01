---
id: poolnodeApiAltcoinPublicHashrateChart
slug: api-altcoin-public-hashrate-chart
title: Get Other-Coin Public Hashrate Chart
navTitle: Get Other-Coin Public Hashrate Chart
description: GET /api/network/hashratedetail?coin={COIN}: Get Other-Coin Public Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 36
---


# Get Other-Coin Public Hashrate Chart

This chapter documents the request shape, parameters, and response for `GET /api/network/hashratedetail?coin={COIN}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/network/hashratedetail?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "unit": "T",
    "tickers": [
        [
            1743472800,
            19.308,
            0.0042
        ],
        [
            1743476400,
            19.363,
            0.0029
        ],
        ...
    ]
}
```

## Legacy Source

- [获取其他币种矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-suan-li-qu-xian.md)
