type Fairings = {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: string[]
}

type Patch = {
  small: string;
  large: string;
}

type Reddit = {
  campaign: string;
  launch: string;
  media: string;
  recovery: string;
}

type Flicker = {
  small: string[];
  original: string[];
}

type Failure = {
  time: number;
  altitude: number;
  reason: string;
}

type Core = {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

export interface ILaunch {
  fairings: Fairings;
  links: {
      patch: Patch;
      reddit: Reddit;
      flickr: Flicker;
      presskit: string;
      webcast: string;
      youtube_id: string;
      article: string;
      wikipedia: string;
  },
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: { name: string; };
  success: boolean;
  failures: Failure[];
  details: string;
  launchpad: { full_name: string };
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  id: string;
}