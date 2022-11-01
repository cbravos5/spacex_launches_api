import { LaunchDTO } from "./LaunchDTO";

export interface PagedLaunchesDTO {
  launches: LaunchDTO[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
}