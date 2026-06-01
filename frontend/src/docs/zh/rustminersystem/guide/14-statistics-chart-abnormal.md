---
id: statistics-chart-abnormal
slug: statistics-chart-abnormal
title: 统计图表异常
navTitle: 统计图表异常
description: RustMinerSystem 统计图表短时间归零或突然恢复时的云端聚合原因说明，以及确认矿池实际运行不受影响的方法。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 9
---

# 统计图表异常

统计图表中间突然归零，随后又突然恢复，通常只是图表统计显示异常。如果上游矿池中的矿机、算力和收益没有变化，说明实际挖矿链路没有受到影响。

## 现象

- RustMinerSystem 统计图表在某个时间段突然显示为 `0`。
- 图表稍后又恢复到正常曲线。
- 上游矿池后台的连接、算力、收益或 worker 状态没有异常。

## 原因

为了减轻用户服务器压力，RustMiner 的图表统计会在云端完成聚合。云端统计服务压力较大或处理异常时，可能导致某段图表数据没有被正常聚合，于是后台图表会短时间归零或出现断点。

这种情况只影响统计图表展示，不会影响矿机连接、share 提交、上游矿池结算或收益。除了图表看起来不够连续之外，不会产生其他负面影响。

## 处理建议

1. 先查看上游矿池后台，确认矿机、算力和收益是否正常。
2. 如果矿池侧没有异常，可以继续观察，等待云端统计恢复。
3. 不需要重启 RustMinerSystem，也不需要调整端口、钱包或费率配置。
4. 如果上游矿池也出现算力下降或 worker 掉线，再按矿机连接和有效算力相关故障继续排查。

## 相关页面

- [端口有连接但无有效算力](/zh/document/rustminersystem/connected-no-valid-hashrate)
- [运维](/zh/document/rustminersystem/operations#日常检查)
