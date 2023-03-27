require("@babel/register")({
  ignore: [/node_modules/],
  extensions: [".js", ".json"],
});

import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import * as mongooseConfig from "./configs/mongoose-config.js";
import usersRouter from "./routers/usersRouters.js";
import authRouter from "./routers/AuthRouters.js";

const PORT = process.env.PORT;
const app = express();

app.use(json());
app.use(cors());

app.get("/api/", (req, res) => {
  res.json("Hello World");
});

app.use("/api/users/", usersRouter);

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`http:localhost:` + PORT);
});
