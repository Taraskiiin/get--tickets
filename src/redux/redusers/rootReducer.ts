import { combineReducers } from 'redux';
import stopsFilter from './stopsFilter';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import getTickets from './getTickets';

export default combineReducers({
  stopsFilter,
});
