export type NewsId = string;

export interface News {
  slug_Name: NewsId;
  title: string;
  byline: string;
  source: string;
  publishedDate: string;
  geoFacet: string;
}
