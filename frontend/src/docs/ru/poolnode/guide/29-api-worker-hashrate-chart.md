---
id: poolnodeApiWorkerHashrateChart
slug: api-worker-hashrate-chart
title: Получить график hashrate майнера
navTitle: Получить график hashrate майнера
description: GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}: Получить график hashrate майнера.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 28
---


# Получить график hashrate майнера

В этом разделе описаны запрос, параметры и ответ для `GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}

METHOD: 
GET

PARAMS:
mode 
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线
worker 传入矿工列表中拿到的workername
sid 子账号sid

RESULT:
{
    "coin": "btc",
    "hashrates": [
        "88195492702672",
        "85693492909688",
        "89446492599164",
        ...
    ],
    "startTime": 1743494100000,
    "timeInterval": 1800,
    "worker": "rms01"
}
```

## Старый источник

- [获取指定矿工算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-kuang-gong-suan-li-qu-xian.md)
