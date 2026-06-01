---
id: poolnodeApiTotalHashrateChart
slug: api-total-hashrate-chart
title: Получить общий график hashrate subaccount
navTitle: Получить общий график hashrate subaccount
description: GET /api/user/hashrate/detail?coin={coin}&mode={mode}: Получить общий график hashrate subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 19
---


# Получить общий график hashrate subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/user/hashrate/detail?coin={coin}&mode={mode}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/user/hashrate/detail?coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
mode传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

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

- [获取所有子账号算力曲线总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-qu-xian-zong-he.md)
