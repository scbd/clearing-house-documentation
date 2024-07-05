# clearing-house-documentation
This documentation is created using VitePress. Follow the steps below to add a new route to our application.

## Steps to Add a New Route

### 1. Add Routes in the Corresponding Clearing House

First, navigate to the appropriate clearing house folder and add the route. The available folders are:

- `/routes/abs`
- `/routes/bch`
- `/routes/chm`
- `/routes/common`

Add the new route in the corresponding folder based on the type of route you are adding.

### 2. Create the Corresponding Markdown File

VitePress uses file-based routing, so you need to add the markdown file in the `docs` folder following the structure of your route.

For example, to add a route `/ircc/document/get`:

1. Create a folder `ircc` inside the `docs` folder.
2. Inside the `ircc` folder, create another folder named `document`.
3. Inside the `document` folder, create a markdown file named `get.md`.

The folder structure should look like this:

docs/
└── ircc/
    └── document/
        └── get.md


In the `get.md` file, write the content required for the webpage.

### 3. Add the Swagger File

Next, add the Swagger file for the playground specification. Place the Swagger JSON file inside the `swagger/json` folder. Ensure that the Swagger JSON file accurately reflects the API documentation for the new route.

### 4. Render the Swagger JSON in the Markdown File

Finally, reference and render the Swagger JSON file within the corresponding markdown file to display the API specification on the webpage. You can use VitePress's markdown capabilities to embed the Swagger UI.

By following these steps, you can successfully add new routes to your application and ensure that the API documentation is correctly displayed and functional.


