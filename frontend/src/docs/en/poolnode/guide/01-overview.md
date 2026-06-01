---
id: overview
slug: 
title: PoolNode documentation overview
navTitle: Overview
description: Learn PoolNode node groups, configuration center, operations console, mining ports, pool website, revenue tools, PoolNodeAPP, and Open API.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---


# PoolNode Documentation

PoolNode is the self-hosted pool-node module in the RustMinerSystem family. It is for operators who need a pool website, user registration, worker and earnings queries, and per-coin node-fee configuration. Unlike the regular third-party pool proxy, PoolNode organizes mining ports, the public website, user accounts, revenue settings, payout addresses, PoolNodeAPP, and Open API access around a CODE/TOKEN node group.

For RustMinerSystem server installation, backend security, and regular proxy-port configuration, read the [RustMinerSystem documentation](/document/rustminersystem). This collection focuses on PoolNode workflows.

## When To Use PoolNode

- You need your own pool-node entry instead of only proxying a third-party pool.
- You want a user-facing pool website for registration, workers, hashrate, earnings, and payout logs.
- You need to maintain node fees, revenue mailboxes, payout addresses, and thresholds by coin.
- You run multiple servers as one node group and want shared ports, query data, and part of the operations configuration.
- You plan to connect PoolNodeAPP or build your own user-facing tool.

## Backend Page Structure

| Area | Purpose |
| --- | --- |
| Coin filter | Top horizontal coin menu showing supported coins and fee rates. Changing it refreshes the current coin metrics and ports. |
| Configuration center | Manages website access, operations tools, APP communication, Open API entry, and node login state. |
| Operations console | Shows node guidance, tutorial entry, refresh action, and revenue shortcuts. |
| Port workbench | Shows port status, protocol, region, local connections, latency, and add/edit/delete actions for the active coin. |

## Basic Enablement Flow

1. Open "Pool Node" in the RustMinerSystem backend.
2. Activate with an existing CODE/TOKEN or apply for a new node.
3. Choose the target coin from the top coin tabs.
4. Add PoolNode mining ports, choose protocol and access region, and test connectivity.
5. Configure public website access, route, template, logo, announcement, HTTPS, and certificate.
6. Register a revenue mailbox, then configure node fees, payout addresses, thresholds, subaccount fees, rebates, and small withdrawals.
7. Configure PoolNodeAPP communication and confirm the node invitation code.
8. Open the pool website and verify mining address, registration, login, query, and APP access flows.

Accounts are not shared across different CODE/TOKEN node groups. Users must register under the current node website before mining and querying data in the current node group.

## Feature Chapters

| Chapter | Use it for |
| --- | --- |
| [Node activation and identity](/document/poolnode/activation) | Apply for a node, activate an existing node, understand CODE/TOKEN, and exit the current node login state. |
| [Mining ports](/document/poolnode/mining-ports) | Create PoolNode mining ports, choose protocol and access region, test connectivity, and manage website display addresses. |
| [Pool website](/document/poolnode/website) | Configure public access, website route, template, logo, announcements, HTTPS, and certificates. |
| [Revenue and fees](/document/poolnode/revenue) | Register revenue mailboxes, query earnings and payout logs, set node fees, manage subaccounts, and request small withdrawals. |
| [PoolNodeAPP](/document/poolnode/app-api) | Configure PoolNodeAPP communication, invitation code behavior, and user-side validation. |
| [Open API](/document/poolnode/api-notes) | User-facing PoolNode APIs for custom frontends, mobile apps, and third-party integrations. |
| [Operations](/document/poolnode/operations) | Monitor metrics, node sync logs, multi-server changes, and incident checks. |

## Shared And Local Configuration

Synchronized settings affect the whole CODE/TOKEN node group, including port definitions, node fees, revenue mailboxes, user data, and part of the public website configuration. Local settings affect only the current server, such as whether a port is displayed on the website, a custom displayed mining address, website port, route, and certificate state.
