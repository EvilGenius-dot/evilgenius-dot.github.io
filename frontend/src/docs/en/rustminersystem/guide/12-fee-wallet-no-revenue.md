---
id: fee-wallet-no-revenue
slug: fee-wallet-no-revenue
title: Fee Wallet Has No Revenue
navTitle: Fee wallet no revenue
description: Check default fee ratio, independent fee overrides, wallet format, fee pool protocol, and upstream worker visibility when the fee wallet earns nothing.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 7
---

# Fee Wallet Has No Revenue

When the fee wallet earns nothing, check the default fee ratio, independent overrides, fee pool address, wallet format, and whether the fee worker appears on the upstream pool.

## Symptoms

- Main miners earn revenue, but the fee wallet does not.
- The fee worker is not visible on the upstream pool.
- Revenue ratio differs from the expected configuration.

## Checks

1. Confirm that the port default fee ratio is not `0`.
2. Check the fee wallet address, worker name, pool address, and protocol.
3. Confirm that the upstream pool supports the wallet or subaccount format.
4. Check whether wallet-specific or miner-specific ratios override the port default.
5. Check whether multiple fee wallets have the expected total ratio.
6. Test with a small number of miners and confirm that the upstream pool sees the fee worker.
7. Allow time for upstream pool statistics to refresh.

## Recovery

- Start with one fee wallet and a small ratio to validate the path.
- Record the change time when adjusting independent ratios.
- PoolNode node fees are settlement-layer behavior; see the [PoolNode documentation](/document/poolnode).

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [PoolNode](/document/poolnode)
