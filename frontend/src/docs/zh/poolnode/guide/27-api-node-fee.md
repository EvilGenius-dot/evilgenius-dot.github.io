---
id: poolnodeApiNodeFee
slug: api-node-fee
title: 获取节点费率
navTitle: 获取节点费率
description: GET /api/project/fee：获取节点费率。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 26
---


# 获取节点费率

本章整理 `GET /api/project/fee` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

## 旧版来源

- [获取节点费率](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-jie-dian-fei-l.md)
