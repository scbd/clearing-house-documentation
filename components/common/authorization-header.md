## Headers

The headers required for making a request to this endpoint are detailed below. These headers are necessary for authentication, specifying the context, and defining the format of the request and response.

| Field            | Type     | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Authorization &nbsp;&nbsp;&nbsp;    | String &nbsp;   | Token to use to authenticate the request                                           |
| Realm (optional) | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM` |
| Accept           | String | Result format. Allowed values: `application/json`                                 |

Headers required to authenticate and define the context and format of the request and response. The `Authorization` header must contain a valid token, while the `Content-Type` and `Accept` headers specify the format of the document and response, respectively. [Here are the steps to get the Authorization token](/user/authentication).