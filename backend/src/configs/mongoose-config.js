import mongoose from "mongoose";

const MONGO_CONNECTION_STRING =
  "mongodb+srv://binderiya:Binderiya12.mongo@cluster0.ae6mc34.mongodb.net/test";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });

export default mongoose.connection;
