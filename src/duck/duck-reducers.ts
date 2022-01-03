import { combineReducers } from 'redux';
import stopsSortReducer from './StopsSort/reducers';
import searchIdReducer from './SearchId/reducers';
import ticketsReducer from './Tickets/reducers';

const reducers = combineReducers({
  stopsSortReducer,
  searchIdReducer,
  ticketsReducer,
});

export default reducers;
