import { ITicket } from '../../components/Ticket';
import types from './types';

const ticketsReducer = (
  state = { tickets: [], stop: false },
  action: { type: string; payload: { stop: boolean; tickets: ITicket[] } }
) => {
  switch (action.type) {
    case types.SET_TICKETS:
      return action.payload
        ? {
            tickets: [...state.tickets, ...action.payload.tickets],
            stop: action.payload.stop,
          }
        : state;
    default:
      return state;
  }
};

export default ticketsReducer;
