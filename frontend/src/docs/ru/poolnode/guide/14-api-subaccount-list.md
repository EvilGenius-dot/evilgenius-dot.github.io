---
id: poolnodeApiSubaccountList
slug: api-subaccount-list
title: Получить список subaccount
navTitle: Получить список subaccount
description: GET /api/subaccount/list?coin={coin}: Получить список subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 13
---


# Получить список subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/subaccount/list?coin={coin}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/list?coin={coin}

METHOD: 
GET

PARAMS:
coin 传入当前选中的币种（子账号列表中会携带选中币种的实时算力）

RESULT:
[
    {
        "hashrate": "1970324836974591.97",    // 传入币种的实时算力
        "id": 149,                            // 子账户的sid
        "name": "504132878",                  // 子账号
        "remark": null                        // 备注
    }
]
```

## Старый источник

- [获取子账号列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zi-zhang-hao-lie-biao.md)
