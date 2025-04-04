# 获取付款地址

```
URL: 
/api/subaccount/address/info

METHOD: 
POST

PARAMS:
{
    "id": 149,        // 子账号sid
    "coin": "BTC"     // 币种
}

RESULT:
[
    {
        "address": "addres",    // 已设置的支付地址
        "amount": "0.001",    // 已设置的起付额
        "coin": "BTC"        // 币种
    }
]
```
