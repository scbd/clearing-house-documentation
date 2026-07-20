The request must include the following headers:

| Field         | Type   | Description                    |
| ------------- | ------ | ------------------------------ |
| Authorization | String | Contains the token used for authenticating the request. This header is crucial for accessing protected resources and services. It typically holds a bearer token or other authentication credentials that the server uses to verify the identity of the client making the request. Ensure that the token is valid and kept confidential. |
| Accept        | String | Specifies the desired format for the response from the server. The allowed value is `"application/json"`, which means the client expects the response data to be formatted in JSON. This header helps the server understand how to structure the response to meet the client's expectations and ensure compatibility with the client's data handling mechanisms. |
