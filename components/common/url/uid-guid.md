The following URL parameter is required:

| Field     | Type   | Description         |
| --------- | ------ | -------------------- |
| uid       | String | A unique identifier for the document. This value is case-sensitive and is used to uniquely identify and retrieve the specific document. The identifier must conform to the pattern `/^[A-Za-z0-9\-_]{11,128}$/`, meaning it can include uppercase and lowercase letters, numbers, hyphens, and underscores, with a length between 11 and 128 characters. This ensures that each document has a distinct and valid ID. |
| guid      | String | The unique identifier for the attached file. It follows the same pattern as the "uid" and should be between 11 and 128 characters, including letters, numbers, hyphens, and underscores. |
