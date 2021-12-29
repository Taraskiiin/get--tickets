import { combineReducers } from 'redux';
import stopsSortReducer from './StopsSort/redusers';
import searchIdReducer from './SearchId/redusers';
import ticketsReducer from './Tickets/reducers';
import timeOrPriceReducer from './Tickets/reducers';

const reducers = combineReducers({
  stopsSortReducer,
  searchIdReducer,
  ticketsReducer,
  timeOrPriceReducer,
});

export default reducers;
