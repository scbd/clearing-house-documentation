| Error Type             | Description                           |
| ---------------------- | ------------------------------------- |
| Error.MissingRealmParam     | `realm` param is missing, please provide valid realm in querystring      |
| Error.RealmNotConfigured      | Realm ${realm} is not configured, please provide valid realm.          |
| Error.SchemaNotConfigured     | Schema not configured for the given realm ${realm}.                    |
| Error.AuthorizationRequired   | 403: Authorization required, user is anonymous.                        |
| Error.IdentifierExists        | A document with the identifier exists, please use a different 'identifier'.                  |
| Error.IdentifierNotExists     | A document with the identifier does not exist, please provide correct 'identifier' to update.|
| Error.RecordLocked            | The record is locked for workflow, cannot proceed.                                           |
| Error.InsufficientRightsUpdate| Insufficient rights to update the draft record.                                              |
| Error.InsufficientRightsCreate| Insufficient rights to create a draft record.                                                |