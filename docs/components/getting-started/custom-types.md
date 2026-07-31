# Custom Types

Composite field types used in the record-type field tables. Simple fields are `string` (plain text), `string[]` (a list of strings) and `lstring` (localized text, see below); the composite types are described here. This list grows as record types are migrated — types used only by not-yet-documented record types are not listed.

## Header

Every record carries a `header` object identifying the record and its record type.

| Variable | Type | Description |
| --- | --- | --- |
| `identifier` | `string` | Identifier of the record. |
| `schema` | `string` | The record type, e.g. `contact`. |
| `languages` | `string[]` | Languages the record is provided in, e.g. `["en"]`. |

```json
{ "identifier": "068C83BA-995F-08C3-50CE-AD43545B3EB5", "schema": "contact", "languages": ["en"] }
```

## Term

A reference to a term of a controlled vocabulary (thesaurus).

| Variable | Type | Description |
| --- | --- | --- |
| `identifier` | `string` | Identifier of the term. |

```json
{ "identifier": "86D464C3-B5BB-4B02-85E4-1AAD8D64CD27" }
```

## Reference

A reference to another record.

| Variable | Type | Description |
| --- | --- | --- |
| `identifier` | `string` | Identifier of the referenced record, optionally revision-qualified with `@<revision>`. |

```json
{ "identifier": "SIMP-22D52282-2FB2-AD2A-2965-476DFF6A7F37@1" }
```

## Link

A link to an external resource. Fields of type `link[]` carry a list of these.

| Variable | Type | Description |
| --- | --- | --- |
| `url` | `string` | The address of the resource. |
| `name` | `string` | Optional display name. |
| `tags` | `string` | Optional tags. |

```json
{ "url": "http://www.example.com" }
```

## lstring

A localized string: an object keyed by language code.

```json
{ "en": "Cambridge" }
```
