export type NewsId = string;

export interface News {
  slug_name: NewsId;
  title: string;
  byline: string;
  source: string;
  publishedDate: string;
  geoFacet: string;
  multimedia?: [];
}
