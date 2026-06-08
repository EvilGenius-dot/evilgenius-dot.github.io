---
id: prl-coin-issues
slug: prl-coin-issues
title: PRL币相关问题
navTitle: PRL币相关问题
description: PRL 币挖掘中 pearlhash.xyz 矿池、锄头和 SRB 内核无法抽水时的兼容性说明与处理建议。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 12
---

# PRL币相关问题

目前在 PRL 币挖掘链路中，`pearlhash.xyz` 矿池与锄头存在抽水兼容性问题，可能无法正常完成抽水分配。如果必须使用 `pearlhash.xyz`，建议仅作为纯转发代理使用，不要在该链路上配置抽水。

## 现象

- 使用 `pearlhash.xyz` 矿池时，抽水钱包没有收益或无法稳定出现抽水算力。
- 使用锄头挖掘 PRL 时，抽水链路无法按预期生效。
- 使用 SRB 内核挖掘 PRL 时，同样可能出现无法抽水的问题。

## 原因说明

`pearlhash.xyz` 矿池和锄头当前无法正常支持抽水链路，因此需要改用纯转发代理模式。

SRB 内核由于刚支持 PRL 币种，目前已发现受 SRB 内核自身问题影响，同样无法正常抽水。

## 处理建议

- 不建议选择 `pearlhash.xyz` 作为 PRL 抽水链路矿池。
- 不建议使用 SRB 内核挖掘 PRL。
- 如果必须接入 `pearlhash.xyz`，请使用纯转发代理，不要配置抽水。
- 挖掘 PRL 时，优先选择已验证抽水稳定的矿池和挖矿内核。

## 相关页面

- [费率钱包没有收益](/zh/document/rustminersystem/fee-wallet-no-revenue)
- [算力损耗](/zh/document/rustminersystem/hashrate-loss)
