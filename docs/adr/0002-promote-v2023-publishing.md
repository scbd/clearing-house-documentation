# 2. Promote v2023 single-call publishing over the v2013 workflow

Date: 2026-07-21

## Status

Accepted

## Context

Publishing a record through the v2013 API requires a chain of roughly five
calls (check document ID/lock, create securities, validate, save draft,
initiate workflow). A newer endpoint introduced in 2023 —
`POST /api/v2023/documents/schemas/:schema/:identifier?` and
`PUT /api/v2023/documents/schemas/:schema/:identifier` — performs the whole
publishing workflow in a single call. It was first used in the ORT
stakeholder-commitment and ABS IRCC documentation and is now available for
every record type in every realm. Both endpoint generations remain in service;
SCBD wants new integrators steered to v2023.

## Decision

- Every rebuilt **create** and **update** page documents the **v2023**
  endpoint. The contact prototype generator (which targeted
  `POST /api/v2013/documents`) is redone against v2023 before its review.
- Read-side operations (**get, list, solr**) continue to document their
  existing v2013 endpoints. Mixed versions per page are expected and fine:
  each endpoint generator owns its full versioned path (see ADR 0001 era
  decision — no global API version).
- The v2013 multi-call publishing chain (drafts, securities, locks,
  validation) is documented **once per app** as a legacy publishing-flow
  reference — never again per record type.

## Consequences

- New integrators see one call to publish, which is the promoted path;
  existing v2013 integrators still find the legacy flow documented, in one
  place per app.
- The rebuild's per-record-type effort shrinks: create/update need one
  v2023 generator pair instead of documenting the five-step chain per type.
- If the backend ever retires v2013 publishing, only the per-app legacy
  reference pages are deleted; record-type pages are untouched.
- Descriptors are unaffected: fields are endpoint-version-agnostic; only
  the generators encode versions.
