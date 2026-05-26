---
id: overview
slug: ""
title: RustMinerSystem documentation overview
navTitle: Overview
description: Learn RustMinerSystem third-party pool proxying, PoolNode real-pool mode, optional RMS local compression, and documentation structure.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---

# RustMinerSystem Documentation

> This document records the installation, configuration, runtime, and operations workflow for RustMinerSystem. Replace all placeholders with your real deployment values.

## Overview

RustMinerSystem can work as a proxy for third-party mining pools, allocating any configured share of connected miner hashrate to specified third-party pool wallets or worker names. It can also use PoolNode to build a real self-owned mining pool, where configured fees are distributed directly at the coin settlement layer. RMS is an optional companion tool for sites that need lower bandwidth usage or fewer public connections: miners can connect to local RMS first, then reach RustMiner through an encrypted compressed link. Without RMS, miners can still connect to RustMiner directly.

### Use Cases

- Mining sites need a unified miner access path and controlled hashrate allocation to specified third-party pool wallets.
- Operators need to build a real pool with PoolNode and distribute configured fees at the settlement layer.
- Network environments need optional compression for miner data volume and public connection count.
- Teams need repeatable installation, configuration, and upgrade procedures.

## Operating Modes

### Third-Party Pool Proxy

Use this mode when connecting miners to third-party pools. RustMiner sits between miners and third-party pools, allocating any configured hashrate share to specified pool addresses, wallets, or worker names. Validate connection stability and allocation targets with test miners before scaling up.

### PoolNode Real Pool

Use this mode when operators need to build a real self-owned mining pool. PoolNode provides the pool-node capability, and configured fees are distributed directly at the coin settlement layer. Before deployment, confirm node sync status, network connectivity, settlement configuration, and recovery procedures.

### Optional RMS Local Compression Tool

RMS is not required. It runs locally at the mining site and lets miner traffic reach RustMiner through an encrypted compressed link, reducing transmitted data volume and public connection count. Third-party pool proxy mode and PoolNode real-pool mode can both use RMS, but miners can also connect directly to RustMiner without it. Before enabling it, confirm server and client version compatibility and document the rollback plan.
