import axios from "axios";
import { API_ENDPOINT } from "config/config";

export const restAuthTimesNews = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
