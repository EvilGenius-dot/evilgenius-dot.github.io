---
id: poolnodeApiAltcoinNetworkInfo
slug: api-altcoin-network-info
title: Получить сетевую информацию другой монеты
navTitle: Получить сетевую информацию другой монеты
description: GET /api/network/hashrate?coin={COIN}: Получить сетевую информацию другой монеты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 34
---


# Получить сетевую информацию другой монеты

В этом разделе описаны запрос, параметры и ответ для `GET /api/network/hashrate?coin={COIN}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/network/hashrate?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "LTC": {
        "algorithm": "Scrypt",
        "block_time": 150,
        "block_reward": 6.25,
        "difficulty": 83619823.71858509,
        "net_hash": "2394296033882057",
        "net_hash_one_day": "2329323019112822",
        "net_hash_half_week": "2393607528868074",
        "net_hash_one_week": "2384617523911691",
        "net_hash_two_weeks": "2342096742781520",
        "last_block": 2872444,
        "reward_unit": "G",
        "rewards_per_unit": "0.00150357",
        "rewards_usd_per_unit": "0.12272167",
        "rewards_cny_per_unit": "0.89221162",
        "rewards_btc_per_unit": "0.00000146",
        "previous_difficulty": 82764268.0298935,
        "previous_difficulty_change": "1.03",
        "previous_difficulty_change_time": "2025-03-30 16:54:01 +0800",
        "previous_difficulty_change_time_ts": 1743324841,
        "next_difficulty_change_seconds": 307432,
        "next_difficulty_time": 1743633340,
        "next_difficulty": 82519562.88018265,
        "next_difficulty_change_rate": -0.013157894736842105
    }
}
```

## Старый источник

- [获取其他币种矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi-2.md)
