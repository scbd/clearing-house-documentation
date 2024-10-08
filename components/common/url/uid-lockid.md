The following URL parameter is required:

| Field   | Type   | Description                                                                                           |
| ------- | ------ | ----------------------------------------------------------------------------------------------------- |
| uid     | String | A unique identifier for the document. This value is case-sensitive and must match the regular expression `/^[A-Za-z0-9\-_]{11,128}$/`. This means it can include uppercase and lowercase letters, numbers, hyphens, and underscores, with a length ranging from 11 to 128 characters. The `uid` is used to uniquely identify and retrieve a specific document, ensuring that each document can be individually referenced and managed. |
| lockID  | String | A unique identifier for a lock associated with the document. This value is used to track and manage locks, which may be used for document access control or synchronization. The `lockID` helps in identifying the specific lock instance and ensuring that operations on the document are coordinated properly, preventing conflicts and ensuring consistency in access. |
