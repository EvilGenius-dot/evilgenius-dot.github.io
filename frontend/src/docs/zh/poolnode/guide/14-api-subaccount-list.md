---
id: poolnodeApiSubaccountList
slug: api-subaccount-list
title: 获取子账号列表
navTitle: 获取子账号列表
description: GET /api/subaccount/list?coin={coin}：获取子账号列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 13
---


# 获取子账号列表

本章整理 `GET /api/subaccount/list?coin={coin}` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

## 旧版来源

- [获取子账号列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zi-zhang-hao-lie-biao.md)
