The following query parameters can be used to refine the request:

| Field      | Type   | Description             |
|------------|--------|-------------------------|
| schema     | String | Defines the schema or format of the record being posted. This field specifies the type of record and the structure it adheres to. The `schema` value helps the system understand how to interpret and validate the incoming data. It ensures that the record conforms to a predefined format or standard, facilitating consistency and compatibility across different parts of the system. The `schema` value typically corresponds to a specific schema definition or type that dictates the required fields, data types, and constraints for the record. |
| identifier | String | Specifies the unique identifier for the record. This `identifier` is used to locate, retrieve, update, or delete the record within the system. It ensures that each record can be uniquely referenced, supporting precise operations on specific records and avoiding conflicts with other records. |
