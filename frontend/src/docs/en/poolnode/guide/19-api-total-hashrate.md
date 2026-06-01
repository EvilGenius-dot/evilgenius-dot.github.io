---
id: poolnodeApiTotalHashrate
slug: api-total-hashrate
title: Get Total Subaccount Hashrate
navTitle: Get Total Subaccount Hashrate
description: GET /api/user/hashrate?coin={coin}: Get Total Subaccount Hashrate.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 18
---


# Get Total Subaccount Hashrate

This chapter documents the request shape, parameters, and response for `GET /api/user/hashrate?coin={coin}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/user/hashrate?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "hashrate": null,        // 实时算力
    "hashrate1440": null     // 24小时平均算力
}
```

## Legacy Source

- [获取所有子账号算力总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-zong-he.md)
