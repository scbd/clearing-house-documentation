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
      <td><code>{ "identifier": "C7907DF4-C69A-A586-6C15-D95E3E703FFC", "schema": "organization", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td>Acronym</td>
      <td>acronym</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "TestINFO" }</code></td>
    </tr>
    <tr>
      <td>Name of the organization</td>
      <td>name</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>Contact person(s)</td>
      <td>contacts</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1" } ]</code></td>
    </tr>
    <tr>
      <td>Linked organizations</td>
      <td>linkedOrganizations</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "1767A775-F4F9-B597-41AC-CE56536F28F5@2" } ]</code></td>
    </tr>
    <tr>
      <td>Address</td>
      <td>address</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>City</td>
      <td>city</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>State or Province</td>
      <td>state</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>Postal Code or Zip</td>
      <td>postalCode</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "TestINFO" }</code></td>
    </tr>
    <tr>
      <td>Country</td>
      <td>country</td>
      <td>True</td>
      <td>Term</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td>Phone number(s)</td>
      <td>phones</td>
      <td>True</td>
      <td>string[]</td>
      <td><code>[ "1234561234" ]</code></td>
    </tr>
    <tr>
      <td>Fax number(s)</td>
      <td>faxes</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "1234561234" ]</code></td>
    </tr>
    <tr>
      <td>Email(s)</td>
      <td>emails</td>
      <td>True</td>
      <td>string[]</td>
      <td><code>[ "test@email.com" ]</code></td>
    </tr>
    <tr>
      <td>Website address(es)</td>
      <td>websites</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>libraries</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Type of organization</td>
      <td>organizationType</td>
      <td>True</td>
      <td>Term</td>
      <td><code>{ "identifier": "86D464C3-B5BB-4B02-85E4-1AAD8D64CD27" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>thematicAreas</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>absThematicAreas</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Areas of work</td>
      <td>areasOfWork</td>
      <td></td>
      <td>lstring[]</td>
      <td><code>[ { "en": "Test Info" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>gbfTargets</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>aichiTargets</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>coordinates</td>
      <td></td>
      <td>MapLocation</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>establishmentGooglePlaceId</td>
      <td></td>
      <td>string[]</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>operationalLanguages</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Regional area(s) of operations or political/economic group(s)</td>
      <td>operationalRegions</td>
      <td></td>
      <td>Term[]</td>
      <td><code>[ { "identifier": "CCA4B662-8EF4-418D-B327-0D6F418AA703" } ]</code></td>
    </tr>
    <tr>
      <td>Organization’s profile</td>
      <td>profile</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>profileLink</td>
      <td></td>
      <td>Link[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Any other relevant information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
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
