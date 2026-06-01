---
id: connected-no-valid-hashrate
slug: connected-no-valid-hashrate
title: 端口有连接但无有效算力
navTitle: 无有效算力
description: RustMinerSystem 端口有矿机连接但没有有效算力时的币种、上游矿池、钱包、透明转发和兼容模式排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 6
---

# 端口有连接但无有效算力

端口有连接说明矿机到 RustMinerSystem 的入口链路基本可达。没有有效算力时，重点检查币种算法、上游矿池协议、钱包或子账号格式，以及高级替换参数。

## 现象

- RustMinerSystem 能看到连接数，但实时算力或 24h 算力为 `0`。
- 上游矿池看不到 worker，或 worker 始终无有效份额。
- 端口日志中出现认证失败、协议错误或 share 被拒绝。

## 排查步骤

1. 确认代理端口选择的币种和矿机实际挖矿算法一致。
2. 检查上游矿池地址、端口和协议是否匹配。
3. 检查钱包地址或子账号格式是否符合上游矿池要求。
4. 查看 worker 错误日志和端口连接日志，确认是否有拒绝份额。
5. 如果是 TP 透明转发端口，注意后台不会提供完整币种解析和统计。
6. 如果启用了兼容模式、钱包替换、矿工名替换或内核信息替换，先恢复默认参数测试。
7. 用少量矿机直连上游矿池，验证钱包和 worker 本身是否可用。

## 处理建议

- 先用标准矿池地址和标准矿工名创建测试端口，确认基础份额可提交。
- 逐项打开高级替换参数，避免多个变量同时变化。
- 对拒绝率异常的端口，优先检查上游矿池区域、网络质量和协议类型。
- 恢复算力后观察至少一个结算周期，确认上游矿池统计稳定。

## 相关页面

- [配置说明](/zh/document/rustminersystem/configuration#挖矿模式)
- [运维](/zh/document/rustminersystem/operations#日常检查)
