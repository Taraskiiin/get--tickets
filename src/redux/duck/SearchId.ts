import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { fetchSearchIdFromApi } from '../helpers';

export const FETCH_SEARCH_ID = 'redux/duck/SearchId/FETCH_SEARCH_ID';
export const SET_SEARCH_ID = 'redux/duck/SearchId/SET_SEARCH_ID';

export const fetchSearchIdCreator = () => ({
  type: FETCH_SEARCH_ID,
});

export const getSearchIdCreator = (payload: string) => ({
  type: SET_SEARCH_ID,
  payload,
});

export const searchIdReducer = (
  state = { searchId: '' },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      };
    default:
      return state;
  }
};

function* fetchSearchIdWorker() {
  const data: string = yield call(fetchSearchIdFromApi);
  yield put(getSearchIdCreator(data));
}

export function* searchIdWatcher(): Generator<StrictEffect> {
  yield takeEvery(FETCH_SEARCH_ID, fetchSearchIdWorker);
}
