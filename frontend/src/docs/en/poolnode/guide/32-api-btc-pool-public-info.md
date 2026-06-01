---
id: poolnodeApiBtcPoolPublicInfo
slug: api-btc-pool-public-info
title: Get BTC Pool Public Info
navTitle: Get BTC Pool Public Info
description: GET /api/network/poolinfo: Get BTC Pool Public Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 31
---


# Get BTC Pool Public Info

This chapter documents the request shape, parameters, and response for `GET /api/network/poolinfo`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/network/poolinfo

METHOD: 
GET

RESULT:
[
    {
        "realtimeHashrate": "31577535200606772264",
        "workerNum": 152994,
        "coin": "btc"
    }
]
```

## Legacy Source

- [获取BTC矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi.md)
