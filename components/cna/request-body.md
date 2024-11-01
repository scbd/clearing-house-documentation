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
      <td><code>{ "identifier": "BFE622A8-17A5-6AA6-C534-5E0E5357279F", "schema": "authority", "languages": ["en"] }</code></td>
    </tr>
    <tr>
      <td>Country</td>
      <td>government</td>
      <td>TRUE</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td>Name of the Competent National Authority</td>
      <td>name</td>
      <td>TRUE</td>
      <td>lstring</td>
      <td><code>{ "en": "your name" }</code></td>
    </tr>
    <tr>
      <td>Website address(es)</td>
      <td>websites</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Address</td>
      <td>address</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "650 Franklin Blvd" }</code></td>
    </tr>
    <tr>
      <td>City</td>
      <td>city</td>
      <td>TRUE</td>
      <td>lstring</td>
      <td><code>{ "en": "Cambridge" }</code></td>
    </tr>
    <tr>
      <td>State or Province</td>
      <td>state</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Ontario" }</code></td>
    </tr>
    <tr>
      <td>Postal Code or Zip</td>
      <td>postalCode</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "N3h0E2" }</code></td>
    </tr>
    <tr>
      <td>Country of Contact</td>
      <td>country</td>
      <td>TRUE</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "ca" }</code></td>
    </tr>
    <tr>
      <td>Phone number(s)</td>
      <td>phones</td>
      <td>TRUE</td>
      <td>string[]</td>
      <td><code>[ "5487899632" ]</code></td>
    </tr>
    <tr>
      <td>Fax number(s)</td>
      <td>faxes</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "5487899632" ]</code></td>
    </tr>
    <tr>
      <td>Email(s)</td>
      <td>emails</td>
      <td>TRUE</td>
      <td>string[]</td>
      <td><code>[ "email@cbd.int" ]</code></td>
    </tr>
    <tr>
      <td>Contact person</td>
      <td>contacts</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1" } ]</code></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;asdfasdf&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Any other relevant documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Is this the only designated competent national authority (CNA) in your country? If “no”, please describe the responsibilities of this competent national authority (CNA).</td>
      <td>responsibleForAll</td>
      <td>TRUE</td>
      <td>bool</td>
      <td><code>FALSE</code></td>
    </tr>
    <tr>
      <td>Short description of CNA responsibilities (maximum 300 characters).</td>
      <td>responsibilities</td>
      <td>TRUE</td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;asdfasdf&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>If needed, provide additional information on the legal, administrative or policy basis for the competence of the CNA.</td>
      <td>policyBasisForCompetency</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;asdfasdf&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Provide a link to any relevant legal, administrative or policy measures.</td>
      <td>policyBasisForCompetencyRef</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "A3722021-0CC0-B195-75BE-954F133FF78B@1" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>absResponsibleForAll</td>
      <td></td>
      <td>bool</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>absPolicyBasisForCompetency</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>absPolicyBasisForCompetencyRef</td>
      <td></td>
      <td>Ereference[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Area of jurisdiction for granting access to genetic resources</td>
      <td>absJurisdiction</td>
      <td>TRUE</td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "7437F880-7B12-4F26-AA91-CED37250DD0A" } ]</code></td>
    </tr>
    <tr>
      <td>Name of the jurisdiction(s)</td>
      <td>absJurisdictionName</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Keywords to describe scope of CNA responsibilities</td>
      <td>absGeneticResourceTypes</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "357DBB22-6A6C-4C49-BA1F-037320B09247" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>absGeneticResourceAreas</td>
      <td></td>
      <td>Eterm[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Administrative functions</td>
      <td>functions</td>
      <td></td>
      <td>Eterm[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Types of organism(s) under its responsibility</td>
      <td>cpbOrganismTypes</td>
      <td></td>
      <td>Eterm[]</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>libraries</td>
      <td></td>
      <td>Eterm[]</td>
      <td></td>
    </tr>
  </tbody>
</table>
