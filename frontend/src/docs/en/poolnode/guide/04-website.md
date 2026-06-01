---
id: poolnodeWebsite
slug: website
title: Pool website
navTitle: Pool Website
description: Configure PoolNode public website access, website port, custom route, template, display content, HTTPS mode, and certificate.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 4
---


# Pool Website

PoolNode includes a user-facing pool website. It displays mining addresses, opens user registration, and provides worker, hashrate, earnings, payout, and account queries.

## What This Page Controls

The `Website Access` section in the configuration center manages public access, website route, template, display content, HTTPS, and certificate.

## Public Access

`Public website access` controls whether the pool website is reachable from the public network. It does not stop mining ports.

## Website Route

| Setting | Description |
| --- | --- |
| Website port | HTTP/HTTPS port for the pool website. |
| Custom route | Optional path such as `pool`. Do not include protocol, domain, leading slash, trailing slash, or query string. |

Saving the route or port restarts the website service. Verify the preview URL after saving.

## Website Template

You can use the built-in template or a remote template version. Non-default templates are downloaded by the node. The dialog shows template cover, versions, download status, refresh status, and save action. If download fails, check whether the server can access GitHub or the configured template source.

## Website Display Content

Manage logo, website name, main title, subtitle, notice title, footer HTML, logo rotation, node-fee visibility, and JSON import/export. Export a JSON backup before major changes.

## HTTPS And Certificate

Built-in HTTPS should usually stay disabled when Nginx, Cloudflare, or another HTTPS reverse proxy already terminates TLS. The certificate dialog can upload custom certificate and key or restore the built-in certificate. The website service restarts after saving.
