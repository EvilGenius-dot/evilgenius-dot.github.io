---
id: poolnodeApiTotalHashrate
slug: api-total-hashrate
title: Получить общий hashrate subaccount
navTitle: Получить общий hashrate subaccount
description: GET /api/user/hashrate?coin={coin}: Получить общий hashrate subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 18
---


# Получить общий hashrate subaccount

В этом разделе описаны запрос, параметры и ответ для `GET /api/user/hashrate?coin={coin}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/user/hashrate?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "hashrate": null,        // 实时算力
    "hashrate1440": null     // 24小时平均算力
}
```

## Старый источник

- [获取所有子账号算力总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-zong-he.md)
