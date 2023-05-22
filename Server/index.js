import Express from "express";
const app = Express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./Routes/routes.js";
import cors from "cors";

dotenv.config();
app.use(cors())
app.use(Express.json());
app.use("/api", route);

const dbconnection = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("Database connected successfully!");
};

app.listen(5000, () => {
  dbconnection();
  console.log("Server is listening on 5000 port!");
});
