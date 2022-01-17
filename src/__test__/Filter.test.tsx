import React from 'react';

import Filter from '../components/Filter';

import renderWith from './RenderWith';

describe('<Filter /> testing', () => {
  it('should match a snapshot', () => {
    expect(renderWith.withRouterAndThemeProvider(<Filter />)).toMatchSnapshot();
  });
});
