---
id: poolnodeApiAltcoinPoolPublicInfo
slug: api-altcoin-pool-public-info
title: Получить публичную информацию пула другой монеты
navTitle: Получить публичную информацию пула другой монеты
description: GET /api/network/poolinfo?coin={COIN}: Получить публичную информацию пула другой монеты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 32
---


# Получить публичную информацию пула другой монеты

В этом разделе описаны запрос, параметры и ответ для `GET /api/network/poolinfo?coin={COIN}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/network/poolinfo?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "ltc": {
        "shares": {
            "shares_1m": 18.972,
            "shares_5m": 18.972,
            "shares_15m": 18.972,
            "shares_1h": 18.972,
            "shares_unit": "T"
        },
        "reject": {
            "1m": 0.0023,
            "5m": 0.0023,
            "15m": 0.0023,
            "1h": 0.0023
        },
        "workers": 3498,
        "users": 14691,
        "total_blocks": 148594,
        "total_rewards": 223357135549860
    }
}
```

## Старый источник

- [获取其他币种矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi.md)
