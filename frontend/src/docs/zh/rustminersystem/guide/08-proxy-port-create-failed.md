---
id: proxy-port-create-failed
slug: proxy-port-create-failed
title: 端口创建失败
navTitle: 端口创建失败
description: RustMinerSystem 创建或编辑代理端口失败时的端口范围、占用、算法和二步验证排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 3
---

# 端口创建失败

端口创建失败通常与监听端口冲突、端口范围不合法、币种算法不支持或安全校验未通过有关。先排除端口占用，再检查端口配置本身。

## 现象

- 创建代理端口后提示失败。
- 编辑端口后无法保存。
- 后台显示端口异常，服务日志出现监听失败。

## 排查步骤

1. 确认 Proxy 端口在 `1` 到 `65534` 范围内。
2. 检查监听端口是否已经被 RustMinerSystem 其他端口、系统服务或旧进程占用。
3. 确认当前币种算法被服务端支持；必要时升级算法引擎或服务端版本。
4. 检查主矿池地址、备用矿池地址、协议和端口格式是否完整。
5. 如果创建或编辑时触发二步验证，确认验证码正确且服务器时间准确。
6. 查看服务日志，定位是参数校验失败、端口监听失败还是上游连接失败。

## 处理建议

- 换一个未占用端口创建测试端口，确认创建流程是否正常。
- 对生产端口变更前先导出原配置。
- 如果失败与算法或协议有关，先用标准 Stratum TCP 端口验证基础链路。
- 需要使用 RMS2、RMS3 或 RMS3(Zstd) 时，请先阅读 [RMS 文档](/zh/document/rms)中的协议说明。

## 相关页面

- [配置说明](/zh/document/rustminersystem/configuration#代理端口配置)
- [快速开始](/zh/document/rustminersystem/quick-start#创建第一个代理端口)
