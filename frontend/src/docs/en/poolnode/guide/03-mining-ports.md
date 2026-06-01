---
id: poolnodeMiningPorts
slug: mining-ports
title: Mining ports
navTitle: Mining Ports
description: Create and manage PoolNode mining ports, protocols, access regions, connectivity tests, local display addresses, and the port workbench.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 3
---


# Mining Ports

PoolNode mining ports are the addresses end-user miners connect to. The port workbench follows the active coin tab and shows status, port, remark, protocol, region, local connection count, latency, and actions.

## What This Page Controls

Use mining ports to publish PoolNode access for a specific coin. Port definitions are synchronized to the same CODE/TOKEN node group, while website display settings can be adjusted per server.

## Create A Port

1. Open `Pool Node`.
2. Choose the target coin in the top coin tabs.
3. Click `Add Port` in the port workbench.
4. Fill synchronized settings: coin, port, remark, protocol, and access region.
5. Run the connectivity test after choosing a region.
6. Fill local display settings: website visibility and custom displayed address.
7. Save the port.

New ports are synchronized to every server in the same node group. Confirm the port is free on all same-group servers before saving.

## Synchronized Settings

| Setting | Description |
| --- | --- |
| Coin | The coin supported by this port. |
| Port | The local listening port for miners. |
| Remark | Operations note for line, region, or purpose. |
| Protocol | TCP, TLS/SSL, TTS, RMS, RMS2, RMS3, RMS3(Zstd), or other supported protocol shown by the backend. |
| Access region | Backend region for the selected coin; test connectivity before publishing. |

If you need to change coin, protocol, port, or access region, delete and recreate the port.

## Local Display Settings

| Setting | Description |
| --- | --- |
| Show mining address on website | Controls whether this port appears in the current server website's mining-address list. |
| Custom displayed mining address | Overrides the default host and port only for website display. |

Use a custom displayed address when the public domain, reverse proxy, or load balancer differs from the backend host.

## Port Workbench Checks

- Status is running or error.
- Port and remark match the plan.
- Protocol matches the public instructions.
- Access region is correct.
- Local connection count matches expected miner scale.
- Latency is stable.
