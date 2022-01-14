import React from 'react';
import { NumberOfTransplants } from '../components';
import renderWith from './RenderWith';

describe('NumberOfTransplants testing', () => {
  it('Should render with Redux and ThemeProvider', () => {
    expect(
      renderWith.withReduxAndThemeProvider(<NumberOfTransplants />)
    ).toMatchSnapshot();
  });
});
