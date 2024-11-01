# 代理传统矿池

1. 点击创建新代理

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

2. 根据顺序，选择或填写正确以及必要的信息

(1.  选择创建监听端口协议,  例如TCP， 如果您的设备只支持TCP接入， 那么您可选择TCP协议，TCP协议为明文数据传输，无法加密以及避免中间人攻击,  请选择接入设备支持的协议)

(2.  创建监听端口号 1 - 65535之间任意数值，RustMinerSystem所在设备只要不被占用的端口都可使用，任意填写)

(3. 选择要代理的币种)

(4. 填写要代理的矿池地址,  例如鱼池的BTC   stratum+tcp://btc.f2pool.com:1314   您只需需要将要代理的地址填入即可)

(5. 选择代理矿池地址协议, 如果 步骤4 代理地址为TCP协议，此处必须选择TCP， 如果为SSL或TLS， 此处则必须选择SSL， 务必选择要代理矿池地址一致协议， 否则矿机将无法连接)

<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

&#x20;  3\. 创建代理

填写完必须要信息之后，即可创建传统矿池代理

<figure><img src="../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

例如此处创建了19200端口的BTC代理， 代理至某传统矿池，创建完毕之后，例如RustMinerSystem所在设备公网或内网IP为 x.x.x.x,   矿机挖矿地址直接填写 stream+tcp://x.x.x.x:19200  即可通过RustMinerSystem连接至第三方矿池



代理流程:

矿机 -> RustMinerSystem -> 矿池
