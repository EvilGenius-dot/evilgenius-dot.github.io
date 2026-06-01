# 文档维护说明

文档以“产品独立文档集”的方式维护，每篇文档都是带 frontmatter 的 Markdown 文件。路由、侧边栏标签、SEO 元数据、上一篇/下一篇链接、顶部文档下拉菜单以及 `public/sitemap.xml` 都会从 Markdown 元数据生成。

## 架构

每个产品拥有独立的文档集：

```text
src/docs/en/rustminersystem/guide/
src/docs/en/poolnode/guide/
src/docs/en/rms/guide/
src/docs/en/rustminersystem-cli/guide/
src/docs/en/custom-management/guide/
```

`zh` 和 `ru` 目录下也保持相同结构。文档集定义位于 `scripts/docs-config.mjs`：

- `id` 是稳定的文档集 key。
- `slug` 是 `/document/` 后面的 URL 路径片段。
- `meta` 提供文档下拉菜单中展示的多语言文档集名称。

生成后的路由使用以下格式：

```text
/document/rustminersystem
/document/rustminersystem/quick-start
/document/poolnode
/document/rms
/document/rustminersystem-cli
/document/custom-management
```

旧的 RustMinerSystem 文档链接会自动重定向，例如 `/document/quick-start` 会跳转到 `/document/rustminersystem/quick-start`。

## 可视化维护

推荐日常使用本地文档管理器维护文档：

```bash
npm run docs:manager
```

启动后打开终端中显示的本地地址，默认是：

```text
http://localhost:5199
```

文档管理器支持：

- 选择文档集并编辑已有文章。
- 新增文章，并自动创建 `en`、`zh`、`ru` 三种语言文件。
- 通过文章里的 `category`、`categoryTitle` 和 `categoryOrder` 新增或调整类目。
- 新增和顶部“文档”下拉菜单同级的文档集，并自动创建概览页。
- 保存后自动写回 Markdown 文件，并执行 `docs:generate` 更新元数据和 sitemap。

注意：这是本地维护工具，不会被打包到正式网站里。编辑完成后仍建议运行：

```bash
npm run build
```

确认所有静态页面、SEO 和 sitemap 都能正常生成。

## 新建页面

```bash
npm run docs:new -- my-topic "My Topic"
```

在指定文档集和侧边栏分类中创建页面：

```bash
npm run docs:new -- advanced-config "Advanced Config" --collection rms --category advanced --category-title "Advanced" --category-order 3
```

该命令会在以下目录中创建对应语言文件：

```text
src/docs/en/<collection>/guide/
src/docs/zh/<collection>/guide/
src/docs/ru/<collection>/guide/
```

创建后需要编辑每个语言文件，并更新 frontmatter：

```md
---
id: myTopic
slug: my-topic
title: 页面 SEO 标题
navTitle: 侧边栏标题
description: 一段简洁的搜索结果描述。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 6
---
```

分类字段用于控制侧边栏分组：

- `category` 是稳定的分组 id，所有语言必须一致。
- `categoryTitle` 是侧边栏中显示的多语言分组名称。
- `categoryOrder` 控制分组排序。
- `order` 控制页面在生成文档列表中的排序。

## 删除页面

先预览将被删除的文件：

```bash
npm run docs:delete -- my-topic --collection rms --dry-run
```

确认后删除所有语言版本，并重新生成元数据：

```bash
npm run docs:delete -- my-topic --collection rms
```

删除目标可以是文档的 `id`、`slug` 或 Markdown 文件名。命令会从以下目录删除匹配文件：

```text
src/docs/en/<collection>/guide/
src/docs/zh/<collection>/guide/
src/docs/ru/<collection>/guide/
```

## 重新生成元数据

```bash
npm run docs:generate
```

该命令会更新：

```text
src/docs/generated.js
public/sitemap.xml
```

`npm run build` 会通过 `prebuild` 自动执行该生成流程。

## 维护规则

- 所有语言版本必须保持相同的 `id`、`slug`、`file` 和 `order`。
- 所有语言版本必须保持相同的 `category` 和 `categoryOrder`。
- 所有语言版本必须放在相同的文档集目录下。
- `title` 用于 SEO 页面标题。
- `navTitle` 用于侧边栏和上一篇/下一篇链接。
- `description` 用于 meta description 和搜索结果摘要。
- `categoryTitle` 用于本地化的侧边栏分组标题。
- 每个 Markdown 文件只保留一个顶级 `#` 标题；页面布局会把 SEO 标题渲染为唯一的页面 H1。
