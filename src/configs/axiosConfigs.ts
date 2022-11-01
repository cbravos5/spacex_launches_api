import { CreateAxiosDefaults } from "axios";

export const apiConfigs: CreateAxiosDefaults = {
  baseURL: "https://api.spacexdata.com/v5/launches",
  timeout: 10000,
};
