import { getLatestLaunch, getNextLaunch } from "@/services/launches";
import { Request, Response } from "express";
import { BaseController } from "./BaseController";

class LaunchesController extends BaseController {
  /**
   * getNextLaunch
   */
  public getNextLaunch = async (_: Request, res: Response) => {
    const response = await getNextLaunch();
    return this.ok<any>(res, response.data);
  };
}

export default new LaunchesController();
