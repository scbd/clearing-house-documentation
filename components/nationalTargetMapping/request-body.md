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
      <td><code>{ "schema": "nationalTarget7Mapping", "identifier": "CEA6211F-DCA8-9403-E98F-51B4DD28ADAB", "languages": [ "en", "ab" ] }</code></td>
    </tr>
    <tr>
      <td>Government</td>
      <td>government</td>
      <td>True</td>
      <td>Term</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>globalGoalOrTarget</td>
      <td></td>
      <td>Term</td>
      <td></td>
    </tr>
    <tr>
      <td>Elements of the global targets addressed by national targets (Please also include which aspects of the global targets have not been covered by the national targets)</td>
      <td>elementOfGlobalTargetsInfo</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td>Reference Period</td>
      <td>referencePeriod</td>
      <td></td>
      <td></td>
      <td><code>[ { "headlineIndicator": { "identifier": "GBF-INDICATOR-1.1" }, "hasReferencePeriod": True, "referencePeriodInfo": { "en": "<p>TEst Info</p>" } } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>headlineIndicator</td>
      <td></td>
      <td>Reference</td>
      <td></td>
    </tr>
    <tr>
      <td>Is there a reference period which relates to the headline indicator?</td>
      <td>hasReferencePeriod</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td></td>
      <td>referencePeriodInfo</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>additionalInformation</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>additionalDocuments</td>
      <td></td>
      <td>Link[]</td>
      <td></td>
    </tr>
  </tbody>
</table>
