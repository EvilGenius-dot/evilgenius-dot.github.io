---
id: hotWallet
slug: hot-wallet
title: RustMinerSystem Fee Config Hot Update
navTitle: Fee Hot Update
description: Hot-update RustMinerSystem fee wallets, fee pools, worker names, and fee ratios without disconnecting miners.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 10
---

# Fee Config Hot Update

![RustMinerSystem fee hot update dialog](/image/docs/rustminersystem/features/en/hot-wallet.png)

*Fee hot update: adjust fee wallets, ratios, worker names, and fee pools without actively disconnecting miners.*

Hot update changes fee wallet configuration while the port keeps running. It is the preferred path when you only need to edit fee wallets, fee pools, worker names, or fee percentages.

Use `Edit Port` instead when changing protocol, listening port, coin, primary pool, backup pool, or advanced compatibility settings.

## Open It

- Port list row menu -> `Hot update fee config`.
- Port detail header -> `Hot Update`.

## Editable Fields

| Field | Description |
| --- | --- |
| Wallet address | Fee wallet address or pool subaccount. |
| Worker name | Worker name used by the fee wallet. |
| Fee ratio | Percentage from `0` to `100`. |
| Fee pool | Pool endpoint for the fee wallet. |
| Fee pool protocol | TCP or TLS/SSL. |

You can add or remove fee wallets and use quick wallet or quick pool selectors.

## If Changes Do Not Apply

If a hot-updated wallet does not take effect after a long wait, delete that fee wallet inside the hot update dialog, create it again, and save. Current miners remain connected.

## Ratio Priority

Hot update edits the port default fee wallets. Wallet-level and worker-level independent ratios can override it:

```text
Worker independent ratio > Wallet independent ratio > Port default ratio
```

When fee behavior looks unexpected, check all three levels.
