export const recordTypes = [
  {
    text: "National-Target",
    fullName: "National Target Mapping",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/ort/national-target/schema",
      },
      {
        text: "Public Records",
        link: "/ort/national-target/solr",
      },
      {
        text: "Get",
        link: "/ort/national-target/get",
      },
    ],
  },
  {
    text: "National-Target-Mapping",
    fullName: "National Target Mapping",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/ort/national-target-mapping/schema",
      },
      {
        text: "Public Records",
        link: "/ort/national-target-mapping/solr",
      },
      {
        text: "Get",
        link: "/ort/national-target-mapping/get",
      },
    ],
  },
  {
    text: "NBSap",
    fullName: "NBSap",
    collapsed: true,
    items: [
      {
        text: "Public Records",
        link: "/ort/nbsap/solr",
      },
      {
        text: "Get",
        link: "/ort/nbsap/get",
      },
    ],
  },
  {
    text: "National-Report",
    fullName: "National Report",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/ort/national-report/schema",
      },
      {
        text: "Public Records",
        link: "/ort/national-report/solr",
      },
      {
        text: "Get",
        link: "/ort/national-report/get",
      },
    ],
  },
  {
    text: "National-Report-Indicator-Data",
    fullName: "National Report Indicator Data",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/ort/national-report-indicator-data/schema",
      },
      {
        text: "Public Records",
        link: "/ort/national-report-indicator-data/solr",
      },
      {
        text: "Get",
        link: "/ort/national-report-indicator-data/get",
      },
    ],
  },
  {
    text: "National-Report-Binary-Indicator-Data",
    fullName: "National Report Binary Indicator Data",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/ort/national-report-binary-indicator-data/schema",
      },
      {
        text: "Public Records",
        link: "/ort/national-report-binary-indicator-data/solr",
      },
      {
        text: "Get",
        link: "/ort/national-report-binary-indicator-data/get",
      },
    ],
  },
];

export default [
  {
    text: "Getting Started",
    collapsed: false,
    items: [
      {
        text: "Introduction",
        link: "/ort/",
      },
      {
        text: "Custom Types",
        link: "/ort/custom-types",
      },
      {
        text: "User Management",
        link: "/ort/user-management",
      },
      {
        text: "Apache Solr",
        link: "/ort/apache-solr",
      },
      {
        text: "Record Types",
        link: "/ort/record-types",
      },
    ],
  },
  {
    text: "General",
    collapsed: true,
    items: [
      {
        text: "Document Validations",
        link: "/ort/general/document-validations",
      },
      {
        text: "Document Securities",
        link: "/ort/general/document-securities",
      },
      {
        text: "Documents Versions",
        link: "/ort/general/documents-versions",
      },
      {
        text: "Documents Attachments",
        link: "/ort/general/documents-attachments",
      },
      {
        text: "Drafts",
        link: "/ort/general/drafts",
      },
      {
        text: "Draft Securities",
        link: "/ort/general/draft-securities",
      },
      {
        text: "Draft Locks",
        link: "/ort/general/draft-locks",
      },
    ],
  },
  {
    text: "Users",
    collapsed: true,
    items: [
      {
        text: "Authentication",
        link: "/ort/user/authentication",
      },
    ],
  },
  ...recordTypes,
  {
    text: "Thesaurus",
    collapsed: true,
    items: [
      {
        text: "General",
        collapsed: true,
        items: [
          {
            text: "Countries",
            link: "/ort/thesaurus/general/countries",
          },
          {
            text: "Libraries",
            link: "/ort/thesaurus/general/libraries",
          },
          {
            text: "Regions",
            link: "/ort/thesaurus/general/regions",
          },
          {
            text: "Other",
            link: "/ort/thesaurus/general/other",
          },
        ],
      },
      {
        text: "National Target",
        collapsed: true,
        items: [
          {
            text: "GBF Targets",
            link: "/ort/thesaurus/national-target/gbf-targets",
          },
          {
            text: "GBF Goals",
            link: "/ort/thesaurus/national-target/gbf-goals",
          },
          {
            text: "GBF Target Considerations",
            link: "/ort/thesaurus/national-target/gbf-target-considerations",
          },
          {
            text: "GBF Degree of Alignment",
            link: "/ort/thesaurus/national-target/gbf-degree-of-alignment",
          },
          {
            text: "GBF Headline Indicators",
            link: "/ort/thesaurus/national-target/gbf-headline-indicators",
          },
          {
            text: "GBF Component Indicators",
            link: "/ort/thesaurus/national-target/gbf-component-indicators",
          },
          {
            text: "GBF Complementary Indicators",
            link: "/ort/thesaurus/national-target/gbf-complementary-indicators",
          },
        ],
      },
      {
        text: "National Target Mapping",
        collapsed: true,
        items: [
          {
            text: "GBF Headline Indicators",
            link: "/ort/thesaurus/national-target-mapping/gbf-headline-indicators",
          },
        ],
      },
      {
        text: "NBSap",
        collapsed: true,
        items: [
          {
            text: "Jurisdictions",
            link: "/ort/thesaurus/nbsap/ort-jurisdictions",
          },
          {
            text: "Approved Status",
            link: "/ort/thesaurus/nbsap/approved-status",
          },
          {
            text: "Approving Body",
            link: "/ort/thesaurus/nbsap/approving-body",
          },
          {
            text: "Report Status",
            link: "/ort/thesaurus/nbsap/report-status",
          },
        ],
      },
      {
        text: "National Report",
        collapsed: true,
        items: [
          {
            text: "Stakeholders",
            link: "/ort/thesaurus/national-report/stakeholders",
          },
          {
            text: "Policy Instruments",
            link: "/ort/thesaurus/national-report/policy-instruments",
          },
          {
            text: "Assessment Progress",
            link: "/ort/thesaurus/national-report/assessment-progress",
          },
          {
            text: "GBF Goals",
            link: "/ort/thesaurus/national-report/gbf-goals",
          },
          {
            text: "GBF Headline Indicators",
            link: "/ort/thesaurus/national-report/gbf-headline-indicators",
          },
          {
            text: "GBF Component Indicators",
            link: "/ort/thesaurus/national-report/gbf-component-indicators",
          },
          {
            text: "GBF Complementary Indicators",
            link: "/ort/thesaurus/national-target/gbf-complementary-indicators",
          },
          {
            text: "GBF Binary Indicator",
            link: "/ort/thesaurus/national-report/gbf-binary-indicator",
          },
        ],
      },
      {
        text: "National Report Indicator Data",
        collapsed: true,
        items: [
          {
            text: "GBF Headline Indicators",
            link: "/ort/thesaurus/national-report-indicator-data/gbf-headline-indicators",
          },
        ],
      },
    ],
  },
];
