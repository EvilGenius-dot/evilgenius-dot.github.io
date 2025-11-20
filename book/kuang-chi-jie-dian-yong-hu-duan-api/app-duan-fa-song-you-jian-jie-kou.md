# App端发送邮件接口

#### 请求url

[https://api.d0gpool.com/app/send/email](https://api.d0gpool.com/app/send/email)

#### 请求方式

POST

#### 请求示例

```
{
"address": "",//邮箱地址
"token": ""//滑动验证码获取到的token
}
```

#### 请求参数说明

| 参数名     | 说明             |
| ------- | -------------- |
| address | 邮箱地址           |
| token   | 滑动验证码获取到的token |
