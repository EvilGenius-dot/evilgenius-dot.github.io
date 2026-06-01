---
id: poolnodeApiSitePersonalizationConfig
slug: api-site-personalization-config
title: Get Site Personalization Config
navTitle: Get Site Personalization Config
description: GET /api/subaccount/address/info: Get Site Personalization Config.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 37
---


# Get Site Personalization Config

This chapter documents the request shape, parameters, and response for `GET /api/subaccount/address/info`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/subaccount/address/info

METHOD: 
GET

RESULT:
BASE64
```

将获得的base64解码后parse，得到配置的config，包含了后台设置的所有个性化配置项。

## Legacy Source

- [获取个性化配置](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-ge-xing-hua-pei-zhi.md)
