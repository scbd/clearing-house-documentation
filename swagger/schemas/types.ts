// A schema descriptor is the single source of truth for one record type in one
// app (realm): it drives BOTH the request-body table in the docs page and the
// generated OpenAPI spec for the playground.

export type FieldType = 'string' | 'lstring' | 'string[]' | 'term' | 'reference' | 'link[]'

export interface Field {
  /** Human-readable label shown in the request-body table. */
  title: string
  type: FieldType
  mandatory?: boolean
  /** Example value in the field's natural JSON shape (e.g. { en: 'Cambridge' }). */
  example?: unknown
  /** Optional docs path the title links to (e.g. a thesaurus page). */
  titleLink?: string
}

export interface SchemaDescriptor {
  /** Value of the `schema` query-string parameter. */
  schema: string
  /** Display name, e.g. 'Contact'. */
  name: string
  /** One-line description used in the spec info block. */
  description: string
  /** Request-body fields, in display order. The `header` field is implicit. */
  fields: Record<string, Field>
}
