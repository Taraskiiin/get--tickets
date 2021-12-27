import { all } from 'redux-saga/effects';
import { searchIdWatcher } from './SearchIdSaga';
import { ticketsWatcher } from './TicketsSaga';

export function* rootWatcher() {
  yield all([searchIdWatcher(), ticketsWatcher()]);
}
