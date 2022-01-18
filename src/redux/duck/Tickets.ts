import { takeEvery, put, call, StrictEffect, select } from 'redux-saga/effects';

import { ITicket } from '../../components/Ticket';
import { fetchTicketsFromApi, getSearchId } from '../helpers';

export const FETCH_TICKETS = 'redux/duck/Tickets/FETCH_TICKETS';
export const SET_TICKETS = 'redux/duck/Tickets/FETCH_TICKETS';

export const getTicketsCreator = (payload: {
  stop: boolean;
  tickets: ITicket;
}) => ({
  type: SET_TICKETS,
  payload,
});

export const fetchTicketsCreator = () => ({
  type: FETCH_TICKETS,
});

export const ticketsReducer = (
  state = { tickets: [], stop: false },
  action: { type: string; payload: { stop: boolean; tickets: ITicket[] } }
) => {
  switch (action.type) {
    case SET_TICKETS:
      return action.payload
        ? {
            tickets: [...state.tickets, ...action.payload.tickets],
            stop: action.payload.stop,
          }
        : state;
    default:
      return state;
  }
};

function* fetchTicketsIdWorker() {
  const searchId: string = yield select(getSearchId);
  const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
  const data: { stop: boolean; tickets: ITicket } = yield call(
    async () => await fetchTicketsFromApi(URL)
  );
  yield put(getTicketsCreator(data));
}

export function* ticketsWatcher(): Generator<StrictEffect> {
  yield takeEvery(FETCH_TICKETS, fetchTicketsIdWorker);
}
