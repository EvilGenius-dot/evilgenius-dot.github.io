---
id: poolnodeActivation
slug: activation
title: Node activation and identity
navTitle: Activation
description: Apply for a PoolNode identity, activate a node with CODE and TOKEN, and understand how same-group servers share data.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 2
---

# Node Activation And Identity

PoolNode activation binds the current RustMinerSystem backend to a PoolNode node group. The node group is identified by `CODE` and `TOKEN`; every server that uses the same pair joins the same group.

## Function Purpose

Use activation when you want this server to participate in PoolNode website, mining-port, user-query, and revenue workflows. Without activation, the PoolNode dashboard shows the activation page instead of the operations console.

## Apply For A New Node

1. Open `Pool Node` in the backend.
2. Choose the `Apply Node` tab.
3. Enter a node name. Chinese names are supported.
4. Complete the captcha verification.
5. After success, download and store the `code-token.txt` backup file.

The generated `CODE` and `TOKEN` are the identity of the node group. Keep them offline or in a password manager. Anyone with both values can activate another server into the same node group.

## Activate An Existing Node

1. Open `Pool Node`.
2. Choose the `Activate Node` tab.
3. Enter the existing `CODE` and `TOKEN`.
4. Complete captcha verification.
5. Wait for the dashboard to load the node configuration, ports, templates, revenue settings, and statistics.

After activation, the dashboard shows the coin tabs, configuration center, revenue shortcuts, node metrics, and mining-port workbench.

## Same-Group Behavior

Servers activated with the same `CODE` and `TOKEN` share the node group. Typical shared data includes user records, query data, node fee configuration, and synchronized mining-port definitions. Current-server display options, website route, and certificate state may still be local to the server.

Before adding a synchronized port, confirm the same port is not already occupied on every server in the group. A conflict on one server can make the group look partly synchronized but fail on that host.

## Exit The Current Node

The configuration center includes `Node Login State` and `Exit Current Node`. This only removes the current backend login relationship with the node. It does not delete the node identity. You can activate again later with the same `CODE` and `TOKEN`.

## Quick Checks

- `CODE` and `TOKEN` are backed up.
- Every server that should be in the group uses the same pair.
- Servers that should be isolated use different pairs.
- After activation, refresh the PoolNode dashboard and confirm the current node name is correct.
