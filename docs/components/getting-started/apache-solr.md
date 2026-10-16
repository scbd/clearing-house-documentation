# Apache Solr

## Query Syntax: Escaping Special Characters

When constructing queries for the Solr search endpoint (`GET /api/v2013/index`), certain characters are reserved and have special meanings. To have them treated as literal characters rather than operators, escape them. For comprehensive details, refer to the [Apache Solr documentation](https://solr.apache.org/guide/8_11/the-standard-query-parser.html#escaping-special-characters).

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

Precede each special character with a backslash (`\`). For example, to search for the exact text `(1+1):2` without Solr interpreting the parentheses, plus sign and colon as query syntax:

```
\(1\+1\)\:2
```

By escaping these characters, Solr treats them as literal characters in the search query.
