---
id: operations
slug: operations
title: RustMinerSystem 运维
navTitle: 运维
description: 了解 RustMinerSystem 代理服务的生产运维、监控检查、上线扩容、升级和回滚流程。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 5
---

# 运维

RustMinerSystem 生产运维的核心目标是：服务稳定、代理端口稳定、矿机在线、上游矿池可达、费率配置正确。建议把所有变更都先在测试端口验证，再逐步扩大范围。PoolNode 节点组运维请阅读 [PoolNode 文档](/zh/document/poolnode)，RMS 本地压缩链路运维请阅读 [RMS 文档](/zh/document/rms)。

## 日常检查

| 检查项 | 关注点 |
| --- | --- |
| 服务状态 | 进程是否运行、启动时间是否异常重置、版本是否符合预期。 |
| 系统资源 | CPU、内存、网络流量、连接数、磁盘空间。 |
| 代理端口 | 端口状态、在线/离线设备、实时算力、24h 算力、延迟和拒绝率。 |
| 上游矿池 | 主矿池和备用矿池是否可连通，协议是否匹配，矿池侧是否有 worker 数据。 |
| 费率钱包 | 钱包地址、矿工名、矿池地址、比例和独立比例是否符合预期。 |
| 安全 | 后台入口、二步验证、IP 黑名单、钱包黑白名单和证书是否仍符合策略。 |

## 上线与扩容流程

1. 创建测试端口。
2. 接入少量矿机，观察 30 到 60 分钟。
3. 检查 RustMinerSystem 后台数据和上游矿池数据是否一致。
4. 验证费率钱包、钱包独立比例和矿机独立比例。
5. 逐批扩大接入规模。
6. 每次扩容后观察 CPU、内存、连接数、延迟和拒绝率。
7. 到达目标规模后导出端口配置备份。

如果端口使用 RMS2、RMS3 或 RMS3(Zstd) 协议，请在扩容前阅读 [RMS 文档](/zh/document/rms)中的容量评估和压缩参数建议。

## 升级流程

1. 阅读发布说明，确认是否涉及端口协议、配置结构或 RMS 协议兼容性。
2. 导出当前代理端口配置。
3. 备份安装目录、二进制文件和关键配置。
4. 记录当前版本、后台端口、官网端口、运行端口和服务启动方式。
5. 先在测试服务器或低风险节点升级。
6. 验证登录、端口状态、矿机连接、上游矿池和 RMS 协议端口接入。
7. 安排维护窗口升级生产节点。
8. 升级后再次导出配置，并记录新版本。

PoolNode 多服务器节点组升级请参考 [PoolNode 文档](/zh/document/poolnode)中的节点组运维建议。

## 回滚方案

升级前必须确认能回滚：

- 保留旧版本二进制或安装包。
- 保留端口 JSON 备份。
- 保留证书、KENC 密钥、安全访问地址和二步验证恢复方式。
- 如果使用 RMS 协议端口，记录 RMS 本地客户端版本和端口配置。

如果升级后出现大面积矿机离线，优先停止继续扩容或继续升级，恢复旧版本并验证端口重新上线。

## 故障排查入口

常见故障已经拆分到独立分类，每个故障都有单独排查文章：

- [后台无法访问](/zh/document/rustminersystem/admin-unreachable)
- [后台无法登录](/zh/document/rustminersystem/admin-login-failed)
- [端口创建失败](/zh/document/rustminersystem/proxy-port-create-failed)
- [矿机无法连接端口](/zh/document/rustminersystem/miner-cannot-connect-port)
- [矿机连不上代理端口](/zh/document/rustminersystem/miner-cannot-connect-proxy)
- [端口有连接但无有效算力](/zh/document/rustminersystem/connected-no-valid-hashrate)
- [费率钱包没有收益](/zh/document/rustminersystem/fee-wallet-no-revenue)
- [Linux 脚本下载失败](/zh/document/rustminersystem/linux-script-download-failed)

## 安全运维

- 不长期使用默认后台入口。
- 不共享后台账号、PoolNode CODE/TOKEN、KENC 密钥和证书私钥。
- 对外暴露的后台入口尽量配合防火墙白名单或反向代理访问控制。
- 定期检查 IP 黑名单、钱包黑白名单和登录日志。
- 调整安全访问地址、HTTPS 证书或 Web 端口前，先确认备用登录路径。

## FAQ

### RustMinerSystem 可以同时支持多少矿机？

取决于服务器 CPU、内存、网络、监听协议、RMS 压缩参数、上游矿池稳定性和端口数量。正式上线前必须分批压测。

### 升级时是否需要停机？

取决于部署方式和版本变更内容。生产环境建议安排维护窗口，并准备可执行的回滚方案。

### 可以只用 RustMinerSystem，不部署 RMS 吗？

可以。矿机可以直接连接 RustMinerSystem 代理端口。RMS 主要用于本地汇聚连接、加密压缩和减少公网出口连接数，详见 [RMS 文档](/zh/document/rms)。

### PoolNode 和第三方矿池代理可以同时使用吗？

可以。后台中 `矿池代理` 和 `矿池节点` 是两个模块。PoolNode 的节点组、官网、收益和用户端运维请阅读 [PoolNode 文档](/zh/document/poolnode)。
