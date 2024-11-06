The following query parameters can be used to refine the request:

| Field      | Type   | Description             |
|------------|--------|-------------------------|
| schema     | String | Defines the schema or format of the document being posted. This field specifies the type of document and the structure it adheres to. The `schema` value helps the system understand how to interpret and validate the incoming data. It ensures that the document conforms to a predefined format or standard, facilitating consistency and compatibility across different parts of the system. The `schema` value typically corresponds to a specific schema definition or type that dictates the required fields, data types, and constraints for the document. |
| identifier | String | Specifies the unique identifier for the document. This `identifier` is used to locate, retrieve, update, or delete the document within the system. It ensures that each document can be uniquely referenced, supporting precise operations on specific records and avoiding conflicts with other documents. |
