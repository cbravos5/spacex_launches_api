import { LaunchDTO } from "@/interfaces/LaunchDTO";
import { PagedLaunchesDTO } from "@/interfaces/PagedLaunchesDTO";
import { launchMapper, pagedLaunchesMapper } from "@/mappers/LaunchMapper";
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

      const launch = launchMapper(response.data.docs[0]);

      return this.ok<LaunchDTO>(res, launch);
    } catch (error) {
      return this.fail(res, error)
    }
  };

  /**
   * getUpcoming
   */
  public getUpcoming = async (req: Request, res: Response) => {
    try {
      const page = Number(req.params.page);

      if(!page) throw new Error("Page is required")

      const response = await LaunchesServices.getUpcomingLaunches(page);

      if(response.status !== 200) throw new Error("Error while contacting SpaceX API");

      const pagedLaunches = pagedLaunchesMapper(response.data);

      return this.ok<PagedLaunchesDTO>(res, pagedLaunches);
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

      const launch = launchMapper(response.data.docs[0]);

      return this.ok<LaunchDTO>(res, launch);
    } catch (error) {
      return this.fail(res, error)
    }
  };

  /**
   * getPast
   */
  public getPast = async (req: Request, res: Response) => {
    try {
      const page = Number(req.params.page);

      if(!page) throw new Error("Page is required")

      const response = await LaunchesServices.getPastLaunches(page);

      if(response.status !== 200) throw new Error("Error while contacting SpaceX API");

      const pagedLaunches = pagedLaunchesMapper(response.data);

      return this.ok<PagedLaunchesDTO>(res, pagedLaunches);
    } catch (error) {
      return this.fail(res, error)
    }
  };
}

export default new LaunchesController();
