# Documentation Rebuild Tracker

The site is being rebuilt from scratch, one record type at a time. All previous
content lives in [.archive/](.archive/) as reference — nothing is carried over
by copy-paste; every page is re-derived from a reviewed schema descriptor.

## How a record type is migrated

1. Draft the descriptor(s) in `swagger/schemas/` from the archived table, spec
   and page prose (`.archive/components/`, `.archive/swagger-json/`),
   flagging inconsistencies between those sources instead of silently resolving them.
2. **Review gate:** confirm every field against the real backend schema and
   encode per-realm differences (mandatory flags, missing fields, vocabularies)
   in each app's descriptor file.
3. Wire the pages in `docs/<app>/<type>/` for each app that supports the type,
   add sidebar entries in `routes/index.ts`, verify the playground against the
   dev environment (`api.cbddev.xyz`).
4. Delete the record type's superseded files from `.archive/` in the same PR.

Done means: `.archive/` is empty and every page is descriptor-driven.

## Record types

Apps: A = ABS (absch), B = BCH, C = CHM, O = ORT — per the archived docs;
verify against the realm configurations before starting each row.

| Record type | Apps | Status |
| --- | --- | --- |
| contact | A B | descriptors + create generator exist (`swagger/schemas/`, prototype code only); pages pending review |
| user (authentication) | A B C O | rebuild early — every playground links to the auth guide |
| org | A B C | pending |
| vlr | A B C | pending |
| cdi | A B C | pending |
| cna | A B | pending |
| ndb | A B | pending |
| nfp | A B | pending |
| general (drafts, attachments, files) | A B C O | pending |
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

## Foundation tasks (not record types)

- [ ] Fix build-time `VITE_*` inlining: CI must produce per-environment images
      (`build` vs `build:dev`) — the dev site currently falls back to prod URLs.
- [ ] Fetch realm configurations for all 4 apps × 2 environments; reconcile
      with the table above (documented-but-unsupported / supported-but-undocumented).
- [ ] Add generators for `get`, `update`, `delete`, `list`, `solr` alongside `createSpec`.
- [ ] Endgame: drop redundant `swagger-ui` dep, unpin axios, multi-stage
      Docker image serving `dist/` via nginx, remove SwaggerUI.vue MutationObserver hacks.
