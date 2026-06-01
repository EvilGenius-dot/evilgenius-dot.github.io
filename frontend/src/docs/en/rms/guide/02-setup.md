---
id: rmsSetup
slug: setup
title: Setup and pairing
navTitle: Setup
description: Configure the RMS local client on first launch, choose push URL or manual mode, and pair it with RustMinerSystem server ports.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 3
---

# Setup And Pairing

RMS sits between local miners and the RustMinerSystem server. The first setup decision is whether to pull configuration from a push URL or skip that flow and add remote addresses manually.

## Function Purpose

Use setup and pairing to make RMS know where the RustMinerSystem server is, which remote RMS protocol ports it should connect to, and what local addresses miners should use.

## Server Prerequisites

Before configuring the local client, prepare the server side:

1. Open RustMinerSystem server backend.
2. Create a proxy port whose listening protocol is RMS2, RMS3, or RMS3(Zstd).
3. Choose the correct coin and upstream pool.
4. If a password is configured on the server port, record it for the local RMS client.
5. If RMS3 settings are used, record super compression and compression level.
6. Confirm the server port is running and reachable from the mining-site network.

The local RMS protocol must match the server listening protocol. RMS3 local ports cannot connect to RMS1 or incompatible server ports.

## First Launch With Push URL

On first launch, RMS displays a push-address input. Use this when your deployment provides a central configuration URL.

1. Enter the push URL.
2. Submit and wait for RMS to fetch configuration.
3. After success, RMS enters the home dashboard.
4. Verify local ports and remote addresses before pointing miners to RMS.

If fetching fails, check whether the URL has expired, whether the current network can reach the server, and whether the server-side configuration is available.

## Skip And Configure Manually

If you do not use a push URL and already know the server IP/domain and RMS protocol port, click `Skip`. RMS stores the skip state locally and opens the dashboard. You can then use `Manual Add` to create local mappings.

Manual mode is useful for small deployments, testing, or private networks where configuration distribution is handled outside the RMS push system.

## Miner Address

After a local RMS port is created, the port table shows a mining address in this form:

```text
stratum+tcp://LOCAL_RMS_IP:LOCAL_PORT
```

Copy that address and configure miners to connect to it. Miners should not connect directly to the remote RMS server port unless you are intentionally bypassing RMS.

## Reset Push Address

The program settings menu includes `Reset Push Address`. Use it when the old push URL is no longer valid or when you want to return to the first-launch pairing flow. Resetting invalidates the current pushed configuration and returns RMS to the setup page.
