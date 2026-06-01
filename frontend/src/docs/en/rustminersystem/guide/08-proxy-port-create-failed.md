---
id: proxy-port-create-failed
slug: proxy-port-create-failed
title: Proxy Port Creation Fails
navTitle: Port creation fails
description: Troubleshoot invalid port ranges, occupied listener ports, unsupported algorithms, upstream pool settings, and two-factor validation failures.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 3
---

# Proxy Port Creation Fails

Proxy port creation failures usually come from listener conflicts, invalid port values, unsupported algorithms, incomplete upstream settings, or failed security validation.

## Symptoms

- Creating a proxy port fails.
- Editing a port cannot be saved.
- Logs show listener startup errors or validation failures.

## Checks

1. Confirm that the proxy port is between `1` and `65534`.
2. Check whether the listener port is already used by another RustMinerSystem port, system service, or stale process.
3. Confirm that the selected coin algorithm is supported by the current server build.
4. Check the primary and backup pool addresses, ports, and protocols.
5. If two-factor validation is required, confirm that the code and server time are correct.
6. Review logs to identify whether the failure is validation, listener startup, or upstream connectivity.

## Recovery

- Create a test port on an unused number to confirm that the workflow works.
- Export production port configuration before changing a live port.
- When using RMS2, RMS3, or RMS3(Zstd), review the [RMS documentation](/document/rms) before enabling the protocol on production ports.

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [Quick Start](/document/rustminersystem/quick-start)
