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

**Status 2026-08-05: every record type + the getting-started, authentication,
thesaurus and general sections are drafted and committed.** Remaining before
"done": verify playgrounds against dev, then delete the superseded `.archive/`
files (step 4); the endgame infra task below; and the small review follow-ups
noted per-row (composite `object` fields, 5 unresolved Term links, the `nfp`→CHM
scope call).

**Deployment during the rebuild:** once the contact record type is complete,
`rebuild` merges into `dev` early and often — the dev docs site is the living
preview where each migrated playground is exercised with dev tokens.
Production (`master`) keeps serving the legacy site until parity is declared.

## Record types

Apps: A = ABS (absch), B = BCH, C = CHM, O = ORT — per the archived docs;
verify against the realm configurations before starting each row.

| Record type | Apps | Status |
| --- | --- | --- |
| contact | A B C | **fields reviewed 2026-07-30**: identical across all three apps — every descriptor is the shared base with no overrides. Full operation set (create/get/update/delete/list/solr/fields) + sidebar live; CHM added by explicit scope decision 2026-07-30. Remaining: verify playgrounds against the dev environment, then delete superseded `.archive/` contact files |
| user (authentication) | A B C O | draft pages for all four apps (`<app>/user/authentication`) + sidebar; generator `authentication.ts` (no realm, no descriptor — not a documents record type); every protected contact page links to the guide. Live check 2026-07-30: invalid credentials return **403 empty-body**, not the 400/401 the archived spec claimed — encoded as observed. Schemas **approved 2026-08-05** |
| org | A B C | drafted 2026-08-04, schemas **approved 2026-08-05**. Operation set proposal: read-only (search/get/fields), matching the archive — org was never documented with create/update/delete/list. Flags for review: the archive served one shared field table to all three apps (including `absThematicAreas` even for BCH/CHM); nine fields are untitled in the archive; archived `Link` examples carry a `language` key the Link type doesn't define (examples drafted with `url`/`name` only). New field types added for org: `term[]`, `reference[]`, `lstring[]`, `mapLocation` (MapLocation added to custom-types page) |
| vlr | A B C | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. Shared table served to all three apps (see contact/org note) |
| cdi | A B C | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| cna | A B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| ndb | A B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| nfp | A B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. CHM also supports `focalPoint` but archive documented A B only — scope decision to extend |
| general (document operations) | A B C O | drafted 2026-08-05, **restructured 2026-08-05**: only **Save Draft** is legacy (the v2013 publish step v2023 supersedes) — unlisted, `<LegacyNotice>`, linked from every create/update page. All other operations are **active and listed**: a "Document Operations" section (Drafts read/list/delete, Draft Locks, Draft/Document Securities, Document Validations, Document Versions) and a "Files & Attachments" section (Document Attachments, Temporary Files), both per app — they are `{uid}`-based/schema-agnostic so documented once per app. 9 topics × 4 apps via `general.ts` + `general-topic.vue`. Flags: specs use **generic `object` request/response bodies** (review if fuller shapes wanted); HEAD assumed for `exists` ops; `file-upload` "upload to user-defined URL" (PUT /) omitted |
| cp | A | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| cpc | A | drafted 2026-08-04, schemas **approved 2026-08-05**; publish set (create/update on v2023 + get/delete/list/search/fields). |
| cpp | A | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| ircc | A | drafted 2026-08-04, schemas **approved 2026-08-05**; publish set (create/update on v2023 + get/delete/list/search/fields). Archived `workflow.md` was the original v2023 publish page (ADR 0002); create/update now cover it |
| msr | A | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. `AbsMeasure` composite fields rendered as `object` — review |
| nmcc | A | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| pro | A | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| dec | B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| gene | B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. schema value `dnaSequence` |
| ira | B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| law | B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| lmo | B | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. `TranscriptElement[][]` rendered as `object[]` — review |
| national-report | O | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. **Archive bug flagged**: the archived field table's header names `nationalTarget7`; the realm config confirms `nationalReport7` — descriptor uses `nationalReport7`. Section* fields blank-typed → `object` |
| national-report-binary-indicator-data | O | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. `binaryResponse*` fields blank-typed in archive → `object` |
| national-report-indicator-data | O | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. `data` field blank-typed → `object` |
| national-target | O | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. `NationalIndicators[]` → `object[]`; `Lterm` → `term` (keeps `customValue`) |
| national-target-mapping | O | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. `referencePeriod` blank-typed → `object` |
| nbsap | O | drafted 2026-08-04, schemas **approved 2026-08-05**; read-only set (search/get/fields), matching the archive. |
| stakeholderCommitment | O | drafted 2026-08-04, schemas **approved 2026-08-05**; publish set (create/update on v2023 + get/delete/list/search/fields). Archive had get/list/delete/solr + workflow; create/update = v2023 publish |
| thesaurus | (global) | drafted 2026-08-05. **Design decision (approved): one global page per vocabulary**, not the archive's 146 per-record-type duplicates. 68 vocabularies under `/thesaurus/<slug>`, own generator (`thesaurus.ts`) + descriptor list (`swagger/vocabularies/`), global sidebar + top-nav link. Field-title `Term` links now resolve here. Flags: (1) 8 vocab pairs share one backend domain endpoint under different display names — kept as separate pages, review whether to merge; (2) `/thesaurus/terms/{id}` single-term shape used by one vocab, handled; (3) `abs-functions` vocabulary 404s on the dev API — dead vocabulary, no field links to it. **`Term`-field linking validated against the live API 2026-08-05**: fetched all 67 reachable vocab term lists, matched each field's example identifier to the vocabulary that contains it — 59 fields linked on unique matches (+ pre-existing), total ~67 `Term` fields now link to their vocabulary. **Left unlinked for the dedup review (flag 1):** 19 fields whose example identifier resolves to several vocabularies (jurisdiction/keywords/thematic-area fields sharing one backend domain across the duplicate pages) and 5 with stale example identifiers in no vocabulary (`gene`/`lmo`/`pro` traits, `cpc` `term-id-1`, `national-target` `additionalImplementationRequired`). **Per-CH thesaurus menu (2026-08-05):** each app's sidebar carries a "Thesaurus" section filtered to only the vocabularies that CH's record types link to (derived from the field `titleLink`s); the global `/thesaurus/` section + nav stay. **Link-correctness cleanup:** converted 8 leaked `clearingHouseBase('/thesaurus/cat/slug')` literals (the archive's real field→vocab links, captured verbatim by the converter) to global slugs; stripped 6 auto-links driven by placeholder example data (same dummy identifier reused across unrelated fields — e.g. `nfp` government/gender/organizationType all carried one GUID that happened to live only in `dna-sequence-family`). Residual risk: single-use placeholder identifiers that mislink but don't repeat aren't auto-detectable — spot-check at review. |

**Composite/blank types (review):** several ORT and ABS types had fields the
archive typed as composites (`Nagoya`, `Biosafety`, `IndicatorData`,
`AbsMeasure`, `NationalIndicators[]`, `TranscriptElement[][]`) or left blank.
These render as `object`/`object[]` placeholders in the field tables and
playground specs — accurate as "an object", but the sub-structure is not
documented. Each is flagged in its row above; the review gate decides whether
to model them out (dedicated custom types) or leave as `object`.

## Per-app getting-started pages (rebuild alongside early record types)

Each app had: `index`, `custom-types`, `realms`, `record-types`, `schemas`,
`user-management`, `apache-solr`. These are realm-agnostic prose — quick
reviews, but several rebuilt pages link to `custom-types` anchors, so schedule
them right after `contact`.

Decision: these stay **per-app pages built from a shared source** (same
mechanism as record pages) — each clearing house's section is self-contained
and links never leave the app's context.

Status: drafted 2026-07-30, **reviewed 2026-07-31** for all four apps. Shared
bodies live in `docs/components/getting-started/`; per-app pages include them
(`custom-types`, `realms`, `user-management`, `apache-solr`), while `index`
and `record-types` are hand-written per app. Deviations from the archive,
flagged not silently resolved:

- `schemas` page dropped — merged into `record-types` (one table: record
  type ↔ schema value). The archived `schemas.md` was ABS-specific content
  served identically to all four apps.
- `custom-types` documents only the types the rebuilt descriptors use;
  `lstring` documented as its JSON shape (`{ "en": … }`) — the archived
  table showed the backend-internal `SortedList mValues` representation,
  which contradicts every payload example.
- `user-management` keeps role descriptions but drops the archived
  per-role "Permissions" lists (realm configuration is the sole authority
  on authorization, per CONTEXT.md).
- `apache-solr`: archived escaping example (`1\+1:2`) didn't match its own
  prose — corrected; dropped the stale pinned GitHub link into the absch
  app source.
- `index` pages are new per-app landing pages (also fixes the home-page
  selector 404s).

## Foundation tasks (not record types)

- [x] Per-environment images (ADR 0001): CI selects `build` (master/tags) vs
      `build:dev` (all other branches); `BASE_PATH=/clearing-house/` baked as
      image ENV; `docker-entrypoint.sh` deleted.
- [x] Fetch realm configurations for all 4 apps × 2 environments once, to
      eyeball the undocumented-by-default remainder (scope only grows by
      explicit decision; the subset invariant is re-checked manually at each
      review gate). Snapshot below (2026-07-30).
- [x] `useClearingHouse().apiUrl` returns the bare API host; each endpoint
      generator owns its full versioned path. `API_EXTENSION` removed.
- [x] Generator set complete: `createSpec`/`updateSpec` on v2023 (ADR 0002),
      `getSpec`/`deleteSpec`/`listSpec` on v2013, `solrSpecs` emitting the
      five legacy variant blocks from one parameterized source.
- [x] Legacy-notice banner component built
      (`docs/components/common/legacy-notice.vue`).
- [ ] Endgame: drop redundant `swagger-ui` dep, unpin axios, multi-stage
      Docker image serving `dist/` via nginx, remove SwaggerUI.vue MutationObserver hacks.
- Parked (out of rebuild scope): `landing/` stays as-is; after parity, dedupe
  its hand-copied styling/GA config. Never hand-copy styles to match it.

## Realm configuration snapshot (2026-07-30)

Schemas per realm from `GET /api/v2018/realm-configurations/<app-host>`;
re-check live at each review gate — this is an eyeball reference, not a
source of truth.

- **ABS** (prod): absCheckpoint, absCheckpointCommunique,
  absNationalModelContractualClause, absNationalReport, absNationalReport1,
  absPermit, absProcedure, authority, capacityBuildingInitiative,
  communityProtocol, contact, database, focalPoint, measure,
  modelContractualClause, organization, resource.
  **ABS-DEV** additionally has: absLegalFramework, absMeasureStatus,
  capacityBuildingResource.
- **BCH / BCH-DEV** (identical): authority, biosafetyDecision,
  biosafetyExpert, biosafetyLaw, biosafetyNews, capacityBuildingInitiative,
  contact, countryProfile, cpbNationalReport1–5, cpbNationalReportInterim,
  database, dnaSequence, focalPoint, independentRiskAssessment,
  laboratoryDetection, modifiedOrganism, nationalRiskAssessment, organism,
  organization, resource, submission, supplementaryAuthority.
- **CHM** (prod): bbiContact, bbiOpportunity, bbiProfile, bbiRequest,
  capacityBuildingInitiative, capacityBuildingResource, contact, event,
  focalPoint, marineEbsa, nationalAssessment, nationalReport,
  nationalReport6, nationalTarget, nbsap, organization, resource,
  strategicPlanIndicator, submission, undbAction, undbActor, undbPartner,
  undbParty. **CHM-DEV**: adds action, drops bbiRequest.
- **ORT / ORT-DEV** (identical): nationalReport7,
  nationalReport7BinaryIndicatorData, nationalReport7IndicatorData,
  nationalTarget7, nationalTarget7Mapping, nbsap, stakeholderCommitment,
  stakeholderCredential.

Eyeball notes: `contact` is supported by ABS, BCH **and CHM** (both
environments) — the archived docs documented it for A B only; extending to
CHM was decided explicitly on 2026-07-30 (see the contact row above). The API returns realm values
uppercase (`ABS`, `ABS-DEV`); the docs use lowercase in the `Realm` header
as before. ORT's schema names carry a `7` suffix
(`nationalReport7`, `nationalTarget7`) relative to the tracker's row names.
