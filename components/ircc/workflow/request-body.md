The request body should be a JSON object containing the following fields:

| Field           | Type          | Description   | Required |
| --------------- | ------------- | ------------- | -------- |
| `document`      | Object        | The schema object that represents the document being submitted. For example, the [IRCC schema](/ircc/schema). | Yes      |
| `additionalInfo`| String        | Additional information related to the document. This field can hold a maximum of 1000 characters.    | No       |
| `batchId`       | String        | An optional identifier for batching multiple records together for publishing. Maximum of 100 characters. | No       |