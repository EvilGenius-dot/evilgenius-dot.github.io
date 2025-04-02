# 登录、获取TOKEN

```
URL: 
/api/user/login

METHOD: 
POST

REQUEST BODY:
{
    email: String,    // 登录的邮箱地址
    code: String      // 获取到的邮箱验证码
}

RESULT:
{
    "status": 0,
    "error": null,
    "data": Token
}
```

发送邮箱验证码请参考[发送邮箱验证码](fa-song-deng-lu-you-xiang-yan-zheng-ma.md)

后续所有接口都需要在请求头内加入Authorization字段，值为Bearer {Token}，用来过身份验证。

```
// headers
{
    Authorization: Bearer Token
}
```

