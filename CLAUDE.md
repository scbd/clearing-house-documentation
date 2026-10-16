# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

VitePress documentation site (with embedded Swagger playgrounds) for the SCBD clearing-house APIs. Four apps share one site under `/absch`, `/bch`, `/chm`, `/ort`.

The repo hosts two independent deployables: the docs app (everything under `docs/` — pages, components, swagger, utils, routes; built by the root `package.json`) and `landing/` (a separate static site, out of rebuild scope). Directories under `docs/` that are not site pages must be listed in `srcExclude` in `docs/.vitepress/config.ts`.

`CONTEXT.md` is the domain glossary (canonical terms: realm vs clearing house, schema vs schema descriptor, documentation scope) — follow its language in code and prose. `docs/adr/` holds architecture decision records.

**This repo is mid-rebuild** (branch `rebuild`): the live site is being recreated one record type at a time from reviewed schema descriptors. All legacy content sits in `.archive/` as reference material — never import from it, never edit it, and don't delete from it without explicit instruction. `REBUILD.md` is the migration tracker and defines the per-record-type workflow, including a mandatory human review gate for every descriptor's fields.

## Commands

```sh
npm install
npm run dev        # dev server, reads docs/.env.development (targets api.cbddev.xyz)
npm run dev:prod   # dev server against production env (docs/.env.production)
npm run build      # production build (reads docs/.env.production)
npm run build:dev  # build against the dev environment
npm run preview    # serve the built site on port 8000
```

There are no tests or linters. Verification = `npm run build` passes (it fails on dead links) plus checking the rendered page.

## Domain model (essential context)

- **One API, four apps.** All apps use identical endpoints (e.g. `POST /api/v2013/documents?schema=<recordType>`); the app is selected by the `Realm` HTTP header. Prod realms are `abs|bch|chm|ort`; dev realms are `abs-dev|bch-dev|...`. Never hardcode a realm — derive it via `getRealm()` / `useClearingHouse().realm` (utils/).
- **Record-type schemas are per-app.** A record type (e.g. `contact`) may exist in several apps with overlapping but different fields. Each app documents it under its own identity.
- **Realm configuration** (`GET /api/v2018/realm-configurations/<app-host>`) is the backend's source of truth for which record types and roles each realm supports.
- **Two environments with incompatible auth tokens:** `api.cbd.int` (prod) and `api.cbddev.xyz` (dev). The docs site has a deployment per environment. Config comes from `VITE_*` env vars (see `docs/.env.example`), inlined **at build time** into `docs/app-config.ts` — runtime env vars do NOT work (known CI issue; only `BASE_PATH` is runtime-substituted via `docker-entrypoint.sh`). All `VITE_*` URLs must point at the same environment.

## Architecture: descriptor + generator pattern

Every documented endpoint has two layers, and both the docs table and the playground spec are generated from the same data — never hand-write either:

- **Schema descriptors** — `docs/swagger/schemas/<app>/<recordType>.ts`, typed by `docs/swagger/schemas/types.ts`. Field tables (title, type, mandatory, example). Shared bases live in `docs/swagger/schemas/shared/` and per-app files compose via spread/override (`{ ...contactFields, someField: { ...contactFields.someField, mandatory: false } }`). Field differences between apps are encoded here and nowhere else. Descriptors never carry authorization data — who may publish a record type is read from the realm configuration at runtime.
- **Spec generators** — `docs/swagger/generators/` (`base.ts` = OpenAPI boilerplate, auth schemes, realm parameter, field-type→OpenAPI mapping; `documents.ts` = per-endpoint-shape factories like `createSpec({ apiUrl, realm, schema })`). Endpoint mechanics live here once, and each generator owns its full versioned path (`/api/v2013/...`, `/api/v2023/...`) — there is no global API version. Generators for get/update/delete/list/solr are still to be added.

A doc page (`docs/<app>/<type>/<op>.md`) imports its app's descriptor, renders the field table with `docs/components/common/schema-table.vue`, and passes the generated spec to `docs/swagger/view/SwaggerUI.vue` (prop: `swaggerSpecs: [{ json, protected }]`). `SwaggerUI.vue` handles login (accounts iframe token via `docs/utils/auth-manager.js`), fetches the realm configuration to show the user's roles for the current realm, and lazy-loads `swagger-ui-dist`.

Other wiring:

- `@` alias = `docs/` (set in `docs/.vitepress/config.ts`), so includes look like `@/components/...`.
- Sidebar = hand-maintained `docs/routes/index.ts` (currently minimal; grows one record type at a time). Sidebar links must exactly match page file paths — a typo silently drops the page.
- `useClearingHouse()` (utils/composables) derives app code, apiUrl, realm and base path from the current page path — use it in every page's `<script setup>`.
- `landing/` is a **separate** static site (own package.json, Dockerfile, Express server), not part of the VitePress build.

## Deployment

Per-environment images (ADR 0001): CI (`.github/workflows/ci.yml`) selects the build script by branch — `master` and calver tags run `npm run build` (production), every other branch runs `build:dev` (dev environment). Everything is baked at build time: `VITE_*` URLs, realms, and `BASE_PATH=/clearing-house/` (an image-level ENV in the `Dockerfile`, read by both the build and the `vitepress preview` serve command). There is no runtime configuration and no entrypoint script; never promote an image across environments. The landing app owns each environment's domain root; docs are always mounted at `/clearing-house/`. Only the dev branch auto-deploys (Portainer webhook).
