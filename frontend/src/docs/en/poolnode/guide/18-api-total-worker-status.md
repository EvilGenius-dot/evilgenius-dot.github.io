---
id: poolnodeApiTotalWorkerStatus
slug: api-total-worker-status
title: Get Total Online And Offline Worker Count
navTitle: Get Total Online And Offline Worker Count
description: GET /api/user/workers?coin={coin}: Get Total Online And Offline Worker Count.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 17
---


# Get Total Online And Offline Worker Count

This chapter documents the request shape, parameters, and response for `GET /api/user/workers?coin={coin}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/user/workers?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "lost": null || Number,        // 失效数量
    "offline": null || Number,     // 离线数量
    "online": null || Number       // 在线数量
}
```

此接口是获取所有子账号的数据统计之和，如需获取指定子账号下设备数量，请参考获取指定子账号设备数量接口。

## Legacy Source

- [获取所有子账号矿机在线、离线数量总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-kuang-ji-zai-xian-li-xian-shu-liang-zong-he.md)
