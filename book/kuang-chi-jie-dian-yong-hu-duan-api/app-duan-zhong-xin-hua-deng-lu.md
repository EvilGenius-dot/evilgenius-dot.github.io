# APP端中心化登录

#### 请求url

[https://api.d0gpool.com/app/login](https://api.d0gpool.com/app/login)

#### 请求方式

POST

#### 请求示例

```
{
"email": "xxxx",
"code": "323333"
}
```

#### 请求参数说明

| 参数名   | 类型     | 说明             |
| ----- | ------ | -------------- |
| email | String | 邮箱             |
| code  | String | 邮箱验证码，同节点登录验证码 |

#### 成功返回示例

```
{
"status": 0,  
"data": [
        {
            "created_at": "2025-09-24T07:39:47Z",
            "name": "test-001", // 节点名称
            "updated_at": "2025-09-24T07:46:01Z",
            "url": "xxx.com/a/" // api 地址
        },
        {
            "created_at": "2025-09-24T07:39:47Z",
            "name": "test-002",
            "updated_at": "2025-09-24T07:46:01Z",
            "url": "xxx.com/b/"
        }
    ]
}
```

#### 返回参数说明

| 参数名                      | 说明    |
| ------------------------ | ----- |
| status                   | 状态码   |
| data\[index].created\_at | 创建时间  |
| data\[index].name        | 节点名称  |
| data\[index].updated\_at | 更新时间  |
| data\[index].url         | API地址 |

#### 接口说明

成功http状态码为200，非200为请求错误，成功后使用用户选择的节点url继续请求一次至相应节点进行邮箱登录
