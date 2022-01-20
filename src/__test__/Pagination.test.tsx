import React from 'react';

import { Pagination } from '../components';

import renderWith from './RenderWith';

describe('<Pagination /> testing', () => {
  it('should match a snapshot', () => {
    expect(
      renderWith.withRouterAndThemeProvider(
        <Pagination
          ticketsPerPage={5}
          totalTickets={10}
          queryParamsState={{
            sortBy: 'price',
            page: 1,
            stops: 'all',
          }}
        />
      )
    ).toMatchSnapshot();
  });
});
