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
      <td>Eheader</td>
      <td><code>{ "identifier": "2229F37D-F8E0-2FFE-4F47-E7452BF3FE48", "schema": "measure", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td><strong><a href="/thesaurus/general/countries">Country</a></strong></td>
      <td>government</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>libraries</td>
      <td></td>
      <td>Eterm[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Title of the legislative administrative or policy measures on access and benefit-sharing</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test title" }</code></td>
    </tr>
    <tr>
      <td>Brief description of the document including objective and scope (max. 300 words)</td>
      <td>description</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test description&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td><strong><a href="/thesaurus/measure/type-of-documents">Type of document/measure</a></strong></td>
      <td>type</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "8165BF22-EEF0-4DF8-B3F2-8E0AEED13E2F" }</code></td>
    </tr>
    <tr>
      <td><strong><a href="/thesaurus/measure/jurisdictions">Area of jurisdiction</a></strong></td>
      <td>jurisdiction</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "7437F880-7B12-4F26-AA91-CED37250DD0A" }</code></td>
    </tr>
    <tr>
      <td>Country name(s) and/or Geographical or political/economic group(s)</td>
      <td>jurisdictionRegions</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>{ "identifier": "7437F880-7B12-4F26-AA91-CED37250DD0A" }</code></td>
    </tr>
    <tr>
      <td>Name of the sub-national / community / other jurisdiction</td>
      <td>jurisdictionName</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Document text (in its original language)</td>
      <td>documents</td>
      <td>True</td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Translation in one of the official UN languages</td>
      <td>documentTranslations</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td><strong><a href="/thesaurus/measure/statuses">Legal status of the measure</a></strong></td>
      <td>status</td>
      <td></td>
      <td>Eterm</td>
      <td><code>{ "identifier": "97D6C7E6-5EAD-48B2-BD8D-DAB77153FF9C" }</code></td>
    </tr>
    <tr>
      <td>Please provide the date of adoption</td>
      <td>adoption</td>
      <td></td>
      <td>string</td>
      <td><code>2024-09-25</code></td>
    </tr>
    <tr>
      <td>Please provide the date of entry into force</td>
      <td>entryIntoForce</td>
      <td></td>
      <td>string</td>
      <td><code>2024-09-19</code></td>
    </tr>
    <tr>
      <td>Please provide the date from which the measure was no longer applicable</td>
      <td>retired</td>
      <td></td>
      <td>string</td>
      <td><code>2024-09-25</code></td>
    </tr>
    <tr>
      <td>Indicate the date the measure is no longer in force if the measure has a limited application in time</td>
      <td>limitedApplication</td>
      <td></td>
      <td>string</td>
      <td><code>2024-09-23</code></td>
    </tr>
    <tr>
      <td>List of amended measures</td>
      <td>amendedMeasures</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "26C9AAD9-3CAC-6FF4-C682-B9CA7858AE78@2" } ]</code></td>
    </tr>
    <tr>
      <td>Summary of the amendment(s)</td>
      <td>amendmentsDescription</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Information&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Relationship with other measures</td>
      <td>linkedMeasures</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "A3722021-0CC0-B195-75BE-954F133FF78B@1" } ]</code></td>
    </tr>
    <tr>
      <td>Please describe the relationship</td>
      <td>linkedMeasuresDescription</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Information&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Contact Institution</td>
      <td>authorities</td>
      <td>True</td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "DECLARE-ORGANISATION_13674_20240902135135254@1" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>otherInformation</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>otherDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Any other relevant documents</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Information&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Any other relevant documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Elements of the measure</td>
      <td>absMeasures</td>
      <td>True</td>
      <td>EAbsMeasure</td>
      <td><code>{ "geneticResources": { "answer": True, "elements": [ { "types": [ { "identifier": "4E2974DF-216E-46C8-8797-8E3A33D6A048" }, { "identifier": "9C146B09-097E-4CFF-B9CC-D4785496952F" }, { "identifier": "357DBB22-6A6C-4C49-BA1F-037320B09247" }, { "identifier": "http://data.gbif.org/species/13140807" }, { "identifier": "33A6BF46-3699-4B5E-A3C0-506FAFDA2D76" }, { "identifier": "F9EF6F94-8B39-4F08-BF68-B991157F2643" } ] } ] }, "traditionalKnowledge": { "answer": True, "elements": [] } }</code></td>
    </tr>
    <tr>
      <td>Elements are not applicable for this measure</td>
      <td>absMesasureNotApplicable</td>
      <td></td>
      <td>bool</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Name of the other type of document/measure</td>
      <td>otherTypeName</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Is this an amendment to previous legislative, administrative or policy measure?</td>
      <td>isAmendment</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Does the measure contain model contractual clauses?</td>
      <td>isModelContractualClause</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Please provide further information</td>
      <td>modelContractualClauseDescription</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>otherAbsMeasure</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
  </tbody>
</table>
