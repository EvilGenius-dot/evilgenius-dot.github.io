---
id: installation
slug: installation
title: RustMinerSystem installation guide
navTitle: Installation
description: Download, start, and verify the RustMinerSystem server package.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 3
---

# Installation

## Download

Download the package that matches your system architecture from the release center.

```bash
# Linux example: replace with the real download URL
wget https://example.com/rustminersystem-linux.tar.gz
tar -xzf rustminersystem-linux.tar.gz
cd rustminersystem
```

## Start

```bash
# Example command, adjust it to match the actual release package
./rustminersystem --config ./config.toml
```

## Verify

After startup, check the following:

- The service process is running normally.
- Logs do not show configuration errors or connection failures.
- The pool connection is successful.
- Test miners can submit valid data.

## Installation Troubleshooting

If installation or first connection checks fail, use the dedicated troubleshooting articles:

- [Admin Console Is Unreachable](/document/rustminersystem/admin-unreachable)
- [Miner Cannot Connect to Port](/document/rustminersystem/miner-cannot-connect-port)
- [Linux Script Download Fails](/document/rustminersystem/linux-script-download-failed)
