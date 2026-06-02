---
id: migration
slug: migration
title: RustMinerSystem 如何迁移
navTitle: 如何迁移
description: 了解迁移 RustMinerSystem 时需要复制的文件范围，以及为什么要排除 0 开头的运行期文件。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 6
---

# 如何迁移

迁移 RustMinerSystem 时，可以直接迁移程序目录中的绝大部分文件。这样可以把本地配置、端口配置、证书、安全访问配置和其他本地运行参数一起带到新环境。

Linux 默认程序目录为：

```bash
/root/rustminersystem
```

## 迁移原则

复制整个 `/root/rustminersystem` 目录时，需要忽略程序目录中名称以 `0` 开头的文件，例如：

- `0.d1`
- `0.d1-shm`
- `0.d1-wal`
- `0.d2`

这些 `0` 开头的文件不要迁移到新的目的地。除这些文件外，其余文件和目录全部迁移过去即可，本地配置会随目录一起迁移到新的环境。

## 推荐流程

1. 在旧服务器上停止 RustMinerSystem，避免迁移过程中配置或运行数据继续变化。
2. 复制 `/root/rustminersystem` 目录，但排除目录根部名称以 `0` 开头的文件。
3. 在新服务器确认 `/root/rustminersystem` 目录已完整写入。
4. 检查新服务器的防火墙、安全组、后台端口和代理端口是否已经放行。
5. 启动 RustMinerSystem，并登录后台确认端口、钱包、证书和安全配置是否正常。

## rsync 示例

如果新服务器可以通过 SSH 访问，可以在旧服务器上执行：

```bash
rsync -a --exclude='/0*' /root/rustminersystem/ root@NEW_SERVER_IP:/root/rustminersystem/
```

将 `NEW_SERVER_IP` 替换为新服务器 IP。这里的 `--exclude='/0*'` 表示排除迁移源目录根部以 `0` 开头的文件，例如 `0.d1`、`0.d1-shm`、`0.d1-wal` 和 `0.d2`。

## 打包迁移示例

也可以先在旧服务器打包，再把压缩包上传到新服务器：

```bash
cd /root
tar --exclude='rustminersystem/0*' -czf rustminersystem-migrate.tar.gz rustminersystem
```

上传到新服务器后解压：

```bash
cd /root
tar -xzf rustminersystem-migrate.tar.gz
```

## 迁移后检查

- 后台能否正常打开并登录。
- 代理端口是否仍然存在，监听端口是否正常。
- 矿池地址、钱包地址、费率配置和独立比例是否符合预期。
- HTTPS 证书、安全访问地址、二步验证和黑白名单配置是否正常。
- 矿机切换到新服务器后，后台和上游矿池是否都能看到连接与算力。

如果迁移后新服务器无法访问后台，请先检查服务器防火墙、安全组和后台端口；如果矿机无法连接代理端口，请检查代理端口监听状态、新服务器公网 IP、端口放行和矿机侧配置。
