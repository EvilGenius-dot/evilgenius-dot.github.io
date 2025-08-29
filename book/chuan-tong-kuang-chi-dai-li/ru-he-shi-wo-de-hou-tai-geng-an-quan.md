# 如何使我的后台更安全

为了增加安全性,  在您购买完服务器以及安装程序后，请检查以下清单，通常可能某一个疏忽就会造成无法挽回的损失（例如后台被入侵导致配置被修改）。



1. 防火墙添加SSH端口。
2. 防火墙增加WEB访问端口。
3. 开启后台登录二步验证。
4. 设置复杂的安全地址。
5. 设置复杂的登录账号密码。
6. 不要运行来源不明的程序或脚本。



3, 4, 5在管理后台即可进行设置,  这里不多表述，针对1和2重点说明。



**1.防火墙添加SSH端口。**

安装完操作系统之后, 您要做的第一件事就是关闭掉SSH或是禁用SSH端口，SSH端口默认为22,  如果您的SSH密码未非大小+数字+字符,  容易被爆破进入您的操作系统,  从而导致配置被修改。

以阿里云为例：

找到您的ECS列表,  点进ECS实例ID进入详情页,  在详情页内找到安全组选项卡,  并且配置您的安全组规则

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>
