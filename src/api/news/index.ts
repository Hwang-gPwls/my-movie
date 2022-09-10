import axios from "axios";
import { API_ENDPOINT } from "config/config";
import { News } from "features/news/types";
import { useQuery, useInfiniteQuery, QueryFunctionContext } from "react-query";
import { deflate } from "zlib";

export interface PaginationResponse<T> {
  results: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

// export const restAuthTimesNews = async (offset: number) => {
//    const params = { limit: 10, offset: 0 };
//   return axios
//   .get(`${API_ENDPOINT}`, {
//     params,
//   }
//   .then((res) => {
//     return res.data
//   })
// };

// export const restAuthTimesNews = {
//   fetchPostingsListWithScroll: async (pageParams: 0) => {
//     const params = { limit: 10, offset: pageParams };
//     const res = await axios.get(`${API_ENDPOINT}`, {
//       params,
//     });

//     return {
//       posts: res.data,
//       nextPage: pageParams + 1,
//       isLast: res.data ? true : false,
//     };
//   },
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
    ({ pageParam = 1 }: QueryFunctionContext) => {
      axios.get(`${API_ENDPOINT}`, {
        params: { page: pageParam },
      });
    },
    {
      getNextPageParam: (lastPage: any, pages) => {
        return lastPage.isLast ? undefined : lastPage.nextPage;
      },
    },
  );

export default useFetchNews;
