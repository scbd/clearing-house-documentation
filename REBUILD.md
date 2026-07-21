# Documentation Rebuild Tracker

The site is being rebuilt from scratch, one record type at a time, reviewed step by step in-session; each reviewed step becomes a commit (no PRs). All previous
content lives in [.archive/](.archive/) as reference — nothing is carried over
by copy-paste; every page is re-derived from a reviewed schema descriptor.

## How a record type is migrated

1. Draft the descriptor(s) in `docs/swagger/schemas/` from the archived table, spec
   and page prose (`.archive/components/`, `.archive/swagger-json/`),
   flagging inconsistencies between those sources instead of silently resolving them.
2. **Review gate:** confirm the record type is supported by the production
   realm configuration of every app that will document it (documented types
   must always be a subset of the realm configuration — checked manually here,
   once per type). Then confirm every field against the real backend schema
   and encode per-realm differences (mandatory flags, missing fields,
   vocabularies) in each app's descriptor file. The review happens on the
   **rendered field table** (dev server or dev docs site), with the
   descriptor's commit diff as the formal record of what was approved.
   The gate also fixes the record type's **operation set** per app (default
   proposal: create/get/update/delete/list/solr + field reference; trimmed or
   extended per type). That decision is recorded per app per type and drives
   both which pages exist and the sidebar entries. (Sole exception: the
   per-app legacy publishing pages are deliberately sidebar-less, ADR 0002.)
3. Wire the pages in `docs/<app>/<type>/` for each app that supports the type,
   add sidebar entries in `docs/routes/index.ts`, verify the playground against the
   dev environment (`api.cbddev.xyz`).
4. Delete the record type's superseded files from `.archive/` in the same
   commit series.

Done means: `.archive/` is empty and every page is descriptor-driven.

**Deployment during the rebuild:** once the contact record type is complete,
`rebuild` merges into `dev` early and often — the dev docs site is the living
preview where each migrated playground is exercised with dev tokens.
Production (`master`) keeps serving the legacy site until parity is declared.

## Record types

Apps: A = ABS (absch), B = BCH, C = CHM, O = ORT — per the archived docs;
verify against the realm configurations before starting each row.

| Record type | Apps | Status |
| --- | --- | --- |
| contact | A B | descriptors + create generator exist (`docs/swagger/schemas/`, prototype code only); pages pending review |
| user (authentication) | A B C O | rebuild early — every playground links to the auth guide |
| org | A B C | pending |
| vlr | A B C | pending |
| cdi | A B C | pending |
| cna | A B | pending |
| ndb | A B | pending |
| nfp | A B | pending |
| general (drafts, attachments, files) | A B C O | pending — becomes the once-per-app **legacy publishing flow** reference (v2013, ADR 0002): published but **unlisted** (no sidebar entry; linked from create/update pages) with a legacy notice pointing to v2023. Attachments/files stay normal pages |
| cp | A | pending |
| cpc | A | pending |
| cpp | A | pending |
| ircc | A | pending |
| msr | A | pending |
| nmcc | A | pending |
| pro | A | pending |
| dec | B | pending |
| gene | B | pending |
| ira | B | pending |
| law | B | pending |
| lmo | B | pending |
| national-report | O | pending |
| national-report-binary-indicator-data | O | pending |
| national-report-indicator-data | O | pending |
| national-target | O | pending |
| national-target-mapping | O | pending |
| nbsap | O | pending |
| stakeholderCommitment | O | pending |
| thesaurus | A B C O | pending — structurally different (controlled vocabularies); do last |

## Per-app getting-started pages (rebuild alongside early record types)

Each app had: `index`, `custom-types`, `realms`, `record-types`, `schemas`,
`user-management`, `apache-solr`. These are realm-agnostic prose — quick
reviews, but several rebuilt pages link to `custom-types` anchors, so schedule
them right after `contact`.

Decision: these stay **per-app pages built from a shared source** (same
mechanism as record pages) — each clearing house's section is self-contained
and links never leave the app's context.

## Foundation tasks (not record types)

- [x] Per-environment images (ADR 0001): CI selects `build` (master/tags) vs
      `build:dev` (all other branches); `BASE_PATH=/clearing-house/` baked as
      image ENV; `docker-entrypoint.sh` deleted.
- [ ] Fetch realm configurations for all 4 apps × 2 environments once, to
      eyeball the undocumented-by-default remainder (scope only grows by
      explicit decision; the subset invariant is re-checked manually at each
      review gate).
- [ ] Make `useClearingHouse().apiUrl` return the bare API host; each endpoint
      generator owns its full versioned path (`/api/v2013/...`, `/api/v2023/...`).
      Remove `API_EXTENSION` from app-config.
- [ ] Redo `createSpec` against the v2023 publishing endpoint and add an
      `updateSpec` (v2023) — create/update pages always document v2023
      (ADR 0002). Add generators for `get`, `delete`, `list`, `solr` on their
      existing v2013 endpoints.
      Solr pages keep the legacy layout of five playground blocks per record
      type (all-record / country / query / region / subfilters), emitted as
      five variants of the one parameterized solr generator.
- [ ] Build a reusable legacy-notice component (banner: "legacy v2013 flow —
      use the v2023 endpoint for new integrations", linking to the app's
      create/update docs) for the unlisted legacy pages.
- [ ] Endgame: drop redundant `swagger-ui` dep, unpin axios, multi-stage
      Docker image serving `dist/` via nginx, remove SwaggerUI.vue MutationObserver hacks.
- Parked (out of rebuild scope): `landing/` stays as-is; after parity, dedupe
  its hand-copied styling/GA config. Never hand-copy styles to match it.
