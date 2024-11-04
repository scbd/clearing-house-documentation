### POST Request Error
When using the `POST` method, if a draft record ID or document record ID with the provided identifier already exists, a `400 Bad Request` error will be returned.

| Status Code | Error Message                                                                                   |
|-------------|-------------------------------------------------------------------------------------------------|
| 400         | A document with the identifier exists, please use a different 'identifier'.                    |

### PUT Request Error
When using the `PUT` method, if neither a draft record ID nor a document record ID with the provided identifier exists, a `400 Bad Request` error will be returned.

| Status Code | Error Message                                                                                   |
|-------------|-------------------------------------------------------------------------------------------------|
| 400         | A document with the identifier does not exist, please provide correct 'identifier' to update.  |

