---
id: migration
slug: migration
title: Migrating RustMinerSystem
navTitle: Migration
description: Learn which RustMinerSystem files to copy during migration and which runtime files should be excluded.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 6
---

# Migration

When migrating RustMinerSystem, copy almost the entire program directory. This carries local settings, proxy port configuration, certificates, secure access settings, and other local runtime configuration into the new environment.

On Linux, the default program directory is:

```bash
/root/rustminersystem
```

## Migration Rule

When copying `/root/rustminersystem`, exclude files in the program directory whose names start with `0`, for example:

- `0.d1`
- `0.d1-shm`
- `0.d1-wal`
- `0.d2`

Do not migrate these `0`-prefixed files to the new destination. Copy all other files and directories so the local configuration moves with the installation.

## Recommended Flow

1. Stop RustMinerSystem on the old server so files do not change during migration.
2. Copy `/root/rustminersystem`, excluding root-level files whose names start with `0`.
3. Confirm that `/root/rustminersystem` exists on the new server.
4. Check firewall rules, security groups, admin ports, and proxy ports on the new server.
5. Start RustMinerSystem and confirm that ports, wallets, certificates, and security settings are correct.

## rsync Example

If the new server is reachable over SSH, run this on the old server:

```bash
rsync -a --exclude='/0*' /root/rustminersystem/ root@NEW_SERVER_IP:/root/rustminersystem/
```

Replace `NEW_SERVER_IP` with the new server IP. The `--exclude='/0*'` rule excludes root-level files in the source directory such as `0.d1`, `0.d1-shm`, `0.d1-wal`, and `0.d2`.

## Archive Example

You can also create an archive on the old server and upload it to the new server:

```bash
cd /root
tar --exclude='rustminersystem/0*' -czf rustminersystem-migrate.tar.gz rustminersystem
```

Then extract it on the new server:

```bash
cd /root
tar -xzf rustminersystem-migrate.tar.gz
```

## Post-Migration Checks

- Confirm that the admin console opens and login works.
- Confirm that proxy ports still exist and are listening.
- Check pool addresses, wallet addresses, fee settings, and independent ratios.
- Check HTTPS certificates, secure access paths, two-step verification, and allow/block lists.
- After miners switch to the new server, confirm that both RustMinerSystem and the upstream pool show connections and hashrate.

If the admin console cannot be reached after migration, check the server firewall, security group, and admin port first. If miners cannot connect to proxy ports, check the listening status, new public IP, port allow rules, and miner-side configuration.
