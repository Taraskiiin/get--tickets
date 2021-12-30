import { all } from 'redux-saga/effects';
import searchIdWatcher from './SearchId/saga';
import stopsFilterWatcher from './StopsSort/saga';
import ticketsWatcher from './Tickets/saga';
import sortByPriceOrTimeWatcher from './TimeOrPriseSort/saga';

export function* rootWatcher() {
  yield all([
    searchIdWatcher(),
    ticketsWatcher(),
    stopsFilterWatcher(),
    sortByPriceOrTimeWatcher(),
  ]);
}
