The request body should be a JSON object containing the following fields:

| Field           | Type          | Description   | Required |
| --------------- | ------------- | ------------- | -------- |
| `document`      | Object        | The schema object that represents the body of the record type. For example, the [IRCC schema](/abs/ircc/schema). | Yes      |
| `additionalInfo`| String        | Additional information related to the document. This field can hold a maximum of 1000 characters. <br><br>**Note:** This field is available only when a user with the NAU role is submitting a request to the PA to publish a record.    | No       |
| `batchId`       | String        | An optional identifier for batching multiple records together for publishing. Maximum of 100 characters. | No       |