import { combineReducers } from 'redux';
import { ITicket } from '../components/Ticket';
import types from './duck-types';

const searchIdReducer = (
  state = { searchId: '' },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case types.SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      };
    default:
      return state;
  }
};

const ticketsReducer = (
  state = { tickets: [] },
  action: { type: string; payload: ITicket }
) => {
  switch (action.type) {
    case types.SET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    default:
      return state;
  }
};

const filterByPriceTimeReducer = (
  state = { sortByPrice: true, sotrByTime: false },
  action: {
    type: string;
    payload: {
      sortByPrice: boolean;
      sotrByTime: boolean;
    };
  }
) => {
  switch (action.type) {
    case types.SET_FILTER_BY_PRICE:
      return {
        ...state,
        sortBy: { sortByPrice: true, sotrByTime: false },
      };
    case types.SET_FILTER_BY_TIME:
      return {
        ...state,
        sortBy: { sortByPrice: false, sotrByTime: true },
      };
    default:
      return state;
  }
};

const stopsFilterReducer = (
  state = { stops: { selectAll: true, choosedOption: ['0', '1', '2', '3'] } },
  action: {
    type: string;
    payload: {
      selectAll: boolean;
      choosedOption: string;
    };
  }
) => {
  switch (action.type) {
    case types.SET_STOPS:
      return {
        ...state,
        stops: action.payload,
      };
    case types.UPDATE_STOPS: {
      return {
        ...state,
        stops: action.payload,
      };
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  stopsFilterReducer,
  searchIdReducer,
  ticketsReducer,
  filterByPriceTimeReducer,
});

export default reducers;
