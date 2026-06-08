---
id: prl-coin-issues
slug: prl-coin-issues
title: PRL Coin Issues
navTitle: PRL coin issues
description: Compatibility notes, displayed-hashrate behavior, and recommendations when PRL mining cannot skim fees through pearlhash.xyz, miner software, or the SRB kernel.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 12
---

# PRL Coin Issues

In current PRL mining paths, the `pearlhash.xyz` pool and miner software have fee-skimming compatibility issues and may not complete fee distribution correctly. If you must use `pearlhash.xyz`, use it only as a pure forwarding proxy and do not configure fee skimming on that path.

## Symptoms

- The fee wallet has no revenue, or fee hashrate does not appear consistently when using `pearlhash.xyz`.
- Fee skimming does not take effect as expected when mining PRL with the affected miner software.
- The same no-fee-skimming issue may appear when mining PRL with the SRB kernel.

## Cause

The `pearlhash.xyz` pool and the affected miner software currently do not support the fee-skimming path correctly, so the path should be used as pure forwarding only.

Because SRB only recently added PRL support, current testing has also found SRB-kernel-side issues that prevent fee skimming from working correctly.

## Displayed Hashrate

On PRL paths, the hashrate value calculated and displayed in RustMinerSystem may not be fully accurate, and it can differ from the statistics shown by the upstream pool. The fee ratio relationship is still correct, so this display difference does not affect actual pool-side settlement or final revenue.

## Recommendations

- Do not choose `pearlhash.xyz` as the PRL fee-skimming pool.
- Do not use the SRB kernel for PRL mining when fee skimming is required.
- If you must connect to `pearlhash.xyz`, use pure forwarding proxy mode and leave fee skimming disabled.
- For PRL mining, prefer pools and mining kernels that have been verified to skim fees reliably.

## Related Pages

- [Fee wallet has no revenue](/document/rustminersystem/fee-wallet-no-revenue)
- [Hashrate loss](/document/rustminersystem/hashrate-loss)
