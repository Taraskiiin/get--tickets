import { ITicket } from '../components/Ticket';

export const getTime = (minutes: number) => {
  const hour = Math.trunc(minutes / 60);
  const minute = minutes - hour * 60;

  return `${hour}Ч ${minute}М`;
};

export const maxValuesStops = (arr: {}) => {
  const numArray: number[] = [];
  const array = Object.values(arr);
  if (array.includes('all')) {
    return 'all';
  } else {
    array.forEach((element) => numArray.push(Number(element)));
    return numArray.reduce((a, b) => (a > b ? a : b));
  }
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
