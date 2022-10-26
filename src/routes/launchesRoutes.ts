import LaunchesController from "@/controllers/LaunchesController";
import { Router } from "express";

const LaunchesRouter = Router();

LaunchesRouter.get("/next", LaunchesController.getNextLaunch);

export default LaunchesRouter;
