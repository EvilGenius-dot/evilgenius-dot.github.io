---
id: admin-login-failed
slug: admin-login-failed
title: Admin Login Fails
navTitle: Admin login fails
description: Troubleshoot account, password, secure access path, two-factor code, and login restriction issues when the admin page opens but login fails.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 2
---

# Admin Login Fails

Use this article when the admin page opens but you cannot enter RustMinerSystem. Focus on the current admin URL, credentials, two-factor time sync, and login restrictions.

## Symptoms

- The login page opens, but credentials are rejected.
- Two-factor codes are always reported as invalid.
- The page redirects or reports insufficient permission after login.

## Checks

1. Confirm that you are using the current secure access path.
2. Confirm whether the default account has already been changed.
3. If two-factor authentication is enabled, check time sync on the server and authenticator device.
4. Check whether the login IP is blocked by an IP blacklist, firewall, or reverse proxy rule.
5. Review logs to confirm that login requests reach the RustMinerSystem service.

## Recovery

- Correct server time first, then try the two-factor code again.
- Use the recorded administrator account instead of relying on old default credentials.
- After recovery, review administrator accounts, two-factor recovery options, and login logs.

## Related Pages

- [Installation](/document/rustminersystem/installation)
- [Configuration](/document/rustminersystem/configuration)
