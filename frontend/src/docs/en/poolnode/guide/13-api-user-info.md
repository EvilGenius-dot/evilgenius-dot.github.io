---
id: poolnodeApiUserInfo
slug: api-user-info
title: Get User Basic Info
navTitle: Get User Basic Info
description: GET /api/user/info: Get User Basic Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 12
---


# Get User Basic Info

This chapter documents the request shape, parameters, and response for `GET /api/user/info`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

```
URL: 
/api/user/info

METHOD: 
GET

RESULT:
{
    "email": String,        // 用户的主账号邮箱地址
    "project_id": Number,   // 无需关注
    "user_id": Number       // 用户uid
}
```

## Legacy Source

- [获取用户基础信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-yong-hu-ji-chu-xin-xi.md)
