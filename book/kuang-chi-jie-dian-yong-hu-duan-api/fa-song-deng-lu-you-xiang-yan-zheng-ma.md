# 发送登录邮箱验证码

```
URL: 
/api/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
```

滑动验证码返回值获取请参考[调用、获取滑动验证码](diao-yong-huo-qu-hua-dong-yan-zheng-ma.md)

