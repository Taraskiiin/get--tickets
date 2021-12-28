import { createStore, applyMiddleware } from 'redux';
import reducers from './duck-reducers';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './duck-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
