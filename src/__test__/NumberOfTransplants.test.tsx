import React from 'react';

import { NumberOfTransplants } from '../components';

import renderWith from './RenderWith';

describe('NumberOfTransplants testing', () => {
  it('should match a snapshot', () => {
    expect(
      renderWith.withRouterAndThemeProvider(<NumberOfTransplants />)
    ).toMatchSnapshot();
  });
});
