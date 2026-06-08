import{B as e,J as t,R as n,_ as r,_t as i,b as a,ft as o,g as s,mt as c,p as l,r as u,t as d,v as f,x as p,y as m,yt as h}from"./_plugin-vue_export-helper-C21jn19j.js";import{B as g,F as _,H as v,I as y,M as b,N as ee,P as x,R as te,U as ne,V as re,W as ie,z as S}from"./app-Br2ANXSQ.js";var C=Object.assign({"./README.md":'# 文档维护说明\n\n文档以“产品独立文档集”的方式维护，每篇文档都是带 frontmatter 的 Markdown 文件。路由、侧边栏标签、SEO 元数据、上一篇/下一篇链接、顶部文档下拉菜单以及 `public/sitemap.xml` 都会从 Markdown 元数据生成。\n\n## 架构\n\n每个产品拥有独立的文档集：\n\n```text\nsrc/docs/en/rustminersystem/guide/\nsrc/docs/en/poolnode/guide/\nsrc/docs/en/rms/guide/\nsrc/docs/en/rustminersystem-cli/guide/\nsrc/docs/en/custom-management/guide/\n```\n\n`zh` 和 `ru` 目录下也保持相同结构。文档集定义位于 `scripts/docs-config.mjs`：\n\n- `id` 是稳定的文档集 key。\n- `slug` 是 `/document/` 后面的 URL 路径片段。\n- `meta` 提供文档下拉菜单中展示的多语言文档集名称。\n\n生成后的路由使用以下格式：\n\n```text\n/document/rustminersystem\n/document/rustminersystem/quick-start\n/document/poolnode\n/document/rms\n/document/rustminersystem-cli\n/document/custom-management\n```\n\n旧的 RustMinerSystem 文档链接会自动重定向，例如 `/document/quick-start` 会跳转到 `/document/rustminersystem/quick-start`。\n\n## 可视化维护\n\n推荐日常使用本地文档管理器维护文档：\n\n```bash\nnpm run docs:manager\n```\n\n启动后打开终端中显示的本地地址，默认是：\n\n```text\nhttp://localhost:5199\n```\n\n文档管理器支持：\n\n- 选择文档集并编辑已有文章。\n- 新增文章，并自动创建 `en`、`zh`、`ru` 三种语言文件。\n- 通过文章里的 `category`、`categoryTitle` 和 `categoryOrder` 新增或调整类目。\n- 新增和顶部“文档”下拉菜单同级的文档集，并自动创建概览页。\n- 保存后自动写回 Markdown 文件，并执行 `docs:generate` 更新元数据和 sitemap。\n\n注意：这是本地维护工具，不会被打包到正式网站里。编辑完成后仍建议运行：\n\n```bash\nnpm run build\n```\n\n确认所有静态页面、SEO 和 sitemap 都能正常生成。\n\n## 新建页面\n\n```bash\nnpm run docs:new -- my-topic "My Topic"\n```\n\n在指定文档集和侧边栏分类中创建页面：\n\n```bash\nnpm run docs:new -- advanced-config "Advanced Config" --collection rms --category advanced --category-title "Advanced" --category-order 3\n```\n\n该命令会在以下目录中创建对应语言文件：\n\n```text\nsrc/docs/en/<collection>/guide/\nsrc/docs/zh/<collection>/guide/\nsrc/docs/ru/<collection>/guide/\n```\n\n创建后需要编辑每个语言文件，并更新 frontmatter：\n\n```md\n---\nid: myTopic\nslug: my-topic\ntitle: 页面 SEO 标题\nnavTitle: 侧边栏标题\ndescription: 一段简洁的搜索结果描述。\ncategory: getting-started\ncategoryTitle: 开始使用\ncategoryOrder: 1\norder: 6\n---\n```\n\n分类字段用于控制侧边栏分组：\n\n- `category` 是稳定的分组 id，所有语言必须一致。\n- `categoryTitle` 是侧边栏中显示的多语言分组名称。\n- `categoryOrder` 控制分组排序。\n- `order` 控制页面在生成文档列表中的排序。\n\n## 删除页面\n\n先预览将被删除的文件：\n\n```bash\nnpm run docs:delete -- my-topic --collection rms --dry-run\n```\n\n确认后删除所有语言版本，并重新生成元数据：\n\n```bash\nnpm run docs:delete -- my-topic --collection rms\n```\n\n删除目标可以是文档的 `id`、`slug` 或 Markdown 文件名。命令会从以下目录删除匹配文件：\n\n```text\nsrc/docs/en/<collection>/guide/\nsrc/docs/zh/<collection>/guide/\nsrc/docs/ru/<collection>/guide/\n```\n\n## 重新生成元数据\n\n```bash\nnpm run docs:generate\n```\n\n该命令会更新：\n\n```text\nsrc/docs/generated.js\npublic/sitemap.xml\n```\n\n`npm run build` 会通过 `prebuild` 自动执行该生成流程。\n\n## 维护规则\n\n- 所有语言版本必须保持相同的 `id`、`slug`、`file` 和 `order`。\n- 所有语言版本必须保持相同的 `category` 和 `categoryOrder`。\n- 所有语言版本必须放在相同的文档集目录下。\n- `title` 用于 SEO 页面标题。\n- `navTitle` 用于侧边栏和上一篇/下一篇链接。\n- `description` 用于 meta description 和搜索结果摘要。\n- `categoryTitle` 用于本地化的侧边栏分组标题。\n- 每个 Markdown 文件只保留一个顶级 `#` 标题；页面布局会把 SEO 标题渲染为唯一的页面 H1。\n',"./en/custom-management/guide/01-overview.md":`---
id: overview
slug: ""
title: Custom management documentation overview
navTitle: Overview
description: Learn how Custom Management centralizes installed RustMinerSystem custom builds, statistics, fee configuration, audits, and account permissions.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---

# Custom Management Documentation

Custom Management is the operations console for every installed RustMinerSystem custom build under your account. It is not a single customer client or an installer. It is the central console used by operators to manage CIDs, client installs, active devices, coin permissions, wallet fee configuration, pool-node inside fees, audits, and account visibility.

![Custom Management dashboard](/image/docs/custom-management/features/zh/dashboard.png)

*Dashboard: an administrator view shows aggregate client count, active devices, regional distribution, and coin share across the authorized custom-build scope.*

## Core Purpose

| Module | Purpose |
| --- | --- |
| Dashboard | View client count, active devices, world distribution, coin share, and coin-level charts for all visible custom builds. |
| Service Management | Manage coin permissions, wallet fee configuration, historical version activation, and client details by CID. |
| Pool Nodes | View live pool-node hashrate, online/offline devices, inside fees, and official fees. |
| Audit List | Review wallet add, edit, and delete requests before they affect production configuration. |
| Permission Assignment | Maintain account hierarchy and decide which custom builds each management account can see and operate. |

## Managed Objects

The console uses CID as the primary management unit. A CID usually represents a delivered custom build or a customer-side management scope. Operators can inspect install scale, active devices, coin permissions, wallet settings, and pool-node fee settings by CID.

| Object | Description |
| --- | --- |
| Management account | The account used to sign in. Each account sees the scope assigned through permission management. |
| Custom service | A row in Service Management, usually with CID, custom name, active devices, client count, and coin permissions. |
| Client | An installed RustMinerSystem custom-build instance that reports data to the console. |
| Coin permission | The list of coins enabled for a custom service. |
| Wallet configuration | Per-coin fee wallet settings: anonymous wallet, subaccount, ratio, device name, and pool strategy. |
| Pool-node configuration | PoolNode-specific fee settings, independent from traditional proxy wallet settings. |

## Permission View

Accounts with advanced permissions can access \`Audit List\` and \`Permission Assignment\`, and can maintain the visibility scope between management accounts. Standard management accounts only see assigned custom services.

Permission assignment affects:

- Which CIDs appear in the dashboard and service list.
- Which services an account can submit configuration requests for.

## Configuration Lifecycle

Custom Management separates observation from write operations:

1. Dashboard, service list, client list, and pool-node list are used for daily observation.
2. Coin permissions, wallet configuration, and pool-node fee changes are production configuration changes.
3. Wallet add, edit, and delete requests enter the audit flow before taking effect.
4. New configuration usually applies to the latest and future versions; historical versions must be activated separately.

## Recommended Use

- Start from the dashboard to check total clients, active devices, and primary coin share.
- Before changing wallet or fee settings, confirm the target CID and coin.
- When the client scale is large, use account and coin filters before opening charts or client details.
- Treat audits, deletes, fee changes, and permission assignment as production writes and confirm the business impact before submitting.
`,"./en/custom-management/guide/02-dashboard.md":`---
id: dashboard
slug: dashboard
title: Custom Management Dashboard
navTitle: Dashboard
description: Use the dashboard to view client count, active devices, regional distribution, coin share, and hashrate trends across custom builds.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 2
---

# Custom Management Dashboard

![Custom Management dashboard](/image/docs/custom-management/features/zh/dashboard.png)

*The dashboard defaults to all custom builds visible to the current account.*

The dashboard is the first page after sign-in. It gives operators a quick health view across the custom-build fleet: account scope, coin scope, client installs, active devices, world distribution, charts, and coin share.

## Filters

| Filter | Purpose |
| --- | --- |
| Management scope | Switch between \`All\` and a specific CID/custom name. |
| Coin | Switch between \`All\` and a specific coin for hashrate, fee hashrate, maps, and charts. |

When \`All\` coins are selected, the page still shows client count, active devices, and device share. Live hashrate and coin charts require selecting a specific coin.

## Metric Cards

| Metric | Description |
| --- | --- |
| Clients | Installed clients in the current scope. |
| Active Devices | Devices currently reporting valid activity in the current scope. |
| Total Hashrate | Live hashrate for the selected coin. |
| Fee Hashrate | Live fee hashrate for the selected coin. |

Client and active-device metrics are useful for deployment scale. Hashrate and fee hashrate are best checked at single-coin granularity.

## World Distribution

The world map groups devices or hashrate by IP region. Use it to check whether customer machines are in expected regions, whether one region dropped sharply, and whether a network issue is concentrated in a small geography.

If a region appears as unknown, the IP lookup did not return a clear country. Use client details to continue investigation.

## Charts

The chart area includes:

| View | Use |
| --- | --- |
| Hashrate chart | Compare total hashrate and fee hashrate over time for the selected coin. |
| Active-device chart | Inspect active-device changes for the selected coin. |

When a customer reports missing hashrate, missing fee hashrate, or dropped devices, first filter by management scope and coin, then compare the chart around the reported time.

## Daily Check

1. Check \`Clients\` and \`Active Devices\`.
2. Review the coin share to confirm primary coins did not shift unexpectedly.
3. Select key coins and review live hashrate, fee hashrate, and charts.
4. If one region dropped, continue with client details or pool-node checks.
5. If only one custom build is affected, filter to that CID and repeat the check.
`,"./en/custom-management/guide/03-service-management.md":`---
id: serviceManagement
slug: service-management
title: Custom Service Management
navTitle: Service Management
description: Manage coin permissions, wallet fee configuration, historical version activation, and client details for RustMinerSystem custom builds.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 3
---

# Custom Service Management

![Service Management workspace](/image/docs/custom-management/features/zh/service-management.png)

*Service Management lists custom services by CID and provides entry points for coin permissions, wallet configuration, historical versions, and client details.*

Service Management is the main operations page. Each row represents one installed RustMinerSystem custom service, including CID, custom name, active devices, client count, coin permissions, and action buttons.

## Summary

| Metric | Description |
| --- | --- |
| Management scopes | Number of custom services visible to the current account. |
| Client installs | Total installed clients in the visible scope. |
| Active devices | Total active devices in the visible scope. |
| Default version | The latest version used by default for new configuration. |

Use this page for per-service configuration. Use the dashboard for broader business observation.

## Service List

| Field | Description |
| --- | --- |
| cid | Unique management ID for the custom service. |
| Custom name | Human-readable customer or brand name. |
| Active devices | Active devices under this service. |
| Client count | Installed clients under this service. |
| Coin permissions | Enabled coins / total available coins. |
| Actions | Wallet config, coin permissions, historical versions, and client details. |

The list can be sorted by CID, custom name, active devices, client count, and coin permissions. After selecting multiple services, use \`Batch add coins\` to enable one coin for all selected services.

## Coin Permissions

\`Coin permissions\` controls which coins a custom service can use. Search coins, select or deselect them, then submit the change for the default version.

Notes:

- The default effect is latest and future versions.
- To affect older clients, use \`Apply to Historical Versions\` after the configuration is ready.
- Batch add coins only adds the selected coin. It does not replace existing permissions.

## Wallet Fee Configuration

\`Edit Fee Rate\` opens the wallet configuration drawer. The left side lists enabled coins, and the right side shows active wallets and pending requests for the selected coin.

Wallet fields include anonymous wallet, subaccount, fee ratio, device name, follow/specified pool mode, TCP/SSL protocol, pool address, and version.

Adding, editing, or deleting a wallet creates an audit request. Until the request is approved, the change appears under pending requests and does not replace the active production configuration.

## Historical Versions

New configuration normally targets the latest and future versions. If a customer still runs an older version:

1. Finish the coin or wallet configuration for the latest version.
2. Wait for any required audit to be approved.
3. Confirm the customer version.
4. Use \`Apply to Historical Versions\`.
5. Recheck client details or dashboard metrics.

## Client Details

\`View All Clients\` opens the per-service client list. Select a coin to view client CID, UUID, version, created time, and live hashrate.

Use it when a customer reports one machine missing, one version looks abnormal, or the service-level hashrate does not match the dashboard.

## Operational Advice

- Be careful when changing fee ratios.
- Avoid Chinese characters and unsupported special characters in device names.
- Before batch-enabling a coin, confirm every selected CID needs it.
- Some protected CIDs can be read-only for wallet configuration.
`,"./en/custom-management/guide/04-pool-nodes.md":`---
id: poolNodes
slug: pool-nodes
title: Pool Nodes and Inside Fees
navTitle: Pool Nodes
description: Use the Pool Nodes page to view BTC, FB, LTC, DOGE, and BELLS live node data, and manage inside and official fee rates.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 4
---

# Pool Nodes and Inside Fees

![Pool Nodes fee workspace](/image/docs/custom-management/features/zh/pool-nodes.png)

*Pool Nodes shows live node data by coin and lets operators maintain PoolNode-specific fee settings.*

The Pool Nodes page is for PoolNode scenarios. It is independent from traditional RustMinerSystem proxy wallet configuration. Inside fee settings on this page apply to pool-node clients with the same CID.

## Supported Coins

| Tab | Config coin |
| --- | --- |
| BTC | PI-BTC |
| FB | PI-FB |
| LTC | VA-LTC |
| DOGE | VA-DOGE |
| BELLS | VA-BELLS |

Switching a tab reloads the node list, online devices, offline devices, and total hashrate for that coin.

## Summary Cards

| Metric | Description |
| --- | --- |
| Management scopes | Visible CIDs for the selected coin. |
| Online devices | Total online devices for the selected coin. |
| Offline devices | Total offline devices for the selected coin. |
| Hashrate | Total live node hashrate for the selected coin. |

The search box filters by CID, email, or custom name.

## Node List

The list includes CID, custom name, live hashrate, online/offline devices, fee email, official fee, inside fee, and actions.

The fee email must be registered in the RUST pool-node page. Do not substitute a pool-website email.

## Inside Fee

Click \`Inside Fee\` on a row to set the inside fee for that CID and coin.

Requirements:

- Use an email already registered in the RUST pool-node page.
- Enter a percentage from \`0\` to \`5\`.
- Inside fee is not included in the official bill ratio.

## Official Fee

Accounts with the required permission can set \`Official Fee\`. Other accounts usually only see inside-fee actions or read-only node data.

Before changing an official fee, confirm the target CID, coin, fee email, and business or finance agreement.

## Difference From Service Management

| Page | Manages |
| --- | --- |
| Service Management | Coin permissions, wallet fee configuration, historical versions, and client details. |
| Pool Nodes | Pool-node live data, online/offline devices, inside fees, and official fees. |

For traditional proxy fee settings, check Service Management first. For PoolNode customers, check this page first.

## Operational Advice

- Confirm the selected coin tab before saving a fee.
- Search by CID or email before operating on long lists.
- Do not confuse inside fee with official fee.
- Refresh after saving and confirm the ratio updated in the list.
`,"./en/custom-management/guide/05-audits-permissions.md":`---
id: auditsPermissions
slug: audits-permissions
title: Audits and Permission Assignment
navTitle: Audits & Permissions
description: Use an account with audit permission to approve wallet configuration changes and maintain account visibility and operation scope.
category: operations
categoryTitle: Operations
categoryOrder: 3
order: 5
---

# Audits and Permission Assignment

\`Audit List\` and \`Permission Assignment\` centralize high-risk configuration review and account scope management.

## Audit List

The audit list handles wallet configuration requests submitted by customers or downstream operators.

| Type | Description |
| --- | --- |
| Add wallet | Add a wallet configuration for one CID and coin. |
| Edit wallet | Change wallet address, subaccount, ratio, device name, or pool strategy. |
| Delete wallet | Delete an existing wallet configuration. |

The page has \`Pending\`, \`Approved\`, and \`All Requests\` tabs. Each record includes CID, custom name, coin, wallet address, subaccount, ratio, device name, pool mode, protocol, version, and submitted time.

## Audit Operations

1. Search by request ID, CID, custom name, coin, wallet address, device name, or version.
2. Review pending requests.
3. Check CID, coin, ratio, device name, and version.
4. Approve one record or batch approve selected records.
5. Delete clearly incorrect or duplicate requests when needed.

Approved wallet changes become eligible to take effect. Delete actions are also production writes, so confirm they are not still needed.

## Permission Assignment

Permission Assignment manages which accounts can see and operate which custom builds. An administrator selects a parent account and attaches other accounts under it.

| Area | Purpose |
| --- | --- |
| Accounts | Total manageable accounts. |
| Current children | Direct children under the selected parent. |
| Current parent | The CID currently being inspected. |
| Permission structure | Browse child accounts and descend into the hierarchy. |
| Assign account | Attach an account to the current parent. |

## Changing Ownership

To assign an account, open \`Permission Assignment\`, confirm the current parent, search for the target account, select it, and click \`Assign\`.

To remove an account, find it in the current parent's child list and click \`Remove\`. The account is removed from that parent scope.

## Permission Impact

- The dashboard only counts CIDs visible to the current account.
- Service Management only lists services in the current account scope.
- Accounts without the required permission cannot access Audit List or Permission Assignment.
- Wallet configuration submitted by downstream accounts still requires review by an account with audit permission.

## Safety Advice

- During audit, confirm CID, coin, ratio, and version first.
- Before batch approval, confirm every selected request belongs to the same intended change.
- After permission changes, ask the downstream account to sign in again and verify its visible scope.
- Avoid assigning too many unrelated customers to one standard management account.
`,"./en/poolnode/guide/01-overview.md":`---
id: overview
slug: 
title: PoolNode documentation overview
navTitle: Overview
description: Learn PoolNode node groups, configuration center, operations console, mining ports, pool website, revenue tools, PoolNodeAPP, and Open API.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---


# PoolNode Documentation

PoolNode is the self-hosted pool-node module in the RustMinerSystem family. It is for operators who need a pool website, user registration, worker and earnings queries, and per-coin node-fee configuration. Unlike the regular third-party pool proxy, PoolNode organizes mining ports, the public website, user accounts, revenue settings, payout addresses, PoolNodeAPP, and Open API access around a CODE/TOKEN node group.

For RustMinerSystem server installation, backend security, and regular proxy-port configuration, read the [RustMinerSystem documentation](/document/rustminersystem). This collection focuses on PoolNode workflows.

## When To Use PoolNode

- You need your own pool-node entry instead of only proxying a third-party pool.
- You want a user-facing pool website for registration, workers, hashrate, earnings, and payout logs.
- You need to maintain node fees, revenue mailboxes, payout addresses, and thresholds by coin.
- You run multiple servers as one node group and want shared ports, query data, and part of the operations configuration.
- You plan to connect PoolNodeAPP or build your own user-facing tool.

## Backend Page Structure

| Area | Purpose |
| --- | --- |
| Coin filter | Top horizontal coin menu showing supported coins and fee rates. Changing it refreshes the current coin metrics and ports. |
| Configuration center | Manages website access, operations tools, APP communication, Open API entry, and node login state. |
| Operations console | Shows node guidance, tutorial entry, refresh action, and revenue shortcuts. |
| Port workbench | Shows port status, protocol, region, local connections, latency, and add/edit/delete actions for the active coin. |

## Basic Enablement Flow

1. Open "Pool Node" in the RustMinerSystem backend.
2. Activate with an existing CODE/TOKEN or apply for a new node.
3. Choose the target coin from the top coin tabs.
4. Add PoolNode mining ports, choose protocol and access region, and test connectivity.
5. Configure public website access, route, template, logo, announcement, HTTPS, and certificate.
6. Register a revenue mailbox, then configure node fees, payout addresses, thresholds, subaccount fees, rebates, and small withdrawals.
7. Configure PoolNodeAPP communication and confirm the node invitation code.
8. Open the pool website and verify mining address, registration, login, query, and APP access flows.

Accounts are not shared across different CODE/TOKEN node groups. Users must register under the current node website before mining and querying data in the current node group.

## Feature Chapters

| Chapter | Use it for |
| --- | --- |
| [Node activation and identity](/document/poolnode/activation) | Apply for a node, activate an existing node, understand CODE/TOKEN, and exit the current node login state. |
| [Mining ports](/document/poolnode/mining-ports) | Create PoolNode mining ports, choose protocol and access region, test connectivity, and manage website display addresses. |
| [Pool website](/document/poolnode/website) | Configure public access, website route, template, logo, announcements, HTTPS, and certificates. |
| [Revenue and fees](/document/poolnode/revenue) | Register revenue mailboxes, query earnings and payout logs, set node fees, manage subaccounts, and request small withdrawals. |
| [PoolNodeAPP](/document/poolnode/app-api) | Configure PoolNodeAPP communication, invitation code behavior, and user-side validation. |
| [Open API](/document/poolnode/api-notes) | User-facing PoolNode APIs for custom frontends, mobile apps, and third-party integrations. |
| [Operations](/document/poolnode/operations) | Monitor metrics, node sync logs, multi-server changes, and incident checks. |

## Shared And Local Configuration

Synchronized settings affect the whole CODE/TOKEN node group, including port definitions, node fees, revenue mailboxes, user data, and part of the public website configuration. Local settings affect only the current server, such as whether a port is displayed on the website, a custom displayed mining address, website port, route, and certificate state.
`,"./en/poolnode/guide/02-activation.md":`---
id: poolnodeActivation
slug: activation
title: Node activation and identity
navTitle: Activation
description: Apply for a PoolNode identity, activate a node with CODE and TOKEN, and understand how same-group servers share data.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 2
---

# Node Activation And Identity

PoolNode activation binds the current RustMinerSystem backend to a PoolNode node group. The node group is identified by \`CODE\` and \`TOKEN\`; every server that uses the same pair joins the same group.

## Function Purpose

Use activation when you want this server to participate in PoolNode website, mining-port, user-query, and revenue workflows. Without activation, the PoolNode dashboard shows the activation page instead of the operations console.

## Apply For A New Node

1. Open \`Pool Node\` in the backend.
2. Choose the \`Apply Node\` tab.
3. Enter a node name. Chinese names are supported.
4. Complete the captcha verification.
5. After success, download and store the \`code-token.txt\` backup file.

The generated \`CODE\` and \`TOKEN\` are the identity of the node group. Keep them offline or in a password manager. Anyone with both values can activate another server into the same node group.

## Activate An Existing Node

1. Open \`Pool Node\`.
2. Choose the \`Activate Node\` tab.
3. Enter the existing \`CODE\` and \`TOKEN\`.
4. Complete captcha verification.
5. Wait for the dashboard to load the node configuration, ports, templates, revenue settings, and statistics.

After activation, the dashboard shows the coin tabs, configuration center, revenue shortcuts, node metrics, and mining-port workbench.

## Same-Group Behavior

Servers activated with the same \`CODE\` and \`TOKEN\` share the node group. Typical shared data includes user records, query data, node fee configuration, and synchronized mining-port definitions. Current-server display options, website route, and certificate state may still be local to the server.

Before adding a synchronized port, confirm the same port is not already occupied on every server in the group. A conflict on one server can make the group look partly synchronized but fail on that host.

## Exit The Current Node

The configuration center includes \`Node Login State\` and \`Exit Current Node\`. This only removes the current backend login relationship with the node. It does not delete the node identity. You can activate again later with the same \`CODE\` and \`TOKEN\`.

## Quick Checks

- \`CODE\` and \`TOKEN\` are backed up.
- Every server that should be in the group uses the same pair.
- Servers that should be isolated use different pairs.
- After activation, refresh the PoolNode dashboard and confirm the current node name is correct.
`,"./en/poolnode/guide/03-mining-ports.md":`---
id: poolnodeMiningPorts
slug: mining-ports
title: Mining ports
navTitle: Mining Ports
description: Create and manage PoolNode mining ports, protocols, access regions, connectivity tests, local display addresses, and the port workbench.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 3
---


# Mining Ports

PoolNode mining ports are the addresses end-user miners connect to. The port workbench follows the active coin tab and shows status, port, remark, protocol, region, local connection count, latency, and actions.

## What This Page Controls

Use mining ports to publish PoolNode access for a specific coin. Port definitions are synchronized to the same CODE/TOKEN node group, while website display settings can be adjusted per server.

## Create A Port

1. Open \`Pool Node\`.
2. Choose the target coin in the top coin tabs.
3. Click \`Add Port\` in the port workbench.
4. Fill synchronized settings: coin, port, remark, protocol, and access region.
5. Run the connectivity test after choosing a region.
6. Fill local display settings: website visibility and custom displayed address.
7. Save the port.

New ports are synchronized to every server in the same node group. Confirm the port is free on all same-group servers before saving.

## Synchronized Settings

| Setting | Description |
| --- | --- |
| Coin | The coin supported by this port. |
| Port | The local listening port for miners. |
| Remark | Operations note for line, region, or purpose. |
| Protocol | TCP, TLS/SSL, TTS, RMS, RMS2, RMS3, RMS3(Zstd), or other supported protocol shown by the backend. |
| Access region | Backend region for the selected coin; test connectivity before publishing. |

If you need to change coin, protocol, port, or access region, delete and recreate the port.

## Local Display Settings

| Setting | Description |
| --- | --- |
| Show mining address on website | Controls whether this port appears in the current server website's mining-address list. |
| Custom displayed mining address | Overrides the default host and port only for website display. |

Use a custom displayed address when the public domain, reverse proxy, or load balancer differs from the backend host.

## Port Workbench Checks

- Status is running or error.
- Port and remark match the plan.
- Protocol matches the public instructions.
- Access region is correct.
- Local connection count matches expected miner scale.
- Latency is stable.
`,"./en/poolnode/guide/04-website.md":`---
id: poolnodeWebsite
slug: website
title: Pool website
navTitle: Pool Website
description: Configure PoolNode public website access, website port, custom route, template, display content, HTTPS mode, and certificate.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 4
---


# Pool Website

PoolNode includes a user-facing pool website. It displays mining addresses, opens user registration, and provides worker, hashrate, earnings, payout, and account queries.

## What This Page Controls

The \`Website Access\` section in the configuration center manages public access, website route, template, display content, HTTPS, and certificate.

## Public Access

\`Public website access\` controls whether the pool website is reachable from the public network. It does not stop mining ports.

## Website Route

| Setting | Description |
| --- | --- |
| Website port | HTTP/HTTPS port for the pool website. |
| Custom route | Optional path such as \`pool\`. Do not include protocol, domain, leading slash, trailing slash, or query string. |

Saving the route or port restarts the website service. Verify the preview URL after saving.

## Website Template

You can use the built-in template or a remote template version. Non-default templates are downloaded by the node. The dialog shows template cover, versions, download status, refresh status, and save action. If download fails, check whether the server can access GitHub or the configured template source.

## Website Display Content

Manage logo, website name, main title, subtitle, notice title, footer HTML, logo rotation, node-fee visibility, and JSON import/export. Export a JSON backup before major changes.

## HTTPS And Certificate

Built-in HTTPS should usually stay disabled when Nginx, Cloudflare, or another HTTPS reverse proxy already terminates TLS. The certificate dialog can upload custom certificate and key or restore the built-in certificate. The website service restarts after saving.
`,"./en/poolnode/guide/05-revenue.md":`---
id: poolnodeRevenue
slug: revenue
title: Revenue and fees
navTitle: Revenue Fees
description: Register revenue mailboxes, query earnings and payouts, configure node fees, manage subaccount rebates, and request small withdrawals.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 5
---


# Revenue And Fees

PoolNode revenue tools appear both as operations-console shortcuts and in the configuration center's \`Operations\` section. They cover revenue mailbox registration, revenue queries, node fees, subaccounts, rebates, observer entry, and small withdrawals.

## Shortcut Entries

| Entry | Purpose |
| --- | --- |
| Revenue mailbox registration | Register the mailbox used for node fee, payout address verification, and rebates. |
| Revenue query | Query earnings, payout logs, payout address, and payout threshold. |
| Node fee | Maintain per-coin node fee and revenue mailbox. |
| Subaccount management | Manage independent fee, rebate, and observer entry. |
| Small withdrawal | Query small balance and submit withdrawal request. |

The revenue mailbox is not a mining account. It is only used for operations settlement.

## Revenue Query And Payout Address

Choose a coin and revenue mailbox to load revenue overview, revenue logs, payout logs, current payout address, and threshold. Saving a payout address sends an email code to the revenue mailbox.

## Node Fee

Save the fee percentage and revenue mailbox by coin. Confirm the active coin before saving and keep the fee inside the allowed input range.

## Subaccount Management

Use subaccount management to set independent fees, reset to the node default fee, configure rebate percentage and rebate mailbox, remove rebates, and open the administrator observer entry.

## Small Withdrawal

Small withdrawal handles balances below the automatic payout threshold. If the payout address is missing, configure it in revenue query first.
`,"./en/poolnode/guide/06-app-api.md":`---
id: poolnodeAppApi
slug: app-api
title: PoolNodeAPP Usage
navTitle: PoolNodeAPP
description: Configure PoolNodeAPP communication, check node name and invitation code, and validate mobile registration, login, and query flows.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 6
---


# PoolNodeAPP Usage

PoolNodeAPP is the mobile entry for PoolNode end users. It covers mobile registration, login, and account queries. Open API documentation is separated into the [Open API](/document/poolnode/api-notes) category.

## Function Purpose

Use APP communication configuration to bind the mobile app to the current PoolNode website or a dedicated API endpoint for the same node group. If it is not configured, users may not be able to register, log in, or query data from the APP.

## Configure APP Communication

1. Open "Configuration Center".
2. Choose "Docs And API".
3. Open "APP Communication Configuration".
4. Review the current website address, node name, and invitation code.
5. Enter the "APP API Access Address".
6. Save the configuration.
7. Click "Reload" or reopen the dialog to confirm the invitation code and saved URL.

The address must be reachable by end users. If public website access is enabled, the current website address is usually the correct value. If you operate a dedicated APP communication gateway for the same node group, use that public gateway address instead.

## Node Name And Invitation Code

"Node name" is shown in the APP user side. "Invitation code" is the numeric code users enter when registering to the current node, and it is generated after the communication address is saved.

If users are registered into the wrong node group, check whether the APP address and invitation code match the current CODE/TOKEN node group.

## Pre-Release Validation

- A new user can register with the invitation code.
- Login reaches the current node group.
- Worker, hashrate, revenue, and payout queries show expected data.
- The APP address uses a valid HTTPS certificate if served over HTTPS.
- Cross-node data does not appear when using a different CODE/TOKEN group.
`,"./en/poolnode/guide/07-operations.md":`---
id: poolnodeOperations
slug: operations
title: PoolNode operations
navTitle: Operations
description: Monitor PoolNode metrics, node synchronization, multi-server changes, website reachability, port incidents, and recovery workflows.
category: operations
categoryTitle: Operations
categoryOrder: 4
order: 42
---


# PoolNode Operations

The PoolNode dashboard is the operations console for the current node group. It combines coin filters, configuration center, revenue shortcuts, node metrics, synchronization status, and the port workbench.

## Daily Checks

- Active coin is correct.
- Device count is close to expected user miners.
- 10-minute hashrate and 24-hour hashrate are reasonable.
- Sync success and failure counts are stable.
- Port status, local connection count, latency, and region are normal.

Click the sync metric to open the node synchronization log. Check last sync time and failures after changing ports or shared settings.

## Multi-Server Changes

1. Check target port availability on every server.
2. Add or delete synchronized ports from one backend.
3. Refresh every server's PoolNode dashboard.
4. Confirm the port row appears and runs on every server.
5. Check local website display addresses.
6. Open the public website and confirm only planned mining addresses are visible.

## Website, Mining, APP, And API Checks

For website incidents, check public access, route, firewall, HTTPS proxy, certificate, and restart state. For mining incidents, check user registration, current CODE/TOKEN group, port status, access-region test, node fee, revenue mailbox, payout address, and threshold. For APP and API, confirm the public APP address, invitation code, API base path, authorization header, and captcha flow.

## Recovery Notes

Back up CODE/TOKEN, website display JSON, custom certificate and key, website route and port, and current fee/payout settings. During recovery, activate the replacement backend with the same CODE/TOKEN and verify ports, website, revenue, APP, and API before publishing the new address.
`,"./en/poolnode/guide/08-api-notes.md":`---
id: poolnodeApiNotes
slug: api-notes
title: API Usage Notes
navTitle: API Usage Notes
description: PoolNode Open API: API Usage Notes.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 7
---


# API Usage Notes

This chapter explains the PoolNode user-facing API base URL, authorization header, captcha flow, and coin parameter conventions.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

此 API 为 PoolNode 用户端开放接口，可用于开发自有用户前端、APP、管理工具或第三方查询工具。

注意：

接口调用地址为

\`\`\`
用户端访问地址:端口+安全地址
(如果未设置安全地址，则调用路径为用户端访问地址:端口)

例：

例如您的用户端访问地址为 http://127.0.0.1/{安全地址}/
则 API 调用地址为 http://127.0.0.1/{安全地址}/{API URL}

如未设置安全地址, 则直接调用根路径即可
\`\`\`

【**注意**】 **所有接口除登录外，均需要在请求头使用Authorization字段来传入token以验证身份, token获取方式详见**[**登录、获取TOKEN**](/document/poolnode/api-login-token)**,   调用其他接口时header应传入**

请求头的\`Content-Type\` 应为 \`application/json\`

\`\`\`
Authorization: Bearer 获取到的TOKEN
\`\`\`

部分接口需要传入滑动验证码成功后的返回值,   关于滑动验证码调用请参考[滑动验证码](/document/poolnode/api-captcha)。

**注意：**

由于历史原因，所有接口需要传入币种的参数均需要加入特殊标记，例如BTC需要传PI-BTC,  以下为币种参数对照表。

BTC:  **PI-BTC**

LTC: **VA-LTC （赠币跟随主币, 例如DOGE为VA-DOGE）**

KAS: **KAS**

ETC: **ETC**

## Legacy Source

- [API使用注意事项(必读)](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/api-shi-yong-zhu-yi-shi-xiang-bi-du.md)
`,"./en/poolnode/guide/09-api-captcha.md":`---
id: poolnodeApiCaptcha
slug: api-captcha
title: Captcha Invocation And Token
navTitle: Captcha Invocation And Token
description: PoolNode Open API: Captcha Invocation And Token.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 8
---


# Captcha Invocation And Token

Some user-facing APIs require a successful slider-captcha token before the request can be submitted.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

由于部分接口需要传入滑动验证码返回值， WEB端可通过iframe嵌入指定路径来调用验证码组件，通过postMessage方式拿到成功、失败以及关闭的回调。APP端目前仅支持uniapp开发的APP，通过webview以及uniappSDK可进行验证码插件调用。

以携带了安全地址的访问地址为例（如未设置安全地址，则不需要携带自定义安全地址这一层路径）

\`\`\`
// 验证码插件路径
/captcha/html/index.html

// 例如您的用户端访问地址为: 
http://127.0.0.1:3333/anquandizhi/

// 滑动验证码插件访问地址则为:
http://127.0.0.1:3333/anquandizhi/captcha/html/index.html
\`\`\`

将iframe或webview的src设置为插件访问地址，即可调用滑动验证码，当滑动验证码发生事件时，WEB端或APP端将收到postMessage响应，以下为父页面收到响应示例。

**WEB端**

\`\`\`
// WEB端

<script>
window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) return;

    const message = event.data;
    if (typeof message === "object") {
        console.log("CAPTCHA:", message);
    }
});
<script>
\`\`\`

事件发生时，插件页面会给父页面响应一个object，以下为object描述。

\`\`\`javascript
// 验证通过, data字段为验证成功后的返回值
{
    action: 'success',
    data: String
}

// 验证失败, data字段为验证失败后返回的失败明细
{
    action: 'error',
    data: Object
}

// 验证码被关闭
{
    action: 'close'
}
\`\`\`

Uniapp端使用webview组件调用远程服务器插件访问地址即可调用，给WEBVIEW绑定handleMessage即可用来接收验证码插件响应，具体事件监听请参考uniapp官方文档。

## Legacy Source

- [调用、获取滑动验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/diao-yong-huo-qu-hua-dong-yan-zheng-ma.md)
`,"./en/poolnode/guide/10-api-send-login-email.md":`---
id: poolnodeApiSendLoginEmail
slug: api-send-login-email
title: Send Login Email Code
navTitle: Send Login Email Code
description: POST /api/email: Send Login Email Code.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 9
---


# Send Login Email Code

This chapter documents the request shape, parameters, and response for \`POST /api/email\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
\`\`\`

滑动验证码返回值获取请参考[调用、获取滑动验证码](/document/poolnode/api-captcha)

## Legacy Source

- [发送登录邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-deng-lu-you-xiang-yan-zheng-ma.md)
`,"./en/poolnode/guide/11-api-send-user-email.md":`---
id: poolnodeApiSendUserEmail
slug: api-send-user-email
title: Send User Operation Email Code
navTitle: Send User Operation Email Code
description: POST /api/user/email: Send User Operation Email Code.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 10
---


# Send User Operation Email Code

This chapter documents the request shape, parameters, and response for \`POST /api/user/email\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

用户登录之后，一些用户操作相关接口需要获取邮箱验证码,  例如修改、绑定支付钱包地址等操作，统一通过此接口发送邮件验证码。

\`\`\`
URL: 
/api/user/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
\`\`\`

滑动验证码返回值获取请参考[调用、获取滑动验证码](/document/poolnode/api-captcha)

## Legacy Source

- [发送用户相关操作邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-yong-hu-xiang-guan-cao-zuo-you-xiang-yan-zheng-ma.md)
`,"./en/poolnode/guide/12-api-login-token.md":`---
id: poolnodeApiLoginToken
slug: api-login-token
title: Login And Get TOKEN
navTitle: Login And Get TOKEN
description: POST /api/user/login: Login And Get TOKEN.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 11
---


# Login And Get TOKEN

This chapter documents the request shape, parameters, and response for \`POST /api/user/login\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/user/login

METHOD: 
POST

REQUEST BODY:
{
    email: String,    // 登录的邮箱地址
    code: String      // 获取到的邮箱验证码
}

RESULT:
{
    "status": 0,
    "error": null,
    "data": Token
}
\`\`\`

发送邮箱验证码请参考[发送登录邮箱验证码](/document/poolnode/api-send-login-email)

后续所有接口都需要在请求头内加入Authorization字段，值为Bearer {Token}，用来过身份验证。

\`\`\`
// headers
{
    Authorization: Bearer Token
}
\`\`\`

## Legacy Source

- [登录、获取TOKEN](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/deng-lu-huo-qu-token.md)
`,"./en/poolnode/guide/13-api-user-info.md":`---
id: poolnodeApiUserInfo
slug: api-user-info
title: Get User Basic Info
navTitle: Get User Basic Info
description: GET /api/user/info: Get User Basic Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 12
---


# Get User Basic Info

This chapter documents the request shape, parameters, and response for \`GET /api/user/info\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/user/info

METHOD: 
GET

RESULT:
{
    "email": String,        // 用户的主账号邮箱地址
    "project_id": Number,   // 无需关注
    "user_id": Number       // 用户uid
}
\`\`\`

## Legacy Source

- [获取用户基础信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-yong-hu-ji-chu-xin-xi.md)
`,"./en/poolnode/guide/14-api-subaccount-list.md":`---
id: poolnodeApiSubaccountList
slug: api-subaccount-list
title: Get Subaccount List
navTitle: Get Subaccount List
description: GET /api/subaccount/list?coin={coin}: Get Subaccount List.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 13
---


# Get Subaccount List

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/list?coin={coin}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/list?coin={coin}

METHOD: 
GET

PARAMS:
coin 传入当前选中的币种（子账号列表中会携带选中币种的实时算力）

RESULT:
[
    {
        "hashrate": "1970324836974591.97",    // 传入币种的实时算力
        "id": 149,                            // 子账户的sid
        "name": "504132878",                  // 子账号
        "remark": null                        // 备注
    }
]
\`\`\`

## Legacy Source

- [获取子账号列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zi-zhang-hao-lie-biao.md)
`,"./en/poolnode/guide/15-api-create-subaccount.md":`---
id: poolnodeApiCreateSubaccount
slug: api-create-subaccount
title: Create Subaccount
navTitle: Create Subaccount
description: POST /api/subaccount/new: Create Subaccount.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 14
---


# Create Subaccount

This chapter documents the request shape, parameters, and response for \`POST /api/subaccount/new\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/new

METHOD: 
POST

REQUEST BODY:
{
    name: String,    // 要创建的子账号
    remark: String,  // 子账号备注  
    coin: String     // 币种 'BTC、LTC、ETC、KAS.....'
}
\`\`\`

## Legacy Source

- [创建子账号](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/chuang-jian-zi-zhang-hao.md)
`,"./en/poolnode/guide/16-api-set-payout-address.md":`---
id: poolnodeApiSetPayoutAddress
slug: api-set-payout-address
title: Set Payout Address
navTitle: Set Payout Address
description: POST /api/subaccount/update/address: Set Payout Address.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 15
---


# Set Payout Address

This chapter documents the request shape, parameters, and response for \`POST /api/subaccount/update/address\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/update/address

METHOD: 
POST

REQUEST BODY:

{
    "id": sid,        // 子账户的sid
    "code": code,     // 邮箱验证码
    "coin": form.selectCoin,    // 币种
    "address": form.addr,       // 匿名付款地址
    "amount": form.account      // 起付额 String类型
}
\`\`\`

邮箱验证码请参考[发送用户相关操作邮箱验证码](/document/poolnode/api-send-user-email)

最小起付额数值不得低于下方列表:

BTC:  0.001

FB: 0.1

LTC: 0.01

DOGE: 50

BEL: 1

KAS: 20

ETC: 0.2

## Legacy Source

- [设置付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/she-zhi-fu-kuan-di-zhi.md)
`,"./en/poolnode/guide/17-api-get-payout-address.md":`---
id: poolnodeApiGetPayoutAddress
slug: api-get-payout-address
title: Get Payout Address
navTitle: Get Payout Address
description: POST /api/subaccount/address/info: Get Payout Address.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 16
---


# Get Payout Address

This chapter documents the request shape, parameters, and response for \`POST /api/subaccount/address/info\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/address/info

METHOD: 
POST

PARAMS:
{
    "id": 149,        // 子账号sid
    "coin": "BTC"     // 币种
}

RESULT:
[
    {
        "address": "addres",    // 已设置的支付地址
        "amount": "0.001",    // 已设置的起付额
        "coin": "BTC"        // 币种
    }
]
\`\`\`

## Legacy Source

- [获取付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-fu-kuan-di-zhi.md)
`,"./en/poolnode/guide/18-api-total-worker-status.md":`---
id: poolnodeApiTotalWorkerStatus
slug: api-total-worker-status
title: Get Total Online And Offline Worker Count
navTitle: Get Total Online And Offline Worker Count
description: GET /api/user/workers?coin={coin}: Get Total Online And Offline Worker Count.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 17
---


# Get Total Online And Offline Worker Count

This chapter documents the request shape, parameters, and response for \`GET /api/user/workers?coin={coin}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/user/workers?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "lost": null || Number,        // 失效数量
    "offline": null || Number,     // 离线数量
    "online": null || Number       // 在线数量
}
\`\`\`

此接口是获取所有子账号的数据统计之和，如需获取指定子账号下设备数量，请参考获取指定子账号设备数量接口。

## Legacy Source

- [获取所有子账号矿机在线、离线数量总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-kuang-ji-zai-xian-li-xian-shu-liang-zong-he.md)
`,"./en/poolnode/guide/19-api-total-hashrate.md":`---
id: poolnodeApiTotalHashrate
slug: api-total-hashrate
title: Get Total Subaccount Hashrate
navTitle: Get Total Subaccount Hashrate
description: GET /api/user/hashrate?coin={coin}: Get Total Subaccount Hashrate.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 18
---


# Get Total Subaccount Hashrate

This chapter documents the request shape, parameters, and response for \`GET /api/user/hashrate?coin={coin}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/user/hashrate?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "hashrate": null,        // 实时算力
    "hashrate1440": null     // 24小时平均算力
}
\`\`\`

## Legacy Source

- [获取所有子账号算力总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-zong-he.md)
`,"./en/poolnode/guide/20-api-total-hashrate-chart.md":`---
id: poolnodeApiTotalHashrateChart
slug: api-total-hashrate-chart
title: Get Total Subaccount Hashrate Chart
navTitle: Get Total Subaccount Hashrate Chart
description: GET /api/user/hashrate/detail?coin={coin}&mode={mode}: Get Total Subaccount Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 19
---


# Get Total Subaccount Hashrate Chart

This chapter documents the request shape, parameters, and response for \`GET /api/user/hashrate/detail?coin={coin}&mode={mode}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/user/hashrate/detail?coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
mode传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
\`\`\`

## Legacy Source

- [获取所有子账号算力曲线总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-qu-xian-zong-he.md)
`,"./en/poolnode/guide/21-api-subaccount-hashrate-chart.md":`---
id: poolnodeApiSubaccountHashrateChart
slug: api-subaccount-hashrate-chart
title: Get Subaccount Hashrate Chart
navTitle: Get Subaccount Hashrate Chart
description: GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}: Get Subaccount Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 20
---


# Get Subaccount Hashrate Chart

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
sid 传入指定子账号sid
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
\`\`\`

## Legacy Source

- [获取指定子账号算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-qu-xian.md)
`,"./en/poolnode/guide/22-api-total-profit.md":`---
id: poolnodeApiTotalProfit
slug: api-total-profit
title: Get Total Subaccount Earnings
navTitle: Get Total Subaccount Earnings
description: GET /api/user/profit?coin={coin}: Get Total Subaccount Earnings.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 21
---


# Get Total Subaccount Earnings

This chapter documents the request shape, parameters, and response for \`GET /api/user/profit?coin={coin}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/user/profit?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
\`\`\`

## Legacy Source

- [获取所有子账号收益总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-shou-yi-zong-he.md)
`,"./en/poolnode/guide/23-api-subaccount-status.md":`---
id: poolnodeApiSubaccountStatus
slug: api-subaccount-status
title: Get Subaccount Hashrate And Worker Status
navTitle: Get Subaccount Hashrate And Worker Status
description: GET /api/subaccount/hashrate?coin={coin}&sid={sid}: Get Subaccount Hashrate And Worker Status.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 22
---


# Get Subaccount Hashrate And Worker Status

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/hashrate?coin={coin}&sid={sid}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/hashrate?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
{
    "avg_hashrate1440": "0",    // 24小时平均算力
    "hashrate": "0",            // 当前算力
    "lost": 0,                  // 失效设备数量
    "offline": 0,               // 离线数量
    "online": 0                 // 在线数量
}
\`\`\`

## Legacy Source

- [获取指定子账号算力、在线离线信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-zai-xian-li-xian-xin-xi.md)
`,"./en/poolnode/guide/24-api-coin-hashrate-list.md":`---
id: poolnodeApiCoinHashrateList
slug: api-coin-hashrate-list
title: Get Coin Hashrate And Worker List
navTitle: Get Coin Hashrate And Worker List
description: GET /api/coin/hashrate: Get Coin Hashrate And Worker List.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 23
---


# Get Coin Hashrate And Worker List

This chapter documents the request shape, parameters, and response for \`GET /api/coin/hashrate\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/coin/hashrate

METHOD: 
GET

RESULT:
[
    {
        "coin": "BTC",
        "hashrate": "1.355771137822993e15",
        "offline": "0",
        "online": "7"
    },
    {
        "coin": "KAS",
        "hashrate": "4277000000000",
        "offline": "0",
        "online": "1"
    }
]
\`\`\`

## Legacy Source

- [获取币种算力、设备数量列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-bi-zhong-suan-li-she-bei-shu-liang-lie-biao.md)
`,"./en/poolnode/guide/25-api-subaccount-profit.md":`---
id: poolnodeApiSubaccountProfit
slug: api-subaccount-profit
title: Get Subaccount Earnings
navTitle: Get Subaccount Earnings
description: GET /api/subaccount/profit?coin={coin}&sid={sid}: Get Subaccount Earnings.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 24
---


# Get Subaccount Earnings

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/profit?coin={coin}&sid={sid}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/profit?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
\`\`\`

## Legacy Source

- [获取指定子账号收益](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-shou-yi.md)
`,"./en/poolnode/guide/26-api-mining-node-address.md":`---
id: poolnodeApiMiningNodeAddress
slug: api-mining-node-address
title: Get Mining Node Addresses
navTitle: Get Mining Node Addresses
description: GET /api/open/poolnode: Get Mining Node Addresses.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 25
---


# Get Mining Node Addresses

This chapter documents the request shape, parameters, and response for \`GET /api/open/poolnode\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

此接口用来获取PoolNode 后台配置的挖矿地址及端口

\`\`\`
URL: 
/api/open/poolnode

METHOD: 
GET

RESULT:
[
    {
        "endpoint_id": 12,             // 挖矿节点id
        "endpoint_name": "亚洲-1",      // 节点地区
        "coin": "BTC",                // 币种
        "name": "address",            // 挖矿地址（域名或ip）
        "port": 6006,                 // 挖矿端口
        "protocol": 1,                // 地址协议 0为TCP 1为SSL 2为RMS 3为TCP SSL双协议 5为RMS2
        "remark": ""
    },
    {
        "endpoint_id": 12,
        "endpoint_name": "亚洲-1",
        "coin": "BTC",
        "name": "address",
        "port": 6010,
        "protocol": 5,
        "remark": ""
    },
    {
        "endpoint_id": 21,
        "endpoint_name": "通用-1",
        "coin": "KAS",
        "name": "address",
        "port": 8001,
        "protocol": 1,
        "remark": ""
    }
]
\`\`\`

## Legacy Source

- [获取挖矿节点地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-wa-kuang-jie-dian-di-zhi.md)
`,"./en/poolnode/guide/27-api-node-fee.md":`---
id: poolnodeApiNodeFee
slug: api-node-fee
title: Get Node Fee
navTitle: Get Node Fee
description: GET /api/project/fee: Get Node Fee.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 26
---


# Get Node Fee

This chapter documents the request shape, parameters, and response for \`GET /api/project/fee\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/project/fee

METHOD: 
GET

RESULT:
[
    {
        "r": "0.01",     // 费率 需要x100得到百分比
        "coin": "BTC"    // 币种
    },
    {
        "r": "0.01",
        "coin": "FB"
    },
    {
        "r": "0.01",
        "coin": "KAS"
    },
    ...
]
\`\`\`

## Legacy Source

- [获取节点费率](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-jie-dian-fei-l.md)
`,"./en/poolnode/guide/28-api-subaccount-worker-list.md":`---
id: poolnodeApiSubaccountWorkerList
slug: api-subaccount-worker-list
title: Get Workers Under Subaccount
navTitle: Get Workers Under Subaccount
description: GET /api/subaccount/workers?coin={coin}&sid={sid}: Get Workers Under Subaccount.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 27
---


# Get Workers Under Subaccount

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/workers?coin={coin}&sid={sid}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/workers?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin 币种
sid 子账号sid

RESULT:
[
    {
        "avgDelayrate1440": 0,
        "avgHashrate1440": "84690086742710.80",
        "avgRejectrate1440": 0.019684,
        "isCool": true,
        "lastShareTime": 1743580208,
        "realtimeHashrate": "107898741072418.13",
        "status": "active",
        "workerName": "rms01"
    }
]
\`\`\`

## Legacy Source

- [获取指定子账号下矿工列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-xia-kuang-gong-lie-biao.md)
`,"./en/poolnode/guide/29-api-worker-hashrate-chart.md":`---
id: poolnodeApiWorkerHashrateChart
slug: api-worker-hashrate-chart
title: Get Worker Hashrate Chart
navTitle: Get Worker Hashrate Chart
description: GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}: Get Worker Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 28
---


# Get Worker Hashrate Chart

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}

METHOD: 
GET

PARAMS:
mode 
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线
worker 传入矿工列表中拿到的workername
sid 子账号sid

RESULT:
{
    "coin": "btc",
    "hashrates": [
        "88195492702672",
        "85693492909688",
        "89446492599164",
        ...
    ],
    "startTime": 1743494100000,
    "timeInterval": 1800,
    "worker": "rms01"
}
\`\`\`

## Legacy Source

- [获取指定矿工算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-kuang-gong-suan-li-qu-xian.md)
`,"./en/poolnode/guide/30-api-reward-bills.md":`---
id: poolnodeApiRewardBills
slug: api-reward-bills
title: Get Revenue Bill List
navTitle: Get Revenue Bill List
description: GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}: Get Revenue Bill List.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 29
---


# Get Revenue Bill List

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account": null,
            "account_type": 0,
            "ar": "1",                             // 当日费率
            "avg_hashrate": "1738588508492292",    // 结算算力
            "biz_coin": null,
            "coin": "BTC",                         // 币种
            "created_at": "2025-04-04T02:00:13Z",
            "day": "2025-04-03T00:00:00Z",
            "day_profit": "0.0009618284643889825", // 日收益
            "diff": "113757508810854",             // 难度
            "email": null,
            "id": 43215,
            "poolin_type": 0,
            "pplns_day_profit": "0.000010654886997250605",
            "pps_day_profit": "0.0009511735773917318",
            "project_id": null,
            "r": "0.9989999999525025",
            "status": 2,                           // 支付状态, 0未支付, 1支付中, 2已支付
            "subaccount_id": null,
            "updated_at": "2025-04-04T02:00:13Z",
            "user_id": null
        },
        ...
    ],
    "total": 1
}
\`\`\`

## Legacy Source

- [获取收入账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-shou-ru-zhang-dan-lie-biao.md)
`,"./en/poolnode/guide/31-api-payout-bills.md":`---
id: poolnodeApiPayoutBills
slug: api-payout-bills
title: Get Payout Bill List
navTitle: Get Payout Bill List
description: GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}: Get Payout Bill List.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 30
---


# Get Payout Bill List

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account_type": 0,
            "address": "...",                    // 付款地址
            "amount": "0.001920471282518579",    // 付款额
            "coin": "BTC",                            // 支付币种
            "created_at": "2025-04-04T03:24:00Z",
            "id": 5970,
            "ref_reward_ids": [],
            "status": 1,                        // 支付状态 0未支付 1已支付 2支付失败
            "subaccount_id": 149,
            "time": "2025-04-04T00:00:00Z",
            // 交易哈希
            "trans_id": "487021b26291f98061be835fdc06499376ed03b271b07a9d6a00961b49384d2b",
            "updated_at": "2025-04-04T03:24:00Z",
            "user_id": 123999002
}
        ...
    ],
    "total": 1
}
\`\`\`

## Legacy Source

- [获取支付账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-fu-zhang-dan-lie-biao.md)
`,"./en/poolnode/guide/32-api-btc-pool-public-info.md":`---
id: poolnodeApiBtcPoolPublicInfo
slug: api-btc-pool-public-info
title: Get BTC Pool Public Info
navTitle: Get BTC Pool Public Info
description: GET /api/network/poolinfo: Get BTC Pool Public Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 31
---


# Get BTC Pool Public Info

This chapter documents the request shape, parameters, and response for \`GET /api/network/poolinfo\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/network/poolinfo

METHOD: 
GET

RESULT:
[
    {
        "realtimeHashrate": "31577535200606772264",
        "workerNum": 152994,
        "coin": "btc"
    }
]
\`\`\`

## Legacy Source

- [获取BTC矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi.md)
`,"./en/poolnode/guide/33-api-altcoin-pool-public-info.md":`---
id: poolnodeApiAltcoinPoolPublicInfo
slug: api-altcoin-pool-public-info
title: Get Other-Coin Pool Public Info
navTitle: Get Other-Coin Pool Public Info
description: GET /api/network/poolinfo?coin={COIN}: Get Other-Coin Pool Public Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 32
---


# Get Other-Coin Pool Public Info

This chapter documents the request shape, parameters, and response for \`GET /api/network/poolinfo?coin={COIN}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/network/poolinfo?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "ltc": {
        "shares": {
            "shares_1m": 18.972,
            "shares_5m": 18.972,
            "shares_15m": 18.972,
            "shares_1h": 18.972,
            "shares_unit": "T"
        },
        "reject": {
            "1m": 0.0023,
            "5m": 0.0023,
            "15m": 0.0023,
            "1h": 0.0023
        },
        "workers": 3498,
        "users": 14691,
        "total_blocks": 148594,
        "total_rewards": 223357135549860
    }
}
\`\`\`

## Legacy Source

- [获取其他币种矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi.md)
`,"./en/poolnode/guide/34-api-btc-network-info.md":`---
id: poolnodeApiBtcNetworkInfo
slug: api-btc-network-info
title: Get BTC Network Info
navTitle: Get BTC Network Info
description: GET /api/network/hashrate: Get BTC Network Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 33
---


# Get BTC Network Info

This chapter documents the request shape, parameters, and response for \`GET /api/network/hashrate\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/network/hashrate

METHOD: 
GET

RESULT:
[
    {
        "diffculty": "113757508810854",
        "blockReward": 3.125,
        "blockRewardFPPS": 3.15206768,
        "networkHashrate": "850810718614301835264",
        "coin": "btc",
        "theoreticalIncome": 5.6e-7,
        "height": 890513
    }
]
\`\`\`

## Legacy Source

- [获取BTC矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi-2.md)
`,"./en/poolnode/guide/35-api-altcoin-network-info.md":`---
id: poolnodeApiAltcoinNetworkInfo
slug: api-altcoin-network-info
title: Get Other-Coin Network Info
navTitle: Get Other-Coin Network Info
description: GET /api/network/hashrate?coin={COIN}: Get Other-Coin Network Info.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 34
---


# Get Other-Coin Network Info

This chapter documents the request shape, parameters, and response for \`GET /api/network/hashrate?coin={COIN}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/network/hashrate?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "LTC": {
        "algorithm": "Scrypt",
        "block_time": 150,
        "block_reward": 6.25,
        "difficulty": 83619823.71858509,
        "net_hash": "2394296033882057",
        "net_hash_one_day": "2329323019112822",
        "net_hash_half_week": "2393607528868074",
        "net_hash_one_week": "2384617523911691",
        "net_hash_two_weeks": "2342096742781520",
        "last_block": 2872444,
        "reward_unit": "G",
        "rewards_per_unit": "0.00150357",
        "rewards_usd_per_unit": "0.12272167",
        "rewards_cny_per_unit": "0.89221162",
        "rewards_btc_per_unit": "0.00000146",
        "previous_difficulty": 82764268.0298935,
        "previous_difficulty_change": "1.03",
        "previous_difficulty_change_time": "2025-03-30 16:54:01 +0800",
        "previous_difficulty_change_time_ts": 1743324841,
        "next_difficulty_change_seconds": 307432,
        "next_difficulty_time": 1743633340,
        "next_difficulty": 82519562.88018265,
        "next_difficulty_change_rate": -0.013157894736842105
    }
}
\`\`\`

## Legacy Source

- [获取其他币种矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi-2.md)
`,"./en/poolnode/guide/36-api-btc-public-hashrate-chart.md":`---
id: poolnodeApiBtcPublicHashrateChart
slug: api-btc-public-hashrate-chart
title: Get BTC Public Hashrate Chart
navTitle: Get BTC Public Hashrate Chart
description: GET /api/network/hashratedetail: Get BTC Public Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 35
---


# Get BTC Public Hashrate Chart

This chapter documents the request shape, parameters, and response for \`GET /api/network/hashratedetail\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/network/hashratedetail

METHOD: 
GET

RESULT:
{
    "timeInterval": 600,
    "startTime": 1743492900000,
    "hashrates": [
        "31107083202188395151",
        "31060294906903426061",
        "31342220009014338519",
        ...
    ],
    "coin": "btc"
}
\`\`\`

## Legacy Source

- [获取BTC矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-suan-li-qu-xian.md)
`,"./en/poolnode/guide/37-api-altcoin-public-hashrate-chart.md":`---
id: poolnodeApiAltcoinPublicHashrateChart
slug: api-altcoin-public-hashrate-chart
title: Get Other-Coin Public Hashrate Chart
navTitle: Get Other-Coin Public Hashrate Chart
description: GET /api/network/hashratedetail?coin={COIN}: Get Other-Coin Public Hashrate Chart.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 36
---


# Get Other-Coin Public Hashrate Chart

This chapter documents the request shape, parameters, and response for \`GET /api/network/hashratedetail?coin={COIN}\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/network/hashratedetail?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "unit": "T",
    "tickers": [
        [
            1743472800,
            19.308,
            0.0042
        ],
        [
            1743476400,
            19.363,
            0.0029
        ],
        ...
    ]
}
\`\`\`

## Legacy Source

- [获取其他币种矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-suan-li-qu-xian.md)
`,"./en/poolnode/guide/38-api-site-personalization-config.md":`---
id: poolnodeApiSitePersonalizationConfig
slug: api-site-personalization-config
title: Get Site Personalization Config
navTitle: Get Site Personalization Config
description: GET /api/subaccount/address/info: Get Site Personalization Config.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 37
---


# Get Site Personalization Config

This chapter documents the request shape, parameters, and response for \`GET /api/subaccount/address/info\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

\`\`\`
URL: 
/api/subaccount/address/info

METHOD: 
GET

RESULT:
BASE64
\`\`\`

将获得的base64解码后parse，得到配置的config，包含了后台设置的所有个性化配置项。

## Legacy Source

- [获取个性化配置](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-ge-xing-hua-pei-zhi.md)
`,"./en/poolnode/guide/39-api-app-register.md":`---
id: poolnodeApiAppRegister
slug: api-app-register
title: APP User Registration
navTitle: APP User Registration
description: POST https://api.d0gpool.com/app/register: APP User Registration.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 38
---


# APP User Registration

This chapter documents the request shape, parameters, and response for \`POST https://api.d0gpool.com/app/register\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

## 请求 URL

https://api.d0gpool.com/app/register

## 请求方式

POST

## 请求示例

\`\`\`
{
"email": "xxxx",
"code": "323333", //邮箱验证码，同节点登录验证码
"invite_code": 123456 //注意这个是数字
}
\`\`\`

## 请求参数说明

| 参数名          | 类型     | 说明             |
| ------------ | ------ | -------------- |
| email        | String | 邮箱             |
| code         | String | 邮箱验证码，同节点登录验证码 |
| invite\\_code | number | 节点邀请码，注意这个是数字  |

## 成功返回示例

\`\`\`
{
"status": 0, \xA0// status = 1表示邀请码无效，此时url为空
"url": "http://1.2.3.4/a/"
}
\`\`\`

## 返回参数说明

| 参数名 | 说明 |
| --- | --- |
| status | 状态码，\`status = 1\` 表示邀请码无效，此时 \`url\` 为空。 |
| url | 后续 APP 使用的接口地址前缀，例如 \`http://1.2.3.4/a/\`。后台配置地址末尾需要保留斜杠。 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用url继续请求一次到节点使用邮箱登录

## Legacy Source

- [APP端用户注册](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-yong-hu-zhu-ce.md)
`,"./en/poolnode/guide/40-api-app-central-login.md":`---
id: poolnodeApiAppCentralLogin
slug: api-app-central-login
title: APP Centralized Login
navTitle: APP Centralized Login
description: POST https://api.d0gpool.com/app/login: APP Centralized Login.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 39
---


# APP Centralized Login

This chapter documents the request shape, parameters, and response for \`POST https://api.d0gpool.com/app/login\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

## 请求 URL

https://api.d0gpool.com/app/login

## 请求方式

POST

## 请求示例

\`\`\`
{
"email": "xxxx",
"code": "323333"
}
\`\`\`

## 请求参数说明

| 参数名   | 类型     | 说明             |
| ----- | ------ | -------------- |
| email | String | 邮箱             |
| code  | String | 邮箱验证码，同节点登录验证码 |

## 成功返回示例

\`\`\`
{
"status": 0, \xA0
"data": [
 \xA0 \xA0 \xA0  {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"created_at": "2025-09-24T07:39:47Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"name": "test-001", // 节点名称
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"updated_at": "2025-09-24T07:46:01Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"url": "xxx.com/a/" // api 地址
 \xA0 \xA0 \xA0  },
 \xA0 \xA0 \xA0  {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"created_at": "2025-09-24T07:39:47Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"name": "test-002",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"updated_at": "2025-09-24T07:46:01Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"url": "xxx.com/b/"
 \xA0 \xA0 \xA0  }
 \xA0  ]
}
\`\`\`

## 返回参数说明

| 参数名                      | 说明    |
| ------------------------ | ----- |
| status                   | 状态码   |
| data\\[index].created\\_at | 创建时间  |
| data\\[index].name        | 节点名称  |
| data\\[index].updated\\_at | 更新时间  |
| data\\[index].url         | API地址 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用用户选择的节点url继续请求一次至相应节点进行邮箱登录

## Legacy Source

- [APP端中心化登录](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-zhong-xin-hua-deng-lu.md)
`,"./en/poolnode/guide/41-api-app-send-email.md":`---
id: poolnodeApiAppSendEmail
slug: api-app-send-email
title: APP Send Email
navTitle: APP Send Email
description: POST https://api.d0gpool.com/app/send/email: APP Send Email.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 40
---


# APP Send Email

This chapter documents the request shape, parameters, and response for \`POST https://api.d0gpool.com/app/send/email\`.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

## 请求 URL

https://api.d0gpool.com/app/send/email

## 请求方式

POST

## 请求示例

\`\`\`
{
"address": "",//邮箱地址
"token": ""//滑动验证码获取到的token
}
\`\`\`

## 请求参数说明

| 参数名     | 说明             |
| ------- | -------------- |
| address | 邮箱地址           |
| token   | 滑动验证码获取到的token |

## Legacy Source

- [App端发送邮件接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-fa-song-you-jian-jie-kou.md)
`,"./en/poolnode/guide/42-api-app-captcha.md":`---
id: poolnodeApiAppCaptcha
slug: api-app-captcha
title: APP Captcha
navTitle: APP Captcha
description: PoolNode Open API: APP Captcha.
category: open-api
categoryTitle: Open API
categoryOrder: 3
order: 41
---


# APP Captcha

This chapter documents the request shape, parameters, and response for this endpoint.

## Note

The endpoint contract below is carried over from the legacy RustMinerSystem documentation and organized under the current PoolNode documentation structure. Use your actual node address, secure route, and backend version when integrating.

## Endpoint Contract

## 请求 URL

https://api.d0gpool.com/captcha/html/index.html

#### 使用方法

参考文档上方《调用、获取滑动验证码》

## Legacy Source

- [App端 滑动验证码接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-hua-dong-yan-zheng-ma-jie-kou.md)
`,"./en/rms/guide/01-overview.md":`---
id: overview
slug: ""
title: RMS documentation overview
navTitle: Overview
description: Learn RMS local client setup, RMS2/RMS3/RMS3(Zstd) pairing, port mapping, connection compression, monitoring, and rollback planning.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---

# RMS Documentation

RMS is the optional secure local client in the RustMinerSystem ecosystem. It is usually deployed inside the mining-site LAN. Miners connect to local RMS first, and RMS connects to RustMinerSystem server ports through RMS2, RMS3, or RMS3(Zstd), reducing public connection count, compressing traffic, and keeping miner traffic on a controlled path.

For RustMinerSystem server installation, backend security, and regular proxy-port configuration, read the [RustMinerSystem documentation](/document/rustminersystem). This collection focuses on the RMS local client and RMS protocol-port boundaries.

## When To Use RMS

- Many miners share one site and you want fewer public outbound connections.
- Public bandwidth is expensive and traffic compression matters.
- Miners should connect only to local LAN addresses.
- You want to use RMS3 or RMS3(Zstd) high-compression paths.
- You need local visibility into inbound connections, outbound connections, disconnect logs, and resource usage.

If the site has only a few miners, stable network, and enough bandwidth, miners can also connect directly to RustMinerSystem proxy ports without RMS.

## Access Topology

\`\`\`text
Miner -> Local RMS -> RMS2/RMS3/RMS3(Zstd) encrypted compression link -> RustMinerSystem proxy port -> Upstream pool
\`\`\`

RMS does not replace the RustMinerSystem server. The server still owns proxy ports, target pools, fee wallets, statistics, security, and operations. RMS owns local miner access and compressed transmission to the server.

## Feature Chapters

| Chapter | Use it for |
| --- | --- |
| [Installation](/document/rms/installation) | Install RMS3 on Linux and Windows, choose architecture, and understand default access after installation. |
| [Setup and pairing](/document/rms/setup) | First launch, push URL, skip mode, server prerequisites, and pairing workflow. |
| [Port mapping](/document/rms/port-mapping) | Create local listening ports, bind remote RMS addresses, configure coin, protocol, password, and load balancing. |
| [Compression settings](/document/rms/compression) | Choose RMS2/RMS3/RMS3(Zstd), set super compression, compression level, and connection-compression count. |
| [Monitoring and operations](/document/rms/monitoring) | Read CPU, memory, network, connection charts, port status, filters, and security settings. |
| [Troubleshooting](/document/rms/troubleshooting) | Diagnose miner access, server pairing, high rejects, port conflicts, safe-route mistakes, and rollback. |

## Protocol Choices

| Protocol | Description |
| --- | --- |
| RMS2 | RMS compression TLS protocol. It reduces public connection count and compresses part of the data volume. |
| RMS3 | Group compression protocol with higher compression ratio and higher CPU pressure. |
| RMS3(Zstd) | RMS3 variant based on Zstd. It usually has lower CPU pressure than RMS3 with similar connection behavior. |

When using RMS3 or RMS3(Zstd), the server port, local RMS port, coin, password, super compression, and compression level must match. Mismatched settings can prevent miners from connecting, increase rejects, or break statistics.

## Rollout Outline

1. Create a test RMS protocol port on the RustMinerSystem server.
2. Add a matching local RMS port.
3. Connect 1 to 5 test miners.
4. Watch RMS inbound/outbound connections, server port status, upstream workers, and reject rate.
5. Adjust compression level, super compression, and connection-compression count.
6. Increase miner count gradually.
7. Back up RMS client configuration and RustMinerSystem port configuration after the target scale is stable.

RMS3 is sensitive to CPU. If small coins or special miners behave abnormally, first lower compression level or disable super compression for testing.
`,"./en/rms/guide/02-installation.md":`---
id: rmsInstallation
slug: installation
title: RMS installation
navTitle: Installation
description: Install RMS3 on Linux and Windows, understand default access, WebView2, architecture choices, and legacy RMS2 entries.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 2
---

# RMS Installation

RMS3 is the recommended current client. According to the RMS GitHub guide, RMS3 requires RustMinerSystem server \`v4.5.0\` or later when using the RMS3 protocol, and RMS3 is not compatible with RMS1/RMS2 protocol ports. Use the legacy RMS2 installer only when you must connect to an older RMS2 server-side deployment.

Reference source: <https://github.com/EvilGenius-dot/RMS>

## Before Installation

- Choose a device that will stay online in the mining-site LAN.
- Give this device a fixed LAN IP address. If DHCP changes the IP after a reboot, miners may lose the RMS address.
- Prepare root access for Linux installation.
- Open the RMS web port in your LAN firewall if needed. The default web access is \`http://DEVICE_IP:42703\`.
- Prepare the RustMinerSystem server RMS protocol port before connecting miners.

## RMS3 Linux Installation

Switch to root first:

\`\`\`bash
sudo -i
\`\`\`

Run the official GitHub install line:

\`\`\`bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)
\`\`\`

If GitHub is not reachable from the server, the README also provides this alternate line:

\`\`\`bash
bash <(curl -s -L -k https://rustminersystem.com/install.sh)
\`\`\`

The installer opens an interactive menu. Choose \`Install\`, select the CPU architecture, and then choose the download route.

Common architecture options:

| Option | Typical device |
| --- | --- |
| \`x86-64\` | Most Intel/AMD Linux servers and mini PCs. |
| \`aarch64\` | 64-bit ARM devices. |
| \`arm-musleabi\`, \`arm-musleabihf\`, \`armv7-*\` | Older ARM devices. |

The Linux script installs RMS under \`/root/rms\`, configures a service named \`rmservice\` on systemd systems, starts the program, and prints the access address after startup.

## RMS3 Windows Installation

RMS3 provides two Windows builds.

| Build | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-no-gui/rms.exe> |

If the GUI version opens to a blank white screen, install Microsoft Edge WebView2:

\`\`\`text
https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/MicrosoftEdgeWebview2Setup.exe
\`\`\`

After starting the Windows client, open the RMS page from the local machine or LAN and continue with setup and pairing.

## First Access After Installation

After installation, open a browser and visit:

\`\`\`text
http://DEVICE_IP:42703
\`\`\`

Then enter the push address if your deployment provides one, or skip the push flow and add remote server addresses manually.

Recommended first checks:

- The RMS page opens from another device in the LAN.
- The device IP is fixed.
- The RustMinerSystem server RMS protocol port is reachable.
- The local RMS client and server port use the same RMS protocol generation.

## Managing The Linux Script

Running the Linux install script again opens the management menu. The script supports:

- Install.
- Stop RMS.
- Restart RMS.
- Uninstall RMS.

Use the script menu for normal maintenance unless your deployment has wrapped RMS with its own service manager.

## Legacy RMS2 Installation

Only use RMS2 for older deployments that still require RMS2. Do not mix RMS3 clients with RMS2-only server ports.

Linux RMS2:

\`\`\`bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/OLD_2/install.sh)
\`\`\`

Alternate RMS2 line:

\`\`\`bash
bash <(curl -s -L -k https://rustminersystem.com/OLD2_install.sh)
\`\`\`

Windows RMS2:

| Build | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-no-gui/rms.exe> |
| WebView2 installer | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/MicrosoftEdgeWebview2Setup.exe> |

## Next Step

After RMS is installed and reachable, continue to [setup and pairing](/document/rms/setup).
`,"./en/rms/guide/02-setup.md":`---
id: rmsSetup
slug: setup
title: Setup and pairing
navTitle: Setup
description: Configure the RMS local client on first launch, choose push URL or manual mode, and pair it with RustMinerSystem server ports.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 3
---

# Setup And Pairing

RMS sits between local miners and the RustMinerSystem server. The first setup decision is whether to pull configuration from a push URL or skip that flow and add remote addresses manually.

## Function Purpose

Use setup and pairing to make RMS know where the RustMinerSystem server is, which remote RMS protocol ports it should connect to, and what local addresses miners should use.

## Server Prerequisites

Before configuring the local client, prepare the server side:

1. Open RustMinerSystem server backend.
2. Create a proxy port whose listening protocol is RMS2, RMS3, or RMS3(Zstd).
3. Choose the correct coin and upstream pool.
4. If a password is configured on the server port, record it for the local RMS client.
5. If RMS3 settings are used, record super compression and compression level.
6. Confirm the server port is running and reachable from the mining-site network.

The local RMS protocol must match the server listening protocol. RMS3 local ports cannot connect to RMS1 or incompatible server ports.

## First Launch With Push URL

On first launch, RMS displays a push-address input. Use this when your deployment provides a central configuration URL.

1. Enter the push URL.
2. Submit and wait for RMS to fetch configuration.
3. After success, RMS enters the home dashboard.
4. Verify local ports and remote addresses before pointing miners to RMS.

If fetching fails, check whether the URL has expired, whether the current network can reach the server, and whether the server-side configuration is available.

## Skip And Configure Manually

If you do not use a push URL and already know the server IP/domain and RMS protocol port, click \`Skip\`. RMS stores the skip state locally and opens the dashboard. You can then use \`Manual Add\` to create local mappings.

Manual mode is useful for small deployments, testing, or private networks where configuration distribution is handled outside the RMS push system.

## Miner Address

After a local RMS port is created, the port table shows a mining address in this form:

\`\`\`text
stratum+tcp://LOCAL_RMS_IP:LOCAL_PORT
\`\`\`

Copy that address and configure miners to connect to it. Miners should not connect directly to the remote RMS server port unless you are intentionally bypassing RMS.

## Reset Push Address

The program settings menu includes \`Reset Push Address\`. Use it when the old push URL is no longer valid or when you want to return to the first-launch pairing flow. Resetting invalidates the current pushed configuration and returns RMS to the setup page.
`,"./en/rms/guide/03-port-mapping.md":`---
id: rmsPortMapping
slug: port-mapping
title: Port mapping
navTitle: Port Mapping
description: Add and manage RMS local listening ports, remote server addresses, protocols, passwords, and load-balanced upstream peers.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 4
---

# Port Mapping

RMS port mapping creates a local listening port for miners and connects that port to one or more RustMinerSystem server RMS protocol ports.

## Function Purpose

Use port mapping to let miners keep using a local LAN address while RMS handles encrypted compressed communication to the server.

## Add A Manual Port

1. Open the RMS dashboard.
2. Click \`Manual Add\`.
3. Set \`Local Listening Port\`.
4. Choose the coin.
5. Choose RMS3, RMS3(Zstd), or RMS2 as the remote protocol.
6. Enter remote address in \`address:port\` format.
7. Enter the password if the server port requires one.
8. Configure super compression and compression level when using RMS3-family protocols.
9. Add more remote addresses if load balancing is required.
10. Save and verify the port is running.

The coin, remote protocol, password, and compression settings must match the server-side RMS protocol port.

## Remote Address List

Each local port can have multiple upstream peers. RMS distributes incoming connections across available remote addresses. This is the RMS local-client side of load balancing.

Use multiple peers when you have several RustMinerSystem server ports or several server hosts prepared for the same coin and protocol. Keep every peer compatible with the selected coin and protocol.

## Port Table

The RMS port table shows:

| Field | Meaning |
| --- | --- |
| Status | Running, preparing, waiting, or error. |
| Coin | The coin for this local mapping. |
| Remark | Operator note, often using a \`category-title\` pattern. |
| Miner connection address | The local address miners should use; click to copy. |
| Load balancing | Remote peer details and peer count. |
| Inbound connections | Connections entering this local port. |
| Outbound connections | Connections from RMS to remote peers. |
| Type | Auto fetched from push configuration or manually added. |

Manual ports can be stopped, started, edited, and deleted. Auto-fetched ports can be stopped and started, but synchronized fields are controlled by the push configuration.

## Remarks And Filters

The table supports filtering by:

- Remark category.
- Port type: all, auto fetched, or manual.
- Coin.

If you use remarks such as \`farm-a-btc\` or \`building1-ltc\`, the prefix before \`-\` can be used as a category filter.

## Safe Editing Rules

- Do not change a working port during peak mining time without a rollback address.
- Verify \`address:port\` format before saving.
- If a server-side password is set, the local password must be identical.
- When the selected coin is not BTC or LTC, start with conservative compression settings.
`,"./en/rms/guide/04-compression.md":`---
id: rmsCompression
slug: compression
title: Compression settings
navTitle: Compression
description: Configure RMS2, RMS3, RMS3(Zstd), super compression, compression level, and connection-compression count.
category: features
categoryTitle: Feature Usage
categoryOrder: 2
order: 5
---

# Compression Settings

RMS compression has two layers: protocol-level data compression on each port, and connection-count compression for outbound connections.

## Function Purpose

Use compression settings to reduce public bandwidth and outbound connection count while keeping reject rate, CPU load, and latency within acceptable limits.

## Protocol-Level Compression

When adding or editing a local port, choose the remote protocol:

| Protocol | Use case |
| --- | --- |
| RMS2 | Conservative compression and compatibility with RMS2 server ports. |
| RMS3 | Higher compression ratio, higher CPU usage. |
| RMS3(Zstd) | RMS3-style connection behavior with Zstd compression, usually more CPU-friendly. |

The local protocol must match the server listening protocol.

## Super Compression

RMS3 includes \`Super Compression\`. It can greatly reduce traffic volume, especially for BTC and LTC. For smaller or special coins, start with it disabled if abnormal rejects or connectivity issues appear.

If super compression is changed, keep the server-side port and local RMS client consistent.

## Compression Level

RMS exposes low, medium, and high compression levels. Higher levels usually compress more data but increase CPU pressure. Use gradual testing:

1. Start with low or medium.
2. Watch CPU, memory, reject rate, and latency.
3. Increase only after the test miners remain stable.
4. Roll back if rejects increase or RMS CPU stays high.

## Connection Compression Count

The \`Connection Compression\` card opens the connection-mode dialog. RMS3 forces compressed mode and lets you set how many outbound connections a port should compress to.

The lower the value, the fewer outbound public connections and usually the higher the compression effect. The tradeoff is CPU pressure, latency, and possible reject-rate sensitivity.

Recommended starting points:

- Fewer than 1000 miners: test \`1\` to \`2\`.
- Most deployments: test \`1\` to \`6\`.
- Observe each coin and port separately.

Example: if the compression count is \`1\`, and RMS receives 1000 BTC miners plus 1000 LTC miners, outbound connections are grouped by port, so BTC and LTC typically form separate outbound connections.

## Tuning Order

Tune in this order:

1. Confirm the basic connection works with a small miner group.
2. Confirm protocol, coin, and password match.
3. Set connection compression count.
4. Choose compression level.
5. Enable or disable super compression.
6. Expand miner count gradually.
`,"./en/rms/guide/05-monitoring.md":`---
id: rmsMonitoring
slug: monitoring
title: Monitoring and operations
navTitle: Monitoring
description: Monitor RMS CPU, memory, network traffic, connection charts, port status, filters, backend password, safe route, and observer access.
category: operations
categoryTitle: Operations
categoryOrder: 3
order: 6
---

# Monitoring And Operations

The RMS dashboard refreshes runtime data periodically and shows resource usage, connection count, traffic, compression mode, and local port status.

## Dashboard Cards

| Card | What to watch |
| --- | --- |
| CPU / Memory | RMS process pressure and system memory usage. |
| Connections | Inbound miner connections and outbound remote connections. |
| Network Traffic | Receive and transmit traffic trends. |
| Connection Compression | Current mode and outbound compression count. |

If CPU stays high after increasing compression, lower compression level, raise connection count, or split miners across multiple RMS clients.

## Port Operations

The port table supports:

- Copying miner connection address.
- Viewing remote-peer details.
- Filtering by remark, type, and coin.
- Starting and stopping ports.
- Editing or deleting manual ports.

After any change, verify inbound count, outbound count, and server-side worker data.

## Program Settings

The settings menu includes:

| Setting | Use |
| --- | --- |
| Reset Push Address | Return to first-launch configuration flow and invalidate the old pushed configuration. |
| Set Backend Password | Protect RMS backend access. |
| Set Safe Access Route | Put the RMS backend under a private route path to reduce scanning exposure. |
| Switch Connection Mode | Open connection compression settings. |
| Exit Application | Available in desktop/Tauri builds. |

Safe access route changes require a restart and the URL must end with \`/\` when opened, for example \`http://host:port/custom/\`.

## Observer Page

RMS includes an observer-page implementation in the frontend. If enabled by the build and route settings, it provides a read-only entry under \`/observer/\`. Treat it as a public surface and expose it only when your deployment needs it.

## Regular Checks

- RMS process is running.
- Local listening ports are reachable from miners.
- Inbound connections match expected miner count.
- Outbound connections match compression settings.
- Server-side port hashrate and reject rate are normal.
- CPU, memory, and traffic trends are stable.
- Backend password and safe access route are documented securely.
`,"./en/rms/guide/06-troubleshooting.md":`---
id: rmsTroubleshooting
slug: troubleshooting
title: RMS troubleshooting
navTitle: Troubleshooting
description: Diagnose RMS miner access, server pairing, reject-rate spikes, port conflicts, safe-route mistakes, and rollback paths.
category: operations
categoryTitle: Operations
categoryOrder: 3
order: 7
---

# RMS Troubleshooting

Most RMS issues come from mismatched server/client settings, local port reachability, aggressive compression, or route/security changes.

## Miners Cannot Connect To RMS

Check:

- Miners are using the RMS local address, not the remote server port.
- The local listening port is created and running.
- LAN firewall allows miner access to the RMS host and port.
- The port is not occupied by another process.
- The miner URL uses the copied \`stratum+tcp://LOCAL_RMS_IP:PORT\` format when appropriate.

## RMS Cannot Connect To Server

Check:

- Remote address uses \`address:port\` format.
- The RustMinerSystem server RMS protocol port is running.
- Local remote protocol matches the server listening protocol.
- Coin is the same on both sides.
- Password is identical on both sides, or empty on both sides.
- Security group, firewall, or upstream network does not block the server port.

## Reject Rate Increases

Use a conservative rollback path:

1. Lower RMS3 compression level.
2. Disable super compression on both server and local RMS client.
3. Increase connection compression count.
4. Reduce miner count per RMS client.
5. Check upstream pool latency and server CPU.

Small coins or uncommon miner firmware may be more sensitive to aggressive RMS3 settings.

## Outbound Connection Count Is Unexpected

Check:

- Connection compression count.
- Different coins and different local ports form separate outbound groups.
- Multiple remote peers can create more outbound paths.
- Auto-fetched and manual ports may both be running.

## Backend Route Or Password Problem

If the safe access route was configured incorrectly:

- Remember that the route must not start or end with \`/\` during input.
- When visiting it, the final URL should end with \`/\`.
- If the program restarted and the route is lost, use the saved preview URL or local service access method from your deployment notes.

If the backend password was changed and lost, follow your deployment’s reset procedure or restore from a known configuration backup.

## Rollback Plan

Before production rollout, keep:

- A direct RustMinerSystem proxy address for miners.
- RMS client version and port configuration backup.
- RustMinerSystem port JSON backup.
- Original compression count, compression level, and super-compression state.

During a major incident, first return to low compression or disable super compression. If the site is still unstable, point miners back to the direct RustMinerSystem proxy address while RMS is repaired.
`,"./en/rustminersystem/guide/01-overview.md":`---
id: overview
slug: ""
title: RustMinerSystem documentation overview
navTitle: Overview
description: Learn RustMinerSystem third-party pool proxying, PoolNode real-pool mode, optional RMS local compression, and documentation structure.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---
# RustMinerSystem Documentation

![RustMinerSystem English dashboard preview](/image/rust.mp4)

*RustMinerSystem English dashboard preview: inspect the proxy workspace, port list, hashrate charts, and server resource status at a glance.*

> This document records the installation, configuration, runtime, and operations workflow for RustMinerSystem. Replace all placeholders with your real deployment values.

## Overview

RustMinerSystem can work as a proxy for third-party mining pools, allocating any configured share of connected miner hashrate to specified third-party pool wallets or worker names. It can also use PoolNode to build a real self-owned mining pool, where configured fees are distributed directly at the coin settlement layer. RMS is an optional companion tool for sites that need lower bandwidth usage or fewer public connections: miners can connect to local RMS first, then reach RustMiner through an encrypted compressed link. Without RMS, miners can still connect to RustMiner directly.

### Use Cases

- Mining sites need a unified miner access path and controlled hashrate allocation to specified third-party pool wallets.
- Operators need to build a real pool with PoolNode and distribute configured fees at the settlement layer.
- Network environments need optional compression for miner data volume and public connection count.
- Teams need repeatable installation, configuration, and upgrade procedures.

## Operating Modes

### Third-Party Pool Proxy

Use this mode when connecting miners to third-party pools. RustMiner sits between miners and third-party pools, allocating any configured hashrate share to specified pool addresses, wallets, or worker names. Validate connection stability and allocation targets with test miners before scaling up.

### PoolNode Real Pool

Use this mode when operators need to build a real self-owned mining pool. PoolNode provides the pool-node capability, and configured fees are distributed directly at the coin settlement layer. Before deployment, confirm node sync status, network connectivity, settlement configuration, and recovery procedures.

### Optional RMS Local Compression Tool

RMS is not required. It runs locally at the mining site and lets miner traffic reach RustMiner through an encrypted compressed link, reducing transmitted data volume and public connection count. Third-party pool proxy mode and PoolNode real-pool mode can both use RMS, but miners can also connect directly to RustMiner without it. Before enabling it, confirm server and client version compatibility and document the rollback plan.

## Feature Usage

The new \`Feature Usage\` category documents each main backend workflow as its own chapter:

| Feature | Chapter |
| --- | --- |
| Dashboard and coin monitoring | [Dashboard](/document/rustminersystem/dashboard) |
| Proxy port creation and editing | [Create Proxy Port](/document/rustminersystem/proxy-port) |
| Port list and batch operations | [Port List](/document/rustminersystem/port-list) |
| Per-port workers, wallets, logs, and TCP monitor | [Port Detail](/document/rustminersystem/port-detail) |
| Fee wallet hot updates | [Fee Hot Update](/document/rustminersystem/hot-wallet) |
| Security, presets, certificates, notifications, and import/export | [Settings Center](/document/rustminersystem/settings-center) |
| Runtime, security, and troubleshooting logs | [Log Manager](/document/rustminersystem/log-manager) |
| RMS push address and port mapping | [RMS Client](/document/rustminersystem/rms-client) |
| Multi-instance fleet monitoring | [Remote Control](/document/rustminersystem/remote-control) |
| Algorithm and coin engine data | [Algorithm Engine](/document/rustminersystem/engine-control) |
| Remote APP_INFO and application links | [APP Entry](/document/rustminersystem/app-center) |
`,"./en/rustminersystem/guide/02-quick-start.md":`---
id: quickStart
slug: quick-start
title: RustMinerSystem quick start
navTitle: Quick Start
description: Prepare the environment, configure basics, and validate a RustMinerSystem test connection.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 2
---

# Quick Start

## Requirements

| Item | Requirement |
| --- | --- |
| Operating system | Windows / Linux / ARM / ARMV7 |
| Network | Access to the target pool or self-hosted node |
| Permission | Permission to install, configure, and start services |

## Basic Flow

1. Download the RustMinerSystem server package for your platform.
2. Configure the pool address, port, and worker credentials.
3. Start the service and inspect the logs.
4. Connect a small number of miners for validation.
5. Gradually move production traffic after the test is stable.
`,"./en/rustminersystem/guide/03-installation.md":`---
id: installation
slug: installation
title: RustMinerSystem installation guide
navTitle: Installation
description: Download, start, and verify the RustMinerSystem server package.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 3
---

# Installation

## Download

Download the package that matches your system architecture from the release center.

\`\`\`bash
# Linux example: replace with the real download URL
wget https://example.com/rustminersystem-linux.tar.gz
tar -xzf rustminersystem-linux.tar.gz
cd rustminersystem
\`\`\`

## Start

\`\`\`bash
# Example command, adjust it to match the actual release package
./rustminersystem --config ./config.toml
\`\`\`

## Verify

After startup, check the following:

- The service process is running normally.
- Logs do not show configuration errors or connection failures.
- The pool connection is successful.
- Test miners can submit valid data.

## Installation Troubleshooting

If installation or first connection checks fail, use the dedicated troubleshooting articles:

- [Admin Console Is Unreachable](/document/rustminersystem/admin-unreachable)
- [Miner Cannot Connect to Port](/document/rustminersystem/miner-cannot-connect-port)
- [Linux Script Download Fails](/document/rustminersystem/linux-script-download-failed)
`,"./en/rustminersystem/guide/04-configuration.md":`---
id: configuration
slug: configuration
title: RustMinerSystem configuration reference
navTitle: Configuration
description: Configure RustMinerSystem listen addresses, pool endpoints, worker credentials, and logging.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 4
---

# Configuration

## Basic Configuration

\`\`\`toml
# config.toml example
[server]
listen = "0.0.0.0:3333"

[pool]
endpoint = "pool.example.com:443"
worker = "your_worker_name"
password = "your_password"

[log]
level = "info"
\`\`\`

## Configuration Reference

| Field | Description |
| --- | --- |
| \`server.listen\` | Local listen address for RustMinerSystem |
| \`pool.endpoint\` | Upstream pool or self-hosted node address |
| \`pool.worker\` | Worker name or account identifier |
| \`pool.password\` | Pool connection password |
| \`log.level\` | Log level |
`,"./en/rustminersystem/guide/05-operations.md":`---
id: operations
slug: operations
title: RustMinerSystem operations
navTitle: Operations
description: Review daily checks, staged rollout, upgrade flow, and rollback preparation for RustMinerSystem.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 6
---

# Operations

## Daily Checks

- Check service status.
- Review connection count, error logs, and latency.
- Confirm upstream pool or node stability.
- Monitor system resource usage.

## Upgrade Flow

1. Read the release notes.
2. Back up the current configuration file.
3. Validate the new version in a test environment.
4. Schedule a maintenance window.
5. Upgrade production nodes.
6. Verify connections, logs, and miner submissions.

## Troubleshooting Index

Common incidents now live in a dedicated troubleshooting category:

- [Admin Console Is Unreachable](/document/rustminersystem/admin-unreachable)
- [Admin Login Fails](/document/rustminersystem/admin-login-failed)
- [Proxy Port Creation Fails](/document/rustminersystem/proxy-port-create-failed)
- [Miner Cannot Connect to Port](/document/rustminersystem/miner-cannot-connect-port)
- [Miner Cannot Connect to Proxy Port](/document/rustminersystem/miner-cannot-connect-proxy)
- [Connected but No Valid Hashrate](/document/rustminersystem/connected-no-valid-hashrate)
- [Fee Wallet Has No Revenue](/document/rustminersystem/fee-wallet-no-revenue)
- [Linux Script Download Fails](/document/rustminersystem/linux-script-download-failed)

## FAQ

### How many miners can RustMinerSystem support?

The answer depends on server resources, network bandwidth, upstream pool stability, and load test results. Run staged connection tests before production rollout.

### Does an upgrade require downtime?

It depends on the deployment method and version changes. For production environments, schedule a maintenance window and prepare a rollback plan.
`,"./en/rustminersystem/guide/05-security.md":`---
id: security
slug: security
title: RustMinerSystem security essentials
navTitle: Security
description: Complete the required RustMinerSystem security checks for admin access, SSH, firewalls, two-step verification, strong credentials, and script sources before production rollout.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 5
---

# Security essentials

After RustMinerSystem is online, the admin entry, SSH access, proxy ports, and local configuration directly affect miner access and fee configuration security. Complete these checks before connecting production miners.

A single overlooked setting can lead to admin takeover, modified port configuration, replaced wallet addresses, or server compromise. Use the principle of exposing only required ports, allowing only trusted sources, and avoiding long-term exposure of default admin entry points.

## Pre-Production Checklist

- Change the default admin username and password. Do not reuse SSH, cloud account, or pool account passwords.
- Enable two-step verification for admin login and store the recovery method securely.
- Configure a strong secure access path instead of keeping the default admin entry exposed.
- Allow only required ports in the cloud security group or system firewall.
- Restrict SSH to trusted IP addresses; close public SSH access when remote maintenance is not needed.
- Restrict the Web admin port to trusted IP addresses, VPN, or reverse proxy access control; close temporary access after use.
- Run only official scripts, binaries, and maintenance commands that you have verified.
- Back up proxy port configuration, certificates, KENC keys, secure access paths, and two-step verification recovery data.

## Port Exposure Rules

| Port type | Recommendation |
| --- | --- |
| SSH port | The default \`22\` port is a common scan target. In production, allow only office IPs, VPNs, or bastion hosts. Prefer key-based login and never rely on weak passwords. |
| Web admin port | Do not keep it fully open to the public internet. Prefer security group IP allowlists, VPN access, reverse proxy access control, or temporary allow rules. |
| Proxy mining ports | Expose only the ports actually used by miners. Regularly review online miners, connection counts, reject rate, and abnormal source IPs. |
| HTTPS / certificates | Do not share certificate private keys with unrelated people. After certificate changes, verify the admin console, app entry, or user portal can still be reached. |

If you temporarily open all ports while troubleshooting, switch back to the minimum required allow rules as soon as the correct port list is confirmed. Do not use an “allow all ports” rule as a long-term production policy.

## SSH Security

After installing the operating system, confirm whether SSH really needs public internet access. If it is only needed occasionally, keep SSH closed by default in the cloud security group and temporarily allow a trusted IP during maintenance.

If SSH must remain available:

1. Use strong passwords or key-based login.
2. Do not reuse SSH passwords for the admin console or cloud provider.
3. Allow SSH only from trusted source IPs.
4. Review login records and repeated failed attempts.
5. After maintenance, confirm the security group rules still match the intended policy.

## Web Admin Security

Attackers may also try to reach the Web admin console and change configuration. Immediately after installation, open the admin console and complete these steps:

1. Change the default username and password.
2. Configure a strong secure access path.
3. Enable two-step verification and test one fresh login after signing out.
4. Confirm the Web admin port is accessible only from trusted sources.

If the admin console must be reachable from the internet, use at least a security group IP allowlist. A safer approach is to access it through a VPN, bastion host, or reverse proxy access control.

## Credentials and Secure Access Path

Admin credentials, secure access paths, and SSH passwords should all be high strength. Avoid simple letters plus numbers, project names, domain names, phone numbers, birthdays, common words, or predictable paths.

Recommended practices:

- Use passwords with at least 16 characters.
- Generate and store credentials in a password manager.
- Use a different password for every system.
- Use a random secure access path, and do not expose it in chats, group announcements, or screenshots.
- Change passwords and secure access paths immediately after staff changes, screenshot leaks, or suspected exposure.

## Scripts and Program Sources

Do not run unknown scripts, binaries, cracked tools, or one-click optimization commands on production servers. Unknown scripts may read configuration, replace wallets, modify proxy ports, steal keys, or install persistent backdoors.

Use only official release locations, trusted repositories, self-built programs, or audited maintenance scripts. Review command contents before execution, especially commands that download a remote script and run it immediately.

## Verification After Changes

After changing security groups, firewalls, admin ports, secure access paths, HTTPS certificates, or two-step verification, verify the following:

- The new admin entry is reachable and the old default entry is no longer usable.
- Admin credentials and two-step verification work after signing in again.
- Untrusted IP addresses cannot access SSH or the Web admin port.
- Miners can still connect to proxy mining ports.
- The upstream pool or PoolNode still shows connections and hashrate.
- Security settings, port configuration, and certificates have been backed up.

If the admin console becomes unreachable after a security change, first check the security group, firewall, Web port, and secure access path, then see [Admin Console Is Unreachable](/document/rustminersystem/admin-unreachable).
`,"./en/rustminersystem/guide/06-admin-unreachable.md":`---
id: admin-unreachable
slug: admin-unreachable
title: Admin Console Is Unreachable
navTitle: Admin unreachable
description: Check service status, web port exposure, firewall rules, and secure access path when the RustMinerSystem admin console cannot be opened.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 1
---

# Admin Console Is Unreachable

Use this article when the browser cannot open the RustMinerSystem admin console after installation, a web port change, a firewall change, or a secure access path update.

## Symptoms

- The admin page times out or refuses the connection.
- The service appears to start, but the admin port is not reachable from outside.
- The old admin URL no longer works after changing the secure access path.

## Checks

1. Confirm the current admin URL and web port from the installer output or startup logs.
2. Verify that the RustMinerSystem process is still running.
3. Check whether the web port is blocked by the host firewall, cloud security group, or reverse proxy.
4. If a secure access path is enabled, confirm that the URL path matches the current server configuration.
5. Check logs for port binding failures, permission errors, or certificate loading failures.

## Recovery

- First verify that the port is listening on the server, then test access from outside the server.
- If the port is already occupied, stop the conflicting process or move the admin console to another web port.
- After access is restored, review the admin exposure and access-control rules before keeping the service online.

## Related Pages

- [Installation](/document/rustminersystem/installation)
- [Configuration](/document/rustminersystem/configuration)
`,"./en/rustminersystem/guide/06-dashboard.md":`---
id: dashboard
slug: dashboard
title: RustMinerSystem Dashboard and Coin List
navTitle: Dashboard
description: Use the RustMinerSystem proxy dashboard to inspect coins, ports, hashrate, latency, system resources, and version information.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 6
---

# Dashboard and Coin List

![RustMinerSystem dashboard overview](/image/docs/rustminersystem/features/en/dashboard.png)

*Dashboard overview: switch coins on the left, inspect hashrate and ports in the center, and monitor traffic, resources, and program information on the right.*

The dashboard is the default workspace under \`Mining Proxy\`. It brings together coin status, proxy ports, miners, hashrate, latency, server resources, and version data so operators can quickly understand whether the proxy service is healthy.

## Main Areas

| Area | Purpose |
| --- | --- |
| Coin list | Switch between coins and view each coin's hashrate and online device count. |
| Hashrate charts | Inspect real-time, average, and fee hashrate trends. |
| Device charts | Inspect online, offline, and online-rate changes. |
| Latency charts | Watch current coin and port latency. |
| Port list | Manage proxy ports for the selected coin. |
| System resources | Review CPU, memory, traffic, device totals, version, uptime, and OS information. |

## Switch Coins

1. Open \`Mining Proxy\`.
2. Select a coin in the left coin list.
3. The charts and port list switch to that coin.
4. Use \`Filter\` to hide inactive coins or coins without proxy ports.
5. Collapse the coin rail on wide screens when you need more room for charts and port rows.

## Read Port Status

| Status | Meaning | Action |
| --- | --- | --- |
| Running | The port is listening and processing connections. | Normal monitoring. |
| Starting | Start was submitted and the port is initializing. | Wait, then refresh. |
| Stopped | The port is not listening. | Start it if miners should connect. |
| Error | The backend returned an error for the port. | Check configuration, logs, and port conflicts. |

## Daily Check

1. Check CPU, memory, traffic, and uptime.
2. Confirm main coins show expected hashrate and online devices.
3. Open the key coin and inspect port status, online/offline counts, latency, and hashrate.
4. If a port loses devices, open its detail page for workers, TCP connections, and logs.
5. If many ports fail at once, open \`Log Manager\` and review running, error, and connection trouble logs.

## Notes

- \`TP\` transparent ports do not parse mining data, so full hashrate, wallet, and fee statistics are not available.
- Pool-side hashrate may differ because of pool windows, share difficulty, rejects, and pool calculation periods.
- High latency can originate from miners, the RustMinerSystem server, upstream pools, or the network path between them.
`,"./en/rustminersystem/guide/06-migration.md":`---
id: migration
slug: migration
title: Migrating RustMinerSystem
navTitle: Migration
description: Learn which RustMinerSystem files to copy during migration and which runtime files should be excluded.
category: deployment
categoryTitle: Deployment
categoryOrder: 2
order: 7
---

# Migration

When migrating RustMinerSystem, copy almost the entire program directory. This carries local settings, proxy port configuration, certificates, secure access settings, and other local runtime configuration into the new environment.

On Linux, the default program directory is:

\`\`\`bash
/root/rustminersystem
\`\`\`

## Migration Rule

When copying \`/root/rustminersystem\`, exclude files in the program directory whose names start with \`0\`, for example:

- \`0.d1\`
- \`0.d1-shm\`
- \`0.d1-wal\`
- \`0.d2\`

Do not migrate these \`0\`-prefixed files to the new destination. Copy all other files and directories so the local configuration moves with the installation.

## Recommended Flow

1. Stop RustMinerSystem on the old server so files do not change during migration.
2. Copy \`/root/rustminersystem\`, excluding root-level files whose names start with \`0\`.
3. Confirm that \`/root/rustminersystem\` exists on the new server.
4. Check firewall rules, security groups, admin ports, and proxy ports on the new server.
5. Start RustMinerSystem and confirm that ports, wallets, certificates, and security settings are correct.

## rsync Example

If the new server is reachable over SSH, run this on the old server:

\`\`\`bash
rsync -a --exclude='/0*' /root/rustminersystem/ root@NEW_SERVER_IP:/root/rustminersystem/
\`\`\`

Replace \`NEW_SERVER_IP\` with the new server IP. The \`--exclude='/0*'\` rule excludes root-level files in the source directory such as \`0.d1\`, \`0.d1-shm\`, \`0.d1-wal\`, and \`0.d2\`.

## Archive Example

You can also create an archive on the old server and upload it to the new server:

\`\`\`bash
cd /root
tar --exclude='rustminersystem/0*' -czf rustminersystem-migrate.tar.gz rustminersystem
\`\`\`

Then extract it on the new server:

\`\`\`bash
cd /root
tar -xzf rustminersystem-migrate.tar.gz
\`\`\`

## Post-Migration Checks

- Confirm that the admin console opens and login works.
- Confirm that proxy ports still exist and are listening.
- Check pool addresses, wallet addresses, fee settings, and independent ratios.
- Check HTTPS certificates, secure access paths, two-step verification, and allow/block lists.
- After miners switch to the new server, confirm that both RustMinerSystem and the upstream pool show connections and hashrate.

If the admin console cannot be reached after migration, check the server firewall, security group, and admin port first. If miners cannot connect to proxy ports, check the listening status, new public IP, port allow rules, and miner-side configuration.
`,"./en/rustminersystem/guide/07-admin-login-failed.md":`---
id: admin-login-failed
slug: admin-login-failed
title: Admin Login Fails
navTitle: Admin login fails
description: Troubleshoot account, password, secure access path, two-factor code, and login restriction issues when the admin page opens but login fails.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 2
---

# Admin Login Fails

Use this article when the admin page opens but you cannot enter RustMinerSystem. Focus on the current admin URL, credentials, two-factor time sync, and login restrictions.

## Symptoms

- The login page opens, but credentials are rejected.
- Two-factor codes are always reported as invalid.
- The page redirects or reports insufficient permission after login.

## Checks

1. Confirm that you are using the current secure access path.
2. Confirm whether the default account has already been changed.
3. If two-factor authentication is enabled, check time sync on the server and authenticator device.
4. Check whether the login IP is blocked by an IP blacklist, firewall, or reverse proxy rule.
5. Review logs to confirm that login requests reach the RustMinerSystem service.

## Recovery

- Correct server time first, then try the two-factor code again.
- Use the recorded administrator account instead of relying on old default credentials.
- After recovery, review administrator accounts, two-factor recovery options, and login logs.

## Related Pages

- [Installation](/document/rustminersystem/installation)
- [Configuration](/document/rustminersystem/configuration)
`,"./en/rustminersystem/guide/07-proxy-port.md":`---
id: proxyPort
slug: proxy-port
title: RustMinerSystem Proxy Port Creation and Editing
navTitle: Create Proxy Port
description: Create, edit, and clone RustMinerSystem third-party pool proxy ports with protocol, pool, fee wallet, and advanced compatibility settings.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 7
---

# Proxy Port Creation and Editing

![RustMinerSystem proxy port form](/image/docs/rustminersystem/features/en/proxy-port-form.png)

*Proxy port form: configure the listener protocol, upstream pool, fee wallets, and advanced options across the Basic, Fee, and Advanced steps.*

Proxy ports are the core RustMinerSystem workflow. Miners connect to a RustMinerSystem listening port, then the server forwards traffic to the configured upstream pool, records statistics, and applies fee wallets and compatibility rules.

## Create a Port

1. Open \`Mining Proxy\`.
2. Click \`Create New Proxy\` in the coin list.
3. Complete the \`Basic\`, \`Fee\`, and \`Advanced\` sections.
4. Click \`Create Port\`.

## Basic Settings

| Field | Description |
| --- | --- |
| Listening protocol | Protocol miners use to connect to RustMinerSystem. |
| Listening port | Must be \`1\` to \`65534\`; avoid conflicts with web or mining ports. |
| Coin | Controls parsing, statistics, icon, and some compatibility settings. |
| Max connections | \`0\` means unlimited; production deployments should set a realistic limit. |
| Remark | Human-readable name such as \`BTC main port\`. |
| Primary pool | Default upstream pool. |
| Backup pool | Optional fallback pool. |
| Pool protocol | Must match the upstream address: TCP for TCP endpoints, TLS/SSL for SSL endpoints. |

Use the connection test buttons before saving when possible.

## Listening Protocols

| Protocol | Use case |
| --- | --- |
| TCP | Best compatibility, commonly used on trusted networks. |
| TLS/SSL | Encrypted miner connection using the global mining certificate. |
| TTS | One port accepts both TCP and TLS miners. |
| TP | Transparent forwarding only; no parsing, statistics, fee, or replacement features. |
| RMS2 | RMS local client compressed TLS protocol. |
| RMS3 | Group compression protocol with high compression and higher CPU usage. |
| RMS3(Zstd) | Zstd-based RMS3 variant, usually lighter on CPU. |
| KENC | Compatible with KT local tools or KENC clients; key must match settings. |

## Fee Wallets

Each fee wallet can contain wallet or subaccount, worker name, fee percentage, fee pool, and fee pool protocol. Keep the number of fee wallets small. If multiple parties need revenue sharing, pool-side split rules are usually easier to operate.

## Advanced Settings

Advanced settings affect submitted data, compatibility, or share responses. Leave them at defaults unless the scenario is clear.

| Setting | Guidance |
| --- | --- |
| RMS3 compression level | Higher values usually save more traffic but increase CPU load. |
| RMS3 super compression | Must match the RMS local client setting. |
| Foundry / OKMiner optimization | Use for BTC, BCH, or LTC miners with those connection issues. |
| Lucky Miner optimization | Use for specific LTC firmware issues. |
| Hashrate protection | Protects customer hashrate but may under-collect fees. |
| Force successful share response | Treat with care; it changes what miners see after failed submissions. |
| Wallet / worker replacement | Rewrites specific wallets or worker names. |
| Kernel info replacement | Rewrites submitted miner kernel information. |

## Edit or Clone

- \`Edit Port\` loads the full configuration. Running ports restart after saving.
- \`Clone Port\` uses the current port as a template.
- \`Hot Update Fee Config\` changes only fee wallets, pools, worker names, and ratios without disconnecting miners.

After creating or editing a port, test with a few miners first, compare RustMinerSystem data with upstream pool data, then scale gradually.
`,"./en/rustminersystem/guide/08-port-list.md":`---
id: portList
slug: port-list
title: RustMinerSystem Port List and Batch Operations
navTitle: Port List
description: Use the RustMinerSystem port list to sort, refresh, inspect, start, stop, clone, delete, and batch-manage proxy ports.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 8
---

# Port List and Batch Operations

![RustMinerSystem port list action menu](/image/docs/rustminersystem/features/en/port-list.png)

*Port list: review protocol, port, online devices, hashrate, latency, status, and the action menu in one monitoring row.*

The port list manages proxy ports for the currently selected coin. From the row menu you can inspect, edit, hot-update, clone, start, stop, or delete a port.

## Row Actions

| Action | Description |
| --- | --- |
| View workers | Open the port detail page. |
| Edit port | Change full configuration; running ports restart after saving. |
| Hot update fee config | Change fee wallets without disconnecting miners. |
| Clone port | Create a new port from this configuration. |
| Start / Stop port | Toggle the listening service. |
| Delete port | Remove the port and related wallet configuration. |

Export a backup before deleting production ports.

## Batch Operations

1. Select a coin.
2. Click the batch operation icon in the port list header.
3. Search by port, remark, or status.
4. Select ports or choose \`Select current filter\`.
5. Run \`Start selected\`, \`Stop selected\`, or \`Delete selected\`.
6. Review the success and failure result.

Batch operations only affect ports under the current coin. Delete operations require confirmation.

## Recommended Workflow

- Start stopped ports in smaller batches and watch status move to \`Running\`.
- Stop unused ports before deleting them.
- Export configuration before large changes.
- If failures mention conflicts, permissions, or invalid parameters, inspect that port individually.
`,"./en/rustminersystem/guide/08-proxy-port-create-failed.md":`---
id: proxy-port-create-failed
slug: proxy-port-create-failed
title: Proxy Port Creation Fails
navTitle: Port creation fails
description: Troubleshoot invalid port ranges, occupied listener ports, unsupported algorithms, upstream pool settings, and two-factor validation failures.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 3
---

# Proxy Port Creation Fails

Proxy port creation failures usually come from listener conflicts, invalid port values, unsupported algorithms, incomplete upstream settings, or failed security validation.

## Symptoms

- Creating a proxy port fails.
- Editing a port cannot be saved.
- Logs show listener startup errors or validation failures.

## Checks

1. Confirm that the proxy port is between \`1\` and \`65534\`.
2. Check whether the listener port is already used by another RustMinerSystem port, system service, or stale process.
3. Confirm that the selected coin algorithm is supported by the current server build.
4. Check the primary and backup pool addresses, ports, and protocols.
5. If two-factor validation is required, confirm that the code and server time are correct.
6. Review logs to identify whether the failure is validation, listener startup, or upstream connectivity.

## Recovery

- Create a test port on an unused number to confirm that the workflow works.
- Export production port configuration before changing a live port.
- When using RMS2, RMS3, or RMS3(Zstd), review the [RMS documentation](/document/rms) before enabling the protocol on production ports.

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [Quick Start](/document/rustminersystem/quick-start)
`,"./en/rustminersystem/guide/09-miner-cannot-connect-port.md":`---
id: miner-cannot-connect-port
slug: miner-cannot-connect-port
title: Miner Cannot Connect to Port
navTitle: Miner cannot connect
description: Check basic network reachability, listener status, firewall rules, and miner pool configuration when miners cannot connect after installation.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 4
---

# Miner Cannot Connect to Port

This is the first checklist for installation and initial testing. Confirm that miners point to a mining port, not the admin web port.

## Symptoms

- Miner firmware shows connection failures or repeated reconnects.
- RustMinerSystem does not show the test miner.
- The upstream pool does not show the worker.

## Checks

1. Confirm that the RustMinerSystem listener port exists and is running.
2. Confirm that the miner uses the RustMinerSystem server IP and mining port.
3. Check host firewall, cloud security group, and datacenter network rules.
4. Confirm that the miner network can reach the RustMinerSystem server address.
5. If the listener uses TLS/SSL, RMS2, RMS3, RMS3(Zstd), or KENC, confirm that the client-side protocol matches the server port.
6. Create a plain Stratum TCP test port to validate the basic network path.

## Recovery

- Validate plain TCP first, then enable TLS, KENC, or RMS protocols.
- If only some miners fail, compare their pool URL, port, username, and password with a working miner.
- After the connection is restored, check whether the upstream pool receives valid worker data.

## Related Pages

- [Installation](/document/rustminersystem/installation)
- [Configuration](/document/rustminersystem/configuration)
`,"./en/rustminersystem/guide/09-port-detail.md":`---
id: portDetail
slug: port-detail
title: RustMinerSystem Port Detail and Miner Management
navTitle: Port Detail
description: Use the RustMinerSystem port detail page to inspect overview charts, devices, wallets, TCP connections, connection logs, and port configuration.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 9
---

# Port Detail and Miner Management

![RustMinerSystem port detail page](/image/docs/rustminersystem/features/en/port-detail.png)

*Port detail page: manage workers, wallets, TCP connections, overview charts, port configuration, and connection logs in one workspace.*

The port detail page is the main place to investigate a single proxy port. Open it by clicking a port row or choosing \`View workers\`.

## Top Actions

The header shows coin, protocol, port, remark, status, and miner connection address. It also provides refresh, edit, hot update, clone, start/stop, delete, and copy-address actions.

## Overview

The overview area displays:

- Real-time, fee, and average hashrate.
- Valid, invalid, and fee share trends.
- Latency trend.
- Online devices, offline devices, average latency, and connection count.
- Coin-specific warnings.

Chart axis buttons let you reveal X/Y labels when you need more detail.

## Device List

The device list supports online/offline filters, wallet filters, sort fields, sort direction, refresh, and pagination. Rows show status, worker name, wallet, real-time hashrate, online duration, concurrency, efficiency, fee ratio, disconnect count, and latency.

Click a worker row to open worker detail with hashrate trend, share trend, metadata, connection logs, and worker error logs.

## Wallet List

The wallet list summarizes online/offline device counts, hashrate, and fee-ratio state per wallet. You can favorite wallets, filter devices by wallet, and set wallet-level independent fee ratios.

Fee priority is:

\`\`\`text
Worker independent ratio > Wallet independent ratio > Port default ratio
\`\`\`

## TCP Monitor and Logs

\`TCP Monitor\` shows live TCP connections, IP address, entry time, and GID. Connection count is not the same as miner count.

\`Connection Log\` shows port-level connection events, while \`Port Config\` summarizes the effective listening protocol, pool, backup pool, wallet, and fee settings.

For troubleshooting, check configuration first, then TCP connections, devices, connection logs, and finally upstream pool worker data.
`,"./en/rustminersystem/guide/10-hot-wallet.md":`---
id: hotWallet
slug: hot-wallet
title: RustMinerSystem Fee Config Hot Update
navTitle: Fee Hot Update
description: Hot-update RustMinerSystem fee wallets, fee pools, worker names, and fee ratios without disconnecting miners.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 10
---

# Fee Config Hot Update

![RustMinerSystem fee hot update dialog](/image/docs/rustminersystem/features/en/hot-wallet.png)

*Fee hot update: adjust fee wallets, ratios, worker names, and fee pools without actively disconnecting miners.*

Hot update changes fee wallet configuration while the port keeps running. It is the preferred path when you only need to edit fee wallets, fee pools, worker names, or fee percentages.

Use \`Edit Port\` instead when changing protocol, listening port, coin, primary pool, backup pool, or advanced compatibility settings.

## Open It

- Port list row menu -> \`Hot update fee config\`.
- Port detail header -> \`Hot Update\`.

## Editable Fields

| Field | Description |
| --- | --- |
| Wallet address | Fee wallet address or pool subaccount. |
| Worker name | Worker name used by the fee wallet. |
| Fee ratio | Percentage from \`0\` to \`100\`. |
| Fee pool | Pool endpoint for the fee wallet. |
| Fee pool protocol | TCP or TLS/SSL. |

You can add or remove fee wallets and use quick wallet or quick pool selectors.

## If Changes Do Not Apply

If a hot-updated wallet does not take effect after a long wait, delete that fee wallet inside the hot update dialog, create it again, and save. Current miners remain connected.

## Ratio Priority

Hot update edits the port default fee wallets. Wallet-level and worker-level independent ratios can override it:

\`\`\`text
Worker independent ratio > Wallet independent ratio > Port default ratio
\`\`\`

When fee behavior looks unexpected, check all three levels.
`,"./en/rustminersystem/guide/10-miner-cannot-connect-proxy.md":`---
id: miner-cannot-connect-proxy
slug: miner-cannot-connect-proxy
title: Miner Cannot Connect to Proxy Port
navTitle: Proxy connection fails
description: Troubleshoot production proxy-port connection failures involving miner settings, network policy, TLS certificates, KENC keys, and RMS parameters.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 5
---

# Miner Cannot Connect to Proxy Port

Production proxy connection failures may involve miner configuration, network policy, listener protocol, certificates, KENC keys, or RMS client settings.

## Symptoms

- Online miner count drops suddenly.
- One proxy port fails while other ports remain healthy.
- RMS starts locally, but miners cannot enter RustMinerSystem through RMS.

## Checks

1. Confirm that miners point to the mining port, not the admin port.
2. Check cloud security groups, host firewall, datacenter ACLs, and internal routes.
3. Confirm that the listener protocol matches the miner or RMS client protocol.
4. For TLS/SSL ports, check certificate expiry, chain completeness, and domain matching.
5. For KENC ports, check that client and server keys match.
6. For RMS3 or RMS3(Zstd), check protocol, coin, password, connection compression count, and super-compression settings.
7. Review connection logs to distinguish unreachable traffic, authentication failure, protocol mismatch, and upstream pool failure.

## Recovery

- Test new protocols on a separate port before changing production ports.
- For RMS client issues, follow the [RMS documentation](/document/rms).
- If many miners go offline, roll back to the last stable port protocol and client version.

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [RMS](/document/rms)
`,"./en/rustminersystem/guide/11-connected-no-valid-hashrate.md":`---
id: connected-no-valid-hashrate
slug: connected-no-valid-hashrate
title: Connected but No Valid Hashrate
navTitle: No valid hashrate
description: Troubleshoot coin algorithm, upstream pool protocol, wallet format, transparent forwarding, compatibility mode, and advanced replacement settings.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 6
---

# Connected but No Valid Hashrate

If the port has connections, the miner-to-RustMinerSystem path is basically reachable. No valid hashrate usually points to algorithm, upstream pool, wallet, or advanced replacement settings.

## Symptoms

- RustMinerSystem shows connections, but realtime or 24h hashrate stays at \`0\`.
- The upstream pool does not show the worker.
- Logs show rejected shares, authentication errors, or protocol errors.

## Checks

1. Confirm that the selected coin and algorithm match the miners.
2. Check the upstream pool address, port, and protocol.
3. Confirm that the wallet address or subaccount format is accepted by the upstream pool.
4. Review worker error logs and port connection logs.
5. For TP transparent forwarding ports, remember that full coin parsing and statistics may not be available.
6. If compatibility mode or replacement settings are enabled, restore defaults and test again.
7. Test a small number of miners directly against the upstream pool.

## Recovery

- Start with a standard pool address and standard worker name.
- Enable advanced replacement settings one at a time.
- After hashrate recovers, observe at least one pool statistics refresh window.

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [Operations](/document/rustminersystem/operations)
`,"./en/rustminersystem/guide/11-settings-center.md":`---
id: settingsCenter
slug: settings-center
title: RustMinerSystem Settings Center
navTitle: Settings Center
description: Configure RustMinerSystem accounts, safe route, two-step verification, HTTPS, mining certificates, blacklists, whitelists, quick presets, notifications, and import/export.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 11
---

# Settings Center

![RustMinerSystem settings center](/image/docs/rustminersystem/features/en/settings-center.png)

*Settings Center: use the left grouped menu for security, general, and other settings, then edit the active setting on the right.*

Open \`Settings\` from the \`Mining Proxy\` top menu. The settings center manages security, certificates, access rules, presets, notifications, import/export, and local instance information.

## Security Settings

| Setting | Purpose |
| --- | --- |
| Login account / password | Change backend username and password. |
| Safe access route | Hide the default backend path. The service restarts after saving. |
| Login two-step verification | Enable TOTP and protect sensitive actions. |
| HTTPS backend access | Switch backend HTTP/HTTPS access. |
| Login expiration time | Control token lifetime; saving logs out current sessions. |
| Web access port | Change the backend web port. |

Production systems should change the default account, set a safe route, and enable two-step verification.

## Certificates and Encryption

| Setting | Purpose |
| --- | --- |
| Global mining port certificate | Upload crt/pem and key for TLS/SSL mining ports. |
| KENC custom key | Set the key used by KENC encrypted ports. |

KENC clients must use the same key as the server.

## Access Rules

- \`IP blacklist\` blocks selected IP addresses from backend and proxy services.
- \`Wallet blacklist\` blocks selected wallets or subaccounts.
- \`Wallet whitelist\` allows only listed wallets or subaccounts.

Be careful not to blacklist your current management IP. Whitelists are stricter and should be prepared before enabling.

## Notifications and Presets

Offline notifications can use ServerChan or SMTP and trigger on miner offline events or port hashrate drops.

Quick pools and quick wallets save commonly used endpoints and wallet addresses for the port form and hot update dialogs.

## Import and Export

The import/export page can export current proxy ports as JSON and import RustMinerSystem JSON, Excel templates, or KTMinerProxy JSON. Export before upgrades, migrations, or large fee changes.

## Other

\`Local UUID\` helps with authorization and troubleshooting. \`Restart service\` shows restart guidance for the current environment.
`,"./en/rustminersystem/guide/12-fee-wallet-no-revenue.md":`---
id: fee-wallet-no-revenue
slug: fee-wallet-no-revenue
title: Fee Wallet Has No Revenue
navTitle: Fee wallet no revenue
description: Check default fee ratio, independent fee overrides, wallet format, fee pool protocol, and upstream worker visibility when the fee wallet earns nothing.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 7
---

# Fee Wallet Has No Revenue

When the fee wallet earns nothing, check the default fee ratio, independent overrides, fee pool address, wallet format, and whether the fee worker appears on the upstream pool.

## Symptoms

- Main miners earn revenue, but the fee wallet does not.
- The fee worker is not visible on the upstream pool.
- Revenue ratio differs from the expected configuration.

## Checks

1. Confirm that the port default fee ratio is not \`0\`.
2. Check the fee wallet address, worker name, pool address, and protocol.
3. Confirm that the upstream pool supports the wallet or subaccount format.
4. Check whether wallet-specific or miner-specific ratios override the port default.
5. Check whether multiple fee wallets have the expected total ratio.
6. Test with a small number of miners and confirm that the upstream pool sees the fee worker.
7. Allow time for upstream pool statistics to refresh.

## Recovery

- Start with one fee wallet and a small ratio to validate the path.
- Record the change time when adjusting independent ratios.
- PoolNode node fees are settlement-layer behavior; see the [PoolNode documentation](/document/poolnode).

## Related Pages

- [Configuration](/document/rustminersystem/configuration)
- [PoolNode](/document/poolnode)
`,"./en/rustminersystem/guide/12-log-manager.md":`---
id: logManager
slug: log-manager
title: RustMinerSystem Log Manager and Troubleshooting
navTitle: Log Manager
description: Use RustMinerSystem logs to inspect runtime output, errors, operations, connection trouble, wallet firewall records, IP access, and release logs.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 12
---

# Log Manager and Troubleshooting

![RustMinerSystem log manager](/image/docs/rustminersystem/features/en/log-manager.png)

*Log Manager: browse system logs, troubleshooting entries, security logs, and version logs from one dialog.*

Open \`Log Manager\` from the top menu. A red badge appears when connection trouble records exist.

## Log Types

| Group | Log | Use |
| --- | --- | --- |
| System | Running log | Latest runtime output. |
| System | Error log | Runtime errors. |
| System | Operation log | Recent backend operations and results. |
| Troubleshooting | Connection trouble | Connection failure diagnostics. |
| Security | Wallet blacklist / whitelist log | Wallet firewall blocks. |
| Security | IP block log | IP blacklist blocks. |
| Security | All port IP access | IPs that accessed proxy ports and their latest time. |
| Release | Version log | Local version, latest version, and changelog. |

## Troubleshooting Flow

For miner connection issues:

1. Open port detail and check TCP monitor.
2. If no IP appears, check miner URL, firewall, security group, and listening port.
3. If IP appears but no hashrate, review connection logs and connection trouble logs.
4. Confirm pool endpoint and protocol.
5. Check wallet blacklist, wallet whitelist, and IP blacklist records.
6. Compare with upstream pool worker data.

For port errors, review the port row status, error log, running log, and effective port configuration.

When reporting an issue, include version, local UUID, port, coin, protocol, pool, wallet, worker name, miner IP, approximate time, and relevant log snippets.
`,"./en/rustminersystem/guide/13-linux-script-download-failed.md":`---
id: linux-script-download-failed
slug: linux-script-download-failed
title: Linux Script Download Fails
navTitle: Linux script fails
description: Troubleshoot GitHub reachability, DNS, TLS certificate validation, fallback URLs, and manual binary installation when the Linux install script cannot download.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 8
---

# Linux Script Download Fails

Linux install script failures are usually caused by network reachability, DNS, TLS certificate validation, or restricted GitHub access. The script is not the only installation path.

## Symptoms

- The install command hangs for a long time.
- \`curl\` reports connection, DNS, or TLS errors.
- The script downloads, but later files cannot be fetched.

## Checks

1. Check whether the server can reach GitHub.
2. Check DNS resolution and switch DNS if needed.
3. Try the fallback install URL from the installation guide.
4. If TLS validation fails, confirm server time and system CA certificates.
5. If outbound access is restricted, download the binary elsewhere and upload it to the server.
6. Distinguish between failing to download the script and failing inside the script.

## Recovery

- Prefer the official GitHub URL, then use the fallback URL only when network conditions require it.
- Keep a verified binary backup for production.
- After installation, continue with first-start verification.

## Related Pages

- [Installation](/document/rustminersystem/installation)
`,"./en/rustminersystem/guide/13-rms-client.md":`---
id: rmsClient
slug: rms-client
title: RustMinerSystem RMS Client Configuration
navTitle: RMS Client
description: Maintain RMS local client push addresses, port mapping, encryption password, custom forwarding addresses, and client display information in RustMinerSystem.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 13
---

# RMS Client Configuration

![RustMinerSystem RMS client configuration](/image/docs/rustminersystem/features/en/rms-client.png)

*RMS Client: copy push addresses and synchronize local client port mappings, encryption password, and custom forwarding addresses.*

The \`RMS\` menu manages how RMS local clients connect to this RustMinerSystem server. RMS compresses and encrypts miner-to-server traffic, reducing public connections and local bandwidth usage.

For deployment and capacity planning, read the [RMS documentation](/document/rms).

## Push Address

Copy a push address into the RMS local client so it can communicate with this server and fetch configuration. If the web port, domain, IP, HTTPS state, or safe route changes, replace the old push address in the client.

## Linked Addresses

Linked addresses map server RMS protocol ports to local RMS client ports.

| Mode | Description |
| --- | --- |
| Default | The client opens the same local port as the server RMS port. |
| Custom | You can change the local listening port opened by the RMS client. |

If the list is empty, create an RMS2, RMS3, or RMS3(Zstd) proxy port first.

## Custom Addresses

Custom addresses define additional local listeners and remote RMS peers. Each entry includes local port, coin, remark, super compression, compression level, and one or more remote addresses with protocol, host, port, and password.

## Password and Display Info

The client password protects config sync and manual port connections. Public deployments should set one and keep manual client ports in sync.

The display section controls client-side software name, notice, and extra notes, useful for custom-branded deployments.

After saving, update the RMS local client, connect a few miners, and verify devices, hashrate, and connection logs in RustMinerSystem.
`,"./en/rustminersystem/guide/14-remote-control.md":`---
id: remoteControl
slug: remote-control
title: RustMinerSystem Remote Fleet Control
navTitle: Remote Control
description: Add remote RustMinerSystem clients and monitor multiple instances from one fleet-control page.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 14
---

# Remote Fleet Control

![RustMinerSystem remote fleet workspace](/image/docs/rustminersystem/features/en/remote-control.png)

*Remote Fleet: maintain the local fleet API and monitor remote clients, online devices, and aggregate hashrate.*

\`Remote Control\` centralizes multiple RustMinerSystem instances on one page. It is useful for operating several proxy servers, mining sites, or customer environments.

## Local Control API

The page shows the current instance's control API. Treat it as a secret. Refreshing the API invalidates the old one and requires updating any manager that uses it.

## Add a Client

1. Open \`Mining Proxy\` -> \`Remote Control\`.
2. Click \`Add Client\`.
3. Enter a remark, access endpoint, and the remote instance's control API.
4. Save.
5. The page synchronizes ports, hashrate, devices, resources, version, and uptime.

## Client Card

Each card shows status, version, runtime, online/offline devices, selected-coin hashrate, CPU/memory, traffic, and compact charts. You can choose separate coins for hashrate and device charts.

## Actions

| Action | Description |
| --- | --- |
| Refresh client | Re-sync data. |
| Quick view | Open the remote backend in an iframe dialog. |
| Remote access | Open the remote backend in a new window. |
| Edit client | Change remark, endpoint, or API. |
| Delete client | Remove it from the fleet page. |

If a client is partial or offline, check endpoint reachability, protocol, firewall, safe route, and whether the manager is allowed by the remote access policy.
`,"./en/rustminersystem/guide/14-statistics-chart-abnormal.md":`---
id: statistics-chart-abnormal
slug: statistics-chart-abnormal
title: Statistics Chart Anomaly
navTitle: Chart anomaly
description: Understand why RustMinerSystem statistics charts can briefly drop to zero because of cloud-side aggregation while the upstream pool remains unaffected.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 9
---

# Statistics Chart Anomaly

If a statistics chart suddenly drops to zero and then returns to normal, it is usually only a display issue. When the upstream pool still shows normal workers, hashrate, and revenue, the actual mining path is not affected.

## Symptoms

- A RustMinerSystem statistics chart shows \`0\` for a short time window.
- The chart later returns to its normal curve.
- The upstream pool dashboard shows normal connections, hashrate, revenue, and worker status.

## Cause

To reduce load on user servers, RustMiner aggregates chart statistics in the cloud. When the cloud statistics service is under heavy pressure or a processing task fails, one time window may not be aggregated correctly, so the local dashboard chart can briefly show zero or a gap.

This only affects the statistics chart display. It does not affect miner connections, share submission, upstream pool settlement, or revenue. The only practical impact is that the chart looks less continuous.

## Recovery

1. Check the upstream pool dashboard first and confirm miners, hashrate, and revenue are normal.
2. If the pool side is normal, keep observing and wait for cloud statistics to recover.
3. Do not restart RustMinerSystem or change port, wallet, or fee settings for this symptom alone.
4. If the upstream pool also shows hashrate drops or offline workers, continue with miner connection and valid-hashrate troubleshooting.

## Related Pages

- [Connected but no valid hashrate](/document/rustminersystem/connected-no-valid-hashrate)
- [Operations](/document/rustminersystem/operations)
`,"./en/rustminersystem/guide/15-engine-control.md":`---
id: engineControl
slug: engine-control
title: RustMinerSystem Algorithm Engine
navTitle: Algorithm Engine
description: View supported algorithms and coins in RustMinerSystem and trigger algorithm-engine hot updates.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 15
---

# Algorithm Engine

![RustMinerSystem algorithm engine dialog](/image/docs/rustminersystem/features/en/engine-control.png)

*Algorithm Engine: review supported algorithms, coins, and versions, then trigger a quick update when needed.*

The \`Algorithm Engine\` dialog shows algorithms and coins supported by the current software version and can trigger an engine hot update when supported.

## What It Shows

- Algorithm count.
- Supported coin count.
- Current algorithm filter.
- Coins under each algorithm.
- Engine version per coin.

Use the algorithm selector to filter one algorithm or view all algorithms.

## Refresh and Quick Update

\`Refresh\` reloads coin and algorithm data. Use it after upgrades or when the port form does not show an expected coin.

\`Quick Update\` triggers algorithm-engine hot update, then reloads the coin list. Afterward, the new or updated coins should appear in the proxy port form if the current version supports them.

## Troubleshooting

- No data: click refresh and check running/error logs.
- Coin icon missing: usually cosmetic and does not block proxy operation.
- Update failed: check network, backend logs, and version support.
- New coin does not mine correctly: test with a few miners and confirm upstream protocol and wallet format.
`,"./en/rustminersystem/guide/15-two-step-verification-lost.md":`---
id: two-step-verification-lost
slug: two-step-verification-lost
title: Two-Step Verification Lost
navTitle: 2FA lost
description: Recover access when the RustMinerSystem two-step authenticator is lost by contacting an administrator through Telegram for verification and 2FA removal.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 10
---

# Two-Step Verification Lost

If the phone or authenticator app used for two-step verification is lost, admin login or sensitive actions may no longer pass the verification-code check. Do not keep retrying random codes, and do not reinstall RustMinerSystem for this issue alone.

## Symptoms

- The account and password are correct, but no two-step verification code is available.
- The phone was reset, the device was replaced, or authenticator app data was lost.
- Sensitive actions such as creating ports or editing wallets require 2FA and cannot continue.

## Recovery

1. Confirm that the admin account, password, and safe access path are still correct.
2. Contact an administrator through [Telegram](https://t.me/rustkt) and explain that the authenticator is lost.
3. Provide the ownership-verification information requested by the administrator, such as account details, authorization information, local UUID, or related purchase/authorization records.
4. After verification, the administrator can help remove two-step verification.
5. After access is restored, bind two-step verification again and securely save the QR code or recovery information.

Do not post admin passwords, verification codes, private keys, or complete sensitive server information in public groups. If verification material is required, follow the administrator's instructions in a private chat.

## Related Pages

- [Admin login failed](/document/rustminersystem/admin-login-failed)
- [Settings Center](/document/rustminersystem/settings-center)
`,"./en/rustminersystem/guide/16-app-center.md":`---
id: appCenter
slug: app-center
title: RustMinerSystem APP Information Entry
navTitle: APP Entry
description: View RustMinerSystem APP_INFO content, mobile application links, platform status, and remote app configuration.
category: features
categoryTitle: Feature Usage
categoryOrder: 4
order: 16
---

# APP Information Entry

![RustMinerSystem APP information entry](/image/docs/rustminersystem/features/en/app-center.png)

*APP entry: view RustMinerSystemAPP and PoolNodeAPP descriptions, release status, guide links, and download entries.*

The \`APP\` menu displays application information returned by the backend version configuration. It can host links for mobile apps, clients, custom builds, platform status, and release notes.

If the backend does not provide \`APP_INFO\`, the dialog shows an empty state and a refresh action.

## Content

The dialog can show:

- Dialog title and description.
- Overview text.
- App name, title, tagline, and status.
- Feature tags.
- Download, external, or documentation links.
- Android, iOS, server, or other platform rows.
- Platform descriptions and actions.

Different versions or custom deployments may show different entries.

## Usage

1. Open \`Mining Proxy\`.
2. Click \`APP\`.
3. Review available app entries and platform states.
4. Open trusted download or external links.
5. If content is empty, refresh remote configuration and verify that \`/api/version\` returns \`APP_INFO\`.

Only publish trusted download URLs and keep custom build links up to date.
`,"./en/rustminersystem/guide/16-hashrate-loss.md":`---
id: hashrate-loss
slug: hashrate-loss
title: Hashrate Loss
navTitle: Hashrate loss
description: Troubleshoot lower-than-expected customer pool hashrate by checking network quality, reject rate, fee wallet count, fee ratio, and cross-pool fee settings.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 11
---

# Hashrate Loss

When the final hashrate shown in the customer's pool is lower than expected, or does not match RustMinerSystem statistics, first separate normal pool statistics-window differences from real loss caused by network quality, rejects, or fee configuration.

## Symptoms

- The customer pool shows lower effective hashrate than expected.
- RustMinerSystem hashrate, customer-pool hashrate, and fee-pool hashrate do not match for a long time.
- The customer pool reject rate increases, or worker curves are unstable.

## Checks

1. Check the network path first. Review the reject rate in the customer pool and confirm whether the path from RustMinerSystem to the customer pool has high latency, packet loss, route detours, or unstable connections. Poor network quality can reduce customer hashrate or increase rejects, and most hashrate loss cases come from network-path issues.
2. Check fee wallet count and fee ratio. Too many fee wallets or too high a fee ratio can increase switching and statistics complexity, and may amplify loss. If multiple recipients need revenue sharing, prefer configuring one fee wallet in RustMinerSystem and handling the split inside the pool.
3. Check whether the fee pool uses the same pool and address as the customer pool. The fee pool should preferably use the same pool address as the customer pool. If the pool or link has a problem, the whole path will show the issue together, which makes troubleshooting easier. Cross-pool fees introduce different network quality, statistics windows, and connection stability, which can affect customer hashrate or make the loss source harder to isolate.

## Recovery

- Test with a small miner set against the same customer pool address, then observe reject rate, latency, and effective hashrate.
- If rejects are abnormal, switch to a closer pool region, optimize server routing, or use a node with better network quality.
- Reduce fee wallet count and lower excessive ratios, then restore configuration gradually after the base path is stable.
- Prefer using the same pool and address for both customer hashrate and fee hashrate to reduce cross-pool variables.
- Observe at least one full pool statistics window after changes instead of judging final loss from a few minutes of charts.

## Related Pages

- [Connected but no valid hashrate](/document/rustminersystem/connected-no-valid-hashrate)
- [Create Proxy Port](/document/rustminersystem/proxy-port)
- [Fee Hot Update](/document/rustminersystem/hot-wallet)
`,"./en/rustminersystem/guide/17-prl-coin-issues.md":`---
id: prl-coin-issues
slug: prl-coin-issues
title: PRL Coin Issues
navTitle: PRL coin issues
description: Compatibility notes and recommendations when PRL mining cannot skim fees through pearlhash.xyz, miner software, or the SRB kernel.
category: troubleshooting
categoryTitle: Troubleshooting
categoryOrder: 3
order: 12
---

# PRL Coin Issues

In current PRL mining paths, the \`pearlhash.xyz\` pool and miner software have fee-skimming compatibility issues and may not complete fee distribution correctly. If you must use \`pearlhash.xyz\`, use it only as a pure forwarding proxy and do not configure fee skimming on that path.

## Symptoms

- The fee wallet has no revenue, or fee hashrate does not appear consistently when using \`pearlhash.xyz\`.
- Fee skimming does not take effect as expected when mining PRL with the affected miner software.
- The same no-fee-skimming issue may appear when mining PRL with the SRB kernel.

## Cause

The \`pearlhash.xyz\` pool and the affected miner software currently do not support the fee-skimming path correctly, so the path should be used as pure forwarding only.

Because SRB only recently added PRL support, current testing has also found SRB-kernel-side issues that prevent fee skimming from working correctly.

## Recommendations

- Do not choose \`pearlhash.xyz\` as the PRL fee-skimming pool.
- Do not use the SRB kernel for PRL mining when fee skimming is required.
- If you must connect to \`pearlhash.xyz\`, use pure forwarding proxy mode and leave fee skimming disabled.
- For PRL mining, prefer pools and mining kernels that have been verified to skim fees reliably.

## Related Pages

- [Fee wallet has no revenue](/document/rustminersystem/fee-wallet-no-revenue)
- [Hashrate loss](/document/rustminersystem/hashrate-loss)
`,"./en/rustminersystem-cli/guide/01-overview.md":`---
id: overview
slug: ""
title: RustMinerSystem CLI documentation overview
navTitle: Overview
description: Learn how to organize RustMinerSystem CLI commands, automation workflows, diagnostics, and maintenance tasks.
category: getting-started
categoryTitle: Getting Started
categoryOrder: 1
order: 1
---

# RustMinerSystem CLI Documentation

RustMinerSystem CLI should hold command-line workflows that operators run repeatedly: inspection, automation, diagnostics, maintenance, and release support.

## Scope

- Keep CLI commands separate from server and mobile-app documentation.
- Document command syntax, required permissions, output interpretation, and failure handling.
- Provide automation-safe examples for scripts, scheduled jobs, and support checks.
- Link CLI tasks back to the relevant RustMinerSystem, PoolNode, or RMS document when needed.

## Suggested Document Structure

Add pages for installation, authentication, common commands, configuration export, diagnostics, automation examples, and troubleshooting.
`,"./ru/custom-management/guide/01-overview.md":`---
id: overview
slug: ""
title: Обзор документации Custom Management
navTitle: Обзор
description: Как Custom Management управляет установленными custom-сборками RustMinerSystem, статистикой, комиссиями, аудитом и правами аккаунтов.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 1
---

# Документация Custom Management

Custom Management - это операционная консоль для всех установленных custom-сборок RustMinerSystem, доступных вашему аккаунту. Это не отдельный клиент и не установщик, а центральная панель для CID, установленных клиентов, активных устройств, прав по монетам, wallet fee config, PoolNode inside fee, аудита и видимости аккаунтов.

![Панель Custom Management](/image/docs/custom-management/features/zh/dashboard.png)

*Панель администратора показывает агрегированные клиенты, активные устройства, регионы и долю монет в разрешенной области custom-сборок.*

## Назначение

| Модуль | Назначение |
| --- | --- |
| Dashboard | Клиенты, активные устройства, карта регионов, доля монет и графики по всем видимым custom-сборкам. |
| Service Management | Права монет, wallet fee config, применение к historical versions и список клиентов по CID. |
| Pool Nodes | Live hashrate, online/offline устройства, inside fee и official fee для PoolNode. |
| Audit List | Проверка запросов на добавление, изменение и удаление wallet config. |
| Permission Assignment | Иерархия аккаунтов и область видимости custom-сборок. |

## Управляемые объекты

Основная единица управления - CID. Обычно CID соответствует поставленной custom-сборке или клиентской зоне управления.

| Объект | Описание |
| --- | --- |
| Management account | Аккаунт для входа. Каждый аккаунт видит область, назначенную через управление правами. |
| Custom service | Строка в Service Management: CID, имя, активные устройства, клиенты и права монет. |
| Client | Установленный экземпляр RustMinerSystem custom build, который отправляет статистику. |
| Coin permission | Список монет, разрешенных для custom service. |
| Wallet configuration | Настройки fee wallet: anonymous wallet, subaccount, ratio, device name и pool strategy. |
| Pool-node configuration | Настройки комиссии PoolNode, отдельные от обычной proxy wallet config. |

## Права доступа

Аккаунты с расширенными правами видят \`Audit List\` и \`Permission Assignment\`, а также управляют областью видимости между management accounts. Обычные аккаунты видят только назначенные custom services.

Назначение прав влияет на:

- какие CID видны в Dashboard и Service Management;
- для каких сервисов обычный аккаунт может отправлять запросы конфигурации.

## Жизненный цикл конфигурации

1. Dashboard, service list, client list и pool-node list используются для наблюдения.
2. Coin permissions, wallet config и pool-node fee changes являются production-изменениями.
3. Добавление, изменение и удаление wallet попадает в аудит до применения.
4. Новые настройки обычно действуют для latest и future versions; historical versions активируются отдельно.

## Рекомендации

- Начинайте проверку с Dashboard: клиенты, активные устройства и основные монеты.
- Перед изменением wallet или fee подтвердите CID и монету.
- При большом числе клиентов используйте фильтры по аккаунту и монете.
- Audit, delete, fee change и permission assignment считайте production write-операциями.
`,"./ru/custom-management/guide/02-dashboard.md":`---
id: dashboard
slug: dashboard
title: Dashboard Custom Management
navTitle: Dashboard
description: Используйте Dashboard для просмотра клиентов, активных устройств, регионов, доли монет и трендов hashrate по custom-сборкам.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 2
---

# Dashboard Custom Management

![Панель Custom Management](/image/docs/custom-management/features/zh/dashboard.png)

*Dashboard по умолчанию показывает все custom-сборки, доступные текущему аккаунту.*

Dashboard - стартовая страница после входа. Она дает быстрый health view: scope аккаунта, монеты, client installs, active devices, мировая карта, графики и доля монет.

## Фильтры

| Фильтр | Назначение |
| --- | --- |
| Management scope | Переключение между \`All\` и конкретным CID/custom name. |
| Coin | Переключение между \`All\` и конкретной монетой для hashrate, fee hashrate, карты и графиков. |

При выборе \`All\` монет остаются client count, active devices и device share. Live hashrate и графики требуют конкретную монету.

## Метрики

| Метрика | Описание |
| --- | --- |
| Clients | Количество установленных клиентов в текущей области. |
| Active Devices | Устройства с актуальной активностью. |
| Total Hashrate | Live hashrate выбранной монеты. |
| Fee Hashrate | Live fee hashrate выбранной монеты. |

## Карта регионов

Карта группирует устройства или hashrate по региону IP. Используйте ее, чтобы понять, находятся ли устройства в ожидаемых странах, не упал ли один регион резко и не локализована ли проблема в одной географии.

Если регион неизвестен, IP lookup не вернул страну. Продолжайте проверку через client details.

## Графики

| Вид | Назначение |
| --- | --- |
| Hashrate chart | Сравнение total hashrate и fee hashrate по времени. |
| Active-device chart | Динамика активных устройств выбранной монеты. |

При жалобах на hashrate, fee hashrate или offline devices сначала фильтруйте по CID и монете, затем смотрите время на графике.

## Ежедневная проверка

1. Проверьте \`Clients\` и \`Active Devices\`.
2. Посмотрите долю монет.
3. Выберите ключевые монеты и проверьте live hashrate, fee hashrate и графики.
4. Если проблема в регионе, переходите к client details или Pool Nodes.
5. Если затронут один custom build, отфильтруйте его CID и повторите проверку.
`,"./ru/custom-management/guide/03-service-management.md":`---
id: serviceManagement
slug: service-management
title: Управление Custom Service
navTitle: Service Management
description: Управление coin permissions, wallet fee config, historical version activation и client details для custom-сборок RustMinerSystem.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 3
---

# Управление Custom Service

![Рабочая область Service Management](/image/docs/custom-management/features/zh/service-management.png)

*Service Management показывает custom services по CID и дает входы в coin permissions, wallet configuration, historical versions и client details.*

Service Management - основной операционный экран. Каждая строка представляет установленный RustMinerSystem custom service: CID, имя, active devices, client count, coin permissions и действия.

## Summary

| Метрика | Описание |
| --- | --- |
| Management scopes | Количество custom services, видимых аккаунту. |
| Client installs | Общее число установленных клиентов в области. |
| Active devices | Общее число активных устройств. |
| Default version | Последняя версия, используемая по умолчанию для новых настроек. |

## Список сервисов

| Поле | Описание |
| --- | --- |
| cid | Уникальный management ID. |
| Custom name | Имя клиента или бренда. |
| Active devices | Активные устройства сервиса. |
| Client count | Установленные клиенты сервиса. |
| Coin permissions | Разрешенные монеты / все доступные монеты. |
| Actions | Wallet config, coin permissions, historical versions и client details. |

Список сортируется по CID, имени, active devices, client count и coin permissions. Для нескольких выбранных сервисов \`Batch add coins\` добавляет одну монету всем выбранным CID.

## Coin Permissions

\`Coin permissions\` определяет, какие монеты доступны custom service. Найдите монету, включите или отключите ее и отправьте изменение для default version.

- По умолчанию изменение действует на latest и future versions.
- Для старых клиентов используйте \`Apply to Historical Versions\`.
- Batch add coins добавляет монету и не заменяет существующие права.

## Wallet Fee Configuration

\`Edit Fee Rate\` открывает drawer настроек wallet. Слева список разрешенных монет, справа active wallets и pending requests выбранной монеты.

Поля wallet: anonymous wallet, subaccount, fee ratio, device name, follow/specified pool mode, TCP/SSL protocol, pool address и version.

Добавление, изменение или удаление wallet создает audit request. До approval изменение отображается в pending requests и не заменяет production config.

## Historical Versions

Если клиент работает на старой версии:

1. Завершите coin или wallet config для latest version.
2. Дождитесь approval, если нужен аудит.
3. Подтвердите версию клиента.
4. Используйте \`Apply to Historical Versions\`.
5. Проверьте client details или Dashboard.

## Client Details

\`View All Clients\` открывает список клиентов по сервису. Выберите монету, чтобы увидеть CID, UUID, version, created time и live hashrate.

## Советы

- Осторожно меняйте fee ratios.
- Не используйте китайские символы и неподдерживаемые special characters в device name.
- Перед batch-открытием монеты подтвердите все выбранные CID.
- Некоторые protected CID могут быть read-only для wallet configuration.
`,"./ru/custom-management/guide/04-pool-nodes.md":`---
id: poolNodes
slug: pool-nodes
title: Pool Nodes и Inside Fees
navTitle: Pool Nodes
description: Используйте Pool Nodes для live data BTC, FB, LTC, DOGE и BELLS, а также inside fee и official fee.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 4
---

# Pool Nodes и Inside Fees

![Рабочая область Pool Nodes](/image/docs/custom-management/features/zh/pool-nodes.png)

*Pool Nodes показывает live node data по монетам и поддерживает PoolNode-specific fee settings.*

Страница Pool Nodes предназначена для PoolNode-сценариев. Она независима от обычной RustMinerSystem proxy wallet config. Inside fee на этой странице применяется к pool-node клиентам с тем же CID.

## Поддерживаемые монеты

| Tab | Config coin |
| --- | --- |
| BTC | PI-BTC |
| FB | PI-FB |
| LTC | VA-LTC |
| DOGE | VA-DOGE |
| BELLS | VA-BELLS |

При переключении tab перезагружаются node list, online devices, offline devices и total hashrate.

## Summary Cards

| Метрика | Описание |
| --- | --- |
| Management scopes | Видимые CID выбранной монеты. |
| Online devices | Online устройства выбранной монеты. |
| Offline devices | Offline устройства выбранной монеты. |
| Hashrate | Live node hashrate выбранной монеты. |

Поиск фильтрует CID, email или custom name.

## Node List

Список содержит CID, custom name, live hashrate, online/offline devices, fee email, official fee, inside fee и действия.

Fee email должен быть зарегистрирован на странице RUST pool-node. Не используйте email с сайта пула вместо него.

## Inside Fee

Нажмите \`Inside Fee\` в строке, чтобы задать inside fee для CID и монеты.

- Email уже должен быть зарегистрирован в RUST pool-node page.
- Процент должен быть от \`0\` до \`5\`.
- Inside fee не входит в official bill ratio.

## Official Fee

Аккаунты с нужными правами могут задавать \`Official Fee\`. Остальные аккаунты обычно видят только inside fee или read-only node data.

Перед изменением official fee подтвердите CID, монету, fee email и бизнес/финансовую договоренность.

## Отличие от Service Management

| Страница | Управляет |
| --- | --- |
| Service Management | Coin permissions, wallet fee config, historical versions и client details. |
| Pool Nodes | Pool-node live data, online/offline devices, inside fees и official fees. |

Для обычной proxy fee config сначала проверяйте Service Management. Для PoolNode customers - эту страницу.

## Советы

- Перед сохранением подтвердите выбранную монету.
- В длинном списке ищите по CID или email.
- Не смешивайте inside fee и official fee.
- После сохранения обновите список и проверьте новый ratio.
`,"./ru/custom-management/guide/05-audits-permissions.md":`---
id: auditsPermissions
slug: audits-permissions
title: Audit и Permission Assignment
navTitle: Audit & Permissions
description: Используйте аккаунт с audit permission для approval wallet changes и управления видимостью аккаунтов.
category: operations
categoryTitle: Эксплуатация
categoryOrder: 3
order: 5
---

# Audit и Permission Assignment

\`Audit List\` и \`Permission Assignment\` централизуют high-risk config review и управление областями аккаунтов.

## Audit List

Audit List обрабатывает wallet configuration requests от клиентов или downstream operators.

| Тип | Описание |
| --- | --- |
| Add wallet | Добавить wallet configuration для CID и монеты. |
| Edit wallet | Изменить wallet address, subaccount, ratio, device name или pool strategy. |
| Delete wallet | Удалить существующий wallet configuration. |

Страница имеет вкладки \`Pending\`, \`Approved\` и \`All Requests\`. Запись содержит CID, custom name, coin, wallet address, subaccount, ratio, device name, pool mode, protocol, version и submitted time.

## Audit Operations

1. Ищите по request ID, CID, custom name, coin, wallet address, device name или version.
2. Проверьте pending requests.
3. Сверьте CID, coin, ratio, device name и version.
4. Approve одну запись или batch approve выбранные.
5. Удаляйте явно ошибочные или повторные requests при необходимости.

Approved wallet changes становятся доступными к применению. Delete тоже является production write, поэтому подтвердите, что конфигурация больше не нужна.

## Permission Assignment

Permission Assignment определяет, какие аккаунты видят и обслуживают какие custom builds. Администратор выбирает parent account и прикрепляет к нему другие аккаунты.

| Область | Назначение |
| --- | --- |
| Accounts | Общее число управляемых аккаунтов. |
| Current children | Прямые дочерние аккаунты выбранного parent. |
| Current parent | CID, который сейчас просматривается. |
| Permission structure | Просмотр дерева и переход вниз по иерархии. |
| Assign account | Прикрепить аккаунт к текущему parent. |

## Изменение Ownership

Чтобы назначить аккаунт, откройте \`Permission Assignment\`, подтвердите current parent, найдите аккаунт, выберите его и нажмите \`Assign\`.

Чтобы удалить связь, найдите аккаунт в child list текущего parent и нажмите \`Remove\`. Аккаунт будет удален из этой parent scope.

## Влияние прав

- Dashboard считает только CID, видимые текущему аккаунту.
- Service Management показывает только services текущей области.
- Аккаунты без нужных прав не видят Audit List и Permission Assignment.
- Wallet config от downstream accounts все равно требует review аккаунтом с audit permission.

## Safety Advice

- При audit сначала проверяйте CID, coin, ratio и version.
- Перед batch approval подтвердите, что все выбранные requests относятся к одной задаче.
- После изменения прав попросите downstream account войти заново и проверить область.
- Не назначайте одному standard management account слишком много несвязанных клиентов.
`,"./ru/poolnode/guide/01-overview.md":`---
id: overview
slug: 
title: Обзор документации PoolNode
navTitle: Обзор
description: Группы PoolNode, центр конфигурации, консоль операций, майнинговые порты, сайт пула, доходы, PoolNodeAPP и Open API.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 1
---


# Документация PoolNode

PoolNode — модуль собственного pool-node в семействе RustMinerSystem. Он нужен операторам, которым требуется сайт пула, регистрация пользователей, запросы воркеров и доходов, а также настройка комиссии узла по монетам. В отличие от обычного proxy сторонних пулов, PoolNode строит процессы вокруг группы CODE/TOKEN: майнинговые порты, публичный сайт, аккаунты, доходы, адреса выплат, PoolNodeAPP и Open API.

Установку сервера RustMinerSystem, безопасность backend и обычные proxy-порты смотрите в [документации RustMinerSystem](/ru/document/rustminersystem). Этот раздел описывает процессы PoolNode.

## Когда нужен PoolNode

- Нужен собственный вход pool-node, а не только proxy в сторонний пул.
- Нужен пользовательский сайт для регистрации, воркеров, hashrate, доходов и выплат.
- Нужно вести комиссии узла, email доходов, адреса выплат и минимумы по монетам.
- Несколько серверов должны работать как одна группа с общими портами, запросами и частью операционных настроек.
- Планируется подключить PoolNodeAPP или собственный пользовательский инструмент.

## Структура страницы backend

| Область | Назначение |
| --- | --- |
| Фильтр монет | Верхнее горизонтальное меню монет с поддерживаемыми монетами и комиссиями. Переключение обновляет метрики и порты. |
| Центр конфигурации | Управляет сайтом, операционными функциями, APP communication, Open API и состоянием входа узла. |
| Операционная консоль | Показывает подсказки узла, ссылку на tutorial, обновление данных и быстрые действия доходов. |
| Рабочая область портов | Показывает статус, протокол, регион, локальные соединения, latency и действия для портов выбранной монеты. |

## Базовый порядок включения

1. Откройте "Pool Node" в backend RustMinerSystem.
2. Активируйте существующим CODE/TOKEN или создайте новый узел.
3. Выберите монету в верхних вкладках.
4. Добавьте майнинговые порты PoolNode, выберите протокол и регион, выполните тест связности.
5. Настройте публичный сайт, маршрут, шаблон, logo, объявление, HTTPS и сертификат.
6. Зарегистрируйте email доходов, настройте комиссии, адреса выплат, минимумы, комиссии subaccount, rebates и малые выплаты.
7. Настройте связь PoolNodeAPP и проверьте invitation code.
8. Откройте сайт пула и проверьте адрес майнинга, регистрацию, login, запросы и APP.

Аккаунты не общие между разными группами CODE/TOKEN. Пользователь должен зарегистрироваться на сайте текущего узла, чтобы майнить и видеть данные в текущей группе.

## Разделы функций

| Раздел | Для чего используется |
| --- | --- |
| [Активация и идентификатор](/ru/document/poolnode/activation) | Заявка на узел, активация существующего узла, CODE/TOKEN и выход из текущего состояния входа. |
| [Майнинговые порты](/ru/document/poolnode/mining-ports) | Создание портов PoolNode, выбор протокола и региона, тест связности и адреса для сайта. |
| [Сайт пула](/ru/document/poolnode/website) | Публичный доступ, маршрут сайта, шаблон, logo, объявления, HTTPS и сертификаты. |
| [Доходы и комиссии](/ru/document/poolnode/revenue) | Email доходов, доходы и выплаты, комиссии узла, subaccount и малые выплаты. |
| [PoolNodeAPP](/ru/document/poolnode/app-api) | Адрес связи PoolNodeAPP, invitation code и проверка пользовательской стороны. |
| [Open API](/ru/document/poolnode/api-notes) | Пользовательские API PoolNode для собственных фронтендов, мобильных приложений и интеграций. |
| [Эксплуатация](/ru/document/poolnode/operations) | Метрики, журнал синхронизации, изменения на группе серверов и диагностика. |

## Общие и локальные настройки

Синхронизируемые настройки влияют на всю группу CODE/TOKEN: определения портов, комиссии узла, email доходов, пользовательские данные и часть настроек сайта. Локальные настройки действуют только на текущий сервер: показ порта на сайте, пользовательский адрес показа, порт сайта, маршрут и состояние сертификата.
`,"./ru/poolnode/guide/02-activation.md":`---
id: poolnodeActivation
slug: activation
title: Активация и идентификатор узла
navTitle: Активация
description: Создайте идентификатор PoolNode, активируйте узел через CODE и TOKEN и поймите общее состояние серверов одной группы.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 2
---

# Активация И Идентификатор Узла

Активация PoolNode привязывает текущий backend RustMinerSystem к группе PoolNode. Группа определяется через \`CODE\` и \`TOKEN\`; каждый сервер с той же парой входит в эту же группу.

## Назначение Функции

Используйте активацию, когда этот сервер должен участвовать в сайте PoolNode, майнинговых портах, пользовательских запросах и настройках доходов. Без активации страница PoolNode показывает только форму активации или заявки.

## Создать Новый Узел

1. Откройте \`Pool Node\` в backend.
2. Перейдите на вкладку \`Apply Node\`.
3. Введите имя узла. Китайские имена поддерживаются.
4. Пройдите captcha.
5. После успеха скачайте и сохраните файл \`code-token.txt\`.

Полученные \`CODE\` и \`TOKEN\` являются идентификатором группы. Храните их офлайн или в менеджере паролей. Любой, у кого есть оба значения, может добавить другой сервер в эту группу.

## Активировать Существующий Узел

1. Откройте \`Pool Node\`.
2. Перейдите на вкладку \`Activate Node\`.
3. Введите существующие \`CODE\` и \`TOKEN\`.
4. Пройдите captcha.
5. Дождитесь загрузки конфигурации узла, портов, шаблонов, доходов и статистики.

После активации появятся вкладки монет, центр конфигурации, быстрые входы доходов, метрики узла и рабочая область портов.

## Поведение Серверов Одной Группы

Серверы с одной парой \`CODE\` и \`TOKEN\` входят в одну группу. Обычно они разделяют пользователей, данные запросов, комиссии узла и определения синхронизируемых портов. Адрес сайта для показа, маршрут сайта и состояние сертификата могут оставаться локальными для сервера.

Перед добавлением синхронизируемого порта проверьте, что этот порт свободен на каждом сервере группы. Конфликт на одном хосте может привести к частичной синхронизации и ошибке запуска порта.

## Выйти Из Текущего Узла

В центре конфигурации есть \`Node Login State\` и \`Exit Current Node\`. Это только удаляет связь текущего backend с узлом. Идентификатор узла не удаляется. Позже можно снова активироваться тем же \`CODE\` и \`TOKEN\`.

## Быстрые Проверки

- CODE и TOKEN сохранены.
- Все серверы, которые должны быть в одной группе, используют одну пару.
- Изолированные узлы используют разные пары.
- После активации обновите PoolNode и проверьте имя текущей группы.
`,"./ru/poolnode/guide/03-mining-ports.md":`---
id: poolnodeMiningPorts
slug: mining-ports
title: Майнинговые порты
navTitle: Порты
description: Создание и управление портами PoolNode, протоколами, регионами, тестами связности, локальными адресами показа и рабочей областью портов.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 3
---


# Майнинговые порты

Майнинговые порты PoolNode — адреса, к которым подключаются пользовательские майнеры. Рабочая область портов следует выбранной монете и показывает статус, порт, remark, протокол, регион, локальные соединения, latency и действия.

## Назначение

Используйте порты, чтобы открыть PoolNode access для монеты. Определения портов синхронизируются в группе CODE/TOKEN, а настройки показа сайта можно менять на каждом сервере.

## Создать порт

1. Откройте \`Pool Node\`.
2. Выберите монету в верхних вкладках.
3. Нажмите \`Add Port\`.
4. Заполните синхронизируемые настройки: монета, порт, remark, протокол и регион.
5. Выполните тест связности региона.
6. Заполните локальные настройки показа: показывать ли адрес на сайте и пользовательский адрес.
7. Сохраните порт.

Перед сохранением убедитесь, что порт свободен на всех серверах группы.

## Синхронизируемые настройки

| Настройка | Описание |
| --- | --- |
| Монета | Монета, поддерживаемая портом. |
| Порт | Локальный порт прослушивания. |
| Remark | Операционная пометка. |
| Протокол | TCP, TLS/SSL, TTS, RMS, RMS2, RMS3, RMS3(Zstd) или другой доступный протокол. |
| Регион | Backend-регион выбранной монеты; перед публикацией выполните тест. |

Чтобы изменить монету, протокол, порт или регион, удалите и создайте порт заново.
`,"./ru/poolnode/guide/04-website.md":`---
id: poolnodeWebsite
slug: website
title: Сайт пула
navTitle: Сайт пула
description: Настройка публичного сайта PoolNode, порта, маршрута, шаблона, содержимого, HTTPS и сертификата.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 4
---


# Сайт пула

PoolNode включает пользовательский сайт пула. Он показывает адреса майнинга, регистрацию, worker, hashrate, доходы, выплаты и аккаунт.

## Назначение

Раздел \`Website Access\` в центре конфигурации управляет публичным доступом, маршрутом, шаблоном, содержимым, HTTPS и сертификатом.

## Публичный доступ

\`Public website access\` определяет, доступен ли сайт из публичной сети. Майнинговые порты он не останавливает.

## Маршрут сайта

| Настройка | Описание |
| --- | --- |
| Порт сайта | HTTP/HTTPS порт сайта. |
| Маршрут | Необязательный путь, например \`pool\`; без протокола, домена, начального или конечного slash и query string. |

Сохранение порта или маршрута перезапускает сайт.

## Шаблон и содержимое

Можно выбрать встроенный шаблон или удаленную версию. Нестандартные шаблоны скачиваются узлом; при ошибке проверьте доступ к GitHub или источнику шаблона. Содержимое сайта включает logo, названия, subtitle, announcement, footer HTML, rotation, показ комиссии и JSON import/export.

## HTTPS и сертификат

Если TLS завершается в Nginx, Cloudflare или другом reverse proxy, встроенный HTTPS обычно не нужен. Диалог сертификата позволяет загрузить сертификат и ключ или восстановить встроенный сертификат; после сохранения сайт перезапускается.
`,"./ru/poolnode/guide/05-revenue.md":`---
id: poolnodeRevenue
slug: revenue
title: Доходы и комиссии
navTitle: Доходы
description: Регистрация email доходов, запрос доходов и выплат, комиссии узла, rebates subaccount и малые выплаты.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 5
---


# Доходы и комиссии

Инструменты доходов доступны в быстрых действиях операционной консоли и в разделе \`Operations\` центра конфигурации. Они включают регистрацию email доходов, запрос доходов, комиссии узла, subaccount, rebates, observer и малые выплаты.

## Быстрые действия

| Действие | Назначение |
| --- | --- |
| Revenue mailbox registration | Email для комиссии узла, проверки адреса выплат и rebates. |
| Revenue query | Доходы, журналы выплат, адрес и минимум выплаты. |
| Node fee | Комиссия и email доходов по монетам. |
| Subaccount management | Отдельная комиссия, rebate и observer. |
| Small withdrawal | Запрос малого баланса и отправка заявки. |

Email доходов не является майнинговым аккаунтом.

## Доходы, выплаты и комиссии

Выберите монету и email доходов, чтобы загрузить overview, журналы, адрес выплаты и минимум. Сохранение адреса отправляет код на email. Комиссия узла сохраняется по монете вместе с email доходов.

## Subaccount и малые выплаты

Subaccount management позволяет задать отдельную комиссию, вернуть default, настроить rebate и observer. Small withdrawal используется для баланса ниже автоматического минимума; если адрес выплаты не настроен, сначала заполните его в revenue query.
`,"./ru/poolnode/guide/06-app-api.md":`---
id: poolnodeAppApi
slug: app-api
title: Использование PoolNodeAPP
navTitle: PoolNodeAPP
description: Настройте связь PoolNodeAPP, проверьте имя узла и код приглашения, затем проверьте регистрацию, вход и запросы в мобильном приложении.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 6
---


# Использование PoolNodeAPP

PoolNodeAPP — мобильный вход для пользователей PoolNode. Он отвечает за регистрацию, login и запросы аккаунта. Документация Open API вынесена в отдельную категорию [Open API](/ru/document/poolnode/api-notes).

## Назначение функции

APP communication configuration связывает мобильное приложение с текущим сайтом PoolNode или отдельным API endpoint той же группы. Если адрес не настроен, пользователи могут не зарегистрироваться, не войти или не получить данные в APP.

## Настроить связь APP

1. Откройте "Configuration Center".
2. Выберите "Docs And API".
3. Откройте "APP Communication Configuration".
4. Проверьте текущий сайт, имя узла и invitation code.
5. Введите "APP API Access Address".
6. Сохраните настройку.
7. Нажмите "Reload" или откройте диалог снова, чтобы проверить invitation code и URL.

Адрес должен быть доступен пользователям. Если публичный сайт включен, обычно подходит текущий адрес сайта. Если для той же группы используется отдельный APP gateway, укажите его публичный адрес.

## Имя узла и invitation code

"Node name" отображается в APP. "Invitation code" — числовой код, который пользователь вводит при регистрации в текущем узле; он создается после сохранения адреса связи.

Если пользователь попал в неправильную группу, сначала проверьте APP address и invitation code.

## Проверка перед публикацией

- Новый пользователь регистрируется с invitation code.
- После входа он попадает в текущую группу узла.
- Worker, hashrate, доходы и выплаты отображаются правильно.
- HTTPS адрес имеет валидный сертификат.
- Данные другой CODE/TOKEN группы не появляются.
`,"./ru/poolnode/guide/07-operations.md":`---
id: poolnodeOperations
slug: operations
title: Эксплуатация PoolNode
navTitle: Эксплуатация
description: Мониторинг PoolNode, синхронизация, изменения на группе серверов, доступность сайта, инциденты портов и восстановление.
category: operations
categoryTitle: Эксплуатация
categoryOrder: 4
order: 42
---


# Эксплуатация PoolNode

Dashboard PoolNode — операционная консоль текущей группы. Он объединяет фильтр монет, центр конфигурации, быстрые действия доходов, метрики, синхронизацию и рабочую область портов.

## Ежедневные проверки

- Активная монета выбрана правильно.
- Количество устройств близко к ожидаемому.
- 10-минутный и 24-часовой hashrate выглядят разумно.
- Счетчики sync success/fail стабильны.
- Статус портов, локальные соединения, latency и регион нормальные.

Нажмите метрику sync, чтобы открыть журнал синхронизации.

## Изменения на группе серверов

1. Проверьте доступность порта на каждом сервере.
2. Добавьте или удалите порт в одном backend.
3. Обновите dashboard каждого сервера.
4. Убедитесь, что порт появился и работает.
5. Проверьте локальные адреса показа сайта.
6. Откройте публичный сайт и проверьте список адресов.

Для APP и API проверьте публичный адрес APP, invitation code, базовый API path, заголовок authorization и captcha flow.
`,"./ru/poolnode/guide/08-api-notes.md":`---
id: poolnodeApiNotes
slug: api-notes
title: Примечания API
navTitle: Примечания API
description: Открытый API PoolNode: Примечания API.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 7
---


# Примечания API

В этом разделе описаны базовый URL пользовательского API PoolNode, заголовок авторизации, captcha и правила параметров монет.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

此 API 为 PoolNode 用户端开放接口，可用于开发自有用户前端、APP、管理工具或第三方查询工具。

注意：

接口调用地址为

\`\`\`
用户端访问地址:端口+安全地址
(如果未设置安全地址，则调用路径为用户端访问地址:端口)

例：

例如您的用户端访问地址为 http://127.0.0.1/{安全地址}/
则 API 调用地址为 http://127.0.0.1/{安全地址}/{API URL}

如未设置安全地址, 则直接调用根路径即可
\`\`\`

【**注意**】 **所有接口除登录外，均需要在请求头使用Authorization字段来传入token以验证身份, token获取方式详见**[**登录、获取TOKEN**](/ru/document/poolnode/api-login-token)**,   调用其他接口时header应传入**

请求头的\`Content-Type\` 应为 \`application/json\`

\`\`\`
Authorization: Bearer 获取到的TOKEN
\`\`\`

部分接口需要传入滑动验证码成功后的返回值,   关于滑动验证码调用请参考[滑动验证码](/ru/document/poolnode/api-captcha)。

**注意：**

由于历史原因，所有接口需要传入币种的参数均需要加入特殊标记，例如BTC需要传PI-BTC,  以下为币种参数对照表。

BTC:  **PI-BTC**

LTC: **VA-LTC （赠币跟随主币, 例如DOGE为VA-DOGE）**

KAS: **KAS**

ETC: **ETC**

## Старый источник

- [API使用注意事项(必读)](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/api-shi-yong-zhu-yi-shi-xiang-bi-du.md)
`,"./ru/poolnode/guide/09-api-captcha.md":`---
id: poolnodeApiCaptcha
slug: api-captcha
title: Вызов captcha и получение token
navTitle: Вызов captcha и получение token
description: Открытый API PoolNode: Вызов captcha и получение token.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 8
---


# Вызов captcha и получение token

Некоторым пользовательским API нужен успешный token slider-captcha перед отправкой запроса.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

由于部分接口需要传入滑动验证码返回值， WEB端可通过iframe嵌入指定路径来调用验证码组件，通过postMessage方式拿到成功、失败以及关闭的回调。APP端目前仅支持uniapp开发的APP，通过webview以及uniappSDK可进行验证码插件调用。

以携带了安全地址的访问地址为例（如未设置安全地址，则不需要携带自定义安全地址这一层路径）

\`\`\`
// 验证码插件路径
/captcha/html/index.html

// 例如您的用户端访问地址为: 
http://127.0.0.1:3333/anquandizhi/

// 滑动验证码插件访问地址则为:
http://127.0.0.1:3333/anquandizhi/captcha/html/index.html
\`\`\`

将iframe或webview的src设置为插件访问地址，即可调用滑动验证码，当滑动验证码发生事件时，WEB端或APP端将收到postMessage响应，以下为父页面收到响应示例。

**WEB端**

\`\`\`
// WEB端

<script>
window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) return;

    const message = event.data;
    if (typeof message === "object") {
        console.log("CAPTCHA:", message);
    }
});
<script>
\`\`\`

事件发生时，插件页面会给父页面响应一个object，以下为object描述。

\`\`\`javascript
// 验证通过, data字段为验证成功后的返回值
{
    action: 'success',
    data: String
}

// 验证失败, data字段为验证失败后返回的失败明细
{
    action: 'error',
    data: Object
}

// 验证码被关闭
{
    action: 'close'
}
\`\`\`

Uniapp端使用webview组件调用远程服务器插件访问地址即可调用，给WEBVIEW绑定handleMessage即可用来接收验证码插件响应，具体事件监听请参考uniapp官方文档。

## Старый источник

- [调用、获取滑动验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/diao-yong-huo-qu-hua-dong-yan-zheng-ma.md)
`,"./ru/poolnode/guide/10-api-send-login-email.md":`---
id: poolnodeApiSendLoginEmail
slug: api-send-login-email
title: Отправка кода входа на email
navTitle: Отправка кода входа на email
description: POST /api/email: Отправка кода входа на email.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 9
---


# Отправка кода входа на email

В этом разделе описаны запрос, параметры и ответ для \`POST /api/email\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
\`\`\`

滑动验证码返回值获取请参考[调用、获取滑动验证码](/ru/document/poolnode/api-captcha)

## Старый источник

- [发送登录邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-deng-lu-you-xiang-yan-zheng-ma.md)
`,"./ru/poolnode/guide/11-api-send-user-email.md":`---
id: poolnodeApiSendUserEmail
slug: api-send-user-email
title: Отправка кода email для операций пользователя
navTitle: Отправка кода email для операций пользователя
description: POST /api/user/email: Отправка кода email для операций пользователя.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 10
---


# Отправка кода email для операций пользователя

В этом разделе описаны запрос, параметры и ответ для \`POST /api/user/email\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

用户登录之后，一些用户操作相关接口需要获取邮箱验证码,  例如修改、绑定支付钱包地址等操作，统一通过此接口发送邮件验证码。

\`\`\`
URL: 
/api/user/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
\`\`\`

滑动验证码返回值获取请参考[调用、获取滑动验证码](/ru/document/poolnode/api-captcha)

## Старый источник

- [发送用户相关操作邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-yong-hu-xiang-guan-cao-zuo-you-xiang-yan-zheng-ma.md)
`,"./ru/poolnode/guide/12-api-login-token.md":`---
id: poolnodeApiLoginToken
slug: api-login-token
title: Вход и получение TOKEN
navTitle: Вход и получение TOKEN
description: POST /api/user/login: Вход и получение TOKEN.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 11
---


# Вход и получение TOKEN

В этом разделе описаны запрос, параметры и ответ для \`POST /api/user/login\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/user/login

METHOD: 
POST

REQUEST BODY:
{
    email: String,    // 登录的邮箱地址
    code: String      // 获取到的邮箱验证码
}

RESULT:
{
    "status": 0,
    "error": null,
    "data": Token
}
\`\`\`

发送邮箱验证码请参考[发送登录邮箱验证码](/ru/document/poolnode/api-send-login-email)

后续所有接口都需要在请求头内加入Authorization字段，值为Bearer {Token}，用来过身份验证。

\`\`\`
// headers
{
    Authorization: Bearer Token
}
\`\`\`

## Старый источник

- [登录、获取TOKEN](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/deng-lu-huo-qu-token.md)
`,"./ru/poolnode/guide/13-api-user-info.md":`---
id: poolnodeApiUserInfo
slug: api-user-info
title: Получить базовые данные пользователя
navTitle: Получить базовые данные пользователя
description: GET /api/user/info: Получить базовые данные пользователя.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 12
---


# Получить базовые данные пользователя

В этом разделе описаны запрос, параметры и ответ для \`GET /api/user/info\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/user/info

METHOD: 
GET

RESULT:
{
    "email": String,        // 用户的主账号邮箱地址
    "project_id": Number,   // 无需关注
    "user_id": Number       // 用户uid
}
\`\`\`

## Старый источник

- [获取用户基础信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-yong-hu-ji-chu-xin-xi.md)
`,"./ru/poolnode/guide/14-api-subaccount-list.md":`---
id: poolnodeApiSubaccountList
slug: api-subaccount-list
title: Получить список subaccount
navTitle: Получить список subaccount
description: GET /api/subaccount/list?coin={coin}: Получить список subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 13
---


# Получить список subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/list?coin={coin}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/list?coin={coin}

METHOD: 
GET

PARAMS:
coin 传入当前选中的币种（子账号列表中会携带选中币种的实时算力）

RESULT:
[
    {
        "hashrate": "1970324836974591.97",    // 传入币种的实时算力
        "id": 149,                            // 子账户的sid
        "name": "504132878",                  // 子账号
        "remark": null                        // 备注
    }
]
\`\`\`

## Старый источник

- [获取子账号列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zi-zhang-hao-lie-biao.md)
`,"./ru/poolnode/guide/15-api-create-subaccount.md":`---
id: poolnodeApiCreateSubaccount
slug: api-create-subaccount
title: Создать subaccount
navTitle: Создать subaccount
description: POST /api/subaccount/new: Создать subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 14
---


# Создать subaccount

В этом разделе описаны запрос, параметры и ответ для \`POST /api/subaccount/new\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/new

METHOD: 
POST

REQUEST BODY:
{
    name: String,    // 要创建的子账号
    remark: String,  // 子账号备注  
    coin: String     // 币种 'BTC、LTC、ETC、KAS.....'
}
\`\`\`

## Старый источник

- [创建子账号](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/chuang-jian-zi-zhang-hao.md)
`,"./ru/poolnode/guide/16-api-set-payout-address.md":`---
id: poolnodeApiSetPayoutAddress
slug: api-set-payout-address
title: Настроить адрес выплаты
navTitle: Настроить адрес выплаты
description: POST /api/subaccount/update/address: Настроить адрес выплаты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 15
---


# Настроить адрес выплаты

В этом разделе описаны запрос, параметры и ответ для \`POST /api/subaccount/update/address\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/update/address

METHOD: 
POST

REQUEST BODY:

{
    "id": sid,        // 子账户的sid
    "code": code,     // 邮箱验证码
    "coin": form.selectCoin,    // 币种
    "address": form.addr,       // 匿名付款地址
    "amount": form.account      // 起付额 String类型
}
\`\`\`

邮箱验证码请参考[发送用户相关操作邮箱验证码](/ru/document/poolnode/api-send-user-email)

最小起付额数值不得低于下方列表:

BTC:  0.001

FB: 0.1

LTC: 0.01

DOGE: 50

BEL: 1

KAS: 20

ETC: 0.2

## Старый источник

- [设置付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/she-zhi-fu-kuan-di-zhi.md)
`,"./ru/poolnode/guide/17-api-get-payout-address.md":`---
id: poolnodeApiGetPayoutAddress
slug: api-get-payout-address
title: Получить адрес выплаты
navTitle: Получить адрес выплаты
description: POST /api/subaccount/address/info: Получить адрес выплаты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 16
---


# Получить адрес выплаты

В этом разделе описаны запрос, параметры и ответ для \`POST /api/subaccount/address/info\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/address/info

METHOD: 
POST

PARAMS:
{
    "id": 149,        // 子账号sid
    "coin": "BTC"     // 币种
}

RESULT:
[
    {
        "address": "addres",    // 已设置的支付地址
        "amount": "0.001",    // 已设置的起付额
        "coin": "BTC"        // 币种
    }
]
\`\`\`

## Старый источник

- [获取付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-fu-kuan-di-zhi.md)
`,"./ru/poolnode/guide/18-api-total-worker-status.md":`---
id: poolnodeApiTotalWorkerStatus
slug: api-total-worker-status
title: Получить общее число online и offline майнеров
navTitle: Получить общее число online и offline майнеров
description: GET /api/user/workers?coin={coin}: Получить общее число online и offline майнеров.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 17
---


# Получить общее число online и offline майнеров

В этом разделе описаны запрос, параметры и ответ для \`GET /api/user/workers?coin={coin}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/user/workers?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "lost": null || Number,        // 失效数量
    "offline": null || Number,     // 离线数量
    "online": null || Number       // 在线数量
}
\`\`\`

此接口是获取所有子账号的数据统计之和，如需获取指定子账号下设备数量，请参考获取指定子账号设备数量接口。

## Старый источник

- [获取所有子账号矿机在线、离线数量总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-kuang-ji-zai-xian-li-xian-shu-liang-zong-he.md)
`,"./ru/poolnode/guide/19-api-total-hashrate.md":`---
id: poolnodeApiTotalHashrate
slug: api-total-hashrate
title: Получить общий hashrate subaccount
navTitle: Получить общий hashrate subaccount
description: GET /api/user/hashrate?coin={coin}: Получить общий hashrate subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 18
---


# Получить общий hashrate subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/user/hashrate?coin={coin}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/user/hashrate?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "hashrate": null,        // 实时算力
    "hashrate1440": null     // 24小时平均算力
}
\`\`\`

## Старый источник

- [获取所有子账号算力总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-zong-he.md)
`,"./ru/poolnode/guide/20-api-total-hashrate-chart.md":`---
id: poolnodeApiTotalHashrateChart
slug: api-total-hashrate-chart
title: Получить общий график hashrate subaccount
navTitle: Получить общий график hashrate subaccount
description: GET /api/user/hashrate/detail?coin={coin}&mode={mode}: Получить общий график hashrate subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 19
---


# Получить общий график hashrate subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/user/hashrate/detail?coin={coin}&mode={mode}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/user/hashrate/detail?coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
mode传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
\`\`\`

## Старый источник

- [获取所有子账号算力曲线总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-qu-xian-zong-he.md)
`,"./ru/poolnode/guide/21-api-subaccount-hashrate-chart.md":`---
id: poolnodeApiSubaccountHashrateChart
slug: api-subaccount-hashrate-chart
title: Получить график hashrate subaccount
navTitle: Получить график hashrate subaccount
description: GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}: Получить график hashrate subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 20
---


# Получить график hashrate subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
sid 传入指定子账号sid
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
\`\`\`

## Старый источник

- [获取指定子账号算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-qu-xian.md)
`,"./ru/poolnode/guide/22-api-total-profit.md":`---
id: poolnodeApiTotalProfit
slug: api-total-profit
title: Получить общий доход subaccount
navTitle: Получить общий доход subaccount
description: GET /api/user/profit?coin={coin}: Получить общий доход subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 21
---


# Получить общий доход subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/user/profit?coin={coin}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/user/profit?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
\`\`\`

## Старый источник

- [获取所有子账号收益总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-shou-yi-zong-he.md)
`,"./ru/poolnode/guide/23-api-subaccount-status.md":`---
id: poolnodeApiSubaccountStatus
slug: api-subaccount-status
title: Получить hashrate и статус subaccount
navTitle: Получить hashrate и статус subaccount
description: GET /api/subaccount/hashrate?coin={coin}&sid={sid}: Получить hashrate и статус subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 22
---


# Получить hashrate и статус subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/hashrate?coin={coin}&sid={sid}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/hashrate?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
{
    "avg_hashrate1440": "0",    // 24小时平均算力
    "hashrate": "0",            // 当前算力
    "lost": 0,                  // 失效设备数量
    "offline": 0,               // 离线数量
    "online": 0                 // 在线数量
}
\`\`\`

## Старый источник

- [获取指定子账号算力、在线离线信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-zai-xian-li-xian-xin-xi.md)
`,"./ru/poolnode/guide/24-api-coin-hashrate-list.md":`---
id: poolnodeApiCoinHashrateList
slug: api-coin-hashrate-list
title: Получить список hashrate и устройств по монетам
navTitle: Получить список hashrate и устройств по монетам
description: GET /api/coin/hashrate: Получить список hashrate и устройств по монетам.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 23
---


# Получить список hashrate и устройств по монетам

В этом разделе описаны запрос, параметры и ответ для \`GET /api/coin/hashrate\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/coin/hashrate

METHOD: 
GET

RESULT:
[
    {
        "coin": "BTC",
        "hashrate": "1.355771137822993e15",
        "offline": "0",
        "online": "7"
    },
    {
        "coin": "KAS",
        "hashrate": "4277000000000",
        "offline": "0",
        "online": "1"
    }
]
\`\`\`

## Старый источник

- [获取币种算力、设备数量列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-bi-zhong-suan-li-she-bei-shu-liang-lie-biao.md)
`,"./ru/poolnode/guide/25-api-subaccount-profit.md":`---
id: poolnodeApiSubaccountProfit
slug: api-subaccount-profit
title: Получить доход subaccount
navTitle: Получить доход subaccount
description: GET /api/subaccount/profit?coin={coin}&sid={sid}: Получить доход subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 24
---


# Получить доход subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/profit?coin={coin}&sid={sid}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/profit?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
\`\`\`

## Старый источник

- [获取指定子账号收益](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-shou-yi.md)
`,"./ru/poolnode/guide/26-api-mining-node-address.md":`---
id: poolnodeApiMiningNodeAddress
slug: api-mining-node-address
title: Получить адреса майнинговых узлов
navTitle: Получить адреса майнинговых узлов
description: GET /api/open/poolnode: Получить адреса майнинговых узлов.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 25
---


# Получить адреса майнинговых узлов

В этом разделе описаны запрос, параметры и ответ для \`GET /api/open/poolnode\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

此接口用来获取PoolNode 后台配置的挖矿地址及端口

\`\`\`
URL: 
/api/open/poolnode

METHOD: 
GET

RESULT:
[
    {
        "endpoint_id": 12,             // 挖矿节点id
        "endpoint_name": "亚洲-1",      // 节点地区
        "coin": "BTC",                // 币种
        "name": "address",            // 挖矿地址（域名或ip）
        "port": 6006,                 // 挖矿端口
        "protocol": 1,                // 地址协议 0为TCP 1为SSL 2为RMS 3为TCP SSL双协议 5为RMS2
        "remark": ""
    },
    {
        "endpoint_id": 12,
        "endpoint_name": "亚洲-1",
        "coin": "BTC",
        "name": "address",
        "port": 6010,
        "protocol": 5,
        "remark": ""
    },
    {
        "endpoint_id": 21,
        "endpoint_name": "通用-1",
        "coin": "KAS",
        "name": "address",
        "port": 8001,
        "protocol": 1,
        "remark": ""
    }
]
\`\`\`

## Старый источник

- [获取挖矿节点地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-wa-kuang-jie-dian-di-zhi.md)
`,"./ru/poolnode/guide/27-api-node-fee.md":`---
id: poolnodeApiNodeFee
slug: api-node-fee
title: Получить комиссию узла
navTitle: Получить комиссию узла
description: GET /api/project/fee: Получить комиссию узла.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 26
---


# Получить комиссию узла

В этом разделе описаны запрос, параметры и ответ для \`GET /api/project/fee\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/project/fee

METHOD: 
GET

RESULT:
[
    {
        "r": "0.01",     // 费率 需要x100得到百分比
        "coin": "BTC"    // 币种
    },
    {
        "r": "0.01",
        "coin": "FB"
    },
    {
        "r": "0.01",
        "coin": "KAS"
    },
    ...
]
\`\`\`

## Старый источник

- [获取节点费率](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-jie-dian-fei-l.md)
`,"./ru/poolnode/guide/28-api-subaccount-worker-list.md":`---
id: poolnodeApiSubaccountWorkerList
slug: api-subaccount-worker-list
title: Получить список майнеров subaccount
navTitle: Получить список майнеров subaccount
description: GET /api/subaccount/workers?coin={coin}&sid={sid}: Получить список майнеров subaccount.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 27
---


# Получить список майнеров subaccount

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/workers?coin={coin}&sid={sid}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/workers?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin 币种
sid 子账号sid

RESULT:
[
    {
        "avgDelayrate1440": 0,
        "avgHashrate1440": "84690086742710.80",
        "avgRejectrate1440": 0.019684,
        "isCool": true,
        "lastShareTime": 1743580208,
        "realtimeHashrate": "107898741072418.13",
        "status": "active",
        "workerName": "rms01"
    }
]
\`\`\`

## Старый источник

- [获取指定子账号下矿工列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-xia-kuang-gong-lie-biao.md)
`,"./ru/poolnode/guide/29-api-worker-hashrate-chart.md":`---
id: poolnodeApiWorkerHashrateChart
slug: api-worker-hashrate-chart
title: Получить график hashrate майнера
navTitle: Получить график hashrate майнера
description: GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}: Получить график hashrate майнера.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 28
---


# Получить график hashrate майнера

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}

METHOD: 
GET

PARAMS:
mode 
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线
worker 传入矿工列表中拿到的workername
sid 子账号sid

RESULT:
{
    "coin": "btc",
    "hashrates": [
        "88195492702672",
        "85693492909688",
        "89446492599164",
        ...
    ],
    "startTime": 1743494100000,
    "timeInterval": 1800,
    "worker": "rms01"
}
\`\`\`

## Старый источник

- [获取指定矿工算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-kuang-gong-suan-li-qu-xian.md)
`,"./ru/poolnode/guide/30-api-reward-bills.md":`---
id: poolnodeApiRewardBills
slug: api-reward-bills
title: Получить список начислений
navTitle: Получить список начислений
description: GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}: Получить список начислений.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 29
---


# Получить список начислений

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account": null,
            "account_type": 0,
            "ar": "1",                             // 当日费率
            "avg_hashrate": "1738588508492292",    // 结算算力
            "biz_coin": null,
            "coin": "BTC",                         // 币种
            "created_at": "2025-04-04T02:00:13Z",
            "day": "2025-04-03T00:00:00Z",
            "day_profit": "0.0009618284643889825", // 日收益
            "diff": "113757508810854",             // 难度
            "email": null,
            "id": 43215,
            "poolin_type": 0,
            "pplns_day_profit": "0.000010654886997250605",
            "pps_day_profit": "0.0009511735773917318",
            "project_id": null,
            "r": "0.9989999999525025",
            "status": 2,                           // 支付状态, 0未支付, 1支付中, 2已支付
            "subaccount_id": null,
            "updated_at": "2025-04-04T02:00:13Z",
            "user_id": null
        },
        ...
    ],
    "total": 1
}
\`\`\`

## Старый источник

- [获取收入账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-shou-ru-zhang-dan-lie-biao.md)
`,"./ru/poolnode/guide/31-api-payout-bills.md":`---
id: poolnodeApiPayoutBills
slug: api-payout-bills
title: Получить список выплат
navTitle: Получить список выплат
description: GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}: Получить список выплат.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 30
---


# Получить список выплат

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account_type": 0,
            "address": "...",                    // 付款地址
            "amount": "0.001920471282518579",    // 付款额
            "coin": "BTC",                            // 支付币种
            "created_at": "2025-04-04T03:24:00Z",
            "id": 5970,
            "ref_reward_ids": [],
            "status": 1,                        // 支付状态 0未支付 1已支付 2支付失败
            "subaccount_id": 149,
            "time": "2025-04-04T00:00:00Z",
            // 交易哈希
            "trans_id": "487021b26291f98061be835fdc06499376ed03b271b07a9d6a00961b49384d2b",
            "updated_at": "2025-04-04T03:24:00Z",
            "user_id": 123999002
}
        ...
    ],
    "total": 1
}
\`\`\`

## Старый источник

- [获取支付账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-fu-zhang-dan-lie-biao.md)
`,"./ru/poolnode/guide/32-api-btc-pool-public-info.md":`---
id: poolnodeApiBtcPoolPublicInfo
slug: api-btc-pool-public-info
title: Получить публичную информацию BTC пула
navTitle: Получить публичную информацию BTC пула
description: GET /api/network/poolinfo: Получить публичную информацию BTC пула.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 31
---


# Получить публичную информацию BTC пула

В этом разделе описаны запрос, параметры и ответ для \`GET /api/network/poolinfo\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/network/poolinfo

METHOD: 
GET

RESULT:
[
    {
        "realtimeHashrate": "31577535200606772264",
        "workerNum": 152994,
        "coin": "btc"
    }
]
\`\`\`

## Старый источник

- [获取BTC矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi.md)
`,"./ru/poolnode/guide/33-api-altcoin-pool-public-info.md":`---
id: poolnodeApiAltcoinPoolPublicInfo
slug: api-altcoin-pool-public-info
title: Получить публичную информацию пула другой монеты
navTitle: Получить публичную информацию пула другой монеты
description: GET /api/network/poolinfo?coin={COIN}: Получить публичную информацию пула другой монеты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 32
---


# Получить публичную информацию пула другой монеты

В этом разделе описаны запрос, параметры и ответ для \`GET /api/network/poolinfo?coin={COIN}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/network/poolinfo?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "ltc": {
        "shares": {
            "shares_1m": 18.972,
            "shares_5m": 18.972,
            "shares_15m": 18.972,
            "shares_1h": 18.972,
            "shares_unit": "T"
        },
        "reject": {
            "1m": 0.0023,
            "5m": 0.0023,
            "15m": 0.0023,
            "1h": 0.0023
        },
        "workers": 3498,
        "users": 14691,
        "total_blocks": 148594,
        "total_rewards": 223357135549860
    }
}
\`\`\`

## Старый источник

- [获取其他币种矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi.md)
`,"./ru/poolnode/guide/34-api-btc-network-info.md":`---
id: poolnodeApiBtcNetworkInfo
slug: api-btc-network-info
title: Получить сетевую информацию BTC
navTitle: Получить сетевую информацию BTC
description: GET /api/network/hashrate: Получить сетевую информацию BTC.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 33
---


# Получить сетевую информацию BTC

В этом разделе описаны запрос, параметры и ответ для \`GET /api/network/hashrate\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/network/hashrate

METHOD: 
GET

RESULT:
[
    {
        "diffculty": "113757508810854",
        "blockReward": 3.125,
        "blockRewardFPPS": 3.15206768,
        "networkHashrate": "850810718614301835264",
        "coin": "btc",
        "theoreticalIncome": 5.6e-7,
        "height": 890513
    }
]
\`\`\`

## Старый источник

- [获取BTC矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi-2.md)
`,"./ru/poolnode/guide/35-api-altcoin-network-info.md":`---
id: poolnodeApiAltcoinNetworkInfo
slug: api-altcoin-network-info
title: Получить сетевую информацию другой монеты
navTitle: Получить сетевую информацию другой монеты
description: GET /api/network/hashrate?coin={COIN}: Получить сетевую информацию другой монеты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 34
---


# Получить сетевую информацию другой монеты

В этом разделе описаны запрос, параметры и ответ для \`GET /api/network/hashrate?coin={COIN}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/network/hashrate?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "LTC": {
        "algorithm": "Scrypt",
        "block_time": 150,
        "block_reward": 6.25,
        "difficulty": 83619823.71858509,
        "net_hash": "2394296033882057",
        "net_hash_one_day": "2329323019112822",
        "net_hash_half_week": "2393607528868074",
        "net_hash_one_week": "2384617523911691",
        "net_hash_two_weeks": "2342096742781520",
        "last_block": 2872444,
        "reward_unit": "G",
        "rewards_per_unit": "0.00150357",
        "rewards_usd_per_unit": "0.12272167",
        "rewards_cny_per_unit": "0.89221162",
        "rewards_btc_per_unit": "0.00000146",
        "previous_difficulty": 82764268.0298935,
        "previous_difficulty_change": "1.03",
        "previous_difficulty_change_time": "2025-03-30 16:54:01 +0800",
        "previous_difficulty_change_time_ts": 1743324841,
        "next_difficulty_change_seconds": 307432,
        "next_difficulty_time": 1743633340,
        "next_difficulty": 82519562.88018265,
        "next_difficulty_change_rate": -0.013157894736842105
    }
}
\`\`\`

## Старый источник

- [获取其他币种矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi-2.md)
`,"./ru/poolnode/guide/36-api-btc-public-hashrate-chart.md":`---
id: poolnodeApiBtcPublicHashrateChart
slug: api-btc-public-hashrate-chart
title: Получить публичный график hashrate BTC
navTitle: Получить публичный график hashrate BTC
description: GET /api/network/hashratedetail: Получить публичный график hashrate BTC.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 35
---


# Получить публичный график hashrate BTC

В этом разделе описаны запрос, параметры и ответ для \`GET /api/network/hashratedetail\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/network/hashratedetail

METHOD: 
GET

RESULT:
{
    "timeInterval": 600,
    "startTime": 1743492900000,
    "hashrates": [
        "31107083202188395151",
        "31060294906903426061",
        "31342220009014338519",
        ...
    ],
    "coin": "btc"
}
\`\`\`

## Старый источник

- [获取BTC矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-suan-li-qu-xian.md)
`,"./ru/poolnode/guide/37-api-altcoin-public-hashrate-chart.md":`---
id: poolnodeApiAltcoinPublicHashrateChart
slug: api-altcoin-public-hashrate-chart
title: Получить публичный график hashrate другой монеты
navTitle: Получить публичный график hashrate другой монеты
description: GET /api/network/hashratedetail?coin={COIN}: Получить публичный график hashrate другой монеты.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 36
---


# Получить публичный график hashrate другой монеты

В этом разделе описаны запрос, параметры и ответ для \`GET /api/network/hashratedetail?coin={COIN}\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/network/hashratedetail?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "unit": "T",
    "tickers": [
        [
            1743472800,
            19.308,
            0.0042
        ],
        [
            1743476400,
            19.363,
            0.0029
        ],
        ...
    ]
}
\`\`\`

## Старый источник

- [获取其他币种矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-suan-li-qu-xian.md)
`,"./ru/poolnode/guide/38-api-site-personalization-config.md":`---
id: poolnodeApiSitePersonalizationConfig
slug: api-site-personalization-config
title: Получить конфигурацию оформления
navTitle: Получить конфигурацию оформления
description: GET /api/subaccount/address/info: Получить конфигурацию оформления.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 37
---


# Получить конфигурацию оформления

В этом разделе описаны запрос, параметры и ответ для \`GET /api/subaccount/address/info\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

\`\`\`
URL: 
/api/subaccount/address/info

METHOD: 
GET

RESULT:
BASE64
\`\`\`

将获得的base64解码后parse，得到配置的config，包含了后台设置的所有个性化配置项。

## Старый источник

- [获取个性化配置](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-ge-xing-hua-pei-zhi.md)
`,"./ru/poolnode/guide/39-api-app-register.md":`---
id: poolnodeApiAppRegister
slug: api-app-register
title: Регистрация пользователя APP
navTitle: Регистрация пользователя APP
description: POST https://api.d0gpool.com/app/register: Регистрация пользователя APP.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 38
---


# Регистрация пользователя APP

В этом разделе описаны запрос, параметры и ответ для \`POST https://api.d0gpool.com/app/register\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

## 请求 URL

https://api.d0gpool.com/app/register

## 请求方式

POST

## 请求示例

\`\`\`
{
"email": "xxxx",
"code": "323333", //邮箱验证码，同节点登录验证码
"invite_code": 123456 //注意这个是数字
}
\`\`\`

## 请求参数说明

| 参数名          | 类型     | 说明             |
| ------------ | ------ | -------------- |
| email        | String | 邮箱             |
| code         | String | 邮箱验证码，同节点登录验证码 |
| invite\\_code | number | 节点邀请码，注意这个是数字  |

## 成功返回示例

\`\`\`
{
"status": 0, \xA0// status = 1表示邀请码无效，此时url为空
"url": "http://1.2.3.4/a/"
}
\`\`\`

## 返回参数说明

| 参数名 | 说明 |
| --- | --- |
| status | 状态码，\`status = 1\` 表示邀请码无效，此时 \`url\` 为空。 |
| url | 后续 APP 使用的接口地址前缀，例如 \`http://1.2.3.4/a/\`。后台配置地址末尾需要保留斜杠。 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用url继续请求一次到节点使用邮箱登录

## Старый источник

- [APP端用户注册](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-yong-hu-zhu-ce.md)
`,"./ru/poolnode/guide/40-api-app-central-login.md":`---
id: poolnodeApiAppCentralLogin
slug: api-app-central-login
title: Централизованный вход APP
navTitle: Централизованный вход APP
description: POST https://api.d0gpool.com/app/login: Централизованный вход APP.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 39
---


# Централизованный вход APP

В этом разделе описаны запрос, параметры и ответ для \`POST https://api.d0gpool.com/app/login\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

## 请求 URL

https://api.d0gpool.com/app/login

## 请求方式

POST

## 请求示例

\`\`\`
{
"email": "xxxx",
"code": "323333"
}
\`\`\`

## 请求参数说明

| 参数名   | 类型     | 说明             |
| ----- | ------ | -------------- |
| email | String | 邮箱             |
| code  | String | 邮箱验证码，同节点登录验证码 |

## 成功返回示例

\`\`\`
{
"status": 0, \xA0
"data": [
 \xA0 \xA0 \xA0  {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"created_at": "2025-09-24T07:39:47Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"name": "test-001", // 节点名称
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"updated_at": "2025-09-24T07:46:01Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"url": "xxx.com/a/" // api 地址
 \xA0 \xA0 \xA0  },
 \xA0 \xA0 \xA0  {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"created_at": "2025-09-24T07:39:47Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"name": "test-002",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"updated_at": "2025-09-24T07:46:01Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"url": "xxx.com/b/"
 \xA0 \xA0 \xA0  }
 \xA0  ]
}
\`\`\`

## 返回参数说明

| 参数名                      | 说明    |
| ------------------------ | ----- |
| status                   | 状态码   |
| data\\[index].created\\_at | 创建时间  |
| data\\[index].name        | 节点名称  |
| data\\[index].updated\\_at | 更新时间  |
| data\\[index].url         | API地址 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用用户选择的节点url继续请求一次至相应节点进行邮箱登录

## Старый источник

- [APP端中心化登录](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-zhong-xin-hua-deng-lu.md)
`,"./ru/poolnode/guide/41-api-app-send-email.md":`---
id: poolnodeApiAppSendEmail
slug: api-app-send-email
title: Отправка email APP
navTitle: Отправка email APP
description: POST https://api.d0gpool.com/app/send/email: Отправка email APP.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 40
---


# Отправка email APP

В этом разделе описаны запрос, параметры и ответ для \`POST https://api.d0gpool.com/app/send/email\`.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

## 请求 URL

https://api.d0gpool.com/app/send/email

## 请求方式

POST

## 请求示例

\`\`\`
{
"address": "",//邮箱地址
"token": ""//滑动验证码获取到的token
}
\`\`\`

## 请求参数说明

| 参数名     | 说明             |
| ------- | -------------- |
| address | 邮箱地址           |
| token   | 滑动验证码获取到的token |

## Старый источник

- [App端发送邮件接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-fa-song-you-jian-jie-kou.md)
`,"./ru/poolnode/guide/42-api-app-captcha.md":`---
id: poolnodeApiAppCaptcha
slug: api-app-captcha
title: Captcha APP
navTitle: Captcha APP
description: Открытый API PoolNode: Captcha APP.
category: open-api
categoryTitle: Открытый API
categoryOrder: 3
order: 41
---


# Captcha APP

В этом разделе описаны запрос, параметры и ответ endpoint.

## Примечание

Контракт endpoint ниже перенесен из старой документации RustMinerSystem и размещен в текущей структуре PoolNode. При интеграции используйте фактический адрес узла, secure route и версию backend.

## Контракт endpoint

## 请求 URL

https://api.d0gpool.com/captcha/html/index.html

#### 使用方法

参考文档上方《调用、获取滑动验证码》

## Старый источник

- [App端 滑动验证码接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-hua-dong-yan-zheng-ma-jie-kou.md)
`,"./ru/rms/guide/01-overview.md":`---
id: overview
slug: ""
title: Обзор документации RMS
navTitle: Обзор
description: Настройка RMS, привязка RMS2/RMS3/RMS3(Zstd), mapping портов, сжатие соединений, мониторинг и план отката.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 1
---

# Документация RMS

RMS — дополнительный локальный безопасный клиент в экосистеме RustMinerSystem. Обычно он разворачивается внутри LAN майнинг-площадки. Майнеры сначала подключаются к локальному RMS, а RMS через RMS2, RMS3 или RMS3(Zstd) подключается к портам сервера RustMinerSystem. Это уменьшает число публичных соединений, сжимает трафик и держит поток майнеров в контролируемом канале.

Установку сервера RustMinerSystem, безопасность backend и обычные proxy-порты смотрите в [документации RustMinerSystem](/ru/document/rustminersystem). Этот раздел описывает локальный клиент RMS и границы RMS protocol ports.

## Когда Нужен RMS

- На площадке много майнеров, и нужно меньше публичных исходящих соединений.
- Публичная полоса дорогая, и важно сжатие трафика.
- Майнеры должны подключаться только к локальным LAN-адресам.
- Нужен высоко сжатый канал RMS3 или RMS3(Zstd).
- Нужно локально видеть входящие соединения, исходящие соединения, disconnect logs и ресурсы.

Если майнеров мало, сеть стабильна и полосы достаточно, можно подключать майнеры напрямую к proxy-портам RustMinerSystem без RMS.

## Топология Доступа

\`\`\`text
Майнер -> Локальный RMS -> RMS2/RMS3/RMS3(Zstd) encrypted compression link -> Proxy-порт RustMinerSystem -> Вышестоящий пул
\`\`\`

RMS не заменяет сервер RustMinerSystem. Сервер по-прежнему отвечает за proxy-порты, целевые пулы, fee wallets, статистику, безопасность и эксплуатацию. RMS отвечает за локальный доступ майнеров и сжатую передачу к серверу.

## Разделы Функций

| Раздел | Для чего используется |
| --- | --- |
| [Установка](/ru/document/rms/installation) | Установка RMS3 на Linux и Windows, выбор архитектуры и первый доступ после установки. |
| [Настройка и привязка](/ru/document/rms/setup) | Первый запуск, push URL, skip mode, требования к серверу и pairing. |
| [Mapping портов](/ru/document/rms/port-mapping) | Локальные порты, remote RMS адреса, монета, протокол, пароль и балансировка. |
| [Настройки сжатия](/ru/document/rms/compression) | RMS2/RMS3/RMS3(Zstd), super compression, уровень сжатия и count соединений. |
| [Мониторинг и эксплуатация](/ru/document/rms/monitoring) | CPU, память, сеть, графики соединений, статус портов, фильтры и безопасность. |
| [Диагностика](/ru/document/rms/troubleshooting) | Доступ майнеров, pairing с сервером, высокий reject, конфликты портов, safe route и откат. |

## Выбор Протокола

| Протокол | Описание |
| --- | --- |
| RMS2 | TLS-протокол сжатия RMS. Уменьшает публичные соединения и частично сжимает объем данных. |
| RMS3 | Групповое сжатие с более высокой степенью и большей нагрузкой CPU. |
| RMS3(Zstd) | Вариант RMS3 на Zstd. Обычно дает меньшую нагрузку CPU при похожей логике соединений. |

При RMS3 или RMS3(Zstd) порт сервера, локальный порт RMS, монета, пароль, super compression и уровень сжатия должны совпадать. Несовпадения могут мешать подключению майнеров, повышать reject или ломать статистику.

## План Внедрения

1. Создайте тестовый RMS protocol port на сервере RustMinerSystem.
2. Добавьте соответствующий локальный порт RMS.
3. Подключите 1-5 тестовых майнеров.
4. Наблюдайте входящие/исходящие соединения RMS, статус порта сервера, worker в upstream pool и reject rate.
5. Настройте уровень сжатия, super compression и count соединений.
6. Постепенно увеличивайте число майнеров.
7. После стабильной работы сохраните backup конфигурации RMS и портов RustMinerSystem.

RMS3 чувствителен к CPU. Если малые монеты или особые майнеры ведут себя нестабильно, сначала уменьшите уровень сжатия или отключите super compression для теста.
`,"./ru/rms/guide/02-installation.md":`---
id: rmsInstallation
slug: installation
title: Установка RMS
navTitle: Установка
description: Установка RMS3 на Linux и Windows, default access, WebView2, выбор архитектуры и legacy RMS2.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 2
---

# Установка RMS

RMS3 — рекомендуемый текущий клиент. Согласно руководству RMS на GitHub, для протокола RMS3 нужен сервер RustMinerSystem \`v4.5.0\` или новее, а RMS3 не совместим с RMS1/RMS2 protocol ports. Используйте legacy RMS2 installer только если нужно подключаться к старому RMS2 server-side deployment.

Источник: <https://github.com/EvilGenius-dot/RMS>

## Перед Установкой

- Выберите устройство, которое постоянно работает в LAN майнинг-площадки.
- Назначьте устройству фиксированный LAN IP. Если DHCP изменит IP после перезагрузки, майнеры потеряют адрес RMS.
- Подготовьте root-доступ для Linux.
- При необходимости откройте web port RMS в LAN firewall. Default access: \`http://DEVICE_IP:42703\`.
- Подготовьте RMS protocol port на сервере RustMinerSystem до подключения майнеров.

## Установка RMS3 На Linux

Сначала перейдите в root:

\`\`\`bash
sudo -i
\`\`\`

Запустите официальную GitHub-команду установки:

\`\`\`bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)
\`\`\`

Если GitHub недоступен с сервера, README также дает альтернативную линию:

\`\`\`bash
bash <(curl -s -L -k https://rustminersystem.com/install.sh)
\`\`\`

Installer откроет интерактивное меню. Выберите \`Install\`, затем CPU architecture и download route.

Типовые варианты архитектуры:

| Опция | Типовое устройство |
| --- | --- |
| \`x86-64\` | Большинство Intel/AMD Linux servers и mini PC. |
| \`aarch64\` | 64-bit ARM devices. |
| \`arm-musleabi\`, \`arm-musleabihf\`, \`armv7-*\` | Старые ARM devices. |

Linux script устанавливает RMS в \`/root/rms\`, на systemd systems создает service \`rmservice\`, запускает программу и выводит адрес доступа после старта.

## Установка RMS3 На Windows

RMS3 имеет две Windows-сборки.

| Сборка | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-no-gui/rms.exe> |

Если GUI version открывается белым экраном, установите Microsoft Edge WebView2:

\`\`\`text
https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/MicrosoftEdgeWebview2Setup.exe
\`\`\`

После запуска Windows client откройте страницу RMS с этой машины или из LAN и продолжайте setup and pairing.

## Первый Доступ После Установки

После установки откройте браузер:

\`\`\`text
http://DEVICE_IP:42703
\`\`\`

Затем введите push address, если deployment его предоставляет, или пропустите push flow и добавьте remote server addresses вручную.

Первые проверки:

- Страница RMS открывается с другого устройства в LAN.
- IP устройства фиксированный.
- RMS protocol port сервера RustMinerSystem доступен.
- Локальный RMS client и server port используют одно поколение RMS protocol.

## Управление Linux Script

Повторный запуск Linux install script открывает management menu. Script поддерживает:

- Install.
- Stop RMS.
- Restart RMS.
- Uninstall RMS.

Используйте меню script для обычного обслуживания, если deployment не управляет RMS другим service manager.

## Legacy RMS2

Используйте RMS2 только для старых deployment, которым нужен RMS2. Не смешивайте RMS3 client с RMS2-only server ports.

Linux RMS2:

\`\`\`bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/OLD_2/install.sh)
\`\`\`

Альтернативная RMS2 линия:

\`\`\`bash
bash <(curl -s -L -k https://rustminersystem.com/OLD2_install.sh)
\`\`\`

Windows RMS2:

| Сборка | Download |
| --- | --- |
| GUI version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/rms.exe> |
| Command-line version | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-no-gui/rms.exe> |
| WebView2 installer | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/MicrosoftEdgeWebview2Setup.exe> |

## Следующий Шаг

После установки и проверки доступа продолжайте с [настройкой и привязкой](/ru/document/rms/setup).
`,"./ru/rms/guide/02-setup.md":`---
id: rmsSetup
slug: setup
title: Настройка и привязка
navTitle: Настройка
description: Первый запуск RMS, выбор push URL или ручного режима и привязка к портам сервера RustMinerSystem.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 3
---

# Настройка И Привязка

RMS находится между локальными майнерами и сервером RustMinerSystem. Первое решение при настройке — получить конфигурацию через push URL или пропустить этот шаг и добавить удаленные адреса вручную.

## Назначение Функции

Настройка и привязка нужны, чтобы RMS знал, где находится сервер RustMinerSystem, к каким remote RMS protocol ports подключаться и какие локальные адреса должны использовать майнеры.

## Требования К Серверу

Перед настройкой локального клиента подготовьте сервер:

1. Откройте backend сервера RustMinerSystem.
2. Создайте proxy-порт с протоколом RMS2, RMS3 или RMS3(Zstd).
3. Выберите правильную монету и upstream pool.
4. Если на серверном порту задан пароль, сохраните его для локального RMS.
5. Если используются параметры RMS3, сохраните super compression и уровень сжатия.
6. Убедитесь, что серверный порт работает и доступен из сети майнинг-площадки.

Локальный RMS protocol должен совпадать с server listening protocol. Локальный RMS3 порт не сможет подключиться к RMS1 или несовместимому серверному порту.

## Первый Запуск С Push URL

При первом запуске RMS показывает поле push address. Используйте его, если deployment предоставляет центральный URL конфигурации.

1. Введите push URL.
2. Отправьте и дождитесь загрузки конфигурации.
3. После успеха RMS откроет dashboard.
4. Перед переводом майнеров проверьте локальные порты и remote addresses.

Если загрузка не удалась, проверьте срок действия URL, доступность сервера из текущей сети и готовность server-side configuration.

## Пропустить И Настроить Вручную

Если push URL не используется, и вы знаете IP/domain сервера и RMS protocol port, нажмите \`Skip\`. RMS сохранит skip state локально и откроет dashboard. Затем используйте \`Manual Add\`, чтобы создать локальные mapping.

Ручной режим полезен для малых deployment, тестов или приватных сетей, где распространение конфигурации делается вне RMS push system.

## Адрес Для Майнеров

После создания локального порта RMS таблица показывает адрес вида:

\`\`\`text
stratum+tcp://LOCAL_RMS_IP:LOCAL_PORT
\`\`\`

Скопируйте этот адрес и укажите его в майнерах. Майнеры не должны подключаться напрямую к remote RMS server port, если вы не делаете намеренный обход RMS.

## Сброс Push Address

В меню program settings есть \`Reset Push Address\`. Используйте его, когда старый push URL больше недействителен или нужно вернуться к flow первого запуска. Сброс инвалидирует текущую push configuration и возвращает RMS на страницу setup.
`,"./ru/rms/guide/03-port-mapping.md":`---
id: rmsPortMapping
slug: port-mapping
title: Mapping портов
navTitle: Mapping портов
description: Добавление и управление локальными портами RMS, удаленными адресами сервера, протоколами, паролями и несколькими upstream peer.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 4
---

# Mapping Портов

Mapping портов RMS создает локальный listening port для майнеров и соединяет его с одним или несколькими RMS protocol ports сервера RustMinerSystem.

## Назначение Функции

Используйте mapping, чтобы майнеры подключались к локальному LAN-адресу, а RMS выполнял encrypted compressed communication с сервером.

## Добавить Ручной Порт

1. Откройте RMS dashboard.
2. Нажмите \`Manual Add\`.
3. Задайте \`Local Listening Port\`.
4. Выберите монету.
5. Выберите RMS3, RMS3(Zstd) или RMS2 как remote protocol.
6. Введите remote address в формате \`address:port\`.
7. Введите пароль, если server port его требует.
8. Для RMS3-family настройте super compression и уровень сжатия.
9. Добавьте больше remote addresses, если нужна балансировка.
10. Сохраните и проверьте, что порт запущен.

Монета, remote protocol, пароль и параметры сжатия должны совпадать с server-side RMS protocol port.

## Список Remote Address

У каждого локального порта может быть несколько upstream peers. RMS распределяет входящие соединения между доступными remote addresses. Это балансировка на стороне локального RMS client.

Используйте несколько peer, если для одной монеты и протокола подготовлено несколько портов RustMinerSystem или несколько серверов. Каждый peer должен быть совместим с выбранной монетой и протоколом.

## Таблица Портов

Таблица RMS показывает:

| Поле | Значение |
| --- | --- |
| Status | Running, preparing, waiting или error. |
| Coin | Монета этой локальной mapping. |
| Remark | Операторская заметка, часто в формате \`category-title\`. |
| Miner connection address | Локальный адрес для майнеров; нажмите, чтобы скопировать. |
| Load balancing | Детали remote peer и их число. |
| Inbound connections | Соединения, входящие в этот локальный порт. |
| Outbound connections | Соединения RMS к remote peers. |
| Type | Получен автоматически из push config или добавлен вручную. |

Ручные порты можно остановить, запустить, редактировать и удалить. Автоматические порты можно остановить и запустить, но синхронизируемые поля контролируются push configuration.

## Remarks И Фильтры

Таблица поддерживает фильтрацию по:

- Категории remark.
- Типу порта: all, auto fetched или manual.
- Монете.

Если использовать remarks вроде \`farm-a-btc\` или \`building1-ltc\`, префикс до \`-\` можно использовать как категорию.

## Правила Безопасного Редактирования

- Не меняйте рабочий порт в пик майнинга без rollback address.
- Проверяйте формат \`address:port\` перед сохранением.
- Если серверный пароль задан, локальный пароль должен быть идентичным.
- Для монет, кроме BTC и LTC, начинайте с консервативных настроек сжатия.
`,"./ru/rms/guide/04-compression.md":`---
id: rmsCompression
slug: compression
title: Настройки сжатия
navTitle: Сжатие
description: Настройка RMS2, RMS3, RMS3(Zstd), super compression, уровня сжатия и count сжатия соединений.
category: features
categoryTitle: Использование функций
categoryOrder: 2
order: 5
---

# Настройки Сжатия

В RMS есть два уровня сжатия: protocol-level data compression на каждом порту и сжатие количества исходящих соединений.

## Назначение Функции

Используйте настройки сжатия, чтобы уменьшить публичную полосу и число outbound connections, сохраняя reject rate, CPU load и latency в допустимых пределах.

## Protocol-Level Compression

При добавлении или редактировании локального порта выберите remote protocol:

| Протокол | Сценарий |
| --- | --- |
| RMS2 | Консервативное сжатие и совместимость с RMS2 server ports. |
| RMS3 | Более высокая степень сжатия и больше CPU usage. |
| RMS3(Zstd) | Поведение соединений RMS3 с Zstd compression, обычно дружелюбнее к CPU. |

Локальный protocol должен совпадать с server listening protocol.

## Super Compression

RMS3 включает \`Super Compression\`. Он может сильно уменьшать объем трафика, особенно для BTC и LTC. Для малых или нестандартных монет начинайте с выключенного режима, если появляются reject или проблемы связности.

Если super compression меняется, server-side port и локальный RMS client должны оставаться согласованными.

## Уровень Сжатия

RMS показывает low, medium и high уровни. Более высокий уровень обычно лучше сжимает данные, но увеличивает CPU pressure. Тестируйте постепенно:

1. Начните с low или medium.
2. Наблюдайте CPU, память, reject rate и latency.
3. Повышайте только после стабильности тестовых майнеров.
4. Откатитесь, если reject растет или CPU RMS постоянно высокий.

## Count Сжатия Соединений

Карточка \`Connection Compression\` открывает диалог connection mode. RMS3 принудительно использует compressed mode и позволяет задать, до какого количества outbound connections сжимать порт.

Чем ниже значение, тем меньше публичных outbound connections и обычно сильнее эффект сжатия. Цена — CPU pressure, latency и чувствительность reject rate.

Рекомендуемые стартовые значения:

- Меньше 1000 майнеров: тестируйте \`1\`-\`2\`.
- Большинство deployment: тестируйте \`1\`-\`6\`.
- Наблюдайте каждую монету и порт отдельно.

Пример: если count равен \`1\`, а RMS принимает 1000 BTC майнеров и 1000 LTC майнеров, outbound connections группируются по портам, поэтому BTC и LTC обычно образуют отдельные outbound connections.

## Порядок Тюнинга

Настраивайте в таком порядке:

1. Проверьте базовое соединение на небольшой группе майнеров.
2. Проверьте совпадение протокола, монеты и пароля.
3. Задайте count сжатия соединений.
4. Выберите уровень сжатия.
5. Включите или выключите super compression.
6. Постепенно расширяйте число майнеров.
`,"./ru/rms/guide/05-monitoring.md":`---
id: rmsMonitoring
slug: monitoring
title: Мониторинг и эксплуатация
navTitle: Мониторинг
description: Мониторинг CPU, памяти, сетевого трафика, графиков соединений, статуса портов, фильтров, пароля backend, safe route и observer.
category: operations
categoryTitle: Эксплуатация
categoryOrder: 3
order: 6
---

# Мониторинг И Эксплуатация

Dashboard RMS периодически обновляет runtime data и показывает ресурсы, число соединений, трафик, режим сжатия и статус локальных портов.

## Карточки Dashboard

| Карточка | Что смотреть |
| --- | --- |
| CPU / Memory | Нагрузка процесса RMS и память системы. |
| Connections | Входящие соединения майнеров и исходящие remote connections. |
| Network Traffic | Тренды приема и передачи. |
| Connection Compression | Текущий режим и count outbound compression. |

Если CPU остается высоким после усиления сжатия, уменьшите уровень сжатия, увеличьте count соединений или разделите майнеры между несколькими RMS clients.

## Операции С Портами

Таблица портов поддерживает:

- Копирование miner connection address.
- Просмотр remote-peer details.
- Фильтры по remark, type и coin.
- Start и stop портов.
- Edit или delete ручных портов.

После любого изменения проверяйте inbound count, outbound count и данные worker на сервере.

## Program Settings

Меню settings содержит:

| Настройка | Назначение |
| --- | --- |
| Reset Push Address | Вернуться к flow первого запуска и инвалидировать старую push configuration. |
| Set Backend Password | Защитить доступ к RMS backend. |
| Set Safe Access Route | Разместить backend RMS под приватным route path, чтобы снизить сканирование. |
| Switch Connection Mode | Открыть настройки connection compression. |
| Exit Application | Доступно в desktop/Tauri builds. |

Изменение safe route требует restart. При открытии URL должен заканчиваться на \`/\`, например \`http://host:port/custom/\`.

## Observer Page

Frontend RMS содержит observer-page implementation. Если build и route settings включают его, read-only вход доступен под \`/observer/\`. Считайте его публичной поверхностью и открывайте только при необходимости.

## Регулярные Проверки

- Процесс RMS работает.
- Локальные listening ports доступны майнерам.
- Inbound connections соответствуют ожидаемому числу майнеров.
- Outbound connections соответствуют настройкам compression.
- Hashrate и reject rate server-side port нормальные.
- CPU, memory и traffic trends стабильны.
- Backend password и safe route надежно записаны.
`,"./ru/rms/guide/06-troubleshooting.md":`---
id: rmsTroubleshooting
slug: troubleshooting
title: Диагностика RMS
navTitle: Диагностика
description: Диагностика доступа майнеров, server pairing, роста reject, конфликтов портов, ошибок safe route и путей отката.
category: operations
categoryTitle: Эксплуатация
categoryOrder: 3
order: 7
---

# Диагностика RMS

Большинство проблем RMS связано с несовпадением server/client settings, доступностью локального порта, слишком агрессивным сжатием или изменениями route/security.

## Майнеры Не Подключаются К RMS

Проверьте:

- Майнеры используют локальный адрес RMS, а не remote server port.
- Локальный listening port создан и работает.
- LAN firewall разрешает доступ майнеров к RMS host и port.
- Порт не занят другим процессом.
- URL майнера использует скопированный формат \`stratum+tcp://LOCAL_RMS_IP:PORT\`, когда это требуется.

## RMS Не Подключается К Серверу

Проверьте:

- Remote address имеет формат \`address:port\`.
- RMS protocol port сервера RustMinerSystem работает.
- Local remote protocol совпадает с server listening protocol.
- Монета совпадает на обеих сторонах.
- Пароль одинаковый на обеих сторонах или пустой на обеих.
- Security group, firewall или upstream network не блокируют server port.

## Reject Rate Растет

Используйте консервативный откат:

1. Уменьшите уровень сжатия RMS3.
2. Отключите super compression на сервере и локальном RMS.
3. Увеличьте count сжатия соединений.
4. Уменьшите число майнеров на один RMS client.
5. Проверьте latency upstream pool и CPU сервера.

Малые монеты и редкие firmware майнеров могут быть чувствительнее к агрессивным RMS3 settings.

## Outbound Connection Count Неожиданный

Проверьте:

- Count сжатия соединений.
- Разные монеты и разные локальные порты создают отдельные outbound groups.
- Несколько remote peers могут создать больше outbound paths.
- Auto-fetched и manual ports могут работать одновременно.

## Проблема Backend Route Или Password

Если safe route настроен неверно:

- При вводе route не должен начинаться или заканчиваться на \`/\`.
- При посещении финальный URL должен заканчиваться на \`/\`.
- Если после restart route потерян, используйте сохраненный preview URL или локальный способ доступа из deployment notes.

Если backend password изменен и потерян, используйте процедуру reset вашего deployment или восстановление из известного backup.

## План Отката

До production rollout сохраните:

- Прямой proxy address RustMinerSystem для майнеров.
- Версию RMS client и backup конфигурации портов.
- JSON backup портов RustMinerSystem.
- Исходный count сжатия, уровень сжатия и состояние super compression.

При большом инциденте сначала вернитесь к low compression или отключите super compression. Если площадка все еще нестабильна, временно направьте майнеры на прямой proxy address RustMinerSystem и затем чините RMS.
`,"./ru/rustminersystem/guide/01-overview.md":`---
id: overview
slug: ""
title: Обзор документации RustMinerSystem
navTitle: Обзор
description: Изучите proxy сторонних пулов, режим настоящего пула PoolNode, дополнительное локальное сжатие RMS и структуру документации.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 1
---
# Документация RustMinerSystem

![Предпросмотр русской панели RustMinerSystem](/image/rust.mp4)

*Предпросмотр русской панели RustMinerSystem: рабочий экран proxy, список портов, графики хешрейта и состояние ресурсов сервера.*

> Этот документ описывает установку, настройку, запуск и эксплуатацию RustMinerSystem. Замените все заполнители реальными значениями вашего развертывания.

## Обзор

RustMinerSystem может работать как proxy для сторонних майнинг-пулов и направлять любой заданный процент подключенного хешрейта майнеров на выбранные кошельки стороннего пула или worker names. Также PoolNode позволяет построить настоящий собственный майнинг-пул, где заданная комиссия распределяется напрямую на уровне расчета монет. RMS — дополнительный инструмент для площадок, которым нужно снизить расход канала или число публичных соединений: майнеры могут сначала подключаться к локальному RMS, а затем к RustMiner через зашифрованный сжатый канал. Без RMS майнеры также могут подключаться к RustMiner напрямую.

### Сценарии использования

- Майнинг-площадке нужен единый путь подключения майнеров и управляемое распределение хешрейта на выбранные кошельки стороннего пула.
- Оператору нужно построить настоящий пул через PoolNode и распределять заданную комиссию на уровне расчета.
- Сетевой среде требуется опционально сжимать объем данных майнеров и число публичных соединений.
- Команде нужен повторяемый процесс установки, настройки и обновления.

## Режимы работы

### Proxy сторонних пулов

Используйте этот режим для подключения майнеров к сторонним пулам. RustMiner находится между майнерами и сторонними пулами и направляет любой заданный процент хешрейта на выбранные адреса пула, кошельки или worker names. Перед масштабированием проверьте стабильность подключения и цели распределения на тестовых майнерах.

### Настоящий пул PoolNode

Используйте этот режим, когда оператору нужно построить настоящий собственный майнинг-пул. PoolNode обеспечивает возможности узла пула, а заданная комиссия распределяется напрямую на уровне расчета монет. Перед развертыванием проверьте состояние синхронизации узла, сетевую доступность, настройки расчетов и процедуры восстановления.

### Дополнительный локальный инструмент RMS

RMS не является обязательным компонентом. Он работает локально на майнинг-площадке и подключает трафик майнеров к RustMiner через зашифрованный сжатый канал, помогая уменьшить объем передачи и число публичных соединений. Режим proxy сторонних пулов и режим настоящего пула PoolNode могут использовать RMS, но майнеры могут подключаться к RustMiner и напрямую. Перед включением проверьте совместимость версий сервера и клиента, а также зафиксируйте план отката.

## Использование функций

Новая категория \`Использование функций\` описывает основные рабочие процессы панели отдельными главами:

| Функция | Глава |
| --- | --- |
| Панель и мониторинг монет | [Панель](/ru/document/rustminersystem/dashboard) |
| Создание и редактирование proxy-портов | [Создать порт](/ru/document/rustminersystem/proxy-port) |
| Список портов и массовые операции | [Список портов](/ru/document/rustminersystem/port-list) |
| Workers, кошельки, логи и TCP monitor одного порта | [Детали порта](/ru/document/rustminersystem/port-detail) |
| Hot update fee-кошельков | [Fee hot update](/ru/document/rustminersystem/hot-wallet) |
| Безопасность, пресеты, сертификаты, уведомления и импорт/экспорт | [Настройки](/ru/document/rustminersystem/settings-center) |
| Runtime, security и troubleshooting логи | [Логи](/ru/document/rustminersystem/log-manager) |
| RMS push-адрес и сопоставление портов | [RMS-клиент](/ru/document/rustminersystem/rms-client) |
| Мониторинг нескольких экземпляров | [Групповое управление](/ru/document/rustminersystem/remote-control) |
| Данные алгоритмов и монет | [Алгоритмы](/ru/document/rustminersystem/engine-control) |
| APP_INFO и ссылки приложений | [APP](/ru/document/rustminersystem/app-center) |
`,"./ru/rustminersystem/guide/02-quick-start.md":`---
id: quickStart
slug: quick-start
title: Быстрый старт RustMinerSystem
navTitle: Быстрый старт
description: Подготовьте среду, настройте базовые параметры и проверьте тестовое подключение RustMinerSystem.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 2
---

# Быстрый старт

## Требования

| Пункт | Требование |
| --- | --- |
| Операционная система | Windows / Linux / ARM / ARMV7 |
| Сеть | Доступ к целевому пулу или собственному узлу |
| Права | Права на установку, настройку и запуск сервисов |

## Базовый процесс

1. Скачайте серверный пакет RustMinerSystem для вашей платформы.
2. Настройте адрес пула, порт и учетные данные воркера.
3. Запустите сервис и проверьте логи.
4. Подключите небольшое количество майнеров для проверки.
5. После стабильной проверки постепенно переводите production-нагрузку.
`,"./ru/rustminersystem/guide/03-installation.md":`---
id: installation
slug: installation
title: Руководство по установке RustMinerSystem
navTitle: Установка
description: Скачайте, запустите и проверьте серверный пакет RustMinerSystem.
category: deployment
categoryTitle: Развертывание
categoryOrder: 2
order: 3
---

# Установка

## Загрузка

Скачайте пакет для вашей архитектуры из центра релизов.

\`\`\`bash
# Пример для Linux: замените на реальный URL загрузки
wget https://example.com/rustminersystem-linux.tar.gz
tar -xzf rustminersystem-linux.tar.gz
cd rustminersystem
\`\`\`

## Запуск

\`\`\`bash
# Пример команды, адаптируйте под реальный пакет релиза
./rustminersystem --config ./config.toml
\`\`\`

## Проверка

После запуска проверьте:

- Процесс сервиса работает корректно.
- В логах нет ошибок конфигурации или подключения.
- Подключение к пулу успешно.
- Тестовые майнеры отправляют валидные данные.

## Диагностика установки

Если установка или первые проверки подключения не проходят, используйте отдельные статьи диагностики:

- [Админ-панель недоступна](/ru/document/rustminersystem/admin-unreachable)
- [Майнер не подключается к порту](/ru/document/rustminersystem/miner-cannot-connect-port)
- [Linux-скрипт не скачивается](/ru/document/rustminersystem/linux-script-download-failed)
`,"./ru/rustminersystem/guide/04-configuration.md":`---
id: configuration
slug: configuration
title: Настройка RustMinerSystem
navTitle: Настройка
description: Настройте адрес прослушивания, endpoint пула, учетные данные воркера и логирование RustMinerSystem.
category: deployment
categoryTitle: Развертывание
categoryOrder: 2
order: 4
---

# Настройка

## Базовая конфигурация

\`\`\`toml
# пример config.toml
[server]
listen = "0.0.0.0:3333"

[pool]
endpoint = "pool.example.com:443"
worker = "your_worker_name"
password = "your_password"

[log]
level = "info"
\`\`\`

## Описание конфигурации

| Поле | Описание |
| --- | --- |
| \`server.listen\` | Локальный адрес прослушивания RustMinerSystem |
| \`pool.endpoint\` | Адрес upstream-пула или собственного узла |
| \`pool.worker\` | Имя воркера или идентификатор аккаунта |
| \`pool.password\` | Пароль подключения к пулу |
| \`log.level\` | Уровень логирования |
`,"./ru/rustminersystem/guide/05-operations.md":`---
id: operations
slug: operations
title: Эксплуатация RustMinerSystem
navTitle: Эксплуатация
description: Изучите ежедневные проверки, поэтапный запуск, процесс обновления и подготовку отката RustMinerSystem.
category: deployment
categoryTitle: Развертывание
categoryOrder: 2
order: 6
---

# Эксплуатация

## Ежедневные проверки

- Проверяйте состояние сервиса.
- Проверяйте количество подключений, ошибки в логах и задержку.
- Убедитесь в стабильности upstream-пула или узла.
- Контролируйте использование системных ресурсов.

## Процесс обновления

1. Прочитайте release notes.
2. Сделайте резервную копию текущего конфигурационного файла.
3. Проверьте новую версию в тестовой среде.
4. Запланируйте окно обслуживания.
5. Обновите production-узлы.
6. Проверьте подключения, логи и отправку данных майнерами.

## Раздел диагностики

Типовые сбои вынесены в отдельную категорию диагностики:

- [Админ-панель недоступна](/ru/document/rustminersystem/admin-unreachable)
- [Вход в админ-панель не выполняется](/ru/document/rustminersystem/admin-login-failed)
- [Не удается создать proxy-порт](/ru/document/rustminersystem/proxy-port-create-failed)
- [Майнер не подключается к порту](/ru/document/rustminersystem/miner-cannot-connect-port)
- [Майнер не подключается к proxy-порту](/ru/document/rustminersystem/miner-cannot-connect-proxy)
- [Подключение есть, но нет валидного хешрейта](/ru/document/rustminersystem/connected-no-valid-hashrate)
- [Fee-кошелек не получает доход](/ru/document/rustminersystem/fee-wallet-no-revenue)
- [Linux-скрипт не скачивается](/ru/document/rustminersystem/linux-script-download-failed)

## FAQ

### Сколько майнеров поддерживает RustMinerSystem?

Это зависит от ресурсов сервера, пропускной способности сети, стабильности upstream-пула и результатов нагрузочного тестирования. Перед production-запуском выполняйте поэтапные проверки подключения.

### Требуется ли остановка при обновлении?

Это зависит от способа развертывания и изменений версии. Для production-среды рекомендуется запланировать окно обслуживания и подготовить план отката.
`,"./ru/rustminersystem/guide/05-security.md":`---
id: security
slug: security
title: Обязательная безопасность RustMinerSystem
navTitle: Безопасность
description: Выполните обязательные проверки безопасности RustMinerSystem перед production-запуском: админ-доступ, SSH, firewall, двухэтапная проверка, надежные учетные данные и источники скриптов.
category: deployment
categoryTitle: Развертывание
categoryOrder: 2
order: 5
---

# Обязательная безопасность

После запуска RustMinerSystem админ-вход, SSH-доступ, proxy-порты и локальная конфигурация напрямую влияют на подключение майнеров и безопасность fee-конфигурации. Выполните эти проверки до подключения production-майнеров.

Одна пропущенная настройка может привести к захвату админ-панели, изменению портов, подмене адресов кошельков или компрометации сервера. Используйте принцип: открывать только нужные порты, разрешать только доверенные источники и не держать стандартный вход в админ-панель открытым постоянно.

## Чек-лист перед production

- Измените стандартный логин и пароль админ-панели. Не используйте повторно пароли от SSH, облачного аккаунта или аккаунта пула.
- Включите двухэтапную проверку входа и надежно сохраните способ восстановления.
- Настройте сложный безопасный адрес доступа вместо постоянного использования стандартного входа.
- В security group или системном firewall разрешите только нужные порты.
- Разрешайте SSH только с доверенных IP; закрывайте публичный SSH, когда удаленное обслуживание не требуется.
- Разрешайте Web-порт админ-панели только с доверенных IP, через VPN или reverse proxy access control; временный доступ закрывайте после использования.
- Запускайте только официальные скрипты, бинарные файлы и команды обслуживания, которые вы проверили.
- Создайте резервные копии конфигурации proxy-портов, сертификатов, KENC-ключей, безопасных адресов доступа и данных восстановления двухэтапной проверки.

## Правила открытия портов

| Тип порта | Рекомендация |
| --- | --- |
| SSH-порт | Стандартный \`22\` часто сканируется. В production разрешайте только офисные IP, VPN или bastion host. По возможности используйте вход по ключу и не полагайтесь на слабые пароли. |
| Web-порт админ-панели | Не держите его полностью открытым в интернет. Лучше использовать IP allowlist в security group, VPN, reverse proxy access control или временные правила доступа. |
| Proxy-порты майнинга | Открывайте только порты, которые реально используют майнеры. Регулярно проверяйте майнеры онлайн, число подключений, reject rate и подозрительные IP-источники. |
| HTTPS / сертификаты | Не передавайте приватные ключи сертификатов посторонним. После замены сертификата проверьте доступность админ-панели, app-входа или пользовательского портала. |

Если во время диагностики вы временно открывали все порты, сразу верните минимальный набор разрешающих правил после уточнения нужного списка портов. Не используйте правило “разрешить все порты” как постоянную production-политику.

## Безопасность SSH

После установки операционной системы проверьте, действительно ли SSH должен быть доступен из интернета. Если он нужен только иногда, держите SSH закрытым в cloud security group и временно разрешайте доверенный IP на время обслуживания.

Если SSH должен оставаться доступным:

1. Используйте надежные пароли или вход по ключу.
2. Не используйте SSH-пароль повторно для админ-панели или облачного провайдера.
3. Разрешайте SSH только с доверенных IP-источников.
4. Проверяйте записи входа и повторяющиеся неудачные попытки.
5. После обслуживания убедитесь, что правила security group соответствуют нужной политике.

## Безопасность Web-админки

Злоумышленники могут пытаться открыть Web-админку и изменить конфигурацию. Сразу после установки войдите в админ-панель и выполните следующие действия:

1. Измените стандартный логин и пароль.
2. Настройте сложный безопасный адрес доступа.
3. Включите двухэтапную проверку и проверьте повторный вход после выхода из аккаунта.
4. Убедитесь, что Web-порт админ-панели доступен только доверенным источникам.

Если админ-панель должна быть доступна из интернета, используйте как минимум IP allowlist в security group. Более безопасный вариант - доступ через VPN, bastion host или reverse proxy access control.

## Учетные данные и безопасный адрес

Учетные данные админ-панели, безопасные адреса доступа и SSH-пароли должны быть сложными. Не используйте простые комбинации букв и цифр, название проекта, домен, телефон, дату рождения, распространенные слова или предсказуемые пути.

Рекомендации:

- Используйте пароли длиной не менее 16 символов.
- Генерируйте и храните учетные данные в password manager.
- Используйте разные пароли для разных систем.
- Используйте случайный безопасный адрес доступа и не показывайте его в чатах, объявлениях или скриншотах.
- Немедленно меняйте пароли и безопасные адреса после ухода сотрудников, утечки скриншотов или подозрения на раскрытие.

## Источники скриптов и программ

Не запускайте на production-серверах неизвестные скрипты, бинарные файлы, cracked tools или one-click optimization команды. Неизвестные скрипты могут читать конфигурацию, подменять кошельки, менять proxy-порты, красть ключи или устанавливать постоянные backdoor-механизмы.

Используйте только официальные адреса релизов, доверенные репозитории, самостоятельно собранные программы или проверенные скрипты обслуживания. Перед запуском проверяйте содержимое команд, особенно если команда скачивает удаленный скрипт и сразу выполняет его.

## Проверка после изменений

После изменения security group, firewall, админ-порта, безопасного адреса доступа, HTTPS-сертификата или двухэтапной проверки выполните проверку:

- Новый вход в админ-панель доступен, а старый стандартный вход больше не работает.
- Логин, пароль и двухэтапная проверка работают после повторного входа.
- Недоверенные IP не могут открыть SSH и Web-порт админ-панели.
- Майнеры все еще подключаются к proxy-портам майнинга.
- Upstream-пул или PoolNode показывает подключения и хешрейт.
- Настройки безопасности, конфигурация портов и сертификаты сохранены в резервной копии.

Если после изменения безопасности админ-панель недоступна, сначала проверьте security group, firewall, Web-порт и безопасный адрес доступа, затем откройте [Админ-панель недоступна](/ru/document/rustminersystem/admin-unreachable).
`,"./ru/rustminersystem/guide/06-admin-unreachable.md":`---
id: admin-unreachable
slug: admin-unreachable
title: Админ-панель недоступна
navTitle: Админ-панель недоступна
description: Проверьте статус сервиса, web-порт, firewall, security group и secure access path, если админ-панель RustMinerSystem не открывается.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 1
---

# Админ-панель недоступна

Эта статья нужна, когда браузер не открывает админ-панель после установки, изменения web-порта, настройки firewall или изменения secure access path.

## Симптомы

- Страница админ-панели открывается с timeout или connection refused.
- Сервис запущен, но web-порт недоступен извне.
- Старый адрес перестал работать после изменения secure access path.

## Проверки

1. Уточните текущий адрес и web-порт в выводе установщика или startup-логах.
2. Проверьте, что процесс RustMinerSystem продолжает работать.
3. Проверьте firewall сервера, cloud security group и reverse proxy.
4. Если включен secure access path, убедитесь, что путь в URL совпадает с текущей конфигурацией.
5. Проверьте логи на ошибки binding порта, прав доступа или загрузки сертификата.

## Восстановление

- Сначала проверьте, что порт слушает на сервере, затем проверяйте доступ извне.
- Если порт занят, остановите конфликтующий процесс или перенесите админ-панель на другой web-порт.
- После восстановления доступа проверьте правила доступа перед возвратом сервиса в production.

## Связанные страницы

- [Установка](/ru/document/rustminersystem/installation)
- [Настройка](/ru/document/rustminersystem/configuration)
`,"./ru/rustminersystem/guide/06-dashboard.md":`---
id: dashboard
slug: dashboard
title: Панель RustMinerSystem и список монет
navTitle: Панель
description: Используйте панель RustMinerSystem для проверки монет, портов, хешрейта, задержки, ресурсов сервера и версии.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 6
---

# Панель и список монет

![Обзор панели RustMinerSystem](/image/docs/rustminersystem/features/ru/dashboard.png)

*Обзор панели: слева переключение монет, в центре хешрейт и порты, справа трафик, ресурсы и информация о программе.*

Панель — рабочий экран по умолчанию в разделе \`Mining Proxy\`. Здесь собраны монеты, прокси-порты, майнеры, хешрейт, задержка, ресурсы сервера и версия программы.

## Основные области

| Область | Назначение |
| --- | --- |
| Список монет | Переключение монет, хешрейт и количество онлайн-устройств. |
| Графики хешрейта | Реальный, средний и fee-хешрейт. |
| Графики устройств | Онлайн, офлайн и динамика устройств. |
| Задержка | Средняя задержка по монете и портам. |
| Список портов | Управление прокси-портами выбранной монеты. |
| Ресурсы | CPU, память, трафик, устройства, версия, время запуска и ОС. |

## Переключение монет

1. Откройте \`Mining Proxy\`.
2. Выберите монету слева.
3. Графики и список портов переключатся на выбранную монету.
4. Используйте \`Filter\`, чтобы скрыть неактивные монеты или монеты без портов.
5. На широких экранах список монет можно свернуть.

## Статусы портов

| Статус | Значение | Действие |
| --- | --- | --- |
| Running | Порт слушает и обрабатывает подключения. | Обычный контроль. |
| Starting | Запуск отправлен, порт инициализируется. | Подождать и обновить. |
| Stopped | Порт не слушает. | Запустить при необходимости. |
| Error | Сервер вернул ошибку порта. | Проверить конфигурацию, логи и конфликт портов. |

## Ежедневная проверка

1. Проверьте CPU, память, трафик и время запуска.
2. Убедитесь, что основные монеты показывают ожидаемый хешрейт и онлайн-устройства.
3. Откройте важную монету и проверьте порты, задержку и статус.
4. Если порт теряет устройства, откройте страницу порта и проверьте workers, TCP-подключения и логи.
5. Если сбой затрагивает много портов, откройте \`Log Manager\`.

\`TP\` прозрачные порты не разбирают майнинговые данные, поэтому полная статистика хешрейта, кошельков и fee для них недоступна.
`,"./ru/rustminersystem/guide/06-migration.md":`---
id: migration
slug: migration
title: Миграция RustMinerSystem
navTitle: Миграция
description: Узнайте, какие файлы RustMinerSystem нужно копировать при миграции и какие runtime-файлы следует исключить.
category: deployment
categoryTitle: Развертывание
categoryOrder: 2
order: 7
---

# Миграция

При миграции RustMinerSystem можно копировать почти весь каталог программы. Так вместе с установкой переносятся локальные настройки, конфигурация proxy-портов, сертификаты, параметры безопасного доступа и другие локальные параметры.

В Linux каталог программы по умолчанию:

\`\`\`bash
/root/rustminersystem
\`\`\`

## Правило миграции

При копировании \`/root/rustminersystem\` исключайте файлы в каталоге программы, имена которых начинаются с \`0\`, например:

- \`0.d1\`
- \`0.d1-shm\`
- \`0.d1-wal\`
- \`0.d2\`

Не переносите эти файлы с префиксом \`0\` в новое расположение. Все остальные файлы и каталоги можно скопировать, чтобы локальная конфигурация переехала вместе с установкой.

## Рекомендуемый порядок

1. Остановите RustMinerSystem на старом сервере, чтобы файлы не менялись во время миграции.
2. Скопируйте \`/root/rustminersystem\`, исключив файлы в корне каталога, имена которых начинаются с \`0\`.
3. Убедитесь, что каталог \`/root/rustminersystem\` создан на новом сервере.
4. Проверьте firewall, security group, порт админ-панели и proxy-порты на новом сервере.
5. Запустите RustMinerSystem и проверьте порты, кошельки, сертификаты и настройки безопасности.

## Пример rsync

Если новый сервер доступен по SSH, выполните команду на старом сервере:

\`\`\`bash
rsync -a --exclude='/0*' /root/rustminersystem/ root@NEW_SERVER_IP:/root/rustminersystem/
\`\`\`

Замените \`NEW_SERVER_IP\` на IP нового сервера. Правило \`--exclude='/0*'\` исключает файлы в корне исходного каталога, например \`0.d1\`, \`0.d1-shm\`, \`0.d1-wal\` и \`0.d2\`.

## Пример с архивом

Также можно создать архив на старом сервере и загрузить его на новый сервер:

\`\`\`bash
cd /root
tar --exclude='rustminersystem/0*' -czf rustminersystem-migrate.tar.gz rustminersystem
\`\`\`

Затем распакуйте архив на новом сервере:

\`\`\`bash
cd /root
tar -xzf rustminersystem-migrate.tar.gz
\`\`\`

## Проверка после миграции

- Админ-панель открывается, вход работает.
- Proxy-порты существуют и находятся в состоянии listen.
- Адреса пулов, адреса кошельков, комиссии и индивидуальные пропорции соответствуют ожиданиям.
- HTTPS-сертификаты, безопасный адрес доступа, двухэтапная проверка и allow/block lists работают корректно.
- После переключения майнеров на новый сервер RustMinerSystem и upstream-пул показывают подключения и хешрейт.

Если после миграции админ-панель недоступна, сначала проверьте firewall, security group и порт админ-панели. Если майнеры не подключаются к proxy-портам, проверьте состояние listen, новый публичный IP, правила доступа к портам и настройки майнеров.
`,"./ru/rustminersystem/guide/07-admin-login-failed.md":`---
id: admin-login-failed
slug: admin-login-failed
title: Вход в админ-панель не выполняется
navTitle: Ошибка входа
description: Проверьте аккаунт, пароль, secure access path, 2FA-код и ограничения входа, если страница админ-панели открывается, но вход не проходит.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 2
---

# Вход в админ-панель не выполняется

Если страница входа открывается, но войти в RustMinerSystem не получается, проверьте текущий URL, учетные данные, синхронизацию времени для 2FA и ограничения доступа.

## Симптомы

- Логин и пароль отклоняются.
- 2FA-код всегда считается неверным.
- После входа появляется redirect или сообщение о недостаточных правах.

## Проверки

1. Убедитесь, что используется текущий secure access path.
2. Проверьте, не были ли изменены учетные данные по умолчанию.
3. Если включена 2FA, проверьте синхронизацию времени на сервере и устройстве с authenticator.
4. Проверьте, не заблокирован ли IP через blacklist, firewall или reverse proxy.
5. Проверьте логи и убедитесь, что запросы входа доходят до сервиса RustMinerSystem.

## Восстановление

- Сначала исправьте время на сервере, затем повторите ввод 2FA-кода.
- Используйте сохраненную учетную запись администратора, а не старые default credentials.
- После восстановления доступа проверьте учетные записи, способы восстановления 2FA и login logs.

## Связанные страницы

- [Установка](/ru/document/rustminersystem/installation)
- [Настройка](/ru/document/rustminersystem/configuration)
`,"./ru/rustminersystem/guide/07-proxy-port.md":`---
id: proxyPort
slug: proxy-port
title: Создание и редактирование прокси-порта RustMinerSystem
navTitle: Создать порт
description: Создавайте, редактируйте и копируйте прокси-порты RustMinerSystem с настройками протокола, пула, fee-кошелька и совместимости.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 7
---

# Создание и редактирование прокси-порта

![Форма прокси-порта RustMinerSystem](/image/docs/rustminersystem/features/ru/proxy-port-form.png)

*Форма порта: настройте протокол, пул, fee-кошельки и расширенные параметры на шагах Basic, Fee и Advanced.*

Прокси-порт — основная рабочая единица RustMinerSystem. Майнеры подключаются к локальному порту RustMinerSystem, а сервер перенаправляет соединения в настроенный upstream-пул, собирает статистику и применяет fee-кошельки.

## Создание

1. Откройте \`Mining Proxy\`.
2. Нажмите \`Create New Proxy\` в списке монет.
3. Заполните разделы \`Basic\`, \`Fee\` и \`Advanced\`.
4. Нажмите \`Create Port\`.

## Базовые настройки

| Поле | Описание |
| --- | --- |
| Listening protocol | Протокол, по которому майнеры подключаются к RustMinerSystem. |
| Listening port | Диапазон \`1\`-\`65534\`; не должен конфликтовать с другими сервисами. |
| Coin | Влияет на разбор данных, статистику и параметры совместимости. |
| Max connections | \`0\` означает без ограничения. |
| Remark | Удобное имя, например \`BTC main port\`. |
| Primary pool | Основной upstream-пул. |
| Backup pool | Резервный пул. |
| Pool protocol | Должен совпадать с адресом пула: TCP или TLS/SSL. |

## Протоколы

| Протокол | Когда использовать |
| --- | --- |
| TCP | Максимальная совместимость, лучше в доверенной сети. |
| TLS/SSL | Зашифрованное подключение майнеров. |
| TTS | Один порт принимает TCP и TLS. |
| TP | Только прозрачная пересылка, без статистики и fee-логики. |
| RMS2 | Сжатый TLS-протокол для RMS-клиента. |
| RMS3 | Групповое сжатие, высокая компрессия и выше нагрузка CPU. |
| RMS3(Zstd) | Вариант RMS3 на Zstd, обычно легче для CPU. |
| KENC | Совместимость с KT/KENC-клиентами, ключ должен совпадать. |

## Fee-кошельки и расширенные параметры

Fee-кошелек содержит адрес или subaccount, имя worker, процент, пул и протокол пула. Не добавляйте слишком много fee-кошельков; для распределения дохода часто удобнее использовать правила самого пула.

Расширенные параметры меняют совместимость, данные отправки и ответы share. Оставляйте их по умолчанию, если сценарий не ясен.

## Редактирование и копирование

- \`Edit Port\` открывает полную конфигурацию; работающий порт перезапускается после сохранения.
- \`Clone Port\` создает новый порт из текущей конфигурации.
- \`Hot Update Fee Config\` меняет только fee-кошельки без отключения майнеров.

После создания сначала подключите несколько тестовых майнеров, сравните данные с upstream-пулом и только потом масштабируйте.
`,"./ru/rustminersystem/guide/08-port-list.md":`---
id: portList
slug: port-list
title: Список портов и массовые операции RustMinerSystem
navTitle: Список портов
description: Используйте список портов RustMinerSystem для сортировки, обновления, просмотра, запуска, остановки, копирования, удаления и массового управления.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 8
---

# Список портов и массовые операции

![Список портов RustMinerSystem](/image/docs/rustminersystem/features/ru/port-list.png)

*Список портов: протокол, порт, онлайн-устройства, хешрейт, задержка, статус и меню действий в одной строке мониторинга.*

Список портов управляет прокси-портами выбранной монеты. В меню строки доступны просмотр, редактирование, hot update, копирование, запуск, остановка и удаление.

## Операции строки

| Операция | Описание |
| --- | --- |
| View workers | Открыть страницу порта. |
| Edit port | Изменить полную конфигурацию. |
| Hot update fee config | Изменить fee-кошельки без отключения майнеров. |
| Clone port | Создать новый порт из текущей конфигурации. |
| Start / Stop port | Запустить или остановить слушающий порт. |
| Delete port | Удалить порт и связанные кошельки. |

Перед удалением рабочих портов экспортируйте резервную копию.

## Массовые операции

1. Выберите монету.
2. Нажмите иконку массовых операций в списке портов.
3. Найдите порты по номеру, примечанию или статусу.
4. Выберите порты или нажмите \`Select current filter\`.
5. Выполните \`Start selected\`, \`Stop selected\` или \`Delete selected\`.
6. Проверьте список успешных и неуспешных операций.

Массовые операции применяются только к портам текущей монеты.

## Рекомендации

Запускайте и останавливайте порты небольшими группами, проверяйте переход статуса в \`Running\`, экспортируйте конфигурацию перед крупными изменениями и разбирайте ошибки конфликтов или прав по отдельному порту.
`,"./ru/rustminersystem/guide/08-proxy-port-create-failed.md":`---
id: proxy-port-create-failed
slug: proxy-port-create-failed
title: Не удается создать proxy-порт
navTitle: Ошибка создания порта
description: Проверьте диапазон порта, занятость listener-порта, поддержку алгоритма, upstream-пулы и 2FA, если создание proxy-порта не выполняется.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 3
---

# Не удается создать proxy-порт

Ошибки создания proxy-порта обычно связаны с конфликтом listener-порта, неверным диапазоном, неподдерживаемым алгоритмом, неполными настройками upstream-пула или ошибкой security validation.

## Симптомы

- Создание proxy-порта завершается ошибкой.
- Изменения порта не сохраняются.
- В логах есть ошибки запуска listener или validation.

## Проверки

1. Убедитесь, что proxy-порт находится в диапазоне от \`1\` до \`65534\`.
2. Проверьте, не занят ли listener-порт другим портом RustMinerSystem, системным сервисом или старым процессом.
3. Убедитесь, что выбранный алгоритм поддерживается текущей версией сервера.
4. Проверьте адреса, порты и протоколы основного и резервного пула.
5. Если требуется 2FA, проверьте код и время на сервере.
6. По логам определите тип ошибки: validation, запуск listener или upstream connectivity.

## Восстановление

- Создайте тестовый порт на свободном номере.
- Перед изменением production-порта экспортируйте его конфигурацию.
- Для RMS2, RMS3 или RMS3(Zstd) сначала изучите [документацию RMS](/ru/document/rms).

## Связанные страницы

- [Настройка](/ru/document/rustminersystem/configuration)
- [Быстрый старт](/ru/document/rustminersystem/quick-start)
`,"./ru/rustminersystem/guide/09-miner-cannot-connect-port.md":`---
id: miner-cannot-connect-port
slug: miner-cannot-connect-port
title: Майнер не подключается к порту
navTitle: Майнер не подключается
description: Проверьте базовую сетевую доступность, статус listener, firewall и настройки pool URL на майнере, если подключение не работает после установки.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 4
---

# Майнер не подключается к порту

Это базовый checklist для установки и первого теста. Убедитесь, что майнер подключается к mining-порту, а не к web-порту админ-панели.

## Симптомы

- Firmware майнера показывает connection failure или постоянные reconnect.
- RustMinerSystem не показывает тестовый майнер.
- Upstream-пул не показывает worker.

## Проверки

1. Убедитесь, что listener-порт RustMinerSystem создан и работает.
2. Убедитесь, что майнер использует IP сервера RustMinerSystem и mining-порт.
3. Проверьте firewall сервера, cloud security group и сетевые правила площадки.
4. Убедитесь, что сеть майнера может достигнуть адрес сервера RustMinerSystem.
5. Для TLS/SSL, RMS2, RMS3, RMS3(Zstd) или KENC проверьте совпадение протокола клиента и серверного порта.
6. Создайте обычный Stratum TCP test port для проверки базовой сети.

## Восстановление

- Сначала проверьте plain TCP, затем включайте TLS, KENC или RMS.
- Если не работают только отдельные майнеры, сравните их pool URL, порт, username и password с рабочим майнером.
- После восстановления подключения проверьте, получает ли upstream-пул worker data.

## Связанные страницы

- [Установка](/ru/document/rustminersystem/installation)
- [Настройка](/ru/document/rustminersystem/configuration)
`,"./ru/rustminersystem/guide/09-port-detail.md":`---
id: portDetail
slug: port-detail
title: Детали порта и управление майнерами RustMinerSystem
navTitle: Детали порта
description: Используйте страницу порта RustMinerSystem для графиков, устройств, кошельков, TCP-подключений, логов и конфигурации.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 9
---

# Детали порта и управление майнерами

![Страница деталей порта RustMinerSystem](/image/docs/rustminersystem/features/ru/port-detail.png)

*Детали порта: workers, кошельки, TCP-подключения, графики, конфигурация порта и логи подключений в одном рабочем экране.*

Страница порта используется для анализа одного прокси-порта. Откройте ее кликом по строке порта или через \`View workers\`.

## Верхняя панель

Панель показывает монету, протокол, порт, примечание, статус и адрес подключения майнера. Доступны обновление, редактирование, hot update, копирование, запуск/остановка, удаление и копирование адреса.

## Обзор

Обзор показывает:

- реальный, fee и средний хешрейт;
- valid, invalid и fee share;
- задержку;
- онлайн/офлайн устройства и количество подключений;
- предупреждения для конкретных монет.

## Устройства

Список устройств поддерживает фильтр онлайн/офлайн, фильтр кошельков, сортировку, направление сортировки и пагинацию. Строка показывает статус, worker, кошелек, хешрейт, время онлайн, concurrency, эффективность, fee-процент, разрывы и задержку.

Клик по устройству открывает подробности worker: графики хешрейта и share, метаданные, логи подключения и ошибки worker.

## Кошельки

Список кошельков агрегирует онлайн/офлайн, хешрейт и состояние fee-процента. Можно добавить кошелек в избранное, отфильтровать устройства по кошельку и настроить отдельный fee-процент для кошелька.

Приоритет:

\`\`\`text
Отдельный процент worker > отдельный процент кошелька > процент порта
\`\`\`

## TCP и логи

\`TCP Monitor\` показывает живые TCP-подключения, IP, время входа и GID. Количество подключений не равно количеству майнеров.

\`Connection Log\` показывает события порта, а \`Port Config\` — фактическую конфигурацию. Для диагностики сначала проверяйте конфигурацию, затем TCP, устройства, логи и данные upstream-пула.
`,"./ru/rustminersystem/guide/10-hot-wallet.md":`---
id: hotWallet
slug: hot-wallet
title: Hot update fee-конфигурации RustMinerSystem
navTitle: Fee hot update
description: Меняйте fee-кошельки, fee-пулы, имена worker и проценты в RustMinerSystem без отключения майнеров.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 10
---

# Hot update fee-конфигурации

![Hot update fee-конфигурации RustMinerSystem](/image/docs/rustminersystem/features/ru/hot-wallet.png)

*Hot update: изменяйте fee-кошельки, проценты, имена workers и fee-пулы без активного отключения майнеров.*

Hot update меняет fee-настройки без остановки работающего порта. Используйте его, когда нужно изменить только fee-кошельки, fee-пулы, worker names или проценты.

Если меняется протокол, порт, монета, основной пул, резервный пул или расширенные параметры, используйте \`Edit Port\`.

## Где открыть

- Меню строки порта -> \`Hot update fee config\`.
- Страница порта -> \`Hot Update\`.

## Что можно изменить

| Поле | Описание |
| --- | --- |
| Wallet address | Fee-кошелек или subaccount. |
| Worker name | Имя worker для fee-кошелька. |
| Fee ratio | Процент от \`0\` до \`100\`. |
| Fee pool | Пул для fee-кошелька. |
| Fee pool protocol | TCP или TLS/SSL. |

Можно добавлять и удалять fee-кошельки, а также использовать быстрый выбор кошелька и пула.

## Если изменение долго не действует

Удалите этот fee-кошелек в диалоге hot update, создайте его заново и сохраните. Текущие майнеры не отключаются.

Приоритет процентов:

\`\`\`text
Отдельный процент worker > отдельный процент кошелька > процент порта
\`\`\`
`,"./ru/rustminersystem/guide/10-miner-cannot-connect-proxy.md":`---
id: miner-cannot-connect-proxy
slug: miner-cannot-connect-proxy
title: Майнер не подключается к proxy-порту
navTitle: Ошибка proxy-подключения
description: Проверьте настройки майнера, сетевые политики, TLS-сертификаты, KENC-ключи и параметры RMS при сбоях подключения к production proxy-порту.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 5
---

# Майнер не подключается к proxy-порту

В production такая проблема может быть связана с настройками майнера, сетевой политикой, listener-протоколом, сертификатами, KENC-ключами или RMS-клиентом.

## Симптомы

- Количество online-майнеров резко падает.
- Один proxy-порт не работает, а другие порты остаются здоровыми.
- RMS запускается локально, но майнеры не попадают в RustMinerSystem через RMS.

## Проверки

1. Убедитесь, что майнеры подключаются к mining-порту, а не к admin-порту.
2. Проверьте cloud security groups, firewall сервера, ACL площадки и внутреннюю маршрутизацию.
3. Убедитесь, что listener-протокол совпадает с протоколом майнера или RMS-клиента.
4. Для TLS/SSL проверьте срок сертификата, полноту chain и соответствие domain.
5. Для KENC проверьте совпадение ключей клиента и сервера.
6. Для RMS3 или RMS3(Zstd) проверьте protocol, coin, password, connection compression count и super-compression.
7. По connection logs отличите недоступность сети, ошибку auth, protocol mismatch и upstream pool failure.

## Восстановление

- Новые протоколы проверяйте на отдельном тестовом порту.
- Для RMS-клиента используйте [документацию RMS](/ru/document/rms).
- При массовом offline откатитесь к последнему стабильному протоколу порта и версии клиента.

## Связанные страницы

- [Настройка](/ru/document/rustminersystem/configuration)
- [RMS](/ru/document/rms)
`,"./ru/rustminersystem/guide/11-connected-no-valid-hashrate.md":`---
id: connected-no-valid-hashrate
slug: connected-no-valid-hashrate
title: Подключение есть, но нет валидного хешрейта
navTitle: Нет валидного хешрейта
description: Проверьте алгоритм монеты, протокол upstream-пула, формат кошелька, transparent forwarding, compatibility mode и replacement-настройки.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 6
---

# Подключение есть, но нет валидного хешрейта

Если порт видит подключения, путь от майнера до RustMinerSystem в целом доступен. Отсутствие валидного хешрейта чаще связано с алгоритмом, upstream-пулом, кошельком или advanced replacement.

## Симптомы

- RustMinerSystem показывает connections, но realtime или 24h hashrate остается \`0\`.
- Upstream-пул не показывает worker.
- В логах есть rejected shares, auth errors или protocol errors.

## Проверки

1. Убедитесь, что выбранные coin и algorithm соответствуют майнерам.
2. Проверьте адрес, порт и протокол upstream-пула.
3. Убедитесь, что формат wallet address или subaccount принимается upstream-пулом.
4. Проверьте worker error logs и port connection logs.
5. Для TP transparent forwarding учитывайте, что полная статистика монеты может быть недоступна.
6. Если включены compatibility mode или replacement-настройки, верните defaults и повторите тест.
7. Проверьте небольшую группу майнеров напрямую на upstream-пуле.

## Восстановление

- Начните со стандартного pool address и стандартного worker name.
- Включайте advanced replacement-настройки по одной.
- После восстановления хешрейта подождите хотя бы одно обновление статистики пула.

## Связанные страницы

- [Настройка](/ru/document/rustminersystem/configuration)
- [Эксплуатация](/ru/document/rustminersystem/operations)
`,"./ru/rustminersystem/guide/11-settings-center.md":`---
id: settingsCenter
slug: settings-center
title: Центр настроек RustMinerSystem
navTitle: Настройки
description: Настройте аккаунт, безопасный путь, двухэтапную проверку, HTTPS, сертификаты, списки доступа, пресеты, уведомления и импорт/экспорт.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 11
---

# Центр настроек

![Центр настроек RustMinerSystem](/image/docs/rustminersystem/features/ru/settings-center.png)

*Центр настроек: слева группы безопасности, общих и прочих параметров, справа форма выбранного пункта и предупреждения.*

Откройте \`Settings\` в верхнем меню \`Mining Proxy\`. Центр настроек управляет безопасностью, сертификатами, правилами доступа, пресетами, уведомлениями, импортом/экспортом и локальной информацией.

## Безопасность

| Настройка | Назначение |
| --- | --- |
| Login account / password | Изменить логин и пароль. |
| Safe access route | Скрыть стандартный путь панели; после сохранения сервис перезапускается. |
| Login two-step verification | Включить TOTP и защитить чувствительные операции. |
| HTTPS backend access | Переключить HTTP/HTTPS панели. |
| Login expiration time | Срок действия входа; после сохранения текущая сессия завершается. |
| Web access port | Изменить web-порт панели. |

В production рекомендуется сменить стандартный аккаунт, задать безопасный путь и включить двухэтапную проверку.

## Сертификаты и шифрование

| Настройка | Назначение |
| --- | --- |
| Global mining port certificate | crt/pem и key для TLS/SSL майнинг-портов. |
| KENC custom key | Ключ для KENC-портов. |

KENC-клиенты должны использовать тот же ключ, что и сервер.

## Правила доступа

- \`IP blacklist\` блокирует IP для панели и proxy-сервисов.
- \`Wallet blacklist\` блокирует кошельки или subaccount.
- \`Wallet whitelist\` разрешает только перечисленные кошельки или subaccount.

Не добавляйте текущий IP администратора в черный список.

## Уведомления, пресеты, импорт

Offline-уведомления могут использовать ServerChan или SMTP и срабатывать при офлайне майнера или падении хешрейта порта.

Quick pools и quick wallets сохраняют частые адреса для формы порта и hot update.

Импорт/экспорт поддерживает JSON RustMinerSystem, Excel-шаблоны и JSON KTMinerProxy. Экспортируйте конфигурацию перед обновлениями, миграциями и крупными изменениями fee.

\`Local UUID\` помогает при авторизации и диагностике. \`Restart service\` показывает подсказку по перезапуску.
`,"./ru/rustminersystem/guide/12-fee-wallet-no-revenue.md":`---
id: fee-wallet-no-revenue
slug: fee-wallet-no-revenue
title: Fee-кошелек не получает доход
navTitle: Нет дохода fee-кошелька
description: Проверьте default fee ratio, independent overrides, формат кошелька, протокол fee-пула и видимость worker на upstream-пуле.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 7
---

# Fee-кошелек не получает доход

Если fee-кошелек не получает доход, проверьте default fee ratio, independent overrides, адрес fee-пула, формат кошелька и появление fee worker на upstream-пуле.

## Симптомы

- Основные майнеры получают доход, а fee-кошелек нет.
- Fee worker не виден на upstream-пуле.
- Доля дохода отличается от ожидаемой.

## Проверки

1. Убедитесь, что default fee ratio порта не равен \`0\`.
2. Проверьте адрес fee-кошелька, worker name, pool address и protocol.
3. Убедитесь, что upstream-пул поддерживает формат wallet или subaccount.
4. Проверьте, не перекрывают ли wallet-specific или miner-specific ratios default ratio порта.
5. Если fee-кошельков несколько, проверьте суммарную долю.
6. Протестируйте на небольшой группе майнеров и убедитесь, что upstream-пул видит fee worker.
7. Дождитесь обновления статистики upstream-пула.

## Восстановление

- Начните с одного fee-кошелька и небольшой доли.
- Фиксируйте время изменения independent ratios.
- Fee на уровне PoolNode относится к settlement layer; смотрите [документацию PoolNode](/ru/document/poolnode).

## Связанные страницы

- [Настройка](/ru/document/rustminersystem/configuration)
- [PoolNode](/ru/document/poolnode)
`,"./ru/rustminersystem/guide/12-log-manager.md":`---
id: logManager
slug: log-manager
title: Логи и диагностика RustMinerSystem
navTitle: Логи
description: Используйте логи RustMinerSystem для runtime, ошибок, операций, проблем подключения, wallet firewall, IP-доступа и релизов.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 12
---

# Логи и диагностика

![Менеджер логов RustMinerSystem](/image/docs/rustminersystem/features/ru/log-manager.png)

*Менеджер логов: системные логи, диагностика, security-логи и версии в одном окне.*

Откройте \`Log Manager\` в верхнем меню. Красный бейдж появляется, если есть записи о проблемах подключения.

## Типы логов

| Группа | Лог | Назначение |
| --- | --- | --- |
| System | Running log | Последний runtime-вывод. |
| System | Error log | Ошибки выполнения. |
| System | Operation log | Недавние операции панели. |
| Troubleshooting | Connection trouble | Диагностика подключений. |
| Security | Wallet blacklist / whitelist log | Блокировки кошельков. |
| Security | IP block log | Блокировки IP. |
| Security | All port IP access | IP, которые обращались к proxy-портам. |
| Release | Version log | Локальная версия, последняя версия и changelog. |

## Диагностика

Если майнер не подключается:

1. Откройте порт и проверьте TCP monitor.
2. Если IP не появляется, проверьте URL майнера, firewall, security group и порт.
3. Если IP есть, но хешрейта нет, смотрите connection logs и connection trouble.
4. Проверьте адрес и протокол пула.
5. Проверьте wallet blacklist, wallet whitelist и IP blacklist.
6. Сравните с данными worker в upstream-пуле.

Для ошибок порта смотрите статус строки, error log, running log и фактическую конфигурацию порта.

При обращении за помощью укажите версию, UUID, порт, монету, протокол, пул, кошелек, worker, IP майнера, время и ключевые строки логов.
`,"./ru/rustminersystem/guide/13-linux-script-download-failed.md":`---
id: linux-script-download-failed
slug: linux-script-download-failed
title: Linux-скрипт не скачивается
navTitle: Linux-скрипт не скачивается
description: Проверьте доступность GitHub, DNS, TLS-сертификаты, fallback URL и ручную установку binary, если Linux install script не скачивается.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 8
---

# Linux-скрипт не скачивается

Ошибки загрузки Linux install script обычно вызваны сетью, DNS, TLS certificate validation или ограниченным доступом к GitHub. Скрипт не является единственным способом установки.

## Симптомы

- Команда установки долго не отвечает.
- \`curl\` сообщает о connection, DNS или TLS error.
- Скрипт скачан, но дальнейшие файлы получить не удается.

## Проверки

1. Проверьте, может ли сервер обратиться к GitHub.
2. Проверьте DNS resolution и при необходимости смените DNS.
3. Попробуйте fallback install URL из руководства по установке.
4. Если ошибка связана с TLS, проверьте время сервера и системные CA certificates.
5. Если outbound-доступ ограничен, скачайте binary в другой сети и загрузите его на сервер.
6. Разделите проблему: не скачивается сам скрипт или ошибка возникает внутри скрипта.

## Восстановление

- Предпочитайте официальный GitHub URL, fallback используйте при сетевых ограничениях.
- Для production храните проверенный binary backup.
- После установки выполните first-start verification.

## Связанные страницы

- [Установка](/ru/document/rustminersystem/installation)
`,"./ru/rustminersystem/guide/13-rms-client.md":`---
id: rmsClient
slug: rms-client
title: Настройка RMS-клиента RustMinerSystem
navTitle: RMS-клиент
description: Настраивайте push-адреса RMS, сопоставление портов, пароль, пользовательские адреса и отображение клиента в RustMinerSystem.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 13
---

# Настройка RMS-клиента

![Настройка RMS-клиента RustMinerSystem](/image/docs/rustminersystem/features/ru/rms-client.png)

*RMS-клиент: скопируйте push-адреса и синхронизируйте сопоставления портов, пароль шифрования и пользовательские адреса.*

Меню \`RMS\` управляет подключением локальных RMS-клиентов к этому серверу RustMinerSystem. RMS сжимает и шифрует трафик между майнерами и сервером, уменьшая число публичных подключений и расход полосы.

Подробности установки и планирования мощности см. в [документации RMS](/ru/document/rms).

## Push-адрес

Скопируйте push-адрес в локальный RMS-клиент, чтобы он связался с сервером и получил конфигурацию. При изменении web-порта, домена, IP, HTTPS или безопасного пути замените старый адрес в клиенте.

## Связанные адреса

Связанные адреса сопоставляют серверные RMS-порты с локальными портами RMS-клиента.

| Режим | Описание |
| --- | --- |
| Default | Клиент открывает такой же локальный порт, как серверный RMS-порт. |
| Custom | Можно изменить локальный порт клиента. |

Если список пуст, сначала создайте порт RMS2, RMS3 или RMS3(Zstd).

## Пользовательские адреса

Пользовательские адреса создают дополнительные локальные listeners и remote RMS peers. Настройка включает локальный порт, монету, примечание, super compression, compression level и один или несколько remote-адресов с протоколом, host, port и password.

## Пароль и отображение

Пароль клиента защищает синхронизацию конфигурации и ручные подключения портов. Для публичных deployment рекомендуется задавать пароль.

Раздел отображения задает имя программы, объявление и дополнительные заметки в RMS-клиенте.

После сохранения обновите RMS-клиент, подключите несколько майнеров и проверьте устройства, хешрейт и логи в RustMinerSystem.
`,"./ru/rustminersystem/guide/14-remote-control.md":`---
id: remoteControl
slug: remote-control
title: Групповое удаленное управление RustMinerSystem
navTitle: Групповое управление
description: Добавляйте удаленные клиенты RustMinerSystem и контролируйте несколько экземпляров на одной странице.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 14
---

# Групповое удаленное управление

![Рабочий экран группового управления RustMinerSystem](/image/docs/rustminersystem/features/ru/remote-control.png)

*Групповое управление: локальный fleet API, удаленные клиенты, онлайн-устройства и суммарный хешрейт.*

\`Remote Control\` объединяет несколько экземпляров RustMinerSystem на одной странице. Это удобно для нескольких прокси-серверов, площадок или клиентских окружений.

## Local Control API

Страница показывает API текущего экземпляра. Считайте его секретом. Обновление API делает старый недействительным, поэтому все подключенные менеджеры нужно обновить.

## Добавление клиента

1. Откройте \`Mining Proxy\` -> \`Remote Control\`.
2. Нажмите \`Add Client\`.
3. Введите примечание, endpoint и control API удаленного экземпляра.
4. Сохраните.
5. Страница синхронизирует порты, хешрейт, устройства, ресурсы, версию и uptime.

## Карточка клиента

Карточка показывает статус, версию, время работы, онлайн/офлайн устройства, хешрейт выбранной монеты, CPU/память, трафик и компактные графики. Для графиков хешрейта и устройств можно выбрать разные монеты.

## Действия

| Действие | Описание |
| --- | --- |
| Refresh client | Повторная синхронизация. |
| Quick view | Открыть удаленную панель в iframe. |
| Remote access | Открыть удаленную панель в новом окне. |
| Edit client | Изменить имя, endpoint или API. |
| Delete client | Удалить клиента из списка. |

Если клиент partial или offline, проверьте endpoint, протокол, firewall, safe route и правила доступа удаленного экземпляра.
`,"./ru/rustminersystem/guide/14-statistics-chart-abnormal.md":`---
id: statistics-chart-abnormal
slug: statistics-chart-abnormal
title: Аномалия статистического графика
navTitle: Аномалия графика
description: Почему графики статистики RustMinerSystem могут кратко падать до нуля из-за cloud aggregation, хотя upstream pool работает без влияния.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 9
---

# Аномалия статистического графика

Если статистический график внезапно падает до нуля, а затем возвращается к нормальной кривой, обычно это только проблема отображения. Если в upstream pool майнеры, hashrate и доход остаются нормальными, реальная mining-цепочка не затронута.

## Симптомы

- Статистический график RustMinerSystem на коротком интервале показывает \`0\`.
- Позже график возвращается к нормальной кривой.
- В upstream pool нормальны подключения, hashrate, доход и статус worker.

## Причина

Чтобы снизить нагрузку на пользовательский сервер, RustMiner агрегирует данные графиков в cloud. Когда cloud-сервис статистики испытывает высокую нагрузку или обработка завершается с ошибкой, отдельный временной интервал может быть агрегирован некорректно, и график в панели временно показывает ноль или разрыв.

Это влияет только на отображение статистического графика. Подключения майнеров, отправка share, settlement в upstream pool и доход не затрагиваются. Практический эффект только в том, что график выглядит менее ровным.

## Восстановление

1. Сначала проверьте upstream pool и убедитесь, что майнеры, hashrate и доход нормальны.
2. Если на стороне pool все нормально, продолжайте наблюдать и дождитесь восстановления cloud-статистики.
3. Не перезапускайте RustMinerSystem и не меняйте port, wallet или fee settings только из-за этого симптома.
4. Если upstream pool тоже показывает падение hashrate или offline worker, продолжайте диагностику подключения майнеров и valid hashrate.

## Связанные страницы

- [Есть подключение, но нет валидного хешрейта](/ru/document/rustminersystem/connected-no-valid-hashrate)
- [Эксплуатация](/ru/document/rustminersystem/operations)
`,"./ru/rustminersystem/guide/15-engine-control.md":`---
id: engineControl
slug: engine-control
title: Алгоритмический движок RustMinerSystem
navTitle: Алгоритмы
description: Просматривайте поддерживаемые алгоритмы и монеты RustMinerSystem и запускайте hot update движка.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 15
---

# Алгоритмический движок

![Алгоритмический движок RustMinerSystem](/image/docs/rustminersystem/features/ru/engine-control.png)

*Алгоритмический движок: проверьте поддерживаемые алгоритмы, монеты и версии, затем запустите быстрое обновление.*

Диалог \`Algorithm Engine\` показывает алгоритмы и монеты, поддерживаемые текущей версией программы, и может запускать hot update движка, если это поддержано версией.

## Что отображается

- количество алгоритмов;
- количество поддерживаемых монет;
- текущий фильтр алгоритма;
- монеты внутри каждого алгоритма;
- версия движка для монеты.

Используйте selector алгоритма, чтобы показать один алгоритм или все алгоритмы.

## Refresh и Quick Update

\`Refresh\` заново загружает данные монет и алгоритмов. Используйте после обновления или если в форме порта нет нужной монеты.

\`Quick Update\` запускает hot update движка и затем обновляет список монет. После этого новые или обновленные монеты должны появиться в форме создания прокси-порта, если версия их поддерживает.

## Диагностика

- Нет данных: нажмите refresh и проверьте running/error logs.
- Нет иконки монеты: обычно это только отображение.
- Update failed: проверьте сеть, backend logs и поддержку версии.
- Новая монета не майнится корректно: тестируйте на малом числе майнеров и проверьте протокол пула и формат кошелька.
`,"./ru/rustminersystem/guide/15-two-step-verification-lost.md":`---
id: two-step-verification-lost
slug: two-step-verification-lost
title: Потеря двухэтапной проверки
navTitle: Потеря 2FA
description: Как восстановить доступ, если authenticator RustMinerSystem потерян: связаться с администратором через Telegram для проверки и удаления 2FA.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 10
---

# Потеря двухэтапной проверки

Если телефон или приложение authenticator для двухэтапной проверки потеряны, вход в admin-панель или чувствительные операции могут не проходить проверку кода. Не подбирайте коды повторными попытками и не переустанавливайте RustMinerSystem только из-за этой проблемы.

## Симптомы

- Аккаунт и пароль верны, но кода двухэтапной проверки нет.
- Телефон был сброшен, устройство заменено или данные authenticator-приложения потеряны.
- Чувствительные операции, например создание портов или редактирование wallet, требуют 2FA и не продолжаются.

## Восстановление

1. Убедитесь, что admin-аккаунт, пароль и safe access path указаны правильно.
2. Свяжитесь с администратором через [Telegram](https://t.me/rustkt) и сообщите, что authenticator потерян.
3. Предоставьте данные для проверки владения по запросу администратора, например account details, authorization information, local UUID или записи покупки/авторизации.
4. После проверки администратор может помочь удалить двухэтапную проверку.
5. После восстановления доступа заново включите двухэтапную проверку и надежно сохраните QR code или recovery information.

Не публикуйте admin-пароли, коды проверки, private keys или полные чувствительные данные сервера в публичных группах. Если нужны материалы для проверки, передавайте их по инструкции администратора в private chat.

## Связанные страницы

- [Ошибка входа](/ru/document/rustminersystem/admin-login-failed)
- [Настройки](/ru/document/rustminersystem/settings-center)
`,"./ru/rustminersystem/guide/16-app-center.md":`---
id: appCenter
slug: app-center
title: APP-информация RustMinerSystem
navTitle: APP
description: Просматривайте APP_INFO RustMinerSystem, ссылки мобильных приложений, статусы платформ и удаленную app-конфигурацию.
category: features
categoryTitle: Использование функций
categoryOrder: 4
order: 16
---

# APP-информация

![APP-информация RustMinerSystem](/image/docs/rustminersystem/features/ru/app-center.png)

*APP-вход: описания RustMinerSystemAPP и PoolNodeAPP, статус релиза, ссылки на инструкции и загрузки.*

Меню \`APP\` показывает информацию о приложениях, возвращаемую backend-конфигурацией версии. Здесь могут быть ссылки на мобильные приложения, клиенты, custom builds, статусы платформ и заметки.

Если backend не возвращает \`APP_INFO\`, диалог показывает пустое состояние и кнопку обновления.

## Содержимое

Диалог может показывать:

- заголовок и описание;
- overview;
- имя приложения, title, tagline и status;
- feature tags;
- download, external или documentation links;
- строки Android, iOS, server или других платформ;
- описания платформ и actions.

Разные версии и custom deployments могут показывать разные entries.

## Использование

1. Откройте \`Mining Proxy\`.
2. Нажмите \`APP\`.
3. Проверьте приложения и статусы платформ.
4. Открывайте только доверенные download или external links.
5. Если контент пуст, обновите remote configuration и проверьте, что \`/api/version\` возвращает \`APP_INFO\`.

Публикуйте только доверенные ссылки и поддерживайте custom build URLs актуальными.
`,"./ru/rustminersystem/guide/16-hashrate-loss.md":`---
id: hashrate-loss
slug: hashrate-loss
title: Потеря хешрейта
navTitle: Потеря хешрейта
description: Диагностика случаев, когда customer pool показывает меньший hashrate: сеть, reject rate, число fee wallets, fee ratio и cross-pool fee.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 11
---

# Потеря хешрейта

Если итоговый hashrate в customer pool ниже ожидаемого или не совпадает со статистикой RustMinerSystem, сначала отделите обычную разницу статистических окон pool от реальной потери из-за сети, rejects или fee configuration.

## Симптомы

- Customer pool показывает effective hashrate ниже ожидаемого.
- Hashrate в RustMinerSystem, customer pool и fee pool долго не совпадает.
- В customer pool растет reject rate или worker-графики нестабильны.

## Проверки

1. Сначала проверьте network path. Посмотрите reject rate в customer pool и убедитесь, нет ли высокой задержки, packet loss, неудачного routing или нестабильных соединений между RustMinerSystem и customer pool. Плохая сеть снижает customer hashrate или повышает rejects, и большинство случаев потери хешрейта связано именно с network path.
2. Проверьте количество fee wallets и fee ratio. Слишком много fee wallets или слишком высокий fee ratio увеличивают сложность переключения и статистики, а также могут усиливать потери. Если нужно разделить доход между несколькими получателями, лучше настроить один fee wallet в RustMinerSystem, а разделение сделать на стороне pool.
3. Проверьте, использует ли fee pool тот же pool и адрес, что customer pool. Лучше, чтобы fee pool и customer pool использовали один и тот же pool address. Тогда при проблеме pool или канала вся цепочка покажет проблему одновременно, и диагностика будет проще. Cross-pool fee добавляет различия network quality, statistics windows и connection stability, что может влиять на customer hashrate или усложнять поиск источника потерь.

## Восстановление

- Проверьте небольшой набор майнеров на том же customer pool address и наблюдайте reject rate, latency и effective hashrate.
- Если rejects необычно высоки, переключитесь на более близкий регион pool, оптимизируйте routing сервера или используйте узел с лучшей сетью.
- Уменьшите число fee wallets и слишком высокий ratio, затем постепенно возвращайте настройки после стабилизации базовой цепочки.
- По возможности используйте один и тот же pool и address для customer hashrate и fee hashrate, чтобы убрать cross-pool переменные.
- После изменений наблюдайте минимум одно полное statistics window pool, а не делайте выводы по нескольким минутам графика.

## Связанные страницы

- [Есть подключение, но нет валидного хешрейта](/ru/document/rustminersystem/connected-no-valid-hashrate)
- [Создать порт](/ru/document/rustminersystem/proxy-port)
- [Fee hot update](/ru/document/rustminersystem/hot-wallet)
`,"./ru/rustminersystem/guide/17-prl-coin-issues.md":`---
id: prl-coin-issues
slug: prl-coin-issues
title: Проблемы с PRL
navTitle: PRL coin issues
description: Совместимость PRL mining: pearlhash.xyz, miner software и SRB kernel могут не поддерживать fee skimming; рекомендации по pure forwarding.
category: troubleshooting
categoryTitle: Диагностика
categoryOrder: 3
order: 12
---

# Проблемы с PRL

В текущих PRL mining path у \`pearlhash.xyz\` и miner software есть проблемы совместимости с fee skimming, поэтому распределение fee может не выполняться корректно. Если необходимо использовать \`pearlhash.xyz\`, используйте этот путь только как pure forwarding proxy и не включайте fee skimming.

## Симптомы

- Fee wallet не получает доход, или fee hashrate нестабильно появляется при использовании \`pearlhash.xyz\`.
- Fee skimming не срабатывает ожидаемо при PRL mining через affected miner software.
- Такая же проблема с отсутствием fee skimming может появляться при PRL mining через SRB kernel.

## Причина

\`pearlhash.xyz\` и affected miner software сейчас не поддерживают fee-skimming path корректно, поэтому этот путь следует использовать только как pure forwarding.

SRB kernel только недавно добавил поддержку PRL. Текущие проверки также выявили проблемы на стороне SRB kernel, из-за которых fee skimming не работает корректно.

## Рекомендации

- Не выбирайте \`pearlhash.xyz\` как PRL fee-skimming pool.
- Не используйте SRB kernel для PRL mining, если требуется fee skimming.
- Если подключение к \`pearlhash.xyz\` обязательно, используйте pure forwarding proxy mode и отключите fee skimming.
- Для PRL mining выбирайте pools и mining kernels, где fee skimming уже проверен и работает стабильно.

## Связанные страницы

- [Нет дохода fee-кошелька](/ru/document/rustminersystem/fee-wallet-no-revenue)
- [Потеря хешрейта](/ru/document/rustminersystem/hashrate-loss)
`,"./ru/rustminersystem-cli/guide/01-overview.md":`---
id: overview
slug: ""
title: Обзор документации RustMinerSystem CLI
navTitle: Обзор
description: Как организовать команды RustMinerSystem CLI, автоматизацию, диагностику и задачи обслуживания.
category: getting-started
categoryTitle: Начало работы
categoryOrder: 1
order: 1
---

# Документация RustMinerSystem CLI

RustMinerSystem CLI должен хранить повторяемые командные процессы операторов: проверки, автоматизацию, диагностику, обслуживание и поддержку релизов.

## Область документации

- Отделить команды CLI от серверной документации и документации мобильных приложений.
- Описать синтаксис команд, нужные права, интерпретацию вывода и обработку ошибок.
- Дать примеры, безопасные для скриптов, cron-задач и support-проверок.
- При необходимости связывать CLI-задачи с документами RustMinerSystem, PoolNode или RMS.

## Рекомендуемая структура

Добавьте страницы по установке, авторизации, частым командам, экспорту конфигурации, диагностике, автоматизации и устранению ошибок.
`,"./zh/custom-management/guide/01-overview.md":`---
id: overview
slug: ""
title: 定制管理文档概览
navTitle: 概览
description: 了解定制管理后台如何统一管理已安装的 RustMinerSystem 定制版程序、数据统计、抽水配置、审核和权限关系。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---

# 定制管理文档

定制管理后台用于集中管理自己名下所有已经安装的 RustMinerSystem 定制版程序。它不是单个客户终端，也不是安装器，而是面向运营方的总控后台：把各个定制版的 CID、客户端安装量、活跃设备、币种权限、钱包抽水配置、矿池节点内抽和审核流程放在同一个入口中。

![定制管理后台仪表盘](/image/docs/custom-management/features/zh/dashboard.png)

*仪表盘：管理员视角可以看到授权范围内定制版本的客户端数量、活跃设备、地区分布和币种占比。*

## 核心定位

| 模块 | 作用 |
| --- | --- |
| 仪表盘 | 汇总所有可见定制版的客户端数量、活跃设备、世界分布、币种占比和币种折线图。 |
| 服务管理 | 管理每个定制版 CID 的币种权限、钱包抽水配置、历史版本应用和客户端明细。 |
| 矿池节点 | 查看矿池节点实时算力、在线/离线设备，并维护节点内抽费率和官方费率。 |
| 审核列表 | 处理钱包新增、编辑和删除申请，让高风险配置经过审核确认后再生效。 |
| 权限分配 | 维护账号之间的管理层级，控制不同管理账号能看到和操作哪些定制版。 |

## 管理对象

后台以 CID 作为核心管理单位。一个 CID 对应一个已经交付并安装的定制版程序或客户侧管理范围。运营方可以按 CID 查看安装量、活跃设备、币种权限、钱包配置和矿池节点费率。

常见对象关系：

| 对象 | 说明 |
| --- | --- |
| 管理账号 | 登录后台的账号。不同账号按照权限分配结果查看对应管理范围。 |
| 定制版服务 | 服务管理列表中的一行，通常包含 CID、定制名称、活跃设备、客户端数量和币种权限。 |
| 客户端 | 已安装并连接后台统计接口的 RustMinerSystem 定制版实例。 |
| 币种权限 | 控制某个定制版可以使用哪些币种配置。 |
| 钱包配置 | 控制定制版在指定币种下的匿名钱包、子账号、抽水比例、设备名和矿池地址策略。 |
| 矿池节点配置 | 面向 PoolNode/矿池节点场景的独立费率配置，和传统代理抽水配置相互独立。 |

## 权限视角

具备高级权限的管理账号可以访问 \`审核列表\` 和 \`权限分配\`，并维护账号之间的可见范围。普通管理账号只展示自己被授权的定制版服务。

权限分配会影响两个方面：

- 仪表盘和服务管理中可以看到哪些 CID。
- 普通管理账号能为哪些定制版提交币种、钱包和费率相关配置申请。

## 配置生效模型

定制管理后台把“查看数据”和“修改配置”拆开处理：

1. 仪表盘、服务列表、客户端列表、矿池节点列表用于日常观察。
2. 币种权限、钱包配置、矿池节点费率属于配置修改，提交前必须确认 CID、币种、版本和比例。
3. 钱包新增、编辑、删除会进入审核流程，审核通过后才会生效。
4. 默认配置通常只影响最新版本和未来版本，历史版本需要使用 \`应用配置至历史版本\` 单独激活。

## 使用建议

- 每次进入后台先查看仪表盘，确认总客户端、活跃设备和主要币种占比是否异常。
- 修改钱包或费率前先确认目标 CID 和币种，避免把配置提交到错误定制版。
- 客户端数量大时，先用管理权限和币种筛选缩小范围，再查看图表或客户端明细。
- 涉及审核、删除、费率调整和权限归属的操作都属于线上写入操作，应在确认业务影响后再提交。
`,"./zh/custom-management/guide/02-dashboard.md":`---
id: dashboard
slug: dashboard
title: 定制管理仪表盘
navTitle: 仪表盘
description: 使用定制管理仪表盘查看全部定制版的客户端数量、活跃设备、地区分布、币种占比和算力趋势。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 2
---

# 定制管理仪表盘

![定制管理仪表盘](/image/docs/custom-management/features/zh/dashboard.png)

*仪表盘默认展示当前账号可见范围内的全部定制版。*

仪表盘是进入后台后的默认页面，用来快速判断整个定制版体系是否稳定。它聚合管理权限、币种、客户端安装量、活跃设备、世界分布、折线图和币种占比，适合日常巡检、异常初筛和客户规模观察。

## 顶部筛选

| 筛选项 | 作用 |
| --- | --- |
| 管理权限 | 在 \`全部\` 和具体 CID/定制名称之间切换，决定当前统计范围。 |
| 查看币种 | 在 \`全部\` 和具体币种之间切换，决定算力折线图、手续费算力和世界算力的币种口径。 |

如果选择 \`全部\` 币种，页面仍会展示客户端数量、活跃设备和设备占比，但实时算力、手续费算力和币种折线图需要先选择具体币种。

## 指标卡片

| 指标 | 说明 |
| --- | --- |
| 客户端数量 | 当前筛选范围内已安装并纳入统计的客户端数量。 |
| 活跃设备（总量） | 当前筛选范围内正在产生有效数据的设备数量。 |
| 总算力（实时） | 选择具体币种后显示当前币种实时总算力。 |
| 手续费（外抽实时） | 选择具体币种后显示当前币种手续费算力口径。 |

客户端数量和活跃设备适合观察定制版部署规模；算力和手续费算力适合在单币种维度上对照矿池侧数据。

## 世界算力分布

世界分布图按 IP 归属地统计设备或算力分布。右侧区域列表会展示国家/地区排名和设备数量，用于判断：

- 某个客户的矿机是否集中在预期地区。
- 某个地区的设备是否突然下降。
- 代理线路或网络波动是否集中发生在少数地区。

如果地区显示为 \`未知国家\`，通常表示 IP 归属查询没有返回明确国家信息，可以结合客户端 IP 列表继续排查。

## 图表统计

图表区支持两个视图：

| 视图 | 用途 |
| --- | --- |
| 算力折线图 | 查看所选币种的总算力和手续费算力趋势。 |
| 活跃设备折线图 | 查看所选币种的活跃设备数量变化。 |

建议在客户反馈“算力少了”“抽水没看到”“设备掉线”时，先按管理权限和币种过滤，再对照折线图中的时间点。

## 设备占比

设备占比按币种展示当前范围内的设备结构。它适合判断：

- 哪些币种是当前定制体系的主要设备来源。
- 新开币种是否已经有设备接入。
- 某个币种占比突然变化时，是否需要到服务管理或矿池节点继续检查。

## 日常巡检流程

1. 进入仪表盘，先看 \`客户端数量\` 和 \`活跃设备（总量）\` 是否符合预期。
2. 查看 \`设备占比\`，确认主力币种的占比没有异常变化。
3. 选择重点币种，观察 \`总算力（实时）\`、\`手续费（外抽实时）\` 和折线图。
4. 如果某个地区设备下降明显，记录国家/地区后到客户端明细或矿池节点页继续排查。
5. 如果只影响某一个定制版，在 \`管理权限\` 中切换到对应 CID 再复查。
`,"./zh/custom-management/guide/03-service-management.md":`---
id: serviceManagement
slug: service-management
title: 定制版服务管理
navTitle: 服务管理
description: 管理 RustMinerSystem 定制版服务的币种权限、钱包抽水配置、历史版本应用和客户端明细。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 3
---

# 定制版服务管理

![服务管理工作区](/image/docs/custom-management/features/zh/service-management.png)

*服务管理：按 CID 列出所有可管理的定制版服务，并提供币种权限、钱包配置、历史版本和客户端查看入口。*

服务管理是定制管理后台的核心操作页。每一行代表一个已安装并纳入管理的 RustMinerSystem 定制版服务，通常包含 CID、定制名称、活跃设备、客户端数量、币种权限和操作入口。

## 顶部统计

| 指标 | 说明 |
| --- | --- |
| 管理权限 | 当前账号可管理的定制版服务数量。 |
| 客户端安装数量 | 当前账号可见范围内的客户端安装总量。 |
| 总活跃设备 | 当前账号可见范围内正在活跃的设备总量。 |
| 当前默认版本 | 新配置默认生效的最新客户端版本。 |

这些统计可以和仪表盘互相对照。服务管理更偏向“按定制版服务处理配置”，仪表盘更偏向“按整体业务观察数据”。

## 服务列表字段

| 字段 | 说明 |
| --- | --- |
| cid | 定制版服务的唯一管理 ID。 |
| 定制名称 | 客户或品牌定制名称，用于人工识别。 |
| 活跃设备 | 当前服务下活跃设备数量。 |
| 客户端数量 | 当前服务下已安装客户端数量。 |
| 币种权限 | 已开放币种数量 / 系统可用币种总数。 |
| 操作 | 钱包配置、币种权限、历史版本应用和客户端查看入口。 |

列表支持按 CID、定制名称、活跃设备、客户端数量和币种权限排序。批量选择服务后，可以使用 \`批量新增币种\` 为多个定制版同时开放同一个币种。

## 币种权限配置

\`币种权限配置\` 用于控制某个定制版能使用哪些币种。打开后可以搜索币种、选择或取消选择币种，并提交到当前默认版本。

注意事项：

- 默认影响最新版本和未来版本。
- 如果需要让历史版本也生效，等待配置完成后使用 \`应用配置至历史版本\`。
- 批量新增币种只新增指定币种，不会替换原有币种权限。

## 编辑费率与钱包配置

\`编辑费率\` 打开的是钱包配置抽屉。左侧是当前定制版已开放的币种，右侧是所选币种的钱包配置和待审核申请。

钱包配置包含：

| 字段 | 说明 |
| --- | --- |
| 匿名钱包 | 抽水使用的钱包地址或矿池账号。 |
| 子账号 | 提交到矿池侧的子账号。 |
| 比例 | 当前钱包的抽水比例。 |
| 设备名 | 抽水设备名，避免使用中文和特殊字符。 |
| 跟随/指定 | 选择跟随客户矿池地址，或指定独立矿池地址。 |
| 协议 | 指定矿池时可选择 TCP 或 SSL。 |
| 版本号 | 本次配置提交对应的客户端版本。 |

新增、编辑或删除钱包配置时，系统会提交审核申请。审核通过前，配置会显示在 \`待审核申请\` 中，不会直接覆盖线上生效配置。

## 应用配置至历史版本

默认配置面向最新版本和未来版本。如果客户仍在运行历史版本，需要在服务列表中点击 \`应用配置至历史版本\`，选择目标版本并提交。

建议流程：

1. 先在最新版本完成币种权限或钱包配置。
2. 等待相关审核通过。
3. 确认客户实际运行的历史版本号。
4. 使用 \`应用配置至历史版本\` 激活当前配置。
5. 回到客户端明细或仪表盘观察是否生效。

## 查看所有客户端

\`查看所有客户端\` 用于按币种查看某个定制版服务下的客户端列表。先选择币种，再查看客户端 CID、UUID、版本号、创建时间和实时算力。

这个入口适合处理：

- 客户反馈某台机器没有数据。
- 某个版本客户端规模异常。
- 某个币种的客户端算力和仪表盘汇总不一致。

## 操作建议

- 修改钱包比例时必须非常谨慎，错误配置可能导致抽水异常。
- 设备名不要使用中文、中文标点或矿池不支持的特殊字符。
- 对多个 CID 批量开放币种前，先确认这些定制版都需要同一币种。
- 如果某个 CID 有特殊保护，页面可能只允许查看，不能新增、编辑或删除钱包配置。
`,"./zh/custom-management/guide/04-pool-nodes.md":`---
id: poolNodes
slug: pool-nodes
title: 矿池节点与内抽配置
navTitle: 矿池节点
description: 使用矿池节点页面查看 BTC、FB、LTC、DOGE、BELLS 节点实时数据，并维护内抽费率和官方费率。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 4
---

# 矿池节点与内抽配置

![矿池节点费率工作区](/image/docs/custom-management/features/zh/pool-nodes.png)

*矿池节点：按币种查看各 CID 的实时节点数据，并维护矿池节点专用费率。*

矿池节点页面用于管理 PoolNode/矿池节点场景下的定制版数据和费率。它和传统 RustMinerSystem 代理抽水配置相互独立，页面中设置的内抽费率会对相同 CID 的矿池节点客户端生效。

## 支持币种

当前页面提供以下币种标签：

| 标签 | 配置币种 |
| --- | --- |
| BTC | PI-BTC |
| FB | PI-FB |
| LTC | VA-LTC |
| DOGE | VA-DOGE |
| BELLS | VA-BELLS |

切换币种后，页面会重新加载该币种下的节点列表、在线设备、离线设备和总算力。

## 顶部统计

| 指标 | 说明 |
| --- | --- |
| 管理权限 | 当前币种下可见的 CID 数量。 |
| 在线设备 | 当前币种下在线设备合计。 |
| 离线设备 | 当前币种下离线设备合计。 |
| 算力 | 当前币种下节点实时算力合计。 |

搜索框支持按 CID、邮箱或定制名称筛选节点。

## 节点列表

列表字段包括：

| 字段 | 说明 |
| --- | --- |
| cid | 定制版服务的管理 ID。 |
| 定制名称 | 客户或品牌定制名称。 |
| 算力（实时） | 当前币种的实时节点算力。 |
| 在线设备（实时） | 当前节点在线设备数量。 |
| 离线设备（实时） | 当前节点离线设备数量。 |
| 费率邮箱 | 已在矿池节点页面注册过的费率邮箱。 |
| 官方费率 | 官方账单侧的节点费率。 |
| 内抽费率 | 当前后台维护的矿池节点内抽比例。 |

## 内抽费率

点击某一行的 \`内抽费率\` 可以设置该 CID 在当前币种下的内抽比例。

填写要求：

- 邮箱必须是在 RUST 后台矿池节点页面内注册过的邮箱，不能使用矿池官网邮箱替代。
- 比例按百分比填写，范围为 \`0\` 到 \`5\`。
- 内抽费率不会纳入官方账单费率，它是矿池节点场景的独立配置。

## 官方费率

具备对应权限的管理员账号可以设置 \`官方费率\`。其他账号通常只显示内抽费率入口，或只能查看节点数据。

官方费率会影响官方账单侧口径，修改前应确认：

- 目标 CID 和目标币种是否正确。
- 费率邮箱是否对应当前客户。
- 是否已经和客户或财务口径确认比例。

## 与服务管理的区别

| 页面 | 管理内容 |
| --- | --- |
| 服务管理 | 定制版币种权限、钱包抽水配置、历史版本生效和客户端明细。 |
| 矿池节点 | 矿池节点实时算力、在线/离线设备、内抽费率和官方费率。 |

如果客户使用传统代理抽水，优先检查服务管理中的钱包配置；如果客户使用矿池节点能力，优先检查本页面的内抽和官方费率。

## 操作建议

- 每次设置费率前先确认顶部币种标签。
- 搜索 CID 或邮箱后再操作，避免在长列表中选错行。
- 内抽费率和官方费率含义不同，不要互相替代。
- 费率调整后刷新页面，确认列表中的比例已经更新。
`,"./zh/custom-management/guide/05-audits-permissions.md":`---
id: auditsPermissions
slug: audits-permissions
title: 审核列表与权限分配
navTitle: 审核与权限
description: 使用具备审核权限的管理员账号处理钱包配置审核，并维护管理账号之间的可见范围和操作归属。
category: operations
categoryTitle: 运维流程
categoryOrder: 3
order: 5
---

# 审核列表与权限分配

\`审核列表\` 和 \`权限分配\` 用于集中处理高风险配置和管理范围，避免普通账号直接修改线上关键配置。

## 审核列表

审核列表集中处理客户或下级管理账号提交的钱包配置申请。申请类型包括：

| 类型 | 说明 |
| --- | --- |
| 新增钱包 | 为某个 CID 的指定币种新增钱包配置。 |
| 编辑钱包 | 修改已有钱包的地址、子账号、比例、设备名或矿池策略。 |
| 删除钱包 | 删除已有钱包配置。 |

页面提供 \`未审核\`、\`已审核\` 和 \`全部申请\` 三个状态。列表中可以查看 CID、定制名称、币种、钱包地址、子账号、比例、设备名、跟随/指定矿池、协议、版本号和提交时间。

## 审核操作

常用操作：

1. 使用搜索框按申请 ID、CID、定制名称、币种、钱包地址、设备名或版本号查找申请。
2. 在 \`未审核\` 标签中检查待处理申请。
3. 核对 CID、币种、比例、设备名和版本号。
4. 单条点击 \`通过\`，或勾选多条后点击 \`批量通过\`。
5. 对明显错误或重复的申请，可以勾选后使用 \`批量删除\`。

审核通过后，钱包配置才会进入可生效状态。删除申请同样属于线上写入操作，执行前应确认不是客户仍需要的配置。

## 权限分配

权限分配用于管理账号之间的可见范围和操作归属。管理员可以选择一个上级账号，然后把其他账号挂到它下面，形成管理层级。

页面包含：

| 区域 | 作用 |
| --- | --- |
| 账号数量 | 当前可管理账号总数。 |
| 当前下级数量 | 当前选中上级下面的直接下级数量。 |
| 当前上级 | 当前正在查看和调整的上级 CID。 |
| 权限结构 | 展示当前上级的下级账号，并支持继续进入下级。 |
| 分配账号 | 从未挂在当前上级下的账号中选择一个，分配到当前上级。 |

## 调整权限归属

分配账号：

1. 进入 \`权限分配\`。
2. 在权限结构中确认当前上级。
3. 在右侧搜索账号或 CID。
4. 选择目标账号。
5. 点击 \`分配权限\` 并确认。

移除账号：

1. 在当前上级的下级列表中找到目标账号。
2. 点击 \`移除\`。
3. 确认后，该账号会从当前上级的下级列表中移除。

## 权限影响

权限关系会影响下级账号能看到的数据和能提交的配置范围：

- 仪表盘只统计当前账号可见的 CID。
- 服务管理只展示当前账号可管理的定制版服务。
- 未授权账号无法访问审核列表和权限分配。
- 下级账号提交的钱包配置仍需要具备审核权限的账号确认。

## 安全建议

- 审核钱包配置时，优先核对 CID、币种、比例和版本号。
- 批量通过前确认所有勾选申请都属于同一批业务需求。
- 权限分配调整后，建议让下级账号重新登录确认可见范围。
- 不要把大量无关客户挂到同一个普通账号下，避免误操作范围过大。
`,"./zh/poolnode/guide/01-overview.md":`---
id: overview
slug: 
title: PoolNode 文档概览
navTitle: 概览
description: 了解 PoolNode 的节点组、配置中心、运行指挥台、挖矿端口、矿池官网、收益运营、PoolNodeAPP 和开放式 API。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---


# PoolNode 文档

PoolNode 是 RustMinerSystem 体系中的自有矿池节点模块，适合需要搭建矿池官网、开放用户注册、提供收益查询并按币种配置节点费率的运营方。它和 RustMinerSystem 的第三方矿池代理不同：代理模式主要负责把矿机连接转发到第三方矿池；PoolNode 则围绕 CODE/TOKEN 节点组组织挖矿端口、官网、用户账号、收益、支付地址、PoolNodeAPP 和开放式 API。

RustMinerSystem 服务端安装、安全入口和基础代理端口配置请阅读 [RustMinerSystem 文档](/zh/document/rustminersystem)。本页只说明 PoolNode 相关流程。

## 适用场景

- 需要搭建自己的矿池节点入口，而不是只代理第三方矿池。
- 需要给终端用户提供官网、注册、子账号、矿工、算力、收益和账单查询。
- 需要按币种维护节点费率，并配置收益邮箱、支付地址和起付金额。
- 需要多台服务器组成同一节点组，共享端口、用户查询信息和部分运营配置。
- 需要对接 PoolNodeAPP 或自建用户端工具。

## 后台页面结构

PoolNode 页面由四个主要区域组成：

| 区域 | 作用 |
| --- | --- |
| 币种筛选 | 顶部横向币种菜单，显示当前节点支持的币种和费率，切换后刷新该币种的统计和端口。 |
| 配置中心 | 管理官网访问、运营功能、APP 通信、开放式 API 入口和节点登录状态。 |
| 运行指挥台 | 查看节点运行说明、打开使用教程、刷新节点数据，并快速进入收益相关功能。 |
| 端口工作台 | 按当前币种查看端口状态、协议、地区、本地连接数、通信延迟，并执行添加、编辑和删除。 |

## 启用流程

1. 在 RustMinerSystem 后台进入“矿池节点”。
2. 使用已有 CODE/TOKEN 激活，或申请新的节点。
3. 在顶部币种标签选择目标币种。
4. 添加 PoolNode 挖矿端口，选择协议和接入地区，并执行连通性测试。
5. 在配置中心设置公网官网、官网地址、模板、Logo、公告、HTTPS 和证书。
6. 注册收益邮箱，并按币种配置节点费率、支付地址、起付金额、子账号独立费率、返佣和小额提现。
7. 配置 PoolNodeAPP 通信地址，确认节点邀请码。
8. 打开矿池官网，验证挖矿地址、注册、登录、查询和 APP 接入流程。

不同 CODE/TOKEN 节点组之间账号不互通。用户必须在当前节点官网注册子账号，才能在当前节点组下挖矿和查询。

## 功能使用分类

| 章节 | 适用内容 |
| --- | --- |
| [节点激活与身份](/zh/document/poolnode/activation) | 申请节点、使用 CODE/TOKEN 激活节点、理解同组服务器共享关系和退出当前节点登录状态。 |
| [挖矿端口](/zh/document/poolnode/mining-ports) | 创建 PoolNode 挖矿端口、选择协议和接入地区、测试连通性、配置官网展示地址。 |
| [矿池官网](/zh/document/poolnode/website) | 配置公网访问、官网地址、页面模板、Logo、公告、HTTPS 和证书。 |
| [收益与费率](/zh/document/poolnode/revenue) | 注册收益邮箱、查询收益和打款、设置节点费率、管理子账号、小额提现。 |
| [PoolNodeAPP](/zh/document/poolnode/app-api) | 配置 PoolNodeAPP 通信地址、节点邀请码和用户端验证流程。 |
| [开放式 API](/zh/document/poolnode/api-notes) | 自建用户前端、移动端或第三方集成时使用的 PoolNode 用户端 API。 |
| [运维检查](/zh/document/poolnode/operations) | 查看节点数据摘要、同步日志、多服务器变更流程和故障排查。 |

## 同步与本机配置边界

同步配置会影响同一 CODE/TOKEN 节点组，例如端口定义、节点费率、收益邮箱、用户信息和部分官网公共配置。本机配置只影响当前服务器，例如官网展示挖矿地址、自定义展示地址、官网访问端口、访问路径和证书状态。

新增端口或修改共享配置前，先确认同组服务器端口未被占用，并在修改后逐台检查运行状态。
`,"./zh/poolnode/guide/02-activation.md":`---
id: poolnodeActivation
slug: activation
title: 节点激活与身份
navTitle: 节点激活
description: 申请 PoolNode 节点身份，使用 CODE 和 TOKEN 激活节点，并理解同组服务器的数据共享关系。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 2
---

# 节点激活与身份

PoolNode 激活会把当前 RustMinerSystem 后台绑定到一个 PoolNode 节点组。节点组通过 \`CODE\` 和 \`TOKEN\` 识别；多台服务器使用相同的 CODE/TOKEN，就会进入同一个节点组。

## 功能作用

当这台服务器需要参与 PoolNode 官网、挖矿端口、用户查询和收益配置时，需要先激活节点。未激活时，矿池节点页面只会展示激活或申请节点表单，不会进入运行指挥台。

## 申请新节点

1. 进入后台的 \`矿池节点\`。
2. 切换到 \`申请节点\`。
3. 输入节点名称，节点名称支持中文。
4. 完成人机验证。
5. 申请成功后下载并保存 \`code-token.txt\` 备份文件。

申请得到的 \`CODE\` 和 \`TOKEN\` 就是节点组身份。请离线保存或放入密码管理器。任何拿到这两个值的人，都可以把其他服务器激活进同一节点组。

## 激活已有节点

1. 进入 \`矿池节点\`。
2. 切换到 \`激活节点\`。
3. 输入已有 \`CODE\` 和 \`TOKEN\`。
4. 完成人机验证。
5. 等待后台加载节点配置、端口、模板、收益设置和统计数据。

激活成功后，页面会显示币种标签、配置中心、收益快捷入口、节点数据摘要和端口工作台。

## 同组服务器关系

使用相同 \`CODE\` 和 \`TOKEN\` 激活的服务器属于同一节点组。通常会共享用户记录、查询数据、节点费率配置和同步端口定义。当前服务器的官网展示地址、官网访问路径和证书状态等配置可能仍然是本机配置。

新增同步端口前，请确认同组每一台服务器都没有占用该端口。只要某台服务器端口冲突，就可能出现配置已同步但该服务器无法启动端口的情况。

## 退出当前节点

配置中心里的 \`节点登录状态\` 提供 \`退出当前节点\`。这个操作只解除当前后台和节点的登录关系，不会删除节点身份。之后仍可使用原 CODE/TOKEN 重新登录。

## 快速检查

- CODE 和 TOKEN 已经备份。
- 应该同组的服务器使用同一组 CODE/TOKEN。
- 需要隔离的节点使用不同 CODE/TOKEN。
- 激活后刷新矿池节点页面，确认当前节点组名称正确。
`,"./zh/poolnode/guide/03-mining-ports.md":`---
id: poolnodeMiningPorts
slug: mining-ports
title: 挖矿端口
navTitle: 挖矿端口
description: 创建和管理 PoolNode 挖矿端口、协议、接入地区、连通性测试、本机展示地址和端口工作台。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 3
---


# 挖矿端口

PoolNode 挖矿端口是终端用户矿机连接当前节点的入口。端口工作台按顶部选中的币种筛选，并展示端口状态、端口号、备注、协议、地区、本地连接数、通信延迟和操作入口。

## 功能作用

使用挖矿端口为指定币种开放 PoolNode 接入地址。端口可以同步到同一 CODE/TOKEN 节点组，也可以在每台服务器上单独控制是否展示到官网。

## 创建端口

1. 进入“矿池节点”。
2. 在顶部币种标签中选择目标币种。
3. 点击端口工作台中的“添加端口”。
4. 填写同步配置：币种、端口号、端口备注、端口协议和接入地区。
5. 选择接入地区后点击“测试”，确认当前服务器到目标节点通信正常。
6. 填写非同步配置：是否在官网展示挖矿地址，以及是否使用自定义展示地址。
7. 保存端口。

新增端口会同步到同一节点组下的所有服务器。保存前必须确认本机和同组服务器没有占用该端口。

## 同步配置

| 配置项 | 说明 |
| --- | --- |
| 币种 | 当前端口支持的币种，来自顶部币种菜单。 |
| 端口号 | 矿机连接当前节点的监听端口，范围为 1 到 65535。 |
| 端口备注 | 运维侧备注，可用于区分线路、地区或用途。 |
| 端口协议 | 当前端口使用的接入协议，例如 TCP、TLS/SSL、TTS、RMS、RMS2、RMS3、RMS3(Zstd)。 |
| 接入地区 | 当前币种可用的后端接入区域，选择后可执行连通性测试。 |

同步配置会影响整个节点组。如果需要修改币种、协议、端口号或接入地区，请删除端口后重新创建。

## 本机展示配置

编辑端口时只能修改非同步配置：

| 配置项 | 说明 |
| --- | --- |
| 官网展示挖矿地址 | 控制该端口是否出现在当前服务器官网的挖矿地址列表中。 |
| 自定义展示挖矿地址 | 覆盖默认主机和端口，仅影响官网展示，不改变实际监听端口。 |

当服务器位于反向代理、域名或负载均衡之后，公网地址和后台主机不一致时，可以填写自定义展示地址。

## 端口工作台检查

- 状态为“运行中”或“异常”。
- 端口号和备注是否符合计划。
- 协议是否与对外说明一致。
- 接入地区是否正确。
- 本地连接数是否符合用户矿机规模。
- 通信延迟是否稳定。

端口异常时，先刷新端口列表，再检查接入地区连通性、防火墙规则、同组服务器端口冲突和端口错误信息。
`,"./zh/poolnode/guide/04-website.md":`---
id: poolnodeWebsite
slug: website
title: 矿池官网
navTitle: 矿池官网
description: 配置 PoolNode 公网官网、访问端口、自定义路径、页面模板、展示内容、HTTPS 模式和官网证书。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 4
---


# 矿池官网

PoolNode 内置用户端矿池官网。官网可以展示挖矿地址，开放用户注册，并提供矿工、算力、收益、打款和账户查询。

## 功能作用

官网访问相关能力集中在配置中心的“官网访问”分组中，包括公网开关、官网地址、页面模板、展示内容、HTTPS 和证书。

## 公网访问

“公网访问官网”控制矿池官网是否允许公网访问。它不会关闭挖矿端口。排查问题时要区分：官网不公开时，矿机仍可能正常连接端口。

## 官网访问地址

“官网访问地址”可以配置：

| 配置项 | 说明 |
| --- | --- |
| 官网访问端口 | 当前矿池官网使用的 HTTP/HTTPS 端口，范围为 1 到 65535。 |
| 自定义访问路径 | 可选路径，例如 pool。不要填写协议、域名、开头斜杠、结尾斜杠或问号参数。 |

弹窗会展示表单预览地址。保存访问路径或访问端口后，官网服务会重启，后台会提示稍后使用新地址访问。

## 官网页面模板

“官网页面模板”可以选择内置默认模板，也可以选择远程模板版本。非默认模板会由节点从远程下载。模板弹窗会展示：

- 默认模板和远程模板列表。
- 模板封面、模板名称和可选版本。
- 下载状态：准备就绪、正在下载、下载失败、解压失败或未知状态。
- “刷新状态”和“保存设置”操作。

如果远程模板下载失败，请检查服务器是否能访问 GitHub 或对应模板源。

## 官网展示内容

“官网展示内容”用于维护用户可见内容：

- Logo 图片，选择后会以 Base64 写入官网配置。
- 官网名称、主标题、副标题和公告标题。
- 底部链接 HTML。
- Logo 是否旋转。
- 是否在官网和账户页面展示节点费率。
- JSON 导入和导出，便于备份或迁移展示配置。

大幅调整官网内容前，建议先导出 JSON 备份。

## HTTPS 与证书

“HTTPS官网访问”控制内置 PoolNode 官网是否使用 HTTPS。如果已经使用 Nginx、Cloudflare 或其他 HTTPS 反向代理，通常不要开启内置 HTTPS，避免证书和跳转冲突。

“官网 HTTPS 证书”可以粘贴或上传证书和私钥，也可以恢复程序内置证书。保存或恢复证书后官网服务会重启，务必确认还能进入后台。

## 官网验证

- 外网能打开矿池官网。
- 自定义路径访问时 URL 结尾符合预期。
- 官网页面显示的挖矿地址是计划对用户公开的地址。
- 用户注册、登录和查询页面可用。
- 开启 HTTPS 后证书链有效。
`,"./zh/poolnode/guide/05-revenue.md":`---
id: poolnodeRevenue
slug: revenue
title: 收益与费率
navTitle: 收益费率
description: 注册收益邮箱、查询收益和打款、配置节点费率、管理子账号返佣并提交小额提现申请。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 5
---


# 收益与费率

PoolNode 的收益功能同时出现在运行指挥台快捷入口和配置中心的“运营功能”分组。它覆盖收益邮箱注册、收益查询、节点费率、子账号、返佣、观察者入口和小额提现。

## 功能作用

收益功能用于配置 PoolNode 节点组的运营结算侧。收益邮箱不是挖矿账号，它用于节点费率配置、支付地址验证和返佣接收。

## 快捷入口

运行指挥台提供五个常用入口：

| 入口 | 作用 |
| --- | --- |
| 收益邮箱注册 | 注册用于节点费率、支付地址和返佣接收的收益邮箱。 |
| 收益查询 | 查询收益概览、收益日志、打款记录，并维护支付地址和起付金额。 |
| 节点费率 | 按币种维护节点收益费率和收益邮箱。 |
| 子账号管理 | 管理子账号独立费率、返佣和管理员观察者入口。 |
| 小额提现 | 查询小额余额并提交提现申请。 |

## 收益邮箱注册

1. 打开“收益邮箱注册”。
2. 输入收益邮箱。
3. 发送邮箱验证码。
4. 输入验证码后提交注册。

注册后的邮箱可以继续用于节点费率、支付地址和返佣配置。

## 收益查询与支付地址

打开“收益查询”后，选择币种并输入收益邮箱。弹窗会加载：

- 总收益、昨日收益、已支付和未支付等收益概览。
- 收益日志。
- 打款日志。
- 当前支付地址。
- 当前币种起付金额。

保存支付地址时，会向收益邮箱发送验证码。提交前请核对币种、邮箱、起付金额和支付地址。

## 节点费率

“节点费率”按币种保存费率百分比和收益邮箱。保存后，当前币种会按该费率和邮箱结算软件收益。

运维建议：

- 保存前确认选择了正确币种。
- 费率保持在滑块和数字输入允许范围内。
- 多个币种可以共用收益邮箱，也可以按财务需要拆分邮箱。

## 子账号管理

子账号管理可以查询已有算力记录的子账号，并执行：

- 单独设置子账号费率。
- 还原为节点默认费率。
- 配置返佣比例和返佣邮箱。
- 移除返佣。
- 打开管理员观察者入口。

只有当业务规则和节点默认费率不同，才建议使用子账号独立费率。返佣会从该子账号收益中扣除，并发放到指定收益邮箱。

## 小额提现

小额提现用于处理未达到自动打款最低金额的余额。选择币种并填写收益邮箱后查询，如果状态显示可以申请，就提交申请；如果提示支付地址未配置，需要先在收益查询中配置该币种支付地址。

小额提现日志会展示更新时间、金额、状态和已打款时的交易哈希。
`,"./zh/poolnode/guide/06-app-api.md":`---
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
`,"./zh/poolnode/guide/07-operations.md":`---
id: poolnodeOperations
slug: operations
title: PoolNode 运维
navTitle: 运维检查
description: 监控 PoolNode 指标、节点同步、多服务器变更、官网可访问性、端口异常和恢复流程。
category: operations
categoryTitle: 运维
categoryOrder: 4
order: 42
---


# PoolNode 运维

PoolNode 仪表盘是当前节点组的运行指挥台，包含币种筛选、配置中心、收益快捷入口、节点数据摘要、同步状态和端口工作台。

## 日常检查

在运行指挥台中确认：

- 当前币种是否正确。
- 设备数量是否接近预期用户矿机数量。
- 10 分钟算力和 24 小时算力是否合理。
- 节点同步成功、失败次数是否稳定。
- 端口状态、本地连接数、通信延迟和地区是否正常。

点击节点同步指标可以打开同步日志。修改端口或共享配置后，请查看最后同步时间和失败记录。

## 多服务器变更流程

当一个 CODE/TOKEN 节点组包含多台服务器时：

1. 逐台确认目标端口没有被占用。
2. 在任一后台添加或删除同步端口。
3. 刷新每台服务器的 PoolNode 仪表盘。
4. 确认端口行在每台服务器上出现并运行。
5. 检查每台服务器的官网展示地址。
6. 打开公网官网，确认只展示计划公开的挖矿地址。

同步配置成功不代表每台主机服务都健康。本机防火墙、端口占用和证书状态仍可能不同。

## 官网故障检查

官网无法访问时检查：

- “公网访问官网”是否开启。
- 官网端口、自定义路径、防火墙和安全组规则。
- 是否同时开启了内置 HTTPS 和第三方 HTTPS 代理。
- 证书内容和私钥是否匹配。
- 修改路径、端口、HTTPS 或证书后，服务是否已经重启完成。

## 挖矿故障检查

用户无法挖矿或查询时检查：

- 用户是否在当前节点官网注册。
- 用户账号是否属于当前 CODE/TOKEN 节点组。
- 挖矿端口是否运行，并按预期显示在官网。
- 接入地区连通性测试是否通过。
- 节点费率、收益邮箱、支付地址和起付金额是否配置完整。

## API 与 APP 检查

- APP 通信地址是否可公网访问，并且末尾路径和反向代理规则正确。
- 节点邀请码是否对应当前节点组。
- 开放式 API 是否使用正确的用户端访问地址、安全路径和 \`Authorization: Bearer TOKEN\`。
- 需要验证码的接口是否先完成滑动验证码流程。

## 恢复建议

建议长期备份：

- CODE 和 TOKEN。
- 官网展示 JSON。
- 自定义证书和私钥。
- 当前官网路径和端口。
- 当前节点费率和支付配置。

恢复时，用相同 CODE/TOKEN 激活替代后台，再验证同步端口、官网访问、收益配置、APP 通信地址和开放式 API 查询，确认无误后再对外发布新地址。
`,"./zh/poolnode/guide/08-api-notes.md":`---
id: poolnodeApiNotes
slug: api-notes
title: API 使用注意事项
navTitle: API 使用注意事项
description: PoolNode 开放式 API：API 使用注意事项。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 7
---


# API 使用注意事项

本章说明 PoolNode 用户端开放式 API 的调用基址、鉴权方式、滑动验证码和币种参数规则。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

此 API 为 PoolNode 用户端开放接口，可用于开发自有用户前端、APP、管理工具或第三方查询工具。

注意：

接口调用地址为

\`\`\`
用户端访问地址:端口+安全地址
(如果未设置安全地址，则调用路径为用户端访问地址:端口)

例：

例如您的用户端访问地址为 http://127.0.0.1/{安全地址}/
则 API 调用地址为 http://127.0.0.1/{安全地址}/{API URL}

如未设置安全地址, 则直接调用根路径即可
\`\`\`

【**注意**】 **所有接口除登录外，均需要在请求头使用Authorization字段来传入token以验证身份, token获取方式详见**[**登录、获取TOKEN**](/zh/document/poolnode/api-login-token)**,   调用其他接口时header应传入**

请求头的\`Content-Type\` 应为 \`application/json\`

\`\`\`
Authorization: Bearer 获取到的TOKEN
\`\`\`

部分接口需要传入滑动验证码成功后的返回值,   关于滑动验证码调用请参考[滑动验证码](/zh/document/poolnode/api-captcha)。

**注意：**

由于历史原因，所有接口需要传入币种的参数均需要加入特殊标记，例如BTC需要传PI-BTC,  以下为币种参数对照表。

BTC:  **PI-BTC**

LTC: **VA-LTC （赠币跟随主币, 例如DOGE为VA-DOGE）**

KAS: **KAS**

ETC: **ETC**

## 旧版来源

- [API使用注意事项(必读)](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/api-shi-yong-zhu-yi-shi-xiang-bi-du.md)
`,"./zh/poolnode/guide/09-api-captcha.md":`---
id: poolnodeApiCaptcha
slug: api-captcha
title: 调用、获取滑动验证码
navTitle: 调用、获取滑动验证码
description: PoolNode 开放式 API：调用、获取滑动验证码。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 8
---


# 调用、获取滑动验证码

部分用户端接口需要先完成滑动验证码校验，并把成功返回值传入后续请求。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

由于部分接口需要传入滑动验证码返回值， WEB端可通过iframe嵌入指定路径来调用验证码组件，通过postMessage方式拿到成功、失败以及关闭的回调。APP端目前仅支持uniapp开发的APP，通过webview以及uniappSDK可进行验证码插件调用。

以携带了安全地址的访问地址为例（如未设置安全地址，则不需要携带自定义安全地址这一层路径）

\`\`\`
// 验证码插件路径
/captcha/html/index.html

// 例如您的用户端访问地址为: 
http://127.0.0.1:3333/anquandizhi/

// 滑动验证码插件访问地址则为:
http://127.0.0.1:3333/anquandizhi/captcha/html/index.html
\`\`\`

将iframe或webview的src设置为插件访问地址，即可调用滑动验证码，当滑动验证码发生事件时，WEB端或APP端将收到postMessage响应，以下为父页面收到响应示例。

**WEB端**

\`\`\`
// WEB端

<script>
window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) return;

    const message = event.data;
    if (typeof message === "object") {
        console.log("CAPTCHA:", message);
    }
});
<script>
\`\`\`

事件发生时，插件页面会给父页面响应一个object，以下为object描述。

\`\`\`javascript
// 验证通过, data字段为验证成功后的返回值
{
    action: 'success',
    data: String
}

// 验证失败, data字段为验证失败后返回的失败明细
{
    action: 'error',
    data: Object
}

// 验证码被关闭
{
    action: 'close'
}
\`\`\`

Uniapp端使用webview组件调用远程服务器插件访问地址即可调用，给WEBVIEW绑定handleMessage即可用来接收验证码插件响应，具体事件监听请参考uniapp官方文档。

## 旧版来源

- [调用、获取滑动验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/diao-yong-huo-qu-hua-dong-yan-zheng-ma.md)
`,"./zh/poolnode/guide/10-api-send-login-email.md":`---
id: poolnodeApiSendLoginEmail
slug: api-send-login-email
title: 发送登录邮箱验证码
navTitle: 发送登录邮箱验证码
description: POST /api/email：发送登录邮箱验证码。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 9
---


# 发送登录邮箱验证码

本章整理 \`POST /api/email\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
\`\`\`

滑动验证码返回值获取请参考[调用、获取滑动验证码](/zh/document/poolnode/api-captcha)

## 旧版来源

- [发送登录邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-deng-lu-you-xiang-yan-zheng-ma.md)
`,"./zh/poolnode/guide/11-api-send-user-email.md":`---
id: poolnodeApiSendUserEmail
slug: api-send-user-email
title: 发送用户相关操作邮箱验证码
navTitle: 发送用户相关操作邮箱验证码
description: POST /api/user/email：发送用户相关操作邮箱验证码。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 10
---


# 发送用户相关操作邮箱验证码

本章整理 \`POST /api/user/email\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

用户登录之后，一些用户操作相关接口需要获取邮箱验证码,  例如修改、绑定支付钱包地址等操作，统一通过此接口发送邮件验证码。

\`\`\`
URL: 
/api/user/email

METHOD: 
POST

REQUEST BODY:
{
    address: String,    // 要发送的邮箱地址
    token: String      // 获取到的滑动验证码的成功返回值
}
\`\`\`

滑动验证码返回值获取请参考[调用、获取滑动验证码](/zh/document/poolnode/api-captcha)

## 旧版来源

- [发送用户相关操作邮箱验证码](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/fa-song-yong-hu-xiang-guan-cao-zuo-you-xiang-yan-zheng-ma.md)
`,"./zh/poolnode/guide/12-api-login-token.md":`---
id: poolnodeApiLoginToken
slug: api-login-token
title: 登录、获取 TOKEN
navTitle: 登录、获取 TOKEN
description: POST /api/user/login：登录、获取 TOKEN。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 11
---


# 登录、获取 TOKEN

本章整理 \`POST /api/user/login\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/user/login

METHOD: 
POST

REQUEST BODY:
{
    email: String,    // 登录的邮箱地址
    code: String      // 获取到的邮箱验证码
}

RESULT:
{
    "status": 0,
    "error": null,
    "data": Token
}
\`\`\`

发送邮箱验证码请参考[发送登录邮箱验证码](/zh/document/poolnode/api-send-login-email)

后续所有接口都需要在请求头内加入Authorization字段，值为Bearer {Token}，用来过身份验证。

\`\`\`
// headers
{
    Authorization: Bearer Token
}
\`\`\`

## 旧版来源

- [登录、获取TOKEN](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/deng-lu-huo-qu-token.md)
`,"./zh/poolnode/guide/13-api-user-info.md":`---
id: poolnodeApiUserInfo
slug: api-user-info
title: 获取用户基础信息
navTitle: 获取用户基础信息
description: GET /api/user/info：获取用户基础信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 12
---


# 获取用户基础信息

本章整理 \`GET /api/user/info\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/user/info

METHOD: 
GET

RESULT:
{
    "email": String,        // 用户的主账号邮箱地址
    "project_id": Number,   // 无需关注
    "user_id": Number       // 用户uid
}
\`\`\`

## 旧版来源

- [获取用户基础信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-yong-hu-ji-chu-xin-xi.md)
`,"./zh/poolnode/guide/14-api-subaccount-list.md":`---
id: poolnodeApiSubaccountList
slug: api-subaccount-list
title: 获取子账号列表
navTitle: 获取子账号列表
description: GET /api/subaccount/list?coin={coin}：获取子账号列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 13
---


# 获取子账号列表

本章整理 \`GET /api/subaccount/list?coin={coin}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/list?coin={coin}

METHOD: 
GET

PARAMS:
coin 传入当前选中的币种（子账号列表中会携带选中币种的实时算力）

RESULT:
[
    {
        "hashrate": "1970324836974591.97",    // 传入币种的实时算力
        "id": 149,                            // 子账户的sid
        "name": "504132878",                  // 子账号
        "remark": null                        // 备注
    }
]
\`\`\`

## 旧版来源

- [获取子账号列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zi-zhang-hao-lie-biao.md)
`,"./zh/poolnode/guide/15-api-create-subaccount.md":`---
id: poolnodeApiCreateSubaccount
slug: api-create-subaccount
title: 创建子账号
navTitle: 创建子账号
description: POST /api/subaccount/new：创建子账号。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 14
---


# 创建子账号

本章整理 \`POST /api/subaccount/new\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/new

METHOD: 
POST

REQUEST BODY:
{
    name: String,    // 要创建的子账号
    remark: String,  // 子账号备注  
    coin: String     // 币种 'BTC、LTC、ETC、KAS.....'
}
\`\`\`

## 旧版来源

- [创建子账号](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/chuang-jian-zi-zhang-hao.md)
`,"./zh/poolnode/guide/16-api-set-payout-address.md":`---
id: poolnodeApiSetPayoutAddress
slug: api-set-payout-address
title: 设置付款地址
navTitle: 设置付款地址
description: POST /api/subaccount/update/address：设置付款地址。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 15
---


# 设置付款地址

本章整理 \`POST /api/subaccount/update/address\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/update/address

METHOD: 
POST

REQUEST BODY:

{
    "id": sid,        // 子账户的sid
    "code": code,     // 邮箱验证码
    "coin": form.selectCoin,    // 币种
    "address": form.addr,       // 匿名付款地址
    "amount": form.account      // 起付额 String类型
}
\`\`\`

邮箱验证码请参考[发送用户相关操作邮箱验证码](/zh/document/poolnode/api-send-user-email)

最小起付额数值不得低于下方列表:

BTC:  0.001

FB: 0.1

LTC: 0.01

DOGE: 50

BEL: 1

KAS: 20

ETC: 0.2

## 旧版来源

- [设置付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/she-zhi-fu-kuan-di-zhi.md)
`,"./zh/poolnode/guide/17-api-get-payout-address.md":`---
id: poolnodeApiGetPayoutAddress
slug: api-get-payout-address
title: 获取付款地址
navTitle: 获取付款地址
description: POST /api/subaccount/address/info：获取付款地址。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 16
---


# 获取付款地址

本章整理 \`POST /api/subaccount/address/info\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/address/info

METHOD: 
POST

PARAMS:
{
    "id": 149,        // 子账号sid
    "coin": "BTC"     // 币种
}

RESULT:
[
    {
        "address": "addres",    // 已设置的支付地址
        "amount": "0.001",    // 已设置的起付额
        "coin": "BTC"        // 币种
    }
]
\`\`\`

## 旧版来源

- [获取付款地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-fu-kuan-di-zhi.md)
`,"./zh/poolnode/guide/18-api-total-worker-status.md":`---
id: poolnodeApiTotalWorkerStatus
slug: api-total-worker-status
title: 获取所有子账号矿机在线、离线数量总和
navTitle: 获取所有子账号矿机在线、离线数量总和
description: GET /api/user/workers?coin={coin}：获取所有子账号矿机在线、离线数量总和。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 17
---


# 获取所有子账号矿机在线、离线数量总和

本章整理 \`GET /api/user/workers?coin={coin}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/user/workers?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "lost": null || Number,        // 失效数量
    "offline": null || Number,     // 离线数量
    "online": null || Number       // 在线数量
}
\`\`\`

此接口是获取所有子账号的数据统计之和，如需获取指定子账号下设备数量，请参考获取指定子账号设备数量接口。

## 旧版来源

- [获取所有子账号矿机在线、离线数量总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-kuang-ji-zai-xian-li-xian-shu-liang-zong-he.md)
`,"./zh/poolnode/guide/19-api-total-hashrate.md":`---
id: poolnodeApiTotalHashrate
slug: api-total-hashrate
title: 获取所有子账号算力总和
navTitle: 获取所有子账号算力总和
description: GET /api/user/hashrate?coin={coin}：获取所有子账号算力总和。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 18
---


# 获取所有子账号算力总和

本章整理 \`GET /api/user/hashrate?coin={coin}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/user/hashrate?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "hashrate": null,        // 实时算力
    "hashrate1440": null     // 24小时平均算力
}
\`\`\`

## 旧版来源

- [获取所有子账号算力总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-zong-he.md)
`,"./zh/poolnode/guide/20-api-total-hashrate-chart.md":`---
id: poolnodeApiTotalHashrateChart
slug: api-total-hashrate-chart
title: 获取所有子账号算力曲线总和
navTitle: 获取所有子账号算力曲线总和
description: GET /api/user/hashrate/detail?coin={coin}&mode={mode}：获取所有子账号算力曲线总和。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 19
---


# 获取所有子账号算力曲线总和

本章整理 \`GET /api/user/hashrate/detail?coin={coin}&mode={mode}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/user/hashrate/detail?coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
mode传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
\`\`\`

## 旧版来源

- [获取所有子账号算力曲线总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-suan-li-qu-xian-zong-he.md)
`,"./zh/poolnode/guide/21-api-subaccount-hashrate-chart.md":`---
id: poolnodeApiSubaccountHashrateChart
slug: api-subaccount-hashrate-chart
title: 获取指定子账号算力曲线
navTitle: 获取指定子账号算力曲线
description: GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}：获取指定子账号算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 20
---


# 获取指定子账号算力曲线

本章整理 \`GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}

METHOD: 
GET

PARAMS:
sid 传入指定子账号sid
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线

RESULT:
{
    "coin": "btc",    // 币种
    // 点位算力
    "hashrates": [
        "0",
        "0",
        "0",
        "0",
        "0",
        .........
    ],
    // 开始时间戳
    "startTime": 1743489900000,
    "subaccount": null,
    // 点位时间间隔
    "timeInterval": 600
}
\`\`\`

## 旧版来源

- [获取指定子账号算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-qu-xian.md)
`,"./zh/poolnode/guide/22-api-total-profit.md":`---
id: poolnodeApiTotalProfit
slug: api-total-profit
title: 获取所有子账号收益总和
navTitle: 获取所有子账号收益总和
description: GET /api/user/profit?coin={coin}：获取所有子账号收益总和。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 21
---


# 获取所有子账号收益总和

本章整理 \`GET /api/user/profit?coin={coin}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/user/profit?coin={coin}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
\`\`\`

## 旧版来源

- [获取所有子账号收益总和](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-suo-you-zi-zhang-hao-shou-yi-zong-he.md)
`,"./zh/poolnode/guide/23-api-subaccount-status.md":`---
id: poolnodeApiSubaccountStatus
slug: api-subaccount-status
title: 获取指定子账号算力、在线离线信息
navTitle: 获取指定子账号算力、在线离线信息
description: GET /api/subaccount/hashrate?coin={coin}&sid={sid}：获取指定子账号算力、在线离线信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 22
---


# 获取指定子账号算力、在线离线信息

本章整理 \`GET /api/subaccount/hashrate?coin={coin}&sid={sid}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/hashrate?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
{
    "avg_hashrate1440": "0",    // 24小时平均算力
    "hashrate": "0",            // 当前算力
    "lost": 0,                  // 失效设备数量
    "offline": 0,               // 离线数量
    "online": 0                 // 在线数量
}
\`\`\`

## 旧版来源

- [获取指定子账号算力、在线离线信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-suan-li-zai-xian-li-xian-xin-xi.md)
`,"./zh/poolnode/guide/24-api-coin-hashrate-list.md":`---
id: poolnodeApiCoinHashrateList
slug: api-coin-hashrate-list
title: 获取币种算力、设备数量列表
navTitle: 获取币种算力、设备数量列表
description: GET /api/coin/hashrate：获取币种算力、设备数量列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 23
---


# 获取币种算力、设备数量列表

本章整理 \`GET /api/coin/hashrate\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/coin/hashrate

METHOD: 
GET

RESULT:
[
    {
        "coin": "BTC",
        "hashrate": "1.355771137822993e15",
        "offline": "0",
        "online": "7"
    },
    {
        "coin": "KAS",
        "hashrate": "4277000000000",
        "offline": "0",
        "online": "1"
    }
]
\`\`\`

## 旧版来源

- [获取币种算力、设备数量列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-bi-zhong-suan-li-she-bei-shu-liang-lie-biao.md)
`,"./zh/poolnode/guide/25-api-subaccount-profit.md":`---
id: poolnodeApiSubaccountProfit
slug: api-subaccount-profit
title: 获取指定子账号收益
navTitle: 获取指定子账号收益
description: GET /api/subaccount/profit?coin={coin}&sid={sid}：获取指定子账号收益。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 24
---


# 获取指定子账号收益

本章整理 \`GET /api/subaccount/profit?coin={coin}&sid={sid}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/profit?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....
sid传入子账号id

RESULT:
[
    // 总收益
    {
        "profit": null,
        "status": "all"
    },
    // 昨日收益
    {
        "profit": null,
        "status": "yesterday"
    },
    // 未支付收益
    {
        "profit": null,
        "status": "unpaid"
    },
    // 预估收益
    {
        "profit": "0",
        "status": "estimate_profit"
    }
]
\`\`\`

## 旧版来源

- [获取指定子账号收益](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-shou-yi.md)
`,"./zh/poolnode/guide/26-api-mining-node-address.md":`---
id: poolnodeApiMiningNodeAddress
slug: api-mining-node-address
title: 获取挖矿节点地址
navTitle: 获取挖矿节点地址
description: GET /api/open/poolnode：获取挖矿节点地址。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 25
---


# 获取挖矿节点地址

本章整理 \`GET /api/open/poolnode\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

此接口用来获取PoolNode 后台配置的挖矿地址及端口

\`\`\`
URL: 
/api/open/poolnode

METHOD: 
GET

RESULT:
[
    {
        "endpoint_id": 12,             // 挖矿节点id
        "endpoint_name": "亚洲-1",      // 节点地区
        "coin": "BTC",                // 币种
        "name": "address",            // 挖矿地址（域名或ip）
        "port": 6006,                 // 挖矿端口
        "protocol": 1,                // 地址协议 0为TCP 1为SSL 2为RMS 3为TCP SSL双协议 5为RMS2
        "remark": ""
    },
    {
        "endpoint_id": 12,
        "endpoint_name": "亚洲-1",
        "coin": "BTC",
        "name": "address",
        "port": 6010,
        "protocol": 5,
        "remark": ""
    },
    {
        "endpoint_id": 21,
        "endpoint_name": "通用-1",
        "coin": "KAS",
        "name": "address",
        "port": 8001,
        "protocol": 1,
        "remark": ""
    }
]
\`\`\`

## 旧版来源

- [获取挖矿节点地址](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-wa-kuang-jie-dian-di-zhi.md)
`,"./zh/poolnode/guide/27-api-node-fee.md":`---
id: poolnodeApiNodeFee
slug: api-node-fee
title: 获取节点费率
navTitle: 获取节点费率
description: GET /api/project/fee：获取节点费率。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 26
---


# 获取节点费率

本章整理 \`GET /api/project/fee\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/project/fee

METHOD: 
GET

RESULT:
[
    {
        "r": "0.01",     // 费率 需要x100得到百分比
        "coin": "BTC"    // 币种
    },
    {
        "r": "0.01",
        "coin": "FB"
    },
    {
        "r": "0.01",
        "coin": "KAS"
    },
    ...
]
\`\`\`

## 旧版来源

- [获取节点费率](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-jie-dian-fei-l.md)
`,"./zh/poolnode/guide/28-api-subaccount-worker-list.md":`---
id: poolnodeApiSubaccountWorkerList
slug: api-subaccount-worker-list
title: 获取指定子账号下矿工列表
navTitle: 获取指定子账号下矿工列表
description: GET /api/subaccount/workers?coin={coin}&sid={sid}：获取指定子账号下矿工列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 27
---


# 获取指定子账号下矿工列表

本章整理 \`GET /api/subaccount/workers?coin={coin}&sid={sid}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/workers?coin={coin}&sid={sid}

METHOD: 
GET

PARAMS:
coin 币种
sid 子账号sid

RESULT:
[
    {
        "avgDelayrate1440": 0,
        "avgHashrate1440": "84690086742710.80",
        "avgRejectrate1440": 0.019684,
        "isCool": true,
        "lastShareTime": 1743580208,
        "realtimeHashrate": "107898741072418.13",
        "status": "active",
        "workerName": "rms01"
    }
]
\`\`\`

## 旧版来源

- [获取指定子账号下矿工列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-zi-zhang-hao-xia-kuang-gong-lie-biao.md)
`,"./zh/poolnode/guide/29-api-worker-hashrate-chart.md":`---
id: poolnodeApiWorkerHashrateChart
slug: api-worker-hashrate-chart
title: 获取指定矿工算力曲线
navTitle: 获取指定矿工算力曲线
description: GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}：获取指定矿工算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 28
---


# 获取指定矿工算力曲线

本章整理 \`GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}

METHOD: 
GET

PARAMS:
mode 
coin 传入对应币种，例如BTC、LTC....
mode 传入hourly或daily hourly为24小时算力曲线 daily为30日算力曲线
worker 传入矿工列表中拿到的workername
sid 子账号sid

RESULT:
{
    "coin": "btc",
    "hashrates": [
        "88195492702672",
        "85693492909688",
        "89446492599164",
        ...
    ],
    "startTime": 1743494100000,
    "timeInterval": 1800,
    "worker": "rms01"
}
\`\`\`

## 旧版来源

- [获取指定矿工算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-ding-kuang-gong-suan-li-qu-xian.md)
`,"./zh/poolnode/guide/30-api-reward-bills.md":`---
id: poolnodeApiRewardBills
slug: api-reward-bills
title: 获取收入账单列表
navTitle: 获取收入账单列表
description: GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}：获取收入账单列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 29
---


# 获取收入账单列表

本章整理 \`GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account": null,
            "account_type": 0,
            "ar": "1",                             // 当日费率
            "avg_hashrate": "1738588508492292",    // 结算算力
            "biz_coin": null,
            "coin": "BTC",                         // 币种
            "created_at": "2025-04-04T02:00:13Z",
            "day": "2025-04-03T00:00:00Z",
            "day_profit": "0.0009618284643889825", // 日收益
            "diff": "113757508810854",             // 难度
            "email": null,
            "id": 43215,
            "poolin_type": 0,
            "pplns_day_profit": "0.000010654886997250605",
            "pps_day_profit": "0.0009511735773917318",
            "project_id": null,
            "r": "0.9989999999525025",
            "status": 2,                           // 支付状态, 0未支付, 1支付中, 2已支付
            "subaccount_id": null,
            "updated_at": "2025-04-04T02:00:13Z",
            "user_id": null
        },
        ...
    ],
    "total": 1
}
\`\`\`

## 旧版来源

- [获取收入账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-shou-ru-zhang-dan-lie-biao.md)
`,"./zh/poolnode/guide/31-api-payout-bills.md":`---
id: poolnodeApiPayoutBills
slug: api-payout-bills
title: 获取支付账单列表
navTitle: 获取支付账单列表
description: GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}：获取支付账单列表。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 30
---


# 获取支付账单列表

本章整理 \`GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}

METHOD: 
GET

PARAMS: 
coin 传入对应币种，例如BTC、LTC....
sid 传入子账号id
page 当前页
size 每页返回条数

RESULT:
{
    "do_count": true,
    "page_no": 1,
    "page_size": 100,
    "records": [
        {
            "account_type": 0,
            "address": "...",                    // 付款地址
            "amount": "0.001920471282518579",    // 付款额
            "coin": "BTC",                            // 支付币种
            "created_at": "2025-04-04T03:24:00Z",
            "id": 5970,
            "ref_reward_ids": [],
            "status": 1,                        // 支付状态 0未支付 1已支付 2支付失败
            "subaccount_id": 149,
            "time": "2025-04-04T00:00:00Z",
            // 交易哈希
            "trans_id": "487021b26291f98061be835fdc06499376ed03b271b07a9d6a00961b49384d2b",
            "updated_at": "2025-04-04T03:24:00Z",
            "user_id": 123999002
}
        ...
    ],
    "total": 1
}
\`\`\`

## 旧版来源

- [获取支付账单列表](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-zhi-fu-zhang-dan-lie-biao.md)
`,"./zh/poolnode/guide/32-api-btc-pool-public-info.md":`---
id: poolnodeApiBtcPoolPublicInfo
slug: api-btc-pool-public-info
title: 获取 BTC 矿池公共信息
navTitle: 获取 BTC 矿池公共信息
description: GET /api/network/poolinfo：获取 BTC 矿池公共信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 31
---


# 获取 BTC 矿池公共信息

本章整理 \`GET /api/network/poolinfo\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/network/poolinfo

METHOD: 
GET

RESULT:
[
    {
        "realtimeHashrate": "31577535200606772264",
        "workerNum": 152994,
        "coin": "btc"
    }
]
\`\`\`

## 旧版来源

- [获取BTC矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi.md)
`,"./zh/poolnode/guide/33-api-altcoin-pool-public-info.md":`---
id: poolnodeApiAltcoinPoolPublicInfo
slug: api-altcoin-pool-public-info
title: 获取其他币种矿池公共信息
navTitle: 获取其他币种矿池公共信息
description: GET /api/network/poolinfo?coin={COIN}：获取其他币种矿池公共信息。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 32
---


# 获取其他币种矿池公共信息

本章整理 \`GET /api/network/poolinfo?coin={COIN}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/network/poolinfo?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "ltc": {
        "shares": {
            "shares_1m": 18.972,
            "shares_5m": 18.972,
            "shares_15m": 18.972,
            "shares_1h": 18.972,
            "shares_unit": "T"
        },
        "reject": {
            "1m": 0.0023,
            "5m": 0.0023,
            "15m": 0.0023,
            "1h": 0.0023
        },
        "workers": 3498,
        "users": 14691,
        "total_blocks": 148594,
        "total_rewards": 223357135549860
    }
}
\`\`\`

## 旧版来源

- [获取其他币种矿池公共信息](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi.md)
`,"./zh/poolnode/guide/34-api-btc-network-info.md":`---
id: poolnodeApiBtcNetworkInfo
slug: api-btc-network-info
title: 获取 BTC 矿池公共信息 2
navTitle: 获取 BTC 矿池公共信息 2
description: GET /api/network/hashrate：获取 BTC 矿池公共信息 2。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 33
---


# 获取 BTC 矿池公共信息 2

本章整理 \`GET /api/network/hashrate\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/network/hashrate

METHOD: 
GET

RESULT:
[
    {
        "diffculty": "113757508810854",
        "blockReward": 3.125,
        "blockRewardFPPS": 3.15206768,
        "networkHashrate": "850810718614301835264",
        "coin": "btc",
        "theoreticalIncome": 5.6e-7,
        "height": 890513
    }
]
\`\`\`

## 旧版来源

- [获取BTC矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-xin-xi-2.md)
`,"./zh/poolnode/guide/35-api-altcoin-network-info.md":`---
id: poolnodeApiAltcoinNetworkInfo
slug: api-altcoin-network-info
title: 获取其他币种矿池公共信息 2
navTitle: 获取其他币种矿池公共信息 2
description: GET /api/network/hashrate?coin={COIN}：获取其他币种矿池公共信息 2。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 34
---


# 获取其他币种矿池公共信息 2

本章整理 \`GET /api/network/hashrate?coin={COIN}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/network/hashrate?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "LTC": {
        "algorithm": "Scrypt",
        "block_time": 150,
        "block_reward": 6.25,
        "difficulty": 83619823.71858509,
        "net_hash": "2394296033882057",
        "net_hash_one_day": "2329323019112822",
        "net_hash_half_week": "2393607528868074",
        "net_hash_one_week": "2384617523911691",
        "net_hash_two_weeks": "2342096742781520",
        "last_block": 2872444,
        "reward_unit": "G",
        "rewards_per_unit": "0.00150357",
        "rewards_usd_per_unit": "0.12272167",
        "rewards_cny_per_unit": "0.89221162",
        "rewards_btc_per_unit": "0.00000146",
        "previous_difficulty": 82764268.0298935,
        "previous_difficulty_change": "1.03",
        "previous_difficulty_change_time": "2025-03-30 16:54:01 +0800",
        "previous_difficulty_change_time_ts": 1743324841,
        "next_difficulty_change_seconds": 307432,
        "next_difficulty_time": 1743633340,
        "next_difficulty": 82519562.88018265,
        "next_difficulty_change_rate": -0.013157894736842105
    }
}
\`\`\`

## 旧版来源

- [获取其他币种矿池公共信息2](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-xin-xi-2.md)
`,"./zh/poolnode/guide/36-api-btc-public-hashrate-chart.md":`---
id: poolnodeApiBtcPublicHashrateChart
slug: api-btc-public-hashrate-chart
title: 获取 BTC 矿池公共算力曲线
navTitle: 获取 BTC 矿池公共算力曲线
description: GET /api/network/hashratedetail：获取 BTC 矿池公共算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 35
---


# 获取 BTC 矿池公共算力曲线

本章整理 \`GET /api/network/hashratedetail\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/network/hashratedetail

METHOD: 
GET

RESULT:
{
    "timeInterval": 600,
    "startTime": 1743492900000,
    "hashrates": [
        "31107083202188395151",
        "31060294906903426061",
        "31342220009014338519",
        ...
    ],
    "coin": "btc"
}
\`\`\`

## 旧版来源

- [获取BTC矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-btc-kuang-chi-gong-gong-suan-li-qu-xian.md)
`,"./zh/poolnode/guide/37-api-altcoin-public-hashrate-chart.md":`---
id: poolnodeApiAltcoinPublicHashrateChart
slug: api-altcoin-public-hashrate-chart
title: 获取其他币种矿池公共算力曲线
navTitle: 获取其他币种矿池公共算力曲线
description: GET /api/network/hashratedetail?coin={COIN}：获取其他币种矿池公共算力曲线。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 36
---


# 获取其他币种矿池公共算力曲线

本章整理 \`GET /api/network/hashratedetail?coin={COIN}\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/network/hashratedetail?coin={COIN}

METHOD: 
GET

PARAMS:
coin传入对应币种，例如BTC、LTC....

RESULT:
{
    "unit": "T",
    "tickers": [
        [
            1743472800,
            19.308,
            0.0042
        ],
        [
            1743476400,
            19.363,
            0.0029
        ],
        ...
    ]
}
\`\`\`

## 旧版来源

- [获取其他币种矿池公共算力曲线](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-qi-ta-bi-zhong-kuang-chi-gong-gong-suan-li-qu-xian.md)
`,"./zh/poolnode/guide/38-api-site-personalization-config.md":`---
id: poolnodeApiSitePersonalizationConfig
slug: api-site-personalization-config
title: 获取个性化配置
navTitle: 获取个性化配置
description: GET /api/subaccount/address/info：获取个性化配置。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 37
---


# 获取个性化配置

本章整理 \`GET /api/subaccount/address/info\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

\`\`\`
URL: 
/api/subaccount/address/info

METHOD: 
GET

RESULT:
BASE64
\`\`\`

将获得的base64解码后parse，得到配置的config，包含了后台设置的所有个性化配置项。

## 旧版来源

- [获取个性化配置](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/huo-qu-ge-xing-hua-pei-zhi.md)
`,"./zh/poolnode/guide/39-api-app-register.md":`---
id: poolnodeApiAppRegister
slug: api-app-register
title: APP 端用户注册
navTitle: APP 端用户注册
description: POST https://api.d0gpool.com/app/register：APP 端用户注册。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 38
---


# APP 端用户注册

本章整理 \`POST https://api.d0gpool.com/app/register\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

## 请求 URL

https://api.d0gpool.com/app/register

## 请求方式

POST

## 请求示例

\`\`\`
{
"email": "xxxx",
"code": "323333", //邮箱验证码，同节点登录验证码
"invite_code": 123456 //注意这个是数字
}
\`\`\`

## 请求参数说明

| 参数名          | 类型     | 说明             |
| ------------ | ------ | -------------- |
| email        | String | 邮箱             |
| code         | String | 邮箱验证码，同节点登录验证码 |
| invite\\_code | number | 节点邀请码，注意这个是数字  |

## 成功返回示例

\`\`\`
{
"status": 0, \xA0// status = 1表示邀请码无效，此时url为空
"url": "http://1.2.3.4/a/"
}
\`\`\`

## 返回参数说明

| 参数名 | 说明 |
| --- | --- |
| status | 状态码，\`status = 1\` 表示邀请码无效，此时 \`url\` 为空。 |
| url | 后续 APP 使用的接口地址前缀，例如 \`http://1.2.3.4/a/\`。后台配置地址末尾需要保留斜杠。 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用url继续请求一次到节点使用邮箱登录

## 旧版来源

- [APP端用户注册](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-yong-hu-zhu-ce.md)
`,"./zh/poolnode/guide/40-api-app-central-login.md":`---
id: poolnodeApiAppCentralLogin
slug: api-app-central-login
title: APP 端中心化登录
navTitle: APP 端中心化登录
description: POST https://api.d0gpool.com/app/login：APP 端中心化登录。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 39
---


# APP 端中心化登录

本章整理 \`POST https://api.d0gpool.com/app/login\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

## 请求 URL

https://api.d0gpool.com/app/login

## 请求方式

POST

## 请求示例

\`\`\`
{
"email": "xxxx",
"code": "323333"
}
\`\`\`

## 请求参数说明

| 参数名   | 类型     | 说明             |
| ----- | ------ | -------------- |
| email | String | 邮箱             |
| code  | String | 邮箱验证码，同节点登录验证码 |

## 成功返回示例

\`\`\`
{
"status": 0, \xA0
"data": [
 \xA0 \xA0 \xA0  {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"created_at": "2025-09-24T07:39:47Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"name": "test-001", // 节点名称
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"updated_at": "2025-09-24T07:46:01Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"url": "xxx.com/a/" // api 地址
 \xA0 \xA0 \xA0  },
 \xA0 \xA0 \xA0  {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"created_at": "2025-09-24T07:39:47Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"name": "test-002",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"updated_at": "2025-09-24T07:46:01Z",
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"url": "xxx.com/b/"
 \xA0 \xA0 \xA0  }
 \xA0  ]
}
\`\`\`

## 返回参数说明

| 参数名                      | 说明    |
| ------------------------ | ----- |
| status                   | 状态码   |
| data\\[index].created\\_at | 创建时间  |
| data\\[index].name        | 节点名称  |
| data\\[index].updated\\_at | 更新时间  |
| data\\[index].url         | API地址 |

## 接口说明

成功时 HTTP 状态码为 200，非 200 表示请求错误，成功后使用用户选择的节点url继续请求一次至相应节点进行邮箱登录

## 旧版来源

- [APP端中心化登录](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-zhong-xin-hua-deng-lu.md)
`,"./zh/poolnode/guide/41-api-app-send-email.md":`---
id: poolnodeApiAppSendEmail
slug: api-app-send-email
title: APP 端发送邮件接口
navTitle: APP 端发送邮件接口
description: POST https://api.d0gpool.com/app/send/email：APP 端发送邮件接口。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 40
---


# APP 端发送邮件接口

本章整理 \`POST https://api.d0gpool.com/app/send/email\` 的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

## 请求 URL

https://api.d0gpool.com/app/send/email

## 请求方式

POST

## 请求示例

\`\`\`
{
"address": "",//邮箱地址
"token": ""//滑动验证码获取到的token
}
\`\`\`

## 请求参数说明

| 参数名     | 说明             |
| ------- | -------------- |
| address | 邮箱地址           |
| token   | 滑动验证码获取到的token |

## 旧版来源

- [App端发送邮件接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-fa-song-you-jian-jie-kou.md)
`,"./zh/poolnode/guide/42-api-app-captcha.md":`---
id: poolnodeApiAppCaptcha
slug: api-app-captcha
title: APP 端滑动验证码接口
navTitle: APP 端滑动验证码接口
description: PoolNode 开放式 API：APP 端滑动验证码接口。
category: open-api
categoryTitle: 开放式 API
categoryOrder: 3
order: 41
---


# APP 端滑动验证码接口

本章整理该接口的调用方式、请求参数和返回结构。

## 说明

以下接口契约来自旧版 RustMinerSystem 文档，并按当前 PoolNode 文档结构整理。接入时请以当前节点实际开放地址、安全路径和后台版本为准。

## 原文整理

## 请求 URL

https://api.d0gpool.com/captcha/html/index.html

#### 使用方法

参考文档上方《调用、获取滑动验证码》

## 旧版来源

- [App端 滑动验证码接口](https://rustminersystem.gitbook.io/rustminersystem/kuang-chi-jie-dian-yong-hu-duan-api/app-duan-hua-dong-yan-zheng-ma-jie-kou.md)
`,"./zh/rms/guide/01-overview.md":`---
id: overview
slug: ""
title: RMS 文档概览
navTitle: 概览
description: 了解 RMS 本地客户端的适用场景、RMS2/RMS3 协议、服务端配对、连接压缩、压测和回滚规划。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---

# RMS 文档

RMS 是 RustMinerSystem 的可选本地安全客户端，通常部署在矿场局域网内。矿机先连接本地 RMS，RMS 再通过 RMS2、RMS3 或 RMS3(Zstd) 协议连接 RustMinerSystem 服务端，从而减少公网连接数、压缩传输体积，并让矿机流量走受控链路。

RustMinerSystem 服务端安装、后台安全和普通代理端口配置请阅读 [RustMinerSystem 文档](/zh/document/rustminersystem)。本页只说明 RMS 本地客户端和 RMS 协议端口的配置边界。

## 适用场景

- 矿场本地矿机数量多，希望减少公网出口连接数。
- 公网带宽成本高，希望压缩矿机数据体积。
- 希望矿机只连接本地地址，公网只暴露 RMS 到 RustMinerSystem 的链路。
- 需要使用 RMS3 或 RMS3(Zstd) 的高压缩能力。
- 需要在矿场本地统一观察进口连接、出口连接、断开日志和资源占用。

如果矿机数量少、网络稳定、带宽充足，也可以不部署 RMS，让矿机直接连接 RustMinerSystem 代理端口。

## 接入拓扑

\`\`\`text
矿机 -> 本地 RMS -> RMS2/RMS3/RMS3(Zstd) 加密压缩链路 -> RustMinerSystem 代理端口 -> 上游矿池
\`\`\`

RMS 不替代 RustMinerSystem 服务端。服务端仍然负责代理端口、目标矿池、费率钱包、统计、安全和运维；RMS 负责本地接入和压缩传输。

## 功能使用分类

| 章节 | 适用内容 |
| --- | --- |
| [安装教程](/zh/document/rms/installation) | 安装 RMS3 Linux 和 Windows 版本，选择架构，并理解安装后的默认访问方式。 |
| [部署与配对](/zh/document/rms/setup) | 首次启动、推送地址、跳过配置、服务端前置条件和配对流程。 |
| [端口映射](/zh/document/rms/port-mapping) | 创建本地监听端口、绑定远程 RMS 地址、配置币种、协议、密码和负载均衡。 |
| [压缩设置](/zh/document/rms/compression) | 选择 RMS2/RMS3/RMS3(Zstd)，设置超级压缩、压缩级别和连接压缩数量。 |
| [监控与运维](/zh/document/rms/monitoring) | 查看 CPU、内存、网络、连接图表、端口状态、筛选和安全设置。 |
| [故障排查](/zh/document/rms/troubleshooting) | 排查矿机接入、服务端配对、拒绝率升高、端口冲突、安全路径错误和回滚。 |

## 协议选择

| 协议 | 说明 |
| --- | --- |
| RMS2 | RMS 压缩 TLS 协议，可减少公网连接数并压缩部分数据体积。 |
| RMS3 | 分组压缩协议，压缩率更高，但 CPU 压力更大。 |
| RMS3(Zstd) | 基于 Zstd 的 RMS3 变体，通常 CPU 压力低于 RMS3。 |

使用 RMS3 或 RMS3(Zstd) 时，服务端端口、本地 RMS 端口、币种、密码、超级压缩和压缩级别需要保持一致。配置不一致时，矿机可能无法连接、拒绝率升高或数据无法正常统计。

## 服务端配置

在 RustMinerSystem 中创建 RMS 协议端口：

1. 进入 \`矿池代理\`。
2. 点击 \`创建新代理\`。
3. 监听协议选择 RMS2、RMS3 或 RMS3(Zstd)。
4. 选择代理币种、监听端口、主矿池地址和目标矿池协议。
5. 如使用 RMS3 或 RMS3(Zstd)，在高级参数中确认压缩级别和超级压缩开关。
6. 保存端口并确认端口状态正常。

RMS3 压缩级别通常在 \`4\` 到 \`11\` 之间。级别越高通常压缩越明显，但 CPU 压力也越大。开启超级压缩后，公网传输体积会进一步降低，但可能轻微增加拒绝率；如果关闭，服务端和本地 RMS 客户端都需要同步关闭。

## 客户端配置

首次打开 RMS 时，可以填写服务端推送地址自动拉取配置；如果不需要推送地址，也可以跳过并手动添加远程地址。

手动添加端口时需要配置：

| 配置项 | 说明 |
| --- | --- |
| 本地监听端口 | 矿机在局域网内连接 RMS 的端口。 |
| 币种 | 必须与服务端 RMS 协议端口币种一致。 |
| 远程地址 | RustMinerSystem 服务端 RMS 协议端口地址，格式通常为 \`地址:端口\`。 |
| 远程协议 | RMS2、RMS3 或 RMS3(Zstd)，必须与服务端监听协议一致。 |
| 密码 | 如服务端设置密码，本地必须填写一致；未设置则留空。 |
| 超级压缩 | 使用 RMS3 时需要与服务端保持一致。 |
| 压缩级别 | 根据服务器和本地设备 CPU 能力选择。 |

配置完成后，将矿机挖矿地址改为本地 RMS 的监听地址。

## 连接压缩数量

RMS3 会把进入本地端口的矿机连接按端口压缩为较少的出口连接。连接压缩数量越低，公网出口连接数越少，压缩效果通常越明显，但 CPU、延迟和拒绝率也需要重点观察。

建议从保守值开始：

- 千台以下矿机可先测试 \`1\` 到 \`2\`。
- 大多数场景可先测试 \`1\` 到 \`6\`。
- 每个币种、每个端口都应独立观察出口连接数和拒绝率。

示例：如果连接压缩数量设置为 \`1\`，本地 RMS 同时接入 BTC 1000 台、LTC 1000 台，出口连接会按端口划分，通常会形成 BTC 1 条出口连接、LTC 1 条出口连接。

## 压测与上线

1. 在服务端创建测试 RMS 协议端口。
2. 在本地 RMS 添加对应端口。
3. 接入 1 到 5 台测试矿机。
4. 同时观察 RMS 进口/出口连接数、RustMinerSystem 端口状态、上游矿池 worker 和拒绝率。
5. 调整压缩级别、超级压缩和连接压缩数量。
6. 逐批增加矿机数量。
7. 到达目标规模后备份 RMS 客户端配置和 RustMinerSystem 端口配置。

RMS3 对 CPU 更敏感。小币种或特殊矿机出现异常时，优先降低压缩级别或关闭超级压缩测试。

## 运维检查

- RMS 程序是否运行。
- 本地监听端口是否可被矿机访问。
- 进口连接数是否接近矿机数量。
- 出口连接数是否符合连接压缩设置。
- 服务端端口在线数、算力和拒绝率是否正常。
- 断开日志中是矿机主动断开、RMS 断开、服务端断开还是上游矿池断开。
- CPU、内存和网络流量是否在可接受范围内。

## 回滚与旁路

上线 RMS 前建议准备旁路方案：

- 保留矿机直接连接 RustMinerSystem 代理端口的地址。
- 记录当前 RMS 客户端版本和端口配置。
- 保留 RustMinerSystem 端口 JSON 备份。
- 调整压缩参数前先记录原值。
- 出现大面积异常时，先切回低压缩配置或关闭超级压缩，再考虑让矿机直接连接服务端。

## 常见故障

### 矿机连不上 RMS

- 检查矿机填写的是 RMS 本地监听地址。
- 检查矿场局域网、防火墙和端口占用。
- 检查本地 RMS 端口是否已经创建并运行。

### RMS 连不上服务端

- 检查远程地址和端口是否正确。
- 检查服务端 RMS 协议端口是否运行。
- 确认本地远程协议与服务端监听协议一致。
- 检查密码是否一致，未设置密码时两端都应留空。

### 有连接但拒绝率升高

- 降低 RMS3 压缩级别。
- 关闭超级压缩并同步修改服务端和客户端。
- 降低单台 RMS 承载的矿机数量。
- 检查上游矿池延迟和服务端 CPU。

### 出口连接数不符合预期

- 确认连接压缩数量设置。
- 确认不同币种和不同端口会分别形成出口连接。
- 检查是否有多个本地端口或多个远程地址。

## 相关资源

- RMS GitHub：<https://github.com/EvilGenius-dot/RMS>
- RustMinerSystem 服务端文档：[RustMinerSystem 文档](/zh/document/rustminersystem)
`,"./zh/rms/guide/02-installation.md":`---
id: rmsInstallation
slug: installation
title: RMS 安装教程
navTitle: 安装教程
description: 安装 RMS3 Linux 和 Windows 版本，了解默认访问地址、WebView2、架构选择和旧版 RMS2 入口。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 2
---

# RMS 安装教程

RMS3 是当前推荐使用的 RMS 客户端。根据 RMS GitHub 使用指南，使用 RMS3 协议需要 RustMinerSystem 服务端 \`v4.5.0\` 及以上版本，并且 RMS3 不再兼容 RMS1/RMS2 协议端口。只有在旧服务端仍需要 RMS2 时，才使用旧版 RMS2 安装入口。

参考来源：<https://github.com/EvilGenius-dot/RMS>

## 安装前准备

- 选择一台会长期在线的矿场局域网设备。
- 给这台设备固定局域网 IP。如果路由器 DHCP 导致重启后 IP 变化，矿机可能会失去 RMS 连接地址。
- Linux 安装需要 root 权限。
- 如有防火墙限制，请放行 RMS 网页访问端口。默认访问地址是 \`http://设备IP:42703\`。
- 接入矿机前，先准备好 RustMinerSystem 服务端 RMS 协议端口。

## RMS3 Linux 安装

先切换到 root：

\`\`\`bash
sudo -i
\`\`\`

运行 GitHub 官方安装命令：

\`\`\`bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)
\`\`\`

如果服务器无法访问 GitHub，README 也提供了备用线路：

\`\`\`bash
bash <(curl -s -L -k https://rustminersystem.com/install.sh)
\`\`\`

安装脚本会进入交互菜单。选择 \`安装\`，再选择 CPU 架构和下载线路。

常见架构参考：

| 选项 | 常见设备 |
| --- | --- |
| \`x86-64\` | 大多数 Intel/AMD Linux 服务器和迷你主机。 |
| \`aarch64\` | 64 位 ARM 设备。 |
| \`arm-musleabi\`、\`arm-musleabihf\`、\`armv7-*\` | 较老 ARM 设备。 |

Linux 脚本会把 RMS 安装到 \`/root/rms\`，在 systemd 系统上配置名为 \`rmservice\` 的服务，启动程序，并在启动成功后提示访问地址。

## RMS3 Windows 安装

RMS3 提供两个 Windows 版本。

| 版本 | 下载地址 |
| --- | --- |
| 图形化界面版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/rms.exe> |
| 非图形化命令行版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/windows-no-gui/rms.exe> |

如果图形化版本打开后白屏，请安装 Microsoft Edge WebView2：

\`\`\`text
https://github.com/EvilGenius-dot/RMS/raw/main/windows-gui/MicrosoftEdgeWebview2Setup.exe
\`\`\`

启动 Windows 客户端后，从本机或局域网浏览器打开 RMS 页面，再继续配置和配对。

## 安装后首次访问

安装完成后，用浏览器访问：

\`\`\`text
http://设备IP:42703
\`\`\`

进入页面后，如果你的部署提供推送地址，就填写推送地址；如果不使用推送地址，可以跳过并手动添加远程服务端地址。

建议先检查：

- 局域网内其他设备可以打开 RMS 页面。
- RMS 安装设备 IP 已固定。
- RustMinerSystem 服务端 RMS 协议端口可访问。
- 本地 RMS 客户端和服务端端口使用同一代 RMS 协议。

## Linux 脚本管理

再次运行 Linux 安装脚本会进入管理菜单。脚本支持：

- 安装。
- 停止运行 RMS。
- 重启 RMS。
- 卸载 RMS。

如果你的部署没有额外封装服务管理，建议使用脚本菜单进行日常维护。

## 旧版 RMS2 安装

旧版 RMS2 只适用于仍需要 RMS2 的历史部署。不要把 RMS3 客户端和仅支持 RMS2 的服务端端口混用。

RMS2 Linux：

\`\`\`bash
bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/OLD_2/install.sh)
\`\`\`

RMS2 备用线路：

\`\`\`bash
bash <(curl -s -L -k https://rustminersystem.com/OLD2_install.sh)
\`\`\`

RMS2 Windows：

| 版本 | 下载地址 |
| --- | --- |
| 图形化界面版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/rms.exe> |
| 非图形化命令行版本 | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-no-gui/rms.exe> |
| WebView2 安装包 | <https://github.com/EvilGenius-dot/RMS/raw/main/OLD_2/windows-gui/MicrosoftEdgeWebview2Setup.exe> |

## 下一步

RMS 安装完成并能访问后，继续阅读 [部署与配对](/zh/document/rms/setup)。
`,"./zh/rms/guide/02-setup.md":`---
id: rmsSetup
slug: setup
title: 部署与配对
navTitle: 部署配对
description: 首次配置 RMS 本地客户端，选择推送地址或手动模式，并与 RustMinerSystem 服务端端口配对。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 3
---

# 部署与配对

RMS 位于本地矿机和 RustMinerSystem 服务端之间。首次配置时，需要决定是通过推送地址拉取配置，还是跳过推送流程后手动添加远程地址。

## 功能作用

部署与配对用于让 RMS 知道 RustMinerSystem 服务端在哪里、要连接哪些远程 RMS 协议端口，以及本地矿机应该连接哪个地址。

## 服务端前置条件

配置本地客户端前，先准备服务端：

1. 打开 RustMinerSystem 服务端后台。
2. 创建监听协议为 RMS2、RMS3 或 RMS3(Zstd) 的代理端口。
3. 选择正确币种和上游矿池。
4. 如果服务端端口设置了密码，记录下来供 RMS 本地客户端使用。
5. 如果使用 RMS3 参数，记录超级压缩和压缩级别。
6. 确认服务端端口正在运行，并且矿场网络可以访问该端口。

本地 RMS 协议必须和服务端监听协议一致。RMS3 本地端口无法接入 RMS1 或不兼容的服务端端口。

## 使用推送地址首次启动

首次打开 RMS 时，会展示推送地址输入框。如果你的部署提供集中配置 URL，可以使用这个方式。

1. 输入推送地址。
2. 提交并等待 RMS 拉取配置。
3. 成功后 RMS 进入首页仪表盘。
4. 将矿机指向 RMS 前，先核对本地端口和远程地址。

如果拉取失败，检查 URL 是否过期、当前网络是否能访问服务端，以及服务端是否已经准备好对应配置。

## 跳过并手动配置

如果不使用推送地址，并且已经知道服务端 IP/域名和 RMS 协议端口，可以点击 \`跳过\`。RMS 会在本地记录跳过状态并进入仪表盘，之后通过 \`手动添加\` 创建本地映射。

手动模式适合小规模部署、测试环境，或配置分发由其他系统处理的私有网络。

## 矿机连接地址

本地 RMS 端口创建后，端口表会展示类似地址：

\`\`\`text
stratum+tcp://本地RMS_IP:本地端口
\`\`\`

复制这个地址并填写到矿机。除非要故意旁路 RMS，否则矿机不应该直接连接远程 RMS 服务端端口。

## 重置推送地址

程序设置菜单提供 \`重置推送地址\`。当旧推送 URL 失效，或需要重新走首次配对流程时使用。重置会让原推送配置失效，并返回到配置推送地址页面。
`,"./zh/rms/guide/03-port-mapping.md":`---
id: rmsPortMapping
slug: port-mapping
title: 端口映射
navTitle: 端口映射
description: 添加和管理 RMS 本地监听端口、远程服务端地址、协议、密码和多远程地址负载均衡。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 4
---

# 端口映射

RMS 端口映射会创建一个给本地矿机连接的监听端口，并把这个端口连接到一个或多个 RustMinerSystem 服务端 RMS 协议端口。

## 功能作用

端口映射让矿机继续使用局域网地址，由 RMS 负责和服务端之间的加密压缩通信。

## 手动添加端口

1. 打开 RMS 仪表盘。
2. 点击 \`手动添加\`。
3. 设置 \`本地监听端口\`。
4. 选择币种。
5. 远程协议选择 RMS3、RMS3(Zstd) 或 RMS2。
6. 按 \`地址:端口\` 填写远程地址。
7. 如果服务端端口设置了密码，在本地填写相同密码。
8. 使用 RMS3 系列协议时，配置超级压缩和压缩级别。
9. 如需负载均衡，可以继续添加多个远程地址。
10. 保存并确认端口进入运行状态。

币种、远程协议、密码和压缩设置必须与服务端 RMS 协议端口一致。

## 远程地址列表

每个本地端口可以配置多个上游远程地址。RMS 会把进入当前端口的连接分配到不同可用远程地址，形成本地客户端侧的负载均衡。

当同一币种和协议准备了多个 RustMinerSystem 服务端端口或多台服务端主机时，可以配置多个远程地址。请确保每个远程地址都兼容当前币种和协议。

## 端口表字段

RMS 端口表展示：

| 字段 | 含义 |
| --- | --- |
| 状态 | 运行中、准备中、等待或错误。 |
| 币种 | 当前本地映射使用的币种。 |
| 备注 | 运营备注，常用 \`分类-标题\` 格式。 |
| 矿机连接地址 | 矿机应填写的本地地址，点击可复制。 |
| 负载均衡 | 远程地址详情和远程地址数量。 |
| 进口连接数 | 进入本地端口的连接数。 |
| 出口连接数 | RMS 连接远程地址的连接数。 |
| 类型 | 自动获取或手动添加。 |

手动端口可以停止、运行、编辑和删除。自动获取端口可以停止和运行，同步字段由推送配置控制。

## 备注与筛选

端口表支持按以下条件筛选：

- 备注分类。
- 端口类型：全部、自动获取、手动添加。
- 币种分类。

如果备注使用 \`farm-a-btc\` 或 \`building1-ltc\` 这类格式，\`-\` 前的前缀可以作为备注分类。

## 安全编辑规则

- 高峰期不要直接修改正在工作的端口，除非已经准备好回滚地址。
- 保存前确认远程地址符合 \`地址:端口\` 格式。
- 服务端设置密码时，本地必须填写相同密码。
- 非 BTC/LTC 币种建议先使用保守压缩配置。
`,"./zh/rms/guide/04-compression.md":`---
id: rmsCompression
slug: compression
title: 压缩设置
navTitle: 压缩设置
description: 配置 RMS2、RMS3、RMS3(Zstd)、超级压缩、压缩级别和连接压缩数量。
category: features
categoryTitle: 功能使用
categoryOrder: 2
order: 5
---

# 压缩设置

RMS 压缩分为两层：端口协议层的数据压缩，以及出口连接数量压缩。

## 功能作用

压缩设置用于减少公网带宽和出口连接数量，同时把拒绝率、CPU 负载和延迟控制在可接受范围内。

## 协议层压缩

添加或编辑本地端口时，需要选择远程协议：

| 协议 | 适用场景 |
| --- | --- |
| RMS2 | 保守压缩，兼容 RMS2 服务端端口。 |
| RMS3 | 更高压缩率，但 CPU 占用更高。 |
| RMS3(Zstd) | RMS3 的连接逻辑加 Zstd 压缩，通常对 CPU 更友好。 |

本地协议必须与服务端监听协议一致。

## 超级压缩

RMS3 包含 \`超级压缩\`。它可以显著降低流量体积，尤其适合 BTC 和 LTC。小币种或特殊矿机出现异常、拒绝率升高时，可以先关闭超级压缩测试。

修改超级压缩时，服务端端口和 RMS 本地客户端需要保持一致。

## 压缩级别

RMS 提供低、中、高压缩级别。级别越高通常压缩越明显，但 CPU 压力也越大。建议逐步测试：

1. 从低或中开始。
2. 观察 CPU、内存、拒绝率和延迟。
3. 测试矿机稳定后再提高级别。
4. 拒绝率升高或 RMS CPU 长期过高时回退。

## 连接压缩数量

\`连接压缩\` 卡片会打开连接模式弹窗。RMS3 强制使用压缩模式，可以设置每个端口压缩到多少出口连接。

数值越低，公网出口连接越少，压缩效果通常越强。代价是 CPU 压力、延迟和拒绝率敏感度更高。

推荐起点：

- 千台以下矿机：先测试 \`1\` 到 \`2\`。
- 大多数部署：先测试 \`1\` 到 \`6\`。
- 每个币种和端口单独观察。

示例：连接压缩数量为 \`1\` 时，本地 RMS 同时接入 BTC 1000 台和 LTC 1000 台，出口连接会按端口分组，通常 BTC 和 LTC 分别形成自己的出口连接。

## 调参顺序

建议按这个顺序调整：

1. 小规模矿机先确认基础连接正常。
2. 确认协议、币种和密码一致。
3. 设置连接压缩数量。
4. 选择压缩级别。
5. 开启或关闭超级压缩。
6. 逐批扩大矿机数量。
`,"./zh/rms/guide/05-monitoring.md":`---
id: rmsMonitoring
slug: monitoring
title: 监控与运维
navTitle: 监控运维
description: 监控 RMS CPU、内存、网络流量、连接图表、端口状态、筛选、后台密码、安全访问地址和观察者入口。
category: operations
categoryTitle: 运维
categoryOrder: 3
order: 6
---

# 监控与运维

RMS 仪表盘会定期刷新运行数据，展示资源占用、连接数、网络流量、压缩模式和本地端口状态。

## 仪表盘卡片

| 卡片 | 重点观察 |
| --- | --- |
| CPU / 内存 | RMS 程序压力和系统内存使用情况。 |
| 连接数 | 进口矿机连接数和出口远程连接数。 |
| 网络流量 | 接收和发送流量趋势。 |
| 连接压缩 | 当前压缩模式和出口连接压缩数量。 |

如果提高压缩后 CPU 长期过高，可以降低压缩级别、提高连接压缩数量，或把矿机拆分到多台 RMS 客户端。

## 端口操作

端口表支持：

- 复制矿机连接地址。
- 查看远程地址详情。
- 按备注、类型和币种筛选。
- 启动和停止端口。
- 编辑或删除手动端口。

任何变更后，都要同时核对进口连接数、出口连接数和服务端 worker 数据。

## 程序设置

程序设置菜单包括：

| 设置项 | 用途 |
| --- | --- |
| 重置推送地址 | 返回首次配置流程，并让旧推送配置失效。 |
| 设置后台访问密码 | 保护 RMS 后台访问。 |
| 设置安全访问地址 | 把 RMS 后台放到私有路径下，降低被扫描概率。 |
| 切换连接模式 | 打开连接压缩设置。 |
| 退出应用 | 桌面/Tauri 构建可用。 |

安全访问地址修改后会重启程序。访问时 URL 结尾必须带 \`/\`，例如 \`http://host:port/custom/\`。

## 观察者页面

RMS 前端包含观察者页面实现。如果当前构建和路由设置启用，可以通过 \`/observer/\` 提供只读入口。把它视为公开暴露面，只在部署确实需要时开启。

## 定期检查

- RMS 程序正在运行。
- 本地监听端口可被矿机访问。
- 进口连接数接近预期矿机数量。
- 出口连接数符合压缩设置。
- 服务端端口算力和拒绝率正常。
- CPU、内存和流量趋势稳定。
- 后台密码和安全访问地址已安全记录。
`,"./zh/rms/guide/06-troubleshooting.md":`---
id: rmsTroubleshooting
slug: troubleshooting
title: RMS 故障排查
navTitle: 故障排查
description: 排查 RMS 矿机接入、服务端配对、拒绝率升高、端口冲突、安全访问地址错误和回滚路径。
category: operations
categoryTitle: 运维
categoryOrder: 3
order: 7
---

# RMS 故障排查

RMS 常见问题通常来自服务端和本地配置不一致、本地端口不可达、压缩过激进，或安全路径和访问密码变更。

## 矿机连不上 RMS

检查：

- 矿机填写的是 RMS 本地地址，而不是远程服务端端口。
- 本地监听端口已经创建并运行。
- 局域网防火墙允许矿机访问 RMS 主机和端口。
- 端口没有被其他程序占用。
- 矿机地址使用端口表复制的 \`stratum+tcp://本地RMS_IP:端口\` 格式。

## RMS 连不上服务端

检查：

- 远程地址是否符合 \`地址:端口\` 格式。
- RustMinerSystem 服务端 RMS 协议端口是否运行。
- 本地远程协议是否与服务端监听协议一致。
- 两端币种是否一致。
- 两端密码是否相同，未设置时两端都应为空。
- 安全组、防火墙或上游网络是否阻断服务端端口。

## 拒绝率升高

按保守顺序回退：

1. 降低 RMS3 压缩级别。
2. 在服务端和本地 RMS 同步关闭超级压缩。
3. 提高连接压缩数量。
4. 降低单台 RMS 承载矿机数量。
5. 检查上游矿池延迟和服务端 CPU。

小币种或少见矿机固件可能对激进 RMS3 配置更敏感。

## 出口连接数不符合预期

检查：

- 连接压缩数量设置。
- 不同币种和不同本地端口会形成不同出口分组。
- 多个远程地址可能产生更多出口路径。
- 自动获取端口和手动端口是否同时运行。

## 后台路径或密码问题

如果安全访问地址配置错误：

- 输入时不能以 \`/\` 开头或结尾。
- 实际访问 URL 时结尾需要带 \`/\`。
- 如果程序重启后找不到入口，使用保存的预览地址或部署记录中的本地服务访问方式。

如果后台密码修改后遗失，请按你的部署方式执行重置流程，或从已知配置备份恢复。

## 回滚方案

生产上线前建议保留：

- 矿机直接连接 RustMinerSystem 代理端口的地址。
- RMS 客户端版本和端口配置备份。
- RustMinerSystem 端口 JSON 备份。
- 原始连接压缩数量、压缩级别和超级压缩状态。

大面积异常时，先回到低压缩或关闭超级压缩。如果仍不稳定，让矿机临时切回直接连接 RustMinerSystem 代理端口，再修复 RMS。
`,"./zh/rustminersystem/guide/01-overview.md":`---
id: overview
slug: ""
title: RustMinerSystem 文档概览
navTitle: 概览
description: 了解 RustMinerSystem 服务端与矿池代理的职责边界、后台模块和推荐阅读路径。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---
# RustMinerSystem 文档

![RustMinerSystem 中文后台预览](/image/rust.mp4)

*RustMinerSystem 中文后台预览：从概览页快速了解矿池代理仪表盘、端口列表、算力统计和服务器资源状态。*

RustMinerSystem 是面向矿机、矿场和矿池节点运营方的挖矿连接管理系统。本文档聚焦 RustMinerSystem 服务端自身，尤其是第三方矿池代理、后台管理、安全设置、端口配置、费率钱包、统计和运维流程。

[PoolNode](/zh/document/poolnode) 和 [RMS](/zh/document/rms) 是 RustMinerSystem 体系中的独立组件：PoolNode 用于自有矿池节点和用户端官网，RMS 用于矿场本地加密压缩接入。本文只在涉及边界关系时提到它们，具体部署和配置请进入对应文档。

## 核心组件

| 组件 | 作用 | 典型部署位置 |
| --- | --- | --- |
| RustMinerSystem 服务端 | 提供后台管理、矿池代理、端口、钱包、统计、安全设置等核心能力。 | 公网服务器、矿场网关或代理服务器 |
| 矿池代理 Proxy | 创建面向矿机的监听端口，将矿机连接转发到第三方矿池，并按配置处理费率钱包、协议和兼容规则。 | RustMinerSystem 服务端 |
| [PoolNode](/zh/document/poolnode) | 自有矿池节点、矿池官网、用户注册、收益查询和节点费率配置。 | 一台或多台同组服务器 |
| [RMS](/zh/document/rms) | 矿场本地加密压缩客户端，将矿机连接汇聚后接入 RustMinerSystem。 | 矿场本地局域网 |
| RustMinerSystemAPP | 面向系统运维，查看代理端口、矿工、算力和服务器状态。 | 移动端 |

## 运行模式

### 第三方矿池代理

该模式适用于已经有上游矿池账户或钱包，需要统一接入、监控和管理矿机的场景。

\`\`\`text
矿机 -> RustMinerSystem Proxy -> 第三方矿池
\`\`\`

Proxy 端口负责监听矿机连接，并按端口配置选择币种、监听协议、主矿池、备用矿池、目标矿池协议、费率钱包、钱包/矿工名替换、RMS3 压缩参数和兼容开关。后台可查看币种算力、端口状态、在线/离线设备、延迟、钱包列表、worker 列表、连接日志和系统资源。

### 自有矿池与本地压缩

如果目标是搭建自有矿池官网、用户端查询和结算层节点，请阅读 [PoolNode 文档](/zh/document/poolnode)。如果目标是让矿场本地矿机先进入加密压缩客户端，再连接 RustMinerSystem，请阅读 [RMS 文档](/zh/document/rms)。

## 后台模块

| 模块 | 说明 |
| --- | --- |
| 矿池代理 | [仪表盘](/zh/document/rustminersystem/dashboard)、[创建代理端口](/zh/document/rustminersystem/proxy-port)、[端口列表](/zh/document/rustminersystem/port-list)、[端口详情](/zh/document/rustminersystem/port-detail)、[抽水热更新](/zh/document/rustminersystem/hot-wallet)。 |
| 设置中心 | [设置中心](/zh/document/rustminersystem/settings-center) 覆盖账号密码、安全访问地址、登录二步验证、HTTPS、证书、登录过期时间、IP 黑名单、钱包黑白名单、KENC 密钥、快捷矿池、快捷钱包、掉线推送、导入/导出配置。 |
| 日志与维护 | [日志管理](/zh/document/rustminersystem/log-manager)、[算法引擎](/zh/document/rustminersystem/engine-control)、[APP 信息入口](/zh/document/rustminersystem/app-center)。 |
| RMS 接入 | [RMS 客户端配置](/zh/document/rustminersystem/rms-client) 用于推送地址、端口映射、客户端密码、自定义地址和客户端展示信息；本地客户端部署请查看 [RMS 文档](/zh/document/rms)。 |
| 群控 | [群控远程管理](/zh/document/rustminersystem/remote-control) 用于集中查看多个 RustMinerSystem 实例的算力、设备、资源、流量和运行状态。 |
| 矿池节点 | PoolNode 相关入口。节点申请、官网、收益和用户侧能力请查看 [PoolNode 文档](/zh/document/poolnode)。 |

## 费用与合规提示

旧版文档中说明 RustMinerSystem 本体不收取法币服务费；传统矿池代理和 PoolNode 会通过不同方式获得开发回报。PoolNode 的节点费率和收益规则请以 [PoolNode 文档](/zh/document/poolnode)、当前版本后台展示、发布说明和服务协议为准。

请只在你拥有设备管理权或已获得明确授权的矿场、矿机和账户中使用本系统。首次部署后应立即修改默认账号密码、设置安全访问地址、开启二步验证，并确认使用行为符合所在地区法律法规和上游矿池规则。
`,"./zh/rustminersystem/guide/02-quick-start.md":`---
id: quickStart
slug: quick-start
title: RustMinerSystem 快速开始
navTitle: 快速开始
description: 快速完成 RustMinerSystem 首次登录、安全加固、第三方矿池代理创建和测试矿机接入。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 2
---

# 快速开始

本页给出一条可以从零跑通的流程。正式接入生产矿机前，建议先使用 1 到 5 台测试矿机验证端口、协议、矿池地址、钱包和日志。

## 准备条件

| 项目 | 建议 |
| --- | --- |
| 操作系统 | Linux、Windows、ARM、ARMV7；生产环境推荐 Linux 服务器。 |
| 网络 | 服务端可访问目标矿池；矿机可访问服务端监听端口。 |
| 权限 | 具备服务器登录、安装、放行防火墙/安全组、修改矿机挖矿地址的权限。 |
| 信息 | 准备上游矿池地址、协议、钱包或子账号、矿工名和测试矿机。 |

## 首次登录

1. 安装并启动 RustMinerSystem。
2. 根据终端或窗口提示打开后台地址。
3. 使用默认账号登录后，立即修改账号密码。
4. 在设置中心配置安全访问地址，避免继续暴露默认后台入口。
5. 开启登录二步验证，并确认服务器时间准确。
6. 放行需要使用的后台端口和挖矿端口。

## 创建第三方矿池代理

适用于矿机接入已有第三方矿池的场景。

1. 进入 \`矿池代理\`。
2. 点击 \`创建新代理\`。
3. 选择监听协议。常用协议如下：

| 协议 | 使用场景 |
| --- | --- |
| TCP | 兼容性最好，矿机直接连接，但公网传输不加密。 |
| TLS/SSL | 使用挖矿端口证书加密传输，适合公网连接。 |
| TTS | 同一个端口同时兼容 TCP 和 TLS。 |
| TP | 透明转发，只做连接转发，不做币种解析、统计和费率处理。 |
| RMS2 / RMS3 / RMS3(Zstd) | 给 [RMS 本地客户端](/zh/document/rms)接入使用。 |
| KENC | 兼容 KT 本地工具或 KENC 客户端，密钥需与后台设置一致。 |

4. 填写监听端口、代理币种、最大连接数和端口备注。Proxy 创建页当前限制监听端口为 \`1\` 到 \`65534\`。
5. 配置主矿池地址和协议；备用矿池可选。目标矿池协议必须与上游矿池实际协议一致，TCP 地址选择 TCP，SSL/TLS 地址选择 TLS/SSL。
6. 按需配置费率钱包。每组钱包包含钱包地址或子账号、矿工名、费率比例、费率矿池和协议。
7. 按需配置高级参数，例如钱包替换、矿工名替换、内核信息替换、Foundry/OKMiner 优化、福禄矿机优化和强制下发成功份额。RMS3 压缩参数请参考 [RMS 文档](/zh/document/rms)。
8. 保存端口，等待端口状态正常。
9. 将测试矿机的挖矿地址改为 RustMinerSystem 服务器地址和监听端口，例如：

\`\`\`text
stratum+tcp://你的服务器IP:监听端口
\`\`\`

10. 在端口详情中检查在线设备、算力、钱包、worker、连接日志和上游矿池侧数据。

## 验证清单

- 后台默认账号密码已经修改。
- 安全访问地址已设置，二步验证已开启。
- 服务端防火墙和云安全组放行了后台端口和挖矿端口。
- 代理端口目标矿池地址和协议一致。
- 费率钱包、矿工名和比例经过少量矿机验证。
- 上线前已记录当前配置备份和回滚方案。

## 下一步

- 需要搭建自有矿池节点、官网、用户注册和节点收益功能，请继续阅读 [PoolNode 文档](/zh/document/poolnode)。
- 需要在矿场本地使用加密压缩客户端减少公网连接数和流量体积，请继续阅读 [RMS 文档](/zh/document/rms)。
`,"./zh/rustminersystem/guide/03-installation.md":`---
id: installation
slug: installation
title: RustMinerSystem 安装指南
navTitle: 安装
description: 通过 Linux 一键脚本、ARM 脚本或 Windows 二进制安装 RustMinerSystem，并完成首次启动验证。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 3
---

# 安装

RustMinerSystem 提供 Linux、Windows、ARM 和 ARMV7 安装包。Linux 推荐使用官方安装脚本；Windows 可以直接下载对应二进制程序运行。版本和文件名以官方 GitHub 仓库发布内容为准。

## Linux 一键安装

在服务器上执行：

\`\`\`bash
bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)
\`\`\`

如果所在网络访问 GitHub 较慢，可以尝试备用地址：

\`\`\`bash
bash <(curl -s -L -k https://rustminersystem.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)
\`\`\`

脚本运行后根据菜单提示完成安装、启动或管理。生产环境建议使用 Ubuntu 或其他常见 Linux 发行版，并提前确认服务器安全组、系统防火墙和运营商网络策略允许访问后台端口与挖矿端口。

## ARM / ARMV7 安装

ARM 设备使用对应脚本：

\`\`\`bash
# ARM
bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/arm-install.sh)

# ARMV7
bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/armv7-install.sh)
\`\`\`

ARM 设备性能差异较大。如果计划使用 RMS3、RMS3(Zstd)、大量端口或大量矿机接入，应先用少量矿机做 CPU、内存、连接数和拒绝率压测。

## Windows 安装

1. 打开 Windows 二进制目录：

\`\`\`text
https://github.com/EvilGenius-dot/RustMinerSystem/tree/main/windows
\`\`\`

2. 下载适合当前版本的程序文件。
3. 双击运行程序。
4. 根据程序窗口提示打开 RustMinerSystem 管理后台。
5. 首次登录后立即修改默认账号密码和安全访问地址。

## 手动下载 Linux 二进制

如果不使用一键脚本，也可以从 Linux 目录下载二进制文件后自行运行和维护：

\`\`\`text
https://github.com/EvilGenius-dot/RustMinerSystem/tree/main/linux
\`\`\`

手动部署时需要自己处理启动方式、日志路径、进程守护、升级和回滚。生产环境建议至少准备：

- 服务启动脚本或 systemd 服务。
- 配置文件备份目录。
- 日志保留策略。
- 升级前的二进制备份。
- 端口和安全组放行清单。

## 默认后台账号

旧版安装完成后会使用默认后台账号密码。首次进入后台后必须立即修改。

\`\`\`text
默认账号: qzpm19kkx
默认密码: xloqslz913
\`\`\`

如果当前版本已经在安装流程中提示自定义账号密码，请以实际安装提示为准。

## 首次启动验证

安装完成后，按以下顺序验证：

1. 后台地址可以打开。
2. 默认账号可以登录，且已改为自定义账号密码。
3. 安全访问地址已设置，默认后台入口不再继续使用。
4. 二步验证已开启并完成一次登录验证。
5. 系统信息、版本信息、CPU、内存和启动时间正常显示。
6. 创建一个测试代理端口，端口状态正常。
7. 测试矿机可以连接 RustMinerSystem 端口。
8. 上游矿池或 PoolNode 侧能看到测试矿机数据。
9. 日志中没有持续出现端口占用、协议错误、目标矿池连接失败或认证失败。

## 安装故障入口

安装阶段遇到问题时，请进入常见故障分类查看对应文章：

- [后台无法访问](/zh/document/rustminersystem/admin-unreachable)
- [矿机无法连接端口](/zh/document/rustminersystem/miner-cannot-connect-port)
- [Linux 脚本下载失败](/zh/document/rustminersystem/linux-script-download-failed)
`,"./zh/rustminersystem/guide/04-configuration.md":`---
id: configuration
slug: configuration
title: RustMinerSystem 配置说明
navTitle: 配置
description: 配置 RustMinerSystem 代理端口、费率钱包、安全中心、证书、导入导出和告警。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 4
---

# 配置

RustMinerSystem 的主要配置通过后台完成。本文聚焦第三方矿池代理相关配置；PoolNode 节点配置请阅读 [PoolNode 文档](/zh/document/poolnode)，RMS 本地压缩配置请阅读 [RMS 文档](/zh/document/rms)。

## 代理端口配置

创建代理端口时，至少需要配置监听协议、监听端口、代理币种、主矿池地址和目标矿池协议。

| 配置项 | 说明 |
| --- | --- |
| 监听协议 | 矿机连接 RustMinerSystem 时使用的协议；RMS 协议端口用于对接 [RMS 客户端](/zh/document/rms)。 |
| 监听端口 | Proxy 端口当前支持 \`1\` 到 \`65534\`；不要与系统、后台或其他挖矿端口冲突。 |
| 代理币种 | 决定端口解析、统计、兼容参数和图标展示。 |
| 最大连接数 | \`0\` 表示不限制；生产环境建议按服务器性能和矿机数量设置上限。 |
| 主矿池地址 | 矿机默认转发到的上游矿池地址。 |
| 备用矿池地址 | 主矿池不可用时尝试连接的备用地址，可不填。 |
| 目标矿池协议 | 只支持 TCP 或 TLS/SSL；必须与上游矿池实际协议一致。 |
| 端口备注 | 便于在后台识别用途，例如 \`BTC 主力端口\`。 |

### 监听协议

| 协议 | 说明 |
| --- | --- |
| TCP | 普通明文挖矿端口，兼容性最好。 |
| TLS/SSL | 使用挖矿端口证书加密传输，适合公网暴露。 |
| TTS | TCP/TLS 双协议混合端口，适合矿机协议不统一的场景。 |
| TP | 透明代理，只转发连接，不做币种解析、统计、费率和高级替换。 |
| RMS2 | RMS 压缩 TLS 协议，适合 [RMS](/zh/document/rms) V2 或以上本地客户端。 |
| RMS3 | 分组压缩协议，压缩率高但更消耗 CPU；参数规划见 [RMS 文档](/zh/document/rms)。 |
| RMS3(Zstd) | 基于 Zstd 的 RMS3 变体，通常 CPU 压力更低；参数规划见 [RMS 文档](/zh/document/rms)。 |
| KENC | 兼容 KT 本地工具和 KENC 客户端，需配置一致的 KENC 密钥。 |

## 费率钱包配置

代理端口可以配置一组或多组费率钱包。每组配置包含：

| 字段 | 说明 |
| --- | --- |
| 钱包地址 | 上游矿池支持的钱包地址或子账号。 |
| 矿工名 | 费率钱包使用的 worker 名称，尽量避免特殊字符。 |
| 抽水比例 | \`0\` 到 \`100\`，支持小数；比例越多越需要充分测试。 |
| 抽水矿池 | 费率钱包连接的矿池地址。 |
| 抽水矿池协议 | TCP 或 TLS/SSL，需要与抽水矿池地址一致。 |

建议尽可能少地添加费率钱包。钱包越多，切换和损耗也可能更高；如果多人需要分账，优先考虑在矿池侧完成分账。

端口详情中还支持钱包独立抽水比例和矿机独立抽水比例。优先级为：

\`\`\`text
单独矿机比例 > 钱包独立比例 > 端口默认比例
\`\`\`

## 挖矿模式

| 模式 | 说明 |
| --- | --- |
| 高效模式 | 默认模式，性能最好，适合绝大多数矿机。 |
| 兼容模式 | 仅在部分矿机无法正常费率处理时使用；可能带来更高算力损耗。 |
| 矿池模式 | 使用统一钱包和统一矿工名的模式，配置前请确认业务场景。 |

## 高级参数

高级参数会影响矿机提交内容、份额返回或兼容行为。不了解用途时保持默认。

| 参数 | 说明 |
| --- | --- |
| RMS3 压缩级别 | 仅用于 RMS3 / RMS3(Zstd) 端口；服务端与本地客户端如何配对请查看 [RMS 文档](/zh/document/rms)。 |
| RMS3 超级压缩 | 仅用于 RMS3 / RMS3(Zstd) 端口；开启前请先阅读 [RMS 文档](/zh/document/rms)中的压测和回滚建议。 |
| Foundry / OKMiner 优化 | BTC、BCH、LTC 场景中遇到连接问题时再开启。 |
| 福禄矿机优化 | LTC 场景中遇到特定固件连接问题时再开启。 |
| 算力保护 | 尽量保护客户算力，可能导致实际费率不足。 |
| 强制下发成功份额 | 提交失败时仍向矿机返回成功，需谨慎使用。 |
| 替换指定钱包 | 将指定原始钱包或子账号替换为目标钱包。 |
| 替换指定矿工名 | 将指定原始矿工名替换为目标矿工名。 |
| 替换内核信息 | 统一替换端口提交的矿机内核信息。 |

## 安全设置

生产环境至少完成以下配置：

- 修改默认账号密码。
- 设置安全访问地址，隐藏默认后台入口。
- 开启登录二步验证和敏感操作二步验证。
- 设置合理的登录过期时间。
- 为 TLS/SSL 挖矿端口配置全局证书。
- 使用 IP 黑名单阻止异常来源。
- 使用钱包黑名单或白名单控制接入规则。
- 记录本机 UUID 和版本信息，便于升级和问题定位。

## 导入、导出与快捷配置

后台支持导出当前代理端口 JSON 备份，也支持导入旧版 JSON、Excel 端口模板或 KTMinerProxy 配置文件。导入后端口列表会自动刷新。

建议在以下场景导出备份：

- 大量新增或修改端口前。
- 升级 RustMinerSystem 前。
- 调整费率钱包或替换规则前。
- 迁移到新服务器前。

快捷矿池和快捷钱包可用于新建端口或新建费率钱包时快速选择常用地址，减少手动输入错误。

## 告警与日志

掉线推送可在矿机离线、端口在线数量下降或端口算力下降达到阈值后发送提醒。可按当前后台支持的渠道配置，例如 Server 酱或 SMTP 邮件。

常用日志包括：

- 端口连接日志。
- worker 错误日志。
- 端口 IP 访问记录。
- IP 黑名单日志。
- 钱包黑/白名单拦截日志。
- 运行日志和错误日志。

出现异常时，先定位是矿机到 RustMinerSystem、RustMinerSystem 到上游矿池，还是 RMS 到 RustMinerSystem 的链路问题，再调整对应配置。

## 关联文档

- 自有矿池节点、官网、收益邮箱、节点费率、子账号和 PoolNodeAPP 通信地址，请阅读 [PoolNode 文档](/zh/document/poolnode)。
- RMS2、RMS3、RMS3(Zstd)、超级压缩、连接压缩数量和本地客户端回滚，请阅读 [RMS 文档](/zh/document/rms)。
`,"./zh/rustminersystem/guide/05-operations.md":`---
id: operations
slug: operations
title: RustMinerSystem 运维
navTitle: 运维
description: 了解 RustMinerSystem 代理服务的生产运维、监控检查、上线扩容、升级和回滚流程。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 6
---

# 运维

RustMinerSystem 生产运维的核心目标是：服务稳定、代理端口稳定、矿机在线、上游矿池可达、费率配置正确。建议把所有变更都先在测试端口验证，再逐步扩大范围。PoolNode 节点组运维请阅读 [PoolNode 文档](/zh/document/poolnode)，RMS 本地压缩链路运维请阅读 [RMS 文档](/zh/document/rms)。

## 日常检查

| 检查项 | 关注点 |
| --- | --- |
| 服务状态 | 进程是否运行、启动时间是否异常重置、版本是否符合预期。 |
| 系统资源 | CPU、内存、网络流量、连接数、磁盘空间。 |
| 代理端口 | 端口状态、在线/离线设备、实时算力、24h 算力、延迟和拒绝率。 |
| 上游矿池 | 主矿池和备用矿池是否可连通，协议是否匹配，矿池侧是否有 worker 数据。 |
| 费率钱包 | 钱包地址、矿工名、矿池地址、比例和独立比例是否符合预期。 |
| 安全 | 后台入口、二步验证、IP 黑名单、钱包黑白名单和证书是否仍符合策略。 |

## 上线与扩容流程

1. 创建测试端口。
2. 接入少量矿机，观察 30 到 60 分钟。
3. 检查 RustMinerSystem 后台数据和上游矿池数据是否一致。
4. 验证费率钱包、钱包独立比例和矿机独立比例。
5. 逐批扩大接入规模。
6. 每次扩容后观察 CPU、内存、连接数、延迟和拒绝率。
7. 到达目标规模后导出端口配置备份。

如果端口使用 RMS2、RMS3 或 RMS3(Zstd) 协议，请在扩容前阅读 [RMS 文档](/zh/document/rms)中的容量评估和压缩参数建议。

## 升级流程

1. 阅读发布说明，确认是否涉及端口协议、配置结构或 RMS 协议兼容性。
2. 导出当前代理端口配置。
3. 备份安装目录、二进制文件和关键配置。
4. 记录当前版本、后台端口、官网端口、运行端口和服务启动方式。
5. 先在测试服务器或低风险节点升级。
6. 验证登录、端口状态、矿机连接、上游矿池和 RMS 协议端口接入。
7. 安排维护窗口升级生产节点。
8. 升级后再次导出配置，并记录新版本。

PoolNode 多服务器节点组升级请参考 [PoolNode 文档](/zh/document/poolnode)中的节点组运维建议。

## 回滚方案

升级前必须确认能回滚：

- 保留旧版本二进制或安装包。
- 保留端口 JSON 备份。
- 保留证书、KENC 密钥、安全访问地址和二步验证恢复方式。
- 如果使用 RMS 协议端口，记录 RMS 本地客户端版本和端口配置。

如果升级后出现大面积矿机离线，优先停止继续扩容或继续升级，恢复旧版本并验证端口重新上线。

## 故障排查入口

常见故障已经拆分到独立分类，每个故障都有单独排查文章：

- [后台无法访问](/zh/document/rustminersystem/admin-unreachable)
- [后台无法登录](/zh/document/rustminersystem/admin-login-failed)
- [端口创建失败](/zh/document/rustminersystem/proxy-port-create-failed)
- [矿机无法连接端口](/zh/document/rustminersystem/miner-cannot-connect-port)
- [矿机连不上代理端口](/zh/document/rustminersystem/miner-cannot-connect-proxy)
- [端口有连接但无有效算力](/zh/document/rustminersystem/connected-no-valid-hashrate)
- [费率钱包没有收益](/zh/document/rustminersystem/fee-wallet-no-revenue)
- [Linux 脚本下载失败](/zh/document/rustminersystem/linux-script-download-failed)

## 安全运维

- 不长期使用默认后台入口。
- 不共享后台账号、PoolNode CODE/TOKEN、KENC 密钥和证书私钥。
- 对外暴露的后台入口尽量配合防火墙白名单或反向代理访问控制。
- 定期检查 IP 黑名单、钱包黑白名单和登录日志。
- 调整安全访问地址、HTTPS 证书或 Web 端口前，先确认备用登录路径。

## FAQ

### RustMinerSystem 可以同时支持多少矿机？

取决于服务器 CPU、内存、网络、监听协议、RMS 压缩参数、上游矿池稳定性和端口数量。正式上线前必须分批压测。

### 升级时是否需要停机？

取决于部署方式和版本变更内容。生产环境建议安排维护窗口，并准备可执行的回滚方案。

### 可以只用 RustMinerSystem，不部署 RMS 吗？

可以。矿机可以直接连接 RustMinerSystem 代理端口。RMS 主要用于本地汇聚连接、加密压缩和减少公网出口连接数，详见 [RMS 文档](/zh/document/rms)。

### PoolNode 和第三方矿池代理可以同时使用吗？

可以。后台中 \`矿池代理\` 和 \`矿池节点\` 是两个模块。PoolNode 的节点组、官网、收益和用户端运维请阅读 [PoolNode 文档](/zh/document/poolnode)。
`,"./zh/rustminersystem/guide/05-security.md":`---
id: security
slug: security
title: RustMinerSystem 安全必读
navTitle: 安全必读
description: 上线 RustMinerSystem 前必须完成的后台入口、SSH、防火墙、二步验证、强密码和脚本来源安全检查。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 5
---

# 安全必读

RustMinerSystem 上线后，后台入口、SSH、代理端口和配置文件都直接关系到矿机接入与费率配置安全。服务器购买完成、程序安装完成后，请先完成本章检查，再接入正式矿机。

一个疏忽就可能造成后台被入侵、端口配置被修改、钱包地址被替换或服务器被接管。安全策略应当按“只开放必要端口、只允许可信来源、默认入口不长期暴露”的原则配置。

## 上线前检查清单

- 修改默认后台账号和密码，不要与 SSH、云平台、矿池账号复用。
- 开启后台登录二步验证，并妥善保存恢复方式。
- 设置复杂的安全访问地址，不长期使用默认后台入口。
- 服务器安全组或系统防火墙只放行必要端口。
- SSH 只允许可信 IP 访问；不需要远程维护时关闭公网访问。
- Web 后台端口只允许可信 IP、VPN 或反向代理访问；临时放行后及时关闭。
- 只运行官方来源或自己确认过的脚本、二进制文件和维护命令。
- 备份端口配置、证书、KENC 密钥、安全访问地址和二步验证恢复方式。

## 端口暴露原则

| 端口类型 | 建议 |
| --- | --- |
| SSH 端口 | 默认 \`22\` 是常见扫描目标。生产环境建议只允许固定办公 IP、VPN 或堡垒机访问；能使用密钥登录时不要依赖弱密码。 |
| Web 后台端口 | 不建议长期向公网全量开放。优先使用安全组 IP 白名单、VPN、反向代理访问控制或临时放行策略。 |
| 代理挖矿端口 | 只开放实际给矿机使用的端口，并定期核对在线矿机、连接数、拒绝率和异常来源 IP。 |
| HTTPS / 证书 | HTTPS 证书和私钥不要共享给无关人员。更换证书后验证后台、APP 或用户端入口是否仍可访问。 |

如果为了排查问题临时放开了全部端口，请在确认端口规则后立即改回最小开放策略。不要把“全部端口允许”作为生产环境长期配置。

## SSH 安全

安装完操作系统后，先检查 SSH 是否必须对公网开放。如果只需要偶尔维护，建议在云平台安全组中默认关闭 SSH 公网访问，维护时临时放行可信 IP。

如果必须长期保留 SSH：

1. 使用强密码或密钥登录。
2. 禁止把 SSH 密码与后台密码、云平台密码复用。
3. 只允许可信来源 IP 访问 SSH。
4. 定期检查登录记录和异常失败次数。
5. 运维完成后确认安全组规则仍符合预期。

## Web 后台安全

攻击者也可能通过后台入口尝试登录并修改配置。安装后请第一时间进入管理后台完成以下设置：

1. 修改默认账号和默认密码。
2. 设置复杂的安全访问地址。
3. 开启二步验证，并完成一次退出后的重新登录验证。
4. 检查后台 Web 端口是否只允许可信来源访问。

如果后台端口需要公网访问，建议至少配合安全组 IP 白名单；更稳妥的方式是通过 VPN、堡垒机或反向代理访问控制进入后台。

## 密码与安全访问地址

账号密码、安全访问地址和 SSH 密码都应使用高强度组合。不要只使用简单的字母加数字，也不要使用项目名、域名、手机号、生日、常见单词或容易被猜到的路径。

建议：

- 密码长度至少 16 位。
- 使用密码管理器生成并保存。
- 不同系统使用不同密码。
- 安全访问地址使用随机字符串，不在聊天记录、群公告或截图中公开。
- 有人员离职、截图泄露或怀疑入口被发现时，立即更换密码和安全访问地址。

## 脚本和程序来源

不要在生产服务器运行来源不明的脚本、二进制文件、破解工具或他人提供的“一键优化”命令。未知脚本可能读取配置、替换钱包、修改代理端口、窃取密钥或植入长期后门。

生产服务器只使用官方发布地址、可信仓库、自己构建的程序或已经审计过的维护脚本。执行前先确认命令内容，尤其是会下载远程脚本并直接运行的命令。

## 变更后验证

每次调整安全组、防火墙、后台端口、安全访问地址、HTTPS 证书或二步验证后，都应完成一次验证：

- 新后台地址可以访问，旧默认入口不可继续访问。
- 后台账号密码和二步验证可以正常登录。
- 非可信 IP 无法访问 SSH 和 Web 后台端口。
- 矿机仍然可以连接代理挖矿端口。
- 上游矿池或 PoolNode 侧仍能看到连接和算力。
- 安全配置、端口配置和证书已经备份。

如果调整后后台无法访问，请先检查安全组、防火墙、Web 端口和安全访问地址，再参考 [后台无法访问](/zh/document/rustminersystem/admin-unreachable)。
`,"./zh/rustminersystem/guide/06-admin-unreachable.md":`---
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
`,"./zh/rustminersystem/guide/06-dashboard.md":`---
id: dashboard
slug: dashboard
title: RustMinerSystem 仪表盘与币种列表
navTitle: 仪表盘
description: 了解 RustMinerSystem 矿池代理仪表盘、币种列表、端口总览、系统资源和版本信息的使用方法。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 6
---

# 仪表盘与币种列表

![RustMinerSystem 仪表盘总览](/image/docs/rustminersystem/features/zh/dashboard.png)

*仪表盘总览：左侧切换币种，中部查看算力与端口，右侧观察流量、资源和程序信息。*

仪表盘是进入 \`矿池代理\` 后的默认工作台，用来快速判断当前代理服务是否健康。它会把币种、端口、矿机、算力、延迟、系统资源和版本信息放在同一个页面中，适合日常巡检、扩容前确认和故障初步定位。

## 页面组成

| 区域 | 作用 |
| --- | --- |
| 币种列表 | 按币种展示算力和在线设备数，可筛选隐藏不活跃币种或未代理币种。 |
| 算力统计 | 查看当前币种的实时算力、平均算力和抽取算力趋势。 |
| 设备统计 | 查看在线设备、离线设备和在线率变化。 |
| 延迟统计 | 查看当前币种和代理端口的平均延迟。 |
| 端口列表 | 查看当前币种下所有代理端口，并执行查看、编辑、热更新、复制、启动、停止和删除操作。 |
| 系统资源 | 查看 CPU、内存、流量、设备总量、程序版本、启动时间和操作系统信息。 |

## 切换币种

1. 进入 \`矿池代理\`。
2. 在左侧 \`币种列表\` 点击目标币种。
3. 右侧算力图表、设备趋势和端口列表会切换到该币种。
4. 如果币种太多，可以使用 \`过滤\`：
   - \`隐藏不活跃币种\`：隐藏近期没有活跃数据的币种。
   - \`隐藏未代理币种\`：只显示已经创建代理端口的币种。
5. 宽屏下可收起币种列表，给端口列表和图表留出更多空间。

## 查看端口概况

端口列表会展示每个端口的协议、端口号、备注、在线/离线数量、当前算力、平均延迟和运行状态。

常见状态含义：

| 状态 | 说明 | 建议处理 |
| --- | --- | --- |
| 运行中 | 端口正在监听并处理连接。 | 正常巡检即可。 |
| 启动中 | 端口已提交启动，正在初始化。 | 等待几秒后刷新。 |
| 已停止 | 端口未监听。 | 如需接入矿机，使用操作菜单启动。 |
| 异常 | 后端返回端口错误信息。 | 先查看端口配置、日志和端口占用情况。 |

## 排序与刷新

端口列表表头支持排序。常用排序方式：

- 按 \`当前算力\` 降序，快速查看主力端口。
- 按 \`在线 / 离线\` 排序，找出离线设备较多的端口。
- 按 \`平均延迟\` 排序，定位网络质量异常的端口。
- 按 \`状态\` 排序，集中处理停止或异常端口。

点击端口列表右上角的刷新按钮，可以重新读取端口列表和当前币种统计。

## 日常巡检流程

1. 打开仪表盘后先看系统资源，确认 CPU、内存、流量和启动时间是否异常。
2. 查看币种列表，确认主要币种算力和在线设备是否符合预期。
3. 切换到重点币种，检查端口列表中的状态、在线/离线、延迟和算力。
4. 如果某个端口在线设备减少，进入端口详情查看设备列表、连接监控和连接日志。
5. 如果多个端口同时异常，打开 \`日志管理\` 查看运行日志、错误日志和连接故障。
6. 每次扩容或修改配置后，再回到仪表盘观察 30 到 60 分钟。

## 读数注意事项

- \`TP\` 纯转发端口不解析矿机数据，因此不会提供完整算力、钱包和费率统计。
- 币种算力来自当前 RustMinerSystem 统计口径，上游矿池可能因为窗口期、难度、拒绝率和矿池统计周期而存在差异。
- 延迟升高不一定代表 RustMinerSystem 故障，也可能是矿机到服务器、服务器到上游矿池或上游矿池自身波动。
- 程序启动时间如果异常重置，说明服务近期可能重启过，应结合运行日志和错误日志确认原因。
`,"./zh/rustminersystem/guide/06-migration.md":`---
id: migration
slug: migration
title: RustMinerSystem 如何迁移
navTitle: 如何迁移
description: 了解迁移 RustMinerSystem 时需要复制的文件范围，以及为什么要排除 0 开头的运行期文件。
category: deployment
categoryTitle: 部署运维
categoryOrder: 2
order: 7
---

# 如何迁移

迁移 RustMinerSystem 时，可以直接迁移程序目录中的绝大部分文件。这样可以把本地配置、端口配置、证书、安全访问配置和其他本地运行参数一起带到新环境。

Linux 默认程序目录为：

\`\`\`bash
/root/rustminersystem
\`\`\`

## 迁移原则

复制整个 \`/root/rustminersystem\` 目录时，需要忽略程序目录中名称以 \`0\` 开头的文件，例如：

- \`0.d1\`
- \`0.d1-shm\`
- \`0.d1-wal\`
- \`0.d2\`

这些 \`0\` 开头的文件不要迁移到新的目的地。除这些文件外，其余文件和目录全部迁移过去即可，本地配置会随目录一起迁移到新的环境。

## 推荐流程

1. 在旧服务器上停止 RustMinerSystem，避免迁移过程中配置或运行数据继续变化。
2. 复制 \`/root/rustminersystem\` 目录，但排除目录根部名称以 \`0\` 开头的文件。
3. 在新服务器确认 \`/root/rustminersystem\` 目录已完整写入。
4. 检查新服务器的防火墙、安全组、后台端口和代理端口是否已经放行。
5. 启动 RustMinerSystem，并登录后台确认端口、钱包、证书和安全配置是否正常。

## rsync 示例

如果新服务器可以通过 SSH 访问，可以在旧服务器上执行：

\`\`\`bash
rsync -a --exclude='/0*' /root/rustminersystem/ root@NEW_SERVER_IP:/root/rustminersystem/
\`\`\`

将 \`NEW_SERVER_IP\` 替换为新服务器 IP。这里的 \`--exclude='/0*'\` 表示排除迁移源目录根部以 \`0\` 开头的文件，例如 \`0.d1\`、\`0.d1-shm\`、\`0.d1-wal\` 和 \`0.d2\`。

## 打包迁移示例

也可以先在旧服务器打包，再把压缩包上传到新服务器：

\`\`\`bash
cd /root
tar --exclude='rustminersystem/0*' -czf rustminersystem-migrate.tar.gz rustminersystem
\`\`\`

上传到新服务器后解压：

\`\`\`bash
cd /root
tar -xzf rustminersystem-migrate.tar.gz
\`\`\`

## 迁移后检查

- 后台能否正常打开并登录。
- 代理端口是否仍然存在，监听端口是否正常。
- 矿池地址、钱包地址、费率配置和独立比例是否符合预期。
- HTTPS 证书、安全访问地址、二步验证和黑白名单配置是否正常。
- 矿机切换到新服务器后，后台和上游矿池是否都能看到连接与算力。

如果迁移后新服务器无法访问后台，请先检查服务器防火墙、安全组和后台端口；如果矿机无法连接代理端口，请检查代理端口监听状态、新服务器公网 IP、端口放行和矿机侧配置。
`,"./zh/rustminersystem/guide/07-admin-login-failed.md":`---
id: admin-login-failed
slug: admin-login-failed
title: 后台无法登录
navTitle: 后台无法登录
description: RustMinerSystem 后台页面可以打开但账号、密码或二步验证无法通过时的排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 2
---

# 后台无法登录

后台可以打开但无法进入系统时，重点检查账号密码、安全访问地址、二步验证时间和登录限制。不要在生产环境反复尝试默认密码。

## 现象

- 登录页面可以打开，但账号密码校验失败。
- 二步验证码一直提示错误。
- 访问后台后被重定向或提示无权限。

## 排查步骤

1. 确认访问的是当前安全访问地址，而不是旧入口或缓存地址。
2. 确认账号密码是否已经在首次登录后修改。
3. 如果启用了二步验证，检查服务器时间和手机验证器时间是否一致。
4. 检查登录 IP 是否被安全策略、IP 黑名单或反向代理规则拦截。
5. 查看运行日志，确认登录请求是否到达后台服务。
6. 如果近期迁移过服务器，确认配置、数据库或账号文件是否随服务一起迁移。

## 处理建议

- 首先修正服务器时间，再重新尝试二步验证码。
- 使用已记录的管理员账号登录，不要依赖旧版默认账号。
- 如果怀疑访问了错误入口，先回到服务器侧确认当前后台端口和安全路径。
- 恢复登录后，立即检查账号、二步验证恢复方式和登录日志。

## 相关页面

- [安装指南](/zh/document/rustminersystem/installation#默认后台账号)
- [配置说明](/zh/document/rustminersystem/configuration#安全设置)
`,"./zh/rustminersystem/guide/07-proxy-port.md":`---
id: proxyPort
slug: proxy-port
title: RustMinerSystem 代理端口创建与编辑
navTitle: 创建代理端口
description: 学习如何在 RustMinerSystem 中创建、编辑和复制第三方矿池代理端口，并正确配置协议、矿池、费率钱包和高级参数。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 7
---

# 代理端口创建与编辑

![RustMinerSystem 创建代理端口表单](/image/docs/rustminersystem/features/zh/proxy-port-form.png)

*创建端口表单：按基础、抽水、高级三个步骤完成监听协议、矿池地址和抽水钱包配置。*

代理端口是 RustMinerSystem 的核心功能。矿机连接 RustMinerSystem 的监听端口后，系统会按端口配置连接第三方矿池、记录统计数据，并根据配置处理费率钱包、钱包替换、矿工名替换和兼容参数。

## 创建入口

1. 进入 \`矿池代理\`。
2. 在左侧币种列表点击 \`创建新代理\`。
3. 进入端口表单后依次完成 \`基础\`、\`抽水\`、\`高级\` 三个部分。
4. 点击 \`创建端口\` 保存。

如果当前已经选择了某个币种，新建端口会优先使用该币种的默认配置。

## 基础配置

| 配置项 | 说明 |
| --- | --- |
| 监听协议 | 矿机连接 RustMinerSystem 使用的协议。 |
| 监听端口 | 端口范围为 \`1\` 到 \`65534\`，不要与后台端口或其他服务冲突。 |
| 代理币种 | 决定解析、统计、图标和部分兼容参数。 |
| 最大连接数 | \`0\` 表示不限制，生产环境建议按服务器能力设置上限。 |
| 端口备注 | 用于后台识别，例如 \`BTC 主力端口\`。 |
| 主矿池地址 | 矿机默认转发到的上游矿池。 |
| 备用矿池地址 | 主矿池不可用时尝试连接，可不填。 |
| 矿池协议 | 必须与上游矿池实际地址一致，TCP 地址选 TCP，SSL 地址选 TLS/SSL。 |

表单中可以对主矿池和备用矿池执行 \`连接测试\`。如果测试失败，先检查域名、端口、协议、防火墙和服务器出站网络。

## 监听协议选择

| 协议 | 使用场景 |
| --- | --- |
| TCP | 兼容性最好，矿机直接连接，适合内网或可信网络。 |
| TLS/SSL | 使用全局挖矿端口证书加密连接，适合公网环境。 |
| TTS | 同一个监听端口兼容 TCP 与 TLS，适合矿机协议不统一的场景。 |
| TP | 透明转发，不解析数据，不提供完整统计、费率和替换功能。 |
| RMS2 | 给 RMS 本地客户端接入的压缩 TLS 协议。 |
| RMS3 | RMS 分组压缩协议，压缩率高，但更消耗 CPU。 |
| RMS3(Zstd) | 基于 Zstd 的 RMS3 变体，通常 CPU 压力更低。 |
| KENC | 兼容 KT 本地工具或 KENC 客户端，密钥需与设置中心一致。 |

选择 \`TP\` 时，目标矿池协议会自动切换为 TLS/SSL。TP 只适合做透明跳板，币种、抽水、钱包统计和高级解析类配置都不会生效。

## 抽水配置

进入 \`抽水\` 页后，先选择连接模式，再配置抽水钱包。

| 模式 | 说明 |
| --- | --- |
| 高效模式 | 默认模式，性能最好，适合绝大多数场景。 |
| 兼容模式 | 仅在部分矿机无法正常抽水时使用；每次抽水可能断开矿机，损耗更高。 |

每个抽水钱包需要填写：

- \`钱包地址\`：上游矿池支持的钱包地址或子账号。
- \`矿工名\`：抽水钱包使用的 worker 名称。
- \`抽水比例\`：范围为 \`0\` 到 \`100\`，支持小数。
- \`抽水矿池\`：抽水钱包连接的矿池地址。
- \`抽水矿池协议\`：TCP 或 TLS/SSL。

建议尽量少添加抽水钱包。钱包越多，切换逻辑越复杂，损耗也可能变高。如果多人分账，优先考虑在矿池侧分账。

## 高级配置

高级配置会影响矿机提交内容、协议兼容和份额返回。不了解用途时保持默认。

| 配置 | 使用建议 |
| --- | --- |
| RMS3 压缩级别 | 只在 RMS3 / RMS3(Zstd) 端口出现，级别越高通常越省流量，但 CPU 压力越大。 |
| RMS3 超级压缩 | 开启后公网数据体积下降更明显，本地 RMS 客户端也必须保持一致。 |
| Foundry / OKMiner 优化 | BTC、BCH、LTC 端口遇到对应矿机连接问题时再开启。 |
| 福禄矿机优化 | LTC 端口遇到特定固件问题时再开启。 |
| 算力保护 | 保护客户算力，可能导致实际抽取不足。 |
| 强制下发成功份额 | 提交失败时仍向矿机返回成功，需谨慎评估。 |
| 替换指定钱包 | 将一行一个的原始钱包替换为目标钱包。 |
| 替换指定矿工名 | 将一行一个的原始矿工名替换为目标矿工名。 |
| 替换内核信息 | 统一替换端口提交的矿机内核信息。 |

## 编辑和复制端口

端口列表和端口详情页都可以打开操作菜单：

- \`编辑端口\`：加载当前端口配置并保存修改。保存后运行中的端口会自动重启。
- \`复制端口\`：以当前端口作为模板创建副本，适合批量创建相似端口。
- \`热更新抽水配置\`：只修改抽水钱包、矿池、矿工名和比例，不断开矿机。

如果只调整抽水钱包，优先使用热更新功能；如果修改监听协议、端口、币种、主矿池或高级兼容参数，应使用编辑端口并安排观察窗口。

## 创建后的验证

1. 回到仪表盘，确认端口状态为 \`运行中\`。
2. 复制矿机连接地址，配置到 1 到 5 台测试矿机。
3. 在端口详情查看设备是否上线、算力是否出现、连接日志是否正常。
4. 在上游矿池确认 worker 和钱包数据。
5. 验证抽水钱包、比例和矿池数据。
6. 一切正常后再逐批扩大矿机规模。
`,"./zh/rustminersystem/guide/08-port-list.md":`---
id: portList
slug: port-list
title: RustMinerSystem 端口列表与批量操作
navTitle: 端口列表
description: 使用 RustMinerSystem 端口列表进行排序、刷新、查看、启动、停止、复制、删除和批量管理代理端口。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 8
---

# 端口列表与批量操作

![RustMinerSystem 端口列表操作菜单](/image/docs/rustminersystem/features/zh/port-list.png)

*端口列表：在同一行查看协议、端口、在线数量、算力、延迟和操作菜单。*

端口列表用于集中管理当前币种下的代理端口。你可以从这里进入端口详情，也可以直接对端口执行启动、停止、复制、编辑、热更新和删除。

## 单个端口操作

在端口行右侧打开 \`操作菜单\`，可执行：

| 操作 | 说明 |
| --- | --- |
| 查看端口内矿工 | 进入端口详情，查看设备、钱包、连接和统计。 |
| 编辑端口 | 修改端口完整配置。运行中的端口保存后会重启。 |
| 热更新抽水配置 | 只更新抽水钱包、矿池、矿工名和比例，矿机不断开。 |
| 复制端口 | 用当前端口配置创建新端口。 |
| 开启端口 / 停止端口 | 启动或停止监听服务。 |
| 删除端口 | 停止并移除端口和相关钱包配置。 |

删除端口不可逆，操作前应确认已导出配置或不再需要该端口。

## 批量操作入口

1. 在币种列表选择目标币种。
2. 在端口列表右上角点击 \`批量操作\` 图标。
3. 在弹窗内搜索端口、备注或状态。
4. 勾选需要处理的端口，或点击 \`全选当前筛选\`。
5. 选择 \`启动选中\`、\`停止选中\` 或 \`删除选中\`。
6. 等待执行完成，查看成功和失败数量。

批量操作只处理当前币种下的端口。删除操作会再次确认。

## 批量操作建议

- 批量停止前，先确认这些端口没有正在使用的生产矿机。
- 批量启动后，观察端口状态是否从 \`启动中\` 变为 \`运行中\`。
- 批量删除前，先导出当前端口配置。
- 如果失败列表中出现端口占用、权限不足或参数错误，需要回到单个端口检查配置。
- 大规模调整时，不建议一次处理全部端口，优先按币种、客户、机房或用途分批执行。

## 常见场景

### 批量启动维护后的端口

1. 选择目标币种。
2. 打开批量操作。
3. 搜索状态 \`已停止\` 或按状态排序后勾选目标端口。
4. 点击 \`启动选中\`。
5. 回到仪表盘观察算力和在线设备恢复情况。

### 批量停止废弃端口

1. 先确认矿机已经迁移到新端口。
2. 导出端口配置备份。
3. 打开批量操作并选择目标端口。
4. 点击 \`停止选中\`。
5. 观察一段时间，确认没有矿机继续连接。
6. 再决定是否删除。

### 处理异常端口

1. 在端口列表按 \`状态\` 排序。
2. 先进入异常端口详情查看配置、连接监控和日志。
3. 如果是上游矿池不可达，修改矿池地址或协议。
4. 如果是端口占用，换监听端口后保存。
5. 如果多个端口同时异常，优先查看系统日志和运行日志。
`,"./zh/rustminersystem/guide/08-proxy-port-create-failed.md":`---
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

1. 确认 Proxy 端口在 \`1\` 到 \`65534\` 范围内。
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
`,"./zh/rustminersystem/guide/09-miner-cannot-connect-port.md":`---
id: miner-cannot-connect-port
slug: miner-cannot-connect-port
title: 矿机无法连接端口
navTitle: 矿机无法连接端口
description: 安装或首次配置后矿机无法连接 RustMinerSystem 端口时的基础网络、端口状态和矿机配置排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 4
---

# 矿机无法连接端口

这是首次安装和测试阶段最常见的问题。先确认矿机填写的是挖矿端口，不是后台管理地址，再检查端口是否已创建并处于运行状态。

## 现象

- 矿机后台显示连接失败或反复重连。
- RustMinerSystem 后台看不到矿机连接。
- 上游矿池没有出现测试 worker。

## 排查步骤

1. 确认 RustMinerSystem 已创建监听端口，并且端口状态正常。
2. 确认矿机填写的是 RustMinerSystem 服务器 IP 和挖矿端口，不是后台 Web 端口。
3. 检查服务器安全组、防火墙和机房网络策略是否放行该挖矿端口。
4. 确认矿机所在网络可以访问 RustMinerSystem 服务器公网或内网地址。
5. 如果端口使用 TLS/SSL、RMS2、RMS3、RMS3(Zstd) 或 KENC，确认矿机或 RMS 客户端协议与服务端端口一致。
6. 临时创建一个普通 Stratum TCP 测试端口，用少量矿机验证基础网络。

## 处理建议

- 先用最简单的 TCP 端口验证网络，再逐步启用 TLS、KENC 或 RMS 协议。
- 如果矿机和 RustMinerSystem 在同一内网，优先使用内网地址减少链路变量。
- 如果只有部分矿机失败，对比成功矿机的矿池地址、端口、用户名和密码配置。
- 连接恢复后再检查上游矿池是否出现有效 worker。

## 相关页面

- [安装指南](/zh/document/rustminersystem/installation#首次启动验证)
- [配置说明](/zh/document/rustminersystem/configuration#监听协议)
`,"./zh/rustminersystem/guide/09-port-detail.md":`---
id: portDetail
slug: port-detail
title: RustMinerSystem 端口详情与矿机管理
navTitle: 端口详情
description: 使用 RustMinerSystem 端口详情查看代理端口数据总览、设备列表、钱包列表、连接监控、连接日志和端口配置。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 9
---

# 端口详情与矿机管理

![RustMinerSystem 端口详情页](/image/docs/rustminersystem/features/zh/port-detail.png)

*端口详情页：集中管理设备列表、钱包列表、连接监控、端口数据总览和连接日志。*

端口详情是排查单个代理端口问题的主要页面。进入方式是在端口列表点击端口行，或在操作菜单选择 \`查看端口内矿工\`。

## 顶部操作区

顶部会展示币种、协议、端口号、备注、运行状态和矿机连接地址。常用操作：

- \`返回\`：回到仪表盘，并自动选中该端口币种。
- \`刷新\`：重新读取端口、图表、设备、钱包和连接数据。
- \`编辑\`：打开完整端口配置。
- \`热更新\`：打开抽水钱包热更新弹窗。
- \`复制\`：复制端口配置创建新端口。
- \`启动 / 停止\`：切换端口运行状态。
- \`删除\`：删除端口。
- \`复制连接地址\`：复制 \`服务器地址:监听端口\`，用于矿机配置。

## 数据总览

右侧 \`数据总览\` 展示：

- 实时算力、抽取算力和平均算力趋势。
- 有效份额、无效份额和抽水份额趋势。
- 延迟趋势。
- 在线设备、离线设备、平均延迟和连接数。
- 币种专属提醒，例如 TP/NGINX 纯转发、LTC、ALPH、RXD 等注意事项。

图表支持显示或隐藏 X/Y 轴，适合在大屏巡检和细节排查之间切换。

## 设备列表

\`设备列表\` 用于查看端口内矿工或连接。

可用筛选和排序：

- 按 \`全部 / 在线 / 离线\` 筛选。
- 按钱包筛选，可选择一个或多个钱包。
- 按算力、断开次数、矿工名、延迟和在线时长排序。
- 切换升序或降序。
- 分页大小支持 50、100、200、300。

设备行展示状态、矿工名、钱包、实时算力、在线时长、并发、有效率、抽水比例、断开次数和延迟。点击设备行可打开矿工详情。

TP/NGINX 纯转发端口中的设备列表是连接数据，不代表真实钱包和矿工名。矿机后台如果配置了多个挖矿地址并都指向该端口，可能一台矿机出现多条连接。

## 矿工详情

点击设备后可查看：

- 实时算力和抽水算力。
- 在线状态、钱包、算法、有效率、延迟等摘要。
- 算力趋势和份额趋势。
- 描述信息。
- 连接日志。
- worker 错误日志。

如果某台矿机异常，建议先看它的连接日志，再对比端口级连接日志和上游矿池侧 worker 状态。

## 钱包列表

\`钱包列表\` 按钱包汇总设备数量和算力。可执行：

- \`收藏钱包\`：收藏后可在收藏视图快速查看重点钱包。
- \`查看设备\`：自动切换到设备列表，并按该钱包筛选。
- \`设置抽水\`：为某个钱包设置独立抽水比例。

钱包独立比例只影响该钱包下的设备，不影响其他钱包。

## 连接监控

\`连接监控\` 展示当前端口存活的 TCP 连接，包括 IP、进入时间和 GID。它用于排查可疑连接、连接过多或矿机反复重连。

注意：连接数不等同于矿机数量。部分矿机或固件会同时建立多条连接。

## 连接日志与端口配置

右侧 \`连接日志\` 用于查看端口级连接事件。\`端口配置\` 会列出监听协议、在线/离线、连接数、监听端口、币种、算法、最大连接数、矿机连接地址、代理矿池、备用矿池、抽水比例和抽水钱包。

排查端口问题时，建议顺序为：

1. 看 \`端口配置\` 是否与预期一致。
2. 看 \`连接监控\` 是否有矿机 IP 进入。
3. 看 \`设备列表\` 是否产生有效 worker 和算力。
4. 看 \`连接日志\` 是否有认证、协议或上游矿池错误。
5. 去上游矿池确认 worker 是否出现。
`,"./zh/rustminersystem/guide/10-hot-wallet.md":`---
id: hotWallet
slug: hot-wallet
title: RustMinerSystem 抽水配置热更新
navTitle: 抽水热更新
description: 使用 RustMinerSystem 热更新抽水钱包、抽水矿池、矿工名和抽水比例，避免修改配置时断开矿机。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 10
---

# 抽水配置热更新

![RustMinerSystem 抽水热更新窗口](/image/docs/rustminersystem/features/zh/hot-wallet.png)

*抽水热更新：只更新抽水钱包、比例、矿工名和抽水矿池，矿机连接不会被主动断开。*

热更新用于在端口继续运行的情况下调整抽水配置。它适合只修改抽水钱包、抽水矿池、矿工名和抽水比例的场景，矿机不会因为保存配置而断开。

如果要修改监听协议、监听端口、代理币种、主矿池、备用矿池或高级兼容参数，请使用 \`编辑端口\`。

## 打开入口

可以从两个地方打开：

1. 仪表盘端口列表：端口操作菜单 -> \`热更新抽水配置（矿机不掉）\`。
2. 端口详情页：顶部操作区 -> \`热更新\`。

打开后会显示当前端口币种、端口备注和监听端口。

## 可热更新的内容

| 字段 | 说明 |
| --- | --- |
| 钱包地址 | 抽水使用的钱包地址或矿池子账号。 |
| 矿工名 | 抽水钱包提交到上游矿池时使用的 worker 名称。 |
| 抽水比例 | 当前抽水钱包的比例，范围 \`0\` 到 \`100\`。 |
| 抽水矿池 | 抽水钱包连接的矿池地址。 |
| 抽水矿池协议 | TCP 或 TLS/SSL。 |

弹窗中可以添加或删除抽水钱包，也可以使用快捷钱包和快捷矿池选择器减少输入错误。

## 使用步骤

1. 打开热更新弹窗。
2. 选择左侧钱包序号，编辑对应钱包。
3. 修改钱包地址、矿工名、抽水矿池、协议和比例。
4. 如需新增钱包，点击 \`添加钱包\`。
5. 如需删除钱包，点击钱包行右侧删除按钮。
6. 点击 \`更新配置\`。
7. 回到端口详情，观察抽水算力、钱包列表和上游矿池数据。

## 长时间未生效怎么办

如果热更新配置长时间未生效，可以在热更新弹窗内：

1. 删除对应抽水钱包。
2. 在同一个弹窗中重新创建该钱包。
3. 保存更新。

这个操作仍然不会断开当前矿机。

## 热更新与独立比例

端口详情还支持钱包独立比例和矿机独立比例。优先级为：

\`\`\`text
单独矿机比例 > 钱包独立比例 > 端口默认比例
\`\`\`

热更新修改的是端口默认抽水钱包配置。如果某个钱包或矿机设置了独立比例，最终生效比例可能不是端口默认比例。排查抽水比例异常时，请同时检查：

- 热更新弹窗中的端口默认钱包比例。
- 钱包列表中的钱包独立比例。
- 设备列表操作菜单中的矿机独立比例。

## 操作建议

- 生产端口修改抽水比例时，先小幅调整并观察上游矿池数据。
- 不要同时添加过多抽水钱包。
- 修改抽水矿池协议时，确认地址确实支持 TCP 或 TLS/SSL。
- 热更新前后建议记录变更时间，方便对照图表和矿池收益。
`,"./zh/rustminersystem/guide/10-miner-cannot-connect-proxy.md":`---
id: miner-cannot-connect-proxy
slug: miner-cannot-connect-proxy
title: 矿机连不上代理端口
navTitle: 矿机连不上代理端口
description: 生产端口中矿机无法连接 RustMinerSystem 代理端口时的协议、证书、KENC 和 RMS 参数排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 5
---

# 矿机连不上代理端口

生产环境中矿机连不上代理端口，通常不是单一原因。需要同时检查矿机配置、端口监听、网络策略、监听协议和本地 RMS 客户端。

## 现象

- 矿机在线数突然下降。
- 某个端口无法接入，但其他端口正常。
- RMS 客户端能启动，但矿机无法通过 RMS 进入 RustMinerSystem。

## 排查步骤

1. 检查矿机填写的是挖矿端口，不是后台管理端口。
2. 检查服务器安全组、防火墙、机房 ACL 和内网路由。
3. 确认端口监听协议与矿机或 RMS 客户端协议一致。
4. TLS/SSL 端口检查证书是否过期、证书链是否完整、域名是否匹配。
5. KENC 端口检查矿机侧或客户端侧自定义密钥是否与服务端一致。
6. RMS3/RMS3(Zstd) 端口检查本地客户端协议、币种、密码、连接压缩数量和超级压缩配置。
7. 查看端口连接日志，区分是连接未到达、认证失败、协议不匹配还是上游矿池连接失败。

## 处理建议

- 新协议上线时先创建新测试端口，不直接覆盖生产端口。
- RMS 客户端相关问题请优先对照 [RMS 文档](/zh/document/rms)中的服务端与客户端配置。
- 如果大面积离线，先回滚到最近稳定的端口协议和客户端版本。
- 保留原端口配置导出文件，便于快速恢复。

## 相关页面

- [配置说明](/zh/document/rustminersystem/configuration#监听协议)
- [RMS 文档](/zh/document/rms)
`,"./zh/rustminersystem/guide/11-connected-no-valid-hashrate.md":`---
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

- RustMinerSystem 能看到连接数，但实时算力或 24h 算力为 \`0\`。
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
`,"./zh/rustminersystem/guide/11-settings-center.md":`---
id: settingsCenter
slug: settings-center
title: RustMinerSystem 设置中心
navTitle: 设置中心
description: 配置 RustMinerSystem 登录账号、安全访问地址、二步验证、HTTPS、挖矿证书、黑白名单、快捷配置、掉线推送和导入导出。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 11
---

# 设置中心

![RustMinerSystem 设置中心](/image/docs/rustminersystem/features/zh/settings-center.png)

*设置中心：左侧按安全、常规和其他分类组织，右侧显示当前设置项的表单和风险提示。*

设置中心用于维护后台安全、端口证书、黑白名单、快捷配置、掉线推送、导入导出和本机信息。进入 \`矿池代理\` 后点击顶部菜单 \`设置\` 即可打开。

如果系统检测到默认账号密码、默认访问路径或未开启二步验证，会在 \`建议的设置\` 中优先显示。

## 安全设置

| 功能 | 用途 | 建议 |
| --- | --- | --- |
| 登录账号 / 密码 | 修改后台登录账号和密码。 | 首次登录后立即修改。 |
| 安全访问地址 | 设置非默认后台路径。 | 保存后程序会重启，请妥善保存新地址。 |
| 登录二步验证 | 启用 TOTP 验证器，并可指定敏感操作需要验证码。 | 生产环境建议开启。 |
| HTTPS 后台访问 | 切换后台 HTTP/HTTPS 访问协议。 | 如果外部已用 Cloudflare/Nginx 提供 HTTPS，通常不必重复开启。 |
| 登录过期时间 | 设置登录状态有效期。 | 保存后当前登录会失效，需要重新登录。 |
| web 访问端口 | 修改后台 Web 服务端口。 | 确认防火墙和安全组已放行新端口。 |

二步验证支持保护敏感接口，例如新建端口、新建钱包、编辑端口、编辑钱包和单独编辑矿机比例。开启后请先下载或保存二维码，关闭窗口后无法再次查看原二维码。

## 证书与加密

| 功能 | 用途 |
| --- | --- |
| 全局挖矿端口证书 | 为 TLS/SSL 挖矿端口配置 crt/pem 证书和 key 私钥。 |
| KENC 自定义密钥 | 设置 KENC 加密端口使用的自定义密钥。 |

全局挖矿证书影响 TLS/SSL 挖矿端口。恢复内置证书后，已有端口会刷新证书状态。

KENC 密钥需要与客户端保持一致。恢复默认密钥后，依赖自定义密钥的客户端也要同步调整。

## 黑名单与白名单

| 功能 | 说明 |
| --- | --- |
| IP 黑名单 | 阻止指定 IP 访问后台和代理相关服务。 |
| 钱包黑名单 | 阻止指定钱包或子账号接入端口。 |
| 钱包白名单 | 仅允许列表中的钱包或子账号接入端口。 |

添加 IP 黑名单前要确认不会把当前管理设备的 IP 加入列表。钱包白名单更严格，开启前应先确认所有合法钱包都已加入。

## 掉线推送

掉线推送可配置：

- 单台矿机掉线后推送。
- 端口算力下降达到阈值后推送。
- Server 酱 SendKey。
- SMTP 邮件地址、授权码、发送域名、服务端口和 SSL/TLS。

如果没有配置推送渠道，触发条件可以保存，但不会实际送达提醒。

## 快捷矿池与快捷钱包

\`快捷矿池\` 用来保存常用矿池地址、协议和备注。创建端口或热更新抽水钱包时，可以直接从选择器填入。

\`快捷钱包地址\` 用来保存常用钱包或子账号。新建抽水钱包时可以快速选择，减少手动复制错误。

建议按用途命名，例如：

- \`BTC 主钱包\`
- \`LTC 备用抽水\`
- \`客户A 子账号\`
- \`鱼池 BTC\`
- \`ViaBTC LTC\`

## 导入 / 导出配置

设置中心支持：

- 导出当前代理端口 JSON 备份。
- 导入 RustMinerSystem JSON。
- 导入 Excel 端口配置。
- 导入 KTMinerProxy JSON。

导入后端口列表会自动刷新，并显示导入结果。建议在升级、迁移、大量修改端口和调整抽水配置前导出备份。

## 其他设置

| 功能 | 用途 |
| --- | --- |
| 查看本机 UUID | 用于授权、排查或与管理员核对实例。 |
| 重启软件 | 查看当前系统下如何重启 RustMinerSystem。 |

当前版本没有独立的远程重启接口。Linux 通常通过安装脚本菜单重启，Windows 通常关闭程序窗口后重新打开。
`,"./zh/rustminersystem/guide/12-fee-wallet-no-revenue.md":`---
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

1. 确认端口默认费率比例不是 \`0\`。
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
`,"./zh/rustminersystem/guide/12-log-manager.md":`---
id: logManager
slug: log-manager
title: RustMinerSystem 日志管理与故障排查
navTitle: 日志管理
description: 使用 RustMinerSystem 日志管理查看运行日志、错误日志、操作日志、连接故障、钱包黑白名单日志、IP 访问和版本日志。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 12
---

# 日志管理与故障排查

![RustMinerSystem 日志管理窗口](/image/docs/rustminersystem/features/zh/log-manager.png)

*日志管理：按系统日志、故障排查、安全日志和版本日志分类查看后台记录。*

日志管理用于查看系统运行、错误、操作、安全拦截、连接故障和版本更新信息。进入 \`矿池代理\` 后点击顶部菜单 \`日志管理\` 打开。

如果存在连接故障记录，菜单上会显示红色角标。

## 日志分类

| 分类 | 日志 | 用途 |
| --- | --- | --- |
| 系统日志 | 运行日志 | 查看程序运行期间输出的最新运行日志。 |
| 系统日志 | 错误日志 | 查看程序运行期间产生的错误信息。 |
| 系统日志 | 操作日志 | 查看后台最近的操作记录和执行结果。 |
| 故障排查 | 连接故障 | 查看连接异常排查数据。 |
| 安全日志 | 钱包黑 / 白名单日志 | 查看被钱包黑名单或白名单规则拦截的记录。 |
| 安全日志 | IP 拦截记录 | 查看被 IP 黑名单规则拦截的记录。 |
| 安全日志 | 所有端口 IP 访问记录 | 查看访问过所有代理端口的 IP 和最近访问时间。 |
| 版本日志 | 更新日志 | 查看当前版本、最新版本和历史更新内容。 |

## 排查矿机无法连接

1. 进入端口详情，确认 \`连接监控\` 是否有矿机 IP。
2. 如果没有连接，检查矿机挖矿地址、防火墙、安全组和监听端口。
3. 如果有连接但无算力，查看端口 \`连接日志\` 和 \`连接故障\`。
4. 检查目标矿池地址和协议是否匹配。
5. 检查钱包黑名单、白名单和 IP 黑名单是否拦截。
6. 去上游矿池查看 worker 是否出现。

## 排查端口异常

1. 在仪表盘查看端口状态和错误提示。
2. 打开 \`错误日志\`，确认是否有端口占用、权限不足、配置解析失败或上游连接错误。
3. 打开 \`运行日志\`，查看端口启动过程。
4. 进入端口详情查看 \`端口配置\`，确认监听协议、矿池协议、端口号和币种。
5. 修改配置后重新启动端口。

## 排查黑白名单拦截

如果矿机连接后很快断开，或指定钱包无法接入：

1. 查看 \`钱包黑 / 白名单日志\`。
2. 查看 \`IP 拦截记录\`。
3. 检查设置中心里的钱包黑名单、钱包白名单和 IP 黑名单。
4. 如使用白名单，确认钱包或子账号完全匹配。
5. 移除误拦截规则后，让矿机重新连接。

## 排查版本和升级问题

\`更新日志\` 会展示当前程序版本、最新程序版本和历史发布内容。升级前建议：

- 先阅读更新日志。
- 导出端口配置。
- 记录当前版本、后台端口、安全访问地址和证书配置。
- 在测试节点或低风险端口验证。

升级后如果出现异常，结合 \`运行日志\`、\`错误日志\` 和 \`操作日志\` 判断是否需要回滚。

## 记录问题给管理员

反馈问题时，建议同时提供：

- RustMinerSystem 版本。
- 本机 UUID。
- 端口号、币种、协议和目标矿池。
- 异常矿机钱包、矿工名和 IP。
- 出现问题的大致时间。
- 运行日志、错误日志或连接故障中的关键内容。
`,"./zh/rustminersystem/guide/13-linux-script-download-failed.md":`---
id: linux-script-download-failed
slug: linux-script-download-failed
title: Linux 脚本下载失败
navTitle: Linux 脚本下载失败
description: Linux 一键安装脚本无法下载或执行失败时的 GitHub 访问、备用地址、证书和手动安装排查步骤。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 8
---

# Linux 脚本下载失败

Linux 脚本下载失败通常与服务器网络、DNS、证书校验或 GitHub 访问质量有关。安装脚本不是唯一方式，必要时可以使用备用地址或手动下载二进制文件。

## 现象

- 执行安装命令后长时间无响应。
- \`curl\` 提示连接失败、解析失败或 TLS 证书错误。
- 脚本下载成功但执行过程中无法继续拉取文件。

## 排查步骤

1. 检查服务器是否能访问 GitHub。
2. 检查 DNS 解析是否正常，必要时切换服务器 DNS。
3. 尝试 RustMinerSystem 文档中的备用安装地址。
4. 如果是证书校验失败，确认服务器系统时间准确，且系统 CA 证书可用。
5. 如果服务器所在网络限制外部访问，可以在本地下载二进制文件后上传到服务器。
6. 查看脚本输出，区分是安装脚本下载失败，还是脚本内部下载发行文件失败。

## 处理建议

- 优先使用官方 GitHub 地址；网络受限时再使用备用地址。
- 生产环境建议保留已验证版本的安装包或二进制备份。
- 手动安装时需要自行处理启动脚本、日志、备份、升级和回滚。
- 安装完成后继续执行首次启动验证，确认后台和测试端口可用。

## 相关页面

- [安装指南](/zh/document/rustminersystem/installation#linux-一键安装)
- [手动下载 Linux 二进制](/zh/document/rustminersystem/installation#手动下载-linux-二进制)
`,"./zh/rustminersystem/guide/13-rms-client.md":`---
id: rmsClient
slug: rms-client
title: RustMinerSystem RMS 客户端配置
navTitle: RMS 客户端
description: 在 RustMinerSystem 后台维护 RMS 本地客户端推送地址、端口映射、加密密码、自定义地址和客户端展示信息。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 13
---

# RMS 客户端配置

![RustMinerSystem RMS 客户端配置窗口](/image/docs/rustminersystem/features/zh/rms-client.png)

*RMS 客户端：复制推送地址并同步本地客户端的端口映射、加密密码和自定义地址。*

顶部菜单 \`RMS\` 用于维护 RMS 本地客户端与当前 RustMinerSystem 服务器之间的配置。RMS 可以压缩并加密矿机到服务器之间的数据传输，降低公网连接数和本地带宽占用，同时减少中间人攻击风险。

RMS 的安装、部署和容量规划请阅读 [RMS 文档](/zh/document/rms)。本章只说明 RustMinerSystem 后台中的 RMS 配置入口。

## 推送地址

\`推送地址\` 页会生成可复制的地址。把任一推送地址粘贴到 RMS 本地客户端中，即可让客户端与这台 RustMinerSystem 服务器通信并获取配置。

修改 Web 端口、域名、IP、HTTPS 状态或安全访问路径后，需要重新打开 RMS 配置并替换客户端中的旧推送地址。

## 关联地址

\`关联地址\` 用来控制 RMS 本地客户端如何映射服务器上的 RMS 协议端口。

| 模式 | 说明 |
| --- | --- |
| 默认 | RMS 客户端在本地开启与服务器 RMS 端口相同的监听端口，并自动映射到对应服务器端口。 |
| 自定义 | 可以修改 RMS 客户端本地要开启的监听端口。 |

如果列表为空，说明当前服务器尚未创建 RMS2、RMS3 或 RMS3(Zstd) 协议端口。请先在创建代理端口时选择 RMS 协议。

端口备注建议按 \`分类-标题\` 格式填写，例如 \`BTC-鱼池3306\`。这样 RMS 客户端可以自动按分类展示地址。

## 自定义地址

\`自定义地址\` 用于创建额外映射，不依赖自动关联的服务器端口。每条配置包含：

- 本地监听端口。
- 本地监听币种。
- 端口备注。
- 超级压缩。
- 压缩倍率。
- 一个或多个远程 RMS 服务地址。

远程地址需要填写协议、地址、端口和密码。可选协议包括 RMS3、RMS3(Zstd) 和 RMS2。

自定义地址适合多服务器转发、特殊端口规划或手动接入场景。配置多个远程地址时，客户端会按服务端逻辑用于连接或负载均衡。

## 密码配置

\`密码配置\` 中的客户端连接密码用于保护本地客户端与服务端之间的配置同步和手动端口连接。

建议：

- 公网环境中配置密码。
- RMS 本地客户端手动创建端口时，密码与服务端保持一致。
- 更换推送地址、迁移域名或替换服务器后，同步更新客户端密码和地址。

## 其他配置

\`其他配置\` 用于调整 RMS 客户端展示信息：

| 字段 | 用途 |
| --- | --- |
| 软件名称 | 展示在 RMS 客户端标题位置，适合定制版品牌名称。 |
| 公告内容 | 向客户端用户提示维护、迁移或版本信息。 |
| 补充说明 | 填写联系方式、注意事项或使用说明。 |

这些内容会展示在本地客户端内，方便区分不同服务端或定制版本。

## 保存与验证

1. 修改配置后点击 \`更新配置\`。
2. 在 RMS 本地客户端粘贴新的推送地址。
3. 确认本地监听端口已经启动。
4. 将少量矿机连接到 RMS 本地端口。
5. 回到 RustMinerSystem 端口详情，确认设备、算力和连接日志正常。
`,"./zh/rustminersystem/guide/14-remote-control.md":`---
id: remoteControl
slug: remote-control
title: RustMinerSystem 群控远程管理
navTitle: 群控
description: 使用 RustMinerSystem 群控功能添加远程客户端，集中查看多个 RustMinerSystem 实例的算力、设备、资源、流量和运行状态。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 14
---

# 群控远程管理

![RustMinerSystem 群控工作台](/image/docs/rustminersystem/features/zh/remote-control.png)

*群控工作台：维护本机群控 API，查看远程客户端、在线设备和汇总算力。*

\`群控\` 用于把多个 RustMinerSystem 实例集中到一个页面查看。它适合同时维护多台代理服务器、多个机房或多个客户环境的场景。

## 本机群控 API

群控页面顶部会显示本机群控 API。其他 RustMinerSystem 实例要接入当前实例时，需要提供：

- 远程客户端访问地址。
- 远程客户端群控 API。
- 备注名称。

可以点击 \`复制 API\` 保存当前 API。点击 \`刷新 API\` 会使旧 API 失效，因此刷新后必须同步更新已经接入的管理端。

请把群控 API 视为敏感凭据，不要公开在聊天、工单、截图或文档中。

## 添加客户端

1. 进入 \`矿池代理\` -> \`群控\`。
2. 点击 \`添加客户端\`。
3. 填写备注，例如 \`香港代理-01\`。
4. 填写访问地址，例如 \`https://example.com\` 或 \`http://IP:端口\`。
5. 填写对方实例的群控 API。
6. 点击 \`保存配置\`。
7. 保存后页面会同步该客户端的端口、算力、设备、资源、版本和启动时间。

访问地址末尾不需要加 \`/\`，系统会自动规范化。

## 客户端卡片

每个客户端卡片会展示：

- 客户端在线状态。
- 版本和运行时间。
- 设备在线 / 离线。
- 指定币种实时算力。
- CPU / 内存。
- 上行 / 下行流量。
- 算力图表、设备图表、CPU/内存图表和流量图表。

卡片内可以分别选择 \`算力图表\` 币种和 \`设备图表\` 币种。设备图表支持 \`全部\` 或指定币种。

## 快速查看与远程访问

| 操作 | 说明 |
| --- | --- |
| 刷新客户端 | 重新同步该客户端数据。 |
| 快速查看 | 在弹窗 iframe 中打开对方后台首页。 |
| 远程访问 | 在新窗口打开对方后台。 |
| 编辑客户端 | 修改备注、访问地址或 API。 |
| 删除客户端 | 移除该远程客户端。 |

如果快速查看或远程访问打不开，通常是访问地址不可达、协议错误、浏览器拦截混合内容、对方后台端口未放行或安全访问地址已变更。

## 状态说明

| 状态 | 说明 |
| --- | --- |
| 在线 | 所有关键数据同步成功。 |
| 同步中 | 正在请求远程数据。 |
| 部分数据未返回 | 有些接口成功，有些接口失败。 |
| 离线 | 关键接口全部失败或远程不可达。 |

群控会通过远程请求读取端口列表、币种算力、设备趋势、系统资源、版本和启动时间。如果某个远程实例启用了防火墙、反向代理或安全访问控制，需要允许当前管理端访问。

## 运维建议

- 按机房、客户或用途命名客户端。
- 不再使用的客户端及时删除。
- 刷新 API 后同步更新所有上级群控配置。
- 远程访问建议配合 HTTPS、强密码、二步验证和安全访问地址。
- 群控只适合授权实例之间互相管理，不要接入不受信任的地址。
`,"./zh/rustminersystem/guide/14-statistics-chart-abnormal.md":`---
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

- RustMinerSystem 统计图表在某个时间段突然显示为 \`0\`。
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
`,"./zh/rustminersystem/guide/15-engine-control.md":`---
id: engineControl
slug: engine-control
title: RustMinerSystem 算法引擎
navTitle: 算法引擎
description: 使用 RustMinerSystem 算法引擎查看当前版本支持的算法和币种，并手动触发算法引擎热更新。
category: features
categoryTitle: 功能使用
categoryOrder: 4
order: 15
---

# 算法引擎

![RustMinerSystem 算法引擎窗口](/image/docs/rustminersystem/features/zh/engine-control.png)

*算法引擎：查看当前内核支持的算法、币种和版本，并手动触发快速更新。*

\`算法引擎\` 用于查看当前软件支持的算法和币种，并在当前版本支持的前提下手动触发算法引擎热更新。进入 \`矿池代理\` 后点击顶部菜单 \`算法引擎\` 打开。

## 页面信息

算法引擎弹窗会展示：

- 算法数量。
- 支持币种数量。
- 当前筛选算法。
- 每个算法下支持的币种。
- 币种对应的引擎版本。

可以通过 \`选择算法\` 下拉框筛选某一类算法，也可以选择 \`所有算法\` 查看完整列表。

## 重新读取

点击 \`重新读取\` 会重新获取币种和算法数据。适合以下场景：

- 刚升级 RustMinerSystem。
- 后台币种列表显示不完整。
- 创建端口时找不到预期币种。
- 需要确认当前实例支持哪些算法。

## 快速更新

点击 \`快速更新\` 会触发算法引擎热更新。成功后，重新读取币种列表，并可在创建代理端口时查看新增或更新后的币种。

使用建议：

1. 在生产高峰期谨慎操作。
2. 更新前记录当前版本和运行状态。
3. 更新后创建测试端口验证币种、协议和算力统计。
4. 如果新增币种仍未出现，刷新页面或查看运行日志。

## 与创建端口的关系

创建代理端口时，\`代理币种\` 下拉列表来自当前币种配置和算法引擎数据。算法引擎更新后，新增币种或调整后的币种信息会影响：

- 端口可选币种。
- 币种图标和显示名称。
- 算法分类。
- 部分币种专属提示和高级参数。

如果你在创建端口时找不到某个币种，先打开算法引擎重新读取或快速更新，再回到创建端口表单。

## 排查建议

- \`暂无算法引擎数据\`：先点击 \`重新读取\`，仍失败时查看运行日志和错误日志。
- 币种图标异常：可能是图标资源缺失，不影响端口代理功能。
- 快速更新失败：查看网络、后端日志和当前版本是否支持热更新。
- 新币种无法正常挖矿：先用少量矿机测试，并确认上游矿池协议和钱包格式。
`,"./zh/rustminersystem/guide/15-two-step-verification-lost.md":`---
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
`,"./zh/rustminersystem/guide/16-app-center.md":`---
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

顶部菜单 \`APP\` 用于展示后端远程配置中的 APP 信息。它通常用于放置 RustMinerSystem 相关移动端、客户端或定制应用的下载入口、平台状态、功能说明和外部链接。

如果当前版本或远程配置没有提供 \`APP_INFO\`，页面会显示空状态，并提示重新读取。

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

1. 进入 \`矿池代理\`。
2. 点击顶部菜单 \`APP\`。
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

如果显示 \`请在 /api/version 返回中提供 APP_INFO\`，说明当前后端没有返回 APP 配置。可以：

1. 点击 \`重新读取\`。
2. 确认当前 RustMinerSystem 版本是否支持 APP_INFO。
3. 检查 \`/api/version\` 返回配置。
4. 如果是定制版本，确认定制配置是否已部署到服务端。

## 安全建议

- APP 下载链接应只指向可信域名。
- 定制版下载地址变更后，应同步更新后台配置。
- 不要把内部测试包链接暴露给无关用户。
- 用户安装移动端或客户端前，应确认版本来源和签名信息。
`,"./zh/rustminersystem/guide/16-hashrate-loss.md":`---
id: hashrate-loss
slug: hashrate-loss
title: 算力损耗
navTitle: 算力损耗
description: 客户最终在矿池侧看到的算力偏低或与 RustMinerSystem 统计对不上时，排查网络链路、拒绝率、抽水钱包数量和跨池抽水配置。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 11
---

# 算力损耗

客户最终在矿池里看到的算力偏低，或与 RustMinerSystem 后台统计对不上时，需要先区分是矿池统计窗口差异，还是实际链路、拒绝率或抽水配置导致的损耗。

## 现象

- 客户矿池后台显示的有效算力低于预期。
- RustMinerSystem 后台算力、客户矿池算力和抽水矿池算力长期对不上。
- 客户矿池中的拒绝率升高，或 worker 曲线不稳定。

## 排查重点

1. 优先检查网络链路。查看客户矿池里的拒绝率是否异常，确认 RustMinerSystem 到客户矿池之间是否存在高延迟、丢包、线路绕路或不稳定连接。网络链路差会导致客户算力下降或拒绝率升高，大多数算力损耗都与网络链路问题有关。
2. 检查抽水钱包数量和比例。抽水钱包数量过多或抽水比例过高，都会增加切换和统计复杂度，也可能放大损耗。如果需要多个对象分账，建议优先只在 RustMinerSystem 中配置一个抽水钱包，再到矿池侧做分账。
3. 检查抽水矿池是否与客户矿池同池同地址。抽水矿池最好和客户矿池使用同一个矿池地址，这样如果矿池或链路异常，整条链路会同时表现出问题，便于排查。跨池抽水时，不同矿池的网络质量、统计窗口和连接稳定性不同，可能导致客户算力异常或更难定位损耗来源。

## 处理建议

- 先选少量矿机测试同一客户矿池地址，观察拒绝率、延迟和有效算力是否稳定。
- 如果拒绝率异常，优先切换更近的矿池区域、优化服务器线路或更换网络质量更好的节点。
- 精简抽水钱包数量，降低过高比例，确认基础链路稳定后再逐步恢复配置。
- 尽量让客户矿池和抽水矿池使用同池同地址，减少跨池网络差异带来的变量。
- 调整后至少观察一个完整矿池统计周期，不要只用几分钟曲线判断最终损耗。

## 相关页面

- [端口有连接但无有效算力](/zh/document/rustminersystem/connected-no-valid-hashrate)
- [创建代理端口](/zh/document/rustminersystem/proxy-port#抽水配置)
- [抽水热更新](/zh/document/rustminersystem/hot-wallet)
`,"./zh/rustminersystem/guide/17-prl-coin-issues.md":`---
id: prl-coin-issues
slug: prl-coin-issues
title: PRL币相关问题
navTitle: PRL币相关问题
description: PRL 币挖掘中 pearlhash.xyz 矿池、锄头和 SRB 内核无法抽水时的兼容性说明与处理建议。
category: troubleshooting
categoryTitle: 常见故障
categoryOrder: 3
order: 12
---

# PRL币相关问题

目前在 PRL 币挖掘链路中，\`pearlhash.xyz\` 矿池与锄头存在抽水兼容性问题，可能无法正常完成抽水分配。如果必须使用 \`pearlhash.xyz\`，建议仅作为纯转发代理使用，不要在该链路上配置抽水。

## 现象

- 使用 \`pearlhash.xyz\` 矿池时，抽水钱包没有收益或无法稳定出现抽水算力。
- 使用锄头挖掘 PRL 时，抽水链路无法按预期生效。
- 使用 SRB 内核挖掘 PRL 时，同样可能出现无法抽水的问题。

## 原因说明

\`pearlhash.xyz\` 矿池和锄头当前无法正常支持抽水链路，因此需要改用纯转发代理模式。

SRB 内核由于刚支持 PRL 币种，目前已发现受 SRB 内核自身问题影响，同样无法正常抽水。

## 处理建议

- 不建议选择 \`pearlhash.xyz\` 作为 PRL 抽水链路矿池。
- 不建议使用 SRB 内核挖掘 PRL。
- 如果必须接入 \`pearlhash.xyz\`，请使用纯转发代理，不要配置抽水。
- 挖掘 PRL 时，优先选择已验证抽水稳定的矿池和挖矿内核。

## 相关页面

- [费率钱包没有收益](/zh/document/rustminersystem/fee-wallet-no-revenue)
- [算力损耗](/zh/document/rustminersystem/hashrate-loss)
`,"./zh/rustminersystem-cli/guide/01-overview.md":`---
id: overview
slug: ""
title: RustMinerSystem CLI 文档概览
navTitle: 概览
description: 了解如何组织 RustMinerSystem CLI 命令、自动化流程、诊断与维护任务。
category: getting-started
categoryTitle: 开始使用
categoryOrder: 1
order: 1
---

# RustMinerSystem CLI 文档

RustMinerSystem CLI 文档应独立记录运维人员反复执行的命令行流程，包括巡检、自动化、诊断、维护和版本发布辅助操作。

## 文档范围

- 将 CLI 命令与服务端、移动端应用文档分开维护。
- 记录命令语法、所需权限、输出含义和失败处理方式。
- 提供适合脚本、定时任务和支持巡检使用的自动化示例。
- 必要时再链接回 RustMinerSystem、PoolNode 或 RMS 的相关文档。

## 建议文档结构

建议继续补充安装、认证、常用命令、配置导出、诊断、自动化示例和故障排查等页面。
`}),ae=(e=``)=>e.startsWith(`---
`)?e.replace(/^---\n[\s\S]*?\n---\n?/,``):e,oe=(e=`en`,t=g,n=S)=>{let r=x(n),{file:i}=_(t,r.id),a=`./${e}/${r.slug}/guide/${i}`,o=`./en/${r.slug}/guide/${i}`;return ae(C[a]||C[o]||``)},se=(e=S)=>{let t=x(e);return v.filter(e=>e.collection===t.id)},ce=(e=g,t=S)=>se(t).findIndex(({id:t})=>t===e),le={};function ue(e){let t=le[e];if(t)return t;t=le[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function w(e,t){typeof t!=`string`&&(t=w.defaultChars);let n=ue(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}w.defaultChars=`;/?:@&=+$,#`,w.componentChars=``;var de={};function fe(e){let t=de[e];if(t)return t;t=de[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function T(e,t,n){typeof t!=`string`&&(n=t,t=T.defaultChars),n===void 0&&(n=!0);let r=fe(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}T.defaultChars=`;/?:@&=+$,-_.!~*'()#`,T.componentChars=`-_.!~*'()`;function pe(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function E(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var me=/^([a-z0-9.+-]+:)/i,he=/:[0-9]*$/,ge=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,_e=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],ve=[`/`,`?`,`#`],ye=255,be=/^[+a-z0-9A-Z_-]{0,63}$/,xe=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Se={javascript:!0,"javascript:":!0},Ce={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function we(e,t){if(e&&e instanceof E)return e;let n=new E;return n.parse(e,t),n}E.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=ge.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=me.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&Se[o])&&(a=a.substr(2),this.slashes=!0)),!Se[o]&&(i||o&&!Ce[o])){let e=-1;for(let t=0;t<ve.length;t++)r=a.indexOf(ve[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<_e.length;t++)r=a.indexOf(_e[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(be)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(be)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(xe);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>ye&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),Ce[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},E.prototype.parseHost=function(e){let t=he.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Te=h({decode:()=>w,encode:()=>T,format:()=>pe,parse:()=>we}),Ee=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,De=/[\0-\x1F\x7F-\x9F]/,Oe=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,ke=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Ae=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,je=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Me=h({Any:()=>Ee,Cc:()=>De,Cf:()=>Oe,P:()=>ke,S:()=>Ae,Z:()=>je}),Ne=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),Pe=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),Fe=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Ie=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Le(e){return e>=55296&&e<=57343||e>1114111?65533:Fe.get(e)??e}var D;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(D||={});var Re=32,O;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(O||={});function ze(e){return e>=D.ZERO&&e<=D.NINE}function Be(e){return e>=D.UPPER_A&&e<=D.UPPER_F||e>=D.LOWER_A&&e<=D.LOWER_F}function Ve(e){return e>=D.UPPER_A&&e<=D.UPPER_Z||e>=D.LOWER_A&&e<=D.LOWER_Z||ze(e)}function He(e){return e===D.EQUALS||Ve(e)}var k;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(k||={});var A;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(A||={});var Ue=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=k.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=A.Strict}startEntity(e){this.decodeMode=e,this.state=k.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case k.EntityStart:return e.charCodeAt(t)===D.NUM?(this.state=k.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=k.NamedEntity,this.stateNamedEntity(e,t));case k.NumericStart:return this.stateNumericStart(e,t);case k.NumericDecimal:return this.stateNumericDecimal(e,t);case k.NumericHex:return this.stateNumericHex(e,t);case k.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Re)===D.LOWER_X?(this.state=k.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=k.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(ze(r)||Be(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(ze(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===D.SEMI)this.consumed+=1;else if(this.decodeMode===A.Strict)return 0;return this.emitCodePoint(Le(this.result),this.consumed),this.errors&&(e!==D.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&O.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=Ge(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===A.Attribute&&(i===0||He(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&O.VALUE_LENGTH)>>14,i!==0){if(a===D.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==A.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&O.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~O.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case k.NamedEntity:return this.result!==0&&(this.decodeMode!==A.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case k.NumericDecimal:return this.emitNumericEntity(0,2);case k.NumericHex:return this.emitNumericEntity(0,3);case k.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case k.EntityStart:return 0}}};function We(e){let t=``,n=new Ue(e,e=>t+=Ie(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function Ge(e,t,n,r){let i=(t&O.BRANCH_LENGTH)>>7,a=t&O.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Ke=We(Ne);We(Pe);function qe(e,t=A.Legacy){return Ke(e,t)}var Je=h({arrayReplaceAt:()=>$e,assign:()=>j,escapeHtml:()=>N,escapeRE:()=>ft,fromCodePoint:()=>tt,has:()=>Qe,isMdAsciiPunct:()=>L,isPunctChar:()=>I,isSpace:()=>P,isString:()=>Xe,isValidEntityCode:()=>et,isWhiteSpace:()=>F,lib:()=>mt,normalizeReference:()=>pt,unescapeAll:()=>M,unescapeMd:()=>ot});function Ye(e){return Object.prototype.toString.call(e)}function Xe(e){return Ye(e)===`[object String]`}var Ze=Object.prototype.hasOwnProperty;function Qe(e,t){return Ze.call(e,t)}function j(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function $e(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function et(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function tt(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var nt=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,rt=RegExp(nt.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),it=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function at(e,t){if(t.charCodeAt(0)===35&&it.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return et(n)?tt(n):e}let n=qe(e);return n===e?e:n}function ot(e){return e.indexOf(`\\`)<0?e:e.replace(nt,`$1`)}function M(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(rt,function(e,t,n){return t||at(e,n)})}var st=/[&<>"]/,ct=/[&<>"]/g,lt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function ut(e){return lt[e]}function N(e){return st.test(e)?e.replace(ct,ut):e}var dt=/[.?*+^$[\]\\(){}|-]/g;function ft(e){return e.replace(dt,`\\$&`)}function P(e){switch(e){case 9:case 32:return!0}return!1}function F(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function I(e){return ke.test(e)||Ae.test(e)}function L(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function pt(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}var mt={mdurl:Te,ucmicro:Me};function ht(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function gt(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=M(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=M(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function _t(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=M(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=M(e.slice(t,a)),o}var vt=h({parseLinkDestination:()=>gt,parseLinkLabel:()=>ht,parseLinkTitle:()=>_t}),R={};R.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+N(a.content)+`</code>`},R.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+N(e[t].content)+`</code></pre>
`},R.fence=function(e,t,n,r,i){let a=e[t],o=a.info?M(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||N(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},R.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},R.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},R.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},R.text=function(e,t){return N(e[t].content)},R.html_block=function(e,t){return e[t].content},R.html_inline=function(e,t){return e[t].content};function z(){this.rules=j({},R)}z.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+N(e.attrs[t][0])+`="`+N(e.attrs[t][1])+`"`;return r},z.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},z.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},z.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},z.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function B(){this.__rules__=[],this.__cache__=null}B.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},B.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},B.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},B.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},B.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},B.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},B.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},B.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},B.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},B.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function V(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}V.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},V.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},V.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},V.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},V.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function yt(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}yt.prototype.Token=V;var bt=/\r\n?|\n/g,xt=/\0/g;function St(e){let t;t=e.src.replace(bt,`
`),t=t.replace(xt,`�`),e.src=t}function Ct(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function wt(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Tt(e){return/^<a[>\s]/i.test(e)}function Et(e){return/^<\/a\s*>/i.test(e)}function Dt(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(Tt(o.content)&&i>0&&i--,Et(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=$e(r,a,c)}}}}var Ot=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,kt=/\((c|tm|r)\)/i,At=/\((c|tm|r)\)/gi,jt={c:`©`,r:`®`,tm:`™`};function Mt(e,t){return jt[t.toLowerCase()]}function Nt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(At,Mt)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Pt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&Ot.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Ft(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(kt.test(e.tokens[t].content)&&Nt(e.tokens[t].children),Ot.test(e.tokens[t].content)&&Pt(e.tokens[t].children))}var It=/['"]/,Lt=/['"]/g,Rt=`’`;function zt(e,t,n){return e.slice(0,t)+n+e.slice(t+1)}function Bt(e,t){let n,r=[];for(let i=0;i<e.length;i++){let a=e[i],o=e[i].level;for(n=r.length-1;n>=0&&!(r[n].level<=o);n--);if(r.length=n+1,a.type!==`text`)continue;let s=a.content,c=0,l=s.length;OUTER:for(;c<l;){Lt.lastIndex=c;let u=Lt.exec(s);if(!u)break;let d=!0,f=!0;c=u.index+1;let p=u[0]===`'`,m=32;if(u.index-1>=0)m=s.charCodeAt(u.index-1);else for(n=i-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(c<l)h=s.charCodeAt(c);else for(n=i+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=L(m)||I(String.fromCharCode(m)),_=L(h)||I(String.fromCharCode(h)),v=F(m),y=F(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&u[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&(a.content=zt(a.content,u.index,Rt));continue}if(f)for(n=r.length-1;n>=0;n--){let d=r[n];if(r[n].level<o)break;if(d.single===p&&r[n].level===o){d=r[n];let o,f;p?(o=t.md.options.quotes[2],f=t.md.options.quotes[3]):(o=t.md.options.quotes[0],f=t.md.options.quotes[1]),a.content=zt(a.content,u.index,f),e[d.token].content=zt(e[d.token].content,d.pos,o),c+=f.length-1,d.token===i&&(c+=o.length-1),s=a.content,l=s.length,r.length=n;continue OUTER}}d?r.push({token:i,pos:u.index,single:p,level:o}):f&&p&&(a.content=zt(a.content,u.index,Rt))}}}function Vt(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!It.test(e.tokens[t].content)||Bt(e.tokens[t].children,e)}function Ht(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Ut=[[`normalize`,St],[`block`,Ct],[`inline`,wt],[`linkify`,Dt],[`replacements`,Ft],[`smartquotes`,Vt],[`text_join`,Ht]];function Wt(){this.ruler=new B;for(let e=0;e<Ut.length;e++)this.ruler.push(Ut[e][0],Ut[e][1])}Wt.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Wt.prototype.State=yt;function H(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if(P(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}H.prototype.push=function(e,t,n){let r=new V(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},H.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},H.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},H.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&P(this.src.charCodeAt(e));e++);return e},H.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!P(this.src.charCodeAt(--e)))return e+1;return e},H.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},H.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},H.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(P(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},H.prototype.Token=V;var Gt=65536;function Kt(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function qt(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Jt(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!P(s)||o===45&&P(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!P(t))return!1;a++}let c=Kt(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=Kt(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=qt(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=Kt(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=qt(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>Gt))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Yt(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function Xt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Zt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(P(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Qt(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!P(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function $t(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!P(e.src.charCodeAt(r))?-1:r}function en(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!P(a))?-1:i}function tn(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function nn(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=en(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=$t(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],ee=e.sCount[c],x=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=x,e.tShift[c]=b,e.sCount[c]=ee,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let te=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){te=!0;break}if(te)break;if(d){if(p=en(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=$t(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&tn(e,h),!0}function rn(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!P(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!P(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&P(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&P(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=pt(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var an=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),on=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,sn=RegExp(`^(?:`+on+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),cn=RegExp(`^(?:`+on+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),U=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+an.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(cn.source+`\\s*$`),/^$/,!1]];function ln(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<U.length&&!U[s][0].test(o);s++);if(s===U.length)return!1;if(r)return U[s][2];let c=t+1;if(!U[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent);c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),U[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let l=e.push(`html_block`,``,0);return l.map=[t,c],l.content=e.getLines(t,c,e.blkIndent,!0),!0}function un(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!P(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&P(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=e.src.slice(i,a).trim(),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function dn(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return!1;let c=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function fn(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=e.getLines(t,a,e.blkIndent,!1).trim();e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var pn=[[`table`,Jt,[`paragraph`,`reference`]],[`code`,Yt],[`fence`,Xt,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Zt,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Qt,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,nn,[`paragraph`,`reference`,`blockquote`]],[`reference`,rn],[`html_block`,ln,[`paragraph`,`reference`,`blockquote`]],[`heading`,un,[`paragraph`,`reference`,`blockquote`]],[`lheading`,dn],[`paragraph`,fn]];function mn(){this.ruler=new B;for(let e=0;e<pn.length;e++)this.ruler.push(pn[e][0],pn[e][1],{alt:(pn[e][2]||[]).slice()})}mn.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},mn.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},mn.prototype.State=H;function W(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}W.prototype.pushPending=function(){let e=new V(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},W.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new V(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},W.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32,a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32,c=L(i)||I(String.fromCharCode(i)),l=L(s)||I(String.fromCharCode(s)),u=F(i),d=F(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},W.prototype.Token=V;function hn(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function gn(e,t){let n=e.pos;for(;n<e.posMax&&!hn(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var _n=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function vn(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(_n);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function yn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&P(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var bn=[];for(let e=0;e<256;e++)bn.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){bn[e.charCodeAt(0)]=1});function xn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),P(i));)n++;return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&bn[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function Sn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function Cn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function wn(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function Tn(e){let t=e.tokens_meta,n=e.tokens_meta.length;wn(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&wn(e,t[r].delimiters)}var En={tokenize:Cn,postProcess:Tn};function Dn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function On(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function kn(e){let t=e.tokens_meta,n=e.tokens_meta.length;On(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&On(e,t[r].delimiters)}var An={tokenize:Dn,postProcess:kn};function jn(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!P(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!P(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!P(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[pt(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function Mn(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!P(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!P(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!P(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[pt(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var Nn=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Pn=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Fn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(Pn.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(Nn.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function In(e){return/^<a[>\s]/i.test(e)}function Ln(e){return/^<\/a\s*>/i.test(e)}function Rn(e){let t=e|32;return t>=97&&t<=122}function zn(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!Rn(i))return!1;let a=e.src.slice(r).match(sn);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],In(t.content)&&e.linkLevel++,Ln(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var Bn=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Vn=/^&([a-z][a-z0-9]{1,31});/i;function Hn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(Bn);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=et(t)?tt(t):tt(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(Vn);if(r){let n=qe(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function Un(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Wn(e){let t=e.tokens_meta,n=e.tokens_meta.length;Un(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&Un(t[e].delimiters)}function Gn(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var Kn=[[`text`,gn],[`linkify`,vn],[`newline`,yn],[`escape`,xn],[`backticks`,Sn],[`strikethrough`,En.tokenize],[`emphasis`,An.tokenize],[`link`,jn],[`image`,Mn],[`autolink`,Fn],[`html_inline`,zn],[`entity`,Hn]],qn=[[`balance_pairs`,Wn],[`strikethrough`,En.postProcess],[`emphasis`,An.postProcess],[`fragments_join`,Gn]];function G(){this.ruler=new B;for(let e=0;e<Kn.length;e++)this.ruler.push(Kn[e][0],Kn[e][1]);this.ruler2=new B;for(let e=0;e<qn.length;e++)this.ruler2.push(qn[e][0],qn[e][1])}G.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},G.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},G.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},G.prototype.State=W;function Jn(e){let t={};e||={},t.src_Any=Ee.source,t.src_Cc=De.source,t.src_Z=je.source,t.src_P=ke.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!`+n+`|`+t.src_ZPCc+`)`+t.src_Any+`)`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!`+t.src_ZCc+`|[@/\\[\\]()]).)+@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|`+n+`|`+t.src_ZPCc+`)(?!`+(e[`---`]?`-(?!--)|`:`-|`)+`_|:\\d|\\.-|\\.(?!$|`+t.src_ZPCc+`))`,t.src_path=`(?:[/?#](?:(?!`+t.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+`|\\]).)*\\]|\\((?:(?!`+t.src_ZCc+`|[)]).)*\\)|\\{(?:(?!`+t.src_ZCc+`|[}]).)*\\}|\\"(?:(?!`+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+`|[']).)+\\'|\\'(?=`+t.src_pseudo_letter+`|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!`+t.src_ZCc+`|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!`+t.src_ZCc+`|$)|;(?!`+t.src_ZCc+`|$)|\\!+(?!`+t.src_ZCc+`|[!]|$)|\\?(?!`+t.src_ZCc+`|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|`+t.src_pseudo_letter+`{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:`+t.src_pseudo_letter+`)|(?:`+t.src_pseudo_letter+`(?:-|`+t.src_pseudo_letter+`){0,61}`+t.src_pseudo_letter+`))`,t.src_host=`(?:(?:(?:(?:`+t.src_domain+`)\\.)*`+t.src_domain+`))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:`+t.src_ZPCc+`|>|$))`,t.tpl_email_fuzzy=`(^|`+n+`|"|\\(|`+t.src_ZCc+`)(`+t.src_email_name+`@`+t.tpl_host_fuzzy_strict+`)`,t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+`)`,t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+`)`,t}function Yn(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Xn(e){return Object.prototype.toString.call(e)}function Zn(e){return Xn(e)===`[object String]`}function Qn(e){return Xn(e)===`[object Object]`}function $n(e){return Xn(e)===`[object RegExp]`}function er(e){return Xn(e)===`[object Function]`}function tr(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var nr={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function rr(e){return Object.keys(e||{}).reduce(function(e,t){return e||nr.hasOwnProperty(t)},!1)}var ir={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/`+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:`+n.re.src_domain+`)\\.)+`+n.re.src_domain_root+`)`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^`+n.re.src_email_name+`@`+n.re.src_host_strict,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},ar=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,or=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function sr(e){e.__index__=-1,e.__text_cache__=``}function cr(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function lr(){return function(e,t){t.normalize(e)}}function ur(e){let t=e.re=Jn(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(ar),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "`+e+`": `+t)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Qn(n)){$n(n.validate)?r.validate=cr(n.validate):er(n.validate)?r.validate=n.validate:a(t,n),er(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=lr();return}if(Zn(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:lr()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(tr).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`ig`),e.re.schema_at_start=RegExp(`^`+e.re.schema_search.source,`i`),e.re.pretest=RegExp(`(`+e.re.schema_test.source+`)|(`+e.re.host_fuzzy_test.source+`)|@`,`i`),sr(e)}function dr(e,t){let n=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(n,r);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=r+t,this.raw=i,this.text=i,this.url=i}function fr(e,t){let n=new dr(e,t);return e.__compiled__[n.schema].normalize(n,e),n}function K(e,t){if(!(this instanceof K))return new K(e,t);t||rr(e)&&(t=e,e={}),this.__opts__=Yn({},nr,t),this.__index__=-1,this.__last_index__=-1,this.__schema__=``,this.__text_cache__=``,this.__schemas__=Yn({},ir,e),this.__compiled__={},this.__tlds__=or,this.__tlds_replaced__=!1,this.re={},ur(this)}K.prototype.add=function(e,t){return this.__schemas__[e]=t,ur(this),this},K.prototype.set=function(e){return this.__opts__=Yn(this.__opts__,e),this},K.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let t,n,r,i,a,o,s,c,l;if(this.re.schema_test.test(e)){for(s=this.re.schema_search,s.lastIndex=0;(t=s.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],s.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=n.index+n[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__=``,this.__index__=a,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&(l=e.indexOf(`@`),l>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(a=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&o>this.__last_index__)&&(this.__schema__=`mailto:`,this.__index__=a,this.__last_index__=o))),this.__index__>=0},K.prototype.pretest=function(e){return this.re.pretest.test(e)},K.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},K.prototype.match=function(e){let t=[],n=0;this.__index__>=0&&this.__text_cache__===e&&(t.push(fr(this,n)),n=this.__last_index__);let r=n?e.slice(n):e;for(;this.test(r);)t.push(fr(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null},K.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,fr(this,0)):null},K.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),ur(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,ur(this),this)},K.prototype.normalize=function(e){e.schema||(e.url=`http://`+e.url),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:`+e.url)},K.prototype.onCompile=function(){};var q=2147483647,J=36,pr=1,Y=26,mr=38,hr=700,gr=72,_r=128,vr=`-`,yr=/^xn--/,br=/[^\0-\x7F]/,xr=/[\x2E\u3002\uFF0E\uFF61]/g,Sr={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},Cr=J-pr,X=Math.floor,wr=String.fromCharCode;function Z(e){throw RangeError(Sr[e])}function Tr(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function Er(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(xr,`.`);let i=Tr(e.split(`.`),t).join(`.`);return r+i}function Dr(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var Or=e=>String.fromCodePoint(...e),kr=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:J},Ar=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},jr=function(e,t,n){let r=0;for(e=n?X(e/hr):e>>1,e+=X(e/t);e>Cr*Y>>1;r+=J)e=X(e/Cr);return X(r+(Cr+1)*e/(e+mr))},Mr=function(e){let t=[],n=e.length,r=0,i=_r,a=gr,o=e.lastIndexOf(vr);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&Z(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=J;;i+=J){s>=n&&Z(`invalid-input`);let o=kr(e.charCodeAt(s++));o>=J&&Z(`invalid-input`),o>X((q-r)/t)&&Z(`overflow`),r+=o*t;let c=i<=a?pr:i>=a+Y?Y:i-a;if(o<c)break;let l=J-c;t>X(q/l)&&Z(`overflow`),t*=l}let c=t.length+1;a=jr(r-o,c,o==0),X(r/c)>q-i&&Z(`overflow`),i+=X(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},Nr=function(e){let t=[];e=Dr(e);let n=e.length,r=_r,i=0,a=gr;for(let n of e)n<128&&t.push(wr(n));let o=t.length,s=o;for(o&&t.push(vr);s<n;){let n=q;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>X((q-i)/c)&&Z(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>q&&Z(`overflow`),n===r){let e=i;for(let n=J;;n+=J){let r=n<=a?pr:n>=a+Y?Y:n-a;if(e<r)break;let i=e-r,o=J-r;t.push(wr(Ar(r+i%o,0))),e=X(i/o)}t.push(wr(Ar(e,0))),a=jr(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Pr={version:`2.3.1`,ucs2:{decode:Dr,encode:Or},decode:Mr,encode:Nr,toASCII:function(e){return Er(e,function(e){return br.test(e)?`xn--`+Nr(e):e})},toUnicode:function(e){return Er(e,function(e){return yr.test(e)?Mr(e.slice(4).toLowerCase()):e})}},Fr={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Ir=/^(vbscript|javascript|file|data):/,Lr=/^data:image\/(gif|png|jpeg|webp);/;function Rr(e){let t=e.trim().toLowerCase();return Ir.test(t)?Lr.test(t):!0}var zr=[`http:`,`https:`,`mailto:`];function Br(e){let t=we(e,!0);if(t.hostname&&(!t.protocol||zr.indexOf(t.protocol)>=0))try{t.hostname=Pr.toASCII(t.hostname)}catch{}return T(pe(t))}function Vr(e){let t=we(e,!0);if(t.hostname&&(!t.protocol||zr.indexOf(t.protocol)>=0))try{t.hostname=Pr.toUnicode(t.hostname)}catch{}return w(pe(t),w.defaultChars+`%`)}function Q(e,t){if(!(this instanceof Q))return new Q(e,t);t||Xe(e)||(t=e||{},e=`default`),this.inline=new G,this.block=new mn,this.core=new Wt,this.renderer=new z,this.linkify=new K,this.validateLink=Rr,this.normalizeLink=Br,this.normalizeLinkText=Vr,this.utils=Je,this.helpers=j({},vt),this.options={},this.configure(e),t&&this.set(t)}Q.prototype.set=function(e){return j(this.options,e),this},Q.prototype.configure=function(e){let t=this;if(Xe(e)){let t=e;if(e=Fr[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},Q.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},Q.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},Q.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},Q.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},Q.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},Q.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},Q.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var Hr=e=>e.trim().toLowerCase().replace(/[`~!@#$%^&*()+=|{}[\]:;"'<>,.?/\\]/g,``).replace(/\s+/g,`-`),$=new Q({html:!1,linkify:!0,typographer:!0}),Ur=/\.(mp4|webm|ogg)(?:[?#].*)?$/i,Wr=$.renderer.rules.heading_open||((e,t,n,r,i)=>i.renderToken(e,t,n)),Gr=$.renderer.rules.image||((e,t,n,r,i)=>i.renderToken(e,t,n));$.renderer.rules.heading_open=(e,t,n,r,i)=>{let a=Hr(e[t+1]?.content||``);return a&&e[t].attrSet(`id`,a),Wr(e,t,n,r,i)},$.renderer.rules.image=(e,t,n,r,i)=>{let a=e[t],o=a.attrGet(`src`)||``;if(!Ur.test(o))return Gr(e,t,n,r,i);let s=i.renderInlineAsText?.(a.children||[],n,r)||a.content,c=a.attrIndex(`alt`);return c>=0&&a.attrs.splice(c,1),a.attrSet(`aria-label`,s),a.attrSet(`autoplay`,``),a.attrSet(`controls`,``),a.attrSet(`loop`,``),a.attrSet(`muted`,``),a.attrSet(`playsinline`,``),a.attrSet(`preload`,`metadata`),`<video${i.renderAttrs(a)}></video>`};var Kr=(e=``)=>$.render(e),qr=(e=``)=>e.split(`
`).map(e=>{let t=/^(#{2,3})\s+(.+)$/.exec(e.trim());return t?{id:Hr(t[2]),level:t[1].length,title:t[2]}:null}).filter(Boolean),Jr={id:`main-content`,class:`docs-shell`},Yr={class:`docs-sidebar`,"aria-labelledby":`docs-sidebar-title`},Xr={class:`docs-sidebar-inner`},Zr={class:`sidebar-groups`},Qr={class:`sidebar-nav`},$r={class:`docs-article`,"aria-labelledby":`document-title`},ei={class:`docs-header`},ti={class:`eyebrow`},ni={id:`document-title`},ri=[`innerHTML`],ii={class:`page-nav`,"aria-label":`Documentation page navigation`},ai={class:`article-aside`,"aria-labelledby":`article-toc-title`},oi={class:`article-aside-inner`},si={class:`aside-section`},ci={class:`aside-label`},li={class:`reading-time`},ui={class:`aside-section`},di={id:`article-toc-title`},fi={class:`article-toc`},pi=[`href`],mi=d({__name:`DocumentView`,setup(d){let{t:h}=u(),_=ie(),v=s(()=>te(_)),x=s(()=>_.meta?.docCollection||`rustminersystem`),S=s(()=>_.meta?.docPage||g),C=s(()=>se(x.value)),ae=s(()=>C.value.reduce((e,t)=>{let n=t.category||`guide`;return{...e,[n]:[...e[n]||[],t]}},{})),le=s(()=>re.filter(e=>e.collection===x.value&&ae.value[e.id]?.length)),ue=s(()=>oe(v.value,S.value,x.value)),w=s(()=>ue.value.replace(/^#\s+.+(?:\r?\n)+/,``)),de=s(()=>Kr(w.value)),fe=s(()=>qr(w.value)),T=s(()=>y(S.value,v.value,x.value).title),pe=s(()=>y(S.value,v.value,x.value).description),E=s(()=>ce(S.value,x.value)),me=s(()=>C.value[E.value-1]),he=s(()=>C.value[E.value+1]),ge=s(()=>{let e=w.value.replace(/```[\s\S]*?```/g,``).replace(/[#>*_`[\]()|-]/g,` `).trim().split(/\s+/).filter(Boolean).length;return Math.max(1,Math.ceil(e/220))});return(s,u)=>(n(),a(`main`,Jr,[r(`aside`,Yr,[r(`div`,Xr,[r(`div`,Zr,[(n(!0),a(l,null,e(le.value,s=>(n(),a(`section`,{key:s.id,class:`sidebar-group`},[r(`h2`,null,i(o(ee)(s.id,v.value,x.value).title),1),r(`nav`,Qr,[(n(!0),a(l,null,e(ae.value[s.id]||[],e=>(n(),f(o(ne),{key:e.id,to:o(b)(e.id,v.value,x.value),class:c([`sidebar-link`,{"is-active":e.id===S.value}])},{default:t(()=>[p(i(o(y)(e.id,v.value,x.value).navTitle),1)]),_:2},1032,[`to`,`class`]))),128))])]))),128))])])]),r(`article`,$r,[r(`header`,ei,[r(`p`,ti,i(o(h)(`document.eyebrow`)),1),r(`h1`,ni,i(T.value),1),r(`p`,null,i(pe.value),1)]),r(`section`,{class:`document-content`,"aria-label":`Documentation content`,innerHTML:de.value},null,8,ri),r(`nav`,ii,[me.value?(n(),f(o(ne),{key:0,class:`page-nav-link`,to:o(b)(me.value.id,v.value,x.value)},{default:t(()=>[r(`span`,null,i(o(h)(`document.previousPage`)),1),p(` `+i(o(y)(me.value.id,v.value,x.value).navTitle),1)]),_:1},8,[`to`])):m(``,!0),he.value?(n(),f(o(ne),{key:1,class:`page-nav-link is-next`,to:o(b)(he.value.id,v.value,x.value)},{default:t(()=>[r(`span`,null,i(o(h)(`document.nextPage`)),1),p(` `+i(o(y)(he.value.id,v.value,x.value).navTitle),1)]),_:1},8,[`to`])):m(``,!0)])]),r(`aside`,ai,[r(`div`,oi,[r(`section`,si,[r(`p`,ci,i(o(h)(`document.readingTime`)),1),r(`p`,li,i(o(h)(`document.readingTimeValue`,{minutes:ge.value})),1)]),r(`section`,ui,[r(`h2`,di,i(o(h)(`document.onThisPage`)),1),r(`nav`,fi,[(n(!0),a(l,null,e(fe.value,e=>(n(),a(`a`,{key:e.id,class:c([`toc-link`,`toc-link-level-${e.level}`]),href:`#${e.id}`},i(e.title),11,pi))),128))])])])])]))}},[[`__scopeId`,`data-v-0f6403c6`]]);export{mi as default};