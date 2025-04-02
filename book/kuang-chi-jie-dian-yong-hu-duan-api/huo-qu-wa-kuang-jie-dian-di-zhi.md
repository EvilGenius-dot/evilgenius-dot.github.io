# 获取挖矿节点地址

此接口用来获取RUSTMINERSYSTEM后台配置的挖矿地址及端口

```
URL: 
/api/open/poolnode

METHOD: 
GET

RESULT:
[
    {
        "endpoint_id": 12,             // 挖矿节点id
        "endpoint_name": "亚洲-1",      // 节点地区
        "coin": "BTC",                // 币种
        "name": "address",            // 挖矿地址（域名或ip）
        "port": 6006,                 // 挖矿端口
        "protocol": 1,                // 地址协议 0为TCP 1为SSL 2为RMS 3为TCP SSL双协议 5为RMS2
        "remark": ""
    },
    {
        "endpoint_id": 12,
        "endpoint_name": "亚洲-1",
        "coin": "BTC",
        "name": "address",
        "port": 6010,
        "protocol": 5,
        "remark": ""
    },
    {
        "endpoint_id": 21,
        "endpoint_name": "通用-1",
        "coin": "KAS",
        "name": "address",
        "port": 8001,
        "protocol": 1,
        "remark": ""
    }
]
```
