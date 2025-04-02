# 获取指定子账号下矿工列表

```
URL: 
/api/subaccount/workers?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin 币种
sid 子账号sid

RESULT:
[
    {
        "avgDelayrate1440": 0,
        "avgHashrate1440": "84690086742710.80",
        "avgRejectrate1440": 0.019684,
        "isCool": true,
        "lastShareTime": 1743580208,
        "realtimeHashrate": "107898741072418.13",
        "status": "active",
        "workerName": "rms01"
    }
]
```

