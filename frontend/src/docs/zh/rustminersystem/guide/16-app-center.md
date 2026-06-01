---
id: appCenter
slug: app-center
title: RustMinerSystem APP 信息入口
navTitle: APP 入口
description: 使用 RustMinerSystem APP 入口查看移动端和相关应用配置、下载链接、平台状态和远程 APP_INFO 内容。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 16
---

# APP 信息入口

![RustMinerSystem APP 信息入口](/image/docs/rustminersystem/features/zh/app-center.png)

*APP 信息入口：查看 RustMinerSystemAPP 与 PoolNodeAPP 的移动端介绍、发布状态和下载入口。*

顶部菜单 `APP` 用于展示后端远程配置中的 APP 信息。它通常用于放置 RustMinerSystem 相关移动端、客户端或定制应用的下载入口、平台状态、功能说明和外部链接。

如果当前版本或远程配置没有提供 `APP_INFO`，页面会显示空状态，并提示重新读取。

## 显示内容

APP 入口会从后端版本配置中读取信息，并按当前语言展示：

- 弹窗标题和说明。
- 应用总览。
- 应用名称、标题、标语和状态。
- 功能标签。
- 下载链接、外部链接或说明链接。
- Android、iOS、服务器等平台状态。
- 平台描述和可用操作。

这部分内容由服务端配置决定，不同版本、定制版本或部署环境可能显示不同应用。

## 使用方法

1. 进入 `矿池代理`。
2. 点击顶部菜单 `APP`。
3. 如果有应用条目，查看对应平台和状态。
4. 点击下载或外部链接打开资源。
5. 如果内容为空，点击右上角刷新按钮重新读取远程配置。

## 常见用途

| 场景 | 说明 |
| --- | --- |
| 移动端下载 | 提供 RustMinerSystemAPP、PoolNodeAPP 等移动端入口。 |
| 定制版交付 | 展示客户定制应用的下载地址和平台状态。 |
| 运维提示 | 展示应用维护状态、版本说明或迁移说明。 |
| 多语言展示 | 按当前后台语言优先展示中文、英文、俄文或日文文案。 |

## 内容为空怎么办

如果显示 `请在 /api/version 返回中提供 APP_INFO`，说明当前后端没有返回 APP 配置。可以：

1. 点击 `重新读取`。
2. 确认当前 RustMinerSystem 版本是否支持 APP_INFO。
3. 检查 `/api/version` 返回配置。
4. 如果是定制版本，确认定制配置是否已部署到服务端。

## 安全建议

- APP 下载链接应只指向可信域名。
- 定制版下载地址变更后，应同步更新后台配置。
- 不要把内部测试包链接暴露给无关用户。
- 用户安装移动端或客户端前，应确认版本来源和签名信息。
