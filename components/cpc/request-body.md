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
      <td>Eheader</td>
      <td><code>{ "identifier": "63B9CA56-9D43-E877-2A96-2C95986522D5", "schema": "absCheckpointCommunique", "languages": ["en"] }</code></td>
    </tr>
    <tr>
      <td>Title of this checkpoint communique</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Title" }</code></td>
    </tr>
    <tr>
      <td>Country issuing this checkpoint communique</td>
      <td>government</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td>Links to internationally recognized certificate(s) of compliance (IRCC) that relate to this communique</td>
      <td>absIRCCs</td>
      <td>True</td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "CB51626B-CF45-2AA0-3A24-459669DDCC34@1" } ]</code></td>
    </tr>
    <tr>
      <td>Checkpoint/s that collected or received the information</td>
      <td>absCheckpoints</td>
      <td>True</td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "3E387C20-E70C-997B-EABB-BC4C9A1E142F@1" } ]</code></td>
    </tr>
    <tr>
      <td>The internationally recognized certificate of compliance (IRCC) is not available</td>
      <td>absIRCCsNotAvailable</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Source of the genetic resource</td>
      <td>sourceCountries</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "af" } ]</code></td>
    </tr>
    <tr>
      <td>Person or entity who granted prior informed consent (PIC)</td>
      <td>entityWhoGrantedPIC</td>
      <td></td>
      <td>Ereference</td>
      <td><code>{ "identifier": "DECLARE-ORGANISATION_19584_20241007134350919@1" }</code></td>
    </tr>
    <tr>
      <td>Subject-matter or genetic resources relevant to the information collected or received</td>
      <td>subjectMatter</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Info&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Specimen data</td>
      <td>specimens</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Taxonomy</td>
      <td>taxonomies</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Geographic coordinates</td>
      <td>gisFiles</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "/api/v2013/documents/63B9CA56-9D43-E877-2A96-2C95986522D5/attachments/615856/test.json", "name": "test.json", "tag": "Test Tag", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>gisMapCenter</td>
      <td></td>
      <td>EmapLocation</td>
      <td></td>
    </tr>
    <tr>
      <td>Person or entity making information available to the checkpoint on the utilization of the genetic resource</td>
      <td>personsAtCheckpoint</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "DECLARE-ORGANISATION_19584_20241007134350919@1" } ]</code></td>
    </tr>
    <tr>
      <td>Reference or evidence of prior informed consent (PIC)</td>
      <td>evidenceOfPIC</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Info&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Reference or evidence of establishment of mutually agreed terms (MAT)</td>
      <td>evidenceOfMAT</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Info&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Person or entity to whom prior informed consent (PIC) was granted</td>
      <td>entityToWhomPICGranted</td>
      <td></td>
      <td>Ereference</td>
      <td><code>{ "identifier": "DECLARE-ORGANISATION_19584_20241007134350919@1" }</code></td>
    </tr>
    <tr>
      <td>Short description of the information collected or received by the checkpoint relevant to the utilization of genetic resources, including the type of use</td>
      <td>description</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Info&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Date of access to the genetic resources</td>
      <td>dateOfAccess</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-10-24</code></td>
    </tr>
    <tr>
      <td>Date on which the information was collected or received at the checkpoint</td>
      <td>dateCollected</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-10-26</code></td>
    </tr>
    <tr>
      <td>FROM</td>
      <td>dateCollectedFrom</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-10-01</code></td>
    </tr>
    <tr>
      <td>TO</td>
      <td>dateCollectedTo</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-10-23</code></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Info&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Other relevant website addresses and/or attached documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent</td>
      <td>keywords</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "term-id-1" }, { "identifier": "term-id-2" } ]</code></td>
    </tr>
    <tr>
      <td>Other keywords </td>
      <td>keywordOther</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Keywords" }</code></td>
    </tr>
  </tbody>
</table>
