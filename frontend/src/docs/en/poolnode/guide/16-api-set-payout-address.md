---
id: poolnodeApiSetPayoutAddress
slug: api-set-payout-address
title: Set Payout Address
navTitle: Set Payout Address
description: POST /api/subaccount/update/address: Set Payout Address.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 15
---


# Set Payout Address

This chapter documents the request shape, parameters, and response for `POST /api/subaccount/update/address`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/subaccount/update/address

METHOD: 
POST

REQUEST BODY:

{
    "id": sid,        // 子账户的sid
    "code": code,     // 邮箱验证码
    "coin": form.selectCoin,    // 币种
    "address": form.addr,       // 匿名付款地址
    "amount": form.account      // 起付额 String类型
}
```

邮箱验证码请参考[发送用户相关操作邮箱验证码](/document/poolnode/api-send-user-email)

最小起付额数值不得低于下方列表:

BTC:  0.001

FB: 0.1

LTC: 0.01

DOGE: 50

BEL: 1

KAS: 20

ETC: 0.2

## Legacy Source

- [设置付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/she-zhi-fu-kuan-di-zhi.md)
