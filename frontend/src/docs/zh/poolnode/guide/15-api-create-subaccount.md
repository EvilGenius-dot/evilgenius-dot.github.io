---
id: poolnodeApiCreateSubaccount
slug: api-create-subaccount
title: 创建子账号
navTitle: 创建子账号
description: POST /api/subaccount/new：创建子账号。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 14
---


# 创建子账号

本章整理 `POST /api/subaccount/new` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

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

## 旧版来源

- [创建子账号](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/chuang-jian-zi-zhang-hao.md)
