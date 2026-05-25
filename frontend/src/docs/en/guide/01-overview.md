---
id: overview
slug: ""
title: RustMinerSystem documentation overview
navTitle: Overview
description: Learn RustMinerSystem operating modes, use cases, and documentation structure.
order: 1
---

# RustMinerSystem Documentation

> This document records the installation, configuration, runtime, and operations workflow for RustMinerSystem. Replace all placeholders with your real deployment values.

## Overview

RustMinerSystem can work as a traditional mining pool proxy or help you run a self-hosted pool node. The companion RMS client encrypts and compresses miner traffic to reduce bandwidth pressure and improve transport safety.

### Use Cases

- Mining sites need a unified miner access path.
- Operators need to deploy self-hosted pool nodes.
- Network environments require lower bandwidth usage or stronger transport safety.
- Teams need repeatable installation, configuration, and upgrade procedures.

## Operating Modes

### Traditional Pool Proxy

Use this mode when forwarding miner traffic to an existing pool. Validate connection stability with test miners before scaling up.

### Self-Hosted Pool Node

Use this mode when operators need stronger control over the pool path. Before deployment, confirm node sync status, network connectivity, and recovery procedures.

### RMS Secure Client

The RMS client encrypts and compresses miner traffic. Before enabling it, confirm server and client version compatibility and document the rollback plan.
