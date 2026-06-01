---
id: overview
slug: ""
title: RMS documentation overview
navTitle: Overview
description: Learn RMS local client setup, RMS2/RMS3/RMS3(Zstd) pairing, port mapping, connection compression, monitoring, and rollback planning.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---

# RMS Documentation

RMS is the optional secure local client in the RustMinerSystem ecosystem. It is usually deployed inside the mining-site LAN. Miners connect to local RMS first, and RMS connects to RustMinerSystem server ports through RMS2, RMS3, or RMS3(Zstd), reducing public connection count, compressing traffic, and keeping miner traffic on a controlled path.

For RustMinerSystem server installation, backend security, and regular proxy-port configuration, read the [RustMinerSystem documentation](/document/rustminersystem). This collection focuses on the RMS local client and RMS protocol-port boundaries.

## When To Use RMS

- Many miners share one site and you want fewer public outbound connections.
- Public bandwidth is expensive and traffic compression matters.
- Miners should connect only to local LAN addresses.
- You want to use RMS3 or RMS3(Zstd) high-compression paths.
- You need local visibility into inbound connections, outbound connections, disconnect logs, and resource usage.

If the site has only a few miners, stable network, and enough bandwidth, miners can also connect directly to RustMinerSystem proxy ports without RMS.

## Access Topology

```text
Miner -> Local RMS -> RMS2/RMS3/RMS3(Zstd) encrypted compression link -> RustMinerSystem proxy port -> Upstream pool
```

RMS does not replace the RustMinerSystem server. The server still owns proxy ports, target pools, fee wallets, statistics, security, and operations. RMS owns local miner access and compressed transmission to the server.

## Feature Chapters

| Chapter | Use it for |
| --- | --- |
| [Installation](/document/rms/installation) | Install RMS3 on Linux and Windows, choose architecture, and understand default access after installation. |
| [Setup and pairing](/document/rms/setup) | First launch, push URL, skip mode, server prerequisites, and pairing workflow. |
| [Port mapping](/document/rms/port-mapping) | Create local listening ports, bind remote RMS addresses, configure coin, protocol, password, and load balancing. |
| [Compression settings](/document/rms/compression) | Choose RMS2/RMS3/RMS3(Zstd), set super compression, compression level, and connection-compression count. |
| [Monitoring and operations](/document/rms/monitoring) | Read CPU, memory, network, connection charts, port status, filters, and security settings. |
| [Troubleshooting](/document/rms/troubleshooting) | Diagnose miner access, server pairing, high rejects, port conflicts, safe-route mistakes, and rollback. |

## Protocol Choices

| Protocol | Description |
| --- | --- |
| RMS2 | RMS compression TLS protocol. It reduces public connection count and compresses part of the data volume. |
| RMS3 | Group compression protocol with higher compression ratio and higher CPU pressure. |
| RMS3(Zstd) | RMS3 variant based on Zstd. It usually has lower CPU pressure than RMS3 with similar connection behavior. |

When using RMS3 or RMS3(Zstd), the server port, local RMS port, coin, password, super compression, and compression level must match. Mismatched settings can prevent miners from connecting, increase rejects, or break statistics.

## Rollout Outline

1. Create a test RMS protocol port on the RustMinerSystem server.
2. Add a matching local RMS port.
3. Connect 1 to 5 test miners.
4. Watch RMS inbound/outbound connections, server port status, upstream workers, and reject rate.
5. Adjust compression level, super compression, and connection-compression count.
6. Increase miner count gradually.
7. Back up RMS client configuration and RustMinerSystem port configuration after the target scale is stable.

RMS3 is sensitive to CPU. If small coins or special miners behave abnormally, first lower compression level or disable super compression for testing.
