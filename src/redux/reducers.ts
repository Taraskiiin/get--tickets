import { combineReducers } from 'redux';
import { searchIdReducer } from './duck/SearchId';
import { ticketsReducer } from './duck/Tickets';

const reducers = combineReducers({
  searchIdReducer,
  ticketsReducer,
});

export default reducers;
