The following query parameters can be used to refine the request:

| Field   | Type   | Description                                                                                          |
| ------- | ------ | ---------------------------------------------------------------------------------------------------- |
| filter  | String | Optional. The `$filter` system query option enables clients to specify criteria for filtering the results of a query. This allows for retrieving only those resources that meet certain conditions or constraints. For example, you can use `$filter` to return only items that have a specific property value or that fall within a certain range. For detailed usage and examples, refer to the [OData $filter documentation](https://www.odata.org/documentation/odata-v4/uri-conventions/#filter-system-query-option). |
| orderby | String | Optional. The `$orderby` system query option allows clients to sort the results of a query based on one or more properties. By specifying this option, you can control the order in which resources are returned, such as sorting by date, name, or any other attribute. This helps in organizing the results in a meaningful way according to the specified criteria. For detailed usage and examples, refer to the [OData $orderby documentation](https://www.odata.org/documentation/odata-v4/uri-conventions/#orderby-system-query-option). |
| top     | String | Optional. The `$top` system query option limits the number of items returned in the result set. This is useful for pagination or for retrieving a subset of the total results, such as getting the top N records. For example, specifying `$top=10` would return only the first 10 items of the queried collection. For detailed usage and examples, refer to the [OData $top documentation](https://www.odata.org/documentation/odata-v4/uri-conventions/#top-system-query-option). |
| skip    | String | Optional. The `$skip` system query option specifies the number of items to be skipped from the beginning of the result set. This is commonly used in conjunction with `$top` to implement pagination, where you can skip a certain number of records and then return the next set. For example, specifying `$skip=20` would skip the first 20 items and return the subsequent items from the query. For detailed usage and examples, refer to the [OData $skip documentation](https://www.odata.org/documentation/odata-v4/uri-conventions/#skip-system-query-option). |