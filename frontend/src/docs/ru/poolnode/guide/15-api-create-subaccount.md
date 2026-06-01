---
id: poolnodeApiCreateSubaccount
slug: api-create-subaccount
title: Создать subaccount
navTitle: Создать subaccount
description: POST /api/subaccount/new: Создать subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 14
---


# Создать subaccount

В этом разделе описаны запрос, параметры и ответ для `POST /api/subaccount/new`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/new

METHOD: 
POST

REQUEST BODY:
{
    name: String,    // 要创建的子账号
    remark: String,  // 子账号备注  
    coin: String     // 币种 'BTC、LTC、ETC、KAS.....'
}
```

## Старый источник

- [创建子账号](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/chuang-jian-zi-zhang-hao.md)
