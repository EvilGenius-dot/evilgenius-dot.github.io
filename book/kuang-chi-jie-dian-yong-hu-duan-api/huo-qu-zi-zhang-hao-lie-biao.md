# 获取子账号列表

```
URL: 
/api/subaccount/list?coin={coin}

METHOD: 
GET

PARAMS:
coin 传入当前选中的币种（子账号列表中会携带选中币种的实时算力）

RESULT:
[
    {
        "hashrate": "1970324836974591.97",    // 传入币种的实时算力
        "id": 149,                            // 子账户的sid
        "name": "504132878",                  // 子账号
        "remark": null                        // 备注
    }
]
```
