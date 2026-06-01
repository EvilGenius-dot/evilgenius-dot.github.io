---
id: poolnodeApiNodeFee
slug: api-node-fee
title: Получить комиссию узла
navTitle: Получить комиссию узла
description: GET /api/project/fee: Получить комиссию узла.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 26
---


# Получить комиссию узла

В этом разделе описаны запрос, параметры и ответ для `GET /api/project/fee`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/project/fee

METHOD: 
GET

RESULT:
[
    {
        "r": "0.01",     // 费率 需要x100得到百分比
        "coin": "BTC"    // 币种
    },
    {
        "r": "0.01",
        "coin": "FB"
    },
    {
        "r": "0.01",
        "coin": "KAS"
    },
    ...
]
```

## Старый источник

- [获取节点费率](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-jie-dian-fei-l.md)
