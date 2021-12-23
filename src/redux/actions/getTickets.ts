import { ITicket } from '../../components/Ticket';

export const setStops = (tickets: ITicket[]) => ({
  type: 'SET_STOPS',
  payload: tickets,
});
