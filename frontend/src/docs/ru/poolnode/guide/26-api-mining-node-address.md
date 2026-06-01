---
id: poolnodeApiMiningNodeAddress
slug: api-mining-node-address
title: Получить адреса майнинговых узлов
navTitle: Получить адреса майнинговых узлов
description: GET /api/open/poolnode: Получить адреса майнинговых узлов.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 25
---


# Получить адреса майнинговых узлов

В этом разделе описаны запрос, параметры и ответ для `GET /api/open/poolnode`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

此接口用来获取PoolNode 后台配置的挖矿地址及端口

```
URL: 
/api/open/poolnode

METHOD: 
GET

RESULT:
[
    {
        "endpoint_id": 12,             // 挖矿节点id
        "endpoint_name": "亚洲-1",      // 节点地区
        "coin": "BTC",                // 币种
        "name": "address",            // 挖矿地址（域名或ip）
        "port": 6006,                 // 挖矿端口
        "protocol": 1,                // 地址协议 0为TCP 1为SSL 2为RMS 3为TCP SSL双协议 5为RMS2
        "remark": ""
    },
    {
        "endpoint_id": 12,
        "endpoint_name": "亚洲-1",
        "coin": "BTC",
        "name": "address",
        "port": 6010,
        "protocol": 5,
        "remark": ""
    },
    {
        "endpoint_id": 21,
        "endpoint_name": "通用-1",
        "coin": "KAS",
        "name": "address",
        "port": 8001,
        "protocol": 1,
        "remark": ""
    }
]
```

## Старый источник

- [获取挖矿节点地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-wa-kuang-jie-dian-di-zhi.md)
