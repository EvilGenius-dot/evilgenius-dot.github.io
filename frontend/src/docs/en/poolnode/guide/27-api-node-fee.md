---
id: poolnodeApiNodeFee
slug: api-node-fee
title: Get Node Fee
navTitle: Get Node Fee
description: GET /api/project/fee: Get Node Fee.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 26
---


# Get Node Fee

This chapter documents the request shape, parameters, and response for `GET /api/project/fee`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/project/fee

METHOD: 
GET

RESULT:
[
    {
        "r": "0.01",     // 费率 需要x100得到百分比
        "coin": "BTC"    // 币种
    },
    {
        "r": "0.01",
        "coin": "FB"
    },
    {
        "r": "0.01",
        "coin": "KAS"
    },
    ...
]
```

## Legacy Source

- [获取节点费率](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-jie-dian-fei-l.md)
