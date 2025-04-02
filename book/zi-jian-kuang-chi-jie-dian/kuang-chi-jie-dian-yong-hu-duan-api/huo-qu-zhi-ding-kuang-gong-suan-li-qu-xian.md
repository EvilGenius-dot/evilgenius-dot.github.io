# 获取指定矿工算力曲线

```
URL: 
/api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}

METHOD: 
GET

PARAMS:
mode 
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线
worker 传入矿工列表中拿到的workername
sid 子账号sid

RESULT:
{
    "coin": "btc",
    "hashrates": [
        "88195492702672",
        "85693492909688",
        "89446492599164",
        ...
    ],
    "startTime": 1743494100000,
    "timeInterval": 1800,
    "worker": "rms01"
}
```
