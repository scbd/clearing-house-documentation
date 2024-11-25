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
      <td>
        <code>{ "schema": "nbsap", "identifier": "B3BE683C-81B0-91D4-35A4-F5A21935017D", "languages": [ "en", "ab" ] }</code>
      </td>
    </tr>
    <tr>
      <td>Government</td>
      <td>government</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td>Enter NBSAP title</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>Summary</td>
      <td>summary</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td>Level of application</td>
      <td>jurisdiction</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "7437F880-7B12-4F26-AA91-CED37250DD0A" }</code></td>
    </tr>
    <tr>
      <td>Additional Information (Level of application)</td>
      <td>jurisdictionInfo</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Is the submission in alignment with the Kunming-Montreal Global Biodiversity Framework?</td>
      <td>isGbfAligned</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>From</td>
      <td>startDate</td>
      <td>True</td>
      <td>Datetime</td>
      <td><code>2024-11-01</code></td>
    </tr>
    <tr>
      <td>To</td>
      <td>endDate</td>
      <td>True</td>
      <td>Datetime</td>
      <td><code>2024-11-20</code></td>
    </tr>
    <tr>
      <td>Status</td>
      <td>status</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "9D17F3A2-EC92-4D31-81EF-A12521873D7F" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>completionYear</td>
      <td></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td>Date of completion and adoption</td>
      <td>adoptionDate</td>
      <td></td>
      <td>string</td>
      <td><code>2024-11-01</code></td>
    </tr>
    <tr>
      <td>Status of approved document</td>
      <td>approvedStatus</td>
      <td></td>
      <td>Eterm</td>
      <td><code>{ "identifier": "EE6F3AAE-E365-46C3-B73F-ED5FE3DFAACA" }</code></td>
    </tr>
    <tr>
      <td>Approving body</td>
      <td>approvingBody</td>
      <td></td>
      <td>Eterm</td>
      <td><code>{ "identifier": "EFAF31F0-1E48-4165-B60B-B55F132DB932" }</code></td>
    </tr>
    <tr>
      <td>Please select approving body</td>
      <td>approvingBodyInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>documentText</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>NBSAP document(s) and websites, links or other relevant document(s)</td>
      <td>documentLinks</td>
      <td>True</td>
      <td>Elink[]</td>
      <td>
        <code>[
        { "url": "https://www.google.comm", "name": "Google", "language": "en" }
        ]</code>
      </td>
    </tr>
    <tr>
      <td>Please use this field to provide any other relevant information that may not have been addressed elsewhere in the record.</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
  </tbody>
</table>
