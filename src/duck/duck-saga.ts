import {
  takeEvery,
  put,
  all,
  call,
  StrictEffect,
  select,
} from 'redux-saga/effects';
import types from './duck-types';
import actionCreators from './duck-actionCreators';
import {
  fetchSearchIdFromApi,
  fetchTicketsFromApi,
  getSearchId,
} from './helpers';
import { ITicket } from '../components/Ticket';

function* stopsFilterWorker() {
  yield put(actionCreators.stopFilterCreator());
}

function* stopsFilterWatcher() {
  yield takeEvery(types.SET_STOPS, stopsFilterWorker);
}

function* fetchSearchIdWorker() {
  const data: string = yield call(fetchSearchIdFromApi);
  yield put(actionCreators.getSearchIdCreator(data));
}

function* searchIdWatcher(): Generator<StrictEffect> {
  yield takeEvery(types.FETCH_SEARCH_ID, fetchSearchIdWorker);
}

function* fetchTicketsIdWorker() {
  const searchId: string = yield select(getSearchId);
  const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
  const data: ITicket = yield call(() => fetchTicketsFromApi(URL));
  yield put(actionCreators.getTicketsCreator(data));
}

export function* ticketsWatcher(): Generator<StrictEffect> {
  yield takeEvery(types.FETCH_TICKETS, fetchTicketsIdWorker);
}

export function* rootWatcher() {
  yield all([searchIdWatcher(), ticketsWatcher(), stopsFilterWatcher()]);
}
