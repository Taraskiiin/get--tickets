import { ITicket } from '../components/Ticket';
import { QueryParams } from '../interface';

export const getTime = (minutes: number) => {
  const hour = Math.trunc(minutes / 60);
  const minute = minutes - hour * 60;

  return `${hour}Ч ${minute}М`;
};

export const maxValuesStops = (arr: {}) => {
  const array = Object.values(arr);

  if (array.includes(QueryParams.All)) {
    return QueryParams.All;
  }

  const numArray = array.map((element) => Number(element));
  return Math.max(...numArray);
};

export const sortByPrice = (tickets: ITicket[]) =>
  tickets?.sort((a: ITicket, b: ITicket) => a.price - b.price);

export const sortByTime = (tickets: ITicket[]) =>
  tickets?.sort(
    (a: ITicket, b: ITicket) =>
      a.segments[0].duration +
      a.segments[1].duration -
      (b.segments[0].duration + b.segments[1].duration)
  );

export const convertParamsToStateArray = (string: string | null) => {
  switch (string) {
    case '0':
      return ['0'];
    case '1':
      return ['0', '1'];
    case '2':
      return ['0', '1', '2'];
    case '3':
      return ['0', '1', '2', '3'];
    default:
      return ['all', '0', '1', '2', '3'];
  }
};

export const filterTicketsByStops = (
  tickets: ITicket[],
  maxStopsCount: number
) => {
  if (!tickets.length) {
    return;
  }

  return tickets?.filter(
    (el) =>
      el.segments[0].stops.length <= maxStopsCount &&
      el.segments[1].stops.length <= maxStopsCount
  );
};
