---
id: rmsPortMapping
slug: port-mapping
title: Port mapping
navTitle: Port Mapping
description: Add and manage RMS local listening ports, remote server addresses, protocols, passwords, and load-balanced upstream peers.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 4
---

# Port Mapping

RMS port mapping creates a local listening port for miners and connects that port to one or more RustMinerSystem server RMS protocol ports.

## Function Purpose

Use port mapping to let miners keep using a local LAN address while RMS handles encrypted compressed communication to the server.

## Add A Manual Port

1. Open the RMS dashboard.
2. Click `Manual Add`.
3. Set `Local Listening Port`.
4. Choose the coin.
5. Choose RMS3, RMS3(Zstd), or RMS2 as the remote protocol.
6. Enter remote address in `address:port` format.
7. Enter the password if the server port requires one.
8. Configure super compression and compression level when using RMS3-family protocols.
9. Add more remote addresses if load balancing is required.
10. Save and verify the port is running.

The coin, remote protocol, password, and compression settings must match the server-side RMS protocol port.

## Remote Address List

Each local port can have multiple upstream peers. RMS distributes incoming connections across available remote addresses. This is the RMS local-client side of load balancing.

Use multiple peers when you have several RustMinerSystem server ports or several server hosts prepared for the same coin and protocol. Keep every peer compatible with the selected coin and protocol.

## Port Table

The RMS port table shows:

| Field | Meaning |
| --- | --- |
| Status | Running, preparing, waiting, or error. |
| Coin | The coin for this local mapping. |
| Remark | Operator note, often using a `category-title` pattern. |
| Miner connection address | The local address miners should use; click to copy. |
| Load balancing | Remote peer details and peer count. |
| Inbound connections | Connections entering this local port. |
| Outbound connections | Connections from RMS to remote peers. |
| Type | Auto fetched from push configuration or manually added. |

Manual ports can be stopped, started, edited, and deleted. Auto-fetched ports can be stopped and started, but synchronized fields are controlled by the push configuration.

## Remarks And Filters

The table supports filtering by:

- Remark category.
- Port type: all, auto fetched, or manual.
- Coin.

If you use remarks such as `farm-a-btc` or `building1-ltc`, the prefix before `-` can be used as a category filter.

## Safe Editing Rules

- Do not change a working port during peak mining time without a rollback address.
- Verify `address:port` format before saving.
- If a server-side password is set, the local password must be identical.
- When the selected coin is not BTC or LTC, start with conservative compression settings.
