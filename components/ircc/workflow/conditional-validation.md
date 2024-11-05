### POST Request Error
When using the `POST` method, If a record with the unique identifier already exists, a `400 Bad Request` error will be returned. To update an existing record, please use the HTTP `PUT` method instead.

| Status Code | Error Message                                                                                   |
|-------------|-------------------------------------------------------------------------------------------------|
| 400         | A document with the identifier exists, please use a different 'identifier'.                    |

### PUT Request Error
When using the `PUT` method, If a record with the unique identifier does not exists, a `400 Bad Request` error will be returned. To create a record, please use the HTTP `POST` method instead.

| Status Code | Error Message                                                                                   |
|-------------|-------------------------------------------------------------------------------------------------|
| 400         | A document with the identifier does not exist, please provide correct 'identifier' to update.  |

