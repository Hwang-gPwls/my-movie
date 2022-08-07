import axios from "axios";
import { API_ENDPOINT } from "../../config/config";

export const restAuthTimesNews = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export type News = {
  slugName: string;
  title: string;
  byline: string;
  source: string;
  publishedDate: Date;
  geoFacet: string;
};
