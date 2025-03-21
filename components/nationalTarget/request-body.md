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
      <td><code>{ "schema": "nationalTarget7", "identifier": "1BAB56D3-FCDF-DF2B-4C41-72F97084C86F", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td>Government</td>
      <td>government</td>
      <td>True</td>
      <td>Eterm</td>
      <td><code>{ "identifier": "af" }</code></td>
    </tr>
    <tr>
      <td>Enter national target title</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test Info" }</code></td>
    </tr>
    <tr>
      <td>Description</td>
      <td>description</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>sequence</td>
      <td></td>
      <td>int</td>
      <td></td>
    </tr>
    <tr>
      <td>Contribution to global Goals</td>
      <td>globalGoalAlignment</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "GBF-GOAL-A" } ]</code></td>
    </tr>
    <tr>
      <td>Alignment with global targets</td>
      <td>globalTargetAlignment</td>
      <td>True</td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "GBF-TARGET-01", "degreeOfAlignment": { "identifier": "AABF237C-F906-40D2-9595-5226C8B18A58" } } ]</code></td>
    </tr>
    <tr>
      <td>Explanation, including which aspects of the goal or target are covered</td>
      <td>degreeOfAlignmentInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td>Which of the considerations for implementation in Section C of the GBF have been taken into account in developing this national target, and the actions to implement it</td>
      <td>implementingConsiderations</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "76553677-A17D-4DE3-8CDD-6010CDCF8A90" } ]</code></td>
    </tr>
    <tr>
      <td>Please explain how these considerations have been taken into account</td>
      <td>implementingConsiderationsInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td>Please outline the main policy measures or actions that will be taken to achieve this national target.</td>
      <td>mainPolicyOfMeasureOrActionInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td>Headline indicators</td>
      <td>headlineIndicators</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "GBF-INDICATOR-1.1" }, { "identifier": "GBF-INDICATOR-A.1" }, { "identifier": "GBF-INDICATOR-A.2" }, { "identifier": "GBF-INDICATOR-A.3" }, { "identifier": "GBF-INDICATOR-A.4" } ]</code></td>
    </tr>
    <tr>
      <td>Binary indicators</td>
      <td>binaryIndicators</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "KMGBF-INDICATOR-BIN-1" } ]</code></td>
    </tr>
    <tr>
      <td>Component indicators</td>
      <td>componentIndicators</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "GBF-INDICATOR-114" } ]</code></td>
    </tr>
    <tr>
      <td>Complementary indicators</td>
      <td>complementaryIndicators</td>
      <td></td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "GBF-INDICATOR-114" } ]</code></td>
    </tr>
    <tr>
      <td>Other national indicators</td>
      <td>otherNationalIndicators</td>
      <td></td>
      <td>NationalIndicators[]</td>
      <td></td>
    </tr>
    <tr>
      <td>List the non-state commitments towards this national Target</td>
      <td>nonStateActorCommitmentInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td>Are there any overlaps or links between this national target and targets or commitments submitted as non-State actor commitments to the Kunming-Montreal Global Biodiversity Framework?</td>
      <td>hasNonStateActors</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Please indicate which commitment(s) and which actor(s)</td>
      <td>nonStateActorsInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td>Please indicate if additional means of implementation are needed for the attainment of this national target.</td>
      <td>additionalImplementation</td>
      <td></td>
      <td>Lterm</td>
      <td><code>{ "identifier": "additionalImplementationRequired", "customValue": { "en": "&lt;p&gt;Test Info&lt;/p&gt;" } }</code></td>
    </tr>
    <tr>
      <td>Additional explanation</td>
      <td>additionalImplementationInfo</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td>Any other relevant information</td>
      <td>additionalInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "&lt;p&gt;Test Info&lt;/p&gt;" }</code></td>
    </tr>
    <tr>
      <td></td>
      <td>additionalDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td></td>
    </tr>
  </tbody>
</table>
