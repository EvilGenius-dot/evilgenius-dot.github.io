---
id: overview
slug: 
title: PoolNode 文档概览
navTitle: 概览
description: 了解 PoolNode 的节点组、配置中心、运行指挥台、挖矿端口、矿池官网、收益运营、PoolNodeAPP 和开放式 API。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---


# PoolNode 文档

PoolNode 是 RustMinerSystem 体系中的自有矿池节点模块，适合需要搭建矿池官网、开放用户注册、提供收益查询并按币种配置节点费率的运营方。它和 RustMinerSystem 的第三方矿池代理不同：代理模式主要负责把矿机连接转发到第三方矿池；PoolNode 则围绕 CODE/TOKEN 节点组组织挖矿端口、官网、用户账号、收益、支付地址、PoolNodeAPP 和开放式 API。

RustMinerSystem 服务端安装、安全入口和基础代理端口配置请阅读 [RustMinerSystem 文档](/zh/document/rustminersystem)。本页只说明 PoolNode 相关流程。

## 适用场景

- 需要搭建自己的矿池节点入口，而不是只代理第三方矿池。
- 需要给终端用户提供官网、注册、子账号、矿工、算力、收益和账单查询。
- 需要按币种维护节点费率，并配置收益邮箱、支付地址和起付金额。
- 需要多台服务器组成同一节点组，共享端口、用户查询信息和部分运营配置。
- 需要对接 PoolNodeAPP 或自建用户端工具。

## 后台页面结构

PoolNode 页面由四个主要区域组成：

| 区域 | 作用 |
| --- | --- |
| 币种筛选 | 顶部横向币种菜单，显示当前节点支持的币种和费率，切换后刷新该币种的统计和端口。 |
| 配置中心 | 管理官网访问、运营功能、APP 通信、开放式 API 入口和节点登录状态。 |
| 运行指挥台 | 查看节点运行说明、打开使用教程、刷新节点数据，并快速进入收益相关功能。 |
| 端口工作台 | 按当前币种查看端口状态、协议、地区、本地连接数、通信延迟，并执行添加、编辑和删除。 |

## 启用流程

1. 在 RustMinerSystem 后台进入“矿池节点”。
2. 使用已有 CODE/TOKEN 激活，或申请新的节点。
3. 在顶部币种标签选择目标币种。
4. 添加 PoolNode 挖矿端口，选择协议和接入地区，并执行连通性测试。
5. 在配置中心设置公网官网、官网地址、模板、Logo、公告、HTTPS 和证书。
6. 注册收益邮箱，并按币种配置节点费率、支付地址、起付金额、子账号独立费率、返佣和小额提现。
7. 配置 PoolNodeAPP 通信地址，确认节点邀请码。
8. 打开矿池官网，验证挖矿地址、注册、登录、查询和 APP 接入流程。

不同 CODE/TOKEN 节点组之间账号不互通。用户必须在当前节点官网注册子账号，才能在当前节点组下挖矿和查询。

## 功能使用分类

| 章节 | 适用内容 |
| --- | --- |
| [节点激活与身份](/zh/document/poolnode/activation) | 申请节点、使用 CODE/TOKEN 激活节点、理解同组服务器共享关系和退出当前节点登录状态。 |
| [挖矿端口](/zh/document/poolnode/mining-ports) | 创建 PoolNode 挖矿端口、选择协议和接入地区、测试连通性、配置官网展示地址。 |
| [矿池官网](/zh/document/poolnode/website) | 配置公网访问、官网地址、页面模板、Logo、公告、HTTPS 和证书。 |
| [收益与费率](/zh/document/poolnode/revenue) | 注册收益邮箱、查询收益和打款、设置节点费率、管理子账号、小额提现。 |
| [PoolNodeAPP](/zh/document/poolnode/app-api) | 配置 PoolNodeAPP 通信地址、节点邀请码和用户端验证流程。 |
| [开放式 API](/zh/document/poolnode/api-notes) | 自建用户前端、移动端或第三方集成时使用的 PoolNode 用户端 API。 |
| [运维检查](/zh/document/poolnode/operations) | 查看节点数据摘要、同步日志、多服务器变更流程和故障排查。 |

## 同步与本机配置边界

同步配置会影响同一 CODE/TOKEN 节点组，例如端口定义、节点费率、收益邮箱、用户信息和部分官网公共配置。本机配置只影响当前服务器，例如官网展示挖矿地址、自定义展示地址、官网访问端口、访问路径和证书状态。

新增端口或修改共享配置前，先确认同组服务器端口未被占用，并在修改后逐台检查运行状态。
