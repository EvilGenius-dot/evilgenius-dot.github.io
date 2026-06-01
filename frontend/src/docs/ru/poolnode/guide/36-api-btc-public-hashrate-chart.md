---
id: poolnodeApiBtcPublicHashrateChart
slug: api-btc-public-hashrate-chart
title: Получить публичный график hashrate BTC
navTitle: Получить публичный график hashrate BTC
description: GET /api/network/hashratedetail: Получить публичный график hashrate BTC.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 35
---


# Получить публичный график hashrate BTC

В этом разделе описаны запрос, параметры и ответ для `GET /api/network/hashratedetail`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/network/hashratedetail

METHOD: 
GET

RESULT:
{
    "timeInterval": 600,
    "startTime": 1743492900000,
    "hashrates": [
        "31107083202188395151",
        "31060294906903426061",
        "31342220009014338519",
        ...
    ],
    "coin": "btc"
}
```

## Старый источник

- [获取BTC矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-suan-li-qu-xian.md)
