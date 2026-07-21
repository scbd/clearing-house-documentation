# Domain Glossary

Canonical language for the SCBD clearing-house API documentation. Terms are
defined here as the team uses them; code and docs should follow this language.

## Clearing House

One of the four applications built on the shared SCBD API: the ABS
Clearing-House (**ABS**), the Biosafety Clearing-House (**BCH**), the
Clearing-House Mechanism (**CHM**) and the Online Reporting Tool (**ORT**).
All clearing houses use the same API endpoints; they differ in which record
types they support and the rules applied to them. Each has its own section of
the documentation site and must present its record types under its own
identity.

## Realm

The value of the `Realm` HTTP header that tells the backend which clearing
house context a request is made in. Realm values are environment-qualified:
`abs`, `bch`, `chm`, `ort` in production; `abs-dev`, `bch-dev`, `chm-dev`,
`ort-dev` in the development environment. A realm is *not* the same thing as a
clearing house: the clearing house is the application; the realm is the
context identifier for one environment of it.

## Realm Configuration

Backend-owned configuration for a realm, fetched from the API
(`realm-configurations`). It defines which record types the realm supports,
which roles exist in it, and the roles authorized to act on each record type.
It is the sole authority on authorization: documentation never records who
may publish a record type — that is always read from the realm configuration. It is the validator for documentation scope: every
documented record type MUST be supported by the realm configuration of the
clearing house it is documented under. The reverse does not hold — a realm
configuration may support record types that are deliberately not documented.

## Documentation Scope

The set of record types documented for a clearing house. Curated by SCBD:
record types are undocumented by default and enter the scope only by explicit
decision, never automatically because a realm configuration supports them.
The realm configuration validates the scope (see Realm Configuration) but
never generates it.

## Record Type

A kind of record that can be published through the shared documents API, e.g.
`contact`, `org`, `lmo`. Identified in API calls by the `schema` query
parameter. A record type can exist in several clearing houses with
overlapping but different fields; each clearing house's version of a record
type is documented separately under that clearing house's identity.

## Schema

The `schema` query parameter of the documents API, whose value names the
record type being operated on (e.g. `?schema=contact`). The bare word
"schema" is reserved for this meaning alone. A record type's field structure
is called its **fields**; the reviewed, per-clearing-house definition of those
fields is a **schema descriptor** (see below); prose never uses "schema" for
either.

## Schema Descriptor

The curated definition of one record type's fields as documented for one
clearing house: for each field its title, type, whether it is mandatory, and
an example. Schema descriptors are the reviewed artifact of the rebuild —
one per record type per clearing house (composed from a shared base where
clearing houses genuinely coincide) — and are the single source from which
both the human-readable field table and the playground specification are
produced.

## Publishing Workflow

The sequence a record goes through to be published: identifier/lock check,
security creation, validation, draft save, workflow initiation. The 2023
generation of the API executes the whole workflow in a single create or
update call, and is the promoted way to publish. The 2013 generation exposes
the individual steps as separate endpoints and remains in service as the
legacy publishing flow.

## Environment

One of the two deployments of the API and of the documentation site:
**production** (`api.cbd.int`) and **development** (`api.cbddev.xyz`). Each
environment has its own realm configurations, roles and authentication
tokens; tokens from one environment are not valid in the other.
