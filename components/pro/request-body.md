<table class="ircc__table" style="table-layout: fixed; width: 100%;">
  <tr>
    <th>Title</th>
    <th>Field</th>
    <th>Mandatory</th>
    <th>Type</th>
    <th>Example</th>
  </tr>
  <tr>
    <td></td>
    <td>header</td>
    <td></td>
    <td>Header</td>
    <td><code>{ "identifier": "83B2A1B2-95A5-6723-6C0D-28BC3143B321", "schema": "absProcedure", "languages": ["en"] }</code></td>
  </tr>
  <tr>
    <td>Country</td>
    <td>government</td>
    <td>True</td>
    <td>Term</td>
    <td><code>{ "identifier": "af" }</code></td>
  </tr>
  <tr>
    <td>This is an ABS procedure for:</td>
    <td>name</td>
    <td>True</td>
    <td>lstring</td>
    <td><code>{ "en": "Test Info" }</code></td>
  </tr>
  <tr>
    <td>Area of jurisdiction</td>
    <td>jurisdiction</td>
    <td>True</td>
    <td>Term</td>
    <td><code>{ "identifier": "5B6177DD-5E5E-434E-8CB7-D63D67D5EBED", "customValue": { "en": "Test Jurisdiction" } }</code></td>
  </tr>
  <tr>
    <td>Where should applications for access be made?</td>
    <td>contacts</td>
    <td>True</td>
    <td>Reference[]</td>
    <td><code>[{ "identifier": "DECLARE-ORGANISATION_24185_20241104154859186@1" }]</code></td>
  </tr>
  <tr>
    <td>Where should applications for access be made?</td>
    <td>links</td>
    <td></td>
    <td>Link[]</td>
    <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
  </tr>
  <tr>
    <td>What are the conditions or requirements a potential user needs to fulfil to apply for access?</td>
    <td>requirements</td>
    <td></td>
    <td>lstring</td>
    <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
  </tr>
  <tr>
    <td>Please provide a step-by-step description or a visual representation of the ABS procedure</td>
    <td>description</td>
    <td></td>
    <td>lstring</td>
    <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
  </tr>
  <tr>
    <td>For example, you may wish to attach a flow chart or timeline.</td>
    <td>descriptionLinks</td>
    <td></td>
    <td>Link[]</td>
    <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
  </tr>
  <tr>
    <td>Does the applicant need to provide any documents?</td>
    <td>hasApplicationDocuments</td>
    <td>True</td>
    <td>bool</td>
    <td><code>True</code></td>
  </tr>
  <tr>
    <td>Please provide information on application forms or required documents (e.g.: copy of applicant’s national passport)</td>
    <td>applicationInformation</td>
    <td></td>
    <td>lstring</td>
    <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
  </tr>
  <tr>
    <td>Please attach relevant application form/documents or provide a link to website</td>
    <td>applicationLinks</td>
    <td></td>
    <td>Link[]</td>
    <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
  </tr>
  <tr>
    <td>Please provide information on whom the application should be sent to</td>
    <td>applicationContacts</td>
    <td></td>
    <td>Reference[]</td>
    <td><code>[{ "identifier": "DECLARE-ORGANISATION_24185_20241104154859186@1" }]</code></td>
  </tr>
  <tr>
    <td>Are there application fees?</td>
    <td>hasApplicationFees</td>
    <td>True</td>
    <td>bool</td>
    <td><code>True</code></td>
  </tr>
  <tr>
    <td>Please provide any additional information on application fees</td>
    <td>applicationFeesInformation</td>
    <td></td>
    <td>lstring</td>
    <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
  </tr>
  <tr>
    <td>How long does the application process take</td>
    <td>duration</td>
    <td></td>
    <td>int</td>
    <td><code>3</code></td>
  </tr>
  <tr>
    <td>Days Months Years</td>
    <td>durationPeriod</td>
    <td></td>
    <td>string</td>
    <td><code>months</code></td>
  </tr>
  <tr>
    <td>Relevant ABS measure(s)</td>
    <td>relevantMeasures</td>
    <td></td>
    <td>Reference[]</td>
    <td><code>[{ "identifier": "A3722021-0CC0-B195-75BE-954F133FF78B@1" }]</code></td>
  </tr>
  <tr>
    <td>Keywords</td>
    <td>keywords</td>
    <td></td>
    <td>Term[]</td>
    <td><code>[{ "identifier": "EC94899F15EE40C6A0F7D0B1F774A521" }]</code></td>
  </tr>
  <tr>
    <td>Please use this field to provide any other relevant information that may not have been addressed elsewhere in the record.</td>
    <td>relevantInformation</td>
    <td></td>
    <td>lstring</td>
    <td><code>{ "en": "<div><!--block-->Test Info</div>" }</code></td>
  </tr>
  <tr>
    <td>Other relevant website addresses and/or attached documents</td>
    <td>relevantDocuments</td>
    <td></td>
    <td>Link[]</td>
    <td><code>[{ "url": "https://www.google.com", "name": "Google", "language": "en" }]</code></td>
  </tr>
</table>
