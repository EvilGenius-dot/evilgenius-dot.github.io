---
id: poolnodeApiMiningNodeAddress
slug: api-mining-node-address
title: 获取挖矿节点地址
navTitle: 获取挖矿节点地址
description: GET /api/open/poolnode：获取挖矿节点地址。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 25
---


# 获取挖矿节点地址

本章整理 `GET /api/open/poolnode` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

## 旧版来源

- [获取挖矿节点地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-wa-kuang-jie-dian-di-zhi.md)
