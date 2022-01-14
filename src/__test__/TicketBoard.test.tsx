import React from 'react';
import { TicketBoard } from '../components';
import renderWith from './RenderWith';

describe('<TicketBoard /> testing', () => {
  it('Should render with Redux and Router and ThemeProvider', () => {
    expect(
      renderWith.withRouterAndProviderAndThemeProvider(<TicketBoard />)
    ).toMatchSnapshot();
  });
});
