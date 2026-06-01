---
id: portList
slug: port-list
title: RustMinerSystem Port List and Batch Operations
navTitle: Port List
description: Use the RustMinerSystem port list to sort, refresh, inspect, start, stop, clone, delete, and batch-manage proxy ports.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 8
---

# Port List and Batch Operations

![RustMinerSystem port list action menu](/image/docs/rustminersystem/features/en/port-list.png)

*Port list: review protocol, port, online devices, hashrate, latency, status, and the action menu in one monitoring row.*

The port list manages proxy ports for the currently selected coin. From the row menu you can inspect, edit, hot-update, clone, start, stop, or delete a port.

## Row Actions

| Action | Description |
| --- | --- |
| View workers | Open the port detail page. |
| Edit port | Change full configuration; running ports restart after saving. |
| Hot update fee config | Change fee wallets without disconnecting miners. |
| Clone port | Create a new port from this configuration. |
| Start / Stop port | Toggle the listening service. |
| Delete port | Remove the port and related wallet configuration. |

Export a backup before deleting production ports.

## Batch Operations

1. Select a coin.
2. Click the batch operation icon in the port list header.
3. Search by port, remark, or status.
4. Select ports or choose `Select current filter`.
5. Run `Start selected`, `Stop selected`, or `Delete selected`.
6. Review the success and failure result.

Batch operations only affect ports under the current coin. Delete operations require confirmation.

## Recommended Workflow

- Start stopped ports in smaller batches and watch status move to `Running`.
- Stop unused ports before deleting them.
- Export configuration before large changes.
- If failures mention conflicts, permissions, or invalid parameters, inspect that port individually.
