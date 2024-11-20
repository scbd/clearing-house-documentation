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
];
