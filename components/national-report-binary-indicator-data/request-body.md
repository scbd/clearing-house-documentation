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
            <td></td>
            <td><code>{ "schema": "nationalReport7BinaryIndicatorData", "identifier": "FBF3560A-696F-4719-4B47-D1C0CF15B05F", "languages": [ "en" ] }</code></td>
        </tr>
        <tr>
            <td>Government</td>
            <td>government</td>
            <td>True</td>
            <td>Term</td>
            <td><code>{ "identifier": "af" }</code></td>
        </tr>
        <tr>
            <td>BIN.B Number of countries with national constitution or legislation recognizing and implementing and monitoring a right to a healthy environment</td>
            <td>binaryResponseGoalC</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-C-13" }, "responses": { "13_1": "??", "13_2": "??", "13_3": "yesFully", "13_3_alt": "??" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.C.13 Number of countries that have operational legislative, administrative or policy frameworks which relate to Target 13</td>
            <td>binaryResponseGoalB</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-B" }, "responses": { "b_1": "yesFully", "b_2": "yesFully" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.1 Number of countries using terrestrial and marine spatial planning to identify areas of high biodiversity importance in national development planning</td>
            <td>binaryResponseTarget1</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-1" }, "responses": { "1_a": "yesFully", "1_b": "yesFully", "1_c": "yesFully" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.6 Number of countries adopting relevant national legislation and adequately resourcing the prevention or control of invasive alien species</td>
            <td>binaryResponseTarget6</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-6" }, "responses": { "6_1": "yesFully", "6_2": "yesFully" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.8 Number of countries with nationally determined contributions, long-term strategies, national adaptation plans and adaptation communications that reflect biodiversity</td>
            <td>binaryResponseTarget8</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-8" }, "responses": { "8_1": "??", "8_2": "yesFully", "8_3": "??", "8_4": "??" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.9 Number of countries with legal instruments to regulate the use and trade of wild species, and respecting customary sustainable use by indigenous peoples and local communities</td>
            <td>binaryResponseTarget9</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-9" }, "responses": { "9_1": "yesFully", "9_2": "??", "9_3": "??", "9_4": "yesFully" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.12 Number of countries with urban sustainability plans referring to green and/or blue spatial management</td>
            <td>binaryResponseTarget12</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-12" }, "responses": { "12_1": "??", "12_2": "??" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.15 Number of countries taking legal, administrative or policy measures to ensure that Target 15 is achieved</td>
            <td>binaryResponseTarget15</td>
            <td></td>
            <td></td>
            <td><code>{ "indicator": { "identifier": "KMGBF-INDICATOR-BIN-15" }, "responses": { "15_1": "yesFully", "15_2": "yesFully", "15_3": "yesFully" }, "comments": { "en": "<p>Test Info</p>" } }</code></td>
        </tr>
        <tr>
            <td>BIN.16 Number of countries developing, adopting or implementing policy instruments aimed at supporting the shift to sustainable consumption and production (SDG Indicator 12.1.1)</td>
            <td>binaryResponseTarget16</td>
            <td></td>
            <td></td>
            <td>
                <code>{"indicator": {"identifier": "KMGBF-INDICATOR-BIN-16"},"responses": {"16_1": "yesFully","16_2": "yesFully","16_3": "??"},"comments": {"en": "<p>Test Info</p>"}}</code>
            </td>
        </tr>
         <tr>
            <td>BIN.17 Number of countries with capacity and measures in place related to Target 17</td>
            <td>binaryResponseTarget17</td>
            <td></td>
            <td></td>
            <td>
                <code>{"indicator": {"identifier": "KMGBF-INDICATOR-BIN-17"},"responses": {"17_1": "yesFully","17_2": "yesFully","17_3": "??","17_4": "yesFully","17_5": "yesFully"},"comments": {"en": "<p>Test Info</p>"}}</code>
            </td>
        </tr>
       <tr>
            <td></td>
            <td>binaryResponseTarget20</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>BIN.22 Number of countries recognizing the legal rights of indigenous peoples and local communities, environmental human rights defenders, women, youth and persons with disabilities with respect to their traditional territories, cultures and practices</td>
            <td>binaryResponseTarget22</td>
            <td></td>
            <td></td>
            <td>
                <code>{"indicator": {"identifier": "KMGBF-INDICATOR-BIN-22"},"responses": {"22_1_a": ["indigenousPeoplesLocalCommunities"],"22_1_b": ["cultureAndPractices"],"22_1_c": "yes","22_1_d": ["indigenousPeoplesLocalCommunities"],"22_1_e": ["indigenousPeoplesLocalCommunities"],"22_2": "yesFully","22_3": "??","22_4": "yes","22_5_a": ["indigenousPeoplesLocalCommunities"],"22_5_b": ["cultureAndPractices"],"22_5_c": "yes"},"comments": {"en": "<p>Test Info</p>"}}</code>
            </td>
        </tr>
        <tr>
            <td>BIN.23 Number of countries where the legal framework (including customary law) guarantees women's equal rights to land ownership and/or control</td>
            <td>binaryResponseTarget23</td>
            <td></td>
            <td></td>
            <td>
                <code>{"indicator": {"identifier": "KMGBF-INDICATOR-BIN-23"},"responses": {"23_1": "yesFully","23_2": "yesFully","23_3": "yesFully","23_4": "??","23_5": "yes","23_6": "yesFully","23_7": "yesFully"},"comments": {"en": "<p>Test Info</p>"}}
                </code>
            </td>
        </tr>
    </tbody>
</table>
