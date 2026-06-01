---
id: poolnodeApiRewardBills
slug: api-reward-bills
title: 获取收入账单列表
navTitle: 获取收入账单列表
description: GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}：获取收入账单列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 29
---


# 获取收入账单列表

本章整理 `GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account": null,
            "account_type": 0,
            "ar": "1",                             // 当日费率
            "avg_hashrate": "1738588508492292",    // 结算算力
            "biz_coin": null,
            "coin": "BTC",                         // 币种
            "created_at": "2025-04-04T02:00:13Z",
            "day": "2025-04-03T00:00:00Z",
            "day_profit": "0.0009618284643889825", // 日收益
            "diff": "113757508810854",             // 难度
            "email": null,
            "id": 43215,
            "poolin_type": 0,
            "pplns_day_profit": "0.000010654886997250605",
            "pps_day_profit": "0.0009511735773917318",
            "project_id": null,
            "r": "0.9989999999525025",
            "status": 2,                           // 支付状态, 0未支付, 1支付中, 2已支付
            "subaccount_id": null,
            "updated_at": "2025-04-04T02:00:13Z",
            "user_id": null
        },
        ...
    ],
    "total": 1
}
```

## 旧版来源

- [获取收入账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-shou-ru-zhang-dan-lie-biao.md)
