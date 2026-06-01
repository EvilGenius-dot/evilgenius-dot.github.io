---
id: poolnodeApiGetPayoutAddress
slug: api-get-payout-address
title: Get Payout Address
navTitle: Get Payout Address
description: POST /api/subaccount/address/info: Get Payout Address.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 16
---


# Get Payout Address

This chapter documents the request shape, parameters, and response for `POST /api/subaccount/address/info`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

## Legacy Source

- [获取付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-fu-kuan-di-zhi.md)
