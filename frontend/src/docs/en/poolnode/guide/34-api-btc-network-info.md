---
id: poolnodeApiBtcNetworkInfo
slug: api-btc-network-info
title: Get BTC Network Info
navTitle: Get BTC Network Info
description: GET /api/network/hashrate: Get BTC Network Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 33
---


# Get BTC Network Info

This chapter documents the request shape, parameters, and response for `GET /api/network/hashrate`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/network/hashrate

METHOD: 
GET

RESULT:
[
    {
        "diffculty": "113757508810854",
        "blockReward": 3.125,
        "blockRewardFPPS": 3.15206768,
        "networkHashrate": "850810718614301835264",
        "coin": "btc",
        "theoreticalIncome": 5.6e-7,
        "height": 890513
    }
]
```

## Legacy Source

- [获取BTC矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi-2.md)
