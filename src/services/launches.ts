import { ILaunch } from "@/interfaces/ILaunch";
import { IResponse } from "@/interfaces/IResponse";
import client from "./axios";

type QueryResponse = { docs: ILaunch[] };

export const getNextLaunch = async () =>
  await client.post<QueryResponse>('/query', {
    query: { upcoming: true },
    options: {
      populate: ["rocket", "launchpad"],
      limit: 1,
      sort: { flight_number: 'asc' },
    },
  });

export const getUpcomingLaunches = async (page: number) => 
  await client.post<IResponse>('/query', {
    query: { upcoming: true },
    options: {
      populate: ["rocket", "launchpad"],
      page,
      limit: 10,
      sort: { flight_number: 'asc' },
    },
  });

export const getLatestLaunch = async () =>
await client.post<QueryResponse>('/query', {
  query: { upcoming: false },
  options: {
    populate: ["rocket", "launchpad"],
    limit: 1,
    sort: { flight_number: 'desc' },
  },
});

export const getPastLaunches = async (page: number) => 
  await client.post<IResponse>('/query', {
    query: { upcoming: false },
    options: {
      populate: ["rocket", "launchpad"],
      page,
      limit: 10,
      sort: { flight_number: 'desc' },
    },
  });
