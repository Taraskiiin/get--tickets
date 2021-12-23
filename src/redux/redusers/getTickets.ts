import { ITicket } from '../../components/Ticket';

const initialState = {
  tickets: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = initialState,
  action: { type: string; payload: ITicket[] }
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type, payload } = action;

  switch (type) {
    case 'GET_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    default:
      return state;
  }
};
