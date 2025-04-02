# 获取指定子账号收益

```
URL: 
/api/subaccount/profit?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
```
