---
id: overview
slug: ""
title: RustMinerSystem 文档概览
navTitle: 概览
description: 了解 RustMinerSystem 的第三方矿池 Proxy、PoolNode 真矿池、可选 RMS 本地压缩工具和文档结构。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---

# RustMinerSystem 文档

> 本文档用于记录 RustMinerSystem 的安装、配置、运行和运维流程。请将示例中的占位内容替换为你的真实部署信息。

## 概览

RustMinerSystem 可以作为第三方矿池 Proxy 使用，将接入矿机算力按任意比例分配到指定第三方矿池钱包或矿工名；也可以通过 PoolNode 搭建真正的自有矿池，让设定费率直接在虚拟币结算层面完成分配。RMS 是可选配套工具，适合需要降低带宽占用或公网连接数的场景：矿机可先接入本地 RMS，再通过加密压缩链路连接 RustMiner；不部署 RMS 时，也可以直接接入 RustMiner。

### 适用场景

- 矿场需要统一管理矿机接入路径，并把接入算力按比例分配到指定第三方矿池钱包。
- 运营方需要通过 PoolNode 搭建自己的真实矿池，并在结算层面分配设定费率。
- 网络环境希望按需压缩矿机数据体积和公网连接数。
- 团队需要可复制的安装、配置和升级流程。

## 运行模式

### 第三方矿池 Proxy

该模式适用于接入第三方矿池的场景。RustMiner 位于矿机和第三方矿池之间，可按配置把任意比例的接入算力分配到指定矿池地址、钱包或矿工名。建议先使用测试矿机验证连接稳定性和分配目标，再扩大接入规模。

### PoolNode 真矿池

该模式适用于需要搭建自有真实矿池的运营场景。PoolNode 负责矿池节点能力，设定费率直接在虚拟币结算层面完成分配。部署前请确认节点同步状态、网络连通性、结算配置和故障恢复流程。

### RMS 可选本地压缩工具

RMS 不是必需组件。它部署在矿场本地，用于把矿机流量通过加密压缩链路接入 RustMiner，帮助减少传输体积和公网连接数。第三方矿池 Proxy 与 PoolNode 真矿池都可以搭配 RMS 使用，也可以让矿机直接接入 RustMiner。启用前请确认服务端和客户端版本兼容，并记录回滚方案。
