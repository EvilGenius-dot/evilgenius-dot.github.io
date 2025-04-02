# 获取所有子账号算力曲线总和

```
URL: 
/api/user/hashrate/detail?coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
mode传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
```
