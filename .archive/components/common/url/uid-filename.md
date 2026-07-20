The following URL parameter is required:

| Field     | Type   | Description         |
| --------- | ------ | -------------------- |
| uid       | String | A unique identifier for the record. This value is case-sensitive and is used to uniquely identify and retrieve the specific record. The identifier must conform to the pattern `/^[A-Za-z0-9\-_]{11,128}$/`, meaning it can include uppercase and lowercase letters, numbers, hyphens, and underscores, with a length between 11 and 128 characters. This ensures that each record has a distinct and valid ID. |
| filename  | String | The name of the file that needs to be checked for existence. This field specifies the file name to verify if it is present in the system or storage. It should be formatted correctly and include the appropriate file extension if necessary. The check will determine whether the file with the specified name exists or not, which is useful for file management and validation purposes. |
