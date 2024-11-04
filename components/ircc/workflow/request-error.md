| Status Code             | Description                           |
| ---------------------- | ------------------------------------- |
| 400     | `realm` param is missing, please provide valid realm in querystring or httpHeaders      |
| 400     | Realm is not configured, please provide valid realm.          |
| 400     | Schema not configured for the given realm ${realm}.                    |
| 400     | A document with the identifier exists, please use a different 'identifier'.                  |
| 400     | A document with the identifier does not exist, please provide correct 'identifier' to update.|
| 400     | The record is locked for workflow, cannot proceed.                                           |
| 403 | Insufficient rights to update the draft record.                                              |
| 403 | Insufficient rights to create a draft record.                                                |
| 403   | Authorization required, user is anonymous.                        |