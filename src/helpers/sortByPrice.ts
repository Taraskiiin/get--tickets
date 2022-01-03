import { ITicket } from '../components/Ticket';

export const sortByPrice = (tickets: ITicket[]) =>
  tickets?.sort((a: ITicket, b: ITicket) => a.price - b.price);
