---
id: poolnodeApiBtcNetworkInfo
slug: api-btc-network-info
title: Получить сетевую информацию BTC
navTitle: Получить сетевую информацию BTC
description: GET /api/network/hashrate: Получить сетевую информацию BTC.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 33
---


# Получить сетевую информацию BTC

В этом разделе описаны запрос, параметры и ответ для `GET /api/network/hashrate`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/network/hashrate

METHOD: 
GET

RESULT:
[
    {
        "diffculty": "113757508810854",
        "blockReward": 3.125,
        "blockRewardFPPS": 3.15206768,
        "networkHashrate": "850810718614301835264",
        "coin": "btc",
        "theoreticalIncome": 5.6e-7,
        "height": 890513
    }
]
```

## Старый источник

- [获取BTC矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi-2.md)
