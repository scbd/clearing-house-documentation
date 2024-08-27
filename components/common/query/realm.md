The request must include the following query parameters:

| Field          | Type   | Description                        |
| -------------- | ------ | ---------------------------------- |
| Realm          | String | Defines the specific context or domain within which the Clearing-House request is being made. This header determines the environment or operational scope for the request. Allowed values include `abs` (Access and Benefit-sharing Clearing-House), `chm` (Central Clearing-House Mechanism), and `bch` (Biosafety Clearing-House). Each value represents a different area of functionality or service. |


**Realm Values for Development:**

- **`abs-dev`**: Represents the development environment for ABS (Access and Benefit-sharing Clearing-House). Use this value when testing or developing features related to ABS in a non-production setting.
- **`bch-dev`**: Indicates the development environment for BCH (Biosafety Clearing-House). This value is used for testing or development purposes related to BCH functionalities.
- **`chm-dev`**: Specifies the development environment for CHM (Central Clearing-House Mechanism). This realm is used when working on features or testing in the CHM context within a development environment.