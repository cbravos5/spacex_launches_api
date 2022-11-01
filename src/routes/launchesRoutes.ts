import LaunchesController from "@/controllers/LaunchesController";
import { Router } from "express";

const LaunchesRouter = Router();

LaunchesRouter.get("/next", LaunchesController.getNext);
LaunchesRouter.get("/past/:page", LaunchesController.getPast);
LaunchesRouter.get("/upcoming/:page", LaunchesController.getUpcoming);
LaunchesRouter.get("/latest", LaunchesController.getLatest);


export default LaunchesRouter;
