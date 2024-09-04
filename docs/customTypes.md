# Custom Types

## ETerm

| Type       | Variable     |
|------------|--------------|
| `string`   | `identifier` |
| `lstring`  | `customValue`|

## EHeader

| Type        | Variable   |
|-------------|------------|
| `string`    | `identifier`|
| `string`    | `schema`    |
| `string[]`  | `languages` |

## EReference

| Type       | Variable     |
|------------|--------------|
| `string`   | `identifier` |

## ELink

| Type       | Variable     |
|------------|--------------|
| `string`   | `url`        |
| `string`   | `name`       |
| `string`   | `tags`       |

## lstring

| Type                             | Variable     |
|----------------------------------|--------------|
| `SortedList<string, string>`     | `mValues`    |

## EAssessment

| Type       | Variable        |
|------------|-----------------|
| `string`   | `identifier`    |
| `string`   | `level`         |
| `lstring`  | `justification` |

## EMapLocation

| Type       | Variable     |
|------------|--------------|
| `int`      | `zoom`       |
| `double`   | `lat`        |
| `double`   | `lng`        |

## TranscriptElement

| Type       | Variable     |
|------------|--------------|
| `string`      | `type`    | 
| `decimal`   | `size`      | 

## AmendmentIntent

Enum values:
- `New`
- `Update`
- `Revoke`
