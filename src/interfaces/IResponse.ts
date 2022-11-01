import { ILaunch } from "./ILaunch";

export interface IResponse {
  docs: ILaunch[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
}