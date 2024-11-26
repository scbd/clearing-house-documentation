export const recordTypes = [
  {
    text: "National Target Mapping",
    fullName: "National Target Mapping",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/ort/nationalTargetMapping/schema",
      },
      {
        text: "Public Records",
        link: "/ort/nationalTargetMapping/solr",
      },
      {
        text: "Get",
        link: "/ort/nationalTargetMapping/get",
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
            link: "/ort/thesaurus/gbf-targets",
          },
          {
            text: "GBF Goals",
            link: "/ort/thesaurus/gbf-goals",
          },
          {
            text: "GBF Target Considerations",
            link: "/ort/thesaurus/gbf-target-considerations",
          },
          {
            text: "GBF Degree of Alignment",
            link: "/ort/thesaurus/gbf-degree-of-alignment",
          },
          {
            text: "GBF Headline Indicators",
            link: "/ort/thesaurus/gbf-headline-indicators",
          },
          {
            text: "GBF Component Indicators",
            link: "/ort/thesaurus/gbf-component-indicators",
          },
          {
            text: "GBF Complementary Indicators",
            link: "/ort/thesaurus/gbf-complementary-indicators",
          },
        ],
      },
      {
        text: "National Target Mapping",
        collapsed: true,
        items: [
          {
            text: "GBF Headline Indicators",
            link: "/ort/thesaurus/gbf-headline-indicators",
          },
        ],
      },
      {
        text: "NBSap",
        collapsed: true,
        items: [
          {
            text: "Jurisdictions",
            link: "/ort/thesaurus/ort-jurisdictions",
          },
          {
            text: "Approved Status",
            link: "/ort/thesaurus/approved-status",
          },
          {
            text: "Approving Body",
            link: "/ort/thesaurus/approving-body",
          },
          {
            text: "Report Status",
            link: "/ort/thesaurus/report-status",
          },
        ],
      },
    ],
  },
];
