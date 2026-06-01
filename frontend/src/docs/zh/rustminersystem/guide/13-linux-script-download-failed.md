---
id: linux-script-download-failed
slug: linux-script-download-failed
title: Linux 脚本下载失败
navTitle: Linux 脚本下载失败
description: Linux 一键安装脚本无法下载或执行失败时的 GitHub 访问、备用地址、证书和手动安装排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 8
---

# Linux 脚本下载失败

Linux 脚本下载失败通常与服务器网络、DNS、证书校验或 GitHub 访问质量有关。安装脚本不是唯一方式，必要时可以使用备用地址或手动下载二进制文件。

## 现象

- 执行安装命令后长时间无响应。
- `curl` 提示连接失败、解析失败或 TLS 证书错误。
- 脚本下载成功但执行过程中无法继续拉取文件。

## 排查步骤

1. 检查服务器是否能访问 GitHub。
2. 检查 DNS 解析是否正常，必要时切换服务器 DNS。
3. 尝试 RustMinerSystem 文档中的备用安装地址。
4. 如果是证书校验失败，确认服务器系统时间准确，且系统 CA 证书可用。
5. 如果服务器所在网络限制外部访问，可以在本地下载二进制文件后上传到服务器。
6. 查看脚本输出，区分是安装脚本下载失败，还是脚本内部下载发行文件失败。

## 处理建议

- 优先使用官方 GitHub 地址；网络受限时再使用备用地址。
- 生产环境建议保留已验证版本的安装包或二进制备份。
- 手动安装时需要自行处理启动脚本、日志、备份、升级和回滚。
- 安装完成后继续执行首次启动验证，确认后台和测试端口可用。

## 相关页面

- [安装指南](/zh/document/rustminersystem/installation#linux-一键安装)
- [手动下载 Linux 二进制](/zh/document/rustminersystem/installation#手动下载-linux-二进制)
