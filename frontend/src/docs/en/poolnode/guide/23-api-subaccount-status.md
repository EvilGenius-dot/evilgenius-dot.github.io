---
id: poolnodeApiSubaccountStatus
slug: api-subaccount-status
title: Get Subaccount Hashrate And Worker Status
navTitle: Get Subaccount Hashrate And Worker Status
description: GET /api/subaccount/hashrate?coin={coin}&sid={sid}: Get Subaccount Hashrate And Worker Status.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 22
---


# Get Subaccount Hashrate And Worker Status

This chapter documents the request shape, parameters, and response for `GET /api/subaccount/hashrate?coin={coin}&sid={sid}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/subaccount/hashrate?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
{
    "avg_hashrate1440": "0",    // 24小时平均算力
    "hashrate": "0",            // 当前算力
    "lost": 0,                  // 失效设备数量
    "offline": 0,               // 离线数量
    "online": 0                 // 在线数量
}
```

## Legacy Source

- [获取指定子账号算力、在线离线信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-zai-xian-li-xian-xin-xi.md)
