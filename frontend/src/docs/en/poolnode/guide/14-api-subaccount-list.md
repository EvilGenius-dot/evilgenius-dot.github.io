---
id: poolnodeApiSubaccountList
slug: api-subaccount-list
title: Get Subaccount List
navTitle: Get Subaccount List
description: GET /api/subaccount/list?coin={coin}: Get Subaccount List.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 13
---


# Get Subaccount List

This chapter documents the request shape, parameters, and response for `GET /api/subaccount/list?coin={coin}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/subaccount/list?coin={coin}

METHOD: 
GET

PARAMS:
coin 传入当前选中的币种（子账号列表中会携带选中币种的实时算力）

RESULT:
[
    {
        "hashrate": "1970324836974591.97",    // 传入币种的实时算力
        "id": 149,                            // 子账户的sid
        "name": "504132878",                  // 子账号
        "remark": null                        // 备注
    }
]
```

## Legacy Source

- [获取子账号列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zi-zhang-hao-lie-biao.md)
