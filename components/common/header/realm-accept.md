The request must include the following headers:

| Field          | Type   | Description                        |
| -------------- | ------ | ---------------------------------- |
| Content-Type   | String | Indicates the format of the data being sent in the request body. This header specifies the media type and encoding of the request payload. The allowed value is `application/json`, meaning that the request body is formatted as JSON. This helps the server understand how to parse and interpret the incoming data. |
| Realm          | String | Defines the specific context or domain within which the Clearing-House request is being made. This header determines the environment or operational scope for the request. Allowed values include `ABS` (Access and Benefit-sharing Clearing-House), `CHM` (Central Clearing-House Mechanism), and `BCH` (Biosafety Clearing-House). Each value represents a different area of functionality or service. |
| Accept         | String | Specifies the format in which the client prefers to receive the response data. This header informs the server of the desired response format to ensure compatibility with the client’s data processing. The allowed value is `application/json`, indicating that the client expects the response to be formatted in JSON. This ensures the response data is structured in a way that the client can properly handle and interpret. |


**Realm Values for Development:**

- **`ABS-DEV`**: Represents the development environment for ABS (Access and Benefit-sharing Clearing-House). Use this value when testing or developing features related to ABS in a non-production setting.
- **`BCH-DEV`**: Indicates the development environment for BCH (Biosafety Clearing-House). This value is used for testing or development purposes related to BCH functionalities.
- **`CHM-DEV`**: Specifies the development environment for CHM (Central Clearing-House Mechanism). This realm is used when working on features or testing in the CHM context within a development environment.