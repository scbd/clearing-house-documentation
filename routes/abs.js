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
      }
    ],
  };
  