import React from 'react';
import renderWith from './RenderWith';
import Ticket from '../components/Ticket';
import { theme } from '../styles/theme';

const propsToTicketsComponent = {
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
};

describe('Ticket /> testing', () => {
  it('Should render with ThemeProvider', () => {
    expect(
      renderWith.withTheme(<Ticket {...propsToTicketsComponent} />, theme)
    ).toMatchSnapshot();
  });
});
