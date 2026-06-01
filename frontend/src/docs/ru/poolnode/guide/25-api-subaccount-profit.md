---
id: poolnodeApiSubaccountProfit
slug: api-subaccount-profit
title: Получить доход subaccount
navTitle: Получить доход subaccount
description: GET /api/subaccount/profit?coin={coin}&sid={sid}: Получить доход subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 24
---


# Получить доход subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/subaccount/profit?coin={coin}&sid={sid}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/profit?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
```

## Старый источник

- [获取指定子账号收益](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-shou-yi.md)
