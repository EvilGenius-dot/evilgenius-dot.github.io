# 获取其他币种矿池公共算力曲线

```
URL: 
/api/network/hashratedetail?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "unit": "T",
    "tickers": [
        [
            1743472800,
            19.308,
            0.0042
        ],
        [
            1743476400,
            19.363,
            0.0029
        ],
        ...
    ]
}
```
