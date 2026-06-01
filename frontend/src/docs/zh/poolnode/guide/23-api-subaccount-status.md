---
id: poolnodeApiSubaccountStatus
slug: api-subaccount-status
title: 获取指定子账号算力、在线离线信息
navTitle: 获取指定子账号算力、在线离线信息
description: GET /api/subaccount/hashrate?coin={coin}&sid={sid}：获取指定子账号算力、在线离线信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 22
---


# 获取指定子账号算力、在线离线信息

本章整理 `GET /api/subaccount/hashrate?coin={coin}&sid={sid}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

## 旧版来源

- [获取指定子账号算力、在线离线信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-zai-xian-li-xian-xin-xi.md)
