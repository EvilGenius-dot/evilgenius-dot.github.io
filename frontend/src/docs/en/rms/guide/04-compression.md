---
id: rmsCompression
slug: compression
title: Compression settings
navTitle: Compression
description: Configure RMS2, RMS3, RMS3(Zstd), super compression, compression level, and connection-compression count.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 5
---

# Compression Settings

RMS compression has two layers: protocol-level data compression on each port, and connection-count compression for outbound connections.

## Function Purpose

Use compression settings to reduce public bandwidth and outbound connection count while keeping reject rate, CPU load, and latency within acceptable limits.

## Protocol-Level Compression

When adding or editing a local port, choose the remote protocol:

| Protocol | Use case |
| --- | --- |
| RMS2 | Conservative compression and compatibility with RMS2 server ports. |
| RMS3 | Higher compression ratio, higher CPU usage. |
| RMS3(Zstd) | RMS3-style connection behavior with Zstd compression, usually more CPU-friendly. |

The local protocol must match the server listening protocol.

## Super Compression

RMS3 includes `Super Compression`. It can greatly reduce traffic volume, especially for BTC and LTC. For smaller or special coins, start with it disabled if abnormal rejects or connectivity issues appear.

If super compression is changed, keep the server-side port and local RMS client consistent.

## Compression Level

RMS exposes low, medium, and high compression levels. Higher levels usually compress more data but increase CPU pressure. Use gradual testing:

1. Start with low or medium.
2. Watch CPU, memory, reject rate, and latency.
3. Increase only after the test miners remain stable.
4. Roll back if rejects increase or RMS CPU stays high.

## Connection Compression Count

The `Connection Compression` card opens the connection-mode dialog. RMS3 forces compressed mode and lets you set how many outbound connections a port should compress to.

The lower the value, the fewer outbound public connections and usually the higher the compression effect. The tradeoff is CPU pressure, latency, and possible reject-rate sensitivity.

Recommended starting points:

- Fewer than 1000 miners: test `1` to `2`.
- Most deployments: test `1` to `6`.
- Observe each coin and port separately.

Example: if the compression count is `1`, and RMS receives 1000 BTC miners plus 1000 LTC miners, outbound connections are grouped by port, so BTC and LTC typically form separate outbound connections.

## Tuning Order

Tune in this order:

1. Confirm the basic connection works with a small miner group.
2. Confirm protocol, coin, and password match.
3. Set connection compression count.
4. Choose compression level.
5. Enable or disable super compression.
6. Expand miner count gradually.
