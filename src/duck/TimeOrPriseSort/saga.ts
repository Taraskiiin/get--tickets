import { takeEvery, put } from 'redux-saga/effects';
import types from './types';
import actionCreators from './action-creators';

function* sortByPriceWorker() {
  yield put(actionCreators.sortByPriceCreator());
}

function* sortByTimeWorker() {
  yield put(actionCreators.sortByTimeCreator());
}

function* sortByPriceOrTimeWatcher() {
  yield takeEvery(types.SET_FILTER_BY_PRICE, sortByPriceWorker);
  yield takeEvery(types.SET_FILTER_BY_TIME, sortByTimeWorker);
}

export default sortByPriceOrTimeWatcher;
