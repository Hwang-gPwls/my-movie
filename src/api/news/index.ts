import axios from "axios";
import { API_ENDPOINT } from "config/config";
import { useQuery } from "react-query";

export const restAuthTimesNews = async (offset: number) => {
  try {
    const params = { limit: 10, offset: 0 };
    const response = await axios.get(`${API_ENDPOINT}`, {
      params,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// export const restAuthTimesNews = useQuery("getTimesNews", () => {
//   const params = { limit: 10, offset: 0 };
//   return axios
//     .get(`${API_ENDPOINT}`, {
//       params,
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
