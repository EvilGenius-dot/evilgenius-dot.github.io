---
id: poolnodeApiGetPayoutAddress
slug: api-get-payout-address
title: 获取付款地址
navTitle: 获取付款地址
description: POST /api/subaccount/address/info：获取付款地址。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 16
---


# 获取付款地址

本章整理 `POST /api/subaccount/address/info` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/address/info

METHOD: 
POST

PARAMS:
{
    "id": 149,        // 子账号sid
    "coin": "BTC"     // 币种
}

RESULT:
[
    {
        "address": "addres",    // 已设置的支付地址
        "amount": "0.001",    // 已设置的起付额
        "coin": "BTC"        // 币种
    }
]
```

## 旧版来源

- [获取付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-fu-kuan-di-zhi.md)
