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
            <td><code>{ "identifier": "235A8B00-A995-5F7A-E827-FCC588C49C20", "schema": "dnaSequence", "languages": ["en"] }</code></td>
        </tr>
        <tr>
            <td>Name of genetic element</td>
            <td>name</td>
            <td>True</td>
            <td>lstring</td>
            <td><code>{ "en": "Test Name" }</code></td>
        </tr>
        <tr>
            <td>Alternate genetic element name(s) (synonym(s))</td>
            <td>synonymNames</td>
            <td></td>
            <td>lstring[]</td>
            <td><code>[{ "en": "Test Information" }]</code></td>
        </tr>
        <tr>
            <td>Abbreviation</td>
            <td>abbreviation</td>
            <td>True</td>
            <td>lstring</td>
            <td><code>{ "en": "Test Abbreviation" }</code></td>
        </tr>
        <tr>
            <td>Category</td>
            <td>family</td>
            <td>True</td>
            <td>Term</td>
            <td><code>{ "identifier": "1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF" }</code></td>
        </tr>
        <tr>
            <td>Is the genetic element a synthetic molecule?</td>
            <td>isSynthetic</td>
            <td>True</td>
            <td>bool</td>
            <td><code>True</code></td>
        </tr>
        <tr>
            <td>Donor organism(s)</td>
            <td>donorOrganisms</td>
            <td></td>
            <td>Reference[]</td>
            <td><code>[{ "identifier": "50D6389D-5F07-2343-ABB1-E7CE26AFADCA@5" }]</code></td>
        </tr>
        <tr>
            <td>Point of collection or acquisition of the donor organism(s)</td>
            <td>donorOrganismCollectionPoint</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Information&lt;/div&gt;" }</code></td>
        </tr>
        <tr>
            <td>Geographic coordinates</td>
            <td>gisFiles</td>
            <td></td>
            <td>Link[]</td>
            <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
        </tr>
        <tr>
            <td>Name of the protein expressed by the coding sequence</td>
            <td>proteinName</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "Test Information" }</code></td>
        </tr>
        <tr>
            <td>Biological function of the protein</td>
            <td>biologicalFunction</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "Test Information" }</code></td>
        </tr>
        <tr>
            <td>Related trait(s) or use(s) in biotechnology</td>
            <td>traits</td>
            <td></td>
            <td>Term[]</td>
            <td><code>[{ "identifier": "5B6177DD-5E5E-434E-8CB7-D63D67D5EBED", "customValue": { "en": "Test Information" } }, { "identifier": "81799D15-669E-4346-9AEC-6834893D2BE4" }]</code></td>
        </tr>
        <tr>
            <td>Any other relevant information</td>
            <td>relevantInformation</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Information&lt;/div&gt;" }</code></td>
        </tr>
        <tr>
            <td>Any other relevant documents</td>
            <td>relevantDocuments</td>
            <td></td>
            <td>Link[]</td>
            <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
        </tr>
    </tbody>
</table>
