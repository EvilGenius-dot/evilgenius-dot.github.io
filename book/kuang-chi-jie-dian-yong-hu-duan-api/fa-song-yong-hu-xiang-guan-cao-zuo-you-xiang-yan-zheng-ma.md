# 发送用户相关操作邮箱验证码

用户登录之后，一些用户操作相关接口需要获取邮箱验证码,  例如修改、绑定支付钱包地址等操作，统一通过此接口发送邮件验证码。



```
URL: 
/api/user/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
```

滑动验证码返回值获取请参考[调用、获取滑动验证码](diao-yong-huo-qu-hua-dong-yan-zheng-ma.md)
