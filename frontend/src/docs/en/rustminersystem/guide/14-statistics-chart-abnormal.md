---
id: statistics-chart-abnormal
slug: statistics-chart-abnormal
title: Statistics Chart Anomaly
navTitle: Chart anomaly
description: Understand why RustMinerSystem statistics charts can briefly drop to zero because of cloud-side aggregation while the upstream pool remains unaffected.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 9
---

# Statistics Chart Anomaly

If a statistics chart suddenly drops to zero and then returns to normal, it is usually only a display issue. When the upstream pool still shows normal workers, hashrate, and revenue, the actual mining path is not affected.

## Symptoms

- A RustMinerSystem statistics chart shows `0` for a short time window.
- The chart later returns to its normal curve.
- The upstream pool dashboard shows normal connections, hashrate, revenue, and worker status.

## Cause

To reduce load on user servers, RustMiner aggregates chart statistics in the cloud. When the cloud statistics service is under heavy pressure or a processing task fails, one time window may not be aggregated correctly, so the local dashboard chart can briefly show zero or a gap.

This only affects the statistics chart display. It does not affect miner connections, share submission, upstream pool settlement, or revenue. The only practical impact is that the chart looks less continuous.

## Recovery

1. Check the upstream pool dashboard first and confirm miners, hashrate, and revenue are normal.
2. If the pool side is normal, keep observing and wait for cloud statistics to recover.
3. Do not restart RustMinerSystem or change port, wallet, or fee settings for this symptom alone.
4. If the upstream pool also shows hashrate drops or offline workers, continue with miner connection and valid-hashrate troubleshooting.

## Related Pages

- [Connected but no valid hashrate](/document/rustminersystem/connected-no-valid-hashrate)
- [Operations](/document/rustminersystem/operations)
