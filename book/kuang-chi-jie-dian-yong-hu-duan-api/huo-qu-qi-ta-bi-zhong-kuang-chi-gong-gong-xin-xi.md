# 获取其他币种矿池公共信息

```
URL: 
/api/network/poolinfo?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "ltc": {
        "shares": {
            "shares_1m": 18.972,
            "shares_5m": 18.972,
            "shares_15m": 18.972,
            "shares_1h": 18.972,
            "shares_unit": "T"
        },
        "reject": {
            "1m": 0.0023,
            "5m": 0.0023,
            "15m": 0.0023,
            "1h": 0.0023
        },
        "workers": 3498,
        "users": 14691,
        "total_blocks": 148594,
        "total_rewards": 223357135549860
    }
}
```
