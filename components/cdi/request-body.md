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
      <td><code>{ "identifier": "EBC2DAD5-04C8-0530-6D58-C949CAECD809", "schema": "capacityBuildingInitiative", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>libraries</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Title of the initiative</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>Please provide any project number, identifier or reference number, if applicable.</td>
      <td>projectNumber</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>Website address(es)</td>
      <td>projectDocument</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Contact person</td>
      <td>contacts</td>
      <td>True</td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1" } ]</code></td>
    </tr>
    <tr>
      <td>Geographic scope</td>
      <td>geographicScope</td>
      <td>True</td>
      <td>Term</td>
      <td><code>{ "identifier": "528B1187-F1BD-4479-9FB3-ADBD9076D361" }</code></td>
    </tr>
    <tr>
      <td>Geographical or political/economic group(s)</td>
      <td>countryRegions</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Status</td>
      <td>status</td>
      <td>True</td>
      <td>Term</td>
      <td><code>{ "identifier": "73E2AC27-D964-487C-A4E6-0997BB27AF01" }</code></td>
    </tr>
    <tr>
      <td>Start date</td>
      <td>startDate</td>
      <td>True</td>
      <td>DateTime</td>
      <td><code>2024-11-04</code></td>
    </tr>
    <tr>
      <td>End date</td>
      <td>endDate</td>
      <td>True</td>
      <td>DateTime</td>
      <td><code>2024-12-27</code></td>
    </tr>
    <tr>
      <td>Duration period</td>
      <td>durationPeriod</td>
      <td>True</td>
      <td>int</td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td>Duration period in day(s)/month(s)/year(s)</td>
      <td>durationText</td>
      <td>True</td>
      <td>string</td>
      <td><code>Months</code></td>
    </tr>
    <tr>
      <td>Type of capacity development initiative</td>
      <td>activityScope</td>
      <td></td>
      <td>Term</td>
      <td><code>{ "identifier": "2DFCDD0B-5D62-4016-829F-8E70E767875A" }</code></td>
    </tr>
    <tr>
      <td>Is this part of a larger project or programme?</td>
      <td>isProjectProgramme</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Please specify the name of project or programme.</td>
      <td>projectProgrammeName</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>Please link to a clearing-house record about this project or programme.</td>
      <td>broaderProjects</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "A75D346C-E205-A4B9-EE94-2B1CEADB7945@1" } ]</code></td>
    </tr>
    <tr>
      <td>Implementing agency(ies) or organization(s)</td>
      <td>isImplementedByAgencies</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Please select the implementing agency(ies) or organization(s)</td>
      <td>implementingAgencies</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "2C86F905-B244-8FDD-4988-5088C023BDE9@1" } ]</code></td>
    </tr>
    <tr>
      <td>Executing agency(ies) or organization(s)</td>
      <td>isExecutededByAgencies</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
     <tr>
        <td>executingAgencies</td>
        <td>Please select the executing agency(ies) or organization(s)</td>
        <td></td>
        <td>Reference[]</td>
        <td><code>[{ "identifier": "2C86F905-B244-8FDD-4988-5088C023BDE9@1" }]</code></td>
    </tr>
    <tr>
        <td>isCollaboratededByPartners</td>
        <td>Collaborating partner(s)</td>
        <td></td>
        <td>bool</td>
        <td><code>True</code></td>
    </tr>
    <tr>
        <td>description</td>
        <td>Short description of the initiative, including its goals and objectives (max 150 words)</td>
        <td></td>
        <td>lstring</td>
        <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
        <td>categories</td>
        <td>Category(ies) of capacity development activities</td>
        <td></td>
        <td>Term[]</td>
        <td>            
            <code>[
                { "identifier": "FE6EC4EA-55E7-4E90-80AD-FE4B54707B73" },
                { "identifier": "5B6177DD-5E5E-434E-8CB7-D63D67D5EBED", "customValue": { "en": "Test Info" } }
            ]</code>            
        </td>
    </tr>
    <tr>
        <td>targetGroups</td>
        <td>Main target group(s)/beneficiary(ies)</td>
        <td></td>
        <td>Term[]</td>
        <td>
            <code>[
                { "identifier": "D8862526-B776-4FD2-8C62-6DF9D5E92166" },
                { "identifier": "5B6177DD-5E5E-434E-8CB7-D63D67D5EBED", "customValue": { "en": "Test Info" } }
            ]</code>            
        </td>
    </tr>
    <tr>
        <td>cbdSubjects</td>
        <td>Related CBD subject areas</td>
        <td></td>
        <td>Term[]</td>
        <td><code>[{ "identifier": "CBD-SUBJECT-FOR" }]</code></td>
    </tr>
    <tr>
        <td>gbfTargets</td>
        <td></td>
        <td></td>
        <td>Term[]</td>
        <td><code>[{ "identifier": "GBF-TARGET-17" }]</code></td>
    </tr>
    <tr>
        <td>aichiTargets</td>
        <td></td>
        <td></td>
        <td>Term[]</td>
        <td></td>
    </tr>
    <tr>
        <td>absKeyAreas</td>
        <td>Key areas and strategic measures for capacity-building and development</td>
        <td></td>
        <td>Term[]</td>
        <td><code>[{ "identifier": "9096451F-09FF-4E70-8345-3C7D84DEF545" }]</code></td>
    </tr>
    <tr>
        <td>cpbThematicAreas</td>
        <td>Biosafety Thematic Areas</td>
        <td></td>
        <td>Term[]</td>
        <td>            
            <code>[
                { "identifier": "1D4567E7-C615-4A49-BD1A-7CF6AD25CC63" },
                { "identifier": "5B6177DD-5E5E-434E-8CB7-D63D67D5EBED", "customValue": { "en": "Test Info" } }
            ]</code>            
        </td>
    </tr>
    <tr>
        <td>fundingSourceTypes</td>
        <td>Type(s) of funding source(s)</td>
        <td></td>
        <td>Term[]</td>
        <td><code>[{ "identifier": "74EBA28E-1F0C-4157-BD47-C8492487AD70" }]</code></td>
    </tr>
    <tr>
        <td>coreFundingSources</td>
        <td>Primary funding source(s)</td>
        <td></td>
        <td>Reference[]</td>
        <td><code>[{ "identifier": "2C86F905-B244-8FDD-4988-5088C023BDE9@1" }]</code></td>
    </tr>
    <tr>
        <td>coFinancingSources</td>
        <td>Co-funding source(s)</td>
        <td></td>
        <td>Reference[]</td>
        <td><code>[{ "identifier": "2C86F905-B244-8FDD-4988-5088C023BDE9@1" }]</code></td>
    </tr>
    <tr>
        <td>totalBudget</td>
        <td>Total budget (amount, in US dollars)</td>
        <td></td>
        <td>string</td>
        <td><code>1234</code></td>
    </tr>
    <tr>
        <td>resultsAchievements</td>
        <td>Main achievements</td>
        <td></td>
        <td>lstring</td>
        <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
    </tr>
    <tr>
        <td>resultsOutputs</td>
        <td>Main outputs</td>
        <td></td>
        <td>Link[]</td>
        <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
    </tr>
    <tr>
        <td>resultsReference</td>
        <td>Please select the virtual library record number containing relevant information.</td>
        <td></td>
        <td>Reference[]</td>
        <td><code>[{ "identifier": "2E055D01-C58F-3195-D1C1-E53F0FF352AD@1" }]</code></td>
    </tr>
    <tr>
        <td>bestPractices</td>
        <td>Good practices and lessons learned</td>
        <td></td>
        <td>lstring</td>
        <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
    </tr>
    <tr>
        <td>tags</td>
        <td></td>
        <td></td>
        <td>lstring[]</td>
        <td></td>
    </tr>
    <tr>
        <td>adminTags</td>
        <td></td>
        <td></td>
        <td>string[]</td>
        <td></td>
    </tr>
    <tr>
        <td>relevantInformation</td>
        <td>Any other relevant information</td>
        <td></td>
        <td>lstring</td>
        <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
    </tr>
    <tr>
        <td>relevantDocuments</td>
        <td>Any other relevant documents</td>
        <td></td>
        <td>Link[]</td>
        <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
    </tr>    
  </tbody>
</table>
