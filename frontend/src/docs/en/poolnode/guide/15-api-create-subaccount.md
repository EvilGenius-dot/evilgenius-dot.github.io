---
id: poolnodeApiCreateSubaccount
slug: api-create-subaccount
title: Create Subaccount
navTitle: Create Subaccount
description: POST /api/subaccount/new: Create Subaccount.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 14
---


# Create Subaccount

This chapter documents the request shape, parameters, and response for `POST /api/subaccount/new`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

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

## Legacy Source

- [创建子账号](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/chuang-jian-zi-zhang-hao.md)
