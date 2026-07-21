# 1. Per-environment builds selected by branch

Date: 2026-07-20

## Status

Accepted

## Context

The documentation site has one deployment per environment (production
`cbd.int`, development `cbddev.xyz`), and the two environments have
incompatible authentication tokens, separate realm configurations, and
different realm values (`abs` vs `abs-dev`). Site configuration comes from
`VITE_*` variables, which Vite inlines **at build time**; VitePress
additionally prerenders environment-derived content (realm values, playground
banners) into static HTML. The previous setup passed `VITE_*` values as
runtime container env vars, which are inert — every image silently fell back
to production URLs, so the dev docs site's playground pointed at the
production API, where dev tokens do not work.

Two designs were considered:

1. **Per-environment images**: CI builds one image per environment
   (`npm run build` for prod, `npm run build:dev` for dev).
2. **One image with runtime substitution**: extend the `__BASE_PATH__`
   sed-rewrite in `docker-entrypoint.sh` to all six URLs.

Runtime substitution fails on prerendering: placeholder values would have to
survive `new URL()` parsing during the build and sed would need to rewrite
*derived* strings (like the realm `abs-dev`) scattered through minified
bundles, not just verbatim URLs. It is the same class of fragile hack this
rebuild is retiring.

## Decision

CI builds a separate image per environment, selected by branch: the `dev`
branch runs `build:dev` (dev-environment URLs), `master` runs the production
build. Only `BASE_PATH` remains runtime-substituted by the entrypoint.

## Consequences

- The dev and prod docs sites are different images; "build once, deploy
  anywhere" does not apply to this repo, and an image must never be promoted
  across environments.
- CI gains one build per pushed branch that deploys; build time roughly
  doubles per release (acceptable at current page counts).
- All environment-derived content (realm values, API hosts, banners) is
  trustworthy in the rendered HTML because it is baked consistently at build
  time.
- The `VITE_*` values must be available to CI at build time (they are public
  hostnames, not secrets); how they are supplied is a follow-up decision.
