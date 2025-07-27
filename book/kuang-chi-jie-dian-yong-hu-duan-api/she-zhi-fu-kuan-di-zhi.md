# 设置付款地址

```
URL: 
/api/subaccount/update/address

METHOD: 
POST

REQUEST BODY:

{
    "id": sid,        // 子账户的sid
    "code": code,     // 邮箱验证码
    "coin": form.selectCoin,    // 币种
    "address": form.addr,       // 匿名付款地址
    "amount": form.account      // 起付额 String类型
}
```

邮箱验证码请参考[发送用户相关操作邮箱验证码](fa-song-yong-hu-xiang-guan-cao-zuo-you-xiang-yan-zheng-ma.md)

最小起付额数值不得低于下方列表:

BTC:  0.001

FB: 0.1

LTC: 0.01

DOGE: 50

BEL: 1

KAS: 20

ETC: 0.2

```javascript
```
