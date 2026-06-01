---
id: miner-cannot-connect-port
slug: miner-cannot-connect-port
title: 矿机无法连接端口
navTitle: 矿机无法连接端口
description: 安装或首次配置后矿机无法连接 RustMinerSystem 端口时的基础网络、端口状态和矿机配置排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 4
---

# 矿机无法连接端口

这是首次安装和测试阶段最常见的问题。先确认矿机填写的是挖矿端口，不是后台管理地址，再检查端口是否已创建并处于运行状态。

## 现象

- 矿机后台显示连接失败或反复重连。
- RustMinerSystem 后台看不到矿机连接。
- 上游矿池没有出现测试 worker。

## 排查步骤

1. 确认 RustMinerSystem 已创建监听端口，并且端口状态正常。
2. 确认矿机填写的是 RustMinerSystem 服务器 IP 和挖矿端口，不是后台 Web 端口。
3. 检查服务器安全组、防火墙和机房网络策略是否放行该挖矿端口。
4. 确认矿机所在网络可以访问 RustMinerSystem 服务器公网或内网地址。
5. 如果端口使用 TLS/SSL、RMS2、RMS3、RMS3(Zstd) 或 KENC，确认矿机或 RMS 客户端协议与服务端端口一致。
6. 临时创建一个普通 Stratum TCP 测试端口，用少量矿机验证基础网络。

## 处理建议

- 先用最简单的 TCP 端口验证网络，再逐步启用 TLS、KENC 或 RMS 协议。
- 如果矿机和 RustMinerSystem 在同一内网，优先使用内网地址减少链路变量。
- 如果只有部分矿机失败，对比成功矿机的矿池地址、端口、用户名和密码配置。
- 连接恢复后再检查上游矿池是否出现有效 worker。

## 相关页面

- [安装指南](/zh/document/rustminersystem/installation#首次启动验证)
- [配置说明](/zh/document/rustminersystem/configuration#监听协议)
