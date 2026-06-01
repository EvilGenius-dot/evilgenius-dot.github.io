---
id: poolnodeApiPayoutBills
slug: api-payout-bills
title: 获取支付账单列表
navTitle: 获取支付账单列表
description: GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}：获取支付账单列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 30
---


# 获取支付账单列表

本章整理 `GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}

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
            "account_type": 0,
            "address": "...",                    // 付款地址
            "amount": "0.001920471282518579",    // 付款额
            "coin": "BTC",                            // 支付币种
            "created_at": "2025-04-04T03:24:00Z",
            "id": 5970,
            "ref_reward_ids": [],
            "status": 1,                        // 支付状态 0未支付 1已支付 2支付失败
            "subaccount_id": 149,
            "time": "2025-04-04T00:00:00Z",
            // 交易哈希
            "trans_id": "487021b26291f98061be835fdc06499376ed03b271b07a9d6a00961b49384d2b",
            "updated_at": "2025-04-04T03:24:00Z",
            "user_id": 123999002
}
        ...
    ],
    "total": 1
}
```

## 旧版来源

- [获取支付账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-fu-zhang-dan-lie-biao.md)
