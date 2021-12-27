import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redusers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
