# Custom Types

## Term

| Type       | Variable     |
|------------|--------------|
| `string`   | `identifier` |
| `lstring`  | `customValue`|

## Header

| Type        | Variable   |
|-------------|------------|
| `string`    | `identifier`|
| `string`    | `schema`    |
| `string[]`  | `languages` |

## Reference

| Type       | Variable     |
|------------|--------------|
| `string`   | `identifier` |

## Link

| Type       | Variable     |
|------------|--------------|
| `string`   | `url`        |
| `string`   | `name`       |
| `string`   | `tags`       |

## lstring

| Type                             | Variable     |
|----------------------------------|--------------|
| `SortedList<string, string>`     | `mValues`    |

## Assessment

| Type       | Variable        |
|------------|-----------------|
| `string`   | `identifier`    |
| `string`   | `level`         |
| `lstring`  | `justification` |

## MapLocation

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

## GeneticResourceElements

| Type       | Variable     |
|------------|--------------|
| `Term[]`      | `types`    | 
| `Term[]`   | `areas`      | 
| `lstring`   | `section`      | 


## GeneticResource

| Type       | Variable     |
|------------|--------------|
| `bool`      | `answer`    | 
| `EGeneticResourceElements[]`   | `elements`      | 


## AbsMeasure

| Type       | Variable     |
|------------|--------------|
| `EGeneticResource`      | `geneticResources`    | 
| `ETermSection[]`   | `relevantElements`      | 

## AmendmentIntent

Enum values:
- `New`
- `Update`
- `Revoke`
