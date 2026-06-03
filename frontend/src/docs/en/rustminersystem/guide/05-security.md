---
id: security
slug: security
title: RustMinerSystem security essentials
navTitle: Security
description: Complete the required RustMinerSystem security checks for admin access, SSH, firewalls, two-step verification, strong credentials, and script sources before production rollout.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 5
---

# Security essentials

After RustMinerSystem is online, the admin entry, SSH access, proxy ports, and local configuration directly affect miner access and fee configuration security. Complete these checks before connecting production miners.

A single overlooked setting can lead to admin takeover, modified port configuration, replaced wallet addresses, or server compromise. Use the principle of exposing only required ports, allowing only trusted sources, and avoiding long-term exposure of default admin entry points.

## Pre-Production Checklist

- Change the default admin username and password. Do not reuse SSH, cloud account, or pool account passwords.
- Enable two-step verification for admin login and store the recovery method securely.
- Configure a strong secure access path instead of keeping the default admin entry exposed.
- Allow only required ports in the cloud security group or system firewall.
- Restrict SSH to trusted IP addresses; close public SSH access when remote maintenance is not needed.
- Restrict the Web admin port to trusted IP addresses, VPN, or reverse proxy access control; close temporary access after use.
- Run only official scripts, binaries, and maintenance commands that you have verified.
- Back up proxy port configuration, certificates, KENC keys, secure access paths, and two-step verification recovery data.

## Port Exposure Rules

| Port type | Recommendation |
| --- | --- |
| SSH port | The default `22` port is a common scan target. In production, allow only office IPs, VPNs, or bastion hosts. Prefer key-based login and never rely on weak passwords. |
| Web admin port | Do not keep it fully open to the public internet. Prefer security group IP allowlists, VPN access, reverse proxy access control, or temporary allow rules. |
| Proxy mining ports | Expose only the ports actually used by miners. Regularly review online miners, connection counts, reject rate, and abnormal source IPs. |
| HTTPS / certificates | Do not share certificate private keys with unrelated people. After certificate changes, verify the admin console, app entry, or user portal can still be reached. |

If you temporarily open all ports while troubleshooting, switch back to the minimum required allow rules as soon as the correct port list is confirmed. Do not use an “allow all ports” rule as a long-term production policy.

## SSH Security

After installing the operating system, confirm whether SSH really needs public internet access. If it is only needed occasionally, keep SSH closed by default in the cloud security group and temporarily allow a trusted IP during maintenance.

If SSH must remain available:

1. Use strong passwords or key-based login.
2. Do not reuse SSH passwords for the admin console or cloud provider.
3. Allow SSH only from trusted source IPs.
4. Review login records and repeated failed attempts.
5. After maintenance, confirm the security group rules still match the intended policy.

## Web Admin Security

Attackers may also try to reach the Web admin console and change configuration. Immediately after installation, open the admin console and complete these steps:

1. Change the default username and password.
2. Configure a strong secure access path.
3. Enable two-step verification and test one fresh login after signing out.
4. Confirm the Web admin port is accessible only from trusted sources.

If the admin console must be reachable from the internet, use at least a security group IP allowlist. A safer approach is to access it through a VPN, bastion host, or reverse proxy access control.

## Credentials and Secure Access Path

Admin credentials, secure access paths, and SSH passwords should all be high strength. Avoid simple letters plus numbers, project names, domain names, phone numbers, birthdays, common words, or predictable paths.

Recommended practices:

- Use passwords with at least 16 characters.
- Generate and store credentials in a password manager.
- Use a different password for every system.
- Use a random secure access path, and do not expose it in chats, group announcements, or screenshots.
- Change passwords and secure access paths immediately after staff changes, screenshot leaks, or suspected exposure.

## Scripts and Program Sources

Do not run unknown scripts, binaries, cracked tools, or one-click optimization commands on production servers. Unknown scripts may read configuration, replace wallets, modify proxy ports, steal keys, or install persistent backdoors.

Use only official release locations, trusted repositories, self-built programs, or audited maintenance scripts. Review command contents before execution, especially commands that download a remote script and run it immediately.

## Verification After Changes

After changing security groups, firewalls, admin ports, secure access paths, HTTPS certificates, or two-step verification, verify the following:

- The new admin entry is reachable and the old default entry is no longer usable.
- Admin credentials and two-step verification work after signing in again.
- Untrusted IP addresses cannot access SSH or the Web admin port.
- Miners can still connect to proxy mining ports.
- The upstream pool or PoolNode still shows connections and hashrate.
- Security settings, port configuration, and certificates have been backed up.

If the admin console becomes unreachable after a security change, first check the security group, firewall, Web port, and secure access path, then see [Admin Console Is Unreachable](/document/rustminersystem/admin-unreachable).
