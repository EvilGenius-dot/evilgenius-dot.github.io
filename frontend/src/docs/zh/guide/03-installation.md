---
id: installation
slug: installation
title: RustMinerSystem 安装指南
navTitle: 安装
description: 下载、启动并验证 RustMinerSystem 服务端安装包。
order: 3
---

# 安装

## 下载

请从发布中心下载与你的系统架构匹配的安装包。

```bash
# Linux 示例：替换为真实下载地址
wget https://example.com/rustminersystem-linux.tar.gz
tar -xzf rustminersystem-linux.tar.gz
cd rustminersystem
```

## 启动

```bash
# 示例命令，按实际发布包调整
./rustminersystem --config ./config.toml
```

## 验证

启动后建议检查以下内容：

- 服务进程是否正常运行。
- 日志中是否有配置错误或连接失败。
- 矿池连接是否成功。
- 测试矿机是否能够提交有效数据。
