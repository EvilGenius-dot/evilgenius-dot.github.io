---
id: poolnodeAppApi
slug: app-api
title: PoolNodeAPP Usage
navTitle: PoolNodeAPP
description: Configure PoolNodeAPP communication, check node name and invitation code, and validate mobile registration, login, and query flows.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 6
---


# PoolNodeAPP Usage

PoolNodeAPP is the mobile entry for PoolNode end users. It covers mobile registration, login, and account queries. Open API documentation is separated into the [Open API](/document/poolnode/api-notes) category.

## Function Purpose

Use APP communication configuration to bind the mobile app to the current PoolNode website or a dedicated API endpoint for the same node group. If it is not configured, users may not be able to register, log in, or query data from the APP.

## Configure APP Communication

1. Open "Configuration Center".
2. Choose "Docs And API".
3. Open "APP Communication Configuration".
4. Review the current website address, node name, and invitation code.
5. Enter the "APP API Access Address".
6. Save the configuration.
7. Click "Reload" or reopen the dialog to confirm the invitation code and saved URL.

The address must be reachable by end users. If public website access is enabled, the current website address is usually the correct value. If you operate a dedicated APP communication gateway for the same node group, use that public gateway address instead.

## Node Name And Invitation Code

"Node name" is shown in the APP user side. "Invitation code" is the numeric code users enter when registering to the current node, and it is generated after the communication address is saved.

If users are registered into the wrong node group, check whether the APP address and invitation code match the current CODE/TOKEN node group.

## Pre-Release Validation

- A new user can register with the invitation code.
- Login reaches the current node group.
- Worker, hashrate, revenue, and payout queries show expected data.
- The APP address uses a valid HTTPS certificate if served over HTTPS.
- Cross-node data does not appear when using a different CODE/TOKEN group.
