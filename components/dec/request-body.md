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
      <td><code>{ "identifier": "2A9F4D7C-9C32-861E-8344-FF562C3F0D3F", "schema": "biosafetyDecision", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td>Country submitting the decision or communication</td>
      <td>government</td>
      <td>True</td>
      <td>Term</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
     <tr>
      <td>Competent National Authority(ies) responsible for the decision or communication</td>
      <td>authorities</td>
      <td>True</td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "78AFAA88-47EA-9333-AD6E-C21BCB17DE21@1" } ]</code></td>
    </tr>
    <tr>
      <td>Title / Reference number of the decision or communication</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test title" }</code></td>
    </tr>
    <tr>
      <td>Date of the decision</td>
      <td>date</td>
      <td>True</td>
      <td>DateTime</td>
      <td><code>2024-09-05</code></td>
    </tr>
    <tr>
      <td>Is the decision taken prior to entry into force of the Protocol?</td>
      <td>takenPriorEntryIntoForce</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td></td>
      <td>jurisdictions</td>
      <td></td>
      <td>Term[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Jurisdiction</td>
      <td>jurisdictionsDetails</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test Jurisdiction" }</code></td>
    </tr>
    <tr>
      <td>Is this an amendment to a decision or communication already published on the BCH?</td>
      <td>isAmendment</td>
      <td>True</td>
      <td>bool</td>
      <td></td>
    </tr>
    <tr>
      <td>Please select the record(s) containing the decision or communication being amended</td>
      <td>amendedRecords</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "E2795D50-46AB-E234-96D0-D1164C382C7D@1" } ]</code></td>
    </tr>
    <tr>
      <td>Please provide a brief summary of the amendment(s)</td>
      <td>amendmentsDetails</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Summary&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Subject of the decision, notification, communication or declaration</td>
      <td>decisionTypes</td>
      <td>True</td>
      <td>Term[]</td>
      <td><code>[ { "identifier": "8979219B-330B-424F-A52C-209D4B4B65C0" } ]</code></td>
    </tr>
    <tr>
      <td>Please provide Exporter’s contact details</td>
      <td>exporters</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1" } ]</code></td>
    </tr>
    <tr>
      <td>Please provide Importer’s contact details</td>
      <td>importers</td>
      <td></td>
      <td>Reference[]</td>
      <td></td>
    </tr>
    <tr>
      <td>Date on which the notification was received</td>
      <td>receiptDate</td>
      <td></td>
      <td>DateTime</td>
      <td><code>[ { "identifier": "3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1" } ]</code></td>
    </tr>
    <tr>
      <td>Date on which acknowledgement of receipt of the notification was sent to the notifier</td>
      <td>receiptAcknowledgementDate</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-09-03</code></td>
    </tr>
    <tr>
      <td>Date on which the decision was communicated to the notifier</td>
      <td>communicationDate</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-09-03</code></td>
    </tr>
    <tr>
      <td>Was the decision triggered by a request for a transboundary movement of LMOs into your country?</td>
      <td>addressesTransboundaryMovement</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Does the decision apply to transboundary movements of LMO(s) into your country?</td>
      <td>appliesToTransboundaryMovement</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Does the decision involve field trials?</td>
      <td>involvesFieldTrial</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Does the decision allow commercial release?</td>
      <td>involvesCommercialRelease</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Will the decision apply to subsequent introductions of the same LMO(s) into the environment?</td>
      <td>appliesToSubsequentIntroductions</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
     <tr>
      <td>Use(s) of LMO</td>
      <td>uses</td>
      <td></td>
      <td>Term[]</td>
      <td><code>[ { "identifier": "91BEAF12-ABE1-4294-AD3B-507935894C78" } ]</code></td>
    </tr>
    <tr>
      <td>Has the decision been taken in the absence of a domestic regulatory framework and in accordance with Article 11.6?</td>
      <td>takenInAccordanceWithA116</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Result of the decision</td>
      <td>decisionResult</td>
      <td></td>
      <td>Term</td>
      <td><code>{ "identifier": "3B9ECE67-B35C-40FF-8C06-4EA5FF762899" }</code></td>
    </tr>
    <tr>
      <td>Specify the conditions</td>
      <td>conditions</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Provide reasons</td>
      <td>reasons</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Specify the time extension in days</td>
      <td>extensionPeriod</td>
      <td></td>
      <td>int</td>
      <td><code>1</code></td>
    </tr>
     <tr>
      <td>Subject of the decision under the simplified procedure</td>
      <td>movementAllowedUnderA131A</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Decision specifying that the import of the LMO is exempt from the Advance Informed Agreement (AIA) procedure</td>
      <td>exemptFromAIA</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Does the decision apply to subsequent similar imports of LMOs?</td>
      <td>appliesToSubsequentImports</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
      <tr>
      <td>Type of transboundary movement </td>
      <td>transboundaryMovementType</td>
      <td></td>
      <td>Term</td>
      <td><code>{   "identifier": "22B915C4-193E-4087-89ED-D104EEEC4330" }</code></td>
    </tr>
    <tr>
      <td>Information on the place where the occurrence and/or release occurred </td>
      <td>releaseInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{   "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Available relevant information on the estimated quantities and relevant characteristics and/or traits of the living modified organism </td>
      <td>estimatedQuantities</td>
      <td></td>
      <td>lstring</td>
      <td><code>{   "en": "Test information" }</code></td>
    </tr>
   <tr>
      <td>Information on the circumstances of the release </td>
      <td>releaseCircumstance</td>
      <td></td>
      <td>lstring</td>
      <td><code>{   "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Information on the estimated date of the release </td>
      <td>releaseDate</td>
      <td></td>
      <td>DateTime</td>
      <td><code>2024-09-04</code></td>
    </tr>
    <tr>
      <td>Information on the use of the living modified organism in the originating Party </td>
      <td>lmoUseInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{   "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Information about the possible adverse effects on the conservation and sustainable use of biological diversity, taking also into account risks to human health, as well as available information about possible risk management measures </td>
      <td>adverseEffectInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{   "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>A point of contact for further information </td>
      <td>pointOfContact</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[   {     "identifier": "3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1"   } ]</code></td>
    </tr>
    <tr>
      <td>Any other relevant information </td>
      <td>otherTransboundryInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{   "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Any other relevant information</td>
      <td>otherTransboundryInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "Test information" }</code></td>
    </tr>
    <tr>
      <td>Is this decision related to an LMO for commercial use?</td>
      <td>isForCommercialUse</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Should this decision be forwarded to the OECD Secretariat for possible inclusion in the BioTrack Product Database?</td>
      <td>forwardToOECD</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Is this decision related to food safety?</td>
      <td>isForFoodSafety</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Was it conducted in accordance with the Codex Alimentarius Guideline for the Conduct of Food Safety Assessment of Foods Derived from Recombinant-DNA Plants?</td>
      <td>codexConducted</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Should this information be forwarded to the Secretariat of the FAO GM Foods Platform?</td>
      <td>forwardToFAO</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>LMO identification</td>
      <td>modifiedOrganisms</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "1E027990-5D44-F3AF-75E3-715B60BFD3CD@8" } ]</code></td>
    </tr>
    <tr>
      <td>Risk assessment</td>
      <td>riskAssessments</td>
      <td></td>
      <td>Reference[]</td>
      <td><code>[ { "identifier": "486389BF-3C48-F2C9-2622-AC3D8E119845@4" } ]</code></td>
    </tr>
    <tr>
      <td>Document text</td>
      <td>documents</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Should this information be confirmed or updated after two years from the date of submission?</td>
      <td>expires</td>
      <td>True</td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Any other relevant information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;div&gt;&lt;!--block--&gt;Test Information&lt;/div&gt;" }</code></td>
    </tr>
    <tr>
      <td>Any other relevant documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Link[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    </tbody>
</table>
