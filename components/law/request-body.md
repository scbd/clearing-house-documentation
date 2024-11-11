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
      <td><code>{ "identifier": "085758D8-C7AC-6AAE-9736-95811AD100DA", "schema": "biosafetyLaw", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td>Country submitting a law, regulation, guideline or agreement</td>
      <td>government</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td>Area of jurisdiction</td>
      <td>jurisdiction</td>
      <td></td>
      <td>Eterm</td>
      <td><code>{ "identifier": "7437F880-7B12-4F26-AA91-CED37250DD0A" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>jurisdictionsDetails</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Title of document</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Title" }</code></td>
    </tr>
    <tr>
      <td>Brief description of the document including objective and scope</td>
      <td>description</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test description</div>" }</code></td>
    </tr>
    <tr>
      <td>Type of Law / Regulation</td>
      <td>type</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "57217527-3732-437F-9AD8-45BEF4429FD5" }</code></td>
    </tr>
    <tr>
      <td>Date of entry into force</td>
      <td>entryIntoForce</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-09-03</code></td>
    </tr>
    <tr>
      <td>Document text</td>
      <td>documents</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Only use this field to provide details of how to obtain a copy of the document if it is not available as an attachment or online.</td>
      <td>documentsInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test description</div>" }</code></td>
    </tr>
    <tr>
      <td>Unofficial Documents</td>
      <td>unofficialDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Is this an amendment to a law, regulation, guideline or agreement already published on the BCH?</td>
      <td>isAmendment</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Please select the record(s) containing the law/regulation being amended</td>
      <td>amendedRecords</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "7A5D391B-BEC7-30FF-FB73-CD50E6577AA1@2" } ]</code></td>
    </tr>
    <tr>
      <td>Please provide a brief summary of the amendment(s)</td>
      <td>amendmentsDetails</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Summary</div>" }</code></td>
    </tr>
    <tr>
      <td>Relationship with other laws/regulations</td>
      <td>relatedRecords</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "7A5D391B-BEC7-30FF-FB73-CD50E6577AA1@2" } ]</code></td>
    </tr>
    <tr>
      <td>Please describe the relationship between the measures</td>
      <td>relationDetails</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test description</div>" }</code></td>
    </tr>
    <tr>
      <td>Competent National Authority(ies) and/or Supplementary Protocol Competent Authority(ies)</td>
      <td>authorities</td>
      <td>True</td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "78AFAA88-47EA-9333-AD6E-C21BCB17DE21@1" } ]</code></td>
    </tr>
    <tr>
      <td>Subject areas</td>
      <td>cpbSubjectAreas</td>
      <td>True</td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "1DCBA126-60F1-440D-BBB0-CC9CCC91C283" } ]</code></td>
    </tr>
    <tr>
      <td>Types of organisms addressed</td>
      <td>cpbOrganismTypes</td>
      <td>True</td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "65F83475-FBFD-4DCA-9DD8-10FC253A2F84" } ]</code></td>
    </tr>
    <tr>
      <td>Should this information be confirmed or updated after two years from the date of submission?</td>
      <td>expires</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Please use this field to provide any other relevant information that may not have been addressed elsewhere in the record.</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Any other relevant documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
  </tbody>
</table>
