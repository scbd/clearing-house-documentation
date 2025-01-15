# Realms

## Overview
The **Realm** defines the specific context or environment in which a request is being made. It allows the system to appropriately route requests based on the specified environment. Realms are categorized into **Production** and **Development**, supporting both the **Clearing-House Mechanisms** and the **Online Reporting Tool (ORT)**.

---

## Clearing-House Realms

### Production
The production environments for Clearing-House mechanisms are used for live operations and features. These realms represent the operational contexts for ABS, BCH, and CHM.
<!--@include: @/../components/common/realm/abs.md-->
<!--@include: @/../components/common/realm/bch.md-->
<!--@include: @/../components/common/realm/chm.md-->

### Development
The development environments for Clearing-House mechanisms are intended for testing and feature development. These realms allow for safe experimentation without affecting live data or operations.

<!--@include: @/../components/common/realm/abs-dev.md-->
<!--@include: @/../components/common/realm/bch-dev.md-->
<!--@include: @/../components/common/realm/chm-dev.md-->

---

## Online Reporting Tool (ORT) Realms

### Production
The production realm for the Online Reporting Tool (ORT) is used for live operations, allowing users to interact with the tool in a stable and operational environment.

<!--@include: @/../components/common/realm/ort.md-->

### Development
The development realm for the Online Reporting Tool (ORT) is intended for testing and feature development in a non-production environment.

<!--@include: @/../components/common/realm/ort-dev.md-->

---

## Summary Table

| **Context**      | **Environment** | **Realm**    | **Description**                                                                                     |
|-------------------|-----------------|--------------|-----------------------------------------------------------------------------------------------------|
| Clearing-House    | Production      | `abs`        | ABS production environment for live operations.                                                    |
| Clearing-House    | Production      | `bch`        | BCH production environment for live operations.                                                    |
| Clearing-House    | Production      | `chm`        | CHM production environment for live operations.                                                    |
| Clearing-House    | Development     | `abs-dev`    | ABS development environment for testing and feature development.                                   |
| Clearing-House    | Development     | `bch-dev`    | BCH development environment for testing and feature development.                                   |
| Clearing-House    | Development     | `chm-dev`    | CHM development environment for testing and feature development.                                   |
| Online Reporting Tool | Production  | `ort`        | ORT production environment for live operations.                                                    |
| Online Reporting Tool | Development | `ort-dev`    | ORT development environment for testing and feature development.                                   |

Use the appropriate realm based on the context and environment to ensure proper request routing and functionality.
