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
      <td>Eheader</td>
      <td><code>{ "schema": "nationalTarget7", "identifier": "E285E271-3CD8-B8BB-3385-FAFA6E88F16B", "languages": ["en", "ab"] }</code></td>
    </tr>
    <tr>
      <td>Welcome to your country's ({government}) 7th National Report overview. Please select an option to proceed.</td>
      <td>government</td>
      <td>TRUE</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>sectionI</td>
      <td>TRUE</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Please briefly describe the process undertaken for the preparation of this report (responses may include the following)</td>
      <td>processUndertaken</td>
      <td>TRUE</td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>sectionII</td>
      <td>TRUE</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Has your country revised or updated NBSAPs in the light of the Kunming-Montreal Global Biodiversity Framework?</td>
      <td>hasRevisedNbsap</td>
      <td></td>
      <td>string</td>
      <td><code>yes</code></td>
    </tr>
    <tr>
      <td>Please indicate the anticipated date of completion of the revision or updating of the NBSAP</td>
      <td>anticipatedNbsapDate</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-11-27</code></td>
    </tr>
    <tr>
      <td>Did your country involve and engage stakeholders in revising or updating NBSAPs?</td>
      <td>hasStakeholderEngagement</td>
      <td></td>
      <td>Boolean</td>
      <td><code>TRUE</code></td>
    </tr>
    <tr>
      <td>Stakeholders</td>
      <td>stakeholders</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[{ "identifier": "EC872EB8-02B0-46E7-AAB0-C79AC629356A" }]</code></td>
    </tr>
    <tr>
      <td>Has your country's revised or updated NBSAPs been adopted as policy or legal instruments?</td>
      <td>hasNbsapAdopted</td>
      <td></td>
      <td>string</td>
      <td><code>yes</code></td>
    </tr>
    <tr>
      <td>Please indicate the anticipated date of adoption</td>
      <td>anticipatedNbsapAdoptionDate</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-11-21</code></td>
    </tr>
    <tr>
      <td>Please indicate the type of policy instrument your country's revised or updated NBSAPs has been adopted as</td>
      <td>policyInstrument</td>
      <td></td>
      <td>Eterm</td>
      <td><code>{ "identifier": "14FB02A6-46FB-4932-9F42-630416271B3A" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>sectionIII</td>
      <td>TRUE</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>targetType</td>
      <td></td>
      <td>string</td>
      <td><code>Test Info</code></td>
    </tr>
    <tr>
      <td></td>
      <td>target</td>
      <td></td>
      <td>Ereference</td>
      <td><code>[{ "identifier": "DECLARE-ORGANISATION_19584_20241007134350919@1" }]</code></td>
    </tr>
    <tr>
      <td>Please briefly describe the main actions taken to implement this national target</td>
      <td>mainActionsInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td>Please indicate the current level of progress towards this national target</td>
      <td>levelOfProgress</td>
      <td></td>
      <td>Eterm</td>
      <td><code>[{ "identifier": "ao" }, { "identifier": "A23DD6C0-44C5-418D-83B5-461D79D2721A" }]</code></td>
    </tr>
    <tr>
      <td>Please provide a summary of progress towards this national target, including the main outcomes achieved, key challenges encountered, and different approaches that may be taken for further implementation</td>
      <td>progressSummaryInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>data</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[{ "identifier": "SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1" }]</code></td>
    </tr>
    <tr>
      <td>Indicator Data</td>
      <td>indicatorData</td>
      <td></td>
      <td>IndicatorData</td>
      <td></td>
    </tr>
    <tr>
      <td>Please provide examples or cases to illustrate the effectiveness of the actions taken to implement this national assessment. If needed, provide relevant web links or attach related materials or publications</td>
      <td>actionEffectivenessInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td>Please briefly describe how the implementation of this national target relates to progress in achieving related Sustainable Development Goals and associated targets and implementation of other related agreements</td>
      <td>sdgRelationInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>sectionIV</td>
      <td>TRUE</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>gbfGoal</td>
      <td></td>
      <td>Eterm</td>
      <td><code>[{ "identifier": "ao" }, { "identifier": "A23DD6C0-44C5-418D-83B5-461D79D2721A" }]</code></td>
    </tr>
    <tr>
      <td>Summary of national progress contributing to the global goals</td>
      <td>summaryOfProgress</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td>Indicator Data</td>
      <td>indicatorData</td>
      <td></td>
      <td>IndicatorData</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>sectionV</td>
      <td>TRUE</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>assessmentSummaryInfo</td>
      <td>TRUE</td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>annex</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Additional Information</td>
      <td>additionalInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<p>Test Info</p>" }</code></td>
    </tr>
    <tr>
      <td>Additional Documents</td>
      <td>additionalDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td>
        <code>[
        {
        "url": "https://www.google.com",
        "name": "Google.com",
        "language": "en"
        }
        ]</code>
      </td>
    </tr>
    <tr>
      <td>Attachments</td>
      <td>attachments</td>
      <td></td>
      <td>Elink[]</td>
      <td>
        <code>[
        {
        "url": "https://www.google.com",
        "name": "Google.com",
        "language": "en"
        }
        ]</code>
      </td>
    </tr>
  </tbody>
</table>
