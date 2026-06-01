---
id: admin-unreachable
slug: admin-unreachable
title: 后台无法访问
navTitle: 后台无法访问
description: RustMinerSystem 后台页面无法打开时的端口、防火墙、安全访问地址和服务进程排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 1
---

# 后台无法访问

后台无法访问通常发生在安装后首次打开、修改 Web 端口、启用安全访问地址或调整防火墙之后。先确认服务是否运行，再确认访问地址和网络放行。

## 现象

- 浏览器无法打开 RustMinerSystem 后台页面。
- 访问超时、连接被拒绝，或页面一直加载。
- 服务器能启动，但外部网络无法访问后台端口。

## 排查步骤

1. 确认安装程序或启动日志中显示的后台地址和端口。
2. 在服务器本机检查 RustMinerSystem 进程是否仍在运行。
3. 检查后台 Web 端口是否被系统防火墙、云安全组或反向代理拦截。
4. 如果设置了安全访问地址，确认访问路径与后台当前配置一致。
5. 如果刚刚修改过 HTTPS 证书、Web 端口或安全访问地址，优先使用修改前记录的备用入口验证。
6. 查看运行日志，确认没有端口占用、权限不足或证书加载失败。

## 处理建议

- 先在服务器本机验证端口是否监听，再从外网验证安全组和防火墙。
- 如果后台端口被占用，停止占用进程或改用新的 Web 端口。
- 如果忘记安全访问地址，需要回到服务器侧通过配置文件、启动日志或管理脚本找回。
- 生产环境不建议长期开放默认后台入口，恢复访问后应重新确认访问控制策略。

## 相关页面

- [安装指南](/zh/document/rustminersystem/installation)
- [安全设置](/zh/document/rustminersystem/configuration#安全设置)
