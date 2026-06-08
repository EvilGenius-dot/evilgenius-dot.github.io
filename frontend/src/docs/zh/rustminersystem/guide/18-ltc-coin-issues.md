---
id: ltc-coin-issues
slug: ltc-coin-issues
title: LTC币相关问题
navTitle: LTC币相关问题
description: LTC 币挖掘中不建议将抽水目标设置到鱼池，避免抽水算力不足，建议优先抽到 ViaBTC。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 13
---

# LTC币相关问题

LTC 币抽水时，不建议将抽水目标设置为鱼池。当前实践中，该链路容易出现抽水算力不足的问题，表现为实际抽水算力低于预期比例，或抽水算力统计不稳定。

## 现象

- LTC 主矿工算力正常，但抽水钱包侧算力不足。
- 抽水比例已经配置正确，但鱼池侧显示的抽水算力低于预期。
- 抽水 worker 在鱼池侧统计不稳定，收益表现与配置比例不匹配。

## 处理建议

- LTC 抽水不建议抽到鱼池。
- 建议将 LTC 抽水目标设置到 ViaBTC。
- 切换抽水矿池后，至少观察一个完整矿池统计周期，再判断实际抽水比例是否稳定。

## 相关页面

- [费率钱包没有收益](/zh/document/rustminersystem/fee-wallet-no-revenue)
- [算力损耗](/zh/document/rustminersystem/hashrate-loss)
