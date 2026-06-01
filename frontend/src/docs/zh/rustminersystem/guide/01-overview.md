---
id: overview
slug: ""
title: RustMinerSystem 文档概览
navTitle: 概览
description: 了解 RustMinerSystem 服务端与矿池代理的职责边界、后台模块和推荐阅读路径。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---
# RustMinerSystem 文档

![RustMinerSystem 中文后台预览](/image/docs/rustminersystem/features/zh/dashboard.png)

*RustMinerSystem 中文后台预览：从概览页快速了解矿池代理仪表盘、端口列表、算力统计和服务器资源状态。*

RustMinerSystem 是面向矿机、矿场和矿池节点运营方的挖矿连接管理系统。本文档聚焦 RustMinerSystem 服务端自身，尤其是第三方矿池代理、后台管理、安全设置、端口配置、费率钱包、统计和运维流程。

[PoolNode](/zh/document/poolnode) 和 [RMS](/zh/document/rms) 是 RustMinerSystem 体系中的独立组件：PoolNode 用于自有矿池节点和用户端官网，RMS 用于矿场本地加密压缩接入。本文只在涉及边界关系时提到它们，具体部署和配置请进入对应文档。

## 核心组件

| 组件 | 作用 | 典型部署位置 |
| --- | --- | --- |
| RustMinerSystem 服务端 | 提供后台管理、矿池代理、端口、钱包、统计、安全设置等核心能力。 | 公网服务器、矿场网关或代理服务器 |
| 矿池代理 Proxy | 创建面向矿机的监听端口，将矿机连接转发到第三方矿池，并按配置处理费率钱包、协议和兼容规则。 | RustMinerSystem 服务端 |
| [PoolNode](/zh/document/poolnode) | 自有矿池节点、矿池官网、用户注册、收益查询和节点费率配置。 | 一台或多台同组服务器 |
| [RMS](/zh/document/rms) | 矿场本地加密压缩客户端，将矿机连接汇聚后接入 RustMinerSystem。 | 矿场本地局域网 |
| RustMinerSystemAPP | 面向系统运维，查看代理端口、矿工、算力和服务器状态。 | 移动端 |

## 运行模式

### 第三方矿池代理

该模式适用于已经有上游矿池账户或钱包，需要统一接入、监控和管理矿机的场景。

```text
矿机 -> RustMinerSystem Proxy -> 第三方矿池
```

Proxy 端口负责监听矿机连接，并按端口配置选择币种、监听协议、主矿池、备用矿池、目标矿池协议、费率钱包、钱包/矿工名替换、RMS3 压缩参数和兼容开关。后台可查看币种算力、端口状态、在线/离线设备、延迟、钱包列表、worker 列表、连接日志和系统资源。

### 自有矿池与本地压缩

如果目标是搭建自有矿池官网、用户端查询和结算层节点，请阅读 [PoolNode 文档](/zh/document/poolnode)。如果目标是让矿场本地矿机先进入加密压缩客户端，再连接 RustMinerSystem，请阅读 [RMS 文档](/zh/document/rms)。

## 后台模块

| 模块 | 说明 |
| --- | --- |
| 矿池代理 | [仪表盘](/zh/document/rustminersystem/dashboard)、[创建代理端口](/zh/document/rustminersystem/proxy-port)、[端口列表](/zh/document/rustminersystem/port-list)、[端口详情](/zh/document/rustminersystem/port-detail)、[抽水热更新](/zh/document/rustminersystem/hot-wallet)。 |
| 设置中心 | [设置中心](/zh/document/rustminersystem/settings-center) 覆盖账号密码、安全访问地址、登录二步验证、HTTPS、证书、登录过期时间、IP 黑名单、钱包黑白名单、KENC 密钥、快捷矿池、快捷钱包、掉线推送、导入/导出配置。 |
| 日志与维护 | [日志管理](/zh/document/rustminersystem/log-manager)、[算法引擎](/zh/document/rustminersystem/engine-control)、[APP 信息入口](/zh/document/rustminersystem/app-center)。 |
| RMS 接入 | [RMS 客户端配置](/zh/document/rustminersystem/rms-client) 用于推送地址、端口映射、客户端密码、自定义地址和客户端展示信息；本地客户端部署请查看 [RMS 文档](/zh/document/rms)。 |
| 群控 | [群控远程管理](/zh/document/rustminersystem/remote-control) 用于集中查看多个 RustMinerSystem 实例的算力、设备、资源、流量和运行状态。 |
| 矿池节点 | PoolNode 相关入口。节点申请、官网、收益和用户侧能力请查看 [PoolNode 文档](/zh/document/poolnode)。 |

## 费用与合规提示

旧版文档中说明 RustMinerSystem 本体不收取法币服务费；传统矿池代理和 PoolNode 会通过不同方式获得开发回报。PoolNode 的节点费率和收益规则请以 [PoolNode 文档](/zh/document/poolnode)、当前版本后台展示、发布说明和服务协议为准。

请只在你拥有设备管理权或已获得明确授权的矿场、矿机和账户中使用本系统。首次部署后应立即修改默认账号密码、设置安全访问地址、开启二步验证，并确认使用行为符合所在地区法律法规和上游矿池规则。
