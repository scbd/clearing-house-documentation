<table class="ircc__table" style="table-layout: fixed; width: 100%;">
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
      <td><code>{ "identifier": "AEEE68E4-549B-5572-D335-209CAF8D621A", "schema": "independentRiskAssessment", "languages": [ "en" ] }</code></td>
    </tr>
    <tr>
      <td>Title of the risk assessment</td>
      <td>title</td>
      <td>True</td>
      <td>lstring</td>
      <td><code>{ "en": "Test TItle" }</code></td>
    </tr>
    <tr>
      <td>Date of the risk assessment</td>
      <td>date</td>
      <td>True</td>
      <td>DateTime</td>
      <td><code>2024-10-09</code></td>
    </tr>
    <tr>
      <td>Institution responsible for the risk assessment</td>
      <td>organizations</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "04139A35-1F8B-FC94-45D6-4F3AD7675685@1" } ]</code></td>
    </tr>
    <tr>
      <td>Date not available</td>
      <td>dateOfRaNotAvailable</td>
      <td>True</td>
      <td>bool</td>
      <td><code>FALSE</code></td>
    </tr>
    <tr>
      <td>Contact details of the main responsible risk assessor</td>
      <td>contacts</td>
      <td></td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1" } ]</code></td>
    </tr>
    <tr>
      <td>Living modified organism(s)</td>
      <td>modifiedOrganisms</td>
      <td>True</td>
      <td>Ereference[]</td>
      <td><code>[ { "identifier": "1E027990-5D44-F3AF-75E3-715B60BFD3CD@8" } ]</code></td>
    </tr>
    <tr>
      <td>Scope of the risk assessment</td>
      <td>scopes</td>
      <td>True</td>
      <td>Eterm[]</td>
      <td><code>[ { "identifier": "D6B59E8A-D82C-4516-917A-A745ACDA5931" }, { "identifier": "015737FC-ABC2-460C-A099-06A1B01E649A" }, { "identifier": "BEBF757E-E3CC-4913-8D9F-2D165CD63ECE" } ]</code></td>
    </tr>
    <tr>
      <td>Risk assessment report / summary</td>
      <td>documents</td>
      <td>True</td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
    <tr>
      <td>Please use this field to provide a summary of the risk assessment.</td>
      <td>documentsSummary</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test field</div>" }</code></td>
    </tr>
    <tr>
      <td>Potential adverse effects identified in the risk assessment</td>
      <td>adverseEffects</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Likelihood that the potential adverse effects will be realized</td>
      <td>adverseEffectsLikelihood</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Possible consequences</td>
      <td>adverseEffectsConsequence</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Estimation of the overall risk</td>
      <td>adverseEffectsOverallRisk</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Recommendation(s) on whether the risks are acceptable/manageable and any management strategies</td>
      <td>adverseEffectsRecommendation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Need(s) for further information on specific issues of concern</td>
      <td>riskManagementStrategies</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Receiving environment(s) considered</td>
      <td>receivingEnvironment</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>LMO detection and identification methods proposed</td>
      <td>detectionMethod</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Should this information be confirmed or updated after two years from the date of submission?</td>
      <td>expires</td>
      <td></td>
      <td>bool</td>
      <td><code>True</code></td>
    </tr>
    <tr>
      <td>Any other relevant information</td>
      <td>relevantInformation</td>
      <td></td>
      <td>lstring</td>
      <td><code>{ "en": "<div><!--block-->Test information</div>" }</code></td>
    </tr>
    <tr>
      <td>Any other relevant documents</td>
      <td>relevantDocuments</td>
      <td></td>
      <td>Elink[]</td>
      <td><code>[ { "url": "https://www.google.com", "name": "Google", "language": "en" } ]</code></td>
    </tr>
  </tbody>
</table>
