<table class="schema__table" style="table-layout: fixed; width: 100%;">
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
      <td><code>{ "identifier": "6BF5D309-6964-1993-0369-F3309CB48BB0", "schema": "absCheckpoint", "languages": ["en"] }</code></td>
    </tr>
    <tr>
      <td>Country</td>
      <td>government</td>
      <td></td>
      <td>Eterm</td>
      <td><code>{ "identifier": "us" }</code></td>
    </tr>
    <tr>
      <td>Name of the checkpoint</td>
      <td>name</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Checkpoint" }</code></td>
    </tr>
    <tr>
      <td>Short description of any additional responsibilities (maximum 300 characters)</td>
      <td>responsibilities</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test description&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Area of jurisdiction:</td>
      <td>jurisdiction</td>
      <td></td>
      <td>Eterm</td>
      <td><code>{ "identifier": "7437F880-7B12-4F26-AA91-CED37250DD0A" }</code></td>
    </tr>
    <tr>
      <td>Name of the sub-national jurisdiction</td>
      <td>jurisdictionName</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Sub jurisdiction" }</code></td>
    </tr>
    <tr>
      <td>Send a copy of the communiqué to all competent national authorities within my country</td>
      <td>informAllAuthorities</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Please select any national authorities whom you wish to send a copy of the communiqué</td>
      <td>contactsToInform</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "DECLARE-ORGANISATION_13394_20240830135408832@1" } ]</code></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Information&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Other relevant website addresses and/or attached documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
  </tbody>
</table>
