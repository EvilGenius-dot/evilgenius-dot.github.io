---
id: poolnodeApiMiningNodeAddress
slug: api-mining-node-address
title: Get Mining Node Addresses
navTitle: Get Mining Node Addresses
description: GET /api/open/poolnode: Get Mining Node Addresses.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 25
---


# Get Mining Node Addresses

This chapter documents the request shape, parameters, and response for `GET /api/open/poolnode`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

此接口用来获取PoolNode 后台配置的挖矿地址及端口

```
URL: 
/api/open/poolnode

METHOD: 
GET

RESULT:
[
    {
        "endpoint_id": 12,             // 挖矿节点id
        "endpoint_name": "亚洲-1",      // 节点地区
        "coin": "BTC",                // 币种
        "name": "address",            // 挖矿地址（域名或ip）
        "port": 6006,                 // 挖矿端口
        "protocol": 1,                // 地址协议 0为TCP 1为SSL 2为RMS 3为TCP SSL双协议 5为RMS2
        "remark": ""
    },
    {
        "endpoint_id": 12,
        "endpoint_name": "亚洲-1",
        "coin": "BTC",
        "name": "address",
        "port": 6010,
        "protocol": 5,
        "remark": ""
    },
    {
        "endpoint_id": 21,
        "endpoint_name": "通用-1",
        "coin": "KAS",
        "name": "address",
        "port": 8001,
        "protocol": 1,
        "remark": ""
    }
]
```

## Legacy Source

- [获取挖矿节点地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-wa-kuang-jie-dian-di-zhi.md)
