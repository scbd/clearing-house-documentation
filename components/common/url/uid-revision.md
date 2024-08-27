The following URL parameter is required:

| Field      | Type   | Description                                                                                           |
|------------|--------|-------------------------------------------------------------------------------------------------------|
| uid        | String | A unique identifier for the document. This value is case-sensitive and must adhere to the pattern `/^[A-Za-z0-9\-_]{11,128}$/`, which allows uppercase and lowercase letters, numbers, hyphens, and underscores, with a length between 11 and 128 characters. The `uid` ensures that each document can be uniquely identified and referenced within the system, allowing for precise document retrieval and management. |
| revision   | Number | The revision number of the document, used to track changes and updates. This number must be a positive integer (1 or greater). Each revision represents a different version of the document, enabling version control and history tracking. The `revision` field helps in managing document updates, ensuring that users and systems can identify and work with specific versions of the document. |
