<script setup>
// import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.create.json";
</script>

# IRCC - Create

## Endpoint

**POST** `/api/v2013/documents`

## Headers

| Field            | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Content-Type     | String | Raw document format mediaType. Allowed values: `application/json`                 |
| Authorization    | String | Token to use to authenticate the request                                          |
| Realm (optional) | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM` |
| Accept           | String | Result format. Allowed values: `application/json`                                 |

## Query Parameters

| Field  | Type   | Description                                               |
| ------ | ------ | --------------------------------------------------------- |
| schema | String | Specify the document common-format posted (type / schema) |

## URL Parameters

| Field | Type   | Description                                                                                           |
| ----- | ------ | ----------------------------------------------------------------------------------------------------- |
| uid   | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

## Request Table (HTML)

<table>
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
      <td><a href="/customTypes.html#eheader">Eheader</a></td>
      <td><code>{"header": {
        "identifier": "CB51626B-CF45-2AA0-3A24-459669DDCC34",
        "schema": "absPermit",
        "languages": [
            "en"
        ]
    }}</code></td>
    </tr>
    <tr>
      <td>Country</td>
      <td>government</td>
      <td>True</td>
      <td><a href="/customTypes.html#eterm">Eterm</a></td>
      <td><code>{"government": {
        "identifier": "af"
    }}</code></td>
    </tr>
    <tr>
      <td></td>
      <td>updateReason</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td></td>
    </tr>
    <tr>
      <td>Competent national authority (CNA) responsible for issuing this permit or its equivalent</td>
      <td>absCNA</td>
      <td>True</td>
      <td><a href="/customTypes.html#ereference">Ereference</a></td>
      <td><code>{"absCNA": {
        "identifier": "C84C7E6C-134C-F1B1-9A3B-B7443F135239@2"
    }}</code></td>
    </tr>
    <tr>
      <td>Reference number of the permit or its equivalent</td>
      <td>title</td>
      <td>True</td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"title": {
        "en": "123456"
    }}</code></td>
    </tr>
    <tr>
      <td>Additional national references or identifiers</td>
      <td>referenceToNationalPermit</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>"referenceToNationalPermit": {
        "en": "<div><!--block-->strsgfsgfdxgf</div>"
    }</code></td>
    </tr>
    <tr>
      <td>Date of issuance of the permit or its equivalent</td>
      <td>dateOfIssuance</td>
      <td>True</td>
      <td>DateTime <br><sub><em>(YYYY-MM-DD)</em></sub></td>
      <td><code>{"dateOfIssuance": "2024-07-02"}</code></td>
    </tr>
    <!--  -->
    <tr>
        <td colspan="5" style=" fontWeight:bold">The provider</td>
    </tr>
    <tr>
        <td></td>
        <td>providers</td>
        <td>True</td>
        <td><a href="/customTypes.html#ereference">Ereference[]</a></td>
        <td><code> "providers": [
        {
            "identifier": "DECLARE-ORGANISATION_3386_20240709020251617@1"
        }
    ]</code></td>
    </tr>
    <tr>
        <td></td>
        <td>providersConfidential</td>
        <td></td>
        <td>bool</td>
        <td><code>{providersConfidential: true}</code></td>
    </tr>
    <!--  -->
    <!--  -->
    <tr>
        <td colspan="5" style="fontWeight:bold">Person or entity to whom prior informed consent (PIC) was granted</td>
    </tr>
    <tr>
        <td></td>
        <td>entitiesToWhomPICGranted</td>
        <td>True</td>
        <td><a href="/customTypes.html#ereference">Ereference[]</a></td>
        <td><code> {"entitiesToWhomPICGranted": [
        {
            "identifier": "DECLARE-ORGANISATION_3386_20240709020251617@1"
        }
    ]}</code></td>
    </tr>
    <tr>
        <td></td>
        <td>entitiesToWhomPICGrantedConfidential</td>
        <td></td>
        <td>bool</td>
        <td><code>{entitiesToWhomPICGrantedConfidential: true}</code></td>
    </tr>
    <!--  -->
    <!--  -->
    <tr>
        <td colspan="5" style="fontWeight:bold">Subject-matter or genetic resources covered by the permit or its equivalent</td>
    </tr>
    <tr>
        <td></td>
        <td>subjectMatter</td>
        <td>True</td>
        <td><a href="/customTypes.html#lstring">lstring</a></td>
        <td><code>{"subjectMatter": {
        "en": "<div><!--block-->asdf</div>"
    }}</code></td>
    </tr>
    <tr>
        <td></td>
        <td>subjectMatterConfidential</td>
        <td></td>
        <td>bool</td>
        <td><code>{subjectMatterConfidential: true}</code></td>
    </tr>
    <!--  -->
    <tr>
      <td>Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent</td>
      <td>keywords</td>
      <td></td>
      <td><a href="/customTypes.html#eterm">Eterm[]</a></td>
      <td><code>{"keywords": [
        {
            "identifier": "357DBB22-6A6C-4C49-BA1F-037320B09247"
        }
    ]}</code></td>
    </tr>
    <tr>
      <td>Other keywords</td>
      <td>keywordOther</td>
      <td>True</td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td></td>
    </tr>
    <tr>
      <td>Specimen data</td>
      <td>specimens</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>{"specimens": [
        {
            "url": "https://www.Google.com",
            "name": "Google",
            "language": "en"
        }
    ]}</code></td>
    </tr>
    <tr>
      <td>Taxonomy</td>
      <td>taxonomies</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>{"taxonomies": [
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]}</code></td>
    </tr>
    <tr>
      <td>Geographic coordinates</td>
      <td>gisFiles</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>gisMapCenter</td>
      <td></td>
      <td><a href="/customTypes.html#emaplocation">EmapLocation</a></td>
      <td></td>
    </tr>
    <tr>
      <td>Amendment intent</td>
      <td>amendmentIntent</td>
      <td>True</td>
      <td><a href="/customTypes.html#amendmentintent">AmendmentIntent</a></td>
      <td></td>
    </tr>
    <tr>
      <td>Provide a summary of the reason for the update of the record</td>
      <td>amendmentDescription</td>
      <td>True</td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td></td>
    </tr>
    <tr>
      <td>Confirmation that prior informed consent (PIC) was obtained or granted</td>
      <td>picGranted</td>
      <td>True</td>
      <td>bool</td>
      <td><code>{"picGranted": true}</code></td>
    </tr>
    <tr>
      <td>Additional information about the prior informed consent (PIC)</td>
      <td>picInformation</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"picInformation": {
        "en": "<div><!--block-->asdfasdfasdf</div>"
    }}</code></td>
    </tr>
    <tr>
      <td>Additional information about the prior informed consent (PIC) - Documents</td>
      <td>picDocuments</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>{"picDocuments": [
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]}</code></td>
    </tr>
    <tr>
      <td>Confirmation that mutually agreed terms (MAT) were established</td>
      <td>matEstablished</td>
      <td>True</td>
      <td>bool</td>
      <td><code>{"matEstablished": true}</code></td>
    </tr>
    <tr>
      <td>Additional information about the mutually agreed terms (MAT) - Information</td>
      <td>matInformation</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"matInformation": {
        "en": "<div><!--block-->asdf</div>"
    }}</code></td>
    </tr>
    <tr>
      <td>Additional information about the mutually agreed terms (MAT) - Documents</td>
      <td>matDocuments</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>{"matDocuments": [
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]}</code></td>
    </tr>
    <!--  -->
    <tr>
        <td colspan="5" style="fontWeight:bold">Indicate if the permit or its equivalent covers commercial and/or non-commercial use</td>
    </tr>
    <tr>
        <td></td>
        <td>usages</td>
        <td>True</td>
        <td><a href="/customTypes.html#eterm">Eterm[]</a></td>
        <td><code>{"usages": [
        {
            "identifier": "5E833A3F-87D1-4ADD-8701-9F1B76383017"
        }
    ]}</code></td>
    </tr>
    <tr>
        <td></td>
        <td>usagesConfidential</td>
        <td></td>
        <td>bool</td>
        <td><code>{usagesConfidential: true}</code></td>
    </tr>
    <!--  -->
    <tr>
      <td>Additional information about the specified uses covered by the permit or its equivalent or use restrictions</td>
      <td>usagesDescription</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"usagesDescription": {
        "en": "<div><!--block-->asdf</div>"
    }}</code></td>
    </tr>
    <tr>
      <td>Conditions for third party transfer</td>
      <td>thirdPartyTransferCondition</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"thirdPartyTransferCondition": {
        "en": "<div><!--block-->asdf</div>"
    }}</code></td>
    </tr>
    <tr>
      <td>Date of expiry of the permit or its equivalent</td>
      <td>dateOfExpiry</td>
      <td></td>
      <td>DateTime</td>
      <td><code>{"dateOfExpiry": "2024-07-16"}</code></td>
    </tr>
    <tr>
      <td>Copy of the permit or its equivalent, or other relevant open-access document</td>
      <td>permitFiles</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>{"permitFiles": [
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]}</code></td>
    </tr>
    <tr>
      <td>Short description of the attached link(s) and/or file(s)</td>
      <td>permitDescription</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"permitDescription": {
        "en": "<div><!--block-->asdf</div>"
    }}</code></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>relevantInformation</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"relevantInformation": {
        "en": "<div><!--block-->asfd</div>"
    }}</code></td>
    </tr>
    <tr>
      <td>Other relevant website addresses and/or attached documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td><a href="/customTypes.html#eterm">Eterm[]</a></td>
      <td><code>{"relevantDocuments": [
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]}</code></td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>notes</td>
      <td></td>
      <td>string</td>
      <td><code>{"notes": "[\"[ Pramod Sam | Jul 8, 2024 8:10:52 PM ] - aasdfasdf\"]"}</code></td>
    </tr>
    <tr>
      <td>Links to other internationally recognized certificate(s) of compliance (IRCC) that relate(s) to this permit</td>
      <td>relatedIRCC</td>
      <td></td>
      <td><a href="/customTypes.html#ereference">Ereference[]</a></td>
      <td><code>{"relatedIRCCs": [
        {
            "identifier": "8C22B282-BE5A-72D8-C754-932CC49CC9B4@1"
        }
    ]}</code></td>
    </tr>
  </tbody>
</table>

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="True" />
