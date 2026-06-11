import express from "express";
import { readFileSync } from "fs";

const app = express();
const html = readFileSync(new URL("index.html", import.meta.url));
const port = process.env.PORT || 3000;

app.get("*", (_, res) => res.type("html").send(html));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
