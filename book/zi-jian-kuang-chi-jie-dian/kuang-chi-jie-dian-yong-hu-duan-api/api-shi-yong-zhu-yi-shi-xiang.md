# API使用注意事项

此API为用户端接口，即![](../../.gitbook/assets/image.png)RUSTMINERSYSTEM默认自带后台中所有接口，用户可根据自己需求调用API开发自己的用户端工具，例如网页、APP或管理工具。



注意：



接口调用地址为

```
用户端访问地址:端口+安全地址
(如果未设置安全地址，则调用路径为用户端访问地址:端口)
```



所有接口除登录外，均需要在header处使用Authorization字段来传入token以验证身份, toekn获取方式详见[登录、获取TOKEN](deng-lu-huo-qu-token.md),   调用其他接口时header应传入

```
Authorization: Bearer 获取到的TOKEN
```



部分接口需要传入滑动验证码成功后的返回值,   关于滑动验证码调用请参考[滑动验证码](https://app.gitbook.com/o/pfN2ar9xHCUwr1hvPOaW/s/vloF7G6sH3tpG6N1g75q/~/changes/30/zi-jian-kuang-chi-jie-dian/kuang-chi-jie-dian-yong-hu-duan-api/diao-yong-huo-qu-hua-dong-yan-zheng-ma)。

