import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token is required" });
  }
  try {
    const decoded = jwt.verify(token, 321890);
    req.success = decoded;
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ success: false, message: "User not found" });
  }
};

export default verifyToken;
