import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsConfig = {
  credentials: true,
  origin: true,
};

app.use(cors(corsConfig))

app.use(express.json({ limit: "'50kb'" }));
app.use(express.urlencoded({ extended: true, limit: "'50kb'" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import carRouter from "./routes/car.routes.js";
app.use("/api/auth", userRouter);
app.use("/api/cars", carRouter);

export { app };
