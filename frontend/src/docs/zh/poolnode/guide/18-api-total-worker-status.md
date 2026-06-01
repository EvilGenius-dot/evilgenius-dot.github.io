---
id: poolnodeApiTotalWorkerStatus
slug: api-total-worker-status
title: 获取所有子账号矿机在线、离线数量总和
navTitle: 获取所有子账号矿机在线、离线数量总和
description: GET /api/user/workers?coin={coin}：获取所有子账号矿机在线、离线数量总和。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 17
---


# 获取所有子账号矿机在线、离线数量总和

本章整理 `GET /api/user/workers?coin={coin}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

## 旧版来源

- [获取所有子账号矿机在线、离线数量总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-kuang-ji-zai-xian-li-xian-shu-liang-zong-he.md)
