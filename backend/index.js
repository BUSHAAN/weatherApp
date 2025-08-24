import express from "express";
import router from "./routes/weatherRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

const port = process.env.PORT || 8080;
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

app.listen(port);

console.log("Running on port ", port);
