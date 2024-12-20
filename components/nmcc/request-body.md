<table class="ircc__table" style="table-layout: fixed; width: 100%;">
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
      <td><code>{ "identifier": "3091D176-8864-5C8A-D018-B491D07FD9B2", "schema": "absNationalModelContractualClause", "languages": ["en"] }</code></td>
    </tr>
    <tr>
      <td>Country</td>
      <td>government</td>
      <td>True</td>
      <td>Term</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td>Title</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test title" }</code></td>
    </tr>
    <tr>
      <td>Summary or abstract</td>
      <td>description</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test summary&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Area of jurisdiction</td>
      <td>jurisdiction</td>
      <td></td>
      <td>Term</td>
      <td><code>{ "identifier": "7437F880-7B12-4F26-AA91-CED37250DD0A" }</code></td>
    </tr>
    <tr>
      <td>Relevant ABS Measure(s)</td>
      <td>relevantMeasures</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[{ "identifier": "A3722021-0CC0-B195-75BE-954F133FF78B@1" }]</code></td>
    </tr>
    <tr>
      <td>Please select the relevant keywords</td>
      <td>keywords</td>
      <td>True</td>
      <td>Term[]</td>
      <td><code>[{ "identifier": "7F45AB1F-9925-482E-B0CD-CD842960825F" }]</code></td>
    </tr>
    <tr>
      <td>Thematic area(s)</td>
      <td>thematicAreas</td>
      <td></td>
      <td>Term[]</td>
      <td><code>[{ "identifier": "1D2710D3-75C8-475D-8634-F912F06DAF25" }, { "identifier": "822EC80937524039A912E87DC0041A89" }]</code></td>
    </tr>
    <tr>
      <td>Link to the resource(s)</td>
      <td>resourceLinks</td>
      <td>True</td>
      <td>Link[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Relevant information about the attachment(s)</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Link&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Please attach the relevant files, documents, or resources</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[{ "url": "https://www.google.com", "name": "Google.com", "language": "en" }]</code></td>
    </tr>
  </tbody>
</table>
