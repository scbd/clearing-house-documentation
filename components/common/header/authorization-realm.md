The request must include the following headers:

| Field            | Type    | Description                                |
| ---------------- | ------- | ------------------------------------------ |
| Content-Type     | String  | Specifies the media type of the request body. This header indicates the format of the data being sent to the server. The allowed value is `application/json`, which means the request body is formatted as JSON. This helps the server understand how to parse and process the incoming data. |
| Authorization    | String  | Provides the token used to authenticate the request. This header is essential for identifying and verifying the client making the request. The token should be included in the header to gain access to protected resources or services. Ensure that the token is kept secure and is valid for the requested operation. |
| Realm            | String  | Defines the specific context or environment in which the Clearing-House request is being made. The allowed values are `abs`, `chm`, and `bch`, each representing different operational contexts. This helps the server route the request appropriately based on the specified realm. |
| Accept           | String  | Specifies the format in which the client expects the server to return the response data. The allowed value is `application/json`, indicating that the client prefers the response in JSON format. This informs the server of the desired response format, ensuring that the client receives data in a readable and expected format. |

**Realm Values for Development:**

- **`abs-dev`**: Represents the development environment for ABS (Access and Benefit-sharing Clearing-House). Use this value when testing or developing features related to ABS in a non-production setting.
- **`bch-dev`**: Indicates the development environment for BCH (Biosafety Clearing-House). This value is used for testing or development purposes related to BCH functionalities.
- **`chm-dev`**: Specifies the development environment for CHM (Central Clearing-House Mechanism). This realm is used when working on features or testing in the CHM context within a development environment.


Headers required to authenticate and define the context and format of the request and response. The `Authorization` header must contain a valid token, while the `Content-Type` and `Accept` headers specify the format of the document and response, respectively. [Here are the steps to get the Authorization token](/abs/user/authentication).