import { ITicket } from '../../components/Ticket';
import types from './types';

const getTicketsCreator = (payload: { stop: boolean; tickets: ITicket }) => ({
  type: types.SET_TICKETS,
  payload,
});

const fetchTicketsCreator = () => ({
  type: types.FETCH_TICKETS,
});

const actionCreators = {
  getTicketsCreator,
  fetchTicketsCreator,
};

export default actionCreators;
