# 调用、获取滑动验证码

由于部分接口需要传入滑动验证码返回值， WEB端可通过iframe嵌入指定路径来调用验证码组件，通过postMessage方式拿到成功、失败以及关闭的回调。APP端目前仅支持uniapp开发的APP，通过webview以及uniappSDK可进行验证码插件调用。





以携带了安全地址的访问地址为例（如未设置安全地址，则不需要携带自定义安全地址这一层路径）

```
// 验证码插件路径
/captcha/html/index.html

// 例如您的用户端访问地址为: 
http://127.0.0.1:3333/anquandizhi/

// 滑动验证码插件访问地址则为:
http://127.0.0.1:3333/anquandizhi/captcha/html/index.html
```



将iframe或webview的src设置为插件访问地址，即可调用滑动验证码，当滑动验证码发生事件时，WEB端或APP端将收到postMessage响应，以下为父页面收到响应示例。

**WEB端**

```
// WEB端

<script>
window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) return;

    const message = event.data;
    if (typeof message === "object") {
        console.log("CAPTCHA:", message);
    }
});
<script>
```

事件发生时，插件页面会给父页面响应一个object，以下为object描述。

```javascript
// 验证通过, data字段为验证成功后的返回值
{
    action: 'success',
    data: String
}


// 验证失败, data字段为验证失败后返回的失败明细
{
    action: 'error',
    data: Object
}

// 验证码被关闭
{
    action: 'close'
}
```



Uniapp端使用webview组件调用远程服务器插件访问地址即可调用，给WEBVIEW绑定handleMessage即可用来接收验证码插件响应，具体事件监听请参考uniapp官方文档。
