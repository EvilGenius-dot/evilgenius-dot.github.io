---
id: connected-no-valid-hashrate
slug: connected-no-valid-hashrate
title: Connected but No Valid Hashrate
navTitle: No valid hashrate
description: Troubleshoot coin algorithm, upstream pool protocol, wallet format, transparent forwarding, compatibility mode, and advanced replacement settings.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 6
---

# Connected but No Valid Hashrate

If the port has connections, the miner-to-RustMinerSystem path is basically reachable. No valid hashrate usually points to algorithm, upstream pool, wallet, or advanced replacement settings.

## Symptoms

- RustMinerSystem shows connections, but realtime or 24h hashrate stays at `0`.
- The upstream pool does not show the worker.
- Logs show rejected shares, authentication errors, or protocol errors.

## Checks

1. Confirm that the selected coin and algorithm match the miners.
2. Check the upstream pool address, port, and protocol.
3. Confirm that the wallet address or subaccount format is accepted by the upstream pool.
4. Review worker error logs and port connection logs.
5. For TP transparent forwarding ports, remember that full coin parsing and statistics may not be available.
6. If compatibility mode or replacement settings are enabled, restore defaults and test again.
7. Test a small number of miners directly against the upstream pool.

## Recovery

- Start with a standard pool address and standard worker name.
- Enable advanced replacement settings one at a time.
- After hashrate recovers, observe at least one pool statistics refresh window.

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [Operations](/document/rustminersystem/operations)
