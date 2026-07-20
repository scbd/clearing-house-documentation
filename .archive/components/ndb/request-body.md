<table class="schema-table" style="table-layout: fixed; width: 100%;">
    <thead>
        <tr>
            <th>Title</th>
            <th>Field</th>
            <th>Mandatory</th>
            <th>Type</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td>header</td>
            <td></td>
            <td>Header</td>
            <td><code>{ "identifier": "A48DBA58-485D-F2EB-1EB7-D5FF950BDD26", "schema": "database", "languages": [ "en" ] }</code></td>
        </tr>
        <tr>
            <td>Country</td>
            <td>government</td>
            <td>True</td>
            <td>Term</td>
            <td><code>{ "identifier": "af" }</code></td>
        </tr>
        <tr>
            <td>Website or database name</td>
            <td>title</td>
            <td>True</td>
            <td>lstring</td>
            <td><code>{ "en": "Test Info" }</code></td>
        </tr>
        <tr>
            <td>Description</td>
            <td>description</td>
            <td>True</td>
            <td>lstring</td>
            <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Description&lt;/div&gt;" }</code></td>
        </tr>
        <tr>
            <td>Website address</td>
            <td>websites</td>
            <td>True</td>
            <td>Link[]</td>
            <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
        </tr>
        <tr>
            <td>Any other relevant information</td>
            <td>relevantInformation</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Info&lt;/div&gt;" }</code></td>
        </tr>
        <tr>
            <td>Any other relevant documents</td>
            <td>relevantDocuments</td>
            <td></td>
            <td>Link[]</td>
            <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
        </tr>
    </tbody>
</table>
