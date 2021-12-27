import { takeEvery, call, put, StrictEffect, select } from 'redux-saga/effects';

import { FETCH_TICKETS, getTicketsCreator } from '../redusers/ticketsReducer';
import { ITicket } from '../../components/Ticket';

const getSearchId = (store: { searchIdReducer: { searchId: string } }) =>
  store.searchIdReducer.searchId;

const fetchTicketsFromApi = async (URL: string) => {
  const response = await fetch(URL);
  const tickets = await response.json();
  return tickets.tickets;
};

function* fetchTicketsIdWorker() {
  const searchId: string = yield select(getSearchId);
  const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
  const data: ITicket = yield call(() => fetchTicketsFromApi(URL));
  yield put(getTicketsCreator(data));
}

export function* ticketsWatcher(): Generator<StrictEffect> {
  yield takeEvery(FETCH_TICKETS, fetchTicketsIdWorker);
}
