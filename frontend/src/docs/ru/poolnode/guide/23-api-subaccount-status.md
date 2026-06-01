---
id: poolnodeApiSubaccountStatus
slug: api-subaccount-status
title: Получить hashrate и статус subaccount
navTitle: Получить hashrate и статус subaccount
description: GET /api/subaccount/hashrate?coin={coin}&sid={sid}: Получить hashrate и статус subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 22
---


# Получить hashrate и статус subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/subaccount/hashrate?coin={coin}&sid={sid}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/hashrate?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
{
    "avg_hashrate1440": "0",    // 24小时平均算力
    "hashrate": "0",            // 当前算力
    "lost": 0,                  // 失效设备数量
    "offline": 0,               // 离线数量
    "online": 0                 // 在线数量
}
```

## Старый источник

- [获取指定子账号算力、在线离线信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-zai-xian-li-xian-xin-xi.md)
