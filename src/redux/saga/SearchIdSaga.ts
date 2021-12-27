import { takeEvery, call, put, StrictEffect } from 'redux-saga/effects';
import {
  FETCH_SEARCH_ID,
  getSearchIdCreator,
} from '../redusers/searchIdReducer';

const BASE_URL = 'https://front-test.beta.aviasales.ru/';

const fetchSearchIdFromApi = async () => {
  const response = await fetch(`${BASE_URL}search`);
  const searchId = await response.json();
  return searchId.searchId;
};

function* fetchSearchIdWorker() {
  const data: string = yield call(fetchSearchIdFromApi);
  yield put(getSearchIdCreator(data));
}

export function* searchIdWatcher(): Generator<StrictEffect> {
  yield takeEvery(FETCH_SEARCH_ID, fetchSearchIdWorker);
}
