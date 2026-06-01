---
id: admin-unreachable
slug: admin-unreachable
title: Admin Console Is Unreachable
navTitle: Admin unreachable
description: Check service status, web port exposure, firewall rules, and secure access path when the RustMinerSystem admin console cannot be opened.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 1
---

# Admin Console Is Unreachable

Use this article when the browser cannot open the RustMinerSystem admin console after installation, a web port change, a firewall change, or a secure access path update.

## Symptoms

- The admin page times out or refuses the connection.
- The service appears to start, but the admin port is not reachable from outside.
- The old admin URL no longer works after changing the secure access path.

## Checks

1. Confirm the current admin URL and web port from the installer output or startup logs.
2. Verify that the RustMinerSystem process is still running.
3. Check whether the web port is blocked by the host firewall, cloud security group, or reverse proxy.
4. If a secure access path is enabled, confirm that the URL path matches the current server configuration.
5. Check logs for port binding failures, permission errors, or certificate loading failures.

## Recovery

- First verify that the port is listening on the server, then test access from outside the server.
- If the port is already occupied, stop the conflicting process or move the admin console to another web port.
- After access is restored, review the admin exposure and access-control rules before keeping the service online.

## Related Pages

- [Installation](/document/rustminersystem/installation)
- [Configuration](/document/rustminersystem/configuration)
