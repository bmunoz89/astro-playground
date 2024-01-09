export interface APISpaceXResponse {
  docs: Doc[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
}

export interface Doc {
  fairings: Fairings | null;
  links: Links;
  static_fire_date_utc: null | string;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details: null | string;
  crew: any[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: DatePrecision;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null;
  id: string;
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;
  landing_type: null | string;
  landpad: null;
}

export enum DatePrecision {
  Hour = "hour",
}

export interface Failure {
  time: number;
  altitude: number | null;
  reason: string;
}

export interface Fairings {
  reused: boolean | null;
  recovery_attempt: boolean | null;
  recovered: boolean | null;
  ships: any[];
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: null | string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface Flickr {
  small: any[];
  original: any[];
}

export interface Patch {
  small: string;
  large: string;
}

export interface Reddit {
  campaign: null;
  launch: null | string;
  media: null;
  recovery: null;
}
