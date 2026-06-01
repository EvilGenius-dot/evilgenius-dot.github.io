---
id: poolnodeApiSetPayoutAddress
slug: api-set-payout-address
title: Настроить адрес выплаты
navTitle: Настроить адрес выплаты
description: POST /api/subaccount/update/address: Настроить адрес выплаты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 15
---


# Настроить адрес выплаты

В этом разделе описаны запрос, параметры и ответ для `POST /api/subaccount/update/address`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

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

邮箱验证码请参考[发送用户相关操作邮箱验证码](/ru/document/poolnode/api-send-user-email)

最小起付额数值不得低于下方列表:

BTC:  0.001

FB: 0.1

LTC: 0.01

DOGE: 50

BEL: 1

KAS: 20

ETC: 0.2

## Старый источник

- [设置付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/she-zhi-fu-kuan-di-zhi.md)
