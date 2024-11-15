export const recordTypes = [
  {
    text: "VLR",
    fullName: "Virtual Library Resources",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/chm/vlr/schema",
      },
      {
        text: "Public Records",
        link: "/chm/vlr/solr",
      },
      {
        text: "Get",
        link: "/chm/vlr/get",
      },
    ],
  },
  {
    text: "CDI",
    fullName: "Capacity Development Initiatives",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/chm/cdi/schema",
      },
      {
        text: "Public Records",
        link: "/chm/cdi/solr",
      },
      {
        text: "Get",
        link: "/chm/cdi/get",
      },
    ],
  },
  {
    text: "ORG",
    fullName: "Organizations",
    collapsed: true,
    items: [
      {
        text: "Schema",
        link: "/chm/org/schema",
      },
      {
        text: "Public Records",
        link: "/chm/org/solr",
      },
      {
        text: "Get",
        link: "/chm/org/get",
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
        link: "/chm/",
      },
      {
        text: "Custom Types",
        link: "/chm/custom-types",
      },
      {
        text: "User Management",
        link: "/chm/user-management",
      },
      {
        text: "Apache Solr",
        link: "/chm/apache-solr",
      },
      {
        text: "Record Types",
        link: "/chm/record-types",
      },
    ],
  },
  {
    text: "General",
    collapsed: true,
    items: [
      {
        text: "Document Validations",
        link: "/chm/general/document-validations",
      },
      {
        text: "Document Securities",
        link: "/chm/general/document-securities",
      },
      {
        text: "Documents Versions",
        link: "/chm/general/documents-versions",
      },
      {
        text: "Documents Attachments",
        link: "/chm/general/documents-attachments",
      },
      {
        text: "Drafts",
        link: "/chm/general/drafts",
      },
      {
        text: "Draft Securities",
        link: "/chm/general/draft-securities",
      },
      {
        text: "Draft Locks",
        link: "/chm/general/draft-locks",
      },
    ],
  },
  {
    text: "Users",
    collapsed: true,
    items: [
      {
        text: "Authentication",
        link: "/chm/user/authentication",
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
            link: "/chm/thesaurus/general/countries",
          },
          {
            text: "Libraries",
            link: "/chm/thesaurus/general/libraries",
          },
          {
            text: "Regions",
            link: "/chm/thesaurus/general/regions",
          },
          {
            text: "Other",
            link: "/chm/thesaurus/general/other",
          },
        ],
      },
      {
        text: "Resource",
        collapsed: true,
        items: [
          {
            text: "Resource Type VLR",
            link: "/chm/thesaurus/resource/resource-type-vlr",
          },
          {
            text: "Aichi Targets",
            link: "/chm/thesaurus/resource/aichi-targets",
          },
          {
            text: "CPB Themtic Areas",
            link: "/chm/thesaurus/resource/cpb-thematic-areas",
          },
          {
            text: "BCH RA Author Affiliation",
            link: "/chm/thesaurus/resource/bch-ra-author-affiliation",
          },
          {
            text: "BCH RA Subjects",
            link: "/chm/thesaurus/resource/bch-ra-subjects",
          },
          {
            text: "Key Areas",
            link: "/chm/thesaurus/resource/key-areas",
          },
          {
            text: "CBD Subjects",
            link: "/chm/thesaurus/resource/cbd-subjects",
          },
        ],
      },
      {
        text: "Organization",
        collapsed: true,
        items: [
          {
            text: "Organization Types",
            link: "/chm/thesaurus/organization/organization-types",
          },
          {
            text: "CBD Subjects",
            link: "/chm/thesaurus/organization/cbd-subjects",
          },
          {
            text: "Regions",
            link: "/chm/thesaurus/organization/regions",
          },
        ],
      },
    ],
  },
];
