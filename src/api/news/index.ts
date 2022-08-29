import axios from "axios";
import { API_ENDPOINT } from "config/config";
import { News } from "features/news/types";
import { useQuery, useInfiniteQuery, QueryFunctionContext } from "react-query";
import { deflate } from "zlib";

// export const restAuthTimesNews = async (offset: number) => {
//   try {
//     const params = { limit: 10, offset: 0 };
//     const response = await axios.get(`${API_ENDPOINT}`, {
//       params,
//     });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

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

const newsKeys = {
  all: ["news"] as const,
  lists: () => [...newsKeys.all, "list"] as const,
  list: (filters: string) => [...newsKeys.lists(), { filters }] as const,
  details: () => [...newsKeys.all, "detail"] as const,
  detail: (id: number) => [...newsKeys.details(), id] as const,
};

const useFetchNews = () =>
  useInfiniteQuery(
    newsKeys.lists(),
    ({ pageParam = 0 }: QueryFunctionContext) =>
      axios.get(`${API_ENDPOINT}`, {
        params: { limit: 10, offset: pageParam },
      }),
    {
      getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
        isLastPage ? undefined : pageNumber + 1,
    },
  );

export default useFetchNews;
