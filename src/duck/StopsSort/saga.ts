import { takeEvery, put } from 'redux-saga/effects';
import types from './types';
import actionCreators from './action-creators';

function* stopsFilterWorker() {
  yield put(actionCreators.stopSortCreator());
}

function* stopsFilterWatcher() {
  yield takeEvery(types.SET_STOPS, stopsFilterWorker);
}

export default stopsFilterWatcher;
