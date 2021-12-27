import { ITicket } from '../../components/Ticket';

const initialState = {
  tickets: [],
};

export const SET_TICKETS = 'SET_TICKETS';
export const FETCH_TICKETS = 'FETCH_TICKETS';

export default function ticketsReducer(
  state = initialState,
  action: { type: string; payload: ITicket }
) {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    default:
      return state;
  }
}

export const getTicketsCreator = (payload: ITicket | []) => ({
  type: SET_TICKETS,
  payload,
});

export const fetchTicketsCreator = () => ({
  type: FETCH_TICKETS,
});
