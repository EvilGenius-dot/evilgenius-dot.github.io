---
id: rmsMonitoring
slug: monitoring
title: Monitoring and operations
navTitle: Monitoring
description: Monitor RMS CPU, memory, network traffic, connection charts, port status, filters, backend password, safe route, and observer access.
category: operations
categoryTitle: Operations
categoryOrder: 3
order: 6
---

# Monitoring And Operations

The RMS dashboard refreshes runtime data periodically and shows resource usage, connection count, traffic, compression mode, and local port status.

## Dashboard Cards

| Card | What to watch |
| --- | --- |
| CPU / Memory | RMS process pressure and system memory usage. |
| Connections | Inbound miner connections and outbound remote connections. |
| Network Traffic | Receive and transmit traffic trends. |
| Connection Compression | Current mode and outbound compression count. |

If CPU stays high after increasing compression, lower compression level, raise connection count, or split miners across multiple RMS clients.

## Port Operations

The port table supports:

- Copying miner connection address.
- Viewing remote-peer details.
- Filtering by remark, type, and coin.
- Starting and stopping ports.
- Editing or deleting manual ports.

After any change, verify inbound count, outbound count, and server-side worker data.

## Program Settings

The settings menu includes:

| Setting | Use |
| --- | --- |
| Reset Push Address | Return to first-launch configuration flow and invalidate the old pushed configuration. |
| Set Backend Password | Protect RMS backend access. |
| Set Safe Access Route | Put the RMS backend under a private route path to reduce scanning exposure. |
| Switch Connection Mode | Open connection compression settings. |
| Exit Application | Available in desktop/Tauri builds. |

Safe access route changes require a restart and the URL must end with `/` when opened, for example `http://host:port/custom/`.

## Observer Page

RMS includes an observer-page implementation in the frontend. If enabled by the build and route settings, it provides a read-only entry under `/observer/`. Treat it as a public surface and expose it only when your deployment needs it.

## Regular Checks

- RMS process is running.
- Local listening ports are reachable from miners.
- Inbound connections match expected miner count.
- Outbound connections match compression settings.
- Server-side port hashrate and reject rate are normal.
- CPU, memory, and traffic trends are stable.
- Backend password and safe access route are documented securely.
