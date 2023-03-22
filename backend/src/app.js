requestAnimationFrame("@babel/register")({
  ignore: [/node_modules/],
  extensions: [".js", ".json"],
});

import express, { json } from "express";
import cors from "cors";
import * as mongooseConfig from "./configs/mongoose-config";

const PORT = 8080;
const app = express();

app.use(json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`http:localhost:` + PORT);
});
