# 获取指定子账号算力、在线离线信息

```
URL: 
/api/subaccount/hashrate?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
{
    "avg_hashrate1440": "0",    // 24小时平均算力
    "hashrate": "0",            // 当前算力
    "lost": 0,                  // 失效设备数量
    "offline": 0,               // 离线数量
    "online": 0                 // 在线数量
}
```

