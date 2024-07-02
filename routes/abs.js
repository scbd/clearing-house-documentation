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
        ],
      },
      {
        text: "Routes ABS",
        collapsed: false,
        items: [
          {
            text: "IRCC",
            collapsed: true,
            items: [
              {
                text: "Documents",
                collapsed: true,
                items: [
                  {
                    text: "GET",
                    link: "/ircc/documents/get",
                  },
                ],
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
    ],
  };
  