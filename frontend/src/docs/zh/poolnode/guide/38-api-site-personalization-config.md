---
id: poolnodeApiSitePersonalizationConfig
slug: api-site-personalization-config
title: 获取个性化配置
navTitle: 获取个性化配置
description: GET /api/subaccount/address/info：获取个性化配置。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 37
---


# 获取个性化配置

本章整理 `GET /api/subaccount/address/info` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/address/info

METHOD: 
GET

RESULT:
BASE64
```

将获得的base64解码后parse，得到配置的config，包含了后台设置的所有个性化配置项。

## 旧版来源

- [获取个性化配置](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-ge-xing-hua-pei-zhi.md)
