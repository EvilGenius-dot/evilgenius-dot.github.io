---
id: poolnodeApiCoinHashrateList
slug: api-coin-hashrate-list
title: Get Coin Hashrate And Worker List
navTitle: Get Coin Hashrate And Worker List
description: GET /api/coin/hashrate: Get Coin Hashrate And Worker List.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 23
---


# Get Coin Hashrate And Worker List

This chapter documents the request shape, parameters, and response for `GET /api/coin/hashrate`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/coin/hashrate

METHOD: 
GET

RESULT:
[
    {
        "coin": "BTC",
        "hashrate": "1.355771137822993e15",
        "offline": "0",
        "online": "7"
    },
    {
        "coin": "KAS",
        "hashrate": "4277000000000",
        "offline": "0",
        "online": "1"
    }
]
```

## Legacy Source

- [获取币种算力、设备数量列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-bi-zhong-suan-li-she-bei-shu-liang-lie-biao.md)
