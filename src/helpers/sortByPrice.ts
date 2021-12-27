import { ITicket } from '../components/Ticket';

export const sortByPrice = (data: ITicket[]) =>
  data ? data.sort((a: ITicket, b: ITicket) => b.price - a.price) : [];
