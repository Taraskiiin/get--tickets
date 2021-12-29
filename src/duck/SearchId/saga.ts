import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import types from './types';
import actionCreators from './action-creators';
import { fetchSearchIdFromApi } from './helpers';

function* fetchSearchIdWorker() {
  const data: string = yield call(fetchSearchIdFromApi);
  yield put(actionCreators.getSearchIdCreator(data));
}

function* searchIdWatcher(): Generator<StrictEffect> {
  yield takeEvery(types.FETCH_SEARCH_ID, fetchSearchIdWorker);
}

export default searchIdWatcher;
