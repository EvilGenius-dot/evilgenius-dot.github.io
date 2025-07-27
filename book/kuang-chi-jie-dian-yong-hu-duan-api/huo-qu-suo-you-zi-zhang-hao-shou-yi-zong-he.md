# 获取所有子账号收益总和

```
URL: 
/api/user/profit?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

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
