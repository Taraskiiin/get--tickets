import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redusers/rootReducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(rootReducer, applyMiddleware());
  return store;
};
