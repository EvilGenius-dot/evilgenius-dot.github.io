---
id: poolnodeApiBtcPublicHashrateChart
slug: api-btc-public-hashrate-chart
title: Get BTC Public Hashrate Chart
navTitle: Get BTC Public Hashrate Chart
description: GET /api/network/hashratedetail: Get BTC Public Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 35
---


# Get BTC Public Hashrate Chart

This chapter documents the request shape, parameters, and response for `GET /api/network/hashratedetail`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/network/hashratedetail

METHOD: 
GET

RESULT:
{
    "timeInterval": 600,
    "startTime": 1743492900000,
    "hashrates": [
        "31107083202188395151",
        "31060294906903426061",
        "31342220009014338519",
        ...
    ],
    "coin": "btc"
}
```

## Legacy Source

- [获取BTC矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-suan-li-qu-xian.md)
