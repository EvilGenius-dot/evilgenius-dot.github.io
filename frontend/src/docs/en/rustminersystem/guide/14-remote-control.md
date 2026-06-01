---
id: remoteControl
slug: remote-control
title: RustMinerSystem Remote Fleet Control
navTitle: Remote Control
description: Add remote RustMinerSystem clients and monitor multiple instances from one fleet-control page.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 14
---

# Remote Fleet Control

![RustMinerSystem remote fleet workspace](/image/docs/rustminersystem/features/en/remote-control.png)

*Remote Fleet: maintain the local fleet API and monitor remote clients, online devices, and aggregate hashrate.*

`Remote Control` centralizes multiple RustMinerSystem instances on one page. It is useful for operating several proxy servers, mining sites, or customer environments.

## Local Control API

The page shows the current instance's control API. Treat it as a secret. Refreshing the API invalidates the old one and requires updating any manager that uses it.

## Add a Client

1. Open `Mining Proxy` -> `Remote Control`.
2. Click `Add Client`.
3. Enter a remark, access endpoint, and the remote instance's control API.
4. Save.
5. The page synchronizes ports, hashrate, devices, resources, version, and uptime.

## Client Card

Each card shows status, version, runtime, online/offline devices, selected-coin hashrate, CPU/memory, traffic, and compact charts. You can choose separate coins for hashrate and device charts.

## Actions

| Action | Description |
| --- | --- |
| Refresh client | Re-sync data. |
| Quick view | Open the remote backend in an iframe dialog. |
| Remote access | Open the remote backend in a new window. |
| Edit client | Change remark, endpoint, or API. |
| Delete client | Remove it from the fleet page. |

If a client is partial or offline, check endpoint reachability, protocol, firewall, safe route, and whether the manager is allowed by the remote access policy.
