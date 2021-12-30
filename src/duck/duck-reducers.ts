import { combineReducers } from 'redux';
import stopsSortReducer from './StopsSort/reducers';
import searchIdReducer from './SearchId/reducers';
import ticketsReducer from './Tickets/reducers';
import timeOrPriceReducer from './TimeOrPriseSort/reducers';

const reducers = combineReducers({
  stopsSortReducer,
  searchIdReducer,
  ticketsReducer,
  timeOrPriceReducer,
});

export default reducers;
