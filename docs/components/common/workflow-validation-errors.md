When the `document` fails validation, the issues are returned in the `errors`
property of the response (with HTTP 200). Each entry names the error `code` and
the `property` it applies to:

```json
{
  "identifier": "DECLARE-ORGANISATION_5885_20241031144831187",
  "errors": [
    { "code": "Error.Mandatory", "property": "government" }
  ]
}
```

| Error Type | Description |
| --- | --- |
| `Error.Mandatory` | A required field is missing. |
| `Error.MandatoryAnyOf` | At least one field from a set of mandatory fields is missing. |
| `Error.InvalidValue` | The provided value is not valid according to the schema. |
| `Error.InvalidProperty` | An invalid property or field name. |
| `Error.UnspecifiedLocale` | A locale or language code is missing or invalid. |
| `Error.UnexpectedTerm` | An unexpected term or parameter. |
| `Error.InvalidType` | The provided data type is not valid. |
