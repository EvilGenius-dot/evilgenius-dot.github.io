---
id: miner-cannot-connect-proxy
slug: miner-cannot-connect-proxy
title: Miner Cannot Connect to Proxy Port
navTitle: Proxy connection fails
description: Troubleshoot production proxy-port connection failures involving miner settings, network policy, TLS certificates, KENC keys, and RMS parameters.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 5
---

# Miner Cannot Connect to Proxy Port

Production proxy connection failures may involve miner configuration, network policy, listener protocol, certificates, KENC keys, or RMS client settings.

## Symptoms

- Online miner count drops suddenly.
- One proxy port fails while other ports remain healthy.
- RMS starts locally, but miners cannot enter RustMinerSystem through RMS.

## Checks

1. Confirm that miners point to the mining port, not the admin port.
2. Check cloud security groups, host firewall, datacenter ACLs, and internal routes.
3. Confirm that the listener protocol matches the miner or RMS client protocol.
4. For TLS/SSL ports, check certificate expiry, chain completeness, and domain matching.
5. For KENC ports, check that client and server keys match.
6. For RMS3 or RMS3(Zstd), check protocol, coin, password, connection compression count, and super-compression settings.
7. Review connection logs to distinguish unreachable traffic, authentication failure, protocol mismatch, and upstream pool failure.

## Recovery

- Test new protocols on a separate port before changing production ports.
- For RMS client issues, follow the [RMS documentation](/document/rms).
- If many miners go offline, roll back to the last stable port protocol and client version.

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [RMS](/document/rms)
