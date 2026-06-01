---
id: poolnodeApiSubaccountWorkerList
slug: api-subaccount-worker-list
title: Получить список майнеров subaccount
navTitle: Получить список майнеров subaccount
description: GET /api/subaccount/workers?coin={coin}&sid={sid}: Получить список майнеров subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 27
---


# Получить список майнеров subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/subaccount/workers?coin={coin}&sid={sid}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/workers?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin 币种
sid 子账号sid

RESULT:
[
    {
        "avgDelayrate1440": 0,
        "avgHashrate1440": "84690086742710.80",
        "avgRejectrate1440": 0.019684,
        "isCool": true,
        "lastShareTime": 1743580208,
        "realtimeHashrate": "107898741072418.13",
        "status": "active",
        "workerName": "rms01"
    }
]
```

## Старый источник

- [获取指定子账号下矿工列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-xia-kuang-gong-lie-biao.md)
