# 登录、获取TOKEN、获取验证码

URL:

/api/user/login



METHOD:

POST



REQUEST BODY:

```
data: {
    email: String,    // 登录的邮箱地址
    code: String      // 获取到的邮箱验证码
}
```



