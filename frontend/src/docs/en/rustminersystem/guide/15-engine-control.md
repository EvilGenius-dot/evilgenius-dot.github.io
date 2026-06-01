---
id: engineControl
slug: engine-control
title: RustMinerSystem Algorithm Engine
navTitle: Algorithm Engine
description: View supported algorithms and coins in RustMinerSystem and trigger algorithm-engine hot updates.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 15
---

# Algorithm Engine

![RustMinerSystem algorithm engine dialog](/image/docs/rustminersystem/features/en/engine-control.png)

*Algorithm Engine: review supported algorithms, coins, and versions, then trigger a quick update when needed.*

The `Algorithm Engine` dialog shows algorithms and coins supported by the current software version and can trigger an engine hot update when supported.

## What It Shows

- Algorithm count.
- Supported coin count.
- Current algorithm filter.
- Coins under each algorithm.
- Engine version per coin.

Use the algorithm selector to filter one algorithm or view all algorithms.

## Refresh and Quick Update

`Refresh` reloads coin and algorithm data. Use it after upgrades or when the port form does not show an expected coin.

`Quick Update` triggers algorithm-engine hot update, then reloads the coin list. Afterward, the new or updated coins should appear in the proxy port form if the current version supports them.

## Troubleshooting

- No data: click refresh and check running/error logs.
- Coin icon missing: usually cosmetic and does not block proxy operation.
- Update failed: check network, backend logs, and version support.
- New coin does not mine correctly: test with a few miners and confirm upstream protocol and wallet format.
