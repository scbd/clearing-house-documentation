export default {
    "/": [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/",
          },
          {
            text: "Custom Types",
            link: "/customTypes",
          },
          {
            text: "User Management",
            link: "/user-management",
          },
        ],
      },
      {
        text: "IRCC",
        collapsed: false,
        items: [
          {
            text: "All Published IRCC",
            collapsed: false,
            items: [
                {
                    text: "List",
                    link: "/ircc/published/list",
                },
                {
                    text: "Get",
                    link: "/ircc/published/get",
                },
                {
                    text: "Create",
                    link: "/ircc/published/create",
                },
                {
                    text: "Update",
                    link: "/ircc/published/update",
                },
                {
                    text: "Delete",
                    link: "/ircc/published/delete",
                },
                {
                    text: "Solr",
                    link: "/ircc/published/solr",
                },
            ],
          },
    //       {
    //         text: "Countries",
    //         collapsed: true,
    //         items: [
    //           {
    //             text: "GET",
    //             link: "/countries",
    //           },
    //         ],
    //       },
    //       {
    //         text: "Document",
    //         collapsed: true,
    //         items: [
    //           {
    //             text: "GET",
    //             link: "/document",
    //           },
    //         ],
    //       },
        ],
      },
      {
        text:"Users",
        collapsed: true,
        items:[
          {
            text:"Authentication",
            link: "/user/authentication",
          }
        ]
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
                link: "/thesaurus/general/countries",
              },
              {
                text: "Libraries",
                link: "/thesaurus/general/libraries",
              },
              {
                text: "Regions",
                link: "/thesaurus/general/regions",
              },
              {
                text: "Other",
                link: "/thesaurus/general/other",
              },
            ],
          },
          {
            text: "Checkpoint",
            collapsed: true,
            items: [
              {
                text: "CP Jurisdiction",
                link: "/thesaurus/checkpoint/cp-jurisdiction",
              },
            ],
          },
          {
            text: "Checkpoint Communique",
            collapsed: true,
            items: [
              {
                text: "CPC Keywords",
                link: "/thesaurus/checkpoint-communique/cpc-keywords",
              },
            ],
          },
          {
            text: "Permit",
            collapsed: true,
            items: [
              {
                text: "Permit Usage",
                link: "/thesaurus/permit/permit-usage",
              },
              {
                text: "Permit Keywords",
                link: "/thesaurus/permit/permit-keywords",
              },
            ],
          },
          {
            text: "Authority",
            collapsed: true,
            items: [
              {
                text: "Organization Types",
                link: "/thesaurus/authority/organization-types",
              },
              {
                text: "CBD Subjects",
                link: "/thesaurus/authority/cbd-subjects",
              },
              {
                text: "Jurisdictions",
                link: "/thesaurus/authority/jurisdictions",
              },
              {
                text: "ABS Jurisdictions",
                link: "/thesaurus/authority/abs-jurisdictions",
              },
              {
                text: "ABS Genetic Resource Types",
                link: "/thesaurus/authority/abs-genetic-resource-types",
              },
              {
                text: "ABS Genetic Resource Areas",
                link: "/thesaurus/authority/abs-genetic-resource-areas",
              },
              {
                text: "CPB Functions",
                link: "/thesaurus/authority/cpb-functions",
              },
              {
                text: "CPB Organism Types",
                link: "/thesaurus/authority/cpb-organism-types",
              },
              {
                text: "ABS Functions",
                link: "/thesaurus/authority/abs-functions",
              },
              {
                text: "Keywords",
                link: "/thesaurus/authority/keywords",
              },
            ],
          },
          {
            text: "Measure",
            collapsed: true,
            items: [
              {
                text: "Languages",
                link: "/thesaurus/measure/languages",
              },
              {
                text: "ABS Measures",
                link: "/thesaurus/measure/abs-measures",
              },
              {
                text: "Type Of Documents",
                link: "/thesaurus/measure/type-of-documents",
              },
              {
                text: "Jurisdictions",
                link: "/thesaurus/measure/jurisdictions",
              },
              {
                text: "Statuses",
                link: "/thesaurus/measure/statuses",
              },
              {
                text: "Document Links Ext",
                link: "/thesaurus/measure/document-links-ext",
              },
              {
                text: "Translation Type",
                link: "/thesaurus/measure/translation-type",
              },
            ],
          },
        ],
      },
    ],
  };
  