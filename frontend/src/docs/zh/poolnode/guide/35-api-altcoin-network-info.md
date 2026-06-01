---
id: poolnodeApiAltcoinNetworkInfo
slug: api-altcoin-network-info
title: 获取其他币种矿池公共信息 2
navTitle: 获取其他币种矿池公共信息 2
description: GET /api/network/hashrate?coin={COIN}：获取其他币种矿池公共信息 2。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 34
---


# 获取其他币种矿池公共信息 2

本章整理 `GET /api/network/hashrate?coin={COIN}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/network/hashrate?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "LTC": {
        "algorithm": "Scrypt",
        "block_time": 150,
        "block_reward": 6.25,
        "difficulty": 83619823.71858509,
        "net_hash": "2394296033882057",
        "net_hash_one_day": "2329323019112822",
        "net_hash_half_week": "2393607528868074",
        "net_hash_one_week": "2384617523911691",
        "net_hash_two_weeks": "2342096742781520",
        "last_block": 2872444,
        "reward_unit": "G",
        "rewards_per_unit": "0.00150357",
        "rewards_usd_per_unit": "0.12272167",
        "rewards_cny_per_unit": "0.89221162",
        "rewards_btc_per_unit": "0.00000146",
        "previous_difficulty": 82764268.0298935,
        "previous_difficulty_change": "1.03",
        "previous_difficulty_change_time": "2025-03-30 16:54:01 +0800",
        "previous_difficulty_change_time_ts": 1743324841,
        "next_difficulty_change_seconds": 307432,
        "next_difficulty_time": 1743633340,
        "next_difficulty": 82519562.88018265,
        "next_difficulty_change_rate": -0.013157894736842105
    }
}
```

## 旧版来源

- [获取其他币种矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi-2.md)
