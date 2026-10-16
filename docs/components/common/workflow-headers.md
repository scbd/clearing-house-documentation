| Header | Required | Description |
| --- | --- | --- |
| `Content-Type` | Yes | Media type of the request body. The allowed value is `application/json`. |
| `Authorization` | Yes | Bearer token authenticating the request (`Bearer <token>`). Obtain it from the [User - Authentication](../user/authentication) endpoint. |
| `Accept` | No | Format the client expects in the response. The allowed value is `application/json`. |
| `Realm` | No | The Clearing-House context. May be sent here instead of the `realm` query parameter. |
