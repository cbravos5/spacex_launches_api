export interface LaunchDTO {
  links: {
      youtubeId: string;
      article: string;
      wikipedia: string;
  },
  rocket: string;
  success: boolean;
  details: string;
  flightNumber: number;
  name: string;
  dateUtc: string;
  upcoming: boolean;
  id: string;
}