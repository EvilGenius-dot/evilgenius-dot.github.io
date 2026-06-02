---
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

`Audit List` and `Permission Assignment` centralize high-risk configuration review and account scope management.

## Audit List

The audit list handles wallet configuration requests submitted by customers or downstream operators.

| Type | Description |
| --- | --- |
| Add wallet | Add a wallet configuration for one CID and coin. |
| Edit wallet | Change wallet address, subaccount, ratio, device name, or pool strategy. |
| Delete wallet | Delete an existing wallet configuration. |

The page has `Pending`, `Approved`, and `All Requests` tabs. Each record includes CID, custom name, coin, wallet address, subaccount, ratio, device name, pool mode, protocol, version, and submitted time.

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

To assign an account, open `Permission Assignment`, confirm the current parent, search for the target account, select it, and click `Assign`.

To remove an account, find it in the current parent's child list and click `Remove`. The account is removed from that parent scope.

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
