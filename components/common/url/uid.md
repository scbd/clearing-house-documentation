The following URL parameter is required:

| Field | Type   | Description                                                                                   |
| ----- | ------ | --------------------------------------------------------------------------------------------- |
| uid   | String | A unique identifier for the record. This value is case-sensitive and must conform to the regular expression `/^[A-Za-z0-9\-_]{11,128}$/`. This pattern allows for a combination of uppercase and lowercase letters, numbers, hyphens, and underscores, with a length ranging from 11 to 128 characters. The `uid` is crucial for uniquely identifying and retrieving the record within the system, ensuring that each record can be distinctly referenced and managed. It plays a key role in operations such as fetching, updating, or deleting the record, as well as in maintaining the integrity of record management processes. |
