The request body is a JSON object with three top-level fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `document` | Object | Yes | The record itself — the fields listed below, wrapped in a `document` object (its `header` plus the record-type fields). |
| `additionalInfo` | String | No | Up to 1000 characters. Available only when a user with the NAU role submits a request to the Publishing Authority (PA) to publish a record. |
| `batchId` | String | No | Up to 100 characters. Batches multiple records together for publishing. |
