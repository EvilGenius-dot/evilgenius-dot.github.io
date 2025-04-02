# 获取所有子账号矿机在线、离线数量总和

```
URL: 
/api/user/workers?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "lost": null || Number,        // 失效数量
    "offline": null || Number,     // 离线数量
    "online": null || Number       // 在线数量
}
```

此接口是获取所有子账号的数据统计之和，如需获取指定子账号下设备数量，请参考获取指定子账号设备数量接口。
