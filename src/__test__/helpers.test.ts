import {
  getTime,
  maxValuesStops,
  sortByPrice,
  sortByTime,
} from '../helpers/helpers';

const sortByTimeArray = [
  {
    carrier: 'EK',
    price: 20895,
    segments: [
      {
        date: '2022-01-14T17:19:00.000Z',
        destination: 'HKT',
        duration: 1433,
        origin: 'MOW',
        stops: ['DXB', 'HKG'],
      },
      {
        date: '2022-02-03T12:11:00.000Z',
        destination: 'MOW',
        duration: 639,
        origin: 'HKT',
        stops: ['HKG', 'DXB', 'AUH'],
      },
    ],
  },
  {
    carrier: 'S7',
    price: 90263,
    segments: [
      {
        date: '2022-01-14T08:11:00.000Z',
        destination: 'HKT',
        duration: 1389,
        origin: 'MOW',
        stops: [],
      },
      {
        date: '2022-02-03T12:03:00.000Z',
        destination: 'MOW',
        duration: 1071,
        origin: 'HKT',
        stops: ['AUH', 'BKK', 'KUL'],
      },
    ],
  },
];

test('sort array by Time', () => {
  return expect(sortByTime(sortByTimeArray)).toBe(sortByTimeArray.reverse());
});

const sortByPriceArray = [
  {
    carrier: 'S7',
    price: 90263,
    segments: [
      {
        date: '2022-01-14T08:11:00.000Z',
        destination: 'HKT',
        duration: 1389,
        origin: 'MOW',
        stops: [],
      },
      {
        date: '2022-02-03T12:03:00.000Z',
        destination: 'MOW',
        duration: 1071,
        origin: 'HKT',
        stops: ['AUH', 'BKK', 'KUL'],
      },
    ],
  },
  {
    carrier: 'EK',
    price: 20895,
    segments: [
      {
        date: '2022-01-14T17:19:00.000Z',
        destination: 'HKT',
        duration: 1433,
        origin: 'MOW',
        stops: ['DXB', 'HKG'],
      },
      {
        date: '2022-02-03T12:11:00.000Z',
        destination: 'MOW',
        duration: 639,
        origin: 'HKT',
        stops: ['HKG', 'DXB', 'AUH'],
      },
    ],
  },
];

test('sort array by Price', () => {
  return expect(sortByPrice(sortByPriceArray)).toBe(sortByPriceArray.reverse());
});

test('find max value in Object', () => {
  return expect(maxValuesStops({ el: '3' })).toBe(3);
});

test('find hours and minutes from minutes', () => {
  expect(getTime(61)).toBe('1Ч 1М');
});
