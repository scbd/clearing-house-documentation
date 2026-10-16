# 3. v2023 is the primary generation; v2013 stays browsable as legacy backup

Date: 2026-07-31

## Status

Accepted. Extends ADR 0002.

## Context

SCBD wants integrators steered to the 2023 generation of the API wherever it
exists, with the 2013 documentation kept as a browsable backup for existing
integrators. What the 2023 generation actually covers had not been
established, so the development API (`api.cbddev.xyz`) was probed on
2026-07-31:

- `POST /api/v2023/documents/schemas/:schema` and
  `PUT /api/v2023/documents/schemas/:schema/:identifier` exist — the
  single-call publishing workflow (ADR 0002).
- Every other probed shape is absent: `GET /api/v2023/documents`,
  `GET /api/v2023/documents/:uid` and `GET /api/v2023/index` return
  404 `Cannot GET`. On the schemas route itself, GET and DELETE fail the
  **publish body validation** (`"document is required"`) — all methods
  funnel into the publishing handler; there are no read, delete, list or
  search routes on v2023.
- The archive corroborates: across the entire legacy site, the only v2023
  endpoints ever documented were workflow create/update (ABS IRCC, ORT
  stakeholder-commitment).

The v2023 generation currently provides exactly one capability:
single-call publishing.

## Decision

- v2023 is the **primary documented generation for every operation it
  supports**. Today that is create and update — already the case per
  ADR 0002.
- Operations with **no v2023 equivalent** — get, delete, list, Solr search,
  authentication — are documented on their v2013 endpoints as the primary
  (and only) way, carrying **no legacy label**: nothing newer exists to
  point to.
- "Legacy" means specifically the v2013 **multi-call publishing chain**,
  which v2023 single-call publishing supersedes. It is documented once per
  app, published but unlisted (ADR 0002 amendment), and every create and
  update page links to it so existing v2013 integrators can browse it.
- When the backend grows a v2023 equivalent for any remaining operation,
  the affected primary pages switch to v2023 and their v2013 documentation
  moves into the per-app legacy reference. Re-probe at each record type's
  review gate costs nothing extra: the gate already checks the live API.

## Consequences

- No page changes today: create/update already document v2023, and every
  other documented operation has no alternative generation.
- The per-app legacy publishing-flow pages (the `general` row in
  REBUILD.md) become the single home of v2013 publishing; create/update
  pages gain their legacy link when those pages are built.
- The docs never present a v2013 endpoint as deprecated or legacy unless a
  v2023 replacement actually exists — read-side v2013 endpoints are
  presented plainly.
