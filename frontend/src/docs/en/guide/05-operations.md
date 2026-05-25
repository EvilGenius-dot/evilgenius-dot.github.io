---
id: operations
slug: operations
title: RustMinerSystem operations and troubleshooting
navTitle: Operations
description: Review daily checks, upgrade flow, and troubleshooting steps for RustMinerSystem.
order: 5
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

## Troubleshooting

### Service Fails to Start

- Check the configuration file format.
- Check whether the port is already in use.
- Check whether the current user has permission to start the service.

### Cannot Connect to Pool

- Check network connectivity.
- Check the pool address and port.
- Check the account, worker name, and password.

## FAQ

### How many miners can RustMinerSystem support?

The answer depends on server resources, network bandwidth, upstream pool stability, and load test results. Run staged connection tests before production rollout.

### Does an upgrade require downtime?

It depends on the deployment method and version changes. For production environments, schedule a maintenance window and prepare a rollback plan.
