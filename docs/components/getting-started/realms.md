# Realms

## Overview

The realm tells the backend which clearing-house context a request is made in. Realm values are environment-qualified: a realm is *not* the same thing as a clearing house — the clearing house is the application; the realm is the context identifier for one environment of it.

How the realm travels depends on the endpoint generation: v2013 endpoints take it as the `Realm` HTTP header; v2023 endpoints take it as the `realm` query parameter. Each endpoint's page states the value to use for this site's environment.

## Application Realms

| Application | Development Realm | Production Realm |
| --- | --- | --- |
| ABS Clearing-House (ABSCH) | `abs-dev` | `abs` |
| Biosafety Clearing-House (BCH) | `bch-dev` | `bch` |
| Clearing-House Mechanism (CHM) | `chm-dev` | `chm` |
| Online Reporting Tool (ORT) | `ort-dev` | `ort` |

Each environment (`api.cbd.int` for production, `api.cbddev.xyz` for development) has its own realm configurations, roles and authentication tokens; tokens from one environment are not valid in the other.
