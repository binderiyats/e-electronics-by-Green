import express from "express";
import {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UsersControllers";

const userRouter = express.Router();

//Get All Users

userRouter.get("/", async (req, res) => {
  res.json(await getUsers());
});
