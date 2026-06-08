---
id: ltc-coin-issues
slug: ltc-coin-issues
title: LTC Coin Issues
navTitle: LTC coin issues
description: For LTC mining, avoid sending fee-skimming hashrate to F2Pool because fee hashrate may be insufficient; ViaBTC is recommended instead.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 13
---

# LTC Coin Issues

When skimming fees for LTC mining, do not set the fee target to F2Pool. In current practice, this path can result in insufficient fee hashrate, where the actual fee hashrate is lower than the configured ratio or pool-side fee statistics are unstable.

## Symptoms

- Main LTC miner hashrate is normal, but the fee wallet has insufficient hashrate.
- The fee ratio is configured correctly, but F2Pool shows lower fee hashrate than expected.
- The fee worker statistics on F2Pool are unstable, and revenue does not match the configured ratio.

## Recommendations

- Do not skim LTC fees to F2Pool.
- Set the LTC fee target to ViaBTC instead.
- After switching the fee pool, observe at least one full pool statistics window before judging whether the actual fee ratio is stable.

## Related Pages

- [Fee wallet has no revenue](/document/rustminersystem/fee-wallet-no-revenue)
- [Hashrate loss](/document/rustminersystem/hashrate-loss)
