import express from "express";
import {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UsersControllers";
import verifyToken from "../middlewares/verifyToken";

const userRouter = express.Router();

userRouter.get("/me", verifyToken, async (req, res) => {
  return res.json(req.user);
});

//Get All Users

userRouter.get("/", verifyToken, async (req, res) => {
  console.log("user is:", req.user);
  res.json(await getUsers());
});

//Get One User

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneUser(id));
});

//Create An User

userRouter.post("/", async (req, res) => {
  const user = req.body;
  res.json(await createUser(user));
});

//Update An User by Id

userRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  res.json(await updateUser(id, user));
});

//Delete An User

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUser(id));
});
export default userRouter;
