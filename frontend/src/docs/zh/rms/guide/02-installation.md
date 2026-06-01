---
id: rmsInstallation
slug: installation
title: RMS 安装教程
navTitle: 安装教程
description: 安装 RMS3 Linux 和 Windows 版本，了解默认访问地址、WebView2、架构选择和旧版 RMS2 入口。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 2
---

# RMS 安装教程

RMS3 是当前推荐使用的 RMS 客户端。根据 RMS GitHub 使用指南，使用 RMS3 协议需要 RustMinerSystem 服务端 `v4.5.0` 及以上版本，并且 RMS3 不再兼容 RMS1/RMS2 协议端口。只有在旧服务端仍需要 RMS2 时，才使用旧版 RMS2 安装入口。

参考来源：<https://github.com/EvilGenius-dot/RMS>

## 安装前准备

- 选择一台会长期在线的矿场局域网设备。
- 给这台设备固定局域网 IP。如果路由器 DHCP 导致重启后 IP 变化，矿机可能会失去 RMS 连接地址。
- Linux 安装需要 root 权限。
- 如有防火墙限制，请放行 RMS 网页访问端口。默认访问地址是 `http://设备IP:42703`。
- 接入矿机前，先准备好 RustMinerSystem 服务端 RMS 协议端口。

## RMS3 Linux 安装

先切换到 root：

```bash
sudo -i
```

运行 GitHub 官方安装命令：

```bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)
```

如果服务器无法访问 GitHub，README 也提供了备用线路：

```bash
bash <(curl -s -L -k https://rustminersystem.com/install.sh)
```

安装脚本会进入交互菜单。选择 `安装`，再选择 CPU 架构和下载线路。

常见架构参考：

| 选项 | 常见设备 |
| --- | --- |
| `x86-64` | 大多数 Intel/AMD Linux 服务器和迷你主机。 |
| `aarch64` | 64 位 ARM 设备。 |
| `arm-musleabi`、`arm-musleabihf`、`armv7-*` | 较老 ARM 设备。 |

Linux 脚本会把 RMS 安装到 `/root/rms`，在 systemd 系统上配置名为 `rmservice` 的服务，启动程序，并在启动成功后提示访问地址。

## RMS3 Windows 安装

RMS3 提供两个 Windows 版本。

| 版本 | 下载地址 |
| --- | --- |
| 图形化界面版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/rms.exe> |
| 非图形化命令行版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-no-gui/rms.exe> |

如果图形化版本打开后白屏，请安装 Microsoft Edge WebView2：

```text
https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/MicrosoftEdgeWebview2Setup.exe
```

启动 Windows 客户端后，从本机或局域网浏览器打开 RMS 页面，再继续配置和配对。

## 安装后首次访问

安装完成后，用浏览器访问：

```text
http://设备IP:42703
```

进入页面后，如果你的部署提供推送地址，就填写推送地址；如果不使用推送地址，可以跳过并手动添加远程服务端地址。

建议先检查：

- 局域网内其他设备可以打开 RMS 页面。
- RMS 安装设备 IP 已固定。
- RustMinerSystem 服务端 RMS 协议端口可访问。
- 本地 RMS 客户端和服务端端口使用同一代 RMS 协议。

## Linux 脚本管理

再次运行 Linux 安装脚本会进入管理菜单。脚本支持：

- 安装。
- 停止运行 RMS。
- 重启 RMS。
- 卸载 RMS。

如果你的部署没有额外封装服务管理，建议使用脚本菜单进行日常维护。

## 旧版 RMS2 安装

旧版 RMS2 只适用于仍需要 RMS2 的历史部署。不要把 RMS3 客户端和仅支持 RMS2 的服务端端口混用。

RMS2 Linux：

```bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/OLD_2/install.sh)
```

RMS2 备用线路：

```bash
bash <(curl -s -L -k https://rustminersystem.com/OLD2_install.sh)
```

RMS2 Windows：

| 版本 | 下载地址 |
| --- | --- |
| 图形化界面版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/rms.exe> |
| 非图形化命令行版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-no-gui/rms.exe> |
| WebView2 安装包 | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/MicrosoftEdgeWebview2Setup.exe> |

## 下一步

RMS 安装完成并能访问后，继续阅读 [部署与配对](/zh/document/rms/setup)。
