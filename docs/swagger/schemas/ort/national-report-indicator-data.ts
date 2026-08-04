import type { SchemaDescriptor } from '../types'

// The Online Reporting Tool identity of the `nationalReport7IndicatorData` record type.
const nationalReportIndicatorData: SchemaDescriptor = {
  schema: 'nationalReport7IndicatorData',
  name: "National Report Indicator Data",
  description: "A National Report Indicator Data record in the Online Reporting Tool.",
  fields: {
  "government": { title: "Government", type: 'term', mandatory: true, example: [{"identifier":"ao"},{"identifier":"A23DD6C0-44C5-418D-83B5-461D79D2721A"}] },
  "indicator": { title: "", type: 'term', mandatory: true, example: [{"identifier":"ao"},{"identifier":"A23DD6C0-44C5-418D-83B5-461D79D2721A"}] },
  "sourceOfData": { title: "Source of Data", type: 'string', mandatory: true },
  "globalDataSources": { title: "Global source of data", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google.com","language":"en"}] },
  "globalIndicatorProviders": { title: "Indicator providers", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google.com","language":"en"}] },
  "globalDescription": { title: "", type: 'string' },
  "data": { title: "Data", type: 'object' },
  "indicatorCode": { title: "Indicator code", type: 'string' },
  "hasDisaggregation": { title: "Does this data row represent a disaggregation", type: 'bool', example: true },
  "disaggregation": { title: "Disaggregation", type: 'string' },
  "year": { title: "Year", type: 'int', example: 1 },
  "unit": { title: "Unit", type: 'string' },
  "value": { title: "Value", type: 'decimal', example: 0.01 },
  "footnote": { title: "Footnote", type: 'string' },
  "comments": { title: "Comments", type: 'lstring', example: {"en":"<p>Test Info</p>"} }
  }
}

export default nationalReportIndicatorData
