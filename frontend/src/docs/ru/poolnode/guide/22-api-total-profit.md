---
id: poolnodeApiTotalProfit
slug: api-total-profit
title: Получить общий доход subaccount
navTitle: Получить общий доход subaccount
description: GET /api/user/profit?coin={coin}: Получить общий доход subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 21
---


# Получить общий доход subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/user/profit?coin={coin}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/user/profit?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

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

- [获取所有子账号收益总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-shou-yi-zong-he.md)
