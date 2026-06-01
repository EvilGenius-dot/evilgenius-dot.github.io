---
id: hashrate-loss
slug: hashrate-loss
title: Hashrate Loss
navTitle: Hashrate loss
description: Troubleshoot lower-than-expected customer pool hashrate by checking network quality, reject rate, fee wallet count, fee ratio, and cross-pool fee settings.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 11
---

# Hashrate Loss

When the final hashrate shown in the customer's pool is lower than expected, or does not match RustMinerSystem statistics, first separate normal pool statistics-window differences from real loss caused by network quality, rejects, or fee configuration.

## Symptoms

- The customer pool shows lower effective hashrate than expected.
- RustMinerSystem hashrate, customer-pool hashrate, and fee-pool hashrate do not match for a long time.
- The customer pool reject rate increases, or worker curves are unstable.

## Checks

1. Check the network path first. Review the reject rate in the customer pool and confirm whether the path from RustMinerSystem to the customer pool has high latency, packet loss, route detours, or unstable connections. Poor network quality can reduce customer hashrate or increase rejects, and most hashrate loss cases come from network-path issues.
2. Check fee wallet count and fee ratio. Too many fee wallets or too high a fee ratio can increase switching and statistics complexity, and may amplify loss. If multiple recipients need revenue sharing, prefer configuring one fee wallet in RustMinerSystem and handling the split inside the pool.
3. Check whether the fee pool uses the same pool and address as the customer pool. The fee pool should preferably use the same pool address as the customer pool. If the pool or link has a problem, the whole path will show the issue together, which makes troubleshooting easier. Cross-pool fees introduce different network quality, statistics windows, and connection stability, which can affect customer hashrate or make the loss source harder to isolate.

## Recovery

- Test with a small miner set against the same customer pool address, then observe reject rate, latency, and effective hashrate.
- If rejects are abnormal, switch to a closer pool region, optimize server routing, or use a node with better network quality.
- Reduce fee wallet count and lower excessive ratios, then restore configuration gradually after the base path is stable.
- Prefer using the same pool and address for both customer hashrate and fee hashrate to reduce cross-pool variables.
- Observe at least one full pool statistics window after changes instead of judging final loss from a few minutes of charts.

## Related Pages

- [Connected but no valid hashrate](/document/rustminersystem/connected-no-valid-hashrate)
- [Create Proxy Port](/document/rustminersystem/proxy-port)
- [Fee Hot Update](/document/rustminersystem/hot-wallet)
