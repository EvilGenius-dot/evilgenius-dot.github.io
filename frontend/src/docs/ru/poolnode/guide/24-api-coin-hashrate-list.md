---
id: poolnodeApiCoinHashrateList
slug: api-coin-hashrate-list
title: Получить список hashrate и устройств по монетам
navTitle: Получить список hashrate и устройств по монетам
description: GET /api/coin/hashrate: Получить список hashrate и устройств по монетам.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 23
---


# Получить список hashrate и устройств по монетам

В этом разделе описаны запрос, параметры и ответ для `GET /api/coin/hashrate`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/coin/hashrate

METHOD: 
GET

RESULT:
[
    {
        "coin": "BTC",
        "hashrate": "1.355771137822993e15",
        "offline": "0",
        "online": "7"
    },
    {
        "coin": "KAS",
        "hashrate": "4277000000000",
        "offline": "0",
        "online": "1"
    }
]
```

## Старый источник

- [获取币种算力、设备数量列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-bi-zhong-suan-li-she-bei-shu-liang-lie-biao.md)
