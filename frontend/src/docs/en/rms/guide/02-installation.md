---
id: rmsInstallation
slug: installation
title: RMS installation
navTitle: Installation
description: Install RMS3 on Linux and Windows, understand default access, WebView2, architecture choices, and legacy RMS2 entries.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 2
---

# RMS Installation

RMS3 is the recommended current client. According to the RMS GitHub guide, RMS3 requires RustMinerSystem server `v4.5.0` or later when using the RMS3 protocol, and RMS3 is not compatible with RMS1/RMS2 protocol ports. Use the legacy RMS2 installer only when you must connect to an older RMS2 server-side deployment.

Reference source: <https://github.com/EvilGenius-dot/RMS>

## Before Installation

- Choose a device that will stay online in the mining-site LAN.
- Give this device a fixed LAN IP address. If DHCP changes the IP after a reboot, miners may lose the RMS address.
- Prepare root access for Linux installation.
- Open the RMS web port in your LAN firewall if needed. The default web access is `http://DEVICE_IP:42703`.
- Prepare the RustMinerSystem server RMS protocol port before connecting miners.

## RMS3 Linux Installation

Switch to root first:

```bash
sudo -i
```

Run the official GitHub install line:

```bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)
```

If GitHub is not reachable from the server, the README also provides this alternate line:

```bash
bash <(curl -s -L -k https://rustminersystem.com/install.sh)
```

The installer opens an interactive menu. Choose `Install`, select the CPU architecture, and then choose the download route.

Common architecture options:

| Option | Typical device |
| --- | --- |
| `x86-64` | Most Intel/AMD Linux servers and mini PCs. |
| `aarch64` | 64-bit ARM devices. |
| `arm-musleabi`, `arm-musleabihf`, `armv7-*` | Older ARM devices. |

The Linux script installs RMS under `/root/rms`, configures a service named `rmservice` on systemd systems, starts the program, and prints the access address after startup.

## RMS3 Windows Installation

RMS3 provides two Windows builds.

| Build | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-no-gui/rms.exe> |

If the GUI version opens to a blank white screen, install Microsoft Edge WebView2:

```text
https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/MicrosoftEdgeWebview2Setup.exe
```

After starting the Windows client, open the RMS page from the local machine or LAN and continue with setup and pairing.

## First Access After Installation

After installation, open a browser and visit:

```text
http://DEVICE_IP:42703
```

Then enter the push address if your deployment provides one, or skip the push flow and add remote server addresses manually.

Recommended first checks:

- The RMS page opens from another device in the LAN.
- The device IP is fixed.
- The RustMinerSystem server RMS protocol port is reachable.
- The local RMS client and server port use the same RMS protocol generation.

## Managing The Linux Script

Running the Linux install script again opens the management menu. The script supports:

- Install.
- Stop RMS.
- Restart RMS.
- Uninstall RMS.

Use the script menu for normal maintenance unless your deployment has wrapped RMS with its own service manager.

## Legacy RMS2 Installation

Only use RMS2 for older deployments that still require RMS2. Do not mix RMS3 clients with RMS2-only server ports.

Linux RMS2:

```bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/OLD_2/install.sh)
```

Alternate RMS2 line:

```bash
bash <(curl -s -L -k https://rustminersystem.com/OLD2_install.sh)
```

Windows RMS2:

| Build | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-no-gui/rms.exe> |
| WebView2 installer | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/MicrosoftEdgeWebview2Setup.exe> |

## Next Step

After RMS is installed and reachable, continue to [setup and pairing](/document/rms/setup).
