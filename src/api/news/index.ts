import axios from "axios";
import { API_ENDPOINT } from "config/config";
import { useInfiniteQuery, QueryFunctionContext } from "react-query";

export interface PaginationResponse<T> {
  results: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

const movieKeys = {
  all: ["movies"] as const,
  lists: () => [...movieKeys.all, "list"] as const,
  list: (filters: string) => [...movieKeys.lists(), { filters }] as const,
  details: () => [...movieKeys.all, "detail"] as const,
  detail: (id: number) => [...movieKeys.details(), id] as const,
};

const useFetchMovies = () =>
  useInfiniteQuery(
    movieKeys.lists(),
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axios.get(`${API_ENDPOINT}`, {
        params: { page: pageParam },
      }),
    {
      getNextPageParam: (lastPage: any, pages) => {
        return lastPage.data.page + 1 > pages[0].data.total_pages
          ? undefined
          : lastPage.data.page + 1;
      },
    },
  );

export default useFetchMovies;
