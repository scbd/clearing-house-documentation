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
      <td><code>{ "identifier": "235A8B00-A995-5F7A-E827-FCC588C49C20", "schema": "focalPoint", "languages": ["en"] }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>government</td>
      <td></td>
      <td>Term</td>
      <td><code>{ "identifier": "1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>categories</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "Test Category" ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>description</td>
      <td></td>
      <td>string</td>
      <td><code>Test Description</code></td>
    </tr>
    <tr>
      <td></td>
      <td>title</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>firstName</td>
      <td></td>
      <td>string</td>
      <td><code>John</code></td>
    </tr>
    <tr>
      <td></td>
      <td>middleName</td>
      <td></td>
      <td>string</td>
      <td><code>Daniel</code></td>
    </tr>
    <tr>
      <td></td>
      <td>lastName</td>
      <td></td>
      <td>string</td>
      <td><code>Doe</code></td>
    </tr>
    <tr>
      <td></td>
      <td>gender</td>
      <td></td>
      <td>Term</td>
      <td><code>{ "identifier": "1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>organization</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>organizationAcronym</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>organizationType</td>
      <td></td>
      <td>Term</td>
      <td><code>{ "identifier": "1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>designation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>department</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>addressLine1</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>addressLine2</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>city</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>state</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>postalCode</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Information" }</code></td>
    </tr>
    <tr>
      <td><strong><a href="/abs/thesaurus/general/countries">Country</a></strong></td>
      <td>country</td>
      <td></td>
      <td>Term</td>
      <td><code>{ "identifier": "1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>phones</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "5437897410" ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>mobiles</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "5437897410" ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>faxes</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "5437897410" ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>emails</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "test@email.com" ]</code></td>
    </tr>
    <tr>
      <td></td>
      <td>websites</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
    </tr>
  </tbody>
</table>
