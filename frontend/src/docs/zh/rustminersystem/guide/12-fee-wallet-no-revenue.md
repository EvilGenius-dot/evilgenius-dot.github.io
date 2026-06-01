---
id: fee-wallet-no-revenue
slug: fee-wallet-no-revenue
title: 费率钱包没有收益
navTitle: 费率钱包无收益
description: RustMinerSystem 费率钱包没有收益时的费率比例、钱包地址、矿池协议和独立比例排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 7
---

# 费率钱包没有收益

费率钱包没有收益时，需要确认端口默认费率、独立费率覆盖关系、费率矿池地址和钱包格式。不要只看 RustMinerSystem 后台连接数，还要看上游矿池是否出现费率 worker。

## 现象

- 主矿工有收益，但费率钱包长期没有收益。
- 费率 worker 在上游矿池不可见。
- 修改费率后收益比例与预期不一致。

## 排查步骤

1. 确认端口默认费率比例不是 `0`。
2. 检查费率钱包地址、矿工名、费率矿池地址和协议。
3. 确认上游矿池支持该钱包格式或子账号格式。
4. 检查钱包独立比例和矿机独立比例是否覆盖了端口默认比例。
5. 检查是否存在多个费率钱包，比例合计是否符合预期。
6. 用少量矿机测试，确认上游矿池能看到费率 worker。
7. 等待上游矿池统计刷新，不同矿池的收益显示可能有延迟。

## 处理建议

- 先配置单个费率钱包和小比例测试，确认收益链路正确。
- 费率矿池尽量选择与主矿池协议兼容、统计清晰的地址。
- 调整独立比例后记录变更时间，便于与上游矿池收益曲线对齐。
- PoolNode 节点费率属于结算层能力，请阅读 [PoolNode 文档](/zh/document/poolnode)。

## 相关页面

- [配置说明](/zh/document/rustminersystem/configuration#费率钱包配置)
- [PoolNode 文档](/zh/document/poolnode)
