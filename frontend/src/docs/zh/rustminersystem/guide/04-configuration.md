---
id: configuration
slug: configuration
title: RustMinerSystem 配置说明
navTitle: 配置
description: 配置 RustMinerSystem 监听地址、矿池端点、矿工凭据和日志参数。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 4
---

# 配置

## 基础配置

```toml
# config.toml 示例
[server]
listen = "0.0.0.0:3333"

[pool]
endpoint = "pool.example.com:443"
worker = "your_worker_name"
password = "your_password"

[log]
level = "info"
```

## 配置说明

| 字段 | 说明 |
| --- | --- |
| `server.listen` | RustMinerSystem 本地监听地址 |
| `pool.endpoint` | 上游矿池或自建节点地址 |
| `pool.worker` | 矿工名称或账户标识 |
| `pool.password` | 矿池连接密码 |
| `log.level` | 日志级别 |
