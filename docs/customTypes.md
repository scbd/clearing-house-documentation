# Custom Types

## ETerm

| Type       | Variable     | Required |
|------------|--------------|----------|
| `string`   | `identifier` | Yes      |
| `lstring`  | `customValue`| No       |

## EHeader

| Type        | Variable   | Required |
|-------------|------------|----------|
| `string`    | `identifier`| Yes     |
| `string`    | `schema`    | Yes     |
| `string[]`  | `languages` | No      |

## EReference

| Type       | Variable     | Required |
|------------|--------------|----------|
| `string`   | `identifier` | Yes      |

## ELink

| Type       | Variable     | Required |
|------------|--------------|----------|
| `string`   | `url`        | Yes      |
| `string`   | `name`       | No       |
| `string`   | `tags`       | No       |

## lstring

| Type                             | Variable     | Required |
|----------------------------------|--------------|----------|
| `SortedList<string, string>`     | `mValues`    | Yes      |

## EAssessment

| Type       | Variable        | Required |
|------------|-----------------|----------|
| `string`   | `identifier`    | No       |
| `string`   | `level`         | No       |
| `lstring`  | `justification` | No       |

## EMapLocation

| Type       | Variable     | Required |
|------------|--------------|----------|
| `int`      | `zoom`       | No       |
| `double`   | `lat`        | No       |
| `double`   | `lng`        | No       |

## AmendmentIntent

Enum values:
- `New`
- `Update`
- `Revoke`
