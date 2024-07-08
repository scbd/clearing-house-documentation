<script setup>
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

## Request Body

| Title                                                                                                       | Field                                | Mandatory | Type                                 | Example |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------- | ------------------------------------ | ------- |
|                                                                                                             | header                               |           | Eheader                              |         |
| Country                                                                                                     | government                           | True      | Eterm                                |         |
|                                                                                                             | updateReason                         |           | lstring                              |         |
| Competent national authority (CNA) responsible for issuing this permit or its equivalent                    | absCNA                               | True      | Ereference                           |         |
| Reference number of the permit or its equivalent                                                            | title                                | True      | lstring                              |         |
| Additional national references or identifiers                                                               | referenceToNationalPermit            |           | lstring                              |         |
| Date of issuance of the permit or its equivalent                                                            | dateOfIssuance                       | True      | DateTime <br><sub>(YYYY-MM-DD)</sub> |         |
| The provider                                                                                                | providers                            | True      | Ereference[]                         |         |
| This information is confidential                                                                            | providersConfidential                |           | bool                                 |         |
| Person or entity to whom prior informed consent (PIC) was granted                                           | entitiesToWhomPICGranted             | True      | Ereference[]                         |         |
| This information is confidential                                                                            | entitiesToWhomPICGrantedConfidential |           | bool                                 |         |
| Subject-matter or genetic resources covered by the permit or its equivalent                                 | subjectMatter                        | True      | lstring                              |         |
| This information is confidential                                                                            | subjectMatterConfidential            |           | bool                                 |         |
| Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent      | keywords                             |           | Eterm[]                              |         |
| Other keywords                                                                                              | keywordOther                         | True      | lstring                              |         |
| Specimen data                                                                                               | specimens                            |           | Elink[]                              |         |
| Taxonomy                                                                                                    | taxonomies                           |           | Elink[]                              |         |
| Geographic coordinates                                                                                      | gisFiles                             |           | Elink[]                              |         |
|                                                                                                             | gisMapCenter                         |           | EmapLocation                         |         |
| Amendment intent                                                                                            | amendmentIntent                      | True      | AmendmentIntent                      |         |
| Provide a summary of the reason for the update of the record                                                | amendmentDescription                 | True      | lstring                              |         |
| Confirmation that prior informed consent (PIC) was obtained or granted                                      | picGranted                           | True      | bool                                 |         |
| Additional information about the prior informed consent (PIC)                                               | picInformation                       |           | lstring                              |         |
| Additional information about the prior informed consent (PIC) - Documents                                   | picDocuments                         |           | Elink[]                              |         |
| Confirmation that mutually agreed terms (MAT) were established                                              | matEstablished                       | True      | bool                                 |         |
| Additional information about the mutually agreed terms (MAT) - Information                                  | matInformation                       |           | lstring                              |         |
| Additional information about the mutually agreed terms (MAT) - Documents                                    | matDocuments                         |           | Elink[]                              |         |
| Indicate if the permit or its equivalent covers commercial and/or non-commercial use                        | usages                               | True      | Eterm[]                              |         |
| This information is confidential                                                                            | usagesConfidential                   |           | bool                                 |         |
| Additional information about the specified uses covered by the permit or its equivalent or use restrictions | usagesDescription                    |           | lstring                              |         |
| Conditions for third party transfer                                                                         | thirdPartyTransferCondition          |           | lstring                              |         |
| Date of expiry of the permit or its equivalent                                                              | dateOfExpiry                         |           | DateTime                             |         |
| Copy of the permit or its equivalent, or other relevant open-access document                                | permitFiles                          |           | Elink[]                              |         |
| Short description of the attached link(s) and/or file(s)                                                    | permitDescription                    |           | lstring                              |         |
| Additional Information                                                                                      | relevantInformation                  |           | lstring                              |         |
| Other relevant website addresses and/or attached documents                                                  | relevantDocuments                    |           | Eterm[]                              |         |
| Notes                                                                                                       | notes                                |           | string                               |         |
| Links to other internationally recognized certificate(s) of compliance (IRCC) that relate(s) to this permit | relatedIRCC                          |           | Ereference[]                         |         |

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
      <td>Eheader</td>
      <td></td>
    </tr>
    <tr>
      <td>Country</td>
      <td>government</td>
      <td>True</td>
      <td>Eterm</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>updateReason</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Competent national authority (CNA) responsible for issuing this permit or its equivalent</td>
      <td>absCNA</td>
      <td>True</td>
      <td>Ereference</td>
      <td></td>
    </tr>
    <tr>
      <td>Reference number of the permit or its equivalent</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Additional national references or identifiers</td>
      <td>referenceToNationalPermit</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Date of issuance of the permit or its equivalent</td>
      <td>dateOfIssuance</td>
      <td>True</td>
      <td>DateTime <br><sub>(YYYY-MM-DD)</sub></td>
      <td></td>
    </tr>
    <!--  -->
    <tr>
        <td colspan="5" style="textAlign:center; fontWeight:bold">The provider</td>
    </tr>
    <tr>
        <td></td>
        <td>providers</td>
        <td>True</td>
        <td>Ereference[]</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>providersConfidential</td>
        <td></td>
        <td>bool</td>
        <td></td>
    </tr>
    <!--  -->
    <!--  -->
    <tr>
        <td colspan="5" style="textAlign:center; fontWeight:bold">Person or entity to whom prior informed consent (PIC) was granted</td>
    </tr>
    <tr>
        <td></td>
        <td>entitiesToWhomPICGranted</td>
        <td>True</td>
        <td>Ereference[]</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>entitiesToWhomPICGrantedConfidential</td>
        <td></td>
        <td>bool</td>
        <td></td>
    </tr>
    <!--  -->
    <!--  -->
    <tr>
        <td colspan="5" style="textAlign:center; fontWeight:bold">Subject-matter or genetic resources covered by the permit or its equivalent</td>
    </tr>
    <tr>
        <td></td>
        <td>subjectMatter</td>
        <td>True</td>
        <td>lstring</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>subjectMatterConfidential</td>
        <td></td>
        <td>bool</td>
        <td></td>
    </tr>
    <!--  -->
    <tr>
      <td>Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent</td>
      <td>keywords</td>
      <td></td>
      <td>Eterm[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Other keywords</td>
      <td>keywordOther</td>
      <td>True</td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Specimen data</td>
      <td>specimens</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Taxonomy</td>
      <td>taxonomies</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Geographic coordinates</td>
      <td>gisFiles</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>gisMapCenter</td>
      <td></td>
      <td>EmapLocation</td>
      <td></td>
    </tr>
    <tr>
      <td>Amendment intent</td>
      <td>amendmentIntent</td>
      <td>True</td>
      <td>AmendmentIntent</td>
      <td></td>
    </tr>
    <tr>
      <td>Provide a summary of the reason for the update of the record</td>
      <td>amendmentDescription</td>
      <td>True</td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Confirmation that prior informed consent (PIC) was obtained or granted</td>
      <td>picGranted</td>
      <td>True</td>
      <td>bool</td>
      <td></td>
    </tr>
    <tr>
      <td>Additional information about the prior informed consent (PIC)</td>
      <td>picInformation</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Additional information about the prior informed consent (PIC) - Documents</td>
      <td>picDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Confirmation that mutually agreed terms (MAT) were established</td>
      <td>matEstablished</td>
      <td>True</td>
      <td>bool</td>
      <td></td>
    </tr>
    <tr>
      <td>Additional information about the mutually agreed terms (MAT) - Information</td>
      <td>matInformation</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Additional information about the mutually agreed terms (MAT) - Documents</td>
      <td>matDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
    <!--  -->
    <tr>
        <td colspan="5" style="textAlign:center; fontWeight:bold">Indicate if the permit or its equivalent covers commercial and/or non-commercial use</td>
    </tr>
    <tr>
        <td></td>
        <td>usages</td>
        <td>True</td>
        <td>>Eterm[]</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>usagesConfidential</td>
        <td></td>
        <td>bool</td>
        <td></td>
    </tr>
    <!--  -->
    <tr>
      <td>Additional information about the specified uses covered by the permit or its equivalent or use restrictions</td>
      <td>usagesDescription</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Conditions for third party transfer</td>
      <td>thirdPartyTransferCondition</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Date of expiry of the permit or its equivalent</td>
      <td>dateOfExpiry</td>
      <td></td>
      <td>DateTime</td>
      <td></td>
    </tr>
    <tr>
      <td>Copy of the permit or its equivalent, or other relevant open-access document</td>
      <td>permitFiles</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Short description of the attached link(s) and/or file(s)</td>
      <td>permitDescription</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td></td>
    </tr>
    <tr>
      <td>Other relevant website addresses and/or attached documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Eterm[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>notes</td>
      <td></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td>Links to other internationally recognized certificate(s) of compliance (IRCC) that relate(s) to this permit</td>
      <td>relatedIRCC</td>
      <td></td>
      <td>Ereference[]</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="True" />
