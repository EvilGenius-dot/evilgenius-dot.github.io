# 使用内置HTTPS工具或第三方HTTPS代理

您可在页面左侧![](<../.gitbook/assets/image (25).png>)使用程序自带的HTTPS管理工具开启、关闭HTTPS访问，或上传自定义TLS证书。



请注意，如果您是通过第三方开启HTTPS，这里请不要开启HTTPS访问，否则会证书冲突导致无法访问，例如使用NGINX开启HTTPS或CLOUDFLARE的HTTPS代理。

如果您自行使用NGINX配置HTTPS访问，且RUSTMINERSYSTEM程序版本为4.1.4,  请务必在nginx.conf配置文件中增加一条 underscores\_in\_headers on配置项,  否则用户端观察者链接无法正常工作。
