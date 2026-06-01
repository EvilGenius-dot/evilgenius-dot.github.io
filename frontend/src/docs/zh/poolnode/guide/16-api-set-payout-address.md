---
id: poolnodeApiSetPayoutAddress
slug: api-set-payout-address
title: 设置付款地址
navTitle: 设置付款地址
description: POST /api/subaccount/update/address：设置付款地址。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 15
---


# 设置付款地址

本章整理 `POST /api/subaccount/update/address` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

```
URL: 
/api/subaccount/update/address

METHOD: 
POST

REQUEST BODY:

{
    "id": sid,        // 子账户的sid
    "code": code,     // 邮箱验证码
    "coin": form.selectCoin,    // 币种
    "address": form.addr,       // 匿名付款地址
    "amount": form.account      // 起付额 String类型
}
```

邮箱验证码请参考[发送用户相关操作邮箱验证码](/zh/document/poolnode/api-send-user-email)

最小起付额数值不得低于下方列表:

BTC:  0.001

FB: 0.1

LTC: 0.01

DOGE: 50

BEL: 1

KAS: 20

ETC: 0.2

## 旧版来源

- [设置付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/she-zhi-fu-kuan-di-zhi.md)
