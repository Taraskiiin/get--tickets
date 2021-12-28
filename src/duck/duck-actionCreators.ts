import types from './duck-types';
import { ITicket } from '../components/Ticket';

const getSearchIdCreator = (payload: string) => ({
  type: types.SET_SEARCH_ID,
  payload,
});

const fetchSearchIdCreator = () => ({
  type: types.FETCH_SEARCH_ID,
});

const getTicketsCreator = (payload: ITicket | []) => ({
  type: types.SET_TICKETS,
  payload,
});

const fetchTicketsCreator = () => ({
  type: types.FETCH_TICKETS,
});

const filterByPriceCreator = () => ({
  type: types.SET_FILTER_BY_PRICE,
});

const filterByTimeCreator = () => ({
  type: types.SET_FILTER_BY_TIME,
});

const stopFilterCreator = () => ({
  type: types.SET_STOPS,
});

const stopFilterUpdateCreator = (payload: {
  selectAll: boolean;
  choosedOption: {};
}) => ({
  type: types.SET_STOPS,
  payload,
});

const actionCreators = {
  getSearchIdCreator,
  fetchSearchIdCreator,
  getTicketsCreator,
  fetchTicketsCreator,
  filterByPriceCreator,
  filterByTimeCreator,
  stopFilterCreator,
  stopFilterUpdateCreator,
};

export default actionCreators;
