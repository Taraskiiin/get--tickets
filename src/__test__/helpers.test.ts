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

it('should give to us array sorted by time', () => {
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

it('should give to us array sorted by price', () => {
  return expect(sortByPrice(sortByPriceArray)).toBe(sortByPriceArray.reverse());
});

it('should give to us max value in object', () => {
  return expect(maxValuesStops({ el: 'all' })).toBe('all');
});

it('should convert minutes in hours', () => {
  expect(getTime(61)).toBe('1Ч 1М');
});
