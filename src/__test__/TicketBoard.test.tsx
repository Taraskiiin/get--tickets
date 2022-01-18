import React from 'react';

import { TicketBoard } from '../components';

import renderWith from './RenderWith';

describe('<TicketBoard /> testing', () => {
  it('should match a snapshot', () => {
    expect(
      renderWith.withRouterAndProviderAndThemeProvider(<TicketBoard />)
    ).toMatchSnapshot();
  });
});
