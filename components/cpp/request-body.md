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
            <td><code>{ "identifier": "48478B9A-EF10-B9A3-008A-A1E149A078C4", "schema": "communityProtocol", "languages": ["en"] }</code></td>
        </tr>
        <tr>
            <td>Title</td>
            <td>title</td>
            <td>TRUE</td>
            <td>lstring</td>
            <td><code>{ "en": "Test Info" }</code></td>
        </tr>
        <tr>
            <td>Type of resource</td>
            <td>resourceTypes</td>
            <td>TRUE</td>
            <td>Term[]</td>
            <td><code>[{ "identifier": "2F193E6A-FE21-447F-8270-BAED8AD0DD5A" }, { "identifier": "5DDFFC34-4278-42B3-83D6-449862EC1C16" }]</code></td>
        </tr>
        <tr>
            <td>Author(s)</td>
            <td>authors</td>
            <td>TRUE</td>
            <td>lstring</td>
            <td><code>{ "en": "Test Info" }</code></td>
        </tr>
        <tr>
            <td>Reference to the authoring organization(s)</td>
            <td>organizations</td>
            <td>TRUE</td>
            <td>Reference[]</td>
            <td><code>[{ "identifier": "DECLARE-ORGANISATION_25562_20241111131557173@1" }]</code></td>
        </tr>
        <tr>
            <td>Publisher</td>
            <td>publisher</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "Test Info" }</code></td>
        </tr>
        <tr>
            <td>Source</td>
            <td>source</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "Test Info" }</code></td>
        </tr>
        <tr>
            <td>Publication Date</td>
            <td>publicationDate</td>
            <td>TRUE</td>
            <td>string</td>
            <td><code>2024-12</code></td>
        </tr>
        <tr>
            <td>Rights</td>
            <td>rights</td>
            <td></td>
            <td>lstring</td>
            <td><code>{ "en": "Test Info" }</code></td>
        </tr>
        <tr>
            <td>Link to the resource(s)</td>
            <td>resourceLinks</td>
            <td>TRUE</td>
            <td>Link[]</td>
            <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
        </tr>
        <tr>
            <td>Cover image(s)</td>
            <td>covers</td>
            <td></td>
            <td>Link[]</td>
            <td><code>[{ "url": "/api/v2013/documents/48478B9A-EF10-B9A3-008A-A1E149A078C4/attachments/616113/image.jpg", "name": "image.jpg", "tag": "Test Tag", "language": "en" }]</code></td>
        </tr>
        <tr>
            <td>Summary, abstract or table of contents (max 300 words)</td>
            <td>summary</td>
            <td>TRUE</td>
            <td>lstring</td>
            <td><code>{ "en": "Test Info" }</code></td>
        </tr>
        <tr>
            <td>Geographical or political/economic group(s)</td>
            <td>countryRegions</td>
            <td></td>
            <td>Term[]</td>
            <td><code>[{ "identifier": "af" }, { "identifier": "A23DD6C0-44C5-418D-83B5-461D79D2721A" }]</code></td>
        </tr>
        <tr>
            <td></td>
            <td>gbfTargets</td>
            <td></td>
            <td>Term[]</td>
            <td><code>[{ "identifier": "GBF-TARGET-01" }]</code></td>
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
            <td></td>
            <td>Term[]</td>
            <td><code>[{ "identifier": "CBD-SUBJECT-DSHL" }, { "identifier": "CBD-SUBJECT-CC" }]</code></td>
        </tr>
        <tr>
            <td></td>
            <td>nagoya</td>
            <td></td>
            <td>Nagoya</td>
            <td></td>
        </tr>
        <tr>
            <td>ABS Thematic Areas</td>
            <td>nagoya.subjects</td>
            <td>TRUE</td>
            <td>Term[]</td>
            <td><code>[{ "identifier": "EC94899F15EE40C6A0F7D0B1F774A521" }, ... ]</code></td>
        </tr>
        <tr>
            <td>Key areas and strategic measures for capacity-building and development addressed by the resource</td>
            <td>nagoya.keyAreas</td>
            <td></td>
            <td>Term[]</td>
            <td><code>[{ "identifier": "0DCF8438-9479-4F6B-B356-FDFCB0C4D564" }]</code></td>
        </tr>
        <tr>
            <td>"Please select the relevant keywords for describing the content of the code of conduct, guidelines and best practices and/or standards being submitted</td>
            <td>nagoya.mccKeywords</td>
            <td></td>
            <td>Term[]</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>biosafety</td>
            <td></td>
            <td>Biosafety</td>
            <td></td>
        </tr>
        <tr>
            <td>Biosafety Thematic Areas</td>
            <td>biosafety.subjects</td>
            <td></td>
            <td>Term[]</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>biosafety.raRecommend</td>
            <td></td>
            <td>bool</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>biosafety.raAuthorAffiliation</td>
            <td></td>
            <td>Term[]</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>biosafety.raSubjects</td>
            <td></td>
            <td>Term[]</td>
            <td></td>
        </tr>
        <tr>
            <td>Does this resource address one or more specific LMOs?</td>
            <td>biosafety.addressModifiedOrganisms</td>
            <td></td>
            <td>bool</td>
            <td></td>
        </tr>
        <tr>
            <td>LMO(s) identification</td>
            <td>biosafety.modifiedOrganisms</td>
            <td></td>
            <td>Reference[]</td>
            <td></td>
        </tr>
        <tr>
            <td>Does this resource address one or more specific organisms?</td>
            <td>biosafety.addressOrganisms</td>
            <td></td>
            <td>bool</td>
            <td></td>
        </tr>
        <tr>
            <td>Organism(s) identification</td>
            <td>biosafety.organisms</td>
            <td></td>
            <td>Reference[]</td>
            <td></td>
        </tr>
        <tr>
            <td>Does this resource address one or more specific genetic elements?</td>
            <td>biosafety.addressGenes</td>
            <td></td>
            <td>bool</td>
            <td></td>
        </tr>
        <tr>
            <td>Genetic element(s) identification</td>
            <td>biosafety.genes</td>
            <td></td>
            <td>Reference[]</td>
            <td></td>
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
            <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Info&lt;/div&gt;" }</code></td>
        </tr>
        <tr>
            <td>Any other relevant documents</td>
            <td>relevantDocuments</td>
            <td></td>
            <td>Link[]</td>
            <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
        </tr>
    </tbody>
</table>
