# 获取收入账单列表

```
URL: 
/api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account": null,
            "account_type": 0,
            "ar": "1",                             // 当日费率
            "avg_hashrate": "1738588508492292",    // 结算算力
            "biz_coin": null,
            "coin": "BTC",                         // 币种
            "created_at": "2025-04-04T02:00:13Z",
            "day": "2025-04-03T00:00:00Z",
            "day_profit": "0.0009618284643889825", // 日收益
            "diff": "113757508810854",             // 难度
            "email": null,
            "id": 43215,
            "poolin_type": 0,
            "pplns_day_profit": "0.000010654886997250605",
            "pps_day_profit": "0.0009511735773917318",
            "project_id": null,
            "r": "0.9989999999525025",
            "status": 2,                           // 支付状态, 0未支付, 1支付中, 2已支付
            "subaccount_id": null,
            "updated_at": "2025-04-04T02:00:13Z",
            "user_id": null
        },
        ...
    ],
    "total": 1
}
```
