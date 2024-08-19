The request must include the following query parameters:

| Field          | Type   | Description                        |
| -------------- | ------ | ---------------------------------- |
| Realm          | String | Defines the specific context or domain within which the Clearing-House request is being made. This header determines the environment or operational scope for the request. Allowed values include `ABS` (Automated Banking Systems), `CHM` (Clearing House Management), and `BCH` (Bank Clearing House). Each value represents a different area of functionality or service. |


**Realm Values for Development:**

- **`ABS-DEV`**: Represents the development environment for ABS (Automated Banking Systems). Use this value when testing or developing features related to ABS in a non-production setting.
- **`BCH-DEV`**: Indicates the development environment for BCH (Bank Clearing House). This value is used for testing or development purposes related to BCH functionalities.
- **`CHM-DEV`**: Specifies the development environment for CHM (Clearing House Management). This realm is used when working on features or testing in the CHM context within a development environment.