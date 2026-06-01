---
id: poolnodeApiTotalWorkerStatus
slug: api-total-worker-status
title: Получить общее число online и offline майнеров
navTitle: Получить общее число online и offline майнеров
description: GET /api/user/workers?coin={coin}: Получить общее число online и offline майнеров.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 17
---


# Получить общее число online и offline майнеров

В этом разделе описаны запрос, параметры и ответ для `GET /api/user/workers?coin={coin}`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/user/workers?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "lost": null || Number,        // 失效数量
    "offline": null || Number,     // 离线数量
    "online": null || Number       // 在线数量
}
```

此接口是获取所有子账号的数据统计之和，如需获取指定子账号下设备数量，请参考获取指定子账号设备数量接口。

## Старый источник

- [获取所有子账号矿机在线、离线数量总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-kuang-ji-zai-xian-li-xian-shu-liang-zong-he.md)
