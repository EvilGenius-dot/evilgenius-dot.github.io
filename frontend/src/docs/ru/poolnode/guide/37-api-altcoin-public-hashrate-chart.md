---
id: poolnodeApiAltcoinPublicHashrateChart
slug: api-altcoin-public-hashrate-chart
title: Получить публичный график hashrate другой монеты
navTitle: Получить публичный график hashrate другой монеты
description: GET /api/network/hashratedetail?coin={COIN}: Получить публичный график hashrate другой монеты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 36
---


# Получить публичный график hashrate другой монеты

В этом разделе описаны запрос, параметры и ответ для `GET /api/network/hashratedetail?coin={COIN}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/network/hashratedetail?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "unit": "T",
    "tickers": [
        [
            1743472800,
            19.308,
            0.0042
        ],
        [
            1743476400,
            19.363,
            0.0029
        ],
        ...
    ]
}
```

## Старый источник

- [获取其他币种矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-suan-li-qu-xian.md)
