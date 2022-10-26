import client from "./axios";

export const getNextLaunch = async () => await client.get("/next");

export const getUpcomingLaunches = async () => await client.get("/upcoming");

export const getLatestLaunch = async () => await client.get("/latest");

export const getPastLaunches = async () => await client.get("/past");
