---
id: appCenter
slug: app-center
title: RustMinerSystem APP Information Entry
navTitle: APP Entry
description: View RustMinerSystem APP_INFO content, mobile application links, platform status, and remote app configuration.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 16
---

# APP Information Entry

![RustMinerSystem APP information entry](/image/docs/rustminersystem/features/en/app-center.png)

*APP entry: view RustMinerSystemAPP and PoolNodeAPP descriptions, release status, guide links, and download entries.*

The `APP` menu displays application information returned by the backend version configuration. It can host links for mobile apps, clients, custom builds, platform status, and release notes.

If the backend does not provide `APP_INFO`, the dialog shows an empty state and a refresh action.

## Content

The dialog can show:

- Dialog title and description.
- Overview text.
- App name, title, tagline, and status.
- Feature tags.
- Download, external, or documentation links.
- Android, iOS, server, or other platform rows.
- Platform descriptions and actions.

Different versions or custom deployments may show different entries.

## Usage

1. Open `Mining Proxy`.
2. Click `APP`.
3. Review available app entries and platform states.
4. Open trusted download or external links.
5. If content is empty, refresh remote configuration and verify that `/api/version` returns `APP_INFO`.

Only publish trusted download URLs and keep custom build links up to date.
