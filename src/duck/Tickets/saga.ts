import { takeEvery, put, call, StrictEffect, select } from 'redux-saga/effects';
import { ITicket } from '../../components/Ticket';
import { fetchTicketsFromApi, getSearchId } from './helpers';
import types from './types';
import actionCreators from './action-creators';

function* fetchTicketsIdWorker() {
  const searchId: string = yield select(getSearchId);
  const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
  const data: { stop: boolean; tickets: ITicket } = yield call(
    async () => await fetchTicketsFromApi(URL)
  );
  yield put(actionCreators.getTicketsCreator(data));
}

function* ticketsWatcher(): Generator<StrictEffect> {
  yield takeEvery(types.FETCH_TICKETS, fetchTicketsIdWorker);
}

export default ticketsWatcher;
