---
id: poolnodeApiSitePersonalizationConfig
slug: api-site-personalization-config
title: Получить конфигурацию оформления
navTitle: Получить конфигурацию оформления
description: GET /api/subaccount/address/info: Получить конфигурацию оформления.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 37
---


# Получить конфигурацию оформления

В этом разделе описаны запрос, параметры и ответ для `GET /api/subaccount/address/info`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

```
URL: 
/api/subaccount/address/info

METHOD: 
GET

RESULT:
BASE64
```

将获得的base64解码后parse，得到配置的config，包含了后台设置的所有个性化配置项。

## Старый источник

- [获取个性化配置](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-ge-xing-hua-pei-zhi.md)
