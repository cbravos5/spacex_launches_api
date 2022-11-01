import { ILaunch } from "@/interfaces/ILaunch";
import { IResponse } from "@/interfaces/IResponse";
import { LaunchDTO } from "@/interfaces/LaunchDTO";
import { PagedLaunchesDTO } from "@/interfaces/PagedLaunchesDTO";

export const launchMapper = (launch: ILaunch): LaunchDTO => ({
  id: launch.id,
  success: launch.success,
  dateUtc: launch.date_utc,
  details: launch.details,
  flightNumber: launch.flight_number,
  links: {
    article: launch.links.article,
    wikipedia: launch.links.wikipedia,
    youtubeId: launch.links.youtube_id,
    redditCampaign: launch.links.reddit?.campaign
  },
  name: launch.name,
  rocket: launch.rocket.name,
  upcoming: launch.upcoming,
  launchpad: launch.launchpad.full_name
});

export const pagedLaunchesMapper = (response: IResponse): PagedLaunchesDTO => ({
  launches: response.docs.map((launch) => launchMapper(launch)),
  hasNextPage: response.hasNextPage,
  hasPrevPage: response.hasPrevPage,
})

