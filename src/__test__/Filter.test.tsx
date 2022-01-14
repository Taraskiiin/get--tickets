import React from 'react';
import Filter from '../components/Filter';
import renderWith from './RenderWith';

describe('<Filter /> testing', () => {
  it('Should render with Provider and ThemeProvider', () => {
    expect(renderWith.withRouterAndThemeProvider(<Filter />)).toMatchSnapshot();
  });
});
