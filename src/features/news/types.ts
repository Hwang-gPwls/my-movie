export type NewsId = string;

export type News = {
  slugName: NewsId;
  title: string;
  byline: string;
  source: string;
  publishedDate: string;
  geoFacet: string;
};
