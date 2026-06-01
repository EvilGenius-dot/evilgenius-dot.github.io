---
id: poolnodeApiSubaccountWorkerList
slug: api-subaccount-worker-list
title: Get Workers Under Subaccount
navTitle: Get Workers Under Subaccount
description: GET /api/subaccount/workers?coin={coin}&sid={sid}: Get Workers Under Subaccount.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 27
---


# Get Workers Under Subaccount

This chapter documents the request shape, parameters, and response for `GET /api/subaccount/workers?coin={coin}&sid={sid}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/subaccount/workers?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin 币种
sid 子账号sid

RESULT:
[
    {
        "avgDelayrate1440": 0,
        "avgHashrate1440": "84690086742710.80",
        "avgRejectrate1440": 0.019684,
        "isCool": true,
        "lastShareTime": 1743580208,
        "realtimeHashrate": "107898741072418.13",
        "status": "active",
        "workerName": "rms01"
    }
]
```

## Legacy Source

- [获取指定子账号下矿工列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-xia-kuang-gong-lie-biao.md)
