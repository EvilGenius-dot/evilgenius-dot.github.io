---
id: poolnodeAppApi
slug: app-api
title: PoolNodeAPP 使用
navTitle: PoolNodeAPP
description: 配置 PoolNodeAPP 通信地址，查看节点名称和邀请码，并验证移动端注册、登录和查询流程。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 6
---


# PoolNodeAPP 使用

PoolNodeAPP 是 PoolNode 终端用户的移动端入口。它只负责移动端注册、登录和查询；开放式 API 已单独整理到 [开放式 API](/zh/document/poolnode/api-notes) 分类。

## 功能作用

使用 APP 通信配置，把移动端和当前 PoolNode 官网或同节点组专用 API 地址绑定起来。未配置时，用户端可能无法正常注册、登录或查询。

## 配置 APP 通信

1. 打开“配置中心”。
2. 切换到“文档与接口”。
3. 打开“APP 通信配置”。
4. 查看当前官网地址、节点名称和节点邀请码。
5. 填写“APP接口访问地址”。
6. 保存配置。
7. 点击“重新读取”或重新打开弹窗，确认邀请码和保存后的 URL。

这个地址需要终端用户可以访问。建议填写可公网访问的矿池官网地址；如果已经开启公网访问，可直接使用当前官网地址，也可以使用同节点组的专用 APP 通信服务器。

## 节点名称与邀请码

“节点名称”会展示在 APP 用户端。“节点邀请码”是用户注册到当前节点时需要填写的数字邀请码，保存通信地址后生成。

如果用户注册到了错误节点组，优先检查 APP 通信地址和邀请码是否对应当前 CODE/TOKEN 节点组。

## 发布前验证

- 新用户可以使用邀请码注册。
- 登录后进入当前节点组。
- 矿工、算力、收益和打款查询显示正确。
- HTTPS 地址证书有效。
- 使用其他 CODE/TOKEN 节点组时不会串数据。
