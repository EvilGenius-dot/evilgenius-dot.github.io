---
id: poolnodeApiBtcPoolPublicInfo
slug: api-btc-pool-public-info
title: Получить публичную информацию BTC пула
navTitle: Получить публичную информацию BTC пула
description: GET /api/network/poolinfo: Получить публичную информацию BTC пула.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 31
---


# Получить публичную информацию BTC пула

В этом разделе описаны запрос, параметры и ответ для `GET /api/network/poolinfo`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/network/poolinfo

METHOD: 
GET

RESULT:
[
    {
        "realtimeHashrate": "31577535200606772264",
        "workerNum": 152994,
        "coin": "btc"
    }
]
```

## Старый источник

- [获取BTC矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi.md)
