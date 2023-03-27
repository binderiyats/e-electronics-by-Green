import express from "express";
import { loginUser, registerUser } from "../controllers/AuthControllers";

const authRouter = express.Router();

//POST REGISTER AUTH
authRouter.post("/register", async (req, res) => {
  const { email, password, repassword } = req.body;
  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Password did not match" });
  }
  const user = await registerUser({ email, password });
  console.log("user", user);
  return res.status(200).json({ success: true, message: "Register succesful" });
});

//POST LOGIN AUTH

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await loginUser({ email, password });
  res.status(response.status).json(response);
});

export default authRouter;
