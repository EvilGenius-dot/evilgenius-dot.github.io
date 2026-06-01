---
id: poolnodeApiAltcoinPoolPublicInfo
slug: api-altcoin-pool-public-info
title: 获取其他币种矿池公共信息
navTitle: 获取其他币种矿池公共信息
description: GET /api/network/poolinfo?coin={COIN}：获取其他币种矿池公共信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 32
---


# 获取其他币种矿池公共信息

本章整理 `GET /api/network/poolinfo?coin={COIN}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/network/poolinfo?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "ltc": {
        "shares": {
            "shares_1m": 18.972,
            "shares_5m": 18.972,
            "shares_15m": 18.972,
            "shares_1h": 18.972,
            "shares_unit": "T"
        },
        "reject": {
            "1m": 0.0023,
            "5m": 0.0023,
            "15m": 0.0023,
            "1h": 0.0023
        },
        "workers": 3498,
        "users": 14691,
        "total_blocks": 148594,
        "total_rewards": 223357135549860
    }
}
```

## 旧版来源

- [获取其他币种矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi.md)
