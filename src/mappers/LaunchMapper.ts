import { ILaunch } from "@/interfaces/ILaunch";
import { LaunchDTO } from "@/interfaces/LaunchDTO";

export const launchMapper = (launch: ILaunch): LaunchDTO => ({
  id: launch.id,
  success: launch.success,
  dateUtc: launch.date_utc,
  details: launch.details,
  flightNumber: launch.flight_number,
  links: {
    article: launch.links.article,
    wikipedia: launch.links.wikipedia,
    youtubeId: launch.links.youtube_id
  },
  name: launch.name,
  rocket: launch.rocket,
  upcoming: launch.upcoming
});

export const launchesMapper = (launches: ILaunch[]): LaunchDTO[] => launches.map(launchMapper);

