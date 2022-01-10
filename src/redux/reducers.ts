import { combineReducers } from 'redux';
import { stopsSortReducer } from './duck/StopsSort';
import { searchIdReducer } from './duck/SearchId';
import { ticketsReducer } from './duck/Tickets';

const reducers = combineReducers({
  stopsSortReducer,
  searchIdReducer,
  ticketsReducer,
});

export default reducers;
