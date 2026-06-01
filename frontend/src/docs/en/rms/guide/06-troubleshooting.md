---
id: rmsTroubleshooting
slug: troubleshooting
title: RMS troubleshooting
navTitle: Troubleshooting
description: Diagnose RMS miner access, server pairing, reject-rate spikes, port conflicts, safe-route mistakes, and rollback paths.
category: operations
categoryTitle: Operations
categoryOrder: 3
order: 7
---

# RMS Troubleshooting

Most RMS issues come from mismatched server/client settings, local port reachability, aggressive compression, or route/security changes.

## Miners Cannot Connect To RMS

Check:

- Miners are using the RMS local address, not the remote server port.
- The local listening port is created and running.
- LAN firewall allows miner access to the RMS host and port.
- The port is not occupied by another process.
- The miner URL uses the copied `stratum+tcp://LOCAL_RMS_IP:PORT` format when appropriate.

## RMS Cannot Connect To Server

Check:

- Remote address uses `address:port` format.
- The RustMinerSystem server RMS protocol port is running.
- Local remote protocol matches the server listening protocol.
- Coin is the same on both sides.
- Password is identical on both sides, or empty on both sides.
- Security group, firewall, or upstream network does not block the server port.

## Reject Rate Increases

Use a conservative rollback path:

1. Lower RMS3 compression level.
2. Disable super compression on both server and local RMS client.
3. Increase connection compression count.
4. Reduce miner count per RMS client.
5. Check upstream pool latency and server CPU.

Small coins or uncommon miner firmware may be more sensitive to aggressive RMS3 settings.

## Outbound Connection Count Is Unexpected

Check:

- Connection compression count.
- Different coins and different local ports form separate outbound groups.
- Multiple remote peers can create more outbound paths.
- Auto-fetched and manual ports may both be running.

## Backend Route Or Password Problem

If the safe access route was configured incorrectly:

- Remember that the route must not start or end with `/` during input.
- When visiting it, the final URL should end with `/`.
- If the program restarted and the route is lost, use the saved preview URL or local service access method from your deployment notes.

If the backend password was changed and lost, follow your deployment’s reset procedure or restore from a known configuration backup.

## Rollback Plan

Before production rollout, keep:

- A direct RustMinerSystem proxy address for miners.
- RMS client version and port configuration backup.
- RustMinerSystem port JSON backup.
- Original compression count, compression level, and super-compression state.

During a major incident, first return to low compression or disable super compression. If the site is still unstable, point miners back to the direct RustMinerSystem proxy address while RMS is repaired.
