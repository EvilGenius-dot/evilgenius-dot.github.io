# 获取指定子账号算力曲线

```
URL: 
/api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
sid 传入指定子账号sid
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

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
