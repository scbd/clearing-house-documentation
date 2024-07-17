<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.create.json";
</script>

# IRCC - Create

## Overview

This documentation describes the API endpoint for creating an IRCC (Internationally Recognized Certificate of Compliance) using the POST method. The endpoint allows clients to submit documents to the system.

## Introduction

Permits or their equivalent constituting an internationally recognized certificate of compliance (IRCC) are critical for ensuring that genetic resources are accessed in accordance with prior informed consent (PIC) and that mutually agreed terms (MAT) have been established. The IRCC serves as evidence that these conditions have been met and plays a key role in monitoring and enhancing transparency about the utilization of genetic resources.

To access this API, users must be affiliated with a government entity and possess one of the following roles: National Focal Point (NFP), National Authorized User (NAU), or Government Representative. These roles ensure that the individuals have the authority and responsibility to manage genetic resources and compliance certificates.

Moreover, the API and associated token are restricted to use within the context of a single government. Users cannot use the token for multiple governments or share it for cross-government operations. This restriction ensures that the process remains secure and that each government's compliance is managed independently.

### Key Provisions

1. **Issuance of Permit or Equivalent**: At the time of access, a permit or its equivalent is issued as evidence of the decision to grant PIC and the establishment of MAT.
2. **Publication to ABS Clearing-House**: This information is made available to the ABS Clearing-House in accordance with relevant articles of the Convention on Biological Diversity (CBD).
3. **Constitution of IRCC**: Once the information is published in the ABS Clearing-House, an internationally recognized certificate of compliance is constituted.
4. **Role of IRCC**: The IRCC serves as evidence that the genetic resource covered has been accessed in accordance with PIC and MAT. It includes essential information such as issuing authority, date of issuance, provider, unique identifier, subject-matter or genetic resources covered, and confirmation of MAT and PIC.

Parties are required to fill out the form with mandatory fields to ensure the IRCC is constituted. Confidential information should not be submitted as all information made available to the ABS Clearing-House will be public.

## Endpoint

**POST** `/api/v2013/documents`

This is the endpoint to which the POST request should be made to create a new document.

## Headers

