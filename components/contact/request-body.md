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


The table below outlines the structure of the request body, including the fields, their types, and whether they are mandatory. Example values are provided for clarity.

<table class="schema-table" style="table-layout: fixed; width: 100%;">
  <thead>
    <tr>
      <th style="width: 40%;">Title</th>
      <th style="width: 20%;">Field</th>
      <th style="width: 10%;">Mandatory</th>
      <th style="width: 10%;">Type</th>
      <th style="width: 20%;">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>header</td>
      <td></td>
      <td><a href="/customTypes.html#header">Header</a></td>
      <td><code>
            {
              "identifier": "068C83BA-995F-08C3-50CE-AD43545B3EB5",
              "schema": "contact",
              "languages": [
                "en"
              ]
            }
          </code></td>
    </tr>
    <tr>
      <td><strong>Prefix</strong></td>
      <td>prefix</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ en:"Mr" }</code></td>
    </tr>
    <tr>
      <td><strong>First Name</strong></td>
      <td>firstName</td>
      <td>True</td>
      <td>string</td>
      <td><code>John</code></td>
    </tr>
    <tr>
      <td><strong>Middle Name</strong></td>
      <td>middleName</td>
      <td></td>
      <td>string</td>
      <td><code>Smith</code></td>
    </tr>
    <tr>
      <td><strong>Last Name</strong></td>
      <td>lastName</td>
      <td>True</td>
      <td>string</td>
      <td><code>Doe</code></td>
    </tr>
    <tr>
      <td><strong>Gender</strong></td>
      <td>gender</td>
      <td></td>
      <td><a href="/customTypes.html#term">Term</a></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Job Title</strong></td>
      <td>designation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ en:"Software" }</code></td>
    </tr>
    <tr>
      <td><strong>Organization</strong></td>
      <td>organization</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Organization" }</code></td>
    </tr>
    <tr>
      <td><strong>Acronym</strong></td>
      <td>organizationAcronym</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "CSBD" }</code></td>
    </tr>
    <tr>
      <td><strong>Department / Division / Unit</strong></td>
      <td>department</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Division" }</code></td>
    </tr>
    <tr>
      <td><strong><a href="/thesaurus/authority/organization-types">Type of Organization</a></strong></td>
      <td>organizationType</td>
      <td></td>
      <td><a href="/customTypes.html#term">Term</a></td>
      <td><code>{ "identifier": "86D464C3-B5BB-4B02-85E4-1AAD8D64CD27" }</code></td>
    </tr>
    <tr>
      <td><strong>Street Address</strong></td>
      <td>address</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "560 Franklin" }</code></td>
    </tr>
    <tr>
      <td><strong>City</strong></td>
      <td>city</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Cambridge" }</code></td>
    </tr>
    <tr>
      <td><strong>State or Province</strong></td>
      <td>state</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Ontario" }</code></td>
    </tr>
    <tr>
      <td><strong>Postal Code or Zip</strong></td>
      <td>postalCode</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "N1R 7Z1" }</code></td>
    </tr>
    <tr>
      <td><strong>Country of Contact</strong></td>
      <td>country</td>
      <td>True</td>
      <td><a href="/customTypes.html#term">Term</a></td>
      <td><code>{ "identifier": "ca" }</code></td>
    </tr>
    <tr>
      <td><strong>Phone Number(s)</strong></td>
      <td>phones</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "54825578896" ]</code></td>
    </tr>
    <tr>
      <td><strong>Fax Number(s)</strong></td>
      <td>faxes</td>
      <td></td>
      <td>string[]</td>
      <td><code>[ "123456" ]</code></td>
    </tr>
    <tr>
      <td><strong>Email(s)</strong></td>
      <td>emails</td>
      <td>True</td>
      <td>string[]</td>
      <td><code>[ "pramodjsam@gmail.com" ]</code></td>
    </tr>
    <tr>
      <td><strong>Website Address(es)</strong></td>
      <td>websites</td>
      <td></td>
      <td><a href="/customTypes.html#link">Link[]</a></td>
      <td><code>[ { "url": "http://www.google.com" } ]</code></td>
    </tr>
    <tr>
      <td><strong>Address Type</strong></td>
      <td>addressType</td>
      <td></td>
      <td>string</td>
      <td><code>organization</code></td>
    </tr>
    <tr>
      <td><strong>Relevant Information</strong></td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Relevant Documents</strong></td>
      <td>relevantDocuments</td>
      <td></td>
      <td><a href="/customTypes.html#link">Link[]</a></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Contact Type</strong></td>
      <td>type</td>
      <td>True</td>
      <td>string</td>
      <td><code>person</code></td>
    </tr>
    <tr>
      <td><strong><a href="/abs/thesaurus/general/countries">Country</a></strong></td>
      <td>government</td>
      <td></td>
      <td><a href="/customTypes.html#term">Term</a></td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td><strong>Organization</strong></td>
      <td>contactOrganization</td>
      <td>True</td>
      <td><a href="/customTypes.html#reference">Reference</a></td>
      <td><code>{ "identifier": "SIMP-22D52282-2FB2-AD2A-2965-476DFF6A7F37@1" }</code></td>
    </tr>    
  </tbody>
</table>
