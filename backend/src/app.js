require("@babel/register")({
  ignore: [/node_modules/],
  extensions: [".js", ".json"],
});

import express, { json } from "express";
import cors from "cors";
import * as mongooseConfig from "./configs/mongoose-config.js";
import usersRouter from "./routers/usersRouters.js";

const PORT = 8080;
const app = express();

app.use(json());
app.use(cors());

app.get("/api/", (req, res) => {
  res.json("Hello World");
});

app.get("/api/", (req, res) => {});

app.use("/api/users/", usersRouter);

app.listen(PORT, () => {
  console.log(`http:localhost:` + PORT);
});