| Field            | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Content-Type     | String  &nbsp;&nbsp;  | Raw document format mediaType. Allowed values: `application/json`                 |
| Authorization    | String | Token to use to authenticate the request                                          |
| Realm | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM`, `DEV` |
| Accept           | String | Result format. Allowed values: `application/json`                                 |

Headers required to authenticate and define the context and format of the request and response. The `Authorization` header must contain a valid token, while the `Content-Type` and `Accept` headers specify the format of the document and response, respectively. [Here are the steps to get the Authorization token](/user/authentication).

## Query Parameters

| Field  | Type   | Description                                               |
| ------ | ------ | --------------------------------------------------------- |
| schema | String | Specify the document common-format posted (type / schema) |

Query parameters provide additional options for the request. The `schema` parameter defines the type of document being posted.

## URL Parameters

| Field | Type   | Description                                                                                           |
| ----- | ------ | ----------------------------------------------------------------------------------------------------- |
| uid   | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

URL parameters include essential identifiers for the document. The `uid` parameter uniquely identifies the document in the system.

<!--@include: ../../../components/common/validation-error.md-->

## Request Table

The table below outlines the structure of the request body, including the fields, their types, and whether they are mandatory. Example values are provided for clarity.

<table style="table-layout: fixed; width: 100%;">
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
      <td><a href="/customTypes.html#eheader">Eheader</a></td>
      <td><code>
            {
              "identifier": "CB51626B-CF45-2AA0-3A24-459669DDCC34",
              "schema": "absPermit",
              "languages": [
                "en"
              ]
            }
          </code></td>
    </tr>
     <tr>
      <td>Country</td>
      <td>government</td>
      <td>True</td>
      <td><a href="/customTypes.html#eterm">Eterm</a></td>
      <td><code>{"identifier": "af"}</code></td>
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
      <td><code>{"identifier": "C84C7E6C-134C-F1B1-9A3B-B7443F135239@2"}</code></td>
    </tr>
    <tr>
      <td>Reference number of the permit or its equivalent</td>
      <td>title</td>
      <td>True</td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"en": "123456"}</code></td>
    </tr>
    <tr>
      <td>Additional national references or identifiers</td>
      <td>referenceToNationalPermit</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{"en": "strsgfsgfdxgf"}</code></td>
    </tr>
    <tr>
      <td>Date of issuance of the permit or its equivalent</td>
      <td>dateOfIssuance</td>
      <td>True</td>
      <td>Date <br><sub><em>(YYYY-MM-DD)</em></sub></td>
      <td><code>"2024-07-02"</code></td>
    </tr>
    <tr>
        <td colspan="5" style=" fontWeight:bold">The provider (Select any of the two from below)</td>
    </tr>
    <tr>
        <td></td>
        <td>providers</td>
        <td>True</td>
        <td><a href="/customTypes.html#ereference">Ereference[]</a></td>
        <td><code>[
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
    <tr>
        <td colspan="5" style="fontWeight:bold">Person or entity to whom prior informed consent (PIC) was granted</td>
    </tr>
    <tr>
        <td></td>
        <td>entitiesToWhomPICGranted</td>
        <td>True</td>
        <td><a href="/customTypes.html#ereference">Ereference[]</a></td>
        <td><code>[
        {
            "identifier": "DECLARE-ORGANISATION_3386_20240709020251617@1"
        }
    ]</code></td>
    </tr>
    <tr>
        <td></td>
        <td>entitiesToWhomPICGrantedConfidential</td>
        <td></td>
        <td>bool</td>
        <td><code>true</code></td>
    </tr>
    <tr>
        <td colspan="5" style="fontWeight:bold">Subject-matter or genetic resources covered by the permit or its equivalent (Select any of the two from below)</td>
    </tr>
    <tr>
        <td></td>
        <td>subjectMatter</td>
        <td>True</td>
        <td><a href="/customTypes.html#lstring">lstring</a></td>
        <td><code>{"en": "<div><!--block-->asdf</div>"
    }</code></td>
    </tr>
    <tr>
        <td></td>
        <td>subjectMatterConfidential</td>
        <td></td>
        <td>bool</td>
        <td><code>{subjectMatterConfidential: true}</code></td>
    </tr>
    <tr>
      <td>Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent</td>
      <td>keywords</td>
      <td></td>
      <td><a href="/customTypes.html#eterm">Eterm[]</a></td>
      <td><code>[
        {
            "identifier": "357DBB22-6A6C-4C49-BA1F-037320B09247"
        }
    ]</code></td>
    </tr>
    <tr>
      <td>Other keywords</td>
      <td>keywordOther</td>
      <td>True</td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td></td>
    </tr>
     <tr>
        <td colspan="5" style=" fontWeight:bold">Additional subject-matter or genetic resources information (Select any one of the three below)</td>
    </tr>
    <tr>
      <td><b>1. Specimen data</b></td>
      <td>specimens</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>[
        {
            "url": "https://www.Google.com",
            "name": "Google",
            "language": "en"
        }
    ]</code></td>
    </tr>
    <tr>
      <td><b>2. Taxonomy</b></td>
      <td>taxonomies</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>[
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]</code></td>
    </tr>
    <tr>
      <td><b>3. Geographic coordinates</b></td>
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
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>Additional information about the prior informed consent (PIC)</td>
      <td>picInformation</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{
        "en": "<div><!--block-->asdfasdfasdf</div>"
    }</code></td>
    </tr>
    <tr>
      <td>Additional information about the prior informed consent (PIC) - Documents</td>
      <td>picDocuments</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>[
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]</code></td>
    </tr>
    <tr>
      <td>Confirmation that mutually agreed terms (MAT) were established</td>
      <td>matEstablished</td>
      <td>True</td>
      <td>bool</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>Additional information about the mutually agreed terms (MAT) - Information</td>
      <td>matInformation</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{
        "en": "<div><!--block-->asdf</div>"
    }</code></td>
    </tr>
    <tr>
      <td>Additional information about the mutually agreed terms (MAT) - Documents</td>
      <td>matDocuments</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>[
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]</code></td>
    </tr>
    <tr>
        <td colspan="5" style="fontWeight:bold">Indicate if the permit or its equivalent covers commercial and/or non-commercial use</td>
    </tr>
    <tr>
        <td></td>
        <td>usages</td>
        <td>True</td>
        <td><a href="/customTypes.html#eterm">Eterm[]</a></td>
        <td><code>[
        {
            "identifier": "5E833A3F-87D1-4ADD-8701-9F1B76383017"
        }
    ]</code></td>
    </tr>
    <tr>
        <td></td>
        <td>usagesConfidential</td>
        <td></td>
        <td>bool</td>
        <td><code>true</code></td>
    </tr>
    <tr>
      <td>Additional information about the specified uses covered by the permit or its equivalent or use restrictions</td>
      <td>usagesDescription</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{
        "en": "<div><!--block-->asdf</div>"
    }</code></td>
    </tr>
    <tr>
      <td>Conditions for third party transfer</td>
      <td>thirdPartyTransferCondition</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{
        "en": "<div><!--block-->asdf</div>"
    }</code></td>
    </tr>
    <tr>
      <td>Date of expiry of the permit or its equivalent</td>
      <td>dateOfExpiry</td>
      <td></td>
      <td>Date</td>
      <td><code>"2024-07-16"</code></td>
    </tr>
    <tr>
      <td>Copy of the permit or its equivalent, or other relevant open-access document</td>
      <td>permitFiles</td>
      <td></td>
      <td><a href="/customTypes.html#elink">Elink[]</a></td>
      <td><code>[
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]</code></td>
    </tr>
    <tr>
      <td>Short description of the attached link(s) and/or file(s)</td>
      <td>permitDescription</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{
        "en": "<div><!--block-->asdf</div>"
    }</code></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>relevantInformation</td>
      <td></td>
      <td><a href="/customTypes.html#lstring">lstring</a></td>
      <td><code>{
        "en": "<div><!--block-->asfd</div>"
    }</code></td>
    </tr>
    <tr>
      <td>Other relevant website addresses and/or attached documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td><a href="/customTypes.html#eterm">Eterm[]</a></td>
      <td><code>[
        {
            "url": "https://www.google.com",
            "name": "Google",
            "language": "en"
        }
    ]</code></td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>notes</td>
      <td></td>
      <td>string</td>
      <td><code>"[\"[ Pramod Sam | Jul 8, 2024 8:10:52 PM ] - aasdfasdf\"]"</code></td>
    </tr>
    <tr>
      <td>Links to other internationally recognized certificate(s) of compliance (IRCC) that relate(s) to this permit</td>
      <td>relatedIRCC</td>
      <td></td>
      <td><a href="/customTypes.html#ereference">Ereference[]</a></td>
      <td><code>[
        {
            "identifier": "8C22B282-BE5A-72D8-C754-932CC49CC9B4@1"
        }
    ]</code></td>
    </tr>
  </tbody>
</table>

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />
