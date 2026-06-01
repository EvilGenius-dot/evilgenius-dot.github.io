---
id: linux-script-download-failed
slug: linux-script-download-failed
title: Linux Script Download Fails
navTitle: Linux script fails
description: Troubleshoot GitHub reachability, DNS, TLS certificate validation, fallback URLs, and manual binary installation when the Linux install script cannot download.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 8
---

# Linux Script Download Fails

Linux install script failures are usually caused by network reachability, DNS, TLS certificate validation, or restricted GitHub access. The script is not the only installation path.

## Symptoms

- The install command hangs for a long time.
- `curl` reports connection, DNS, or TLS errors.
- The script downloads, but later files cannot be fetched.

## Checks

1. Check whether the server can reach GitHub.
2. Check DNS resolution and switch DNS if needed.
3. Try the fallback install URL from the installation guide.
4. If TLS validation fails, confirm server time and system CA certificates.
5. If outbound access is restricted, download the binary elsewhere and upload it to the server.
6. Distinguish between failing to download the script and failing inside the script.

## Recovery

- Prefer the official GitHub URL, then use the fallback URL only when network conditions require it.
- Keep a verified binary backup for production.
- After installation, continue with first-start verification.

## Related Pages

- [Installation](/document/rustminersystem/installation)
