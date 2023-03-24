import { userSchema } from "../models/userModel";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser } from "./UsersControllers";

const userModel = mongoose.model("User", userSchema);

// Register An User

export const registerUser = async ({ email, password }) => {
  password = await bcrypt.hash(password, 10);
  const user = await createUser({ email, password, name: email.split("@")[0] });
  return user;
};

// Login An User

export const loginUser = async ({ email, password }) => {
  if (!user) {
    return { success: false, status: 400, message: "User not found" };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return { success: false, status: 400, message: "Password not matching" };
  }

  const token = jwt.sign({ _id: user._id, email: user.email }, "123456", {
    expiresIn: "2h",
  });
  return {
    success: true,
    status: 200,
    message: "Login success",
    body: { user, token },
  };
};
