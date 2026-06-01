---
id: poolnodeApiGetPayoutAddress
slug: api-get-payout-address
title: Получить адрес выплаты
navTitle: Получить адрес выплаты
description: POST /api/subaccount/address/info: Получить адрес выплаты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 16
---


# Получить адрес выплаты

В этом разделе описаны запрос, параметры и ответ для `POST /api/subaccount/address/info`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

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

## Старый источник

- [获取付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-fu-kuan-di-zhi.md)
