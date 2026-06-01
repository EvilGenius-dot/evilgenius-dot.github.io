---
id: poolnodeApiAltcoinPoolPublicInfo
slug: api-altcoin-pool-public-info
title: Get Other-Coin Pool Public Info
navTitle: Get Other-Coin Pool Public Info
description: GET /api/network/poolinfo?coin={COIN}: Get Other-Coin Pool Public Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 32
---


# Get Other-Coin Pool Public Info

This chapter documents the request shape, parameters, and response for `GET /api/network/poolinfo?coin={COIN}`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

## Legacy Source

- [获取其他币种矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi.md)
