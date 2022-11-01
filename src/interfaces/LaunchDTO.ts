export interface LaunchDTO {
  links: {
      youtubeId: string;
      article: string;
      wikipedia: string;
      redditCampaign: string;
  },
  rocket: string;
  launchpad: string;
  success: boolean;
  details: string;
  flightNumber: number;
  name: string;
  dateUtc: string;
  upcoming: boolean;
  id: string;
}