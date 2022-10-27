import { ILaunch } from "@/interfaces/ILaunch";
import client from "./axios";

export const getNextLaunch = async () => await client.get<ILaunch>("/next");

export const getUpcomingLaunches = async () => await client.get<ILaunch[]>("/upcoming");

export const getLatestLaunch = async () => await client.get<ILaunch>("/latest");

export const getPastLaunches = async () => await client.get<ILaunch[]>("/past");
