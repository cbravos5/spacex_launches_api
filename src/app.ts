import express from "express";
import cors from "cors";
import LaunchesRouter from "./routes/launchesRoutes";

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/spacex-launches-api", LaunchesRouter);

// Health check
app.get("/ping", (_req, res) => res.status(200).send({ message: "Healthy" }));

export default app;
