import { Dispatch, AnyAction } from "redux";
import axios, { AxiosError } from "axios";
import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { News } from "../api/news";
import { API_ENDPOINT } from "../config/config";

//type
export type NewsAction = ActionType<any>;
export type NewsState = {
  news: {
    loading: boolean;
    data: News | null;
    error: Error | null;
  };
};

//thunk
export function getNewsThunk() {
  console.log(`====`);
  return async function fetchNewsAllThunk(dispatch: any, getState: any) {
    const state = getState();

    // const response = await axios.get(`${API_ENDPOINT}`);

    // console.log(response.data);
    // dispatch(NewsLoader(response.data));

    // return response.data;
  };
  //   return async (dispatch: Dispatch) => {
  //     const { request, success, failure } = getNewsAsync;
  //     dispatch(request());
  //     try {
  //       const news = await restAuthTimesNews();
  //       console.log(news);
  //       dispatch(success(news));
  //     } catch (error) {
  //       dispatch(failure(error));
  //     }
  //   };
}

//action
export const REQUEST_NEWS = "REQUEST_NEWS" as const;
export const RECEIVE_NEWS = "RECEIVE_NEWS";

export const requestData = () => ({
  type: REQUEST_NEWS,
});

export const receiveData = (data: {
  loading: false;
  data: null | News;
  error: null;
}) => ({
  type: RECEIVE_NEWS,
  data,
});

//reducer
type dataActionType = ReturnType<typeof receiveData>;

const initialState: NewsState = {
  news: {
    loading: false,
    data: null,
    error: null,
  },
};

const newsReducer = (state = initialState, action: dataActionType) => {
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.data;
    default:
      return state;
  }
};

export default newsReducer;
