---
id: poolnodeApiSubaccountHashrateChart
slug: api-subaccount-hashrate-chart
title: Получить график hashrate subaccount
navTitle: Получить график hashrate subaccount
description: GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}: Получить график hashrate subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 20
---


# Получить график hashrate subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
sid 传入指定子账号sid
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
```

## Старый источник

- [获取指定子账号算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-qu-xian.md)
