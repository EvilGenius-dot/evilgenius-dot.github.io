---
id: installation
slug: installation
title: RustMinerSystem 安装指南
navTitle: 安装
description: 通过 Linux 一键脚本、ARM 脚本或 Windows 二进制安装 RustMinerSystem，并完成首次启动验证。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 3
---

# 安装

RustMinerSystem 提供 Linux、Windows、ARM 和 ARMV7 安装包。Linux 推荐使用官方安装脚本；Windows 可以直接下载对应二进制程序运行。版本和文件名以官方 GitHub 仓库发布内容为准。

## Linux 一键安装

在服务器上执行：

```bash
bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)
```

如果所在网络访问 GitHub 较慢，可以尝试备用地址：

```bash
bash <(curl -s -L -k https://rustminersystem.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)
```

脚本运行后根据菜单提示完成安装、启动或管理。生产环境建议使用 Ubuntu 或其他常见 Linux 发行版，并提前确认服务器安全组、系统防火墙和运营商网络策略允许访问后台端口与挖矿端口。

## ARM / ARMV7 安装

ARM 设备使用对应脚本：

```bash
# ARM
bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/arm-install.sh)

# ARMV7
bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/armv7-install.sh)
```

ARM 设备性能差异较大。如果计划使用 RMS3、RMS3(Zstd)、大量端口或大量矿机接入，应先用少量矿机做 CPU、内存、连接数和拒绝率压测。

## Windows 安装

1. 打开 Windows 二进制目录：

```text
https://github.com/EvilGenius-dot/RustMinerSystem/tree/main/windows
```

2. 下载适合当前版本的程序文件。
3. 双击运行程序。
4. 根据程序窗口提示打开 RustMinerSystem 管理后台。
5. 首次登录后立即修改默认账号密码和安全访问地址。

## 手动下载 Linux 二进制

如果不使用一键脚本，也可以从 Linux 目录下载二进制文件后自行运行和维护：

```text
https://github.com/EvilGenius-dot/RustMinerSystem/tree/main/linux
```

手动部署时需要自己处理启动方式、日志路径、进程守护、升级和回滚。生产环境建议至少准备：

- 服务启动脚本或 systemd 服务。
- 配置文件备份目录。
- 日志保留策略。
- 升级前的二进制备份。
- 端口和安全组放行清单。

## 默认后台账号

旧版安装完成后会使用默认后台账号密码。首次进入后台后必须立即修改。

```text
默认账号: qzpm19kkx
默认密码: xloqslz913
```

如果当前版本已经在安装流程中提示自定义账号密码，请以实际安装提示为准。

## 首次启动验证

安装完成后，按以下顺序验证：

1. 后台地址可以打开。
2. 默认账号可以登录，且已改为自定义账号密码。
3. 安全访问地址已设置，默认后台入口不再继续使用。
4. 二步验证已开启并完成一次登录验证。
5. 系统信息、版本信息、CPU、内存和启动时间正常显示。
6. 创建一个测试代理端口，端口状态正常。
7. 测试矿机可以连接 RustMinerSystem 端口。
8. 上游矿池或 PoolNode 侧能看到测试矿机数据。
9. 日志中没有持续出现端口占用、协议错误、目标矿池连接失败或认证失败。

## 安装故障入口

安装阶段遇到问题时，请进入常见故障分类查看对应文章：

- [后台无法访问](/zh/document/rustminersystem/admin-unreachable)
- [矿机无法连接端口](/zh/document/rustminersystem/miner-cannot-connect-port)
- [Linux 脚本下载失败](/zh/document/rustminersystem/linux-script-download-failed)
