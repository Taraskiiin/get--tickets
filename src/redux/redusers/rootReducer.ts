import { combineReducers } from 'redux';
// import stopsFilter from './stopsFilter';
import ticketsReducer from './ticketsReducer';
import searchIdReducer from './searchIdReducer';

export default combineReducers({
  // stopsFilter,
  searchIdReducer,
  ticketsReducer,
});
