<!--@include: ../common/header-authorization-realm.md-->

## Query Parameters

| Field  | Type   | Description                                               |
| ------ | ------ | --------------------------------------------------------- |
| schema | String | Specify the document common-format posted (type / schema) |

Query parameters provide additional options for the request. The `schema` parameter defines the type of document being posted.

## URL Parameters

| Field | Type   | Description                                                                                   |
| ----- | ------ | --------------------------------------------------------------------------------------------- |
| uid   | String &nbsp; | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |


<!--@include: ../common/validation-error.md-->

## Request Body

<!--@include: ./request-body.md-->
