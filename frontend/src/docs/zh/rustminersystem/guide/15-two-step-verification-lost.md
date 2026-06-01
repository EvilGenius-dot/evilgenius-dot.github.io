---
id: two-step-verification-lost
slug: two-step-verification-lost
title: 二步验证丢失
navTitle: 二步验证丢失
description: RustMinerSystem 二步验证器丢失或无法生成验证码时，通过 Telegram 联系管理员核验并移除二步验证的处理方式。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 10
---

# 二步验证丢失

如果绑定二步验证的手机或验证器应用丢失，后台登录或敏感操作可能无法继续完成验证码校验。此时不要反复尝试验证码，也不需要重装 RustMinerSystem。

## 现象

- 登录账号和密码正确，但无法提供二步验证码。
- 手机重置、更换设备或验证器应用数据丢失。
- 新建端口、编辑钱包等敏感操作触发二步验证后无法继续。

## 处理方式

1. 确认当前后台账号、密码和安全访问地址仍然正确。
2. 通过 [Telegram](https://t.me/rustkt) 联系管理员，说明二步验证器已丢失。
3. 按管理员要求提供用于核验身份和实例归属的信息，例如账号、授权信息、本机 UUID 或相关购买/授权记录。
4. 管理员核验通过后，可以协助移除二步验证。
5. 恢复登录后，立即重新绑定二步验证，并妥善保存二维码或恢复信息。

不要在公开群组中发送后台密码、验证码、私钥或完整服务器敏感信息；如需提供核验材料，请按管理员要求在私聊中处理。

## 相关页面

- [后台无法登录](/zh/document/rustminersystem/admin-login-failed)
- [设置中心](/zh/document/rustminersystem/settings-center#安全设置)
