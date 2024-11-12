export const recordTypes = [
  {
    text: "IRCC",
    fullName: "Internationally Recognized Certificates of Compliance",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/ircc/schema",
      },
      {
        text: "Create/Update",
        link: "/abs/ircc/workflow",
      },
      {
        text: "Public Records",
        link: "/abs/ircc/solr",
      },
      {
        text: "Draft Records",
        link: "/abs/ircc/list",
      },
      {
        text: "Get",
        link: "/abs/ircc/get",
      },
      {
        text: "Delete",
        link: "/abs/ircc/delete",
      },
    ],
  },
  {
    text: "Contact",
    fullName: "Contact",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/contact/schema",
      },
      {
        text: "Public Records",
        link: "/abs/contact/solr",
      },
      {
        text: "Draft Records",
        link: "/abs/contact/list",
      },
      {
        text: "Get",
        link: "/abs/contact/get",
      },
      {
        text: "Create",
        link: "/abs/contact/create",
      },
      {
        text: "Update",
        link: "/abs/contact/update",
      },
      {
        text: "Delete",
        link: "/abs/contact/delete",
      },
    ],
  },
  {
    text: "CP",
    fullName: "Checkpoint",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/cp/schema",
      },
      {
        text: "Public Records",
        link: "/abs/cp/solr",
      },
      {
        text: "Get",
        link: "/abs/cp/get",
      },
    ],
  },
  {
    text: "MSR",
    fullName: "Legislative, Administrative or Policy Measures",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/msr/schema",
      },
      {
        text: "Public Records",
        link: "/abs/msr/solr",
      },
      {
        text: "Get",
        link: "/abs/msr/get",
      },
    ],
  },
  {
    text: "CPC",
    fullName: "Checkpoint Communiqué",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/cpc/schema",
      },
      {
        text: "Public Records",
        link: "/abs/cpc/solr",
      },
      {
        text: "Draft Records",
        link: "/abs/cpc/list",
      },
      {
        text: "Get",
        link: "/abs/cpc/get",
      },
      {
        text: "Create",
        link: "/abs/cpc/create",
      },
      {
        text: "Update",
        link: "/abs/cpc/update",
      },
      {
        text: "Delete",
        link: "/abs/cpc/delete",
      },
    ],
  },
  {
    text: "CNA",
    fullName: "Competent National Authority",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/cna/schema",
      },
      {
        text: "Public Records",
        link: "/abs/cna/solr",
      },
      {
        text: "Get",
        link: "/abs/cna/get",
      },
    ],
  },
  {
    text: "NFP",
    fullName: "National Focal Point",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/nfp/schema",
      },
      {
        text: "Public Records",
        link: "/abs/nfp/solr",
      },
      {
        text: "Get",
        link: "/abs/nfp/get",
      },
    ],
  },
  {
    text: "VLR",
    fullName: "Virtual Library Resources",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/vlr/schema",
      },
      {
        text: "Public Records",
        link: "/abs/vlr/solr",
      },
      {
        text: "Get",
        link: "/abs/vlr/get",
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
        link: "/abs/",
      },
      {
        text: "Custom Types",
        link: "/abs/custom-types",
      },
      {
        text: "User Management",
        link: "/abs/user-management",
      },
      {
        text: "Apache Solr",
        link: "/abs/apache-solr",
      },
      {
        text: "Record Types",
        link: "/abs/record-types",
      },
    ],
  },
  {
    text: "General",
    collapsed: true,
    items: [
      {
        text: "Document Validations",
        link: "/abs/general/document-validations",
      },
      {
        text: "Document Securities",
        link: "/abs/general/document-securities",
      },
      {
        text: "Documents Versions",
        link: "/abs/general/documents-versions",
      },
      {
        text: "Documents Attachments",
        link: "/abs/general/documents-attachments",
      },
      {
        text: "Drafts",
        link: "/abs/general/drafts",
      },
      {
        text: "Draft Securities",
        link: "/abs/general/draft-securities",
      },
      {
        text: "Draft Locks",
        link: "/abs/general/draft-locks",
      },
    ],
  },
  {
    text: "Users",
    collapsed: true,
    items: [
      {
        text: "Authentication",
        link: "/abs/user/authentication",
      },
    ],
  },
  ...recordTypes,
  {
    text: "PRO",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/pro/schema",
      },
      {
        text: "Public Records",
        link: "/abs/pro/solr",
      },
      {
        text: "Get",
        link: "/abs/pro/get",
      },
    ],
  },
  {
    text: "NMCC",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/abs/nmcc/schema",
      },
      {
        text: "Public Records",
        link: "/abs/nmcc/solr",
      },
      {
        text: "Get",
        link: "/abs/nmcc/get",
      },
    ],
  },
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
            link: "/abs/thesaurus/general/countries",
          },
          {
            text: "Libraries",
            link: "/abs/thesaurus/general/libraries",
          },
          {
            text: "Regions",
            link: "/abs/thesaurus/general/regions",
          },
          {
            text: "Other",
            link: "/abs/thesaurus/general/other",
          },
        ],
      },
      {
        text: "Checkpoint",
        collapsed: true,
        items: [
          {
            text: "CP Jurisdiction",
            link: "/abs/thesaurus/checkpoint/cp-jurisdiction",
          },
        ],
      },
      {
        text: "Checkpoint Communique",
        collapsed: true,
        items: [
          {
            text: "CPC Keywords",
            link: "/abs/thesaurus/checkpoint-communique/cpc-keywords",
          },
        ],
      },
      {
        text: "Contact",
        collapsed: true,
        items: [
          {
            text: "Organization Types",
            link: "/abs/thesaurus/contact/organization-types",
          },
        ],
      },
      {
        text: "Permit",
        collapsed: true,
        items: [
          {
            text: "Permit Usage",
            link: "/abs/thesaurus/permit/permit-usage",
          },
          {
            text: "Permit Keywords",
            link: "/abs/thesaurus/permit/permit-keywords",
          },
        ],
      },
      {
        text: "Authority",
        collapsed: true,
        items: [
          {
            text: "Organization Types",
            link: "/abs/thesaurus/authority/organization-types",
          },
          {
            text: "CBD Subjects",
            link: "/abs/thesaurus/authority/cbd-subjects",
          },
          {
            text: "Jurisdictions",
            link: "/abs/thesaurus/authority/jurisdictions",
          },
          {
            text: "ABS Jurisdictions",
            link: "/abs/thesaurus/authority/abs-jurisdictions",
          },
          {
            text: "ABS Genetic Resource Types",
            link: "/abs/thesaurus/authority/abs-genetic-resource-types",
          },
          {
            text: "ABS Genetic Resource Areas",
            link: "/abs/thesaurus/authority/abs-genetic-resource-areas",
          },
          {
            text: "CPB Functions",
            link: "/abs/thesaurus/authority/cpb-functions",
          },
          {
            text: "CPB Organism Types",
            link: "/abs/thesaurus/authority/cpb-organism-types",
          },
          {
            text: "ABS Functions",
            link: "/abs/thesaurus/authority/abs-functions",
          },
          {
            text: "Keywords",
            link: "/abs/thesaurus/authority/keywords",
          },
        ],
      },
      {
        text: "Measure",
        collapsed: true,
        items: [
          {
            text: "Languages",
            link: "/abs/thesaurus/measure/languages",
          },
          {
            text: "ABS Measures",
            link: "/abs/thesaurus/measure/abs-measures",
          },
          {
            text: "Type Of Documents",
            link: "/abs/thesaurus/measure/type-of-documents",
          },
          {
            text: "Jurisdictions",
            link: "/abs/thesaurus/measure/jurisdictions",
          },
          {
            text: "Statuses",
            link: "/abs/thesaurus/measure/statuses",
          },
          {
            text: "Document Links Ext",
            link: "/abs/thesaurus/measure/document-links-ext",
          },
          {
            text: "Translation Type",
            link: "/abs/thesaurus/measure/translation-type",
          },
        ],
      },
    ],
  },
];
