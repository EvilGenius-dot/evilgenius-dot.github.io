---
id: miner-cannot-connect-port
slug: miner-cannot-connect-port
title: Miner Cannot Connect to Port
navTitle: Miner cannot connect
description: Check basic network reachability, listener status, firewall rules, and miner pool configuration when miners cannot connect after installation.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 4
---

# Miner Cannot Connect to Port

This is the first checklist for installation and initial testing. Confirm that miners point to a mining port, not the admin web port.

## Symptoms

- Miner firmware shows connection failures or repeated reconnects.
- RustMinerSystem does not show the test miner.
- The upstream pool does not show the worker.

## Checks

1. Confirm that the RustMinerSystem listener port exists and is running.
2. Confirm that the miner uses the RustMinerSystem server IP and mining port.
3. Check host firewall, cloud security group, and datacenter network rules.
4. Confirm that the miner network can reach the RustMinerSystem server address.
5. If the listener uses TLS/SSL, RMS2, RMS3, RMS3(Zstd), or KENC, confirm that the client-side protocol matches the server port.
6. Create a plain Stratum TCP test port to validate the basic network path.

## Recovery

- Validate plain TCP first, then enable TLS, KENC, or RMS protocols.
- If only some miners fail, compare their pool URL, port, username, and password with a working miner.
- After the connection is restored, check whether the upstream pool receives valid worker data.

## Related Pages

- [Installation](/document/rustminersystem/installation)
- [Configuration](/document/rustminersystem/configuration)
