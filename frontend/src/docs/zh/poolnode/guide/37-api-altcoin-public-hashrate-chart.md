---
id: poolnodeApiAltcoinPublicHashrateChart
slug: api-altcoin-public-hashrate-chart
title: 获取其他币种矿池公共算力曲线
navTitle: 获取其他币种矿池公共算力曲线
description: GET /api/network/hashratedetail?coin={COIN}：获取其他币种矿池公共算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 36
---


# 获取其他币种矿池公共算力曲线

本章整理 `GET /api/network/hashratedetail?coin={COIN}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/network/hashratedetail?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "unit": "T",
    "tickers": [
        [
            1743472800,
            19.308,
            0.0042
        ],
        [
            1743476400,
            19.363,
            0.0029
        ],
        ...
    ]
}
```

## 旧版来源

- [获取其他币种矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-suan-li-qu-xian.md)
