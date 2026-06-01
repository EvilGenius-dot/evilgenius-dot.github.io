---
id: poolnodeOperations
slug: operations
title: PoolNode operations
navTitle: Operations
description: Monitor PoolNode metrics, node synchronization, multi-server changes, website reachability, port incidents, and recovery workflows.
category: operations
categoryTitle: Operations
categoryOrder: 4
order: 42
---


# PoolNode Operations

The PoolNode dashboard is the operations console for the current node group. It combines coin filters, configuration center, revenue shortcuts, node metrics, synchronization status, and the port workbench.

## Daily Checks

- Active coin is correct.
- Device count is close to expected user miners.
- 10-minute hashrate and 24-hour hashrate are reasonable.
- Sync success and failure counts are stable.
- Port status, local connection count, latency, and region are normal.

Click the sync metric to open the node synchronization log. Check last sync time and failures after changing ports or shared settings.

## Multi-Server Changes

1. Check target port availability on every server.
2. Add or delete synchronized ports from one backend.
3. Refresh every server's PoolNode dashboard.
4. Confirm the port row appears and runs on every server.
5. Check local website display addresses.
6. Open the public website and confirm only planned mining addresses are visible.

## Website, Mining, APP, And API Checks

For website incidents, check public access, route, firewall, HTTPS proxy, certificate, and restart state. For mining incidents, check user registration, current CODE/TOKEN group, port status, access-region test, node fee, revenue mailbox, payout address, and threshold. For APP and API, confirm the public APP address, invitation code, API base path, authorization header, and captcha flow.

## Recovery Notes

Back up CODE/TOKEN, website display JSON, custom certificate and key, website route and port, and current fee/payout settings. During recovery, activate the replacement backend with the same CODE/TOKEN and verify ports, website, revenue, APP, and API before publishing the new address.
