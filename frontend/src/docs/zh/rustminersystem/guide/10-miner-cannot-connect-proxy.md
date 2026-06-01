---
id: miner-cannot-connect-proxy
slug: miner-cannot-connect-proxy
title: 矿机连不上代理端口
navTitle: 矿机连不上代理端口
description: 生产端口中矿机无法连接 RustMinerSystem 代理端口时的协议、证书、KENC 和 RMS 参数排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 5
---

# 矿机连不上代理端口

生产环境中矿机连不上代理端口，通常不是单一原因。需要同时检查矿机配置、端口监听、网络策略、监听协议和本地 RMS 客户端。

## 现象

- 矿机在线数突然下降。
- 某个端口无法接入，但其他端口正常。
- RMS 客户端能启动，但矿机无法通过 RMS 进入 RustMinerSystem。

## 排查步骤

1. 检查矿机填写的是挖矿端口，不是后台管理端口。
2. 检查服务器安全组、防火墙、机房 ACL 和内网路由。
3. 确认端口监听协议与矿机或 RMS 客户端协议一致。
4. TLS/SSL 端口检查证书是否过期、证书链是否完整、域名是否匹配。
5. KENC 端口检查矿机侧或客户端侧自定义密钥是否与服务端一致。
6. RMS3/RMS3(Zstd) 端口检查本地客户端协议、币种、密码、连接压缩数量和超级压缩配置。
7. 查看端口连接日志，区分是连接未到达、认证失败、协议不匹配还是上游矿池连接失败。

## 处理建议

- 新协议上线时先创建新测试端口，不直接覆盖生产端口。
- RMS 客户端相关问题请优先对照 [RMS 文档](/zh/document/rms)中的服务端与客户端配置。
- 如果大面积离线，先回滚到最近稳定的端口协议和客户端版本。
- 保留原端口配置导出文件，便于快速恢复。

## 相关页面

- [配置说明](/zh/document/rustminersystem/configuration#监听协议)
- [RMS 文档](/zh/document/rms)
