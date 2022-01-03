import { ITicket } from '../components/Ticket';

export const sortByTime = (tickets: ITicket[]) =>
  tickets?.sort(
    (a: ITicket, b: ITicket) =>
      a.segments[0].duration +
      a.segments[1].duration -
      (b.segments[0].duration + b.segments[1].duration)
  );
