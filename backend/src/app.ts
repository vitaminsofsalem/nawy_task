import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import appRouter from "./router";

config();

const app = express();

//middlewares
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

// remove it in production
app.use(morgan("dev"));

app.use("/api", appRouter);

export { app };
