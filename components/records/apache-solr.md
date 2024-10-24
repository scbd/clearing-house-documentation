# Apache Solr 

## Query Syntax: Escaping Special Characters

For comprehensive details on escaping special characters in Solr queries, please refer to the [Apache Solr documentation](https://solr.apache.org/guide/7_3/the-standard-query-parser.html#escaping-special-characters).
<br>
<br>

When constructing queries in Apache Solr, certain characters are reserved and have special meanings. To ensure these characters are treated as literal characters rather than operators or syntax elements, you need to escape them properly.

### Special Characters in Solr Queries

The following characters have special meanings in Solr queries:

- `+` (plus sign)
- `-` (minus sign)
- `&&` (AND operator)
- `||` (OR operator)
- `!` (NOT operator)
- `(` and `)` (parentheses for grouping)
- `{` and `}` (braces)
- `[` and `]` (brackets)
- `^` (boosting)
- `"` (double quotes for phrases)
- `~` (fuzzy search)
- `*` (wildcard)
- `?` (single character wildcard)
- `:` (colon for field queries)
- `/` (slash for path queries)

### How to Escape Special Characters

To ensure that Solr interprets these special characters literally in your queries, precede each character with a backslash (`\`). This escaping prevents Solr from interpreting the character as part of its query syntax.

#### Example

If you want to search for the exact phrase `(1+1):2` without having Solr interpret the plus sign and parentheses as special characters, you should escape them as follows:

```javascript
1\+1:2
```


In this example:
- `\(` and `\)` escape the parentheses
- `\+` escapes the plus sign
- `\:` escapes the colon

By escaping these characters, you ensure that Solr treats them as literal characters in the search query.



### Escaping Special Characters in Our Project

In our project, we use a utility function to handle the escaping of special characters. You can find the implementation of this function in the `queries.js` file in our repository. The function ensures that special characters are properly escaped to maintain the integrity of search queries.

You can view the function implementation [here](https://github.com/scbd/absch.cbd.int/blob/e76e03764184220431d3ad66c40c3906cd1de7b4/app/services/solr/queries.js#L36).
