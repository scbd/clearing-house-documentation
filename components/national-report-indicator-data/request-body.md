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
      <td><code>{ "schema": "nationalReport7IndicatorData", "identifier": "4556EB18-6D4D-2F58-3B0D-75D6AEEC27A7", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td>Government</td>
      <td>government</td>
      <td>True</td>
      <td>Term</td>
      <td><code>[ { "identifier": "ao" }, { "identifier": "A23DD6C0-44C5-418D-83B5-461D79D2721A" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>indicator</td>
      <td>True</td>
      <td>Term</td>
      <td><code>[ { "identifier": "ao" }, { "identifier": "A23DD6C0-44C5-418D-83B5-461D79D2721A" } ]</code></td>
    </tr>
    <tr>
      <td>Source of Data</td>
      <td>sourceOfData</td>
      <td>True</td>
      <td>string</td>
      <td><code>Test Info</code></td>
    </tr>
    <tr>
      <td>Global source of data</td>
      <td>globalDataSources</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google.com", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Indicator providers</td>
      <td>globalIndicatorProviders</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google.com", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>globalDescription</td>
      <td></td>
      <td>string</td>
      <td><code>Test Info</code></td>
    </tr>
    <tr>
      <td>Data</td>
      <td>data</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Indicator code</td>
      <td>indicatorCode</td>
      <td></td>
      <td>string</td>
      <td><code>Test Info</code></td>
    </tr>
    <tr>
      <td>Does this data row represent a disaggregation</td>
      <td>hasDisaggregation</td>
      <td></td>
      <td>Boolean</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Disaggregation</td>
      <td>disaggregation</td>
      <td></td>
      <td>string</td>
      <td><code>Test Info</code></td>
    </tr>
    <tr>
      <td>Year</td>
      <td>year</td>
      <td></td>
      <td>int</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td>Unit</td>
      <td>unit</td>
      <td></td>
      <td>string</td>
      <td><code>Test Info</code></td>
    </tr>
    <tr>
      <td>Value</td>
      <td>value</td>
      <td></td>
      <td>decimal</td>
      <td><code>0.01</code></td>
    </tr>
    <tr>
      <td>Footnote</td>
      <td>footnote</td>
      <td></td>
      <td>string</td>
      <td><code>Test Info</code></td>
    </tr>
    <tr>
      <td>Comments</td>
      <td>comments</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
  </tbody>
</table>
