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

## Environment Variables

The app config (`docs/app-config.ts`) is driven by `VITE_*` environment variables, loaded by Vite from env files in the `docs` folder depending on the mode:

- `docs/.env.development` — loaded by `npm run dev`. Point these at the dev environment (`cbddev.xyz`).
- `docs/.env.production` — loaded by `npm run build` / `npm run preview`. Point these at production (`cbd.int`).

Both files are git-ignored (they are local). If a variable is not set, the config falls back to the production (`cbd.int`) URLs.

The variables, with example dev values:

```sh
VITE_ACCOUNTS_HOST_URL=https://accounts.cbddev.xyz
VITE_API_URL=https://api.cbddev.xyz
VITE_ABS_URL=https://absch.cbddev.xyz
VITE_BCH_URL=https://bch.cbddev.xyz
VITE_CHM_URL=https://chm.cbddev.xyz
VITE_ORT_URL=https://ort.cbddev.xyz
```

You can find a template in `docs/.env.example`. All of `VITE_ACCOUNTS_HOST_URL`, `VITE_API_URL`, and the app URLs must point at the **same** environment — authentication tokens from one environment are not valid on the other.


## Steps to Run the Project

### 1. Install Dependencies

Before running the project, make sure to install all necessary dependencies. Run the following command in your project directory:

```sh
npm install
```

### 2. Running the Development Server

Start the VitePress development server (all clearing houses are served from the same site, under `/absch`, `/bch`, `/chm` and `/ort`):

```sh
npm run dev
```

This runs in development mode and reads `docs/.env.development`. To run the dev server against the **production** environment instead:

```sh
npm run dev:prod
```

### 3. Building the Project

To build the project for production, use the following command:

```sh
npm run build
```

This runs in production mode (reads `docs/.env.production`) and generates the static files for the documentation in the dist folder inside the docs directory. To build against the **dev** environment (`cbddev.xyz`) instead, e.g. for the dev docs site deployment:

```sh
npm run build:dev
```

### 4. Serving the Built Project

After building the project, you can serve the static files using:

```sh
npm run preview
```

This will start a server to serve the built documentation locally.

By following these steps, you can run the project in development mode, build it for production, and serve the built documentation.
