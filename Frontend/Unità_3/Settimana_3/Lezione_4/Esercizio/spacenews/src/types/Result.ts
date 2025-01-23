export interface Result {
  count: number;
  next: string;
  previous: string;
  results: ResultElement[];
}

export interface ResultElement {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}

export interface Author {
  name: string;
  socials: Socials;
}

export interface Socials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}

export interface Event {
  event_id: number;
  provider: string;
}

export interface Launch {
  launch_id: string;
  provider: string;
}
