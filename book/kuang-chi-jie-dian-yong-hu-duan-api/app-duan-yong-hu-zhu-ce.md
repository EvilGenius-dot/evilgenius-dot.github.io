# APP端用户注册

#### 请求url

[https://api.d0gpool.com/app/register](https://api.d0gpool.com/app/register)

#### 请求方式

POST

#### 请求示例

```
{
"email": "xxxx",
"code": "323333", //邮箱验证码，同节点登录验证码
"invite_code": 123456 //注意这个是数字
}
```

#### 请求参数备注

| 参数名          | 类型     | 说明             |
| ------------ | ------ | -------------- |
| email        | String | 邮箱             |
| code         | String | 邮箱验证码，同节点登录验证码 |
| invite\_code | number | 节点邀请码，注意这个是数字  |

#### 成功返回示例

```
{
"status": 0,  // status = 1表示邀请码无效，此时url为空
"url": "http://1.2.3.4/a/"
}
```

#### 返回参数备注

<table data-header-hidden><thead><tr><th width="213"></th><th></th></tr></thead><tbody><tr><td>参数名</td><td>说明</td></tr><tr><td>status</td><td>状态码，status = 1表示邀请码无效，此时url为空</td></tr><tr><td>url</td><td>后续APP使用的接口地址前缀如"http://1.2.3.4/a/"</td></tr></tbody></table>

#### 说明

成功http状态码为200，非200为请求错误，成功后使用url继续请求一次到节点使用邮箱登录
