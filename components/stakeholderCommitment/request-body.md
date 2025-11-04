<script setup>
import { useClearingHouse } from "@/utils/composables"
const { clearingHouseBase } = useClearingHouse()
</script>


The table below outlines the structure of the request body, including the fields, their types, and whether they are mandatory. Example values are provided for clarity.

<schema-table schema="stakeholderCommitment">
  <schema-row title="First Name" field="firstName" mandatory type="string" example="John" />
  <schema-row title="Last Name" field="lastName" mandatory type="string" example="Doe" />
  <schema-row title="Designation" field="designation" mandatory type="lstring" example='{ "en": "Software Engineer" }' />
  <schema-row title="Department" field="department" mandatory type="lstring" example='{ "en": "Division" }' />
  <schema-row title="Organization" field="organization" mandatory type="lstring" example='{ "en": "Test Organization" }' />
  <schema-row title="Organization acronym" field="organizationAcronym" type="lstring" example='{ "en": "CSBD" }' />
  <schema-row title="Type of Organization" field="organizationType" mandatory type="ETerm"/>

  <schema-row title="Jurisdiction" field="jurisdiction" mandatory type="ETerm" />
  <schema-row title="Countries" field="jurisdictionCountries" mandatory type="ETerm[] "/>
  <schema-row title="Regions" field="jurisdictionRegions" mandatory type="ETerm[]" />
  <schema-row title="Title of commitment" field="title" mandatory type="lstring" />
  <schema-row title="Description of commitment" field="description" mandatory type="lstring" />
  <schema-row title="Start date" field="timelineStartDate" mandatory type="DateTime" />
  <schema-row title="End date (if applicable)" field="timelineEndDate" mandatory type="DateTime" />
  <schema-row title="Alternatively, indicate whether the commitment is open-ended" field="isOpenEnded" mandatory type="bool" />
  <schema-row title="Share information on plans for next steps" field="nextStepsInformation" mandatory type="lstring" />
  <schema-row title="Key performance indicators..." field="performanceInformation" type="lstring" />
  <schema-row title="CountryReviews..." field="endorsementsInformation" type="lstring" />
  <schema-row title="Primary National Target" field="primaryGlobalAlignment" mandatory type="ETerm" />
  <schema-row title="Primary global target" field="primaryNationalTarget" mandatory type="EReference" />
  <schema-row title="Other Global Alignment(s)" field="otherGlobalAlignments" type="ETerm[]" />
  <schema-row title="Other national target(s)" field="otherNationalTargets" type="EReference[]" />
  <schema-row title="Alignment Information" field="alignmentInformation" type="lstring" />
  <schema-row title="Indicators" field="indicators" type="ETerm[]" />
  <schema-row title="Elements of the Framework" field="implementingConsiderations" type="ETerm[]" />
  <schema-row title="Coverage Countries" field="coverageCountries" type="ETerm[]" />
  <schema-row title="Coverage Regions" field="coverageRegions" type="ETerm[]" />
  <schema-row title="Coverage Other" field="coverageOther" type="lstring[]" />
  <schema-row title="Funding to be used towards meeting the commitment" field="fundingSource" type="lstring" example="funding source"/>
  <schema-row title="Is the funding sufficient for achieving the commitment?" field="isFundingSufficient" mandatory type="bool" />
  <schema-row title="International Frameworks" field="internationalFrameworks" type="lstring" />
  <schema-row title="Partners" field="partners" type="lstring" />
  <schema-row title="Is Linked To NBSAP" field="isLinkedToNbsap" type="bool" />
  <schema-row title="Linked To NBSAP Countries" field="linkedToNbsapCountries" type="ETerm[]" />
  <schema-row title="Will you report or provide information on Target 15 of the Framework?" field="isReportingOnTarget15" mandatory type="bool" />
  <schema-row title="Please provide details on what and how you will report or provide" field="target15Information" mandatory type="lstring" />
  <schema-row title="Is progress towards the commitment tracked?" field="isProgressTracked" mandatory type="bool" />
  <schema-row title="What is the format..." field="progressInformation" mandatory type="lstring" />
  <schema-row title="Provide a web address, if available" field="progressTrackingUrl" type="lstring" example="https://example.com"/>
  <schema-row title="Potential ways to address challenges and opportunities..." field="implementationStrategies" type="lstring" />
  <schema-row title="Provide any other relevant information..." field="additionalInformation" type="lstring" />
  <schema-row title="Other relevant website address or attached documents" field="additionalDocuments" type="ELink[]" />
  <schema-row title="Linked Documents" field="linkedAttachments" type="ELink[]" example='[{ "url": "https://example.com", "name": "Attachment" }]'/>
  <schema-row title="Notes" field="notes" type="string" example="Example notes"/>

</schema-table>
