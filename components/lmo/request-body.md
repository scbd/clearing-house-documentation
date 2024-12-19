<script>
import { onMounted } from "vue";
import { getClearingHouseFromUrl } from "@/utils/helpers"

export default {
  setup() {
    onMounted(() => {
      const anchors = document.querySelectorAll("td a");

      anchors.forEach((anchor) => {
        const href = anchor.getAttribute("href"); 
        const newHref = `/${getClearingHouseFromUrl(location.href)}` + href; 
        anchor.setAttribute("href", newHref);
      });
    });
  },
};
</script>

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
      <td><code>{ "identifier": "D6AC2CEC-960B-D9F4-87BF-0C0AB115F0B1", "schema": "modifiedOrganism", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td>LMO name</td>
      <td>identity</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Name" }</code></td>
    </tr>
    <tr>
      <td>Transformation event</td>
      <td>transformationEvent</td>
      <td>True</td>
      <td>string</td>
      <td><code>TestEvent</code></td>
    </tr>
    <tr>
      <td>Does this LMO have a unique identifier?</td>
      <td>hasUniqueIdentification</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Unique identifier</td>
      <td>uniqueIdentification</td>
      <td></td>
      <td>string</td>
      <td><code>UNIQ7890</code></td>
    </tr>
    <tr>
      <td>Developer(s)</td>
      <td>developers</td>
      <td>True</td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1" } ]</code></td>
    </tr>
    <tr>
      <td>Description</td>
      <td>description</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Description</div>" }</code></td>
    </tr>
    <tr>
      <td>“Recipient Organism” or “Parental Organisms”</td>
      <td>recipientOrganisms</td>
      <td>True</td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "1E027990-5D44-F3AF-75E3-715B60BFD3CD@8" } ]</code></td>
    </tr>
    <tr>
      <td>Point of collection or acquisition of the recipient organism or parental organisms</td>
      <td>recipientOrganismCollectionPoint</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Point" }</code></td>
    </tr>
    <tr>
      <td>Related LMO(s)</td>
      <td>linkedModifiedOrganisms</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "1E027990-5D44-F3AF-75E3-715B60BFD3CD@8" } ]</code></td>
    </tr>
    <tr>
      <td>Introduced or modified genetic element(s)</td>
      <td>genes</td>
      <td>True</td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2" } ]</code></td>
    </tr>
    <tr>
      <td>Notes regarding the genetic elements present in this LMO</td>
      <td>geneNotes</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Notes</div>" }</code></td>
    </tr>
    <tr>
      <td>Other gene(s) whose expression was affected by the transformation</td>
      <td>affectedGenes</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2" } ]</code></td>
    </tr>
    <tr>
      <td>Please describe how the expression of the gene(s) was affected</td>
      <td>affectedGeneNotes</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Description</div>" }</code></td>
    </tr>
    <tr>
      <td>Vector</td>
      <td>vector</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Vector" }</code></td>
    </tr>
    <tr>
      <td>Genetic elements construct</td>
      <td>geneConstructs</td>
      <td></td>
      <td>TranscriptElement[][]</td>
      <td><code>[ [ { "type": "senseStart", "identifier": "B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2", "size": 45 }, { "type": "sense", "identifier": "B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2", "size": 45 }, { "type": "senseStop", "identifier": "B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2", "size": 50 } ] ]</code></td>
    </tr>
    <tr>
      <td>Common use(s) of the LMO</td>
      <td>commonUses</td>
      <td></td>
      <td>Term[]</td>
      <td><code>[ { "identifier": "F816F788-BBC3-4ADB-9979-AE07CDED094E" } ]</code></td>
    </tr>
    <tr>
      <td>Techniques used for the modification</td>
      <td>techniqueUsed</td>
      <td>True</td>
      <td>Term[]</td>
      <td><code>[ { "identifier": "0368E952-6D50-43D3-B23A-EFA438B410A9" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>isGeneEdited</td>
      <td></td>
      <td>bool</td>
      <td></td>
    </tr>
    <tr>
      <td>Modified traits</td>
      <td>traits</td>
      <td>True</td>
      <td>Term[]</td>
      <td><code>[ { "identifier": "31396BD1-9E3E-4EB3-A29E-9A22B7230221" }, { "identifier": "7CC2B74F-B117-4E7A-A358-2A8284430651" } ]</code></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>detectionMethod</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Additional Information</div>" }</code></td>
    </tr>
    <tr>
      <td>External link(s)</td>
      <td>detectionMethodLinks</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Any other relevant information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test Relevant Information</div>" }</code></td>
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