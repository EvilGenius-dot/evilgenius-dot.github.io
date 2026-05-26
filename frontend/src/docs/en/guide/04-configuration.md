---
id: configuration
slug: configuration
title: RustMinerSystem configuration reference
navTitle: Configuration
description: Configure RustMinerSystem listen addresses, pool endpoints, worker credentials, and logging.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 4
---

# Configuration

## Basic Configuration

```toml
# config.toml example
[server]
listen = "0.0.0.0:3333"

[pool]
endpoint = "pool.example.com:443"
worker = "your_worker_name"
password = "your_password"

[log]
level = "info"
```

## Configuration Reference

| Field | Description |
| --- | --- |
| `server.listen` | Local listen address for RustMinerSystem |
| `pool.endpoint` | Upstream pool or self-hosted node address |
| `pool.worker` | Worker name or account identifier |
| `pool.password` | Pool connection password |
| `log.level` | Log level |
