import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_NEWS, receiveData } from "./news";
import { restAuthTimesNews } from "../api/news";
import asxios from "axios";

export type News = {
  loading: any;
  data: any;
  error: any;
};

function* getNewsData() {
  try {
    const data: News = yield call(restAuthTimesNews);
    yield put(receiveData(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* newsSaga() {
  yield takeLatest(REQUEST_NEWS, getNewsData);
}
