import { LaunchDTO } from "@/interfaces/LaunchDTO";
import { launchesMapper, launchMapper } from "@/mappers/LaunchMapper";
import * as LaunchesServices from "@/services/launches";
import { Request, Response } from "express";
import { BaseController } from "./BaseController";

class LaunchesController extends BaseController {
  /**
   * getNext
   */
  public getNext = async (_: Request, res: Response) => {
    try {
      const response = await LaunchesServices.getNextLaunch();

      if(response.status !== 200) throw new Error("Error while contacting SpaceX API");

      const launch = launchMapper(response.data);

      return this.ok<LaunchDTO>(res, launch);
    } catch (error) {
      return this.fail(res, error)
    }
  };

  /**
   * getUpcoming
   */
  public getUpcoming = async (_: Request, res: Response) => {
    try {
      const response = await LaunchesServices.getUpcomingLaunches();

      if(response.status !== 200) throw new Error("Error while contacting SpaceX API");

      const launches = launchesMapper(response.data);

      return this.ok<LaunchDTO[]>(res, launches);
    } catch (error) {
      return this.fail(res, error)
    }
  };
  
  /**
   * getLatest
   */
  public getLatest = async (_: Request, res: Response) => {
    try {
      const response = await LaunchesServices.getLatestLaunch();

      if(response.status !== 200) throw new Error("Error while contacting SpaceX API");

      const launch = launchMapper(response.data);

      return this.ok<LaunchDTO>(res, launch);
    } catch (error) {
      return this.fail(res, error)
    }
  };

  /**
   * getPast
   */
  public getPast = async (_: Request, res: Response) => {
    try {
      const response = await LaunchesServices.getPastLaunches();

      if(response.status !== 200) throw new Error("Error while contacting SpaceX API");

      const launches = launchesMapper(response.data);

      return this.ok<LaunchDTO[]>(res, launches);
    } catch (error) {
      return this.fail(res, error)
    }
  };
}

export default new LaunchesController();
