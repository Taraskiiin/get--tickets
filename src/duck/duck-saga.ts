import { all } from 'redux-saga/effects';
import searchIdWatcher from './SearchId/saga';
import stopsFilterWatcher from './StopsSort/saga';
import ticketsWatcher from './Tickets/saga';

export function* rootWatcher() {
  yield all([searchIdWatcher(), ticketsWatcher(), stopsFilterWatcher()]);
}
