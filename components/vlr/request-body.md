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
      <td><code>{ "identifier": "38555401-8018-6255-B396-CB427060D564", "schema": "resource", "languages": ["en"] }</code></td>
    </tr>
    <tr>
      <td>Title</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Title" }</code></td>
    </tr>
    <tr>
      <td>Type of resource</td>
      <td>resourceTypes</td>
      <td>True</td>
      <td>Term[]</td>
      <td><code>[{ "identifier": "7BBF86FE-68E5-4ED8-8174-7DD8D302C583" }, { "identifier": "AA04CE23-471C-40E4-A0CC-53C9F49DABD4" }]</code></td>
    </tr>
    <tr>
      <td>Author name(s)</td>
      <td>authors</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Author" }</code></td>
    </tr>
    <tr>
      <td>Reference to the authoring organization(s)</td>
      <td>organizations</td>
      <td>True</td>
      <td>Reference[]</td>
      <td><code>[{ "identifier": "1767A775-F4F9-B597-41AC-CE56536F28F5@2" }]</code></td>
    </tr>
    <tr>
      <td>Publisher</td>
      <td>publisher</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Publisher" }</code></td>
    </tr>
    <tr>
      <td>Source</td>
      <td>source</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test source" }</code></td>
    </tr>
    <tr>
      <td>Publication Date</td>
      <td>publicationDate</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>2024-12</code></td>
    </tr>
    <tr>
      <td>Rights</td>
      <td>rights</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test rights" }</code></td>
    </tr>
    <tr>
      <td>Link to the resource(s)</td>
      <td>resourceLinks</td>
      <td>True</td>
      <td>Link[]</td>
      <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
    </tr>
    <tr>
      <td>Cover image(s)</td>
      <td>covers</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[{ "url": "/api/v2013/documents/38555401-8018-6255-B396-CB427060D564/attachments/616105/2738672-temp.jpg", "name": "2738672-temp.jpg", "tag": "Test Tags", "language": "en" }]</code></td>
    </tr>
    <tr>
      <td>Summary, abstract or table of contents (max 300 words)</td>
      <td>summary</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Summary" }</code></td>
    </tr>
    <tr>
      <td>Geographical or political/economic group(s)</td>
      <td>countryRegions</td>
      <td></td>
      <td>Term[]</td>
      <td><code>[{ "identifier": "ao" }, { "identifier": "A23DD6C0-44C5-418D-83B5-461D79D2721A" }]</code></td>
    </tr>
    <tr>
      <td>Kunming-Montreal Global Biodiversity Framework Target(s)</td>
      <td>gbfTargets</td>
      <td></td>
      <td>Term[]</td>
      <td><code>[{ "identifier": "GBF-TARGET-01" }, { "identifier": "GBF-TARGET-17" }]</code></td>
    </tr>
    <tr>
      <td>Aichi Targets</td>
      <td>aichiTargets</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td>CBD Subject Areas</td>
      <td>cbdSubjects</td>
      <td>True</td>
      <td>Term[]</td>
      <td><code>[{ "identifier": "CBD-SUBJECT-AGR" }, { "identifier": "CBD-SUBJECT-CPB-HTPI" }]</code></td>
    </tr>
    <tr>
    <td>Please select the relevant keywords for describing the content of the code of conduct, guidelines, best practices, and/or standards being submitted</td>
    <td>nagoya.mccKeywords</td>
    <td></td>
    <td>Term[]</td>
    <td></td>
  </tr>
  <tr>
    <td>ABS Thematic Areas</td>
    <td>nagoya.subjects</td>
    <td></td>
    <td>Term[]</td>
    <td><code>[{"identifier": "99FCE39007594FCD862564EC8D6E304F"}]</code></td>
  </tr>
  <tr>
    <td>Key areas and strategic measures for capacity-building and development addressed by the resource</td>
    <td>nagoya.keyAreas</td>
    <td></td>
    <td>Term[]</td>
    <td><code>[{"identifier": "14E5882E-B433-4877-AA6B-B47F602C4BA6"}]</code></td>
  </tr>
  <tr>
    <td></td>
    <td>nagoya</td>
    <td></td>
    <td>Nagoya</td>
    <td></td>
  </tr>
  <tr>
    <td>Biosafety Thematic Areas</td>
    <td>biosafety.subjects</td>
    <td></td>
    <td>Term[]</td>
    <td><code>[{"identifier": "E3E3E362-4E46-4C4A-A2A3-EABBDDAA2DEE"}]</code></td>
  </tr>
  <tr>
    <td>Does this resource address one or more specific LMOs?</td>
    <td>biosafety.addressModifiedOrganisms</td>
    <td></td>
    <td>bool</td>
    <td><code>True</code></td>
  </tr>
  <tr>
    <td>LMO(s) identification</td>
    <td>biosafety.modifiedOrganisms</td>
    <td></td>
    <td>Reference[]</td>
    <td><code>[{"identifier": "E5DF7EF2-B902-9D55-517E-D400964CB478@8"}]</code></td>
  </tr>
  <tr>
    <td>Organism(s) identification</td>
    <td>biosafety.organisms</td>
    <td></td>
    <td>Reference[]</td>
    <td><code>[{"identifier": "A4380B39-C757-301E-5C43-0F943B021A3C@1"}]</code></td>
  </tr>
  <tr>
    <td>Does this resource address one or more specific organisms?</td>
    <td>biosafety.addressOrganisms</td>
    <td></td>
    <td>bool</td>
    <td><code>True</code></td>
  </tr>
  <tr>
    <td>Does this resource address one or more specific genetic elements?</td>
    <td>biosafety.addressGenes</td>
    <td></td>
    <td>bool</td>
    <td><code>True</code></td>
  </tr>
  <tr>
    <td>Genetic element(s) identification</td>
    <td>biosafety.genes</td>
    <td></td>
    <td>Reference[]</td>
    <td><code>[{"identifier": "FE2DAF79-6F81-4040-74C6-BA2057E0BB0C@3"}]</code></td>
  </tr>
  <tr>
    <td>Biosafety</td>
    <td>biosafety</td>
    <td></td>
    <td>Biosafety</td>
    <td><code>{"subjects": [{"identifier": "E3E3E362-4E46-4C4A-A2A3-EABBDDAA2DEE"}], "modifiedOrganisms": [{"identifier": "E5DF7EF2-B902-9D55-517E-D400964CB478@8"}], "organisms": [{"identifier": "A4380B39-C757-301E-5C43-0F943B021A3C@1"}], "genes": [{"identifier": "FE2DAF79-6F81-4040-74C6-BA2057E0BB0C@3"}], "addressModifiedOrganisms": True, "addressOrganisms": True, "addressGenes": True}</code></td>
  </tr>
  <tr>
    <td></td>
    <td>tags</td>
    <td></td>
    <td>lstring[]</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>adminTags</td>
    <td></td>
    <td>string[]</td>
    <td></td>
  </tr>
  <tr>
    <td>Any other relevant information</td>
    <td>relevantInformation</td>
    <td></td>
    <td>lstring</td>
    <td><code>{"en": "<div><!--block-->Test Info</div>"}</code></td>
  </tr>
  <tr>
    <td>Any other relevant documents</td>
    <td>relevantDocuments</td>
    <td></td>
    <td>Link[]</td>
    <td><code>[{"url": "https://www.google.com", "name": "Google", "language": "en"}]</code></td>
  </tr>
  </tbody>
</table>
