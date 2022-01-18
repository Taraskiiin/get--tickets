import { all } from 'redux-saga/effects';
import { searchIdWatcher } from './duck/SearchId';
import { ticketsWatcher } from './duck/Tickets';

export function* rootWatcher() {
  yield all([searchIdWatcher(), ticketsWatcher()]);
}
